
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ClosedOrder
 * 
 */
export type ClosedOrder = $Result.DefaultSelection<Prisma.$ClosedOrderPayload>
/**
 * Model UserSnapshot
 * 
 */
export type UserSnapshot = $Result.DefaultSelection<Prisma.$UserSnapshotPayload>
/**
 * Model OrderSnapshot
 * 
 */
export type OrderSnapshot = $Result.DefaultSelection<Prisma.$OrderSnapshotPayload>
/**
 * Model ActiveOrder
 * 
 */
export type ActiveOrder = $Result.DefaultSelection<Prisma.$ActiveOrderPayload>
/**
 * Model PlatformProfit
 * 
 */
export type PlatformProfit = $Result.DefaultSelection<Prisma.$PlatformProfitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Trades
 * const trades = await prisma.trade.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Trades
   * const trades = await prisma.trade.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.closedOrder`: Exposes CRUD operations for the **ClosedOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClosedOrders
    * const closedOrders = await prisma.closedOrder.findMany()
    * ```
    */
  get closedOrder(): Prisma.ClosedOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSnapshot`: Exposes CRUD operations for the **UserSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSnapshots
    * const userSnapshots = await prisma.userSnapshot.findMany()
    * ```
    */
  get userSnapshot(): Prisma.UserSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderSnapshot`: Exposes CRUD operations for the **OrderSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderSnapshots
    * const orderSnapshots = await prisma.orderSnapshot.findMany()
    * ```
    */
  get orderSnapshot(): Prisma.OrderSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activeOrder`: Exposes CRUD operations for the **ActiveOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActiveOrders
    * const activeOrders = await prisma.activeOrder.findMany()
    * ```
    */
  get activeOrder(): Prisma.ActiveOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformProfit`: Exposes CRUD operations for the **PlatformProfit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformProfits
    * const platformProfits = await prisma.platformProfit.findMany()
    * ```
    */
  get platformProfit(): Prisma.PlatformProfitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Trade: 'Trade',
    User: 'User',
    ClosedOrder: 'ClosedOrder',
    UserSnapshot: 'UserSnapshot',
    OrderSnapshot: 'OrderSnapshot',
    ActiveOrder: 'ActiveOrder',
    PlatformProfit: 'PlatformProfit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trade" | "user" | "closedOrder" | "userSnapshot" | "orderSnapshot" | "activeOrder" | "platformProfit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ClosedOrder: {
        payload: Prisma.$ClosedOrderPayload<ExtArgs>
        fields: Prisma.ClosedOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClosedOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClosedOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          findFirst: {
            args: Prisma.ClosedOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClosedOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          findMany: {
            args: Prisma.ClosedOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>[]
          }
          create: {
            args: Prisma.ClosedOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          createMany: {
            args: Prisma.ClosedOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClosedOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>[]
          }
          delete: {
            args: Prisma.ClosedOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          update: {
            args: Prisma.ClosedOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          deleteMany: {
            args: Prisma.ClosedOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClosedOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClosedOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>[]
          }
          upsert: {
            args: Prisma.ClosedOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClosedOrderPayload>
          }
          aggregate: {
            args: Prisma.ClosedOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClosedOrder>
          }
          groupBy: {
            args: Prisma.ClosedOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClosedOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClosedOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ClosedOrderCountAggregateOutputType> | number
          }
        }
      }
      UserSnapshot: {
        payload: Prisma.$UserSnapshotPayload<ExtArgs>
        fields: Prisma.UserSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          findFirst: {
            args: Prisma.UserSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          findMany: {
            args: Prisma.UserSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>[]
          }
          create: {
            args: Prisma.UserSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          createMany: {
            args: Prisma.UserSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>[]
          }
          delete: {
            args: Prisma.UserSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          update: {
            args: Prisma.UserSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.UserSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.UserSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSnapshotPayload>
          }
          aggregate: {
            args: Prisma.UserSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSnapshot>
          }
          groupBy: {
            args: Prisma.UserSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<UserSnapshotCountAggregateOutputType> | number
          }
        }
      }
      OrderSnapshot: {
        payload: Prisma.$OrderSnapshotPayload<ExtArgs>
        fields: Prisma.OrderSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          findFirst: {
            args: Prisma.OrderSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          findMany: {
            args: Prisma.OrderSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          create: {
            args: Prisma.OrderSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          createMany: {
            args: Prisma.OrderSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          delete: {
            args: Prisma.OrderSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          update: {
            args: Prisma.OrderSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.OrderSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.OrderSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          aggregate: {
            args: Prisma.OrderSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderSnapshot>
          }
          groupBy: {
            args: Prisma.OrderSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<OrderSnapshotCountAggregateOutputType> | number
          }
        }
      }
      ActiveOrder: {
        payload: Prisma.$ActiveOrderPayload<ExtArgs>
        fields: Prisma.ActiveOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiveOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiveOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          findFirst: {
            args: Prisma.ActiveOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiveOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          findMany: {
            args: Prisma.ActiveOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>[]
          }
          create: {
            args: Prisma.ActiveOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          createMany: {
            args: Prisma.ActiveOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiveOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>[]
          }
          delete: {
            args: Prisma.ActiveOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          update: {
            args: Prisma.ActiveOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          deleteMany: {
            args: Prisma.ActiveOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiveOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiveOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>[]
          }
          upsert: {
            args: Prisma.ActiveOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActiveOrderPayload>
          }
          aggregate: {
            args: Prisma.ActiveOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActiveOrder>
          }
          groupBy: {
            args: Prisma.ActiveOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiveOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiveOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ActiveOrderCountAggregateOutputType> | number
          }
        }
      }
      PlatformProfit: {
        payload: Prisma.$PlatformProfitPayload<ExtArgs>
        fields: Prisma.PlatformProfitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformProfitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformProfitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          findFirst: {
            args: Prisma.PlatformProfitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformProfitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          findMany: {
            args: Prisma.PlatformProfitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>[]
          }
          create: {
            args: Prisma.PlatformProfitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          createMany: {
            args: Prisma.PlatformProfitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformProfitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>[]
          }
          delete: {
            args: Prisma.PlatformProfitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          update: {
            args: Prisma.PlatformProfitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          deleteMany: {
            args: Prisma.PlatformProfitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformProfitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformProfitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>[]
          }
          upsert: {
            args: Prisma.PlatformProfitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformProfitPayload>
          }
          aggregate: {
            args: Prisma.PlatformProfitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformProfit>
          }
          groupBy: {
            args: Prisma.PlatformProfitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformProfitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformProfitCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformProfitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    trade?: TradeOmit
    user?: UserOmit
    closedOrder?: ClosedOrderOmit
    userSnapshot?: UserSnapshotOmit
    orderSnapshot?: OrderSnapshotOmit
    activeOrder?: ActiveOrderOmit
    platformProfit?: PlatformProfitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    id: number | null
    price: number | null
    tradeId: number | null
    quantity: Decimal | null
  }

  export type TradeSumAggregateOutputType = {
    id: bigint | null
    price: bigint | null
    tradeId: bigint | null
    quantity: Decimal | null
  }

  export type TradeMinAggregateOutputType = {
    id: bigint | null
    symbol: string | null
    price: bigint | null
    tradeId: bigint | null
    timestamp: Date | null
    quantity: Decimal | null
  }

  export type TradeMaxAggregateOutputType = {
    id: bigint | null
    symbol: string | null
    price: bigint | null
    tradeId: bigint | null
    timestamp: Date | null
    quantity: Decimal | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    symbol: number
    price: number
    tradeId: number
    timestamp: number
    quantity: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    id?: true
    price?: true
    tradeId?: true
    quantity?: true
  }

  export type TradeSumAggregateInputType = {
    id?: true
    price?: true
    tradeId?: true
    quantity?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    tradeId?: true
    timestamp?: true
    quantity?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    tradeId?: true
    timestamp?: true
    quantity?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    tradeId?: true
    timestamp?: true
    quantity?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: bigint
    symbol: string
    price: bigint
    tradeId: bigint
    timestamp: Date
    quantity: Decimal
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    tradeId?: boolean
    timestamp?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    tradeId?: boolean
    timestamp?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    tradeId?: boolean
    timestamp?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    symbol?: boolean
    price?: boolean
    tradeId?: boolean
    timestamp?: boolean
    quantity?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "price" | "tradeId" | "timestamp" | "quantity", ExtArgs["result"]["trade"]>

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      symbol: string
      price: bigint
      tradeId: bigint
      timestamp: Date
      quantity: Prisma.Decimal
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'BigInt'>
    readonly symbol: FieldRef<"Trade", 'String'>
    readonly price: FieldRef<"Trade", 'BigInt'>
    readonly tradeId: FieldRef<"Trade", 'BigInt'>
    readonly timestamp: FieldRef<"Trade", 'DateTime'>
    readonly quantity: FieldRef<"Trade", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balanceCents: number | null
  }

  export type UserSumAggregateOutputType = {
    balanceCents: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    email: string | null
    password: string | null
    balanceCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    providerId: string | null
    emailVerified: boolean | null
    avatarUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    password: string | null
    balanceCents: number | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    providerId: string | null
    emailVerified: boolean | null
    avatarUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    balanceCents: number
    createdAt: number
    updatedAt: number
    provider: number
    providerId: number
    emailVerified: number
    avatarUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balanceCents?: true
  }

  export type UserSumAggregateInputType = {
    balanceCents?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    balanceCents?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    emailVerified?: true
    avatarUrl?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    balanceCents?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    emailVerified?: true
    avatarUrl?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    balanceCents?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    emailVerified?: true
    avatarUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    email: string
    password: string
    balanceCents: number
    createdAt: Date
    updatedAt: Date
    provider: string | null
    providerId: string | null
    emailVerified: boolean
    avatarUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    balanceCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    emailVerified?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    balanceCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    emailVerified?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    balanceCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    emailVerified?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    password?: boolean
    balanceCents?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    emailVerified?: boolean
    avatarUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "password" | "balanceCents" | "createdAt" | "updatedAt" | "provider" | "providerId" | "emailVerified" | "avatarUrl", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      password: string
      balanceCents: number
      createdAt: Date
      updatedAt: Date
      provider: string | null
      providerId: string | null
      emailVerified: boolean
      avatarUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly balanceCents: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ClosedOrder
   */

  export type AggregateClosedOrder = {
    _count: ClosedOrderCountAggregateOutputType | null
    _avg: ClosedOrderAvgAggregateOutputType | null
    _sum: ClosedOrderSumAggregateOutputType | null
    _min: ClosedOrderMinAggregateOutputType | null
    _max: ClosedOrderMaxAggregateOutputType | null
  }

  export type ClosedOrderAvgAggregateOutputType = {
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    closePrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    pnl: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ClosedOrderSumAggregateOutputType = {
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    closePrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    pnl: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ClosedOrderMinAggregateOutputType = {
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    closePrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    pnl: number | null
    closeReason: string | null
    closeMessage: string | null
    openedAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ClosedOrderMaxAggregateOutputType = {
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    closePrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    pnl: number | null
    closeReason: string | null
    closeMessage: string | null
    openedAt: Date | null
    closedAt: Date | null
    createdAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ClosedOrderCountAggregateOutputType = {
    orderId: number
    userId: number
    asset: number
    type: number
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    closePrice: number
    liquidationPrice: number
    takeProfit: number
    stopLoss: number
    pnl: number
    closeReason: number
    closeMessage: number
    openedAt: number
    closedAt: number
    createdAt: number
    trailingStopLossEnabled: number
    trailingStopLossDistance: number
    trailingStopLossHighestPrice: number
    trailingStopLossLowestPrice: number
    _all: number
  }


  export type ClosedOrderAvgAggregateInputType = {
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    closePrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    pnl?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ClosedOrderSumAggregateInputType = {
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    closePrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    pnl?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ClosedOrderMinAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    closePrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    pnl?: true
    closeReason?: true
    closeMessage?: true
    openedAt?: true
    closedAt?: true
    createdAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ClosedOrderMaxAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    closePrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    pnl?: true
    closeReason?: true
    closeMessage?: true
    openedAt?: true
    closedAt?: true
    createdAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ClosedOrderCountAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    closePrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    pnl?: true
    closeReason?: true
    closeMessage?: true
    openedAt?: true
    closedAt?: true
    createdAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
    _all?: true
  }

  export type ClosedOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedOrder to aggregate.
     */
    where?: ClosedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedOrders to fetch.
     */
    orderBy?: ClosedOrderOrderByWithRelationInput | ClosedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClosedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClosedOrders
    **/
    _count?: true | ClosedOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClosedOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClosedOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClosedOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClosedOrderMaxAggregateInputType
  }

  export type GetClosedOrderAggregateType<T extends ClosedOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateClosedOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClosedOrder[P]>
      : GetScalarType<T[P], AggregateClosedOrder[P]>
  }




  export type ClosedOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClosedOrderWhereInput
    orderBy?: ClosedOrderOrderByWithAggregationInput | ClosedOrderOrderByWithAggregationInput[]
    by: ClosedOrderScalarFieldEnum[] | ClosedOrderScalarFieldEnum
    having?: ClosedOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClosedOrderCountAggregateInputType | true
    _avg?: ClosedOrderAvgAggregateInputType
    _sum?: ClosedOrderSumAggregateInputType
    _min?: ClosedOrderMinAggregateInputType
    _max?: ClosedOrderMaxAggregateInputType
  }

  export type ClosedOrderGroupByOutputType = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    closePrice: number
    liquidationPrice: number
    takeProfit: number | null
    stopLoss: number | null
    pnl: number
    closeReason: string
    closeMessage: string | null
    openedAt: Date
    closedAt: Date
    createdAt: Date
    trailingStopLossEnabled: boolean
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
    _count: ClosedOrderCountAggregateOutputType | null
    _avg: ClosedOrderAvgAggregateOutputType | null
    _sum: ClosedOrderSumAggregateOutputType | null
    _min: ClosedOrderMinAggregateOutputType | null
    _max: ClosedOrderMaxAggregateOutputType | null
  }

  type GetClosedOrderGroupByPayload<T extends ClosedOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClosedOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClosedOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClosedOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ClosedOrderGroupByOutputType[P]>
        }
      >
    >


  export type ClosedOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    closePrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    pnl?: boolean
    closeReason?: boolean
    closeMessage?: boolean
    openedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["closedOrder"]>

  export type ClosedOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    closePrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    pnl?: boolean
    closeReason?: boolean
    closeMessage?: boolean
    openedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["closedOrder"]>

  export type ClosedOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    closePrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    pnl?: boolean
    closeReason?: boolean
    closeMessage?: boolean
    openedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["closedOrder"]>

  export type ClosedOrderSelectScalar = {
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    closePrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    pnl?: boolean
    closeReason?: boolean
    closeMessage?: boolean
    openedAt?: boolean
    closedAt?: boolean
    createdAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }

  export type ClosedOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "userId" | "asset" | "type" | "margin" | "initialMargin" | "addedMargin" | "leverage" | "openPrice" | "closePrice" | "liquidationPrice" | "takeProfit" | "stopLoss" | "pnl" | "closeReason" | "closeMessage" | "openedAt" | "closedAt" | "createdAt" | "trailingStopLossEnabled" | "trailingStopLossDistance" | "trailingStopLossHighestPrice" | "trailingStopLossLowestPrice", ExtArgs["result"]["closedOrder"]>

  export type $ClosedOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClosedOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      userId: string
      asset: string
      type: string
      margin: number
      initialMargin: number
      addedMargin: number
      leverage: number
      openPrice: number
      closePrice: number
      liquidationPrice: number
      takeProfit: number | null
      stopLoss: number | null
      pnl: number
      closeReason: string
      closeMessage: string | null
      openedAt: Date
      closedAt: Date
      createdAt: Date
      trailingStopLossEnabled: boolean
      trailingStopLossDistance: number | null
      trailingStopLossHighestPrice: number | null
      trailingStopLossLowestPrice: number | null
    }, ExtArgs["result"]["closedOrder"]>
    composites: {}
  }

  type ClosedOrderGetPayload<S extends boolean | null | undefined | ClosedOrderDefaultArgs> = $Result.GetResult<Prisma.$ClosedOrderPayload, S>

  type ClosedOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClosedOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClosedOrderCountAggregateInputType | true
    }

  export interface ClosedOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClosedOrder'], meta: { name: 'ClosedOrder' } }
    /**
     * Find zero or one ClosedOrder that matches the filter.
     * @param {ClosedOrderFindUniqueArgs} args - Arguments to find a ClosedOrder
     * @example
     * // Get one ClosedOrder
     * const closedOrder = await prisma.closedOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClosedOrderFindUniqueArgs>(args: SelectSubset<T, ClosedOrderFindUniqueArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClosedOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClosedOrderFindUniqueOrThrowArgs} args - Arguments to find a ClosedOrder
     * @example
     * // Get one ClosedOrder
     * const closedOrder = await prisma.closedOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClosedOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ClosedOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderFindFirstArgs} args - Arguments to find a ClosedOrder
     * @example
     * // Get one ClosedOrder
     * const closedOrder = await prisma.closedOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClosedOrderFindFirstArgs>(args?: SelectSubset<T, ClosedOrderFindFirstArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClosedOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderFindFirstOrThrowArgs} args - Arguments to find a ClosedOrder
     * @example
     * // Get one ClosedOrder
     * const closedOrder = await prisma.closedOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClosedOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ClosedOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClosedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClosedOrders
     * const closedOrders = await prisma.closedOrder.findMany()
     * 
     * // Get first 10 ClosedOrders
     * const closedOrders = await prisma.closedOrder.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const closedOrderWithOrderIdOnly = await prisma.closedOrder.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends ClosedOrderFindManyArgs>(args?: SelectSubset<T, ClosedOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClosedOrder.
     * @param {ClosedOrderCreateArgs} args - Arguments to create a ClosedOrder.
     * @example
     * // Create one ClosedOrder
     * const ClosedOrder = await prisma.closedOrder.create({
     *   data: {
     *     // ... data to create a ClosedOrder
     *   }
     * })
     * 
     */
    create<T extends ClosedOrderCreateArgs>(args: SelectSubset<T, ClosedOrderCreateArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClosedOrders.
     * @param {ClosedOrderCreateManyArgs} args - Arguments to create many ClosedOrders.
     * @example
     * // Create many ClosedOrders
     * const closedOrder = await prisma.closedOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClosedOrderCreateManyArgs>(args?: SelectSubset<T, ClosedOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClosedOrders and returns the data saved in the database.
     * @param {ClosedOrderCreateManyAndReturnArgs} args - Arguments to create many ClosedOrders.
     * @example
     * // Create many ClosedOrders
     * const closedOrder = await prisma.closedOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClosedOrders and only return the `orderId`
     * const closedOrderWithOrderIdOnly = await prisma.closedOrder.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClosedOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ClosedOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClosedOrder.
     * @param {ClosedOrderDeleteArgs} args - Arguments to delete one ClosedOrder.
     * @example
     * // Delete one ClosedOrder
     * const ClosedOrder = await prisma.closedOrder.delete({
     *   where: {
     *     // ... filter to delete one ClosedOrder
     *   }
     * })
     * 
     */
    delete<T extends ClosedOrderDeleteArgs>(args: SelectSubset<T, ClosedOrderDeleteArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClosedOrder.
     * @param {ClosedOrderUpdateArgs} args - Arguments to update one ClosedOrder.
     * @example
     * // Update one ClosedOrder
     * const closedOrder = await prisma.closedOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClosedOrderUpdateArgs>(args: SelectSubset<T, ClosedOrderUpdateArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClosedOrders.
     * @param {ClosedOrderDeleteManyArgs} args - Arguments to filter ClosedOrders to delete.
     * @example
     * // Delete a few ClosedOrders
     * const { count } = await prisma.closedOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClosedOrderDeleteManyArgs>(args?: SelectSubset<T, ClosedOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClosedOrders
     * const closedOrder = await prisma.closedOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClosedOrderUpdateManyArgs>(args: SelectSubset<T, ClosedOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosedOrders and returns the data updated in the database.
     * @param {ClosedOrderUpdateManyAndReturnArgs} args - Arguments to update many ClosedOrders.
     * @example
     * // Update many ClosedOrders
     * const closedOrder = await prisma.closedOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClosedOrders and only return the `orderId`
     * const closedOrderWithOrderIdOnly = await prisma.closedOrder.updateManyAndReturn({
     *   select: { orderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClosedOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ClosedOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClosedOrder.
     * @param {ClosedOrderUpsertArgs} args - Arguments to update or create a ClosedOrder.
     * @example
     * // Update or create a ClosedOrder
     * const closedOrder = await prisma.closedOrder.upsert({
     *   create: {
     *     // ... data to create a ClosedOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClosedOrder we want to update
     *   }
     * })
     */
    upsert<T extends ClosedOrderUpsertArgs>(args: SelectSubset<T, ClosedOrderUpsertArgs<ExtArgs>>): Prisma__ClosedOrderClient<$Result.GetResult<Prisma.$ClosedOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClosedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderCountArgs} args - Arguments to filter ClosedOrders to count.
     * @example
     * // Count the number of ClosedOrders
     * const count = await prisma.closedOrder.count({
     *   where: {
     *     // ... the filter for the ClosedOrders we want to count
     *   }
     * })
    **/
    count<T extends ClosedOrderCountArgs>(
      args?: Subset<T, ClosedOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClosedOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClosedOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClosedOrderAggregateArgs>(args: Subset<T, ClosedOrderAggregateArgs>): Prisma.PrismaPromise<GetClosedOrderAggregateType<T>>

    /**
     * Group by ClosedOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosedOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClosedOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClosedOrderGroupByArgs['orderBy'] }
        : { orderBy?: ClosedOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClosedOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClosedOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClosedOrder model
   */
  readonly fields: ClosedOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClosedOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClosedOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClosedOrder model
   */
  interface ClosedOrderFieldRefs {
    readonly orderId: FieldRef<"ClosedOrder", 'String'>
    readonly userId: FieldRef<"ClosedOrder", 'String'>
    readonly asset: FieldRef<"ClosedOrder", 'String'>
    readonly type: FieldRef<"ClosedOrder", 'String'>
    readonly margin: FieldRef<"ClosedOrder", 'Int'>
    readonly initialMargin: FieldRef<"ClosedOrder", 'Int'>
    readonly addedMargin: FieldRef<"ClosedOrder", 'Int'>
    readonly leverage: FieldRef<"ClosedOrder", 'Int'>
    readonly openPrice: FieldRef<"ClosedOrder", 'Int'>
    readonly closePrice: FieldRef<"ClosedOrder", 'Int'>
    readonly liquidationPrice: FieldRef<"ClosedOrder", 'Int'>
    readonly takeProfit: FieldRef<"ClosedOrder", 'Int'>
    readonly stopLoss: FieldRef<"ClosedOrder", 'Int'>
    readonly pnl: FieldRef<"ClosedOrder", 'Int'>
    readonly closeReason: FieldRef<"ClosedOrder", 'String'>
    readonly closeMessage: FieldRef<"ClosedOrder", 'String'>
    readonly openedAt: FieldRef<"ClosedOrder", 'DateTime'>
    readonly closedAt: FieldRef<"ClosedOrder", 'DateTime'>
    readonly createdAt: FieldRef<"ClosedOrder", 'DateTime'>
    readonly trailingStopLossEnabled: FieldRef<"ClosedOrder", 'Boolean'>
    readonly trailingStopLossDistance: FieldRef<"ClosedOrder", 'Int'>
    readonly trailingStopLossHighestPrice: FieldRef<"ClosedOrder", 'Int'>
    readonly trailingStopLossLowestPrice: FieldRef<"ClosedOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClosedOrder findUnique
   */
  export type ClosedOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter, which ClosedOrder to fetch.
     */
    where: ClosedOrderWhereUniqueInput
  }

  /**
   * ClosedOrder findUniqueOrThrow
   */
  export type ClosedOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter, which ClosedOrder to fetch.
     */
    where: ClosedOrderWhereUniqueInput
  }

  /**
   * ClosedOrder findFirst
   */
  export type ClosedOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter, which ClosedOrder to fetch.
     */
    where?: ClosedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedOrders to fetch.
     */
    orderBy?: ClosedOrderOrderByWithRelationInput | ClosedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedOrders.
     */
    cursor?: ClosedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedOrders.
     */
    distinct?: ClosedOrderScalarFieldEnum | ClosedOrderScalarFieldEnum[]
  }

  /**
   * ClosedOrder findFirstOrThrow
   */
  export type ClosedOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter, which ClosedOrder to fetch.
     */
    where?: ClosedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedOrders to fetch.
     */
    orderBy?: ClosedOrderOrderByWithRelationInput | ClosedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosedOrders.
     */
    cursor?: ClosedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedOrders.
     */
    distinct?: ClosedOrderScalarFieldEnum | ClosedOrderScalarFieldEnum[]
  }

  /**
   * ClosedOrder findMany
   */
  export type ClosedOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter, which ClosedOrders to fetch.
     */
    where?: ClosedOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosedOrders to fetch.
     */
    orderBy?: ClosedOrderOrderByWithRelationInput | ClosedOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClosedOrders.
     */
    cursor?: ClosedOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosedOrders.
     */
    distinct?: ClosedOrderScalarFieldEnum | ClosedOrderScalarFieldEnum[]
  }

  /**
   * ClosedOrder create
   */
  export type ClosedOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a ClosedOrder.
     */
    data: XOR<ClosedOrderCreateInput, ClosedOrderUncheckedCreateInput>
  }

  /**
   * ClosedOrder createMany
   */
  export type ClosedOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClosedOrders.
     */
    data: ClosedOrderCreateManyInput | ClosedOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClosedOrder createManyAndReturn
   */
  export type ClosedOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ClosedOrders.
     */
    data: ClosedOrderCreateManyInput | ClosedOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClosedOrder update
   */
  export type ClosedOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a ClosedOrder.
     */
    data: XOR<ClosedOrderUpdateInput, ClosedOrderUncheckedUpdateInput>
    /**
     * Choose, which ClosedOrder to update.
     */
    where: ClosedOrderWhereUniqueInput
  }

  /**
   * ClosedOrder updateMany
   */
  export type ClosedOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClosedOrders.
     */
    data: XOR<ClosedOrderUpdateManyMutationInput, ClosedOrderUncheckedUpdateManyInput>
    /**
     * Filter which ClosedOrders to update
     */
    where?: ClosedOrderWhereInput
    /**
     * Limit how many ClosedOrders to update.
     */
    limit?: number
  }

  /**
   * ClosedOrder updateManyAndReturn
   */
  export type ClosedOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * The data used to update ClosedOrders.
     */
    data: XOR<ClosedOrderUpdateManyMutationInput, ClosedOrderUncheckedUpdateManyInput>
    /**
     * Filter which ClosedOrders to update
     */
    where?: ClosedOrderWhereInput
    /**
     * Limit how many ClosedOrders to update.
     */
    limit?: number
  }

  /**
   * ClosedOrder upsert
   */
  export type ClosedOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the ClosedOrder to update in case it exists.
     */
    where: ClosedOrderWhereUniqueInput
    /**
     * In case the ClosedOrder found by the `where` argument doesn't exist, create a new ClosedOrder with this data.
     */
    create: XOR<ClosedOrderCreateInput, ClosedOrderUncheckedCreateInput>
    /**
     * In case the ClosedOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClosedOrderUpdateInput, ClosedOrderUncheckedUpdateInput>
  }

  /**
   * ClosedOrder delete
   */
  export type ClosedOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
    /**
     * Filter which ClosedOrder to delete.
     */
    where: ClosedOrderWhereUniqueInput
  }

  /**
   * ClosedOrder deleteMany
   */
  export type ClosedOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClosedOrders to delete
     */
    where?: ClosedOrderWhereInput
    /**
     * Limit how many ClosedOrders to delete.
     */
    limit?: number
  }

  /**
   * ClosedOrder without action
   */
  export type ClosedOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClosedOrder
     */
    select?: ClosedOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClosedOrder
     */
    omit?: ClosedOrderOmit<ExtArgs> | null
  }


  /**
   * Model UserSnapshot
   */

  export type AggregateUserSnapshot = {
    _count: UserSnapshotCountAggregateOutputType | null
    _avg: UserSnapshotAvgAggregateOutputType | null
    _sum: UserSnapshotSumAggregateOutputType | null
    _min: UserSnapshotMinAggregateOutputType | null
    _max: UserSnapshotMaxAggregateOutputType | null
  }

  export type UserSnapshotAvgAggregateOutputType = {
    id: number | null
    balanceCents: number | null
  }

  export type UserSnapshotSumAggregateOutputType = {
    id: number | null
    balanceCents: number | null
  }

  export type UserSnapshotMinAggregateOutputType = {
    id: number | null
    userId: string | null
    balanceCents: number | null
    snapshotAt: Date | null
  }

  export type UserSnapshotMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    balanceCents: number | null
    snapshotAt: Date | null
  }

  export type UserSnapshotCountAggregateOutputType = {
    id: number
    userId: number
    balanceCents: number
    snapshotAt: number
    _all: number
  }


  export type UserSnapshotAvgAggregateInputType = {
    id?: true
    balanceCents?: true
  }

  export type UserSnapshotSumAggregateInputType = {
    id?: true
    balanceCents?: true
  }

  export type UserSnapshotMinAggregateInputType = {
    id?: true
    userId?: true
    balanceCents?: true
    snapshotAt?: true
  }

  export type UserSnapshotMaxAggregateInputType = {
    id?: true
    userId?: true
    balanceCents?: true
    snapshotAt?: true
  }

  export type UserSnapshotCountAggregateInputType = {
    id?: true
    userId?: true
    balanceCents?: true
    snapshotAt?: true
    _all?: true
  }

  export type UserSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSnapshot to aggregate.
     */
    where?: UserSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSnapshots to fetch.
     */
    orderBy?: UserSnapshotOrderByWithRelationInput | UserSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSnapshots
    **/
    _count?: true | UserSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSnapshotMaxAggregateInputType
  }

  export type GetUserSnapshotAggregateType<T extends UserSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSnapshot[P]>
      : GetScalarType<T[P], AggregateUserSnapshot[P]>
  }




  export type UserSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSnapshotWhereInput
    orderBy?: UserSnapshotOrderByWithAggregationInput | UserSnapshotOrderByWithAggregationInput[]
    by: UserSnapshotScalarFieldEnum[] | UserSnapshotScalarFieldEnum
    having?: UserSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSnapshotCountAggregateInputType | true
    _avg?: UserSnapshotAvgAggregateInputType
    _sum?: UserSnapshotSumAggregateInputType
    _min?: UserSnapshotMinAggregateInputType
    _max?: UserSnapshotMaxAggregateInputType
  }

  export type UserSnapshotGroupByOutputType = {
    id: number
    userId: string
    balanceCents: number
    snapshotAt: Date
    _count: UserSnapshotCountAggregateOutputType | null
    _avg: UserSnapshotAvgAggregateOutputType | null
    _sum: UserSnapshotSumAggregateOutputType | null
    _min: UserSnapshotMinAggregateOutputType | null
    _max: UserSnapshotMaxAggregateOutputType | null
  }

  type GetUserSnapshotGroupByPayload<T extends UserSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], UserSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type UserSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balanceCents?: boolean
    snapshotAt?: boolean
  }, ExtArgs["result"]["userSnapshot"]>

  export type UserSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balanceCents?: boolean
    snapshotAt?: boolean
  }, ExtArgs["result"]["userSnapshot"]>

  export type UserSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balanceCents?: boolean
    snapshotAt?: boolean
  }, ExtArgs["result"]["userSnapshot"]>

  export type UserSnapshotSelectScalar = {
    id?: boolean
    userId?: boolean
    balanceCents?: boolean
    snapshotAt?: boolean
  }

  export type UserSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balanceCents" | "snapshotAt", ExtArgs["result"]["userSnapshot"]>

  export type $UserSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      balanceCents: number
      snapshotAt: Date
    }, ExtArgs["result"]["userSnapshot"]>
    composites: {}
  }

  type UserSnapshotGetPayload<S extends boolean | null | undefined | UserSnapshotDefaultArgs> = $Result.GetResult<Prisma.$UserSnapshotPayload, S>

  type UserSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSnapshotCountAggregateInputType | true
    }

  export interface UserSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSnapshot'], meta: { name: 'UserSnapshot' } }
    /**
     * Find zero or one UserSnapshot that matches the filter.
     * @param {UserSnapshotFindUniqueArgs} args - Arguments to find a UserSnapshot
     * @example
     * // Get one UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSnapshotFindUniqueArgs>(args: SelectSubset<T, UserSnapshotFindUniqueArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSnapshotFindUniqueOrThrowArgs} args - Arguments to find a UserSnapshot
     * @example
     * // Get one UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotFindFirstArgs} args - Arguments to find a UserSnapshot
     * @example
     * // Get one UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSnapshotFindFirstArgs>(args?: SelectSubset<T, UserSnapshotFindFirstArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotFindFirstOrThrowArgs} args - Arguments to find a UserSnapshot
     * @example
     * // Get one UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSnapshots
     * const userSnapshots = await prisma.userSnapshot.findMany()
     * 
     * // Get first 10 UserSnapshots
     * const userSnapshots = await prisma.userSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSnapshotWithIdOnly = await prisma.userSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSnapshotFindManyArgs>(args?: SelectSubset<T, UserSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSnapshot.
     * @param {UserSnapshotCreateArgs} args - Arguments to create a UserSnapshot.
     * @example
     * // Create one UserSnapshot
     * const UserSnapshot = await prisma.userSnapshot.create({
     *   data: {
     *     // ... data to create a UserSnapshot
     *   }
     * })
     * 
     */
    create<T extends UserSnapshotCreateArgs>(args: SelectSubset<T, UserSnapshotCreateArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSnapshots.
     * @param {UserSnapshotCreateManyArgs} args - Arguments to create many UserSnapshots.
     * @example
     * // Create many UserSnapshots
     * const userSnapshot = await prisma.userSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSnapshotCreateManyArgs>(args?: SelectSubset<T, UserSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSnapshots and returns the data saved in the database.
     * @param {UserSnapshotCreateManyAndReturnArgs} args - Arguments to create many UserSnapshots.
     * @example
     * // Create many UserSnapshots
     * const userSnapshot = await prisma.userSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSnapshots and only return the `id`
     * const userSnapshotWithIdOnly = await prisma.userSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSnapshot.
     * @param {UserSnapshotDeleteArgs} args - Arguments to delete one UserSnapshot.
     * @example
     * // Delete one UserSnapshot
     * const UserSnapshot = await prisma.userSnapshot.delete({
     *   where: {
     *     // ... filter to delete one UserSnapshot
     *   }
     * })
     * 
     */
    delete<T extends UserSnapshotDeleteArgs>(args: SelectSubset<T, UserSnapshotDeleteArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSnapshot.
     * @param {UserSnapshotUpdateArgs} args - Arguments to update one UserSnapshot.
     * @example
     * // Update one UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSnapshotUpdateArgs>(args: SelectSubset<T, UserSnapshotUpdateArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSnapshots.
     * @param {UserSnapshotDeleteManyArgs} args - Arguments to filter UserSnapshots to delete.
     * @example
     * // Delete a few UserSnapshots
     * const { count } = await prisma.userSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSnapshotDeleteManyArgs>(args?: SelectSubset<T, UserSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSnapshots
     * const userSnapshot = await prisma.userSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSnapshotUpdateManyArgs>(args: SelectSubset<T, UserSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSnapshots and returns the data updated in the database.
     * @param {UserSnapshotUpdateManyAndReturnArgs} args - Arguments to update many UserSnapshots.
     * @example
     * // Update many UserSnapshots
     * const userSnapshot = await prisma.userSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSnapshots and only return the `id`
     * const userSnapshotWithIdOnly = await prisma.userSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSnapshot.
     * @param {UserSnapshotUpsertArgs} args - Arguments to update or create a UserSnapshot.
     * @example
     * // Update or create a UserSnapshot
     * const userSnapshot = await prisma.userSnapshot.upsert({
     *   create: {
     *     // ... data to create a UserSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends UserSnapshotUpsertArgs>(args: SelectSubset<T, UserSnapshotUpsertArgs<ExtArgs>>): Prisma__UserSnapshotClient<$Result.GetResult<Prisma.$UserSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotCountArgs} args - Arguments to filter UserSnapshots to count.
     * @example
     * // Count the number of UserSnapshots
     * const count = await prisma.userSnapshot.count({
     *   where: {
     *     // ... the filter for the UserSnapshots we want to count
     *   }
     * })
    **/
    count<T extends UserSnapshotCountArgs>(
      args?: Subset<T, UserSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSnapshotAggregateArgs>(args: Subset<T, UserSnapshotAggregateArgs>): Prisma.PrismaPromise<GetUserSnapshotAggregateType<T>>

    /**
     * Group by UserSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: UserSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSnapshot model
   */
  readonly fields: UserSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSnapshot model
   */
  interface UserSnapshotFieldRefs {
    readonly id: FieldRef<"UserSnapshot", 'Int'>
    readonly userId: FieldRef<"UserSnapshot", 'String'>
    readonly balanceCents: FieldRef<"UserSnapshot", 'Int'>
    readonly snapshotAt: FieldRef<"UserSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSnapshot findUnique
   */
  export type UserSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which UserSnapshot to fetch.
     */
    where: UserSnapshotWhereUniqueInput
  }

  /**
   * UserSnapshot findUniqueOrThrow
   */
  export type UserSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which UserSnapshot to fetch.
     */
    where: UserSnapshotWhereUniqueInput
  }

  /**
   * UserSnapshot findFirst
   */
  export type UserSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which UserSnapshot to fetch.
     */
    where?: UserSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSnapshots to fetch.
     */
    orderBy?: UserSnapshotOrderByWithRelationInput | UserSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSnapshots.
     */
    cursor?: UserSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSnapshots.
     */
    distinct?: UserSnapshotScalarFieldEnum | UserSnapshotScalarFieldEnum[]
  }

  /**
   * UserSnapshot findFirstOrThrow
   */
  export type UserSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which UserSnapshot to fetch.
     */
    where?: UserSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSnapshots to fetch.
     */
    orderBy?: UserSnapshotOrderByWithRelationInput | UserSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSnapshots.
     */
    cursor?: UserSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSnapshots.
     */
    distinct?: UserSnapshotScalarFieldEnum | UserSnapshotScalarFieldEnum[]
  }

  /**
   * UserSnapshot findMany
   */
  export type UserSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which UserSnapshots to fetch.
     */
    where?: UserSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSnapshots to fetch.
     */
    orderBy?: UserSnapshotOrderByWithRelationInput | UserSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSnapshots.
     */
    cursor?: UserSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSnapshots.
     */
    distinct?: UserSnapshotScalarFieldEnum | UserSnapshotScalarFieldEnum[]
  }

  /**
   * UserSnapshot create
   */
  export type UserSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSnapshot.
     */
    data: XOR<UserSnapshotCreateInput, UserSnapshotUncheckedCreateInput>
  }

  /**
   * UserSnapshot createMany
   */
  export type UserSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSnapshots.
     */
    data: UserSnapshotCreateManyInput | UserSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSnapshot createManyAndReturn
   */
  export type UserSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many UserSnapshots.
     */
    data: UserSnapshotCreateManyInput | UserSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSnapshot update
   */
  export type UserSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSnapshot.
     */
    data: XOR<UserSnapshotUpdateInput, UserSnapshotUncheckedUpdateInput>
    /**
     * Choose, which UserSnapshot to update.
     */
    where: UserSnapshotWhereUniqueInput
  }

  /**
   * UserSnapshot updateMany
   */
  export type UserSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSnapshots.
     */
    data: XOR<UserSnapshotUpdateManyMutationInput, UserSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which UserSnapshots to update
     */
    where?: UserSnapshotWhereInput
    /**
     * Limit how many UserSnapshots to update.
     */
    limit?: number
  }

  /**
   * UserSnapshot updateManyAndReturn
   */
  export type UserSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update UserSnapshots.
     */
    data: XOR<UserSnapshotUpdateManyMutationInput, UserSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which UserSnapshots to update
     */
    where?: UserSnapshotWhereInput
    /**
     * Limit how many UserSnapshots to update.
     */
    limit?: number
  }

  /**
   * UserSnapshot upsert
   */
  export type UserSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSnapshot to update in case it exists.
     */
    where: UserSnapshotWhereUniqueInput
    /**
     * In case the UserSnapshot found by the `where` argument doesn't exist, create a new UserSnapshot with this data.
     */
    create: XOR<UserSnapshotCreateInput, UserSnapshotUncheckedCreateInput>
    /**
     * In case the UserSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSnapshotUpdateInput, UserSnapshotUncheckedUpdateInput>
  }

  /**
   * UserSnapshot delete
   */
  export type UserSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
    /**
     * Filter which UserSnapshot to delete.
     */
    where: UserSnapshotWhereUniqueInput
  }

  /**
   * UserSnapshot deleteMany
   */
  export type UserSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSnapshots to delete
     */
    where?: UserSnapshotWhereInput
    /**
     * Limit how many UserSnapshots to delete.
     */
    limit?: number
  }

  /**
   * UserSnapshot without action
   */
  export type UserSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSnapshot
     */
    select?: UserSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSnapshot
     */
    omit?: UserSnapshotOmit<ExtArgs> | null
  }


  /**
   * Model OrderSnapshot
   */

  export type AggregateOrderSnapshot = {
    _count: OrderSnapshotCountAggregateOutputType | null
    _avg: OrderSnapshotAvgAggregateOutputType | null
    _sum: OrderSnapshotSumAggregateOutputType | null
    _min: OrderSnapshotMinAggregateOutputType | null
    _max: OrderSnapshotMaxAggregateOutputType | null
  }

  export type OrderSnapshotAvgAggregateOutputType = {
    id: number | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type OrderSnapshotSumAggregateOutputType = {
    id: number | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type OrderSnapshotMinAggregateOutputType = {
    id: number | null
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date | null
    snapshotAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type OrderSnapshotMaxAggregateOutputType = {
    id: number | null
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date | null
    snapshotAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type OrderSnapshotCountAggregateOutputType = {
    id: number
    orderId: number
    userId: number
    asset: number
    type: number
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit: number
    stopLoss: number
    openedAt: number
    snapshotAt: number
    trailingStopLossEnabled: number
    trailingStopLossDistance: number
    trailingStopLossHighestPrice: number
    trailingStopLossLowestPrice: number
    _all: number
  }


  export type OrderSnapshotAvgAggregateInputType = {
    id?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type OrderSnapshotSumAggregateInputType = {
    id?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type OrderSnapshotMinAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    snapshotAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type OrderSnapshotMaxAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    snapshotAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type OrderSnapshotCountAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    snapshotAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
    _all?: true
  }

  export type OrderSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSnapshot to aggregate.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderSnapshots
    **/
    _count?: true | OrderSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderSnapshotMaxAggregateInputType
  }

  export type GetOrderSnapshotAggregateType<T extends OrderSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderSnapshot[P]>
      : GetScalarType<T[P], AggregateOrderSnapshot[P]>
  }




  export type OrderSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderSnapshotWhereInput
    orderBy?: OrderSnapshotOrderByWithAggregationInput | OrderSnapshotOrderByWithAggregationInput[]
    by: OrderSnapshotScalarFieldEnum[] | OrderSnapshotScalarFieldEnum
    having?: OrderSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderSnapshotCountAggregateInputType | true
    _avg?: OrderSnapshotAvgAggregateInputType
    _sum?: OrderSnapshotSumAggregateInputType
    _min?: OrderSnapshotMinAggregateInputType
    _max?: OrderSnapshotMaxAggregateInputType
  }

  export type OrderSnapshotGroupByOutputType = {
    id: number
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date
    snapshotAt: Date
    trailingStopLossEnabled: boolean
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
    _count: OrderSnapshotCountAggregateOutputType | null
    _avg: OrderSnapshotAvgAggregateOutputType | null
    _sum: OrderSnapshotSumAggregateOutputType | null
    _min: OrderSnapshotMinAggregateOutputType | null
    _max: OrderSnapshotMaxAggregateOutputType | null
  }

  type GetOrderSnapshotGroupByPayload<T extends OrderSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], OrderSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type OrderSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    snapshotAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    snapshotAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    snapshotAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectScalar = {
    id?: boolean
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    snapshotAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }

  export type OrderSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "userId" | "asset" | "type" | "margin" | "initialMargin" | "addedMargin" | "leverage" | "openPrice" | "liquidationPrice" | "takeProfit" | "stopLoss" | "openedAt" | "snapshotAt" | "trailingStopLossEnabled" | "trailingStopLossDistance" | "trailingStopLossHighestPrice" | "trailingStopLossLowestPrice", ExtArgs["result"]["orderSnapshot"]>

  export type $OrderSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: string
      userId: string
      asset: string
      type: string
      margin: number
      initialMargin: number
      addedMargin: number
      leverage: number
      openPrice: number
      liquidationPrice: number
      takeProfit: number | null
      stopLoss: number | null
      openedAt: Date
      snapshotAt: Date
      trailingStopLossEnabled: boolean
      trailingStopLossDistance: number | null
      trailingStopLossHighestPrice: number | null
      trailingStopLossLowestPrice: number | null
    }, ExtArgs["result"]["orderSnapshot"]>
    composites: {}
  }

  type OrderSnapshotGetPayload<S extends boolean | null | undefined | OrderSnapshotDefaultArgs> = $Result.GetResult<Prisma.$OrderSnapshotPayload, S>

  type OrderSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderSnapshotCountAggregateInputType | true
    }

  export interface OrderSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderSnapshot'], meta: { name: 'OrderSnapshot' } }
    /**
     * Find zero or one OrderSnapshot that matches the filter.
     * @param {OrderSnapshotFindUniqueArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderSnapshotFindUniqueArgs>(args: SelectSubset<T, OrderSnapshotFindUniqueArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderSnapshotFindUniqueOrThrowArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindFirstArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderSnapshotFindFirstArgs>(args?: SelectSubset<T, OrderSnapshotFindFirstArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindFirstOrThrowArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderSnapshots
     * const orderSnapshots = await prisma.orderSnapshot.findMany()
     * 
     * // Get first 10 OrderSnapshots
     * const orderSnapshots = await prisma.orderSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderSnapshotFindManyArgs>(args?: SelectSubset<T, OrderSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderSnapshot.
     * @param {OrderSnapshotCreateArgs} args - Arguments to create a OrderSnapshot.
     * @example
     * // Create one OrderSnapshot
     * const OrderSnapshot = await prisma.orderSnapshot.create({
     *   data: {
     *     // ... data to create a OrderSnapshot
     *   }
     * })
     * 
     */
    create<T extends OrderSnapshotCreateArgs>(args: SelectSubset<T, OrderSnapshotCreateArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderSnapshots.
     * @param {OrderSnapshotCreateManyArgs} args - Arguments to create many OrderSnapshots.
     * @example
     * // Create many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderSnapshotCreateManyArgs>(args?: SelectSubset<T, OrderSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderSnapshots and returns the data saved in the database.
     * @param {OrderSnapshotCreateManyAndReturnArgs} args - Arguments to create many OrderSnapshots.
     * @example
     * // Create many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderSnapshots and only return the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderSnapshot.
     * @param {OrderSnapshotDeleteArgs} args - Arguments to delete one OrderSnapshot.
     * @example
     * // Delete one OrderSnapshot
     * const OrderSnapshot = await prisma.orderSnapshot.delete({
     *   where: {
     *     // ... filter to delete one OrderSnapshot
     *   }
     * })
     * 
     */
    delete<T extends OrderSnapshotDeleteArgs>(args: SelectSubset<T, OrderSnapshotDeleteArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderSnapshot.
     * @param {OrderSnapshotUpdateArgs} args - Arguments to update one OrderSnapshot.
     * @example
     * // Update one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderSnapshotUpdateArgs>(args: SelectSubset<T, OrderSnapshotUpdateArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderSnapshots.
     * @param {OrderSnapshotDeleteManyArgs} args - Arguments to filter OrderSnapshots to delete.
     * @example
     * // Delete a few OrderSnapshots
     * const { count } = await prisma.orderSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderSnapshotDeleteManyArgs>(args?: SelectSubset<T, OrderSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderSnapshotUpdateManyArgs>(args: SelectSubset<T, OrderSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSnapshots and returns the data updated in the database.
     * @param {OrderSnapshotUpdateManyAndReturnArgs} args - Arguments to update many OrderSnapshots.
     * @example
     * // Update many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderSnapshots and only return the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderSnapshot.
     * @param {OrderSnapshotUpsertArgs} args - Arguments to update or create a OrderSnapshot.
     * @example
     * // Update or create a OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.upsert({
     *   create: {
     *     // ... data to create a OrderSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends OrderSnapshotUpsertArgs>(args: SelectSubset<T, OrderSnapshotUpsertArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotCountArgs} args - Arguments to filter OrderSnapshots to count.
     * @example
     * // Count the number of OrderSnapshots
     * const count = await prisma.orderSnapshot.count({
     *   where: {
     *     // ... the filter for the OrderSnapshots we want to count
     *   }
     * })
    **/
    count<T extends OrderSnapshotCountArgs>(
      args?: Subset<T, OrderSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderSnapshotAggregateArgs>(args: Subset<T, OrderSnapshotAggregateArgs>): Prisma.PrismaPromise<GetOrderSnapshotAggregateType<T>>

    /**
     * Group by OrderSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: OrderSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderSnapshot model
   */
  readonly fields: OrderSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderSnapshot model
   */
  interface OrderSnapshotFieldRefs {
    readonly id: FieldRef<"OrderSnapshot", 'Int'>
    readonly orderId: FieldRef<"OrderSnapshot", 'String'>
    readonly userId: FieldRef<"OrderSnapshot", 'String'>
    readonly asset: FieldRef<"OrderSnapshot", 'String'>
    readonly type: FieldRef<"OrderSnapshot", 'String'>
    readonly margin: FieldRef<"OrderSnapshot", 'Int'>
    readonly initialMargin: FieldRef<"OrderSnapshot", 'Int'>
    readonly addedMargin: FieldRef<"OrderSnapshot", 'Int'>
    readonly leverage: FieldRef<"OrderSnapshot", 'Int'>
    readonly openPrice: FieldRef<"OrderSnapshot", 'Int'>
    readonly liquidationPrice: FieldRef<"OrderSnapshot", 'Int'>
    readonly takeProfit: FieldRef<"OrderSnapshot", 'Int'>
    readonly stopLoss: FieldRef<"OrderSnapshot", 'Int'>
    readonly openedAt: FieldRef<"OrderSnapshot", 'DateTime'>
    readonly snapshotAt: FieldRef<"OrderSnapshot", 'DateTime'>
    readonly trailingStopLossEnabled: FieldRef<"OrderSnapshot", 'Boolean'>
    readonly trailingStopLossDistance: FieldRef<"OrderSnapshot", 'Int'>
    readonly trailingStopLossHighestPrice: FieldRef<"OrderSnapshot", 'Int'>
    readonly trailingStopLossLowestPrice: FieldRef<"OrderSnapshot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderSnapshot findUnique
   */
  export type OrderSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot findUniqueOrThrow
   */
  export type OrderSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot findFirst
   */
  export type OrderSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSnapshots.
     */
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot findFirstOrThrow
   */
  export type OrderSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSnapshots.
     */
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot findMany
   */
  export type OrderSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which OrderSnapshots to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSnapshots.
     */
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot create
   */
  export type OrderSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderSnapshot.
     */
    data: XOR<OrderSnapshotCreateInput, OrderSnapshotUncheckedCreateInput>
  }

  /**
   * OrderSnapshot createMany
   */
  export type OrderSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderSnapshots.
     */
    data: OrderSnapshotCreateManyInput | OrderSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderSnapshot createManyAndReturn
   */
  export type OrderSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many OrderSnapshots.
     */
    data: OrderSnapshotCreateManyInput | OrderSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderSnapshot update
   */
  export type OrderSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderSnapshot.
     */
    data: XOR<OrderSnapshotUpdateInput, OrderSnapshotUncheckedUpdateInput>
    /**
     * Choose, which OrderSnapshot to update.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot updateMany
   */
  export type OrderSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderSnapshots.
     */
    data: XOR<OrderSnapshotUpdateManyMutationInput, OrderSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which OrderSnapshots to update
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to update.
     */
    limit?: number
  }

  /**
   * OrderSnapshot updateManyAndReturn
   */
  export type OrderSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update OrderSnapshots.
     */
    data: XOR<OrderSnapshotUpdateManyMutationInput, OrderSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which OrderSnapshots to update
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to update.
     */
    limit?: number
  }

  /**
   * OrderSnapshot upsert
   */
  export type OrderSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderSnapshot to update in case it exists.
     */
    where: OrderSnapshotWhereUniqueInput
    /**
     * In case the OrderSnapshot found by the `where` argument doesn't exist, create a new OrderSnapshot with this data.
     */
    create: XOR<OrderSnapshotCreateInput, OrderSnapshotUncheckedCreateInput>
    /**
     * In case the OrderSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderSnapshotUpdateInput, OrderSnapshotUncheckedUpdateInput>
  }

  /**
   * OrderSnapshot delete
   */
  export type OrderSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Filter which OrderSnapshot to delete.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot deleteMany
   */
  export type OrderSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSnapshots to delete
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to delete.
     */
    limit?: number
  }

  /**
   * OrderSnapshot without action
   */
  export type OrderSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
  }


  /**
   * Model ActiveOrder
   */

  export type AggregateActiveOrder = {
    _count: ActiveOrderCountAggregateOutputType | null
    _avg: ActiveOrderAvgAggregateOutputType | null
    _sum: ActiveOrderSumAggregateOutputType | null
    _min: ActiveOrderMinAggregateOutputType | null
    _max: ActiveOrderMaxAggregateOutputType | null
  }

  export type ActiveOrderAvgAggregateOutputType = {
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ActiveOrderSumAggregateOutputType = {
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ActiveOrderMinAggregateOutputType = {
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ActiveOrderMaxAggregateOutputType = {
    orderId: string | null
    userId: string | null
    asset: string | null
    type: string | null
    margin: number | null
    initialMargin: number | null
    addedMargin: number | null
    leverage: number | null
    openPrice: number | null
    liquidationPrice: number | null
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    trailingStopLossEnabled: boolean | null
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
  }

  export type ActiveOrderCountAggregateOutputType = {
    orderId: number
    userId: number
    asset: number
    type: number
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit: number
    stopLoss: number
    openedAt: number
    createdAt: number
    updatedAt: number
    trailingStopLossEnabled: number
    trailingStopLossDistance: number
    trailingStopLossHighestPrice: number
    trailingStopLossLowestPrice: number
    _all: number
  }


  export type ActiveOrderAvgAggregateInputType = {
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ActiveOrderSumAggregateInputType = {
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ActiveOrderMinAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    createdAt?: true
    updatedAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ActiveOrderMaxAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    createdAt?: true
    updatedAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
  }

  export type ActiveOrderCountAggregateInputType = {
    orderId?: true
    userId?: true
    asset?: true
    type?: true
    margin?: true
    initialMargin?: true
    addedMargin?: true
    leverage?: true
    openPrice?: true
    liquidationPrice?: true
    takeProfit?: true
    stopLoss?: true
    openedAt?: true
    createdAt?: true
    updatedAt?: true
    trailingStopLossEnabled?: true
    trailingStopLossDistance?: true
    trailingStopLossHighestPrice?: true
    trailingStopLossLowestPrice?: true
    _all?: true
  }

  export type ActiveOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveOrder to aggregate.
     */
    where?: ActiveOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveOrders to fetch.
     */
    orderBy?: ActiveOrderOrderByWithRelationInput | ActiveOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiveOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActiveOrders
    **/
    _count?: true | ActiveOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActiveOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActiveOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiveOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiveOrderMaxAggregateInputType
  }

  export type GetActiveOrderAggregateType<T extends ActiveOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateActiveOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActiveOrder[P]>
      : GetScalarType<T[P], AggregateActiveOrder[P]>
  }




  export type ActiveOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiveOrderWhereInput
    orderBy?: ActiveOrderOrderByWithAggregationInput | ActiveOrderOrderByWithAggregationInput[]
    by: ActiveOrderScalarFieldEnum[] | ActiveOrderScalarFieldEnum
    having?: ActiveOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiveOrderCountAggregateInputType | true
    _avg?: ActiveOrderAvgAggregateInputType
    _sum?: ActiveOrderSumAggregateInputType
    _min?: ActiveOrderMinAggregateInputType
    _max?: ActiveOrderMaxAggregateInputType
  }

  export type ActiveOrderGroupByOutputType = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit: number | null
    stopLoss: number | null
    openedAt: Date
    createdAt: Date
    updatedAt: Date
    trailingStopLossEnabled: boolean
    trailingStopLossDistance: number | null
    trailingStopLossHighestPrice: number | null
    trailingStopLossLowestPrice: number | null
    _count: ActiveOrderCountAggregateOutputType | null
    _avg: ActiveOrderAvgAggregateOutputType | null
    _sum: ActiveOrderSumAggregateOutputType | null
    _min: ActiveOrderMinAggregateOutputType | null
    _max: ActiveOrderMaxAggregateOutputType | null
  }

  type GetActiveOrderGroupByPayload<T extends ActiveOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiveOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiveOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiveOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ActiveOrderGroupByOutputType[P]>
        }
      >
    >


  export type ActiveOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["activeOrder"]>

  export type ActiveOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["activeOrder"]>

  export type ActiveOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }, ExtArgs["result"]["activeOrder"]>

  export type ActiveOrderSelectScalar = {
    orderId?: boolean
    userId?: boolean
    asset?: boolean
    type?: boolean
    margin?: boolean
    initialMargin?: boolean
    addedMargin?: boolean
    leverage?: boolean
    openPrice?: boolean
    liquidationPrice?: boolean
    takeProfit?: boolean
    stopLoss?: boolean
    openedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: boolean
    trailingStopLossHighestPrice?: boolean
    trailingStopLossLowestPrice?: boolean
  }

  export type ActiveOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "userId" | "asset" | "type" | "margin" | "initialMargin" | "addedMargin" | "leverage" | "openPrice" | "liquidationPrice" | "takeProfit" | "stopLoss" | "openedAt" | "createdAt" | "updatedAt" | "trailingStopLossEnabled" | "trailingStopLossDistance" | "trailingStopLossHighestPrice" | "trailingStopLossLowestPrice", ExtArgs["result"]["activeOrder"]>

  export type $ActiveOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActiveOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      userId: string
      asset: string
      type: string
      margin: number
      initialMargin: number
      addedMargin: number
      leverage: number
      openPrice: number
      liquidationPrice: number
      takeProfit: number | null
      stopLoss: number | null
      openedAt: Date
      createdAt: Date
      updatedAt: Date
      trailingStopLossEnabled: boolean
      trailingStopLossDistance: number | null
      trailingStopLossHighestPrice: number | null
      trailingStopLossLowestPrice: number | null
    }, ExtArgs["result"]["activeOrder"]>
    composites: {}
  }

  type ActiveOrderGetPayload<S extends boolean | null | undefined | ActiveOrderDefaultArgs> = $Result.GetResult<Prisma.$ActiveOrderPayload, S>

  type ActiveOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiveOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiveOrderCountAggregateInputType | true
    }

  export interface ActiveOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActiveOrder'], meta: { name: 'ActiveOrder' } }
    /**
     * Find zero or one ActiveOrder that matches the filter.
     * @param {ActiveOrderFindUniqueArgs} args - Arguments to find a ActiveOrder
     * @example
     * // Get one ActiveOrder
     * const activeOrder = await prisma.activeOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveOrderFindUniqueArgs>(args: SelectSubset<T, ActiveOrderFindUniqueArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActiveOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveOrderFindUniqueOrThrowArgs} args - Arguments to find a ActiveOrder
     * @example
     * // Get one ActiveOrder
     * const activeOrder = await prisma.activeOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiveOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderFindFirstArgs} args - Arguments to find a ActiveOrder
     * @example
     * // Get one ActiveOrder
     * const activeOrder = await prisma.activeOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveOrderFindFirstArgs>(args?: SelectSubset<T, ActiveOrderFindFirstArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActiveOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderFindFirstOrThrowArgs} args - Arguments to find a ActiveOrder
     * @example
     * // Get one ActiveOrder
     * const activeOrder = await prisma.activeOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiveOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActiveOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveOrders
     * const activeOrders = await prisma.activeOrder.findMany()
     * 
     * // Get first 10 ActiveOrders
     * const activeOrders = await prisma.activeOrder.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const activeOrderWithOrderIdOnly = await prisma.activeOrder.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends ActiveOrderFindManyArgs>(args?: SelectSubset<T, ActiveOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActiveOrder.
     * @param {ActiveOrderCreateArgs} args - Arguments to create a ActiveOrder.
     * @example
     * // Create one ActiveOrder
     * const ActiveOrder = await prisma.activeOrder.create({
     *   data: {
     *     // ... data to create a ActiveOrder
     *   }
     * })
     * 
     */
    create<T extends ActiveOrderCreateArgs>(args: SelectSubset<T, ActiveOrderCreateArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActiveOrders.
     * @param {ActiveOrderCreateManyArgs} args - Arguments to create many ActiveOrders.
     * @example
     * // Create many ActiveOrders
     * const activeOrder = await prisma.activeOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiveOrderCreateManyArgs>(args?: SelectSubset<T, ActiveOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActiveOrders and returns the data saved in the database.
     * @param {ActiveOrderCreateManyAndReturnArgs} args - Arguments to create many ActiveOrders.
     * @example
     * // Create many ActiveOrders
     * const activeOrder = await prisma.activeOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActiveOrders and only return the `orderId`
     * const activeOrderWithOrderIdOnly = await prisma.activeOrder.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiveOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiveOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActiveOrder.
     * @param {ActiveOrderDeleteArgs} args - Arguments to delete one ActiveOrder.
     * @example
     * // Delete one ActiveOrder
     * const ActiveOrder = await prisma.activeOrder.delete({
     *   where: {
     *     // ... filter to delete one ActiveOrder
     *   }
     * })
     * 
     */
    delete<T extends ActiveOrderDeleteArgs>(args: SelectSubset<T, ActiveOrderDeleteArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActiveOrder.
     * @param {ActiveOrderUpdateArgs} args - Arguments to update one ActiveOrder.
     * @example
     * // Update one ActiveOrder
     * const activeOrder = await prisma.activeOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiveOrderUpdateArgs>(args: SelectSubset<T, ActiveOrderUpdateArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActiveOrders.
     * @param {ActiveOrderDeleteManyArgs} args - Arguments to filter ActiveOrders to delete.
     * @example
     * // Delete a few ActiveOrders
     * const { count } = await prisma.activeOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiveOrderDeleteManyArgs>(args?: SelectSubset<T, ActiveOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveOrders
     * const activeOrder = await prisma.activeOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiveOrderUpdateManyArgs>(args: SelectSubset<T, ActiveOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActiveOrders and returns the data updated in the database.
     * @param {ActiveOrderUpdateManyAndReturnArgs} args - Arguments to update many ActiveOrders.
     * @example
     * // Update many ActiveOrders
     * const activeOrder = await prisma.activeOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActiveOrders and only return the `orderId`
     * const activeOrderWithOrderIdOnly = await prisma.activeOrder.updateManyAndReturn({
     *   select: { orderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActiveOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiveOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActiveOrder.
     * @param {ActiveOrderUpsertArgs} args - Arguments to update or create a ActiveOrder.
     * @example
     * // Update or create a ActiveOrder
     * const activeOrder = await prisma.activeOrder.upsert({
     *   create: {
     *     // ... data to create a ActiveOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveOrder we want to update
     *   }
     * })
     */
    upsert<T extends ActiveOrderUpsertArgs>(args: SelectSubset<T, ActiveOrderUpsertArgs<ExtArgs>>): Prisma__ActiveOrderClient<$Result.GetResult<Prisma.$ActiveOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActiveOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderCountArgs} args - Arguments to filter ActiveOrders to count.
     * @example
     * // Count the number of ActiveOrders
     * const count = await prisma.activeOrder.count({
     *   where: {
     *     // ... the filter for the ActiveOrders we want to count
     *   }
     * })
    **/
    count<T extends ActiveOrderCountArgs>(
      args?: Subset<T, ActiveOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiveOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActiveOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiveOrderAggregateArgs>(args: Subset<T, ActiveOrderAggregateArgs>): Prisma.PrismaPromise<GetActiveOrderAggregateType<T>>

    /**
     * Group by ActiveOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiveOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiveOrderGroupByArgs['orderBy'] }
        : { orderBy?: ActiveOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiveOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActiveOrder model
   */
  readonly fields: ActiveOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActiveOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiveOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActiveOrder model
   */
  interface ActiveOrderFieldRefs {
    readonly orderId: FieldRef<"ActiveOrder", 'String'>
    readonly userId: FieldRef<"ActiveOrder", 'String'>
    readonly asset: FieldRef<"ActiveOrder", 'String'>
    readonly type: FieldRef<"ActiveOrder", 'String'>
    readonly margin: FieldRef<"ActiveOrder", 'Int'>
    readonly initialMargin: FieldRef<"ActiveOrder", 'Int'>
    readonly addedMargin: FieldRef<"ActiveOrder", 'Int'>
    readonly leverage: FieldRef<"ActiveOrder", 'Int'>
    readonly openPrice: FieldRef<"ActiveOrder", 'Int'>
    readonly liquidationPrice: FieldRef<"ActiveOrder", 'Int'>
    readonly takeProfit: FieldRef<"ActiveOrder", 'Int'>
    readonly stopLoss: FieldRef<"ActiveOrder", 'Int'>
    readonly openedAt: FieldRef<"ActiveOrder", 'DateTime'>
    readonly createdAt: FieldRef<"ActiveOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ActiveOrder", 'DateTime'>
    readonly trailingStopLossEnabled: FieldRef<"ActiveOrder", 'Boolean'>
    readonly trailingStopLossDistance: FieldRef<"ActiveOrder", 'Int'>
    readonly trailingStopLossHighestPrice: FieldRef<"ActiveOrder", 'Int'>
    readonly trailingStopLossLowestPrice: FieldRef<"ActiveOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActiveOrder findUnique
   */
  export type ActiveOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter, which ActiveOrder to fetch.
     */
    where: ActiveOrderWhereUniqueInput
  }

  /**
   * ActiveOrder findUniqueOrThrow
   */
  export type ActiveOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter, which ActiveOrder to fetch.
     */
    where: ActiveOrderWhereUniqueInput
  }

  /**
   * ActiveOrder findFirst
   */
  export type ActiveOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter, which ActiveOrder to fetch.
     */
    where?: ActiveOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveOrders to fetch.
     */
    orderBy?: ActiveOrderOrderByWithRelationInput | ActiveOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveOrders.
     */
    cursor?: ActiveOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveOrders.
     */
    distinct?: ActiveOrderScalarFieldEnum | ActiveOrderScalarFieldEnum[]
  }

  /**
   * ActiveOrder findFirstOrThrow
   */
  export type ActiveOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter, which ActiveOrder to fetch.
     */
    where?: ActiveOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveOrders to fetch.
     */
    orderBy?: ActiveOrderOrderByWithRelationInput | ActiveOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActiveOrders.
     */
    cursor?: ActiveOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveOrders.
     */
    distinct?: ActiveOrderScalarFieldEnum | ActiveOrderScalarFieldEnum[]
  }

  /**
   * ActiveOrder findMany
   */
  export type ActiveOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter, which ActiveOrders to fetch.
     */
    where?: ActiveOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActiveOrders to fetch.
     */
    orderBy?: ActiveOrderOrderByWithRelationInput | ActiveOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActiveOrders.
     */
    cursor?: ActiveOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActiveOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActiveOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActiveOrders.
     */
    distinct?: ActiveOrderScalarFieldEnum | ActiveOrderScalarFieldEnum[]
  }

  /**
   * ActiveOrder create
   */
  export type ActiveOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a ActiveOrder.
     */
    data: XOR<ActiveOrderCreateInput, ActiveOrderUncheckedCreateInput>
  }

  /**
   * ActiveOrder createMany
   */
  export type ActiveOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveOrders.
     */
    data: ActiveOrderCreateManyInput | ActiveOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveOrder createManyAndReturn
   */
  export type ActiveOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ActiveOrders.
     */
    data: ActiveOrderCreateManyInput | ActiveOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActiveOrder update
   */
  export type ActiveOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a ActiveOrder.
     */
    data: XOR<ActiveOrderUpdateInput, ActiveOrderUncheckedUpdateInput>
    /**
     * Choose, which ActiveOrder to update.
     */
    where: ActiveOrderWhereUniqueInput
  }

  /**
   * ActiveOrder updateMany
   */
  export type ActiveOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveOrders.
     */
    data: XOR<ActiveOrderUpdateManyMutationInput, ActiveOrderUncheckedUpdateManyInput>
    /**
     * Filter which ActiveOrders to update
     */
    where?: ActiveOrderWhereInput
    /**
     * Limit how many ActiveOrders to update.
     */
    limit?: number
  }

  /**
   * ActiveOrder updateManyAndReturn
   */
  export type ActiveOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * The data used to update ActiveOrders.
     */
    data: XOR<ActiveOrderUpdateManyMutationInput, ActiveOrderUncheckedUpdateManyInput>
    /**
     * Filter which ActiveOrders to update
     */
    where?: ActiveOrderWhereInput
    /**
     * Limit how many ActiveOrders to update.
     */
    limit?: number
  }

  /**
   * ActiveOrder upsert
   */
  export type ActiveOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the ActiveOrder to update in case it exists.
     */
    where: ActiveOrderWhereUniqueInput
    /**
     * In case the ActiveOrder found by the `where` argument doesn't exist, create a new ActiveOrder with this data.
     */
    create: XOR<ActiveOrderCreateInput, ActiveOrderUncheckedCreateInput>
    /**
     * In case the ActiveOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiveOrderUpdateInput, ActiveOrderUncheckedUpdateInput>
  }

  /**
   * ActiveOrder delete
   */
  export type ActiveOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
    /**
     * Filter which ActiveOrder to delete.
     */
    where: ActiveOrderWhereUniqueInput
  }

  /**
   * ActiveOrder deleteMany
   */
  export type ActiveOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveOrders to delete
     */
    where?: ActiveOrderWhereInput
    /**
     * Limit how many ActiveOrders to delete.
     */
    limit?: number
  }

  /**
   * ActiveOrder without action
   */
  export type ActiveOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveOrder
     */
    select?: ActiveOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActiveOrder
     */
    omit?: ActiveOrderOmit<ExtArgs> | null
  }


  /**
   * Model PlatformProfit
   */

  export type AggregatePlatformProfit = {
    _count: PlatformProfitCountAggregateOutputType | null
    _avg: PlatformProfitAvgAggregateOutputType | null
    _sum: PlatformProfitSumAggregateOutputType | null
    _min: PlatformProfitMinAggregateOutputType | null
    _max: PlatformProfitMaxAggregateOutputType | null
  }

  export type PlatformProfitAvgAggregateOutputType = {
    id: number | null
    totalProfit: number | null
    openTrades: number | null
    closedTrades: number | null
    totalTrades: number | null
  }

  export type PlatformProfitSumAggregateOutputType = {
    id: number | null
    totalProfit: number | null
    openTrades: number | null
    closedTrades: number | null
    totalTrades: number | null
  }

  export type PlatformProfitMinAggregateOutputType = {
    id: number | null
    totalProfit: number | null
    openTrades: number | null
    closedTrades: number | null
    totalTrades: number | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type PlatformProfitMaxAggregateOutputType = {
    id: number | null
    totalProfit: number | null
    openTrades: number | null
    closedTrades: number | null
    totalTrades: number | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type PlatformProfitCountAggregateOutputType = {
    id: number
    totalProfit: number
    openTrades: number
    closedTrades: number
    totalTrades: number
    lastUpdated: number
    createdAt: number
    _all: number
  }


  export type PlatformProfitAvgAggregateInputType = {
    id?: true
    totalProfit?: true
    openTrades?: true
    closedTrades?: true
    totalTrades?: true
  }

  export type PlatformProfitSumAggregateInputType = {
    id?: true
    totalProfit?: true
    openTrades?: true
    closedTrades?: true
    totalTrades?: true
  }

  export type PlatformProfitMinAggregateInputType = {
    id?: true
    totalProfit?: true
    openTrades?: true
    closedTrades?: true
    totalTrades?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type PlatformProfitMaxAggregateInputType = {
    id?: true
    totalProfit?: true
    openTrades?: true
    closedTrades?: true
    totalTrades?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type PlatformProfitCountAggregateInputType = {
    id?: true
    totalProfit?: true
    openTrades?: true
    closedTrades?: true
    totalTrades?: true
    lastUpdated?: true
    createdAt?: true
    _all?: true
  }

  export type PlatformProfitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformProfit to aggregate.
     */
    where?: PlatformProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformProfits to fetch.
     */
    orderBy?: PlatformProfitOrderByWithRelationInput | PlatformProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformProfits
    **/
    _count?: true | PlatformProfitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformProfitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformProfitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformProfitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformProfitMaxAggregateInputType
  }

  export type GetPlatformProfitAggregateType<T extends PlatformProfitAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformProfit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformProfit[P]>
      : GetScalarType<T[P], AggregatePlatformProfit[P]>
  }




  export type PlatformProfitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformProfitWhereInput
    orderBy?: PlatformProfitOrderByWithAggregationInput | PlatformProfitOrderByWithAggregationInput[]
    by: PlatformProfitScalarFieldEnum[] | PlatformProfitScalarFieldEnum
    having?: PlatformProfitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformProfitCountAggregateInputType | true
    _avg?: PlatformProfitAvgAggregateInputType
    _sum?: PlatformProfitSumAggregateInputType
    _min?: PlatformProfitMinAggregateInputType
    _max?: PlatformProfitMaxAggregateInputType
  }

  export type PlatformProfitGroupByOutputType = {
    id: number
    totalProfit: number
    openTrades: number
    closedTrades: number
    totalTrades: number
    lastUpdated: Date
    createdAt: Date
    _count: PlatformProfitCountAggregateOutputType | null
    _avg: PlatformProfitAvgAggregateOutputType | null
    _sum: PlatformProfitSumAggregateOutputType | null
    _min: PlatformProfitMinAggregateOutputType | null
    _max: PlatformProfitMaxAggregateOutputType | null
  }

  type GetPlatformProfitGroupByPayload<T extends PlatformProfitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformProfitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformProfitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformProfitGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformProfitGroupByOutputType[P]>
        }
      >
    >


  export type PlatformProfitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalProfit?: boolean
    openTrades?: boolean
    closedTrades?: boolean
    totalTrades?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["platformProfit"]>

  export type PlatformProfitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalProfit?: boolean
    openTrades?: boolean
    closedTrades?: boolean
    totalTrades?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["platformProfit"]>

  export type PlatformProfitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalProfit?: boolean
    openTrades?: boolean
    closedTrades?: boolean
    totalTrades?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["platformProfit"]>

  export type PlatformProfitSelectScalar = {
    id?: boolean
    totalProfit?: boolean
    openTrades?: boolean
    closedTrades?: boolean
    totalTrades?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }

  export type PlatformProfitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalProfit" | "openTrades" | "closedTrades" | "totalTrades" | "lastUpdated" | "createdAt", ExtArgs["result"]["platformProfit"]>

  export type $PlatformProfitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformProfit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalProfit: number
      openTrades: number
      closedTrades: number
      totalTrades: number
      lastUpdated: Date
      createdAt: Date
    }, ExtArgs["result"]["platformProfit"]>
    composites: {}
  }

  type PlatformProfitGetPayload<S extends boolean | null | undefined | PlatformProfitDefaultArgs> = $Result.GetResult<Prisma.$PlatformProfitPayload, S>

  type PlatformProfitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformProfitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformProfitCountAggregateInputType | true
    }

  export interface PlatformProfitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformProfit'], meta: { name: 'PlatformProfit' } }
    /**
     * Find zero or one PlatformProfit that matches the filter.
     * @param {PlatformProfitFindUniqueArgs} args - Arguments to find a PlatformProfit
     * @example
     * // Get one PlatformProfit
     * const platformProfit = await prisma.platformProfit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformProfitFindUniqueArgs>(args: SelectSubset<T, PlatformProfitFindUniqueArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformProfit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformProfitFindUniqueOrThrowArgs} args - Arguments to find a PlatformProfit
     * @example
     * // Get one PlatformProfit
     * const platformProfit = await prisma.platformProfit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformProfitFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformProfitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformProfit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitFindFirstArgs} args - Arguments to find a PlatformProfit
     * @example
     * // Get one PlatformProfit
     * const platformProfit = await prisma.platformProfit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformProfitFindFirstArgs>(args?: SelectSubset<T, PlatformProfitFindFirstArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformProfit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitFindFirstOrThrowArgs} args - Arguments to find a PlatformProfit
     * @example
     * // Get one PlatformProfit
     * const platformProfit = await prisma.platformProfit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformProfitFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformProfitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformProfits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformProfits
     * const platformProfits = await prisma.platformProfit.findMany()
     * 
     * // Get first 10 PlatformProfits
     * const platformProfits = await prisma.platformProfit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformProfitWithIdOnly = await prisma.platformProfit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformProfitFindManyArgs>(args?: SelectSubset<T, PlatformProfitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformProfit.
     * @param {PlatformProfitCreateArgs} args - Arguments to create a PlatformProfit.
     * @example
     * // Create one PlatformProfit
     * const PlatformProfit = await prisma.platformProfit.create({
     *   data: {
     *     // ... data to create a PlatformProfit
     *   }
     * })
     * 
     */
    create<T extends PlatformProfitCreateArgs>(args: SelectSubset<T, PlatformProfitCreateArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformProfits.
     * @param {PlatformProfitCreateManyArgs} args - Arguments to create many PlatformProfits.
     * @example
     * // Create many PlatformProfits
     * const platformProfit = await prisma.platformProfit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformProfitCreateManyArgs>(args?: SelectSubset<T, PlatformProfitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformProfits and returns the data saved in the database.
     * @param {PlatformProfitCreateManyAndReturnArgs} args - Arguments to create many PlatformProfits.
     * @example
     * // Create many PlatformProfits
     * const platformProfit = await prisma.platformProfit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformProfits and only return the `id`
     * const platformProfitWithIdOnly = await prisma.platformProfit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformProfitCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformProfitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformProfit.
     * @param {PlatformProfitDeleteArgs} args - Arguments to delete one PlatformProfit.
     * @example
     * // Delete one PlatformProfit
     * const PlatformProfit = await prisma.platformProfit.delete({
     *   where: {
     *     // ... filter to delete one PlatformProfit
     *   }
     * })
     * 
     */
    delete<T extends PlatformProfitDeleteArgs>(args: SelectSubset<T, PlatformProfitDeleteArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformProfit.
     * @param {PlatformProfitUpdateArgs} args - Arguments to update one PlatformProfit.
     * @example
     * // Update one PlatformProfit
     * const platformProfit = await prisma.platformProfit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformProfitUpdateArgs>(args: SelectSubset<T, PlatformProfitUpdateArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformProfits.
     * @param {PlatformProfitDeleteManyArgs} args - Arguments to filter PlatformProfits to delete.
     * @example
     * // Delete a few PlatformProfits
     * const { count } = await prisma.platformProfit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformProfitDeleteManyArgs>(args?: SelectSubset<T, PlatformProfitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformProfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformProfits
     * const platformProfit = await prisma.platformProfit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformProfitUpdateManyArgs>(args: SelectSubset<T, PlatformProfitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformProfits and returns the data updated in the database.
     * @param {PlatformProfitUpdateManyAndReturnArgs} args - Arguments to update many PlatformProfits.
     * @example
     * // Update many PlatformProfits
     * const platformProfit = await prisma.platformProfit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformProfits and only return the `id`
     * const platformProfitWithIdOnly = await prisma.platformProfit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformProfitUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformProfitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformProfit.
     * @param {PlatformProfitUpsertArgs} args - Arguments to update or create a PlatformProfit.
     * @example
     * // Update or create a PlatformProfit
     * const platformProfit = await prisma.platformProfit.upsert({
     *   create: {
     *     // ... data to create a PlatformProfit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformProfit we want to update
     *   }
     * })
     */
    upsert<T extends PlatformProfitUpsertArgs>(args: SelectSubset<T, PlatformProfitUpsertArgs<ExtArgs>>): Prisma__PlatformProfitClient<$Result.GetResult<Prisma.$PlatformProfitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformProfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitCountArgs} args - Arguments to filter PlatformProfits to count.
     * @example
     * // Count the number of PlatformProfits
     * const count = await prisma.platformProfit.count({
     *   where: {
     *     // ... the filter for the PlatformProfits we want to count
     *   }
     * })
    **/
    count<T extends PlatformProfitCountArgs>(
      args?: Subset<T, PlatformProfitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformProfitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformProfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformProfitAggregateArgs>(args: Subset<T, PlatformProfitAggregateArgs>): Prisma.PrismaPromise<GetPlatformProfitAggregateType<T>>

    /**
     * Group by PlatformProfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformProfitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformProfitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformProfitGroupByArgs['orderBy'] }
        : { orderBy?: PlatformProfitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformProfitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformProfitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformProfit model
   */
  readonly fields: PlatformProfitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformProfit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformProfitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformProfit model
   */
  interface PlatformProfitFieldRefs {
    readonly id: FieldRef<"PlatformProfit", 'Int'>
    readonly totalProfit: FieldRef<"PlatformProfit", 'Int'>
    readonly openTrades: FieldRef<"PlatformProfit", 'Int'>
    readonly closedTrades: FieldRef<"PlatformProfit", 'Int'>
    readonly totalTrades: FieldRef<"PlatformProfit", 'Int'>
    readonly lastUpdated: FieldRef<"PlatformProfit", 'DateTime'>
    readonly createdAt: FieldRef<"PlatformProfit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformProfit findUnique
   */
  export type PlatformProfitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter, which PlatformProfit to fetch.
     */
    where: PlatformProfitWhereUniqueInput
  }

  /**
   * PlatformProfit findUniqueOrThrow
   */
  export type PlatformProfitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter, which PlatformProfit to fetch.
     */
    where: PlatformProfitWhereUniqueInput
  }

  /**
   * PlatformProfit findFirst
   */
  export type PlatformProfitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter, which PlatformProfit to fetch.
     */
    where?: PlatformProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformProfits to fetch.
     */
    orderBy?: PlatformProfitOrderByWithRelationInput | PlatformProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformProfits.
     */
    cursor?: PlatformProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformProfits.
     */
    distinct?: PlatformProfitScalarFieldEnum | PlatformProfitScalarFieldEnum[]
  }

  /**
   * PlatformProfit findFirstOrThrow
   */
  export type PlatformProfitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter, which PlatformProfit to fetch.
     */
    where?: PlatformProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformProfits to fetch.
     */
    orderBy?: PlatformProfitOrderByWithRelationInput | PlatformProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformProfits.
     */
    cursor?: PlatformProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformProfits.
     */
    distinct?: PlatformProfitScalarFieldEnum | PlatformProfitScalarFieldEnum[]
  }

  /**
   * PlatformProfit findMany
   */
  export type PlatformProfitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter, which PlatformProfits to fetch.
     */
    where?: PlatformProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformProfits to fetch.
     */
    orderBy?: PlatformProfitOrderByWithRelationInput | PlatformProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformProfits.
     */
    cursor?: PlatformProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformProfits.
     */
    distinct?: PlatformProfitScalarFieldEnum | PlatformProfitScalarFieldEnum[]
  }

  /**
   * PlatformProfit create
   */
  export type PlatformProfitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * The data needed to create a PlatformProfit.
     */
    data: XOR<PlatformProfitCreateInput, PlatformProfitUncheckedCreateInput>
  }

  /**
   * PlatformProfit createMany
   */
  export type PlatformProfitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformProfits.
     */
    data: PlatformProfitCreateManyInput | PlatformProfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformProfit createManyAndReturn
   */
  export type PlatformProfitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformProfits.
     */
    data: PlatformProfitCreateManyInput | PlatformProfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformProfit update
   */
  export type PlatformProfitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * The data needed to update a PlatformProfit.
     */
    data: XOR<PlatformProfitUpdateInput, PlatformProfitUncheckedUpdateInput>
    /**
     * Choose, which PlatformProfit to update.
     */
    where: PlatformProfitWhereUniqueInput
  }

  /**
   * PlatformProfit updateMany
   */
  export type PlatformProfitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformProfits.
     */
    data: XOR<PlatformProfitUpdateManyMutationInput, PlatformProfitUncheckedUpdateManyInput>
    /**
     * Filter which PlatformProfits to update
     */
    where?: PlatformProfitWhereInput
    /**
     * Limit how many PlatformProfits to update.
     */
    limit?: number
  }

  /**
   * PlatformProfit updateManyAndReturn
   */
  export type PlatformProfitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * The data used to update PlatformProfits.
     */
    data: XOR<PlatformProfitUpdateManyMutationInput, PlatformProfitUncheckedUpdateManyInput>
    /**
     * Filter which PlatformProfits to update
     */
    where?: PlatformProfitWhereInput
    /**
     * Limit how many PlatformProfits to update.
     */
    limit?: number
  }

  /**
   * PlatformProfit upsert
   */
  export type PlatformProfitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * The filter to search for the PlatformProfit to update in case it exists.
     */
    where: PlatformProfitWhereUniqueInput
    /**
     * In case the PlatformProfit found by the `where` argument doesn't exist, create a new PlatformProfit with this data.
     */
    create: XOR<PlatformProfitCreateInput, PlatformProfitUncheckedCreateInput>
    /**
     * In case the PlatformProfit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformProfitUpdateInput, PlatformProfitUncheckedUpdateInput>
  }

  /**
   * PlatformProfit delete
   */
  export type PlatformProfitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
    /**
     * Filter which PlatformProfit to delete.
     */
    where: PlatformProfitWhereUniqueInput
  }

  /**
   * PlatformProfit deleteMany
   */
  export type PlatformProfitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformProfits to delete
     */
    where?: PlatformProfitWhereInput
    /**
     * Limit how many PlatformProfits to delete.
     */
    limit?: number
  }

  /**
   * PlatformProfit without action
   */
  export type PlatformProfitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformProfit
     */
    select?: PlatformProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformProfit
     */
    omit?: PlatformProfitOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TradeScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    price: 'price',
    tradeId: 'tradeId',
    timestamp: 'timestamp',
    quantity: 'quantity'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password',
    balanceCents: 'balanceCents',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider',
    providerId: 'providerId',
    emailVerified: 'emailVerified',
    avatarUrl: 'avatarUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClosedOrderScalarFieldEnum: {
    orderId: 'orderId',
    userId: 'userId',
    asset: 'asset',
    type: 'type',
    margin: 'margin',
    initialMargin: 'initialMargin',
    addedMargin: 'addedMargin',
    leverage: 'leverage',
    openPrice: 'openPrice',
    closePrice: 'closePrice',
    liquidationPrice: 'liquidationPrice',
    takeProfit: 'takeProfit',
    stopLoss: 'stopLoss',
    pnl: 'pnl',
    closeReason: 'closeReason',
    closeMessage: 'closeMessage',
    openedAt: 'openedAt',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    trailingStopLossEnabled: 'trailingStopLossEnabled',
    trailingStopLossDistance: 'trailingStopLossDistance',
    trailingStopLossHighestPrice: 'trailingStopLossHighestPrice',
    trailingStopLossLowestPrice: 'trailingStopLossLowestPrice'
  };

  export type ClosedOrderScalarFieldEnum = (typeof ClosedOrderScalarFieldEnum)[keyof typeof ClosedOrderScalarFieldEnum]


  export const UserSnapshotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balanceCents: 'balanceCents',
    snapshotAt: 'snapshotAt'
  };

  export type UserSnapshotScalarFieldEnum = (typeof UserSnapshotScalarFieldEnum)[keyof typeof UserSnapshotScalarFieldEnum]


  export const OrderSnapshotScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    userId: 'userId',
    asset: 'asset',
    type: 'type',
    margin: 'margin',
    initialMargin: 'initialMargin',
    addedMargin: 'addedMargin',
    leverage: 'leverage',
    openPrice: 'openPrice',
    liquidationPrice: 'liquidationPrice',
    takeProfit: 'takeProfit',
    stopLoss: 'stopLoss',
    openedAt: 'openedAt',
    snapshotAt: 'snapshotAt',
    trailingStopLossEnabled: 'trailingStopLossEnabled',
    trailingStopLossDistance: 'trailingStopLossDistance',
    trailingStopLossHighestPrice: 'trailingStopLossHighestPrice',
    trailingStopLossLowestPrice: 'trailingStopLossLowestPrice'
  };

  export type OrderSnapshotScalarFieldEnum = (typeof OrderSnapshotScalarFieldEnum)[keyof typeof OrderSnapshotScalarFieldEnum]


  export const ActiveOrderScalarFieldEnum: {
    orderId: 'orderId',
    userId: 'userId',
    asset: 'asset',
    type: 'type',
    margin: 'margin',
    initialMargin: 'initialMargin',
    addedMargin: 'addedMargin',
    leverage: 'leverage',
    openPrice: 'openPrice',
    liquidationPrice: 'liquidationPrice',
    takeProfit: 'takeProfit',
    stopLoss: 'stopLoss',
    openedAt: 'openedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    trailingStopLossEnabled: 'trailingStopLossEnabled',
    trailingStopLossDistance: 'trailingStopLossDistance',
    trailingStopLossHighestPrice: 'trailingStopLossHighestPrice',
    trailingStopLossLowestPrice: 'trailingStopLossLowestPrice'
  };

  export type ActiveOrderScalarFieldEnum = (typeof ActiveOrderScalarFieldEnum)[keyof typeof ActiveOrderScalarFieldEnum]


  export const PlatformProfitScalarFieldEnum: {
    id: 'id',
    totalProfit: 'totalProfit',
    openTrades: 'openTrades',
    closedTrades: 'closedTrades',
    totalTrades: 'totalTrades',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt'
  };

  export type PlatformProfitScalarFieldEnum = (typeof PlatformProfitScalarFieldEnum)[keyof typeof PlatformProfitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: BigIntFilter<"Trade"> | bigint | number
    symbol?: StringFilter<"Trade"> | string
    price?: BigIntFilter<"Trade"> | bigint | number
    tradeId?: BigIntFilter<"Trade"> | bigint | number
    timestamp?: DateTimeFilter<"Trade"> | Date | string
    quantity?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    tradeId_timestamp?: TradeTradeIdTimestampCompoundUniqueInput
    id_timestamp?: TradeIdTimestampCompoundUniqueInput
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: BigIntFilter<"Trade"> | bigint | number
    symbol?: StringFilter<"Trade"> | string
    price?: BigIntFilter<"Trade"> | bigint | number
    tradeId?: BigIntFilter<"Trade"> | bigint | number
    timestamp?: DateTimeFilter<"Trade"> | Date | string
    quantity?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
  }, "id_timestamp" | "tradeId_timestamp">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Trade"> | bigint | number
    symbol?: StringWithAggregatesFilter<"Trade"> | string
    price?: BigIntWithAggregatesFilter<"Trade"> | bigint | number
    tradeId?: BigIntWithAggregatesFilter<"Trade"> | bigint | number
    timestamp?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    quantity?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    balanceCents?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balanceCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    balanceCents?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: StringNullableFilter<"User"> | string | null
    providerId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balanceCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    balanceCents?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClosedOrderWhereInput = {
    AND?: ClosedOrderWhereInput | ClosedOrderWhereInput[]
    OR?: ClosedOrderWhereInput[]
    NOT?: ClosedOrderWhereInput | ClosedOrderWhereInput[]
    orderId?: StringFilter<"ClosedOrder"> | string
    userId?: StringFilter<"ClosedOrder"> | string
    asset?: StringFilter<"ClosedOrder"> | string
    type?: StringFilter<"ClosedOrder"> | string
    margin?: IntFilter<"ClosedOrder"> | number
    initialMargin?: IntFilter<"ClosedOrder"> | number
    addedMargin?: IntFilter<"ClosedOrder"> | number
    leverage?: IntFilter<"ClosedOrder"> | number
    openPrice?: IntFilter<"ClosedOrder"> | number
    closePrice?: IntFilter<"ClosedOrder"> | number
    liquidationPrice?: IntFilter<"ClosedOrder"> | number
    takeProfit?: IntNullableFilter<"ClosedOrder"> | number | null
    stopLoss?: IntNullableFilter<"ClosedOrder"> | number | null
    pnl?: IntFilter<"ClosedOrder"> | number
    closeReason?: StringFilter<"ClosedOrder"> | string
    closeMessage?: StringNullableFilter<"ClosedOrder"> | string | null
    openedAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    closedAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    createdAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"ClosedOrder"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"ClosedOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"ClosedOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"ClosedOrder"> | number | null
  }

  export type ClosedOrderOrderByWithRelationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    pnl?: SortOrder
    closeReason?: SortOrder
    closeMessage?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
  }

  export type ClosedOrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: ClosedOrderWhereInput | ClosedOrderWhereInput[]
    OR?: ClosedOrderWhereInput[]
    NOT?: ClosedOrderWhereInput | ClosedOrderWhereInput[]
    userId?: StringFilter<"ClosedOrder"> | string
    asset?: StringFilter<"ClosedOrder"> | string
    type?: StringFilter<"ClosedOrder"> | string
    margin?: IntFilter<"ClosedOrder"> | number
    initialMargin?: IntFilter<"ClosedOrder"> | number
    addedMargin?: IntFilter<"ClosedOrder"> | number
    leverage?: IntFilter<"ClosedOrder"> | number
    openPrice?: IntFilter<"ClosedOrder"> | number
    closePrice?: IntFilter<"ClosedOrder"> | number
    liquidationPrice?: IntFilter<"ClosedOrder"> | number
    takeProfit?: IntNullableFilter<"ClosedOrder"> | number | null
    stopLoss?: IntNullableFilter<"ClosedOrder"> | number | null
    pnl?: IntFilter<"ClosedOrder"> | number
    closeReason?: StringFilter<"ClosedOrder"> | string
    closeMessage?: StringNullableFilter<"ClosedOrder"> | string | null
    openedAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    closedAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    createdAt?: DateTimeFilter<"ClosedOrder"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"ClosedOrder"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"ClosedOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"ClosedOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"ClosedOrder"> | number | null
  }, "orderId">

  export type ClosedOrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    pnl?: SortOrder
    closeReason?: SortOrder
    closeMessage?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
    _count?: ClosedOrderCountOrderByAggregateInput
    _avg?: ClosedOrderAvgOrderByAggregateInput
    _max?: ClosedOrderMaxOrderByAggregateInput
    _min?: ClosedOrderMinOrderByAggregateInput
    _sum?: ClosedOrderSumOrderByAggregateInput
  }

  export type ClosedOrderScalarWhereWithAggregatesInput = {
    AND?: ClosedOrderScalarWhereWithAggregatesInput | ClosedOrderScalarWhereWithAggregatesInput[]
    OR?: ClosedOrderScalarWhereWithAggregatesInput[]
    NOT?: ClosedOrderScalarWhereWithAggregatesInput | ClosedOrderScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"ClosedOrder"> | string
    userId?: StringWithAggregatesFilter<"ClosedOrder"> | string
    asset?: StringWithAggregatesFilter<"ClosedOrder"> | string
    type?: StringWithAggregatesFilter<"ClosedOrder"> | string
    margin?: IntWithAggregatesFilter<"ClosedOrder"> | number
    initialMargin?: IntWithAggregatesFilter<"ClosedOrder"> | number
    addedMargin?: IntWithAggregatesFilter<"ClosedOrder"> | number
    leverage?: IntWithAggregatesFilter<"ClosedOrder"> | number
    openPrice?: IntWithAggregatesFilter<"ClosedOrder"> | number
    closePrice?: IntWithAggregatesFilter<"ClosedOrder"> | number
    liquidationPrice?: IntWithAggregatesFilter<"ClosedOrder"> | number
    takeProfit?: IntNullableWithAggregatesFilter<"ClosedOrder"> | number | null
    stopLoss?: IntNullableWithAggregatesFilter<"ClosedOrder"> | number | null
    pnl?: IntWithAggregatesFilter<"ClosedOrder"> | number
    closeReason?: StringWithAggregatesFilter<"ClosedOrder"> | string
    closeMessage?: StringNullableWithAggregatesFilter<"ClosedOrder"> | string | null
    openedAt?: DateTimeWithAggregatesFilter<"ClosedOrder"> | Date | string
    closedAt?: DateTimeWithAggregatesFilter<"ClosedOrder"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ClosedOrder"> | Date | string
    trailingStopLossEnabled?: BoolWithAggregatesFilter<"ClosedOrder"> | boolean
    trailingStopLossDistance?: IntNullableWithAggregatesFilter<"ClosedOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableWithAggregatesFilter<"ClosedOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableWithAggregatesFilter<"ClosedOrder"> | number | null
  }

  export type UserSnapshotWhereInput = {
    AND?: UserSnapshotWhereInput | UserSnapshotWhereInput[]
    OR?: UserSnapshotWhereInput[]
    NOT?: UserSnapshotWhereInput | UserSnapshotWhereInput[]
    id?: IntFilter<"UserSnapshot"> | number
    userId?: StringFilter<"UserSnapshot"> | string
    balanceCents?: IntFilter<"UserSnapshot"> | number
    snapshotAt?: DateTimeFilter<"UserSnapshot"> | Date | string
  }

  export type UserSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balanceCents?: SortOrder
    snapshotAt?: SortOrder
  }

  export type UserSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSnapshotWhereInput | UserSnapshotWhereInput[]
    OR?: UserSnapshotWhereInput[]
    NOT?: UserSnapshotWhereInput | UserSnapshotWhereInput[]
    userId?: StringFilter<"UserSnapshot"> | string
    balanceCents?: IntFilter<"UserSnapshot"> | number
    snapshotAt?: DateTimeFilter<"UserSnapshot"> | Date | string
  }, "id">

  export type UserSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balanceCents?: SortOrder
    snapshotAt?: SortOrder
    _count?: UserSnapshotCountOrderByAggregateInput
    _avg?: UserSnapshotAvgOrderByAggregateInput
    _max?: UserSnapshotMaxOrderByAggregateInput
    _min?: UserSnapshotMinOrderByAggregateInput
    _sum?: UserSnapshotSumOrderByAggregateInput
  }

  export type UserSnapshotScalarWhereWithAggregatesInput = {
    AND?: UserSnapshotScalarWhereWithAggregatesInput | UserSnapshotScalarWhereWithAggregatesInput[]
    OR?: UserSnapshotScalarWhereWithAggregatesInput[]
    NOT?: UserSnapshotScalarWhereWithAggregatesInput | UserSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSnapshot"> | number
    userId?: StringWithAggregatesFilter<"UserSnapshot"> | string
    balanceCents?: IntWithAggregatesFilter<"UserSnapshot"> | number
    snapshotAt?: DateTimeWithAggregatesFilter<"UserSnapshot"> | Date | string
  }

  export type OrderSnapshotWhereInput = {
    AND?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    OR?: OrderSnapshotWhereInput[]
    NOT?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    id?: IntFilter<"OrderSnapshot"> | number
    orderId?: StringFilter<"OrderSnapshot"> | string
    userId?: StringFilter<"OrderSnapshot"> | string
    asset?: StringFilter<"OrderSnapshot"> | string
    type?: StringFilter<"OrderSnapshot"> | string
    margin?: IntFilter<"OrderSnapshot"> | number
    initialMargin?: IntFilter<"OrderSnapshot"> | number
    addedMargin?: IntFilter<"OrderSnapshot"> | number
    leverage?: IntFilter<"OrderSnapshot"> | number
    openPrice?: IntFilter<"OrderSnapshot"> | number
    liquidationPrice?: IntFilter<"OrderSnapshot"> | number
    takeProfit?: IntNullableFilter<"OrderSnapshot"> | number | null
    stopLoss?: IntNullableFilter<"OrderSnapshot"> | number | null
    openedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    snapshotAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"OrderSnapshot"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"OrderSnapshot"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"OrderSnapshot"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"OrderSnapshot"> | number | null
  }

  export type OrderSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    snapshotAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
  }

  export type OrderSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    OR?: OrderSnapshotWhereInput[]
    NOT?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    orderId?: StringFilter<"OrderSnapshot"> | string
    userId?: StringFilter<"OrderSnapshot"> | string
    asset?: StringFilter<"OrderSnapshot"> | string
    type?: StringFilter<"OrderSnapshot"> | string
    margin?: IntFilter<"OrderSnapshot"> | number
    initialMargin?: IntFilter<"OrderSnapshot"> | number
    addedMargin?: IntFilter<"OrderSnapshot"> | number
    leverage?: IntFilter<"OrderSnapshot"> | number
    openPrice?: IntFilter<"OrderSnapshot"> | number
    liquidationPrice?: IntFilter<"OrderSnapshot"> | number
    takeProfit?: IntNullableFilter<"OrderSnapshot"> | number | null
    stopLoss?: IntNullableFilter<"OrderSnapshot"> | number | null
    openedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    snapshotAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"OrderSnapshot"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"OrderSnapshot"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"OrderSnapshot"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"OrderSnapshot"> | number | null
  }, "id">

  export type OrderSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    snapshotAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
    _count?: OrderSnapshotCountOrderByAggregateInput
    _avg?: OrderSnapshotAvgOrderByAggregateInput
    _max?: OrderSnapshotMaxOrderByAggregateInput
    _min?: OrderSnapshotMinOrderByAggregateInput
    _sum?: OrderSnapshotSumOrderByAggregateInput
  }

  export type OrderSnapshotScalarWhereWithAggregatesInput = {
    AND?: OrderSnapshotScalarWhereWithAggregatesInput | OrderSnapshotScalarWhereWithAggregatesInput[]
    OR?: OrderSnapshotScalarWhereWithAggregatesInput[]
    NOT?: OrderSnapshotScalarWhereWithAggregatesInput | OrderSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    orderId?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    userId?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    asset?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    type?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    margin?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    initialMargin?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    addedMargin?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    leverage?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    openPrice?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    liquidationPrice?: IntWithAggregatesFilter<"OrderSnapshot"> | number
    takeProfit?: IntNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
    stopLoss?: IntNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
    openedAt?: DateTimeWithAggregatesFilter<"OrderSnapshot"> | Date | string
    snapshotAt?: DateTimeWithAggregatesFilter<"OrderSnapshot"> | Date | string
    trailingStopLossEnabled?: BoolWithAggregatesFilter<"OrderSnapshot"> | boolean
    trailingStopLossDistance?: IntNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
    trailingStopLossHighestPrice?: IntNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
    trailingStopLossLowestPrice?: IntNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
  }

  export type ActiveOrderWhereInput = {
    AND?: ActiveOrderWhereInput | ActiveOrderWhereInput[]
    OR?: ActiveOrderWhereInput[]
    NOT?: ActiveOrderWhereInput | ActiveOrderWhereInput[]
    orderId?: StringFilter<"ActiveOrder"> | string
    userId?: StringFilter<"ActiveOrder"> | string
    asset?: StringFilter<"ActiveOrder"> | string
    type?: StringFilter<"ActiveOrder"> | string
    margin?: IntFilter<"ActiveOrder"> | number
    initialMargin?: IntFilter<"ActiveOrder"> | number
    addedMargin?: IntFilter<"ActiveOrder"> | number
    leverage?: IntFilter<"ActiveOrder"> | number
    openPrice?: IntFilter<"ActiveOrder"> | number
    liquidationPrice?: IntFilter<"ActiveOrder"> | number
    takeProfit?: IntNullableFilter<"ActiveOrder"> | number | null
    stopLoss?: IntNullableFilter<"ActiveOrder"> | number | null
    openedAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    createdAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"ActiveOrder"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"ActiveOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"ActiveOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"ActiveOrder"> | number | null
  }

  export type ActiveOrderOrderByWithRelationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
  }

  export type ActiveOrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: ActiveOrderWhereInput | ActiveOrderWhereInput[]
    OR?: ActiveOrderWhereInput[]
    NOT?: ActiveOrderWhereInput | ActiveOrderWhereInput[]
    userId?: StringFilter<"ActiveOrder"> | string
    asset?: StringFilter<"ActiveOrder"> | string
    type?: StringFilter<"ActiveOrder"> | string
    margin?: IntFilter<"ActiveOrder"> | number
    initialMargin?: IntFilter<"ActiveOrder"> | number
    addedMargin?: IntFilter<"ActiveOrder"> | number
    leverage?: IntFilter<"ActiveOrder"> | number
    openPrice?: IntFilter<"ActiveOrder"> | number
    liquidationPrice?: IntFilter<"ActiveOrder"> | number
    takeProfit?: IntNullableFilter<"ActiveOrder"> | number | null
    stopLoss?: IntNullableFilter<"ActiveOrder"> | number | null
    openedAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    createdAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ActiveOrder"> | Date | string
    trailingStopLossEnabled?: BoolFilter<"ActiveOrder"> | boolean
    trailingStopLossDistance?: IntNullableFilter<"ActiveOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableFilter<"ActiveOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableFilter<"ActiveOrder"> | number | null
  }, "orderId">

  export type ActiveOrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrderInput | SortOrder
    stopLoss?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrderInput | SortOrder
    trailingStopLossHighestPrice?: SortOrderInput | SortOrder
    trailingStopLossLowestPrice?: SortOrderInput | SortOrder
    _count?: ActiveOrderCountOrderByAggregateInput
    _avg?: ActiveOrderAvgOrderByAggregateInput
    _max?: ActiveOrderMaxOrderByAggregateInput
    _min?: ActiveOrderMinOrderByAggregateInput
    _sum?: ActiveOrderSumOrderByAggregateInput
  }

  export type ActiveOrderScalarWhereWithAggregatesInput = {
    AND?: ActiveOrderScalarWhereWithAggregatesInput | ActiveOrderScalarWhereWithAggregatesInput[]
    OR?: ActiveOrderScalarWhereWithAggregatesInput[]
    NOT?: ActiveOrderScalarWhereWithAggregatesInput | ActiveOrderScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"ActiveOrder"> | string
    userId?: StringWithAggregatesFilter<"ActiveOrder"> | string
    asset?: StringWithAggregatesFilter<"ActiveOrder"> | string
    type?: StringWithAggregatesFilter<"ActiveOrder"> | string
    margin?: IntWithAggregatesFilter<"ActiveOrder"> | number
    initialMargin?: IntWithAggregatesFilter<"ActiveOrder"> | number
    addedMargin?: IntWithAggregatesFilter<"ActiveOrder"> | number
    leverage?: IntWithAggregatesFilter<"ActiveOrder"> | number
    openPrice?: IntWithAggregatesFilter<"ActiveOrder"> | number
    liquidationPrice?: IntWithAggregatesFilter<"ActiveOrder"> | number
    takeProfit?: IntNullableWithAggregatesFilter<"ActiveOrder"> | number | null
    stopLoss?: IntNullableWithAggregatesFilter<"ActiveOrder"> | number | null
    openedAt?: DateTimeWithAggregatesFilter<"ActiveOrder"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ActiveOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActiveOrder"> | Date | string
    trailingStopLossEnabled?: BoolWithAggregatesFilter<"ActiveOrder"> | boolean
    trailingStopLossDistance?: IntNullableWithAggregatesFilter<"ActiveOrder"> | number | null
    trailingStopLossHighestPrice?: IntNullableWithAggregatesFilter<"ActiveOrder"> | number | null
    trailingStopLossLowestPrice?: IntNullableWithAggregatesFilter<"ActiveOrder"> | number | null
  }

  export type PlatformProfitWhereInput = {
    AND?: PlatformProfitWhereInput | PlatformProfitWhereInput[]
    OR?: PlatformProfitWhereInput[]
    NOT?: PlatformProfitWhereInput | PlatformProfitWhereInput[]
    id?: IntFilter<"PlatformProfit"> | number
    totalProfit?: IntFilter<"PlatformProfit"> | number
    openTrades?: IntFilter<"PlatformProfit"> | number
    closedTrades?: IntFilter<"PlatformProfit"> | number
    totalTrades?: IntFilter<"PlatformProfit"> | number
    lastUpdated?: DateTimeFilter<"PlatformProfit"> | Date | string
    createdAt?: DateTimeFilter<"PlatformProfit"> | Date | string
  }

  export type PlatformProfitOrderByWithRelationInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type PlatformProfitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformProfitWhereInput | PlatformProfitWhereInput[]
    OR?: PlatformProfitWhereInput[]
    NOT?: PlatformProfitWhereInput | PlatformProfitWhereInput[]
    totalProfit?: IntFilter<"PlatformProfit"> | number
    openTrades?: IntFilter<"PlatformProfit"> | number
    closedTrades?: IntFilter<"PlatformProfit"> | number
    totalTrades?: IntFilter<"PlatformProfit"> | number
    lastUpdated?: DateTimeFilter<"PlatformProfit"> | Date | string
    createdAt?: DateTimeFilter<"PlatformProfit"> | Date | string
  }, "id">

  export type PlatformProfitOrderByWithAggregationInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    _count?: PlatformProfitCountOrderByAggregateInput
    _avg?: PlatformProfitAvgOrderByAggregateInput
    _max?: PlatformProfitMaxOrderByAggregateInput
    _min?: PlatformProfitMinOrderByAggregateInput
    _sum?: PlatformProfitSumOrderByAggregateInput
  }

  export type PlatformProfitScalarWhereWithAggregatesInput = {
    AND?: PlatformProfitScalarWhereWithAggregatesInput | PlatformProfitScalarWhereWithAggregatesInput[]
    OR?: PlatformProfitScalarWhereWithAggregatesInput[]
    NOT?: PlatformProfitScalarWhereWithAggregatesInput | PlatformProfitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlatformProfit"> | number
    totalProfit?: IntWithAggregatesFilter<"PlatformProfit"> | number
    openTrades?: IntWithAggregatesFilter<"PlatformProfit"> | number
    closedTrades?: IntWithAggregatesFilter<"PlatformProfit"> | number
    totalTrades?: IntWithAggregatesFilter<"PlatformProfit"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"PlatformProfit"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PlatformProfit"> | Date | string
  }

  export type TradeCreateInput = {
    id?: bigint | number
    symbol: string
    price: bigint | number
    tradeId: bigint | number
    timestamp: Date | string
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type TradeUncheckedCreateInput = {
    id?: bigint | number
    symbol: string
    price: bigint | number
    tradeId: bigint | number
    timestamp: Date | string
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type TradeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TradeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TradeCreateManyInput = {
    id?: bigint | number
    symbol: string
    price: bigint | number
    tradeId: bigint | number
    timestamp: Date | string
    quantity: Decimal | DecimalJsLike | number | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    userId: string
    email: string
    password: string
    balanceCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: string | null
    providerId?: string | null
    emailVerified?: boolean
    avatarUrl?: string | null
  }

  export type UserUncheckedCreateInput = {
    userId: string
    email: string
    password: string
    balanceCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: string | null
    providerId?: string | null
    emailVerified?: boolean
    avatarUrl?: string | null
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    userId: string
    email: string
    password: string
    balanceCents?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: string | null
    providerId?: string | null
    emailVerified?: boolean
    avatarUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClosedOrderCreateInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    closePrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    pnl: number
    closeReason: string
    closeMessage?: string | null
    openedAt: Date | string
    closedAt: Date | string
    createdAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ClosedOrderUncheckedCreateInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    closePrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    pnl: number
    closeReason: string
    closeMessage?: string | null
    openedAt: Date | string
    closedAt: Date | string
    createdAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ClosedOrderUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    closePrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: IntFieldUpdateOperationsInput | number
    closeReason?: StringFieldUpdateOperationsInput | string
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClosedOrderUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    closePrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: IntFieldUpdateOperationsInput | number
    closeReason?: StringFieldUpdateOperationsInput | string
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClosedOrderCreateManyInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    closePrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    pnl: number
    closeReason: string
    closeMessage?: string | null
    openedAt: Date | string
    closedAt: Date | string
    createdAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ClosedOrderUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    closePrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: IntFieldUpdateOperationsInput | number
    closeReason?: StringFieldUpdateOperationsInput | string
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClosedOrderUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    closePrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    pnl?: IntFieldUpdateOperationsInput | number
    closeReason?: StringFieldUpdateOperationsInput | string
    closeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSnapshotCreateInput = {
    userId: string
    balanceCents: number
    snapshotAt?: Date | string
  }

  export type UserSnapshotUncheckedCreateInput = {
    id?: number
    userId: string
    balanceCents: number
    snapshotAt?: Date | string
  }

  export type UserSnapshotUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSnapshotCreateManyInput = {
    id?: number
    userId: string
    balanceCents: number
    snapshotAt?: Date | string
  }

  export type UserSnapshotUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    balanceCents?: IntFieldUpdateOperationsInput | number
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSnapshotCreateInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    snapshotAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type OrderSnapshotUncheckedCreateInput = {
    id?: number
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    snapshotAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type OrderSnapshotUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderSnapshotCreateManyInput = {
    id?: number
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    snapshotAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type OrderSnapshotUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshotAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiveOrderCreateInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ActiveOrderUncheckedCreateInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ActiveOrderUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiveOrderUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiveOrderCreateManyInput = {
    orderId: string
    userId: string
    asset: string
    type: string
    margin: number
    initialMargin: number
    addedMargin?: number
    leverage: number
    openPrice: number
    liquidationPrice: number
    takeProfit?: number | null
    stopLoss?: number | null
    openedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    trailingStopLossEnabled?: boolean
    trailingStopLossDistance?: number | null
    trailingStopLossHighestPrice?: number | null
    trailingStopLossLowestPrice?: number | null
  }

  export type ActiveOrderUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActiveOrderUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    margin?: IntFieldUpdateOperationsInput | number
    initialMargin?: IntFieldUpdateOperationsInput | number
    addedMargin?: IntFieldUpdateOperationsInput | number
    leverage?: IntFieldUpdateOperationsInput | number
    openPrice?: IntFieldUpdateOperationsInput | number
    liquidationPrice?: IntFieldUpdateOperationsInput | number
    takeProfit?: NullableIntFieldUpdateOperationsInput | number | null
    stopLoss?: NullableIntFieldUpdateOperationsInput | number | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trailingStopLossEnabled?: BoolFieldUpdateOperationsInput | boolean
    trailingStopLossDistance?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossHighestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    trailingStopLossLowestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatformProfitCreateInput = {
    id?: number
    totalProfit: number
    openTrades: number
    closedTrades: number
    totalTrades: number
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type PlatformProfitUncheckedCreateInput = {
    id?: number
    totalProfit: number
    openTrades: number
    closedTrades: number
    totalTrades: number
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type PlatformProfitUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProfit?: IntFieldUpdateOperationsInput | number
    openTrades?: IntFieldUpdateOperationsInput | number
    closedTrades?: IntFieldUpdateOperationsInput | number
    totalTrades?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformProfitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProfit?: IntFieldUpdateOperationsInput | number
    openTrades?: IntFieldUpdateOperationsInput | number
    closedTrades?: IntFieldUpdateOperationsInput | number
    totalTrades?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformProfitCreateManyInput = {
    id?: number
    totalProfit: number
    openTrades: number
    closedTrades: number
    totalTrades: number
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type PlatformProfitUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProfit?: IntFieldUpdateOperationsInput | number
    openTrades?: IntFieldUpdateOperationsInput | number
    closedTrades?: IntFieldUpdateOperationsInput | number
    totalTrades?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformProfitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalProfit?: IntFieldUpdateOperationsInput | number
    openTrades?: IntFieldUpdateOperationsInput | number
    closedTrades?: IntFieldUpdateOperationsInput | number
    totalTrades?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TradeTradeIdTimestampCompoundUniqueInput = {
    tradeId: bigint | number
    timestamp: Date | string
  }

  export type TradeIdTimestampCompoundUniqueInput = {
    id: bigint | number
    timestamp: Date | string
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    quantity?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    timestamp?: SortOrder
    quantity?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    tradeId?: SortOrder
    quantity?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balanceCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    emailVerified?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balanceCents?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balanceCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    emailVerified?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    balanceCents?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    emailVerified?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balanceCents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClosedOrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    pnl?: SortOrder
    closeReason?: SortOrder
    closeMessage?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ClosedOrderAvgOrderByAggregateInput = {
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    pnl?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ClosedOrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    pnl?: SortOrder
    closeReason?: SortOrder
    closeMessage?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ClosedOrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    pnl?: SortOrder
    closeReason?: SortOrder
    closeMessage?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ClosedOrderSumOrderByAggregateInput = {
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    closePrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    pnl?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balanceCents?: SortOrder
    snapshotAt?: SortOrder
  }

  export type UserSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    balanceCents?: SortOrder
  }

  export type UserSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balanceCents?: SortOrder
    snapshotAt?: SortOrder
  }

  export type UserSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balanceCents?: SortOrder
    snapshotAt?: SortOrder
  }

  export type UserSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    balanceCents?: SortOrder
  }

  export type OrderSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    snapshotAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type OrderSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type OrderSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    snapshotAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type OrderSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    snapshotAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type OrderSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ActiveOrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ActiveOrderAvgOrderByAggregateInput = {
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ActiveOrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ActiveOrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    type?: SortOrder
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trailingStopLossEnabled?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type ActiveOrderSumOrderByAggregateInput = {
    margin?: SortOrder
    initialMargin?: SortOrder
    addedMargin?: SortOrder
    leverage?: SortOrder
    openPrice?: SortOrder
    liquidationPrice?: SortOrder
    takeProfit?: SortOrder
    stopLoss?: SortOrder
    trailingStopLossDistance?: SortOrder
    trailingStopLossHighestPrice?: SortOrder
    trailingStopLossLowestPrice?: SortOrder
  }

  export type PlatformProfitCountOrderByAggregateInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type PlatformProfitAvgOrderByAggregateInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
  }

  export type PlatformProfitMaxOrderByAggregateInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type PlatformProfitMinOrderByAggregateInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type PlatformProfitSumOrderByAggregateInput = {
    id?: SortOrder
    totalProfit?: SortOrder
    openTrades?: SortOrder
    closedTrades?: SortOrder
    totalTrades?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}