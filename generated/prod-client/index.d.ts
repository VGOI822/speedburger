
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Avaliacoes
 * 
 */
export type Avaliacoes = $Result.DefaultSelection<Prisma.$AvaliacoesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Avaliacoes
 * const avaliacoes = await prisma.avaliacoes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Avaliacoes
   * const avaliacoes = await prisma.avaliacoes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.avaliacoes`: Exposes CRUD operations for the **Avaliacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacoes
    * const avaliacoes = await prisma.avaliacoes.findMany()
    * ```
    */
  get avaliacoes(): Prisma.AvaliacoesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Avaliacoes: 'Avaliacoes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "avaliacoes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Avaliacoes: {
        payload: Prisma.$AvaliacoesPayload<ExtArgs>
        fields: Prisma.AvaliacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          findFirst: {
            args: Prisma.AvaliacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          findMany: {
            args: Prisma.AvaliacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>[]
          }
          create: {
            args: Prisma.AvaliacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          createMany: {
            args: Prisma.AvaliacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>[]
          }
          delete: {
            args: Prisma.AvaliacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          update: {
            args: Prisma.AvaliacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacoesPayload>
          }
          aggregate: {
            args: Prisma.AvaliacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacoes>
          }
          groupBy: {
            args: Prisma.AvaliacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacoesCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    avaliacoes?: AvaliacoesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model Avaliacoes
   */

  export type AggregateAvaliacoes = {
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  export type AvaliacoesAvgAggregateOutputType = {
    avaliado: number | null
  }

  export type AvaliacoesSumAggregateOutputType = {
    avaliado: number | null
  }

  export type AvaliacoesMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    avaliado: number | null
    mensagem: string | null
    createdAt: Date | null
  }

  export type AvaliacoesMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    avaliado: number | null
    mensagem: string | null
    createdAt: Date | null
  }

  export type AvaliacoesCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    avaliado: number
    mensagem: number
    createdAt: number
    _all: number
  }


  export type AvaliacoesAvgAggregateInputType = {
    avaliado?: true
  }

  export type AvaliacoesSumAggregateInputType = {
    avaliado?: true
  }

  export type AvaliacoesMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    avaliado?: true
    mensagem?: true
    createdAt?: true
  }

  export type AvaliacoesMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    avaliado?: true
    mensagem?: true
    createdAt?: true
  }

  export type AvaliacoesCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    avaliado?: true
    mensagem?: true
    createdAt?: true
    _all?: true
  }

  export type AvaliacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacoes to aggregate.
     */
    where?: AvaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacoes to fetch.
     */
    orderBy?: AvaliacoesOrderByWithRelationInput | AvaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacoes
    **/
    _count?: true | AvaliacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type GetAvaliacoesAggregateType<T extends AvaliacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacoes[P]>
      : GetScalarType<T[P], AggregateAvaliacoes[P]>
  }




  export type AvaliacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacoesWhereInput
    orderBy?: AvaliacoesOrderByWithAggregationInput | AvaliacoesOrderByWithAggregationInput[]
    by: AvaliacoesScalarFieldEnum[] | AvaliacoesScalarFieldEnum
    having?: AvaliacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacoesCountAggregateInputType | true
    _avg?: AvaliacoesAvgAggregateInputType
    _sum?: AvaliacoesSumAggregateInputType
    _min?: AvaliacoesMinAggregateInputType
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type AvaliacoesGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string
    avaliado: number
    mensagem: string
    createdAt: Date
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  type GetAvaliacoesGroupByPayload<T extends AvaliacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    avaliado?: boolean
    mensagem?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["avaliacoes"]>

  export type AvaliacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    avaliado?: boolean
    mensagem?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["avaliacoes"]>

  export type AvaliacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    avaliado?: boolean
    mensagem?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["avaliacoes"]>

  export type AvaliacoesSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    avaliado?: boolean
    mensagem?: boolean
    createdAt?: boolean
  }

  export type AvaliacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "avaliado" | "mensagem" | "createdAt", ExtArgs["result"]["avaliacoes"]>

  export type $AvaliacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacoes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string
      avaliado: number
      mensagem: string
      createdAt: Date
    }, ExtArgs["result"]["avaliacoes"]>
    composites: {}
  }

  type AvaliacoesGetPayload<S extends boolean | null | undefined | AvaliacoesDefaultArgs> = $Result.GetResult<Prisma.$AvaliacoesPayload, S>

  type AvaliacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacoesCountAggregateInputType | true
    }

  export interface AvaliacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacoes'], meta: { name: 'Avaliacoes' } }
    /**
     * Find zero or one Avaliacoes that matches the filter.
     * @param {AvaliacoesFindUniqueArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacoesFindUniqueArgs>(args: SelectSubset<T, AvaliacoesFindUniqueArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacoesFindUniqueOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesFindFirstArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacoesFindFirstArgs>(args?: SelectSubset<T, AvaliacoesFindFirstArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesFindFirstOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany()
     * 
     * // Get first 10 Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacoesWithIdOnly = await prisma.avaliacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacoesFindManyArgs>(args?: SelectSubset<T, AvaliacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacoes.
     * @param {AvaliacoesCreateArgs} args - Arguments to create a Avaliacoes.
     * @example
     * // Create one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.create({
     *   data: {
     *     // ... data to create a Avaliacoes
     *   }
     * })
     * 
     */
    create<T extends AvaliacoesCreateArgs>(args: SelectSubset<T, AvaliacoesCreateArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacoes.
     * @param {AvaliacoesCreateManyArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacoesCreateManyArgs>(args?: SelectSubset<T, AvaliacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacoes and returns the data saved in the database.
     * @param {AvaliacoesCreateManyAndReturnArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacoes and only return the `id`
     * const avaliacoesWithIdOnly = await prisma.avaliacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacoes.
     * @param {AvaliacoesDeleteArgs} args - Arguments to delete one Avaliacoes.
     * @example
     * // Delete one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.delete({
     *   where: {
     *     // ... filter to delete one Avaliacoes
     *   }
     * })
     * 
     */
    delete<T extends AvaliacoesDeleteArgs>(args: SelectSubset<T, AvaliacoesDeleteArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacoes.
     * @param {AvaliacoesUpdateArgs} args - Arguments to update one Avaliacoes.
     * @example
     * // Update one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacoesUpdateArgs>(args: SelectSubset<T, AvaliacoesUpdateArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacoes.
     * @param {AvaliacoesDeleteManyArgs} args - Arguments to filter Avaliacoes to delete.
     * @example
     * // Delete a few Avaliacoes
     * const { count } = await prisma.avaliacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacoesDeleteManyArgs>(args?: SelectSubset<T, AvaliacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacoesUpdateManyArgs>(args: SelectSubset<T, AvaliacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes and returns the data updated in the database.
     * @param {AvaliacoesUpdateManyAndReturnArgs} args - Arguments to update many Avaliacoes.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacoes and only return the `id`
     * const avaliacoesWithIdOnly = await prisma.avaliacoes.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvaliacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacoes.
     * @param {AvaliacoesUpsertArgs} args - Arguments to update or create a Avaliacoes.
     * @example
     * // Update or create a Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.upsert({
     *   create: {
     *     // ... data to create a Avaliacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacoes we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacoesUpsertArgs>(args: SelectSubset<T, AvaliacoesUpsertArgs<ExtArgs>>): Prisma__AvaliacoesClient<$Result.GetResult<Prisma.$AvaliacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesCountArgs} args - Arguments to filter Avaliacoes to count.
     * @example
     * // Count the number of Avaliacoes
     * const count = await prisma.avaliacoes.count({
     *   where: {
     *     // ... the filter for the Avaliacoes we want to count
     *   }
     * })
    **/
    count<T extends AvaliacoesCountArgs>(
      args?: Subset<T, AvaliacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacoesAggregateArgs>(args: Subset<T, AvaliacoesAggregateArgs>): Prisma.PrismaPromise<GetAvaliacoesAggregateType<T>>

    /**
     * Group by Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesGroupByArgs} args - Group by arguments.
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
      T extends AvaliacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacoesGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacoes model
   */
  readonly fields: AvaliacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Avaliacoes model
   */
  interface AvaliacoesFieldRefs {
    readonly id: FieldRef<"Avaliacoes", 'String'>
    readonly nome: FieldRef<"Avaliacoes", 'String'>
    readonly sobrenome: FieldRef<"Avaliacoes", 'String'>
    readonly avaliado: FieldRef<"Avaliacoes", 'Int'>
    readonly mensagem: FieldRef<"Avaliacoes", 'String'>
    readonly createdAt: FieldRef<"Avaliacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacoes findUnique
   */
  export type AvaliacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter, which Avaliacoes to fetch.
     */
    where: AvaliacoesWhereUniqueInput
  }

  /**
   * Avaliacoes findUniqueOrThrow
   */
  export type AvaliacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter, which Avaliacoes to fetch.
     */
    where: AvaliacoesWhereUniqueInput
  }

  /**
   * Avaliacoes findFirst
   */
  export type AvaliacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter, which Avaliacoes to fetch.
     */
    where?: AvaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacoes to fetch.
     */
    orderBy?: AvaliacoesOrderByWithRelationInput | AvaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacoes.
     */
    cursor?: AvaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * Avaliacoes findFirstOrThrow
   */
  export type AvaliacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter, which Avaliacoes to fetch.
     */
    where?: AvaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacoes to fetch.
     */
    orderBy?: AvaliacoesOrderByWithRelationInput | AvaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacoes.
     */
    cursor?: AvaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * Avaliacoes findMany
   */
  export type AvaliacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter, which Avaliacoes to fetch.
     */
    where?: AvaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacoes to fetch.
     */
    orderBy?: AvaliacoesOrderByWithRelationInput | AvaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacoes.
     */
    cursor?: AvaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacoes.
     */
    skip?: number
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * Avaliacoes create
   */
  export type AvaliacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * The data needed to create a Avaliacoes.
     */
    data: XOR<AvaliacoesCreateInput, AvaliacoesUncheckedCreateInput>
  }

  /**
   * Avaliacoes createMany
   */
  export type AvaliacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacoes.
     */
    data: AvaliacoesCreateManyInput | AvaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacoes createManyAndReturn
   */
  export type AvaliacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacoes.
     */
    data: AvaliacoesCreateManyInput | AvaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacoes update
   */
  export type AvaliacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * The data needed to update a Avaliacoes.
     */
    data: XOR<AvaliacoesUpdateInput, AvaliacoesUncheckedUpdateInput>
    /**
     * Choose, which Avaliacoes to update.
     */
    where: AvaliacoesWhereUniqueInput
  }

  /**
   * Avaliacoes updateMany
   */
  export type AvaliacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacoes.
     */
    data: XOR<AvaliacoesUpdateManyMutationInput, AvaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacoes to update
     */
    where?: AvaliacoesWhereInput
    /**
     * Limit how many Avaliacoes to update.
     */
    limit?: number
  }

  /**
   * Avaliacoes updateManyAndReturn
   */
  export type AvaliacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacoes.
     */
    data: XOR<AvaliacoesUpdateManyMutationInput, AvaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacoes to update
     */
    where?: AvaliacoesWhereInput
    /**
     * Limit how many Avaliacoes to update.
     */
    limit?: number
  }

  /**
   * Avaliacoes upsert
   */
  export type AvaliacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * The filter to search for the Avaliacoes to update in case it exists.
     */
    where: AvaliacoesWhereUniqueInput
    /**
     * In case the Avaliacoes found by the `where` argument doesn't exist, create a new Avaliacoes with this data.
     */
    create: XOR<AvaliacoesCreateInput, AvaliacoesUncheckedCreateInput>
    /**
     * In case the Avaliacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacoesUpdateInput, AvaliacoesUncheckedUpdateInput>
  }

  /**
   * Avaliacoes delete
   */
  export type AvaliacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
    /**
     * Filter which Avaliacoes to delete.
     */
    where: AvaliacoesWhereUniqueInput
  }

  /**
   * Avaliacoes deleteMany
   */
  export type AvaliacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacoes to delete
     */
    where?: AvaliacoesWhereInput
    /**
     * Limit how many Avaliacoes to delete.
     */
    limit?: number
  }

  /**
   * Avaliacoes without action
   */
  export type AvaliacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacoes
     */
    select?: AvaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacoes
     */
    omit?: AvaliacoesOmit<ExtArgs> | null
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


  export const AvaliacoesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    avaliado: 'avaliado',
    mensagem: 'mensagem',
    createdAt: 'createdAt'
  };

  export type AvaliacoesScalarFieldEnum = (typeof AvaliacoesScalarFieldEnum)[keyof typeof AvaliacoesScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AvaliacoesWhereInput = {
    AND?: AvaliacoesWhereInput | AvaliacoesWhereInput[]
    OR?: AvaliacoesWhereInput[]
    NOT?: AvaliacoesWhereInput | AvaliacoesWhereInput[]
    id?: UuidFilter<"Avaliacoes"> | string
    nome?: StringFilter<"Avaliacoes"> | string
    sobrenome?: StringFilter<"Avaliacoes"> | string
    avaliado?: IntFilter<"Avaliacoes"> | number
    mensagem?: StringFilter<"Avaliacoes"> | string
    createdAt?: DateTimeFilter<"Avaliacoes"> | Date | string
  }

  export type AvaliacoesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    avaliado?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
  }

  export type AvaliacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacoesWhereInput | AvaliacoesWhereInput[]
    OR?: AvaliacoesWhereInput[]
    NOT?: AvaliacoesWhereInput | AvaliacoesWhereInput[]
    nome?: StringFilter<"Avaliacoes"> | string
    sobrenome?: StringFilter<"Avaliacoes"> | string
    avaliado?: IntFilter<"Avaliacoes"> | number
    mensagem?: StringFilter<"Avaliacoes"> | string
    createdAt?: DateTimeFilter<"Avaliacoes"> | Date | string
  }, "id">

  export type AvaliacoesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    avaliado?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
    _count?: AvaliacoesCountOrderByAggregateInput
    _avg?: AvaliacoesAvgOrderByAggregateInput
    _max?: AvaliacoesMaxOrderByAggregateInput
    _min?: AvaliacoesMinOrderByAggregateInput
    _sum?: AvaliacoesSumOrderByAggregateInput
  }

  export type AvaliacoesScalarWhereWithAggregatesInput = {
    AND?: AvaliacoesScalarWhereWithAggregatesInput | AvaliacoesScalarWhereWithAggregatesInput[]
    OR?: AvaliacoesScalarWhereWithAggregatesInput[]
    NOT?: AvaliacoesScalarWhereWithAggregatesInput | AvaliacoesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Avaliacoes"> | string
    nome?: StringWithAggregatesFilter<"Avaliacoes"> | string
    sobrenome?: StringWithAggregatesFilter<"Avaliacoes"> | string
    avaliado?: IntWithAggregatesFilter<"Avaliacoes"> | number
    mensagem?: StringWithAggregatesFilter<"Avaliacoes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Avaliacoes"> | Date | string
  }

  export type AvaliacoesCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    avaliado: number
    mensagem: string
    createdAt?: Date | string
  }

  export type AvaliacoesUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    avaliado: number
    mensagem: string
    createdAt?: Date | string
  }

  export type AvaliacoesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    avaliado?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacoesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    avaliado?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacoesCreateManyInput = {
    id?: string
    nome: string
    sobrenome: string
    avaliado: number
    mensagem: string
    createdAt?: Date | string
  }

  export type AvaliacoesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    avaliado?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacoesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    avaliado?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type AvaliacoesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    avaliado?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
  }

  export type AvaliacoesAvgOrderByAggregateInput = {
    avaliado?: SortOrder
  }

  export type AvaliacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    avaliado?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
  }

  export type AvaliacoesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    avaliado?: SortOrder
    mensagem?: SortOrder
    createdAt?: SortOrder
  }

  export type AvaliacoesSumOrderByAggregateInput = {
    avaliado?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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