"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ChartComponent from "@/components/Chart";
import { Channels, Duration } from "@/utils/constants";
import type { SYMBOL } from "@/utils/constants";
import AskBids from "@/components/AskBidsTable";
import { findUserAmount } from "@/api/trade";
import OrdersPanel from "@/components/OrdersPanel";
import BuySell from "@/components/BuySell";
import { toDisplayPrice } from "@/utils/utils";
import { fetchPlatformProfit, type PlatformProfitResponse } from "@/api/profit";
import toast from "react-hot-toast";

export default function Trading() {
  const [duration, setDuration] = useState<Duration>(Duration.candles_1m);
  const [symbol, setSymbol] = useState<SYMBOL>(Channels.BTCUSDT);
  const [prices, setPrices] = useState({ askPrice: 0, bidPrice: 0 });
  const [platformProfit, setPlatformProfit] = useState<PlatformProfitResponse | null>(null);
  const refreshOrdersRef = useRef<(() => void) | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkdata() {
      try {
        const data = await findUserAmount();
        if (!data || !data.balance || data.error) {
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
          router.push("/signin");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        router.push("/signin");
      }
    }
    checkdata();
  }, [router]);

  useEffect(() => {
    const loadPlatformProfit = async () => {
      try {
        const data = await fetchPlatformProfit();
        setPlatformProfit(data);
      } catch (error) {
        console.error("Failed to load platform profit:", error);
      }
    };

    loadPlatformProfit();
    const interval = setInterval(loadPlatformProfit, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const WS_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL || "ws://localhost:8080";
    const token = localStorage.getItem("token");

    if (!token) return;

    const websocket = new WebSocket(WS_URL);

    websocket.onopen = () => {
      websocket.send(JSON.stringify({ type: "AUTH", token }));
    };

    websocket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);

        switch (message.type) {
          case "AUTHENTICATED":
            toast("Connected to live updates", { duration: 1500, icon: "🔔" });
            break;

          case "ORDER_OPENED":
            const openedOrder = message.data;
            toast.success(
              `Order Opened: ${openedOrder.type.toUpperCase()} ${openedOrder.asset} at $${openedOrder.openPrice.toFixed(2)}`,
              { duration: 5000 }
            );
            findUserAmount().catch(console.error);
            if (refreshOrdersRef.current) refreshOrdersRef.current();
            break;

          case "ORDER_CLOSED":
            const closedOrder = message.data;
            const pnl = closedOrder.pnl || 0;
            const pnlColor = pnl >= 0 ? "text-green-400" : "text-red-400";

            toast.custom(
              (t) => (
                <div className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md w-full bg-[#0d2137] shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-[#1e3a5f]`}>
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-[#e2e8f0]">Order Closed</p>
                        <p className="mt-1 text-sm text-[#94a3b8]">
                          {closedOrder.asset} {closedOrder.type.toUpperCase()} closed at ${closedOrder.closePrice?.toFixed(2)}
                        </p>
                        <p className={`mt-1 text-sm font-bold ${pnlColor}`}>
                          PnL: {pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-[#1e3a5f]">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-xl p-4 flex items-center justify-center text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0] focus:outline-none"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ),
              { duration: 6000 }
            );
            findUserAmount().catch(console.error);
            break;

          case "ORDER_LIQUIDATED":
            const liquidatedOrder = message.data;
            toast.error(
              `Order Liquidated: ${liquidatedOrder.asset} ${liquidatedOrder.type.toUpperCase()} at $${liquidatedOrder.closePrice?.toFixed(2)}`,
              { duration: 6000 }
            );
            findUserAmount().catch(console.error);
            break;

          case "PRICE_UPDATE":
            break;

          default:
            console.log("Unknown WebSocket message:", message);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    websocket.onerror = () => {
      toast.error("Connection error. Retrying...", { duration: 3000 });
    };

    return () => {
      if (websocket.readyState === WebSocket.OPEN) websocket.close();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050f1a] overflow-hidden flex flex-col">
      <div className="fixed inset-0 bg-[#050f1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0EA5E9]/8 via-[#0284c7]/4 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-[#0EA5E9]/6 via-[#0369a1]/3 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#1e3a5f]/10 via-[#0EA5E9]/4 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col p-4">
        <div className="bg-[#0a1929]/80 backdrop-blur-xl border border-[#1e3a5f] p-4 rounded-xl mb-4 flex gap-4 overflow-x-auto shadow-[0_0_20px_rgba(14,165,233,0.05)]">
          {([
            { channel: Channels.BTCUSDT, label: "BTC/USDT", change: "+2.4%", up: true },
            { channel: Channels.ETHUSDT, label: "ETH/USDT", change: "+1.9%", up: true },
            { channel: Channels.SOLUSDT, label: "SOL/USDT", change: "-0.8%", up: false },
          ] as const).map(({ channel, label, change, up }) => (
            <button
              key={channel}
              className={`px-4 py-2 rounded-lg transition-all ${
                symbol === channel
                  ? "bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/30"
                  : "text-[#e2e8f0] hover:bg-[#0d2137]/50 border border-[#1e3a5f]/50"
              }`}
              disabled={symbol === channel}
              onClick={() => setSymbol(channel)}
            >
              <div className="flex items-center">
                <span className="font-medium text-sm">{label}</span>
                <span className={`ml-2 text-xs px-2 py-1 rounded ${up ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                  {change}
                </span>
              </div>
            </button>
          ))}

          <div className="flex items-center gap-2 ml-auto">
            <div className="flex items-center bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 px-4 py-2 rounded-lg mr-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-[#0EA5E9]/20 w-7 h-7 rounded-lg">
                  <div className="w-2.5 h-2.5 bg-[#0EA5E9] rounded-full"></div>
                </div>
                <div>
                  <div className="text-[9px] text-[#0EA5E9]/70 font-medium uppercase tracking-wider">Platform Profit</div>
                  <div className="text-sm font-bold text-[#0EA5E9]">
                    {platformProfit ? `$${(platformProfit.totalProfit / 100).toFixed(2)}` : "$0.00"}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d2137]/60 backdrop-blur-sm rounded-lg p-1 flex border border-[#1e3a5f]">
              {([
                { d: Duration.candles_1m, label: "1m" },
                { d: Duration.candles_1d, label: "1d" },
                { d: Duration.candles_1w, label: "1w" },
              ] as const).map(({ d, label }) => (
                <button
                  key={d}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    duration === d
                      ? "bg-[#0EA5E9]/20 text-[#0EA5E9]"
                      : "text-[#94a3b8] hover:text-[#e2e8f0]"
                  }`}
                  disabled={duration === d}
                  onClick={() => setDuration(d)}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
                router.push("/signin");
              }}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors ml-2"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
          <div className="col-span-12 md:col-span-2 order-2 md:order-1 overflow-auto h-full">
            <div className="bg-[#0a1929]/80 backdrop-blur-xl rounded-xl border border-[#1e3a5f] p-4 h-full shadow-[0_0_20px_rgba(14,165,233,0.05)]">
              <h3 className="text-[#e2e8f0] text-sm font-medium mb-4 flex justify-between items-center">
                <span>Market Data</span>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-md">Live</span>
              </h3>
              <AskBids symbol={symbol} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-10 order-1 md:order-2 flex overflow-hidden h-[calc(100vh-130px)]">
            <div className="w-full h-full md:w-3/4 flex flex-col gap-4 pr-4">
              <div className="h-[65%] flex flex-col">
                <ChartComponent symbol={symbol} duration={duration} onPriceUpdate={setPrices} />
              </div>
              <div className="h-[35%]">
                <OrdersPanel onRefreshReady={(fn) => { refreshOrdersRef.current = fn; }} />
              </div>
            </div>

            <div className="w-full h-full md:w-1/4">
              <BuySell
                symbol={symbol}
                askPrice={toDisplayPrice(prices.askPrice)}
                bidPrice={toDisplayPrice(prices.bidPrice)}
                onOrderPlaced={refreshOrdersRef.current || undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
