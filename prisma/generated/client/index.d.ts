
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Alumnos
 * 
 */
export type Alumnos = $Result.DefaultSelection<Prisma.$AlumnosPayload>
/**
 * Model Ejercicios
 * 
 */
export type Ejercicios = $Result.DefaultSelection<Prisma.$EjerciciosPayload>
/**
 * Model Escuela
 * 
 */
export type Escuela = $Result.DefaultSelection<Prisma.$EscuelaPayload>
/**
 * Model Estado
 * 
 */
export type Estado = $Result.DefaultSelection<Prisma.$EstadoPayload>
/**
 * Model Grado
 * 
 */
export type Grado = $Result.DefaultSelection<Prisma.$GradoPayload>
/**
 * Model Grupos
 * 
 */
export type Grupos = $Result.DefaultSelection<Prisma.$GruposPayload>
/**
 * Model Incisos
 * 
 */
export type Incisos = $Result.DefaultSelection<Prisma.$IncisosPayload>
/**
 * Model Maestros
 * 
 */
export type Maestros = $Result.DefaultSelection<Prisma.$MaestrosPayload>
/**
 * Model Respuestas
 * 
 */
export type Respuestas = $Result.DefaultSelection<Prisma.$RespuestasPayload>
/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model TipoEjercicio
 * 
 */
export type TipoEjercicio = $Result.DefaultSelection<Prisma.$TipoEjercicioPayload>
/**
 * Model Turno
 * 
 */
export type Turno = $Result.DefaultSelection<Prisma.$TurnoPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs>;

  /**
   * `prisma.alumnos`: Exposes CRUD operations for the **Alumnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alumnos
    * const alumnos = await prisma.alumnos.findMany()
    * ```
    */
  get alumnos(): Prisma.AlumnosDelegate<ExtArgs>;

  /**
   * `prisma.ejercicios`: Exposes CRUD operations for the **Ejercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicios.findMany()
    * ```
    */
  get ejercicios(): Prisma.EjerciciosDelegate<ExtArgs>;

  /**
   * `prisma.escuela`: Exposes CRUD operations for the **Escuela** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escuelas
    * const escuelas = await prisma.escuela.findMany()
    * ```
    */
  get escuela(): Prisma.EscuelaDelegate<ExtArgs>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **Estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.EstadoDelegate<ExtArgs>;

  /**
   * `prisma.grado`: Exposes CRUD operations for the **Grado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grados
    * const grados = await prisma.grado.findMany()
    * ```
    */
  get grado(): Prisma.GradoDelegate<ExtArgs>;

  /**
   * `prisma.grupos`: Exposes CRUD operations for the **Grupos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupos.findMany()
    * ```
    */
  get grupos(): Prisma.GruposDelegate<ExtArgs>;

  /**
   * `prisma.incisos`: Exposes CRUD operations for the **Incisos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incisos
    * const incisos = await prisma.incisos.findMany()
    * ```
    */
  get incisos(): Prisma.IncisosDelegate<ExtArgs>;

  /**
   * `prisma.maestros`: Exposes CRUD operations for the **Maestros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maestros
    * const maestros = await prisma.maestros.findMany()
    * ```
    */
  get maestros(): Prisma.MaestrosDelegate<ExtArgs>;

  /**
   * `prisma.respuestas`: Exposes CRUD operations for the **Respuestas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respuestas
    * const respuestas = await prisma.respuestas.findMany()
    * ```
    */
  get respuestas(): Prisma.RespuestasDelegate<ExtArgs>;

  /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs>;

  /**
   * `prisma.tipoEjercicio`: Exposes CRUD operations for the **TipoEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoEjercicios
    * const tipoEjercicios = await prisma.tipoEjercicio.findMany()
    * ```
    */
  get tipoEjercicio(): Prisma.TipoEjercicioDelegate<ExtArgs>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **Turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.TurnoDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.4.0
   * Query Engine version: a5596b96668f0f4b397761ce0956db54e17e48c4
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Administrador: 'Administrador',
    Alumnos: 'Alumnos',
    Ejercicios: 'Ejercicios',
    Escuela: 'Escuela',
    Estado: 'Estado',
    Grado: 'Grado',
    Grupos: 'Grupos',
    Incisos: 'Incisos',
    Maestros: 'Maestros',
    Respuestas: 'Respuestas',
    SuperAdmin: 'SuperAdmin',
    TipoEjercicio: 'TipoEjercicio',
    Turno: 'Turno',
    Usuarios: 'Usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'administrador' | 'alumnos' | 'ejercicios' | 'escuela' | 'estado' | 'grado' | 'grupos' | 'incisos' | 'maestros' | 'respuestas' | 'superAdmin' | 'tipoEjercicio' | 'turno' | 'usuarios'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>,
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Alumnos: {
        payload: Prisma.$AlumnosPayload<ExtArgs>
        fields: Prisma.AlumnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumnosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumnosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          findFirst: {
            args: Prisma.AlumnosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumnosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          findMany: {
            args: Prisma.AlumnosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>[]
          }
          create: {
            args: Prisma.AlumnosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          createMany: {
            args: Prisma.AlumnosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlumnosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          update: {
            args: Prisma.AlumnosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          deleteMany: {
            args: Prisma.AlumnosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlumnosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlumnosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlumnosPayload>
          }
          aggregate: {
            args: Prisma.AlumnosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlumnos>
          }
          groupBy: {
            args: Prisma.AlumnosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlumnosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumnosCountArgs<ExtArgs>,
            result: $Utils.Optional<AlumnosCountAggregateOutputType> | number
          }
        }
      }
      Ejercicios: {
        payload: Prisma.$EjerciciosPayload<ExtArgs>
        fields: Prisma.EjerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjerciciosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjerciciosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          findFirst: {
            args: Prisma.EjerciciosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjerciciosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          findMany: {
            args: Prisma.EjerciciosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>[]
          }
          create: {
            args: Prisma.EjerciciosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          createMany: {
            args: Prisma.EjerciciosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EjerciciosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          update: {
            args: Prisma.EjerciciosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          deleteMany: {
            args: Prisma.EjerciciosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EjerciciosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EjerciciosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EjerciciosPayload>
          }
          aggregate: {
            args: Prisma.EjerciciosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEjercicios>
          }
          groupBy: {
            args: Prisma.EjerciciosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EjerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjerciciosCountArgs<ExtArgs>,
            result: $Utils.Optional<EjerciciosCountAggregateOutputType> | number
          }
        }
      }
      Escuela: {
        payload: Prisma.$EscuelaPayload<ExtArgs>
        fields: Prisma.EscuelaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscuelaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscuelaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          findFirst: {
            args: Prisma.EscuelaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscuelaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          findMany: {
            args: Prisma.EscuelaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>[]
          }
          create: {
            args: Prisma.EscuelaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          createMany: {
            args: Prisma.EscuelaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EscuelaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          update: {
            args: Prisma.EscuelaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          deleteMany: {
            args: Prisma.EscuelaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EscuelaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EscuelaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EscuelaPayload>
          }
          aggregate: {
            args: Prisma.EscuelaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEscuela>
          }
          groupBy: {
            args: Prisma.EscuelaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EscuelaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscuelaCountArgs<ExtArgs>,
            result: $Utils.Optional<EscuelaCountAggregateOutputType> | number
          }
        }
      }
      Estado: {
        payload: Prisma.$EstadoPayload<ExtArgs>
        fields: Prisma.EstadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findFirst: {
            args: Prisma.EstadoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findMany: {
            args: Prisma.EstadoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EstadoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          update: {
            args: Prisma.EstadoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstadoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.EstadoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCountArgs<ExtArgs>,
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      Grado: {
        payload: Prisma.$GradoPayload<ExtArgs>
        fields: Prisma.GradoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          findFirst: {
            args: Prisma.GradoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          findMany: {
            args: Prisma.GradoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>[]
          }
          create: {
            args: Prisma.GradoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          createMany: {
            args: Prisma.GradoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GradoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          update: {
            args: Prisma.GradoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          deleteMany: {
            args: Prisma.GradoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GradoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GradoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GradoPayload>
          }
          aggregate: {
            args: Prisma.GradoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrado>
          }
          groupBy: {
            args: Prisma.GradoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GradoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradoCountArgs<ExtArgs>,
            result: $Utils.Optional<GradoCountAggregateOutputType> | number
          }
        }
      }
      Grupos: {
        payload: Prisma.$GruposPayload<ExtArgs>
        fields: Prisma.GruposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GruposFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GruposFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          findFirst: {
            args: Prisma.GruposFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GruposFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          findMany: {
            args: Prisma.GruposFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>[]
          }
          create: {
            args: Prisma.GruposCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          createMany: {
            args: Prisma.GruposCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GruposDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          update: {
            args: Prisma.GruposUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          deleteMany: {
            args: Prisma.GruposDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GruposUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GruposUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          aggregate: {
            args: Prisma.GruposAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrupos>
          }
          groupBy: {
            args: Prisma.GruposGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GruposGroupByOutputType>[]
          }
          count: {
            args: Prisma.GruposCountArgs<ExtArgs>,
            result: $Utils.Optional<GruposCountAggregateOutputType> | number
          }
        }
      }
      Incisos: {
        payload: Prisma.$IncisosPayload<ExtArgs>
        fields: Prisma.IncisosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncisosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncisosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          findFirst: {
            args: Prisma.IncisosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncisosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          findMany: {
            args: Prisma.IncisosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>[]
          }
          create: {
            args: Prisma.IncisosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          createMany: {
            args: Prisma.IncisosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IncisosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          update: {
            args: Prisma.IncisosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          deleteMany: {
            args: Prisma.IncisosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IncisosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IncisosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IncisosPayload>
          }
          aggregate: {
            args: Prisma.IncisosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIncisos>
          }
          groupBy: {
            args: Prisma.IncisosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IncisosGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncisosCountArgs<ExtArgs>,
            result: $Utils.Optional<IncisosCountAggregateOutputType> | number
          }
        }
      }
      Maestros: {
        payload: Prisma.$MaestrosPayload<ExtArgs>
        fields: Prisma.MaestrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaestrosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaestrosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          findFirst: {
            args: Prisma.MaestrosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaestrosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          findMany: {
            args: Prisma.MaestrosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>[]
          }
          create: {
            args: Prisma.MaestrosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          createMany: {
            args: Prisma.MaestrosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MaestrosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          update: {
            args: Prisma.MaestrosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          deleteMany: {
            args: Prisma.MaestrosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MaestrosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MaestrosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaestrosPayload>
          }
          aggregate: {
            args: Prisma.MaestrosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaestros>
          }
          groupBy: {
            args: Prisma.MaestrosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MaestrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaestrosCountArgs<ExtArgs>,
            result: $Utils.Optional<MaestrosCountAggregateOutputType> | number
          }
        }
      }
      Respuestas: {
        payload: Prisma.$RespuestasPayload<ExtArgs>
        fields: Prisma.RespuestasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespuestasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespuestasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          findFirst: {
            args: Prisma.RespuestasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespuestasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          findMany: {
            args: Prisma.RespuestasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>[]
          }
          create: {
            args: Prisma.RespuestasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          createMany: {
            args: Prisma.RespuestasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RespuestasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          update: {
            args: Prisma.RespuestasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          deleteMany: {
            args: Prisma.RespuestasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RespuestasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RespuestasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RespuestasPayload>
          }
          aggregate: {
            args: Prisma.RespuestasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRespuestas>
          }
          groupBy: {
            args: Prisma.RespuestasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RespuestasGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespuestasCountArgs<ExtArgs>,
            result: $Utils.Optional<RespuestasCountAggregateOutputType> | number
          }
        }
      }
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>,
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      TipoEjercicio: {
        payload: Prisma.$TipoEjercicioPayload<ExtArgs>
        fields: Prisma.TipoEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoEjercicioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoEjercicioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          findFirst: {
            args: Prisma.TipoEjercicioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoEjercicioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          findMany: {
            args: Prisma.TipoEjercicioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>[]
          }
          create: {
            args: Prisma.TipoEjercicioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          createMany: {
            args: Prisma.TipoEjercicioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TipoEjercicioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          update: {
            args: Prisma.TipoEjercicioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.TipoEjercicioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TipoEjercicioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TipoEjercicioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TipoEjercicioPayload>
          }
          aggregate: {
            args: Prisma.TipoEjercicioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTipoEjercicio>
          }
          groupBy: {
            args: Prisma.TipoEjercicioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TipoEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoEjercicioCountArgs<ExtArgs>,
            result: $Utils.Optional<TipoEjercicioCountAggregateOutputType> | number
          }
        }
      }
      Turno: {
        payload: Prisma.$TurnoPayload<ExtArgs>
        fields: Prisma.TurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findMany: {
            args: Prisma.TurnoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          create: {
            args: Prisma.TurnoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          createMany: {
            args: Prisma.TurnoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TurnoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          update: {
            args: Prisma.TurnoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TurnoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          aggregate: {
            args: Prisma.TurnoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTurno>
          }
          groupBy: {
            args: Prisma.TurnoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoCountArgs<ExtArgs>,
            result: $Utils.Optional<TurnoCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type AlumnosCountOutputType
   */

  export type AlumnosCountOutputType = {
    Respuestas: number
  }

  export type AlumnosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Respuestas?: boolean | AlumnosCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes

  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnosCountOutputType
     */
    select?: AlumnosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlumnosCountOutputType without action
   */
  export type AlumnosCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestasWhereInput
  }



  /**
   * Count Type EjerciciosCountOutputType
   */

  export type EjerciciosCountOutputType = {
    Incisos: number
  }

  export type EjerciciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Incisos?: boolean | EjerciciosCountOutputTypeCountIncisosArgs
  }

  // Custom InputTypes

  /**
   * EjerciciosCountOutputType without action
   */
  export type EjerciciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjerciciosCountOutputType
     */
    select?: EjerciciosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EjerciciosCountOutputType without action
   */
  export type EjerciciosCountOutputTypeCountIncisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncisosWhereInput
  }



  /**
   * Count Type EscuelaCountOutputType
   */

  export type EscuelaCountOutputType = {
    Administrador: number
    Grupos: number
    Maestros: number
  }

  export type EscuelaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Administrador?: boolean | EscuelaCountOutputTypeCountAdministradorArgs
    Grupos?: boolean | EscuelaCountOutputTypeCountGruposArgs
    Maestros?: boolean | EscuelaCountOutputTypeCountMaestrosArgs
  }

  // Custom InputTypes

  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscuelaCountOutputType
     */
    select?: EscuelaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountAdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
  }


  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
  }


  /**
   * EscuelaCountOutputType without action
   */
  export type EscuelaCountOutputTypeCountMaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaestrosWhereInput
  }



  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    Ejercicios: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | EstadoCountOutputTypeCountEjerciciosArgs
  }

  // Custom InputTypes

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjerciciosWhereInput
  }



  /**
   * Count Type GradoCountOutputType
   */

  export type GradoCountOutputType = {
    Grupos: number
  }

  export type GradoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupos?: boolean | GradoCountOutputTypeCountGruposArgs
  }

  // Custom InputTypes

  /**
   * GradoCountOutputType without action
   */
  export type GradoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradoCountOutputType
     */
    select?: GradoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GradoCountOutputType without action
   */
  export type GradoCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
  }



  /**
   * Count Type GruposCountOutputType
   */

  export type GruposCountOutputType = {
    Alumnos: number
    Ejercicios: number
  }

  export type GruposCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alumnos?: boolean | GruposCountOutputTypeCountAlumnosArgs
    Ejercicios?: boolean | GruposCountOutputTypeCountEjerciciosArgs
  }

  // Custom InputTypes

  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GruposCountOutputType
     */
    select?: GruposCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountAlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnosWhereInput
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjerciciosWhereInput
  }



  /**
   * Count Type IncisosCountOutputType
   */

  export type IncisosCountOutputType = {
    Respuestas: number
  }

  export type IncisosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Respuestas?: boolean | IncisosCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes

  /**
   * IncisosCountOutputType without action
   */
  export type IncisosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncisosCountOutputType
     */
    select?: IncisosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IncisosCountOutputType without action
   */
  export type IncisosCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestasWhereInput
  }



  /**
   * Count Type MaestrosCountOutputType
   */

  export type MaestrosCountOutputType = {
    Ejercicios: number
    Grupos: number
  }

  export type MaestrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | MaestrosCountOutputTypeCountEjerciciosArgs
    Grupos?: boolean | MaestrosCountOutputTypeCountGruposArgs
  }

  // Custom InputTypes

  /**
   * MaestrosCountOutputType without action
   */
  export type MaestrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaestrosCountOutputType
     */
    select?: MaestrosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MaestrosCountOutputType without action
   */
  export type MaestrosCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjerciciosWhereInput
  }


  /**
   * MaestrosCountOutputType without action
   */
  export type MaestrosCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
  }



  /**
   * Count Type TipoEjercicioCountOutputType
   */

  export type TipoEjercicioCountOutputType = {
    Ejercicios: number
  }

  export type TipoEjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | TipoEjercicioCountOutputTypeCountEjerciciosArgs
  }

  // Custom InputTypes

  /**
   * TipoEjercicioCountOutputType without action
   */
  export type TipoEjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicioCountOutputType
     */
    select?: TipoEjercicioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TipoEjercicioCountOutputType without action
   */
  export type TipoEjercicioCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjerciciosWhereInput
  }



  /**
   * Count Type TurnoCountOutputType
   */

  export type TurnoCountOutputType = {
    Administrador: number
    Grupos: number
  }

  export type TurnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Administrador?: boolean | TurnoCountOutputTypeCountAdministradorArgs
    Grupos?: boolean | TurnoCountOutputTypeCountGruposArgs
  }

  // Custom InputTypes

  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoCountOutputType
     */
    select?: TurnoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeCountAdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
  }


  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
    Turno_id: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
    Turno_id: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
    Turno_id: number | null
  }

  export type AdministradorMaxAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
    Turno_id: number | null
  }

  export type AdministradorCountAggregateOutputType = {
    Usuario_id: number
    Escuela_id: number
    Turno_id: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    Turno_id?: true
  }

  export type AdministradorSumAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    Turno_id?: true
  }

  export type AdministradorMinAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    Turno_id?: true
  }

  export type AdministradorMaxAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    Turno_id?: true
  }

  export type AdministradorCountAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    Turno_id?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    Usuario_id: number
    Escuela_id: number | null
    Turno_id: number | null
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Usuario_id?: boolean
    Escuela_id?: boolean
    Turno_id?: boolean
    Escuela?: boolean | Administrador$EscuelaArgs<ExtArgs>
    Turno?: boolean | Administrador$TurnoArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    Usuario_id?: boolean
    Escuela_id?: boolean
    Turno_id?: boolean
  }

  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Escuela?: boolean | Administrador$EscuelaArgs<ExtArgs>
    Turno?: boolean | Administrador$TurnoArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      Escuela: Prisma.$EscuelaPayload<ExtArgs> | null
      Turno: Prisma.$TurnoPayload<ExtArgs> | null
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Usuario_id: number
      Escuela_id: number | null
      Turno_id: number | null
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }


  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdministradorFindManyArgs, 'select' | 'include'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdministradorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Administrador that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdministradorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `Usuario_id`
     * const administradorWithUsuario_idOnly = await prisma.administrador.findMany({ select: { Usuario_id: true } })
     * 
    **/
    findMany<T extends AdministradorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
    **/
    create<T extends AdministradorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Administradors.
     *     @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     *     @example
     *     // Create many Administradors
     *     const administrador = await prisma.administrador.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdministradorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
    **/
    delete<T extends AdministradorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdministradorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdministradorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdministradorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
    **/
    upsert<T extends AdministradorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>
    ): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Escuela<T extends Administrador$EscuelaArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$EscuelaArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Turno<T extends Administrador$TurnoArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$TurnoArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Administrador model
   */ 
  interface AdministradorFieldRefs {
    readonly Usuario_id: FieldRef<"Administrador", 'Int'>
    readonly Escuela_id: FieldRef<"Administrador", 'Int'>
    readonly Turno_id: FieldRef<"Administrador", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }


  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }


  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }


  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }


  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }


  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }


  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }


  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
  }


  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }


  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }


  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
  }


  /**
   * Administrador.Escuela
   */
  export type Administrador$EscuelaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    where?: EscuelaWhereInput
  }


  /**
   * Administrador.Turno
   */
  export type Administrador$TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
  }


  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
  }



  /**
   * Model Alumnos
   */

  export type AggregateAlumnos = {
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  export type AlumnosAvgAggregateOutputType = {
    Usuario_id: number | null
    Grupo_id: number | null
  }

  export type AlumnosSumAggregateOutputType = {
    Usuario_id: number | null
    Grupo_id: number | null
  }

  export type AlumnosMinAggregateOutputType = {
    Usuario_id: number | null
    Grupo_id: number | null
  }

  export type AlumnosMaxAggregateOutputType = {
    Usuario_id: number | null
    Grupo_id: number | null
  }

  export type AlumnosCountAggregateOutputType = {
    Usuario_id: number
    Grupo_id: number
    _all: number
  }


  export type AlumnosAvgAggregateInputType = {
    Usuario_id?: true
    Grupo_id?: true
  }

  export type AlumnosSumAggregateInputType = {
    Usuario_id?: true
    Grupo_id?: true
  }

  export type AlumnosMinAggregateInputType = {
    Usuario_id?: true
    Grupo_id?: true
  }

  export type AlumnosMaxAggregateInputType = {
    Usuario_id?: true
    Grupo_id?: true
  }

  export type AlumnosCountAggregateInputType = {
    Usuario_id?: true
    Grupo_id?: true
    _all?: true
  }

  export type AlumnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to aggregate.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alumnos
    **/
    _count?: true | AlumnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumnosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumnosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumnosMaxAggregateInputType
  }

  export type GetAlumnosAggregateType<T extends AlumnosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumnos[P]>
      : GetScalarType<T[P], AggregateAlumnos[P]>
  }




  export type AlumnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumnosWhereInput
    orderBy?: AlumnosOrderByWithAggregationInput | AlumnosOrderByWithAggregationInput[]
    by: AlumnosScalarFieldEnum[] | AlumnosScalarFieldEnum
    having?: AlumnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumnosCountAggregateInputType | true
    _avg?: AlumnosAvgAggregateInputType
    _sum?: AlumnosSumAggregateInputType
    _min?: AlumnosMinAggregateInputType
    _max?: AlumnosMaxAggregateInputType
  }

  export type AlumnosGroupByOutputType = {
    Usuario_id: number
    Grupo_id: number | null
    _count: AlumnosCountAggregateOutputType | null
    _avg: AlumnosAvgAggregateOutputType | null
    _sum: AlumnosSumAggregateOutputType | null
    _min: AlumnosMinAggregateOutputType | null
    _max: AlumnosMaxAggregateOutputType | null
  }

  type GetAlumnosGroupByPayload<T extends AlumnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
            : GetScalarType<T[P], AlumnosGroupByOutputType[P]>
        }
      >
    >


  export type AlumnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Usuario_id?: boolean
    Grupo_id?: boolean
    Grupos?: boolean | Alumnos$GruposArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Respuestas?: boolean | Alumnos$RespuestasArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alumnos"]>

  export type AlumnosSelectScalar = {
    Usuario_id?: boolean
    Grupo_id?: boolean
  }

  export type AlumnosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupos?: boolean | Alumnos$GruposArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Respuestas?: boolean | Alumnos$RespuestasArgs<ExtArgs>
    _count?: boolean | AlumnosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlumnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alumnos"
    objects: {
      Grupos: Prisma.$GruposPayload<ExtArgs> | null
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
      Respuestas: Prisma.$RespuestasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Usuario_id: number
      Grupo_id: number | null
    }, ExtArgs["result"]["alumnos"]>
    composites: {}
  }


  type AlumnosGetPayload<S extends boolean | null | undefined | AlumnosDefaultArgs> = $Result.GetResult<Prisma.$AlumnosPayload, S>

  type AlumnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlumnosFindManyArgs, 'select' | 'include'> & {
      select?: AlumnosCountAggregateInputType | true
    }

  export interface AlumnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alumnos'], meta: { name: 'Alumnos' } }
    /**
     * Find zero or one Alumnos that matches the filter.
     * @param {AlumnosFindUniqueArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlumnosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosFindUniqueArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Alumnos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlumnosFindUniqueOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlumnosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindFirstArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlumnosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosFindFirstArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Alumnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindFirstOrThrowArgs} args - Arguments to find a Alumnos
     * @example
     * // Get one Alumnos
     * const alumnos = await prisma.alumnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlumnosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumnos.findMany()
     * 
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumnos.findMany({ take: 10 })
     * 
     * // Only select the `Usuario_id`
     * const alumnosWithUsuario_idOnly = await prisma.alumnos.findMany({ select: { Usuario_id: true } })
     * 
    **/
    findMany<T extends AlumnosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Alumnos.
     * @param {AlumnosCreateArgs} args - Arguments to create a Alumnos.
     * @example
     * // Create one Alumnos
     * const Alumnos = await prisma.alumnos.create({
     *   data: {
     *     // ... data to create a Alumnos
     *   }
     * })
     * 
    **/
    create<T extends AlumnosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosCreateArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Alumnos.
     *     @param {AlumnosCreateManyArgs} args - Arguments to create many Alumnos.
     *     @example
     *     // Create many Alumnos
     *     const alumnos = await prisma.alumnos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlumnosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alumnos.
     * @param {AlumnosDeleteArgs} args - Arguments to delete one Alumnos.
     * @example
     * // Delete one Alumnos
     * const Alumnos = await prisma.alumnos.delete({
     *   where: {
     *     // ... filter to delete one Alumnos
     *   }
     * })
     * 
    **/
    delete<T extends AlumnosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosDeleteArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Alumnos.
     * @param {AlumnosUpdateArgs} args - Arguments to update one Alumnos.
     * @example
     * // Update one Alumnos
     * const alumnos = await prisma.alumnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlumnosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosUpdateArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alumnos.
     * @param {AlumnosDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlumnosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlumnosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumnos = await prisma.alumnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlumnosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alumnos.
     * @param {AlumnosUpsertArgs} args - Arguments to update or create a Alumnos.
     * @example
     * // Update or create a Alumnos
     * const alumnos = await prisma.alumnos.upsert({
     *   create: {
     *     // ... data to create a Alumnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos we want to update
     *   }
     * })
    **/
    upsert<T extends AlumnosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlumnosUpsertArgs<ExtArgs>>
    ): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumnos.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends AlumnosCountArgs>(
      args?: Subset<T, AlumnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnosAggregateArgs>(args: Subset<T, AlumnosAggregateArgs>): Prisma.PrismaPromise<GetAlumnosAggregateType<T>>

    /**
     * Group by Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnosGroupByArgs} args - Group by arguments.
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
      T extends AlumnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumnosGroupByArgs['orderBy'] }
        : { orderBy?: AlumnosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlumnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alumnos model
   */
  readonly fields: AlumnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alumnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Grupos<T extends Alumnos$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Alumnos$GruposArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Respuestas<T extends Alumnos$RespuestasArgs<ExtArgs> = {}>(args?: Subset<T, Alumnos$RespuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Alumnos model
   */ 
  interface AlumnosFieldRefs {
    readonly Usuario_id: FieldRef<"Alumnos", 'Int'>
    readonly Grupo_id: FieldRef<"Alumnos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Alumnos findUnique
   */
  export type AlumnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where: AlumnosWhereUniqueInput
  }


  /**
   * Alumnos findUniqueOrThrow
   */
  export type AlumnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where: AlumnosWhereUniqueInput
  }


  /**
   * Alumnos findFirst
   */
  export type AlumnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }


  /**
   * Alumnos findFirstOrThrow
   */
  export type AlumnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alumnos.
     */
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }


  /**
   * Alumnos findMany
   */
  export type AlumnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter, which Alumnos to fetch.
     */
    where?: AlumnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alumnos to fetch.
     */
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alumnos.
     */
    cursor?: AlumnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alumnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alumnos.
     */
    skip?: number
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }


  /**
   * Alumnos create
   */
  export type AlumnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The data needed to create a Alumnos.
     */
    data: XOR<AlumnosCreateInput, AlumnosUncheckedCreateInput>
  }


  /**
   * Alumnos createMany
   */
  export type AlumnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alumnos.
     */
    data: AlumnosCreateManyInput | AlumnosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Alumnos update
   */
  export type AlumnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The data needed to update a Alumnos.
     */
    data: XOR<AlumnosUpdateInput, AlumnosUncheckedUpdateInput>
    /**
     * Choose, which Alumnos to update.
     */
    where: AlumnosWhereUniqueInput
  }


  /**
   * Alumnos updateMany
   */
  export type AlumnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alumnos.
     */
    data: XOR<AlumnosUpdateManyMutationInput, AlumnosUncheckedUpdateManyInput>
    /**
     * Filter which Alumnos to update
     */
    where?: AlumnosWhereInput
  }


  /**
   * Alumnos upsert
   */
  export type AlumnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * The filter to search for the Alumnos to update in case it exists.
     */
    where: AlumnosWhereUniqueInput
    /**
     * In case the Alumnos found by the `where` argument doesn't exist, create a new Alumnos with this data.
     */
    create: XOR<AlumnosCreateInput, AlumnosUncheckedCreateInput>
    /**
     * In case the Alumnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumnosUpdateInput, AlumnosUncheckedUpdateInput>
  }


  /**
   * Alumnos delete
   */
  export type AlumnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    /**
     * Filter which Alumnos to delete.
     */
    where: AlumnosWhereUniqueInput
  }


  /**
   * Alumnos deleteMany
   */
  export type AlumnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alumnos to delete
     */
    where?: AlumnosWhereInput
  }


  /**
   * Alumnos.Grupos
   */
  export type Alumnos$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
  }


  /**
   * Alumnos.Respuestas
   */
  export type Alumnos$RespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    where?: RespuestasWhereInput
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    cursor?: RespuestasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }


  /**
   * Alumnos without action
   */
  export type AlumnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
  }



  /**
   * Model Ejercicios
   */

  export type AggregateEjercicios = {
    _count: EjerciciosCountAggregateOutputType | null
    _avg: EjerciciosAvgAggregateOutputType | null
    _sum: EjerciciosSumAggregateOutputType | null
    _min: EjerciciosMinAggregateOutputType | null
    _max: EjerciciosMaxAggregateOutputType | null
  }

  export type EjerciciosAvgAggregateOutputType = {
    Ejercicios_id: number | null
    MaestroID: number | null
    GrupoID: number | null
    TipoEjercicio_id: number | null
    Estado_id: number | null
  }

  export type EjerciciosSumAggregateOutputType = {
    Ejercicios_id: number | null
    MaestroID: number | null
    GrupoID: number | null
    TipoEjercicio_id: number | null
    Estado_id: number | null
  }

  export type EjerciciosMinAggregateOutputType = {
    Ejercicios_id: number | null
    NombreEjercicio: string | null
    MaestroID: number | null
    GrupoID: number | null
    TipoEjercicio_id: number | null
    FechaPublicacion: Date | null
    FechaLimite: Date | null
    Estado_id: number | null
  }

  export type EjerciciosMaxAggregateOutputType = {
    Ejercicios_id: number | null
    NombreEjercicio: string | null
    MaestroID: number | null
    GrupoID: number | null
    TipoEjercicio_id: number | null
    FechaPublicacion: Date | null
    FechaLimite: Date | null
    Estado_id: number | null
  }

  export type EjerciciosCountAggregateOutputType = {
    Ejercicios_id: number
    NombreEjercicio: number
    MaestroID: number
    GrupoID: number
    TipoEjercicio_id: number
    FechaPublicacion: number
    FechaLimite: number
    Estado_id: number
    _all: number
  }


  export type EjerciciosAvgAggregateInputType = {
    Ejercicios_id?: true
    MaestroID?: true
    GrupoID?: true
    TipoEjercicio_id?: true
    Estado_id?: true
  }

  export type EjerciciosSumAggregateInputType = {
    Ejercicios_id?: true
    MaestroID?: true
    GrupoID?: true
    TipoEjercicio_id?: true
    Estado_id?: true
  }

  export type EjerciciosMinAggregateInputType = {
    Ejercicios_id?: true
    NombreEjercicio?: true
    MaestroID?: true
    GrupoID?: true
    TipoEjercicio_id?: true
    FechaPublicacion?: true
    FechaLimite?: true
    Estado_id?: true
  }

  export type EjerciciosMaxAggregateInputType = {
    Ejercicios_id?: true
    NombreEjercicio?: true
    MaestroID?: true
    GrupoID?: true
    TipoEjercicio_id?: true
    FechaPublicacion?: true
    FechaLimite?: true
    Estado_id?: true
  }

  export type EjerciciosCountAggregateInputType = {
    Ejercicios_id?: true
    NombreEjercicio?: true
    MaestroID?: true
    GrupoID?: true
    TipoEjercicio_id?: true
    FechaPublicacion?: true
    FechaLimite?: true
    Estado_id?: true
    _all?: true
  }

  export type EjerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to aggregate.
     */
    where?: EjerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EjerciciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EjerciciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjerciciosMaxAggregateInputType
  }

  export type GetEjerciciosAggregateType<T extends EjerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicios[P]>
      : GetScalarType<T[P], AggregateEjercicios[P]>
  }




  export type EjerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjerciciosWhereInput
    orderBy?: EjerciciosOrderByWithAggregationInput | EjerciciosOrderByWithAggregationInput[]
    by: EjerciciosScalarFieldEnum[] | EjerciciosScalarFieldEnum
    having?: EjerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjerciciosCountAggregateInputType | true
    _avg?: EjerciciosAvgAggregateInputType
    _sum?: EjerciciosSumAggregateInputType
    _min?: EjerciciosMinAggregateInputType
    _max?: EjerciciosMaxAggregateInputType
  }

  export type EjerciciosGroupByOutputType = {
    Ejercicios_id: number
    NombreEjercicio: string
    MaestroID: number | null
    GrupoID: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date
    FechaLimite: Date | null
    Estado_id: number
    _count: EjerciciosCountAggregateOutputType | null
    _avg: EjerciciosAvgAggregateOutputType | null
    _sum: EjerciciosSumAggregateOutputType | null
    _min: EjerciciosMinAggregateOutputType | null
    _max: EjerciciosMaxAggregateOutputType | null
  }

  type GetEjerciciosGroupByPayload<T extends EjerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], EjerciciosGroupByOutputType[P]>
        }
      >
    >


  export type EjerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Ejercicios_id?: boolean
    NombreEjercicio?: boolean
    MaestroID?: boolean
    GrupoID?: boolean
    TipoEjercicio_id?: boolean
    FechaPublicacion?: boolean
    FechaLimite?: boolean
    Estado_id?: boolean
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
    Grupos?: boolean | Ejercicios$GruposArgs<ExtArgs>
    Maestros?: boolean | Ejercicios$MaestrosArgs<ExtArgs>
    TipoEjercicio?: boolean | TipoEjercicioDefaultArgs<ExtArgs>
    Incisos?: boolean | Ejercicios$IncisosArgs<ExtArgs>
    _count?: boolean | EjerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicios"]>

  export type EjerciciosSelectScalar = {
    Ejercicios_id?: boolean
    NombreEjercicio?: boolean
    MaestroID?: boolean
    GrupoID?: boolean
    TipoEjercicio_id?: boolean
    FechaPublicacion?: boolean
    FechaLimite?: boolean
    Estado_id?: boolean
  }

  export type EjerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
    Grupos?: boolean | Ejercicios$GruposArgs<ExtArgs>
    Maestros?: boolean | Ejercicios$MaestrosArgs<ExtArgs>
    TipoEjercicio?: boolean | TipoEjercicioDefaultArgs<ExtArgs>
    Incisos?: boolean | Ejercicios$IncisosArgs<ExtArgs>
    _count?: boolean | EjerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EjerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicios"
    objects: {
      Estado: Prisma.$EstadoPayload<ExtArgs>
      Grupos: Prisma.$GruposPayload<ExtArgs> | null
      Maestros: Prisma.$MaestrosPayload<ExtArgs> | null
      TipoEjercicio: Prisma.$TipoEjercicioPayload<ExtArgs>
      Incisos: Prisma.$IncisosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Ejercicios_id: number
      NombreEjercicio: string
      MaestroID: number | null
      GrupoID: number | null
      TipoEjercicio_id: number
      FechaPublicacion: Date
      FechaLimite: Date | null
      Estado_id: number
    }, ExtArgs["result"]["ejercicios"]>
    composites: {}
  }


  type EjerciciosGetPayload<S extends boolean | null | undefined | EjerciciosDefaultArgs> = $Result.GetResult<Prisma.$EjerciciosPayload, S>

  type EjerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EjerciciosFindManyArgs, 'select' | 'include'> & {
      select?: EjerciciosCountAggregateInputType | true
    }

  export interface EjerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicios'], meta: { name: 'Ejercicios' } }
    /**
     * Find zero or one Ejercicios that matches the filter.
     * @param {EjerciciosFindUniqueArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EjerciciosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosFindUniqueArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ejercicios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EjerciciosFindUniqueOrThrowArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EjerciciosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosFindFirstArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EjerciciosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosFindFirstArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ejercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosFindFirstOrThrowArgs} args - Arguments to find a Ejercicios
     * @example
     * // Get one Ejercicios
     * const ejercicios = await prisma.ejercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EjerciciosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicios.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicios.findMany({ take: 10 })
     * 
     * // Only select the `Ejercicios_id`
     * const ejerciciosWithEjercicios_idOnly = await prisma.ejercicios.findMany({ select: { Ejercicios_id: true } })
     * 
    **/
    findMany<T extends EjerciciosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ejercicios.
     * @param {EjerciciosCreateArgs} args - Arguments to create a Ejercicios.
     * @example
     * // Create one Ejercicios
     * const Ejercicios = await prisma.ejercicios.create({
     *   data: {
     *     // ... data to create a Ejercicios
     *   }
     * })
     * 
    **/
    create<T extends EjerciciosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosCreateArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ejercicios.
     *     @param {EjerciciosCreateManyArgs} args - Arguments to create many Ejercicios.
     *     @example
     *     // Create many Ejercicios
     *     const ejercicios = await prisma.ejercicios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EjerciciosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ejercicios.
     * @param {EjerciciosDeleteArgs} args - Arguments to delete one Ejercicios.
     * @example
     * // Delete one Ejercicios
     * const Ejercicios = await prisma.ejercicios.delete({
     *   where: {
     *     // ... filter to delete one Ejercicios
     *   }
     * })
     * 
    **/
    delete<T extends EjerciciosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosDeleteArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ejercicios.
     * @param {EjerciciosUpdateArgs} args - Arguments to update one Ejercicios.
     * @example
     * // Update one Ejercicios
     * const ejercicios = await prisma.ejercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EjerciciosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosUpdateArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjerciciosDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EjerciciosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EjerciciosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicios = await prisma.ejercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EjerciciosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ejercicios.
     * @param {EjerciciosUpsertArgs} args - Arguments to update or create a Ejercicios.
     * @example
     * // Update or create a Ejercicios
     * const ejercicios = await prisma.ejercicios.upsert({
     *   create: {
     *     // ... data to create a Ejercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicios we want to update
     *   }
     * })
    **/
    upsert<T extends EjerciciosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EjerciciosUpsertArgs<ExtArgs>>
    ): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicios.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjerciciosCountArgs>(
      args?: Subset<T, EjerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjerciciosAggregateArgs>(args: Subset<T, EjerciciosAggregateArgs>): Prisma.PrismaPromise<GetEjerciciosAggregateType<T>>

    /**
     * Group by Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjerciciosGroupByArgs} args - Group by arguments.
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
      T extends EjerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjerciciosGroupByArgs['orderBy'] }
        : { orderBy?: EjerciciosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EjerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicios model
   */
  readonly fields: EjerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Estado<T extends EstadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoDefaultArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Grupos<T extends Ejercicios$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicios$GruposArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Maestros<T extends Ejercicios$MaestrosArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicios$MaestrosArgs<ExtArgs>>): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    TipoEjercicio<T extends TipoEjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoEjercicioDefaultArgs<ExtArgs>>): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Incisos<T extends Ejercicios$IncisosArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicios$IncisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ejercicios model
   */ 
  interface EjerciciosFieldRefs {
    readonly Ejercicios_id: FieldRef<"Ejercicios", 'Int'>
    readonly NombreEjercicio: FieldRef<"Ejercicios", 'String'>
    readonly MaestroID: FieldRef<"Ejercicios", 'Int'>
    readonly GrupoID: FieldRef<"Ejercicios", 'Int'>
    readonly TipoEjercicio_id: FieldRef<"Ejercicios", 'Int'>
    readonly FechaPublicacion: FieldRef<"Ejercicios", 'DateTime'>
    readonly FechaLimite: FieldRef<"Ejercicios", 'DateTime'>
    readonly Estado_id: FieldRef<"Ejercicios", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ejercicios findUnique
   */
  export type EjerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where: EjerciciosWhereUniqueInput
  }


  /**
   * Ejercicios findUniqueOrThrow
   */
  export type EjerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where: EjerciciosWhereUniqueInput
  }


  /**
   * Ejercicios findFirst
   */
  export type EjerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Ejercicios findFirstOrThrow
   */
  export type EjerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Ejercicios findMany
   */
  export type EjerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Ejercicios create
   */
  export type EjerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicios.
     */
    data: XOR<EjerciciosCreateInput, EjerciciosUncheckedCreateInput>
  }


  /**
   * Ejercicios createMany
   */
  export type EjerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjerciciosCreateManyInput | EjerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ejercicios update
   */
  export type EjerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicios.
     */
    data: XOR<EjerciciosUpdateInput, EjerciciosUncheckedUpdateInput>
    /**
     * Choose, which Ejercicios to update.
     */
    where: EjerciciosWhereUniqueInput
  }


  /**
   * Ejercicios updateMany
   */
  export type EjerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjerciciosUpdateManyMutationInput, EjerciciosUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjerciciosWhereInput
  }


  /**
   * Ejercicios upsert
   */
  export type EjerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicios to update in case it exists.
     */
    where: EjerciciosWhereUniqueInput
    /**
     * In case the Ejercicios found by the `where` argument doesn't exist, create a new Ejercicios with this data.
     */
    create: XOR<EjerciciosCreateInput, EjerciciosUncheckedCreateInput>
    /**
     * In case the Ejercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjerciciosUpdateInput, EjerciciosUncheckedUpdateInput>
  }


  /**
   * Ejercicios delete
   */
  export type EjerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    /**
     * Filter which Ejercicios to delete.
     */
    where: EjerciciosWhereUniqueInput
  }


  /**
   * Ejercicios deleteMany
   */
  export type EjerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjerciciosWhereInput
  }


  /**
   * Ejercicios.Grupos
   */
  export type Ejercicios$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
  }


  /**
   * Ejercicios.Maestros
   */
  export type Ejercicios$MaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    where?: MaestrosWhereInput
  }


  /**
   * Ejercicios.Incisos
   */
  export type Ejercicios$IncisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    where?: IncisosWhereInput
    orderBy?: IncisosOrderByWithRelationInput | IncisosOrderByWithRelationInput[]
    cursor?: IncisosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncisosScalarFieldEnum | IncisosScalarFieldEnum[]
  }


  /**
   * Ejercicios without action
   */
  export type EjerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
  }



  /**
   * Model Escuela
   */

  export type AggregateEscuela = {
    _count: EscuelaCountAggregateOutputType | null
    _avg: EscuelaAvgAggregateOutputType | null
    _sum: EscuelaSumAggregateOutputType | null
    _min: EscuelaMinAggregateOutputType | null
    _max: EscuelaMaxAggregateOutputType | null
  }

  export type EscuelaAvgAggregateOutputType = {
    Escuela_id: number | null
  }

  export type EscuelaSumAggregateOutputType = {
    Escuela_id: number | null
  }

  export type EscuelaMinAggregateOutputType = {
    Escuela_id: number | null
    Nombre: string | null
  }

  export type EscuelaMaxAggregateOutputType = {
    Escuela_id: number | null
    Nombre: string | null
  }

  export type EscuelaCountAggregateOutputType = {
    Escuela_id: number
    Nombre: number
    _all: number
  }


  export type EscuelaAvgAggregateInputType = {
    Escuela_id?: true
  }

  export type EscuelaSumAggregateInputType = {
    Escuela_id?: true
  }

  export type EscuelaMinAggregateInputType = {
    Escuela_id?: true
    Nombre?: true
  }

  export type EscuelaMaxAggregateInputType = {
    Escuela_id?: true
    Nombre?: true
  }

  export type EscuelaCountAggregateInputType = {
    Escuela_id?: true
    Nombre?: true
    _all?: true
  }

  export type EscuelaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escuela to aggregate.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escuelas
    **/
    _count?: true | EscuelaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscuelaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscuelaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscuelaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscuelaMaxAggregateInputType
  }

  export type GetEscuelaAggregateType<T extends EscuelaAggregateArgs> = {
        [P in keyof T & keyof AggregateEscuela]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscuela[P]>
      : GetScalarType<T[P], AggregateEscuela[P]>
  }




  export type EscuelaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscuelaWhereInput
    orderBy?: EscuelaOrderByWithAggregationInput | EscuelaOrderByWithAggregationInput[]
    by: EscuelaScalarFieldEnum[] | EscuelaScalarFieldEnum
    having?: EscuelaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscuelaCountAggregateInputType | true
    _avg?: EscuelaAvgAggregateInputType
    _sum?: EscuelaSumAggregateInputType
    _min?: EscuelaMinAggregateInputType
    _max?: EscuelaMaxAggregateInputType
  }

  export type EscuelaGroupByOutputType = {
    Escuela_id: number
    Nombre: string
    _count: EscuelaCountAggregateOutputType | null
    _avg: EscuelaAvgAggregateOutputType | null
    _sum: EscuelaSumAggregateOutputType | null
    _min: EscuelaMinAggregateOutputType | null
    _max: EscuelaMaxAggregateOutputType | null
  }

  type GetEscuelaGroupByPayload<T extends EscuelaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscuelaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscuelaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscuelaGroupByOutputType[P]>
            : GetScalarType<T[P], EscuelaGroupByOutputType[P]>
        }
      >
    >


  export type EscuelaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Escuela_id?: boolean
    Nombre?: boolean
    Administrador?: boolean | Escuela$AdministradorArgs<ExtArgs>
    Grupos?: boolean | Escuela$GruposArgs<ExtArgs>
    Maestros?: boolean | Escuela$MaestrosArgs<ExtArgs>
    _count?: boolean | EscuelaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escuela"]>

  export type EscuelaSelectScalar = {
    Escuela_id?: boolean
    Nombre?: boolean
  }

  export type EscuelaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Administrador?: boolean | Escuela$AdministradorArgs<ExtArgs>
    Grupos?: boolean | Escuela$GruposArgs<ExtArgs>
    Maestros?: boolean | Escuela$MaestrosArgs<ExtArgs>
    _count?: boolean | EscuelaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EscuelaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escuela"
    objects: {
      Administrador: Prisma.$AdministradorPayload<ExtArgs>[]
      Grupos: Prisma.$GruposPayload<ExtArgs>[]
      Maestros: Prisma.$MaestrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Escuela_id: number
      Nombre: string
    }, ExtArgs["result"]["escuela"]>
    composites: {}
  }


  type EscuelaGetPayload<S extends boolean | null | undefined | EscuelaDefaultArgs> = $Result.GetResult<Prisma.$EscuelaPayload, S>

  type EscuelaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EscuelaFindManyArgs, 'select' | 'include'> & {
      select?: EscuelaCountAggregateInputType | true
    }

  export interface EscuelaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escuela'], meta: { name: 'Escuela' } }
    /**
     * Find zero or one Escuela that matches the filter.
     * @param {EscuelaFindUniqueArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EscuelaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaFindUniqueArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Escuela that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EscuelaFindUniqueOrThrowArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EscuelaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Escuela that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindFirstArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EscuelaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaFindFirstArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Escuela that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindFirstOrThrowArgs} args - Arguments to find a Escuela
     * @example
     * // Get one Escuela
     * const escuela = await prisma.escuela.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EscuelaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Escuelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escuelas
     * const escuelas = await prisma.escuela.findMany()
     * 
     * // Get first 10 Escuelas
     * const escuelas = await prisma.escuela.findMany({ take: 10 })
     * 
     * // Only select the `Escuela_id`
     * const escuelaWithEscuela_idOnly = await prisma.escuela.findMany({ select: { Escuela_id: true } })
     * 
    **/
    findMany<T extends EscuelaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Escuela.
     * @param {EscuelaCreateArgs} args - Arguments to create a Escuela.
     * @example
     * // Create one Escuela
     * const Escuela = await prisma.escuela.create({
     *   data: {
     *     // ... data to create a Escuela
     *   }
     * })
     * 
    **/
    create<T extends EscuelaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaCreateArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Escuelas.
     *     @param {EscuelaCreateManyArgs} args - Arguments to create many Escuelas.
     *     @example
     *     // Create many Escuelas
     *     const escuela = await prisma.escuela.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EscuelaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Escuela.
     * @param {EscuelaDeleteArgs} args - Arguments to delete one Escuela.
     * @example
     * // Delete one Escuela
     * const Escuela = await prisma.escuela.delete({
     *   where: {
     *     // ... filter to delete one Escuela
     *   }
     * })
     * 
    **/
    delete<T extends EscuelaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaDeleteArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Escuela.
     * @param {EscuelaUpdateArgs} args - Arguments to update one Escuela.
     * @example
     * // Update one Escuela
     * const escuela = await prisma.escuela.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EscuelaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaUpdateArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Escuelas.
     * @param {EscuelaDeleteManyArgs} args - Arguments to filter Escuelas to delete.
     * @example
     * // Delete a few Escuelas
     * const { count } = await prisma.escuela.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EscuelaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EscuelaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escuelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escuelas
     * const escuela = await prisma.escuela.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EscuelaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Escuela.
     * @param {EscuelaUpsertArgs} args - Arguments to update or create a Escuela.
     * @example
     * // Update or create a Escuela
     * const escuela = await prisma.escuela.upsert({
     *   create: {
     *     // ... data to create a Escuela
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escuela we want to update
     *   }
     * })
    **/
    upsert<T extends EscuelaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EscuelaUpsertArgs<ExtArgs>>
    ): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Escuelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaCountArgs} args - Arguments to filter Escuelas to count.
     * @example
     * // Count the number of Escuelas
     * const count = await prisma.escuela.count({
     *   where: {
     *     // ... the filter for the Escuelas we want to count
     *   }
     * })
    **/
    count<T extends EscuelaCountArgs>(
      args?: Subset<T, EscuelaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscuelaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escuela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscuelaAggregateArgs>(args: Subset<T, EscuelaAggregateArgs>): Prisma.PrismaPromise<GetEscuelaAggregateType<T>>

    /**
     * Group by Escuela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscuelaGroupByArgs} args - Group by arguments.
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
      T extends EscuelaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscuelaGroupByArgs['orderBy'] }
        : { orderBy?: EscuelaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscuelaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscuelaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escuela model
   */
  readonly fields: EscuelaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escuela.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscuelaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Administrador<T extends Escuela$AdministradorArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$AdministradorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findMany'> | Null>;

    Grupos<T extends Escuela$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$GruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'> | Null>;

    Maestros<T extends Escuela$MaestrosArgs<ExtArgs> = {}>(args?: Subset<T, Escuela$MaestrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Escuela model
   */ 
  interface EscuelaFieldRefs {
    readonly Escuela_id: FieldRef<"Escuela", 'Int'>
    readonly Nombre: FieldRef<"Escuela", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Escuela findUnique
   */
  export type EscuelaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where: EscuelaWhereUniqueInput
  }


  /**
   * Escuela findUniqueOrThrow
   */
  export type EscuelaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where: EscuelaWhereUniqueInput
  }


  /**
   * Escuela findFirst
   */
  export type EscuelaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escuelas.
     */
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }


  /**
   * Escuela findFirstOrThrow
   */
  export type EscuelaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuela to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escuelas.
     */
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }


  /**
   * Escuela findMany
   */
  export type EscuelaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter, which Escuelas to fetch.
     */
    where?: EscuelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escuelas to fetch.
     */
    orderBy?: EscuelaOrderByWithRelationInput | EscuelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escuelas.
     */
    cursor?: EscuelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escuelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escuelas.
     */
    skip?: number
    distinct?: EscuelaScalarFieldEnum | EscuelaScalarFieldEnum[]
  }


  /**
   * Escuela create
   */
  export type EscuelaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The data needed to create a Escuela.
     */
    data: XOR<EscuelaCreateInput, EscuelaUncheckedCreateInput>
  }


  /**
   * Escuela createMany
   */
  export type EscuelaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escuelas.
     */
    data: EscuelaCreateManyInput | EscuelaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Escuela update
   */
  export type EscuelaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The data needed to update a Escuela.
     */
    data: XOR<EscuelaUpdateInput, EscuelaUncheckedUpdateInput>
    /**
     * Choose, which Escuela to update.
     */
    where: EscuelaWhereUniqueInput
  }


  /**
   * Escuela updateMany
   */
  export type EscuelaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escuelas.
     */
    data: XOR<EscuelaUpdateManyMutationInput, EscuelaUncheckedUpdateManyInput>
    /**
     * Filter which Escuelas to update
     */
    where?: EscuelaWhereInput
  }


  /**
   * Escuela upsert
   */
  export type EscuelaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * The filter to search for the Escuela to update in case it exists.
     */
    where: EscuelaWhereUniqueInput
    /**
     * In case the Escuela found by the `where` argument doesn't exist, create a new Escuela with this data.
     */
    create: XOR<EscuelaCreateInput, EscuelaUncheckedCreateInput>
    /**
     * In case the Escuela was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscuelaUpdateInput, EscuelaUncheckedUpdateInput>
  }


  /**
   * Escuela delete
   */
  export type EscuelaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    /**
     * Filter which Escuela to delete.
     */
    where: EscuelaWhereUniqueInput
  }


  /**
   * Escuela deleteMany
   */
  export type EscuelaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escuelas to delete
     */
    where?: EscuelaWhereInput
  }


  /**
   * Escuela.Administrador
   */
  export type Escuela$AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    cursor?: AdministradorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }


  /**
   * Escuela.Grupos
   */
  export type Escuela$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    cursor?: GruposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Escuela.Maestros
   */
  export type Escuela$MaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    where?: MaestrosWhereInput
    orderBy?: MaestrosOrderByWithRelationInput | MaestrosOrderByWithRelationInput[]
    cursor?: MaestrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaestrosScalarFieldEnum | MaestrosScalarFieldEnum[]
  }


  /**
   * Escuela without action
   */
  export type EscuelaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
  }



  /**
   * Model Estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    Estado_id: number | null
  }

  export type EstadoSumAggregateOutputType = {
    Estado_id: number | null
  }

  export type EstadoMinAggregateOutputType = {
    Estado_id: number | null
    Nombre: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    Estado_id: number | null
    Nombre: string | null
  }

  export type EstadoCountAggregateOutputType = {
    Estado_id: number
    Nombre: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    Estado_id?: true
  }

  export type EstadoSumAggregateInputType = {
    Estado_id?: true
  }

  export type EstadoMinAggregateInputType = {
    Estado_id?: true
    Nombre?: true
  }

  export type EstadoMaxAggregateInputType = {
    Estado_id?: true
    Nombre?: true
  }

  export type EstadoCountAggregateInputType = {
    Estado_id?: true
    Nombre?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado to aggregate.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type EstadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithAggregationInput | EstadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: EstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    Estado_id: number
    Nombre: string
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends EstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Estado_id?: boolean
    Nombre?: boolean
    Ejercicios?: boolean | Estado$EjerciciosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectScalar = {
    Estado_id?: boolean
    Nombre?: boolean
  }

  export type EstadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | Estado$EjerciciosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EstadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado"
    objects: {
      Ejercicios: Prisma.$EjerciciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Estado_id: number
      Nombre: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }


  type EstadoGetPayload<S extends boolean | null | undefined | EstadoDefaultArgs> = $Result.GetResult<Prisma.$EstadoPayload, S>

  type EstadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstadoFindManyArgs, 'select' | 'include'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface EstadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado'], meta: { name: 'Estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {EstadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstadoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoFindUniqueArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstadoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstadoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindFirstArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstadoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `Estado_id`
     * const estadoWithEstado_idOnly = await prisma.estado.findMany({ select: { Estado_id: true } })
     * 
    **/
    findMany<T extends EstadoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estado.
     * @param {EstadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
    **/
    create<T extends EstadoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoCreateArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Estados.
     *     @param {EstadoCreateManyArgs} args - Arguments to create many Estados.
     *     @example
     *     // Create many Estados
     *     const estado = await prisma.estado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EstadoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estado.
     * @param {EstadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
    **/
    delete<T extends EstadoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoDeleteArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estado.
     * @param {EstadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstadoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpdateArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estados.
     * @param {EstadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstadoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstadoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estado.
     * @param {EstadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
    **/
    upsert<T extends EstadoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpsertArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadoCountArgs>(
      args?: Subset<T, EstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoGroupByArgs} args - Group by arguments.
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
      T extends EstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado model
   */
  readonly fields: EstadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ejercicios<T extends Estado$EjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Estado$EjerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Estado model
   */ 
  interface EstadoFieldRefs {
    readonly Estado_id: FieldRef<"Estado", 'Int'>
    readonly Nombre: FieldRef<"Estado", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Estado findUnique
   */
  export type EstadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado findUniqueOrThrow
   */
  export type EstadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado findFirst
   */
  export type EstadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado findFirstOrThrow
   */
  export type EstadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado findMany
   */
  export type EstadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado create
   */
  export type EstadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado.
     */
    data: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
  }


  /**
   * Estado createMany
   */
  export type EstadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Estado update
   */
  export type EstadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado.
     */
    data: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
    /**
     * Choose, which Estado to update.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado updateMany
   */
  export type EstadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
  }


  /**
   * Estado upsert
   */
  export type EstadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado to update in case it exists.
     */
    where: EstadoWhereUniqueInput
    /**
     * In case the Estado found by the `where` argument doesn't exist, create a new Estado with this data.
     */
    create: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
    /**
     * In case the Estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
  }


  /**
   * Estado delete
   */
  export type EstadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter which Estado to delete.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado deleteMany
   */
  export type EstadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadoWhereInput
  }


  /**
   * Estado.Ejercicios
   */
  export type Estado$EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    where?: EjerciciosWhereInput
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    cursor?: EjerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Estado without action
   */
  export type EstadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
  }



  /**
   * Model Grado
   */

  export type AggregateGrado = {
    _count: GradoCountAggregateOutputType | null
    _avg: GradoAvgAggregateOutputType | null
    _sum: GradoSumAggregateOutputType | null
    _min: GradoMinAggregateOutputType | null
    _max: GradoMaxAggregateOutputType | null
  }

  export type GradoAvgAggregateOutputType = {
    Grado_id: number | null
  }

  export type GradoSumAggregateOutputType = {
    Grado_id: number | null
  }

  export type GradoMinAggregateOutputType = {
    Grado_id: number | null
    Nivel: string | null
  }

  export type GradoMaxAggregateOutputType = {
    Grado_id: number | null
    Nivel: string | null
  }

  export type GradoCountAggregateOutputType = {
    Grado_id: number
    Nivel: number
    _all: number
  }


  export type GradoAvgAggregateInputType = {
    Grado_id?: true
  }

  export type GradoSumAggregateInputType = {
    Grado_id?: true
  }

  export type GradoMinAggregateInputType = {
    Grado_id?: true
    Nivel?: true
  }

  export type GradoMaxAggregateInputType = {
    Grado_id?: true
    Nivel?: true
  }

  export type GradoCountAggregateInputType = {
    Grado_id?: true
    Nivel?: true
    _all?: true
  }

  export type GradoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grado to aggregate.
     */
    where?: GradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grados to fetch.
     */
    orderBy?: GradoOrderByWithRelationInput | GradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grados
    **/
    _count?: true | GradoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradoMaxAggregateInputType
  }

  export type GetGradoAggregateType<T extends GradoAggregateArgs> = {
        [P in keyof T & keyof AggregateGrado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrado[P]>
      : GetScalarType<T[P], AggregateGrado[P]>
  }




  export type GradoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradoWhereInput
    orderBy?: GradoOrderByWithAggregationInput | GradoOrderByWithAggregationInput[]
    by: GradoScalarFieldEnum[] | GradoScalarFieldEnum
    having?: GradoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradoCountAggregateInputType | true
    _avg?: GradoAvgAggregateInputType
    _sum?: GradoSumAggregateInputType
    _min?: GradoMinAggregateInputType
    _max?: GradoMaxAggregateInputType
  }

  export type GradoGroupByOutputType = {
    Grado_id: number
    Nivel: string
    _count: GradoCountAggregateOutputType | null
    _avg: GradoAvgAggregateOutputType | null
    _sum: GradoSumAggregateOutputType | null
    _min: GradoMinAggregateOutputType | null
    _max: GradoMaxAggregateOutputType | null
  }

  type GetGradoGroupByPayload<T extends GradoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradoGroupByOutputType[P]>
            : GetScalarType<T[P], GradoGroupByOutputType[P]>
        }
      >
    >


  export type GradoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Grado_id?: boolean
    Nivel?: boolean
    Grupos?: boolean | Grado$GruposArgs<ExtArgs>
    _count?: boolean | GradoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grado"]>

  export type GradoSelectScalar = {
    Grado_id?: boolean
    Nivel?: boolean
  }

  export type GradoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupos?: boolean | Grado$GruposArgs<ExtArgs>
    _count?: boolean | GradoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GradoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grado"
    objects: {
      Grupos: Prisma.$GruposPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Grado_id: number
      Nivel: string
    }, ExtArgs["result"]["grado"]>
    composites: {}
  }


  type GradoGetPayload<S extends boolean | null | undefined | GradoDefaultArgs> = $Result.GetResult<Prisma.$GradoPayload, S>

  type GradoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GradoFindManyArgs, 'select' | 'include'> & {
      select?: GradoCountAggregateInputType | true
    }

  export interface GradoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grado'], meta: { name: 'Grado' } }
    /**
     * Find zero or one Grado that matches the filter.
     * @param {GradoFindUniqueArgs} args - Arguments to find a Grado
     * @example
     * // Get one Grado
     * const grado = await prisma.grado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GradoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GradoFindUniqueArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Grado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GradoFindUniqueOrThrowArgs} args - Arguments to find a Grado
     * @example
     * // Get one Grado
     * const grado = await prisma.grado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GradoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Grado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoFindFirstArgs} args - Arguments to find a Grado
     * @example
     * // Get one Grado
     * const grado = await prisma.grado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GradoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoFindFirstArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Grado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoFindFirstOrThrowArgs} args - Arguments to find a Grado
     * @example
     * // Get one Grado
     * const grado = await prisma.grado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GradoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Grados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grados
     * const grados = await prisma.grado.findMany()
     * 
     * // Get first 10 Grados
     * const grados = await prisma.grado.findMany({ take: 10 })
     * 
     * // Only select the `Grado_id`
     * const gradoWithGrado_idOnly = await prisma.grado.findMany({ select: { Grado_id: true } })
     * 
    **/
    findMany<T extends GradoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Grado.
     * @param {GradoCreateArgs} args - Arguments to create a Grado.
     * @example
     * // Create one Grado
     * const Grado = await prisma.grado.create({
     *   data: {
     *     // ... data to create a Grado
     *   }
     * })
     * 
    **/
    create<T extends GradoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GradoCreateArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Grados.
     *     @param {GradoCreateManyArgs} args - Arguments to create many Grados.
     *     @example
     *     // Create many Grados
     *     const grado = await prisma.grado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GradoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grado.
     * @param {GradoDeleteArgs} args - Arguments to delete one Grado.
     * @example
     * // Delete one Grado
     * const Grado = await prisma.grado.delete({
     *   where: {
     *     // ... filter to delete one Grado
     *   }
     * })
     * 
    **/
    delete<T extends GradoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GradoDeleteArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Grado.
     * @param {GradoUpdateArgs} args - Arguments to update one Grado.
     * @example
     * // Update one Grado
     * const grado = await prisma.grado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GradoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GradoUpdateArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Grados.
     * @param {GradoDeleteManyArgs} args - Arguments to filter Grados to delete.
     * @example
     * // Delete a few Grados
     * const { count } = await prisma.grado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GradoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GradoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grados
     * const grado = await prisma.grado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GradoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GradoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grado.
     * @param {GradoUpsertArgs} args - Arguments to update or create a Grado.
     * @example
     * // Update or create a Grado
     * const grado = await prisma.grado.upsert({
     *   create: {
     *     // ... data to create a Grado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grado we want to update
     *   }
     * })
    **/
    upsert<T extends GradoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GradoUpsertArgs<ExtArgs>>
    ): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Grados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoCountArgs} args - Arguments to filter Grados to count.
     * @example
     * // Count the number of Grados
     * const count = await prisma.grado.count({
     *   where: {
     *     // ... the filter for the Grados we want to count
     *   }
     * })
    **/
    count<T extends GradoCountArgs>(
      args?: Subset<T, GradoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradoAggregateArgs>(args: Subset<T, GradoAggregateArgs>): Prisma.PrismaPromise<GetGradoAggregateType<T>>

    /**
     * Group by Grado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradoGroupByArgs} args - Group by arguments.
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
      T extends GradoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradoGroupByArgs['orderBy'] }
        : { orderBy?: GradoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grado model
   */
  readonly fields: GradoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Grupos<T extends Grado$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Grado$GruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Grado model
   */ 
  interface GradoFieldRefs {
    readonly Grado_id: FieldRef<"Grado", 'Int'>
    readonly Nivel: FieldRef<"Grado", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Grado findUnique
   */
  export type GradoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter, which Grado to fetch.
     */
    where: GradoWhereUniqueInput
  }


  /**
   * Grado findUniqueOrThrow
   */
  export type GradoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter, which Grado to fetch.
     */
    where: GradoWhereUniqueInput
  }


  /**
   * Grado findFirst
   */
  export type GradoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter, which Grado to fetch.
     */
    where?: GradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grados to fetch.
     */
    orderBy?: GradoOrderByWithRelationInput | GradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grados.
     */
    cursor?: GradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grados.
     */
    distinct?: GradoScalarFieldEnum | GradoScalarFieldEnum[]
  }


  /**
   * Grado findFirstOrThrow
   */
  export type GradoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter, which Grado to fetch.
     */
    where?: GradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grados to fetch.
     */
    orderBy?: GradoOrderByWithRelationInput | GradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grados.
     */
    cursor?: GradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grados.
     */
    distinct?: GradoScalarFieldEnum | GradoScalarFieldEnum[]
  }


  /**
   * Grado findMany
   */
  export type GradoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter, which Grados to fetch.
     */
    where?: GradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grados to fetch.
     */
    orderBy?: GradoOrderByWithRelationInput | GradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grados.
     */
    cursor?: GradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grados.
     */
    skip?: number
    distinct?: GradoScalarFieldEnum | GradoScalarFieldEnum[]
  }


  /**
   * Grado create
   */
  export type GradoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * The data needed to create a Grado.
     */
    data: XOR<GradoCreateInput, GradoUncheckedCreateInput>
  }


  /**
   * Grado createMany
   */
  export type GradoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grados.
     */
    data: GradoCreateManyInput | GradoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Grado update
   */
  export type GradoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * The data needed to update a Grado.
     */
    data: XOR<GradoUpdateInput, GradoUncheckedUpdateInput>
    /**
     * Choose, which Grado to update.
     */
    where: GradoWhereUniqueInput
  }


  /**
   * Grado updateMany
   */
  export type GradoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grados.
     */
    data: XOR<GradoUpdateManyMutationInput, GradoUncheckedUpdateManyInput>
    /**
     * Filter which Grados to update
     */
    where?: GradoWhereInput
  }


  /**
   * Grado upsert
   */
  export type GradoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * The filter to search for the Grado to update in case it exists.
     */
    where: GradoWhereUniqueInput
    /**
     * In case the Grado found by the `where` argument doesn't exist, create a new Grado with this data.
     */
    create: XOR<GradoCreateInput, GradoUncheckedCreateInput>
    /**
     * In case the Grado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradoUpdateInput, GradoUncheckedUpdateInput>
  }


  /**
   * Grado delete
   */
  export type GradoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    /**
     * Filter which Grado to delete.
     */
    where: GradoWhereUniqueInput
  }


  /**
   * Grado deleteMany
   */
  export type GradoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grados to delete
     */
    where?: GradoWhereInput
  }


  /**
   * Grado.Grupos
   */
  export type Grado$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    cursor?: GruposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grado without action
   */
  export type GradoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
  }



  /**
   * Model Grupos
   */

  export type AggregateGrupos = {
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  export type GruposAvgAggregateOutputType = {
    Grupos_id: number | null
    Escuela_id: number | null
    Maestro_id: number | null
    Turno_id: number | null
    Grado_id: number | null
  }

  export type GruposSumAggregateOutputType = {
    Grupos_id: number | null
    Escuela_id: number | null
    Maestro_id: number | null
    Turno_id: number | null
    Grado_id: number | null
  }

  export type GruposMinAggregateOutputType = {
    Grupos_id: number | null
    Escuela_id: number | null
    NombreGrupo: string | null
    Maestro_id: number | null
    Turno_id: number | null
    Grado_id: number | null
  }

  export type GruposMaxAggregateOutputType = {
    Grupos_id: number | null
    Escuela_id: number | null
    NombreGrupo: string | null
    Maestro_id: number | null
    Turno_id: number | null
    Grado_id: number | null
  }

  export type GruposCountAggregateOutputType = {
    Grupos_id: number
    Escuela_id: number
    NombreGrupo: number
    Maestro_id: number
    Turno_id: number
    Grado_id: number
    _all: number
  }


  export type GruposAvgAggregateInputType = {
    Grupos_id?: true
    Escuela_id?: true
    Maestro_id?: true
    Turno_id?: true
    Grado_id?: true
  }

  export type GruposSumAggregateInputType = {
    Grupos_id?: true
    Escuela_id?: true
    Maestro_id?: true
    Turno_id?: true
    Grado_id?: true
  }

  export type GruposMinAggregateInputType = {
    Grupos_id?: true
    Escuela_id?: true
    NombreGrupo?: true
    Maestro_id?: true
    Turno_id?: true
    Grado_id?: true
  }

  export type GruposMaxAggregateInputType = {
    Grupos_id?: true
    Escuela_id?: true
    NombreGrupo?: true
    Maestro_id?: true
    Turno_id?: true
    Grado_id?: true
  }

  export type GruposCountAggregateInputType = {
    Grupos_id?: true
    Escuela_id?: true
    NombreGrupo?: true
    Maestro_id?: true
    Turno_id?: true
    Grado_id?: true
    _all?: true
  }

  export type GruposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to aggregate.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grupos
    **/
    _count?: true | GruposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GruposAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GruposSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GruposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GruposMaxAggregateInputType
  }

  export type GetGruposAggregateType<T extends GruposAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupos[P]>
      : GetScalarType<T[P], AggregateGrupos[P]>
  }




  export type GruposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithAggregationInput | GruposOrderByWithAggregationInput[]
    by: GruposScalarFieldEnum[] | GruposScalarFieldEnum
    having?: GruposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GruposCountAggregateInputType | true
    _avg?: GruposAvgAggregateInputType
    _sum?: GruposSumAggregateInputType
    _min?: GruposMinAggregateInputType
    _max?: GruposMaxAggregateInputType
  }

  export type GruposGroupByOutputType = {
    Grupos_id: number
    Escuela_id: number | null
    NombreGrupo: string
    Maestro_id: number | null
    Turno_id: number | null
    Grado_id: number | null
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  type GetGruposGroupByPayload<T extends GruposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GruposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GruposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GruposGroupByOutputType[P]>
            : GetScalarType<T[P], GruposGroupByOutputType[P]>
        }
      >
    >


  export type GruposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Grupos_id?: boolean
    Escuela_id?: boolean
    NombreGrupo?: boolean
    Maestro_id?: boolean
    Turno_id?: boolean
    Grado_id?: boolean
    Alumnos?: boolean | Grupos$AlumnosArgs<ExtArgs>
    Ejercicios?: boolean | Grupos$EjerciciosArgs<ExtArgs>
    Escuela?: boolean | Grupos$EscuelaArgs<ExtArgs>
    Grado?: boolean | Grupos$GradoArgs<ExtArgs>
    Maestros?: boolean | Grupos$MaestrosArgs<ExtArgs>
    Turno?: boolean | Grupos$TurnoArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupos"]>

  export type GruposSelectScalar = {
    Grupos_id?: boolean
    Escuela_id?: boolean
    NombreGrupo?: boolean
    Maestro_id?: boolean
    Turno_id?: boolean
    Grado_id?: boolean
  }

  export type GruposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alumnos?: boolean | Grupos$AlumnosArgs<ExtArgs>
    Ejercicios?: boolean | Grupos$EjerciciosArgs<ExtArgs>
    Escuela?: boolean | Grupos$EscuelaArgs<ExtArgs>
    Grado?: boolean | Grupos$GradoArgs<ExtArgs>
    Maestros?: boolean | Grupos$MaestrosArgs<ExtArgs>
    Turno?: boolean | Grupos$TurnoArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GruposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grupos"
    objects: {
      Alumnos: Prisma.$AlumnosPayload<ExtArgs>[]
      Ejercicios: Prisma.$EjerciciosPayload<ExtArgs>[]
      Escuela: Prisma.$EscuelaPayload<ExtArgs> | null
      Grado: Prisma.$GradoPayload<ExtArgs> | null
      Maestros: Prisma.$MaestrosPayload<ExtArgs> | null
      Turno: Prisma.$TurnoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Grupos_id: number
      Escuela_id: number | null
      NombreGrupo: string
      Maestro_id: number | null
      Turno_id: number | null
      Grado_id: number | null
    }, ExtArgs["result"]["grupos"]>
    composites: {}
  }


  type GruposGetPayload<S extends boolean | null | undefined | GruposDefaultArgs> = $Result.GetResult<Prisma.$GruposPayload, S>

  type GruposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GruposFindManyArgs, 'select' | 'include'> & {
      select?: GruposCountAggregateInputType | true
    }

  export interface GruposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grupos'], meta: { name: 'Grupos' } }
    /**
     * Find zero or one Grupos that matches the filter.
     * @param {GruposFindUniqueArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GruposFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GruposFindUniqueArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Grupos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GruposFindUniqueOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GruposFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindFirstArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GruposFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindFirstArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Grupos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindFirstOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GruposFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupos.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupos.findMany({ take: 10 })
     * 
     * // Only select the `Grupos_id`
     * const gruposWithGrupos_idOnly = await prisma.grupos.findMany({ select: { Grupos_id: true } })
     * 
    **/
    findMany<T extends GruposFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Grupos.
     * @param {GruposCreateArgs} args - Arguments to create a Grupos.
     * @example
     * // Create one Grupos
     * const Grupos = await prisma.grupos.create({
     *   data: {
     *     // ... data to create a Grupos
     *   }
     * })
     * 
    **/
    create<T extends GruposCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GruposCreateArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Grupos.
     *     @param {GruposCreateManyArgs} args - Arguments to create many Grupos.
     *     @example
     *     // Create many Grupos
     *     const grupos = await prisma.grupos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GruposCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grupos.
     * @param {GruposDeleteArgs} args - Arguments to delete one Grupos.
     * @example
     * // Delete one Grupos
     * const Grupos = await prisma.grupos.delete({
     *   where: {
     *     // ... filter to delete one Grupos
     *   }
     * })
     * 
    **/
    delete<T extends GruposDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GruposDeleteArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Grupos.
     * @param {GruposUpdateArgs} args - Arguments to update one Grupos.
     * @example
     * // Update one Grupos
     * const grupos = await prisma.grupos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GruposUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpdateArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Grupos.
     * @param {GruposDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GruposDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupos = await prisma.grupos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GruposUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grupos.
     * @param {GruposUpsertArgs} args - Arguments to update or create a Grupos.
     * @example
     * // Update or create a Grupos
     * const grupos = await prisma.grupos.upsert({
     *   create: {
     *     // ... data to create a Grupos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupos we want to update
     *   }
     * })
    **/
    upsert<T extends GruposUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpsertArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupos.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends GruposCountArgs>(
      args?: Subset<T, GruposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GruposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GruposAggregateArgs>(args: Subset<T, GruposAggregateArgs>): Prisma.PrismaPromise<GetGruposAggregateType<T>>

    /**
     * Group by Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposGroupByArgs} args - Group by arguments.
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
      T extends GruposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GruposGroupByArgs['orderBy'] }
        : { orderBy?: GruposGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GruposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGruposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grupos model
   */
  readonly fields: GruposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grupos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GruposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Alumnos<T extends Grupos$AlumnosArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$AlumnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Ejercicios<T extends Grupos$EjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$EjerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Escuela<T extends Grupos$EscuelaArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$EscuelaArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Grado<T extends Grupos$GradoArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$GradoArgs<ExtArgs>>): Prisma__GradoClient<$Result.GetResult<Prisma.$GradoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Maestros<T extends Grupos$MaestrosArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$MaestrosArgs<ExtArgs>>): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Turno<T extends Grupos$TurnoArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$TurnoArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Grupos model
   */ 
  interface GruposFieldRefs {
    readonly Grupos_id: FieldRef<"Grupos", 'Int'>
    readonly Escuela_id: FieldRef<"Grupos", 'Int'>
    readonly NombreGrupo: FieldRef<"Grupos", 'String'>
    readonly Maestro_id: FieldRef<"Grupos", 'Int'>
    readonly Turno_id: FieldRef<"Grupos", 'Int'>
    readonly Grado_id: FieldRef<"Grupos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Grupos findUnique
   */
  export type GruposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos findUniqueOrThrow
   */
  export type GruposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos findFirst
   */
  export type GruposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos findFirstOrThrow
   */
  export type GruposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos findMany
   */
  export type GruposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos create
   */
  export type GruposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The data needed to create a Grupos.
     */
    data: XOR<GruposCreateInput, GruposUncheckedCreateInput>
  }


  /**
   * Grupos createMany
   */
  export type GruposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grupos.
     */
    data: GruposCreateManyInput | GruposCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Grupos update
   */
  export type GruposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The data needed to update a Grupos.
     */
    data: XOR<GruposUpdateInput, GruposUncheckedUpdateInput>
    /**
     * Choose, which Grupos to update.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos updateMany
   */
  export type GruposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grupos.
     */
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GruposWhereInput
  }


  /**
   * Grupos upsert
   */
  export type GruposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The filter to search for the Grupos to update in case it exists.
     */
    where: GruposWhereUniqueInput
    /**
     * In case the Grupos found by the `where` argument doesn't exist, create a new Grupos with this data.
     */
    create: XOR<GruposCreateInput, GruposUncheckedCreateInput>
    /**
     * In case the Grupos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GruposUpdateInput, GruposUncheckedUpdateInput>
  }


  /**
   * Grupos delete
   */
  export type GruposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter which Grupos to delete.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos deleteMany
   */
  export type GruposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to delete
     */
    where?: GruposWhereInput
  }


  /**
   * Grupos.Alumnos
   */
  export type Grupos$AlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    where?: AlumnosWhereInput
    orderBy?: AlumnosOrderByWithRelationInput | AlumnosOrderByWithRelationInput[]
    cursor?: AlumnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlumnosScalarFieldEnum | AlumnosScalarFieldEnum[]
  }


  /**
   * Grupos.Ejercicios
   */
  export type Grupos$EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    where?: EjerciciosWhereInput
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    cursor?: EjerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Grupos.Escuela
   */
  export type Grupos$EscuelaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    where?: EscuelaWhereInput
  }


  /**
   * Grupos.Grado
   */
  export type Grupos$GradoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grado
     */
    select?: GradoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GradoInclude<ExtArgs> | null
    where?: GradoWhereInput
  }


  /**
   * Grupos.Maestros
   */
  export type Grupos$MaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    where?: MaestrosWhereInput
  }


  /**
   * Grupos.Turno
   */
  export type Grupos$TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
  }


  /**
   * Grupos without action
   */
  export type GruposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
  }



  /**
   * Model Incisos
   */

  export type AggregateIncisos = {
    _count: IncisosCountAggregateOutputType | null
    _avg: IncisosAvgAggregateOutputType | null
    _sum: IncisosSumAggregateOutputType | null
    _min: IncisosMinAggregateOutputType | null
    _max: IncisosMaxAggregateOutputType | null
  }

  export type IncisosAvgAggregateOutputType = {
    Incisos_id: number | null
    EjercicioID: number | null
  }

  export type IncisosSumAggregateOutputType = {
    Incisos_id: number | null
    EjercicioID: number | null
  }

  export type IncisosMinAggregateOutputType = {
    Incisos_id: number | null
    LoSolicitado: string | null
    EjercicioID: number | null
  }

  export type IncisosMaxAggregateOutputType = {
    Incisos_id: number | null
    LoSolicitado: string | null
    EjercicioID: number | null
  }

  export type IncisosCountAggregateOutputType = {
    Incisos_id: number
    LoSolicitado: number
    EjercicioID: number
    _all: number
  }


  export type IncisosAvgAggregateInputType = {
    Incisos_id?: true
    EjercicioID?: true
  }

  export type IncisosSumAggregateInputType = {
    Incisos_id?: true
    EjercicioID?: true
  }

  export type IncisosMinAggregateInputType = {
    Incisos_id?: true
    LoSolicitado?: true
    EjercicioID?: true
  }

  export type IncisosMaxAggregateInputType = {
    Incisos_id?: true
    LoSolicitado?: true
    EjercicioID?: true
  }

  export type IncisosCountAggregateInputType = {
    Incisos_id?: true
    LoSolicitado?: true
    EjercicioID?: true
    _all?: true
  }

  export type IncisosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incisos to aggregate.
     */
    where?: IncisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incisos to fetch.
     */
    orderBy?: IncisosOrderByWithRelationInput | IncisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incisos
    **/
    _count?: true | IncisosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncisosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncisosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncisosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncisosMaxAggregateInputType
  }

  export type GetIncisosAggregateType<T extends IncisosAggregateArgs> = {
        [P in keyof T & keyof AggregateIncisos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncisos[P]>
      : GetScalarType<T[P], AggregateIncisos[P]>
  }




  export type IncisosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncisosWhereInput
    orderBy?: IncisosOrderByWithAggregationInput | IncisosOrderByWithAggregationInput[]
    by: IncisosScalarFieldEnum[] | IncisosScalarFieldEnum
    having?: IncisosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncisosCountAggregateInputType | true
    _avg?: IncisosAvgAggregateInputType
    _sum?: IncisosSumAggregateInputType
    _min?: IncisosMinAggregateInputType
    _max?: IncisosMaxAggregateInputType
  }

  export type IncisosGroupByOutputType = {
    Incisos_id: number
    LoSolicitado: string
    EjercicioID: number | null
    _count: IncisosCountAggregateOutputType | null
    _avg: IncisosAvgAggregateOutputType | null
    _sum: IncisosSumAggregateOutputType | null
    _min: IncisosMinAggregateOutputType | null
    _max: IncisosMaxAggregateOutputType | null
  }

  type GetIncisosGroupByPayload<T extends IncisosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncisosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncisosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncisosGroupByOutputType[P]>
            : GetScalarType<T[P], IncisosGroupByOutputType[P]>
        }
      >
    >


  export type IncisosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Incisos_id?: boolean
    LoSolicitado?: boolean
    EjercicioID?: boolean
    Ejercicios?: boolean | Incisos$EjerciciosArgs<ExtArgs>
    Respuestas?: boolean | Incisos$RespuestasArgs<ExtArgs>
    _count?: boolean | IncisosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incisos"]>

  export type IncisosSelectScalar = {
    Incisos_id?: boolean
    LoSolicitado?: boolean
    EjercicioID?: boolean
  }

  export type IncisosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | Incisos$EjerciciosArgs<ExtArgs>
    Respuestas?: boolean | Incisos$RespuestasArgs<ExtArgs>
    _count?: boolean | IncisosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IncisosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incisos"
    objects: {
      Ejercicios: Prisma.$EjerciciosPayload<ExtArgs> | null
      Respuestas: Prisma.$RespuestasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Incisos_id: number
      LoSolicitado: string
      EjercicioID: number | null
    }, ExtArgs["result"]["incisos"]>
    composites: {}
  }


  type IncisosGetPayload<S extends boolean | null | undefined | IncisosDefaultArgs> = $Result.GetResult<Prisma.$IncisosPayload, S>

  type IncisosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IncisosFindManyArgs, 'select' | 'include'> & {
      select?: IncisosCountAggregateInputType | true
    }

  export interface IncisosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incisos'], meta: { name: 'Incisos' } }
    /**
     * Find zero or one Incisos that matches the filter.
     * @param {IncisosFindUniqueArgs} args - Arguments to find a Incisos
     * @example
     * // Get one Incisos
     * const incisos = await prisma.incisos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IncisosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosFindUniqueArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Incisos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IncisosFindUniqueOrThrowArgs} args - Arguments to find a Incisos
     * @example
     * // Get one Incisos
     * const incisos = await prisma.incisos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IncisosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Incisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosFindFirstArgs} args - Arguments to find a Incisos
     * @example
     * // Get one Incisos
     * const incisos = await prisma.incisos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IncisosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosFindFirstArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Incisos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosFindFirstOrThrowArgs} args - Arguments to find a Incisos
     * @example
     * // Get one Incisos
     * const incisos = await prisma.incisos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IncisosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Incisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incisos
     * const incisos = await prisma.incisos.findMany()
     * 
     * // Get first 10 Incisos
     * const incisos = await prisma.incisos.findMany({ take: 10 })
     * 
     * // Only select the `Incisos_id`
     * const incisosWithIncisos_idOnly = await prisma.incisos.findMany({ select: { Incisos_id: true } })
     * 
    **/
    findMany<T extends IncisosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Incisos.
     * @param {IncisosCreateArgs} args - Arguments to create a Incisos.
     * @example
     * // Create one Incisos
     * const Incisos = await prisma.incisos.create({
     *   data: {
     *     // ... data to create a Incisos
     *   }
     * })
     * 
    **/
    create<T extends IncisosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosCreateArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Incisos.
     *     @param {IncisosCreateManyArgs} args - Arguments to create many Incisos.
     *     @example
     *     // Create many Incisos
     *     const incisos = await prisma.incisos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IncisosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incisos.
     * @param {IncisosDeleteArgs} args - Arguments to delete one Incisos.
     * @example
     * // Delete one Incisos
     * const Incisos = await prisma.incisos.delete({
     *   where: {
     *     // ... filter to delete one Incisos
     *   }
     * })
     * 
    **/
    delete<T extends IncisosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosDeleteArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Incisos.
     * @param {IncisosUpdateArgs} args - Arguments to update one Incisos.
     * @example
     * // Update one Incisos
     * const incisos = await prisma.incisos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IncisosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosUpdateArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Incisos.
     * @param {IncisosDeleteManyArgs} args - Arguments to filter Incisos to delete.
     * @example
     * // Delete a few Incisos
     * const { count } = await prisma.incisos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IncisosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IncisosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incisos
     * const incisos = await prisma.incisos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IncisosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incisos.
     * @param {IncisosUpsertArgs} args - Arguments to update or create a Incisos.
     * @example
     * // Update or create a Incisos
     * const incisos = await prisma.incisos.upsert({
     *   create: {
     *     // ... data to create a Incisos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incisos we want to update
     *   }
     * })
    **/
    upsert<T extends IncisosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IncisosUpsertArgs<ExtArgs>>
    ): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Incisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosCountArgs} args - Arguments to filter Incisos to count.
     * @example
     * // Count the number of Incisos
     * const count = await prisma.incisos.count({
     *   where: {
     *     // ... the filter for the Incisos we want to count
     *   }
     * })
    **/
    count<T extends IncisosCountArgs>(
      args?: Subset<T, IncisosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncisosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncisosAggregateArgs>(args: Subset<T, IncisosAggregateArgs>): Prisma.PrismaPromise<GetIncisosAggregateType<T>>

    /**
     * Group by Incisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncisosGroupByArgs} args - Group by arguments.
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
      T extends IncisosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncisosGroupByArgs['orderBy'] }
        : { orderBy?: IncisosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncisosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncisosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incisos model
   */
  readonly fields: IncisosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incisos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncisosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ejercicios<T extends Incisos$EjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Incisos$EjerciciosArgs<ExtArgs>>): Prisma__EjerciciosClient<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Respuestas<T extends Incisos$RespuestasArgs<ExtArgs> = {}>(args?: Subset<T, Incisos$RespuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Incisos model
   */ 
  interface IncisosFieldRefs {
    readonly Incisos_id: FieldRef<"Incisos", 'Int'>
    readonly LoSolicitado: FieldRef<"Incisos", 'String'>
    readonly EjercicioID: FieldRef<"Incisos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Incisos findUnique
   */
  export type IncisosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter, which Incisos to fetch.
     */
    where: IncisosWhereUniqueInput
  }


  /**
   * Incisos findUniqueOrThrow
   */
  export type IncisosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter, which Incisos to fetch.
     */
    where: IncisosWhereUniqueInput
  }


  /**
   * Incisos findFirst
   */
  export type IncisosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter, which Incisos to fetch.
     */
    where?: IncisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incisos to fetch.
     */
    orderBy?: IncisosOrderByWithRelationInput | IncisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incisos.
     */
    cursor?: IncisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incisos.
     */
    distinct?: IncisosScalarFieldEnum | IncisosScalarFieldEnum[]
  }


  /**
   * Incisos findFirstOrThrow
   */
  export type IncisosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter, which Incisos to fetch.
     */
    where?: IncisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incisos to fetch.
     */
    orderBy?: IncisosOrderByWithRelationInput | IncisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incisos.
     */
    cursor?: IncisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incisos.
     */
    distinct?: IncisosScalarFieldEnum | IncisosScalarFieldEnum[]
  }


  /**
   * Incisos findMany
   */
  export type IncisosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter, which Incisos to fetch.
     */
    where?: IncisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incisos to fetch.
     */
    orderBy?: IncisosOrderByWithRelationInput | IncisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incisos.
     */
    cursor?: IncisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incisos.
     */
    skip?: number
    distinct?: IncisosScalarFieldEnum | IncisosScalarFieldEnum[]
  }


  /**
   * Incisos create
   */
  export type IncisosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * The data needed to create a Incisos.
     */
    data: XOR<IncisosCreateInput, IncisosUncheckedCreateInput>
  }


  /**
   * Incisos createMany
   */
  export type IncisosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incisos.
     */
    data: IncisosCreateManyInput | IncisosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Incisos update
   */
  export type IncisosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * The data needed to update a Incisos.
     */
    data: XOR<IncisosUpdateInput, IncisosUncheckedUpdateInput>
    /**
     * Choose, which Incisos to update.
     */
    where: IncisosWhereUniqueInput
  }


  /**
   * Incisos updateMany
   */
  export type IncisosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incisos.
     */
    data: XOR<IncisosUpdateManyMutationInput, IncisosUncheckedUpdateManyInput>
    /**
     * Filter which Incisos to update
     */
    where?: IncisosWhereInput
  }


  /**
   * Incisos upsert
   */
  export type IncisosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * The filter to search for the Incisos to update in case it exists.
     */
    where: IncisosWhereUniqueInput
    /**
     * In case the Incisos found by the `where` argument doesn't exist, create a new Incisos with this data.
     */
    create: XOR<IncisosCreateInput, IncisosUncheckedCreateInput>
    /**
     * In case the Incisos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncisosUpdateInput, IncisosUncheckedUpdateInput>
  }


  /**
   * Incisos delete
   */
  export type IncisosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
    /**
     * Filter which Incisos to delete.
     */
    where: IncisosWhereUniqueInput
  }


  /**
   * Incisos deleteMany
   */
  export type IncisosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incisos to delete
     */
    where?: IncisosWhereInput
  }


  /**
   * Incisos.Ejercicios
   */
  export type Incisos$EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    where?: EjerciciosWhereInput
  }


  /**
   * Incisos.Respuestas
   */
  export type Incisos$RespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    where?: RespuestasWhereInput
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    cursor?: RespuestasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }


  /**
   * Incisos without action
   */
  export type IncisosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incisos
     */
    select?: IncisosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IncisosInclude<ExtArgs> | null
  }



  /**
   * Model Maestros
   */

  export type AggregateMaestros = {
    _count: MaestrosCountAggregateOutputType | null
    _avg: MaestrosAvgAggregateOutputType | null
    _sum: MaestrosSumAggregateOutputType | null
    _min: MaestrosMinAggregateOutputType | null
    _max: MaestrosMaxAggregateOutputType | null
  }

  export type MaestrosAvgAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
  }

  export type MaestrosSumAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
  }

  export type MaestrosMinAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
  }

  export type MaestrosMaxAggregateOutputType = {
    Usuario_id: number | null
    Escuela_id: number | null
  }

  export type MaestrosCountAggregateOutputType = {
    Usuario_id: number
    Escuela_id: number
    _all: number
  }


  export type MaestrosAvgAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
  }

  export type MaestrosSumAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
  }

  export type MaestrosMinAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
  }

  export type MaestrosMaxAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
  }

  export type MaestrosCountAggregateInputType = {
    Usuario_id?: true
    Escuela_id?: true
    _all?: true
  }

  export type MaestrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maestros to aggregate.
     */
    where?: MaestrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maestros to fetch.
     */
    orderBy?: MaestrosOrderByWithRelationInput | MaestrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaestrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maestros
    **/
    _count?: true | MaestrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaestrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaestrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaestrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaestrosMaxAggregateInputType
  }

  export type GetMaestrosAggregateType<T extends MaestrosAggregateArgs> = {
        [P in keyof T & keyof AggregateMaestros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaestros[P]>
      : GetScalarType<T[P], AggregateMaestros[P]>
  }




  export type MaestrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaestrosWhereInput
    orderBy?: MaestrosOrderByWithAggregationInput | MaestrosOrderByWithAggregationInput[]
    by: MaestrosScalarFieldEnum[] | MaestrosScalarFieldEnum
    having?: MaestrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaestrosCountAggregateInputType | true
    _avg?: MaestrosAvgAggregateInputType
    _sum?: MaestrosSumAggregateInputType
    _min?: MaestrosMinAggregateInputType
    _max?: MaestrosMaxAggregateInputType
  }

  export type MaestrosGroupByOutputType = {
    Usuario_id: number
    Escuela_id: number | null
    _count: MaestrosCountAggregateOutputType | null
    _avg: MaestrosAvgAggregateOutputType | null
    _sum: MaestrosSumAggregateOutputType | null
    _min: MaestrosMinAggregateOutputType | null
    _max: MaestrosMaxAggregateOutputType | null
  }

  type GetMaestrosGroupByPayload<T extends MaestrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaestrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaestrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaestrosGroupByOutputType[P]>
            : GetScalarType<T[P], MaestrosGroupByOutputType[P]>
        }
      >
    >


  export type MaestrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Usuario_id?: boolean
    Escuela_id?: boolean
    Ejercicios?: boolean | Maestros$EjerciciosArgs<ExtArgs>
    Grupos?: boolean | Maestros$GruposArgs<ExtArgs>
    Escuela?: boolean | Maestros$EscuelaArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | MaestrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maestros"]>

  export type MaestrosSelectScalar = {
    Usuario_id?: boolean
    Escuela_id?: boolean
  }

  export type MaestrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | Maestros$EjerciciosArgs<ExtArgs>
    Grupos?: boolean | Maestros$GruposArgs<ExtArgs>
    Escuela?: boolean | Maestros$EscuelaArgs<ExtArgs>
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    _count?: boolean | MaestrosCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MaestrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maestros"
    objects: {
      Ejercicios: Prisma.$EjerciciosPayload<ExtArgs>[]
      Grupos: Prisma.$GruposPayload<ExtArgs>[]
      Escuela: Prisma.$EscuelaPayload<ExtArgs> | null
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Usuario_id: number
      Escuela_id: number | null
    }, ExtArgs["result"]["maestros"]>
    composites: {}
  }


  type MaestrosGetPayload<S extends boolean | null | undefined | MaestrosDefaultArgs> = $Result.GetResult<Prisma.$MaestrosPayload, S>

  type MaestrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaestrosFindManyArgs, 'select' | 'include'> & {
      select?: MaestrosCountAggregateInputType | true
    }

  export interface MaestrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maestros'], meta: { name: 'Maestros' } }
    /**
     * Find zero or one Maestros that matches the filter.
     * @param {MaestrosFindUniqueArgs} args - Arguments to find a Maestros
     * @example
     * // Get one Maestros
     * const maestros = await prisma.maestros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MaestrosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosFindUniqueArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Maestros that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MaestrosFindUniqueOrThrowArgs} args - Arguments to find a Maestros
     * @example
     * // Get one Maestros
     * const maestros = await prisma.maestros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MaestrosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Maestros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosFindFirstArgs} args - Arguments to find a Maestros
     * @example
     * // Get one Maestros
     * const maestros = await prisma.maestros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MaestrosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosFindFirstArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Maestros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosFindFirstOrThrowArgs} args - Arguments to find a Maestros
     * @example
     * // Get one Maestros
     * const maestros = await prisma.maestros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MaestrosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Maestros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maestros
     * const maestros = await prisma.maestros.findMany()
     * 
     * // Get first 10 Maestros
     * const maestros = await prisma.maestros.findMany({ take: 10 })
     * 
     * // Only select the `Usuario_id`
     * const maestrosWithUsuario_idOnly = await prisma.maestros.findMany({ select: { Usuario_id: true } })
     * 
    **/
    findMany<T extends MaestrosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Maestros.
     * @param {MaestrosCreateArgs} args - Arguments to create a Maestros.
     * @example
     * // Create one Maestros
     * const Maestros = await prisma.maestros.create({
     *   data: {
     *     // ... data to create a Maestros
     *   }
     * })
     * 
    **/
    create<T extends MaestrosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosCreateArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Maestros.
     *     @param {MaestrosCreateManyArgs} args - Arguments to create many Maestros.
     *     @example
     *     // Create many Maestros
     *     const maestros = await prisma.maestros.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MaestrosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maestros.
     * @param {MaestrosDeleteArgs} args - Arguments to delete one Maestros.
     * @example
     * // Delete one Maestros
     * const Maestros = await prisma.maestros.delete({
     *   where: {
     *     // ... filter to delete one Maestros
     *   }
     * })
     * 
    **/
    delete<T extends MaestrosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosDeleteArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Maestros.
     * @param {MaestrosUpdateArgs} args - Arguments to update one Maestros.
     * @example
     * // Update one Maestros
     * const maestros = await prisma.maestros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MaestrosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosUpdateArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Maestros.
     * @param {MaestrosDeleteManyArgs} args - Arguments to filter Maestros to delete.
     * @example
     * // Delete a few Maestros
     * const { count } = await prisma.maestros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MaestrosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaestrosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maestros
     * const maestros = await prisma.maestros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MaestrosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maestros.
     * @param {MaestrosUpsertArgs} args - Arguments to update or create a Maestros.
     * @example
     * // Update or create a Maestros
     * const maestros = await prisma.maestros.upsert({
     *   create: {
     *     // ... data to create a Maestros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maestros we want to update
     *   }
     * })
    **/
    upsert<T extends MaestrosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MaestrosUpsertArgs<ExtArgs>>
    ): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosCountArgs} args - Arguments to filter Maestros to count.
     * @example
     * // Count the number of Maestros
     * const count = await prisma.maestros.count({
     *   where: {
     *     // ... the filter for the Maestros we want to count
     *   }
     * })
    **/
    count<T extends MaestrosCountArgs>(
      args?: Subset<T, MaestrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaestrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaestrosAggregateArgs>(args: Subset<T, MaestrosAggregateArgs>): Prisma.PrismaPromise<GetMaestrosAggregateType<T>>

    /**
     * Group by Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestrosGroupByArgs} args - Group by arguments.
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
      T extends MaestrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaestrosGroupByArgs['orderBy'] }
        : { orderBy?: MaestrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaestrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaestrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maestros model
   */
  readonly fields: MaestrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maestros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaestrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ejercicios<T extends Maestros$EjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Maestros$EjerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Grupos<T extends Maestros$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Maestros$GruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'> | Null>;

    Escuela<T extends Maestros$EscuelaArgs<ExtArgs> = {}>(args?: Subset<T, Maestros$EscuelaArgs<ExtArgs>>): Prisma__EscuelaClient<$Result.GetResult<Prisma.$EscuelaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Maestros model
   */ 
  interface MaestrosFieldRefs {
    readonly Usuario_id: FieldRef<"Maestros", 'Int'>
    readonly Escuela_id: FieldRef<"Maestros", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Maestros findUnique
   */
  export type MaestrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter, which Maestros to fetch.
     */
    where: MaestrosWhereUniqueInput
  }


  /**
   * Maestros findUniqueOrThrow
   */
  export type MaestrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter, which Maestros to fetch.
     */
    where: MaestrosWhereUniqueInput
  }


  /**
   * Maestros findFirst
   */
  export type MaestrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter, which Maestros to fetch.
     */
    where?: MaestrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maestros to fetch.
     */
    orderBy?: MaestrosOrderByWithRelationInput | MaestrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maestros.
     */
    cursor?: MaestrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maestros.
     */
    distinct?: MaestrosScalarFieldEnum | MaestrosScalarFieldEnum[]
  }


  /**
   * Maestros findFirstOrThrow
   */
  export type MaestrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter, which Maestros to fetch.
     */
    where?: MaestrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maestros to fetch.
     */
    orderBy?: MaestrosOrderByWithRelationInput | MaestrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maestros.
     */
    cursor?: MaestrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maestros.
     */
    distinct?: MaestrosScalarFieldEnum | MaestrosScalarFieldEnum[]
  }


  /**
   * Maestros findMany
   */
  export type MaestrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter, which Maestros to fetch.
     */
    where?: MaestrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maestros to fetch.
     */
    orderBy?: MaestrosOrderByWithRelationInput | MaestrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maestros.
     */
    cursor?: MaestrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maestros.
     */
    skip?: number
    distinct?: MaestrosScalarFieldEnum | MaestrosScalarFieldEnum[]
  }


  /**
   * Maestros create
   */
  export type MaestrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * The data needed to create a Maestros.
     */
    data: XOR<MaestrosCreateInput, MaestrosUncheckedCreateInput>
  }


  /**
   * Maestros createMany
   */
  export type MaestrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maestros.
     */
    data: MaestrosCreateManyInput | MaestrosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Maestros update
   */
  export type MaestrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * The data needed to update a Maestros.
     */
    data: XOR<MaestrosUpdateInput, MaestrosUncheckedUpdateInput>
    /**
     * Choose, which Maestros to update.
     */
    where: MaestrosWhereUniqueInput
  }


  /**
   * Maestros updateMany
   */
  export type MaestrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maestros.
     */
    data: XOR<MaestrosUpdateManyMutationInput, MaestrosUncheckedUpdateManyInput>
    /**
     * Filter which Maestros to update
     */
    where?: MaestrosWhereInput
  }


  /**
   * Maestros upsert
   */
  export type MaestrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * The filter to search for the Maestros to update in case it exists.
     */
    where: MaestrosWhereUniqueInput
    /**
     * In case the Maestros found by the `where` argument doesn't exist, create a new Maestros with this data.
     */
    create: XOR<MaestrosCreateInput, MaestrosUncheckedCreateInput>
    /**
     * In case the Maestros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaestrosUpdateInput, MaestrosUncheckedUpdateInput>
  }


  /**
   * Maestros delete
   */
  export type MaestrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    /**
     * Filter which Maestros to delete.
     */
    where: MaestrosWhereUniqueInput
  }


  /**
   * Maestros deleteMany
   */
  export type MaestrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maestros to delete
     */
    where?: MaestrosWhereInput
  }


  /**
   * Maestros.Ejercicios
   */
  export type Maestros$EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    where?: EjerciciosWhereInput
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    cursor?: EjerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * Maestros.Grupos
   */
  export type Maestros$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    cursor?: GruposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Maestros.Escuela
   */
  export type Maestros$EscuelaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escuela
     */
    select?: EscuelaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EscuelaInclude<ExtArgs> | null
    where?: EscuelaWhereInput
  }


  /**
   * Maestros without action
   */
  export type MaestrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
  }



  /**
   * Model Respuestas
   */

  export type AggregateRespuestas = {
    _count: RespuestasCountAggregateOutputType | null
    _avg: RespuestasAvgAggregateOutputType | null
    _sum: RespuestasSumAggregateOutputType | null
    _min: RespuestasMinAggregateOutputType | null
    _max: RespuestasMaxAggregateOutputType | null
  }

  export type RespuestasAvgAggregateOutputType = {
    AlumnoID: number | null
    Puntaje: number | null
    Inciso_id: number | null
  }

  export type RespuestasSumAggregateOutputType = {
    AlumnoID: number | null
    Puntaje: number | null
    Inciso_id: number | null
  }

  export type RespuestasMinAggregateOutputType = {
    AlumnoID: number | null
    Imagen: string | null
    Puntaje: number | null
    Respuesta: string | null
    Inciso_id: number | null
  }

  export type RespuestasMaxAggregateOutputType = {
    AlumnoID: number | null
    Imagen: string | null
    Puntaje: number | null
    Respuesta: string | null
    Inciso_id: number | null
  }

  export type RespuestasCountAggregateOutputType = {
    AlumnoID: number
    Imagen: number
    Puntaje: number
    Respuesta: number
    Inciso_id: number
    _all: number
  }


  export type RespuestasAvgAggregateInputType = {
    AlumnoID?: true
    Puntaje?: true
    Inciso_id?: true
  }

  export type RespuestasSumAggregateInputType = {
    AlumnoID?: true
    Puntaje?: true
    Inciso_id?: true
  }

  export type RespuestasMinAggregateInputType = {
    AlumnoID?: true
    Imagen?: true
    Puntaje?: true
    Respuesta?: true
    Inciso_id?: true
  }

  export type RespuestasMaxAggregateInputType = {
    AlumnoID?: true
    Imagen?: true
    Puntaje?: true
    Respuesta?: true
    Inciso_id?: true
  }

  export type RespuestasCountAggregateInputType = {
    AlumnoID?: true
    Imagen?: true
    Puntaje?: true
    Respuesta?: true
    Inciso_id?: true
    _all?: true
  }

  export type RespuestasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuestas to aggregate.
     */
    where?: RespuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respuestas
    **/
    _count?: true | RespuestasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespuestasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespuestasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespuestasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespuestasMaxAggregateInputType
  }

  export type GetRespuestasAggregateType<T extends RespuestasAggregateArgs> = {
        [P in keyof T & keyof AggregateRespuestas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespuestas[P]>
      : GetScalarType<T[P], AggregateRespuestas[P]>
  }




  export type RespuestasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestasWhereInput
    orderBy?: RespuestasOrderByWithAggregationInput | RespuestasOrderByWithAggregationInput[]
    by: RespuestasScalarFieldEnum[] | RespuestasScalarFieldEnum
    having?: RespuestasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespuestasCountAggregateInputType | true
    _avg?: RespuestasAvgAggregateInputType
    _sum?: RespuestasSumAggregateInputType
    _min?: RespuestasMinAggregateInputType
    _max?: RespuestasMaxAggregateInputType
  }

  export type RespuestasGroupByOutputType = {
    AlumnoID: number
    Imagen: string | null
    Puntaje: number | null
    Respuesta: string | null
    Inciso_id: number
    _count: RespuestasCountAggregateOutputType | null
    _avg: RespuestasAvgAggregateOutputType | null
    _sum: RespuestasSumAggregateOutputType | null
    _min: RespuestasMinAggregateOutputType | null
    _max: RespuestasMaxAggregateOutputType | null
  }

  type GetRespuestasGroupByPayload<T extends RespuestasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespuestasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespuestasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespuestasGroupByOutputType[P]>
            : GetScalarType<T[P], RespuestasGroupByOutputType[P]>
        }
      >
    >


  export type RespuestasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlumnoID?: boolean
    Imagen?: boolean
    Puntaje?: boolean
    Respuesta?: boolean
    Inciso_id?: boolean
    Alumnos?: boolean | AlumnosDefaultArgs<ExtArgs>
    Incisos?: boolean | IncisosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuestas"]>

  export type RespuestasSelectScalar = {
    AlumnoID?: boolean
    Imagen?: boolean
    Puntaje?: boolean
    Respuesta?: boolean
    Inciso_id?: boolean
  }

  export type RespuestasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alumnos?: boolean | AlumnosDefaultArgs<ExtArgs>
    Incisos?: boolean | IncisosDefaultArgs<ExtArgs>
  }


  export type $RespuestasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Respuestas"
    objects: {
      Alumnos: Prisma.$AlumnosPayload<ExtArgs>
      Incisos: Prisma.$IncisosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      AlumnoID: number
      Imagen: string | null
      Puntaje: number | null
      Respuesta: string | null
      Inciso_id: number
    }, ExtArgs["result"]["respuestas"]>
    composites: {}
  }


  type RespuestasGetPayload<S extends boolean | null | undefined | RespuestasDefaultArgs> = $Result.GetResult<Prisma.$RespuestasPayload, S>

  type RespuestasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RespuestasFindManyArgs, 'select' | 'include'> & {
      select?: RespuestasCountAggregateInputType | true
    }

  export interface RespuestasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Respuestas'], meta: { name: 'Respuestas' } }
    /**
     * Find zero or one Respuestas that matches the filter.
     * @param {RespuestasFindUniqueArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RespuestasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasFindUniqueArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Respuestas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RespuestasFindUniqueOrThrowArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RespuestasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasFindFirstArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RespuestasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasFindFirstArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Respuestas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasFindFirstOrThrowArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RespuestasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respuestas
     * const respuestas = await prisma.respuestas.findMany()
     * 
     * // Get first 10 Respuestas
     * const respuestas = await prisma.respuestas.findMany({ take: 10 })
     * 
     * // Only select the `AlumnoID`
     * const respuestasWithAlumnoIDOnly = await prisma.respuestas.findMany({ select: { AlumnoID: true } })
     * 
    **/
    findMany<T extends RespuestasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Respuestas.
     * @param {RespuestasCreateArgs} args - Arguments to create a Respuestas.
     * @example
     * // Create one Respuestas
     * const Respuestas = await prisma.respuestas.create({
     *   data: {
     *     // ... data to create a Respuestas
     *   }
     * })
     * 
    **/
    create<T extends RespuestasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasCreateArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Respuestas.
     *     @param {RespuestasCreateManyArgs} args - Arguments to create many Respuestas.
     *     @example
     *     // Create many Respuestas
     *     const respuestas = await prisma.respuestas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RespuestasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Respuestas.
     * @param {RespuestasDeleteArgs} args - Arguments to delete one Respuestas.
     * @example
     * // Delete one Respuestas
     * const Respuestas = await prisma.respuestas.delete({
     *   where: {
     *     // ... filter to delete one Respuestas
     *   }
     * })
     * 
    **/
    delete<T extends RespuestasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasDeleteArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Respuestas.
     * @param {RespuestasUpdateArgs} args - Arguments to update one Respuestas.
     * @example
     * // Update one Respuestas
     * const respuestas = await prisma.respuestas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RespuestasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasUpdateArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Respuestas.
     * @param {RespuestasDeleteManyArgs} args - Arguments to filter Respuestas to delete.
     * @example
     * // Delete a few Respuestas
     * const { count } = await prisma.respuestas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RespuestasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RespuestasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respuestas
     * const respuestas = await prisma.respuestas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RespuestasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Respuestas.
     * @param {RespuestasUpsertArgs} args - Arguments to update or create a Respuestas.
     * @example
     * // Update or create a Respuestas
     * const respuestas = await prisma.respuestas.upsert({
     *   create: {
     *     // ... data to create a Respuestas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respuestas we want to update
     *   }
     * })
    **/
    upsert<T extends RespuestasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RespuestasUpsertArgs<ExtArgs>>
    ): Prisma__RespuestasClient<$Result.GetResult<Prisma.$RespuestasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasCountArgs} args - Arguments to filter Respuestas to count.
     * @example
     * // Count the number of Respuestas
     * const count = await prisma.respuestas.count({
     *   where: {
     *     // ... the filter for the Respuestas we want to count
     *   }
     * })
    **/
    count<T extends RespuestasCountArgs>(
      args?: Subset<T, RespuestasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespuestasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespuestasAggregateArgs>(args: Subset<T, RespuestasAggregateArgs>): Prisma.PrismaPromise<GetRespuestasAggregateType<T>>

    /**
     * Group by Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasGroupByArgs} args - Group by arguments.
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
      T extends RespuestasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespuestasGroupByArgs['orderBy'] }
        : { orderBy?: RespuestasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespuestasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespuestasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Respuestas model
   */
  readonly fields: RespuestasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Respuestas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespuestasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Alumnos<T extends AlumnosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlumnosDefaultArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Incisos<T extends IncisosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncisosDefaultArgs<ExtArgs>>): Prisma__IncisosClient<$Result.GetResult<Prisma.$IncisosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Respuestas model
   */ 
  interface RespuestasFieldRefs {
    readonly AlumnoID: FieldRef<"Respuestas", 'Int'>
    readonly Imagen: FieldRef<"Respuestas", 'String'>
    readonly Puntaje: FieldRef<"Respuestas", 'Int'>
    readonly Respuesta: FieldRef<"Respuestas", 'String'>
    readonly Inciso_id: FieldRef<"Respuestas", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Respuestas findUnique
   */
  export type RespuestasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where: RespuestasWhereUniqueInput
  }


  /**
   * Respuestas findUniqueOrThrow
   */
  export type RespuestasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where: RespuestasWhereUniqueInput
  }


  /**
   * Respuestas findFirst
   */
  export type RespuestasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where?: RespuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }


  /**
   * Respuestas findFirstOrThrow
   */
  export type RespuestasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where?: RespuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }


  /**
   * Respuestas findMany
   */
  export type RespuestasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where?: RespuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestasOrderByWithRelationInput | RespuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respuestas.
     */
    cursor?: RespuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }


  /**
   * Respuestas create
   */
  export type RespuestasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * The data needed to create a Respuestas.
     */
    data: XOR<RespuestasCreateInput, RespuestasUncheckedCreateInput>
  }


  /**
   * Respuestas createMany
   */
  export type RespuestasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respuestas.
     */
    data: RespuestasCreateManyInput | RespuestasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Respuestas update
   */
  export type RespuestasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * The data needed to update a Respuestas.
     */
    data: XOR<RespuestasUpdateInput, RespuestasUncheckedUpdateInput>
    /**
     * Choose, which Respuestas to update.
     */
    where: RespuestasWhereUniqueInput
  }


  /**
   * Respuestas updateMany
   */
  export type RespuestasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respuestas.
     */
    data: XOR<RespuestasUpdateManyMutationInput, RespuestasUncheckedUpdateManyInput>
    /**
     * Filter which Respuestas to update
     */
    where?: RespuestasWhereInput
  }


  /**
   * Respuestas upsert
   */
  export type RespuestasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * The filter to search for the Respuestas to update in case it exists.
     */
    where: RespuestasWhereUniqueInput
    /**
     * In case the Respuestas found by the `where` argument doesn't exist, create a new Respuestas with this data.
     */
    create: XOR<RespuestasCreateInput, RespuestasUncheckedCreateInput>
    /**
     * In case the Respuestas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespuestasUpdateInput, RespuestasUncheckedUpdateInput>
  }


  /**
   * Respuestas delete
   */
  export type RespuestasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
    /**
     * Filter which Respuestas to delete.
     */
    where: RespuestasWhereUniqueInput
  }


  /**
   * Respuestas deleteMany
   */
  export type RespuestasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuestas to delete
     */
    where?: RespuestasWhereInput
  }


  /**
   * Respuestas without action
   */
  export type RespuestasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuestas
     */
    select?: RespuestasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RespuestasInclude<ExtArgs> | null
  }



  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminAvgAggregateOutputType = {
    Usuario_id: number | null
  }

  export type SuperAdminSumAggregateOutputType = {
    Usuario_id: number | null
  }

  export type SuperAdminMinAggregateOutputType = {
    Usuario_id: number | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    Usuario_id: number | null
  }

  export type SuperAdminCountAggregateOutputType = {
    Usuario_id: number
    _all: number
  }


  export type SuperAdminAvgAggregateInputType = {
    Usuario_id?: true
  }

  export type SuperAdminSumAggregateInputType = {
    Usuario_id?: true
  }

  export type SuperAdminMinAggregateInputType = {
    Usuario_id?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    Usuario_id?: true
  }

  export type SuperAdminCountAggregateInputType = {
    Usuario_id?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _avg?: SuperAdminAvgAggregateInputType
    _sum?: SuperAdminSumAggregateInputType
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    Usuario_id: number
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Usuario_id?: boolean
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superAdmin"]>

  export type SuperAdminSelectScalar = {
    Usuario_id?: boolean
  }

  export type SuperAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }


  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Usuario_id: number
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }


  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuperAdminFindManyArgs, 'select' | 'include'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SuperAdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SuperAdmin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SuperAdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `Usuario_id`
     * const superAdminWithUsuario_idOnly = await prisma.superAdmin.findMany({ select: { Usuario_id: true } })
     * 
    **/
    findMany<T extends SuperAdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
    **/
    create<T extends SuperAdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SuperAdmins.
     *     @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     *     @example
     *     // Create many SuperAdmins
     *     const superAdmin = await prisma.superAdmin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SuperAdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
    **/
    delete<T extends SuperAdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SuperAdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SuperAdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SuperAdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
    **/
    upsert<T extends SuperAdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>
    ): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
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
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SuperAdmin model
   */ 
  interface SuperAdminFieldRefs {
    readonly Usuario_id: FieldRef<"SuperAdmin", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }


  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }


  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }


  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }


  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }


  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }


  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }


  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
  }


  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }


  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }


  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
  }


  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
  }



  /**
   * Model TipoEjercicio
   */

  export type AggregateTipoEjercicio = {
    _count: TipoEjercicioCountAggregateOutputType | null
    _avg: TipoEjercicioAvgAggregateOutputType | null
    _sum: TipoEjercicioSumAggregateOutputType | null
    _min: TipoEjercicioMinAggregateOutputType | null
    _max: TipoEjercicioMaxAggregateOutputType | null
  }

  export type TipoEjercicioAvgAggregateOutputType = {
    Tipo_id: number | null
  }

  export type TipoEjercicioSumAggregateOutputType = {
    Tipo_id: number | null
  }

  export type TipoEjercicioMinAggregateOutputType = {
    Tipo_id: number | null
    Nombre: string | null
  }

  export type TipoEjercicioMaxAggregateOutputType = {
    Tipo_id: number | null
    Nombre: string | null
  }

  export type TipoEjercicioCountAggregateOutputType = {
    Tipo_id: number
    Nombre: number
    _all: number
  }


  export type TipoEjercicioAvgAggregateInputType = {
    Tipo_id?: true
  }

  export type TipoEjercicioSumAggregateInputType = {
    Tipo_id?: true
  }

  export type TipoEjercicioMinAggregateInputType = {
    Tipo_id?: true
    Nombre?: true
  }

  export type TipoEjercicioMaxAggregateInputType = {
    Tipo_id?: true
    Nombre?: true
  }

  export type TipoEjercicioCountAggregateInputType = {
    Tipo_id?: true
    Nombre?: true
    _all?: true
  }

  export type TipoEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEjercicio to aggregate.
     */
    where?: TipoEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEjercicios to fetch.
     */
    orderBy?: TipoEjercicioOrderByWithRelationInput | TipoEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoEjercicios
    **/
    _count?: true | TipoEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoEjercicioMaxAggregateInputType
  }

  export type GetTipoEjercicioAggregateType<T extends TipoEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoEjercicio[P]>
      : GetScalarType<T[P], AggregateTipoEjercicio[P]>
  }




  export type TipoEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoEjercicioWhereInput
    orderBy?: TipoEjercicioOrderByWithAggregationInput | TipoEjercicioOrderByWithAggregationInput[]
    by: TipoEjercicioScalarFieldEnum[] | TipoEjercicioScalarFieldEnum
    having?: TipoEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoEjercicioCountAggregateInputType | true
    _avg?: TipoEjercicioAvgAggregateInputType
    _sum?: TipoEjercicioSumAggregateInputType
    _min?: TipoEjercicioMinAggregateInputType
    _max?: TipoEjercicioMaxAggregateInputType
  }

  export type TipoEjercicioGroupByOutputType = {
    Tipo_id: number
    Nombre: string
    _count: TipoEjercicioCountAggregateOutputType | null
    _avg: TipoEjercicioAvgAggregateOutputType | null
    _sum: TipoEjercicioSumAggregateOutputType | null
    _min: TipoEjercicioMinAggregateOutputType | null
    _max: TipoEjercicioMaxAggregateOutputType | null
  }

  type GetTipoEjercicioGroupByPayload<T extends TipoEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], TipoEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type TipoEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Tipo_id?: boolean
    Nombre?: boolean
    Ejercicios?: boolean | TipoEjercicio$EjerciciosArgs<ExtArgs>
    _count?: boolean | TipoEjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoEjercicio"]>

  export type TipoEjercicioSelectScalar = {
    Tipo_id?: boolean
    Nombre?: boolean
  }

  export type TipoEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ejercicios?: boolean | TipoEjercicio$EjerciciosArgs<ExtArgs>
    _count?: boolean | TipoEjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TipoEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoEjercicio"
    objects: {
      Ejercicios: Prisma.$EjerciciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Tipo_id: number
      Nombre: string
    }, ExtArgs["result"]["tipoEjercicio"]>
    composites: {}
  }


  type TipoEjercicioGetPayload<S extends boolean | null | undefined | TipoEjercicioDefaultArgs> = $Result.GetResult<Prisma.$TipoEjercicioPayload, S>

  type TipoEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipoEjercicioFindManyArgs, 'select' | 'include'> & {
      select?: TipoEjercicioCountAggregateInputType | true
    }

  export interface TipoEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoEjercicio'], meta: { name: 'TipoEjercicio' } }
    /**
     * Find zero or one TipoEjercicio that matches the filter.
     * @param {TipoEjercicioFindUniqueArgs} args - Arguments to find a TipoEjercicio
     * @example
     * // Get one TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TipoEjercicioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioFindUniqueArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TipoEjercicio that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TipoEjercicioFindUniqueOrThrowArgs} args - Arguments to find a TipoEjercicio
     * @example
     * // Get one TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TipoEjercicioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TipoEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioFindFirstArgs} args - Arguments to find a TipoEjercicio
     * @example
     * // Get one TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TipoEjercicioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioFindFirstArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TipoEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioFindFirstOrThrowArgs} args - Arguments to find a TipoEjercicio
     * @example
     * // Get one TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TipoEjercicioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TipoEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoEjercicios
     * const tipoEjercicios = await prisma.tipoEjercicio.findMany()
     * 
     * // Get first 10 TipoEjercicios
     * const tipoEjercicios = await prisma.tipoEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `Tipo_id`
     * const tipoEjercicioWithTipo_idOnly = await prisma.tipoEjercicio.findMany({ select: { Tipo_id: true } })
     * 
    **/
    findMany<T extends TipoEjercicioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TipoEjercicio.
     * @param {TipoEjercicioCreateArgs} args - Arguments to create a TipoEjercicio.
     * @example
     * // Create one TipoEjercicio
     * const TipoEjercicio = await prisma.tipoEjercicio.create({
     *   data: {
     *     // ... data to create a TipoEjercicio
     *   }
     * })
     * 
    **/
    create<T extends TipoEjercicioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioCreateArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TipoEjercicios.
     *     @param {TipoEjercicioCreateManyArgs} args - Arguments to create many TipoEjercicios.
     *     @example
     *     // Create many TipoEjercicios
     *     const tipoEjercicio = await prisma.tipoEjercicio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TipoEjercicioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoEjercicio.
     * @param {TipoEjercicioDeleteArgs} args - Arguments to delete one TipoEjercicio.
     * @example
     * // Delete one TipoEjercicio
     * const TipoEjercicio = await prisma.tipoEjercicio.delete({
     *   where: {
     *     // ... filter to delete one TipoEjercicio
     *   }
     * })
     * 
    **/
    delete<T extends TipoEjercicioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioDeleteArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TipoEjercicio.
     * @param {TipoEjercicioUpdateArgs} args - Arguments to update one TipoEjercicio.
     * @example
     * // Update one TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TipoEjercicioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioUpdateArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TipoEjercicios.
     * @param {TipoEjercicioDeleteManyArgs} args - Arguments to filter TipoEjercicios to delete.
     * @example
     * // Delete a few TipoEjercicios
     * const { count } = await prisma.tipoEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TipoEjercicioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TipoEjercicioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoEjercicios
     * const tipoEjercicio = await prisma.tipoEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TipoEjercicioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoEjercicio.
     * @param {TipoEjercicioUpsertArgs} args - Arguments to update or create a TipoEjercicio.
     * @example
     * // Update or create a TipoEjercicio
     * const tipoEjercicio = await prisma.tipoEjercicio.upsert({
     *   create: {
     *     // ... data to create a TipoEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoEjercicio we want to update
     *   }
     * })
    **/
    upsert<T extends TipoEjercicioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TipoEjercicioUpsertArgs<ExtArgs>>
    ): Prisma__TipoEjercicioClient<$Result.GetResult<Prisma.$TipoEjercicioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TipoEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioCountArgs} args - Arguments to filter TipoEjercicios to count.
     * @example
     * // Count the number of TipoEjercicios
     * const count = await prisma.tipoEjercicio.count({
     *   where: {
     *     // ... the filter for the TipoEjercicios we want to count
     *   }
     * })
    **/
    count<T extends TipoEjercicioCountArgs>(
      args?: Subset<T, TipoEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoEjercicioAggregateArgs>(args: Subset<T, TipoEjercicioAggregateArgs>): Prisma.PrismaPromise<GetTipoEjercicioAggregateType<T>>

    /**
     * Group by TipoEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEjercicioGroupByArgs} args - Group by arguments.
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
      T extends TipoEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: TipoEjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoEjercicio model
   */
  readonly fields: TipoEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Ejercicios<T extends TipoEjercicio$EjerciciosArgs<ExtArgs> = {}>(args?: Subset<T, TipoEjercicio$EjerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjerciciosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TipoEjercicio model
   */ 
  interface TipoEjercicioFieldRefs {
    readonly Tipo_id: FieldRef<"TipoEjercicio", 'Int'>
    readonly Nombre: FieldRef<"TipoEjercicio", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TipoEjercicio findUnique
   */
  export type TipoEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which TipoEjercicio to fetch.
     */
    where: TipoEjercicioWhereUniqueInput
  }


  /**
   * TipoEjercicio findUniqueOrThrow
   */
  export type TipoEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which TipoEjercicio to fetch.
     */
    where: TipoEjercicioWhereUniqueInput
  }


  /**
   * TipoEjercicio findFirst
   */
  export type TipoEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which TipoEjercicio to fetch.
     */
    where?: TipoEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEjercicios to fetch.
     */
    orderBy?: TipoEjercicioOrderByWithRelationInput | TipoEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEjercicios.
     */
    cursor?: TipoEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEjercicios.
     */
    distinct?: TipoEjercicioScalarFieldEnum | TipoEjercicioScalarFieldEnum[]
  }


  /**
   * TipoEjercicio findFirstOrThrow
   */
  export type TipoEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which TipoEjercicio to fetch.
     */
    where?: TipoEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEjercicios to fetch.
     */
    orderBy?: TipoEjercicioOrderByWithRelationInput | TipoEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEjercicios.
     */
    cursor?: TipoEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEjercicios.
     */
    distinct?: TipoEjercicioScalarFieldEnum | TipoEjercicioScalarFieldEnum[]
  }


  /**
   * TipoEjercicio findMany
   */
  export type TipoEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which TipoEjercicios to fetch.
     */
    where?: TipoEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEjercicios to fetch.
     */
    orderBy?: TipoEjercicioOrderByWithRelationInput | TipoEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoEjercicios.
     */
    cursor?: TipoEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEjercicios.
     */
    skip?: number
    distinct?: TipoEjercicioScalarFieldEnum | TipoEjercicioScalarFieldEnum[]
  }


  /**
   * TipoEjercicio create
   */
  export type TipoEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoEjercicio.
     */
    data: XOR<TipoEjercicioCreateInput, TipoEjercicioUncheckedCreateInput>
  }


  /**
   * TipoEjercicio createMany
   */
  export type TipoEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoEjercicios.
     */
    data: TipoEjercicioCreateManyInput | TipoEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TipoEjercicio update
   */
  export type TipoEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoEjercicio.
     */
    data: XOR<TipoEjercicioUpdateInput, TipoEjercicioUncheckedUpdateInput>
    /**
     * Choose, which TipoEjercicio to update.
     */
    where: TipoEjercicioWhereUniqueInput
  }


  /**
   * TipoEjercicio updateMany
   */
  export type TipoEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoEjercicios.
     */
    data: XOR<TipoEjercicioUpdateManyMutationInput, TipoEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which TipoEjercicios to update
     */
    where?: TipoEjercicioWhereInput
  }


  /**
   * TipoEjercicio upsert
   */
  export type TipoEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoEjercicio to update in case it exists.
     */
    where: TipoEjercicioWhereUniqueInput
    /**
     * In case the TipoEjercicio found by the `where` argument doesn't exist, create a new TipoEjercicio with this data.
     */
    create: XOR<TipoEjercicioCreateInput, TipoEjercicioUncheckedCreateInput>
    /**
     * In case the TipoEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoEjercicioUpdateInput, TipoEjercicioUncheckedUpdateInput>
  }


  /**
   * TipoEjercicio delete
   */
  export type TipoEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
    /**
     * Filter which TipoEjercicio to delete.
     */
    where: TipoEjercicioWhereUniqueInput
  }


  /**
   * TipoEjercicio deleteMany
   */
  export type TipoEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEjercicios to delete
     */
    where?: TipoEjercicioWhereInput
  }


  /**
   * TipoEjercicio.Ejercicios
   */
  export type TipoEjercicio$EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicios
     */
    select?: EjerciciosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EjerciciosInclude<ExtArgs> | null
    where?: EjerciciosWhereInput
    orderBy?: EjerciciosOrderByWithRelationInput | EjerciciosOrderByWithRelationInput[]
    cursor?: EjerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjerciciosScalarFieldEnum | EjerciciosScalarFieldEnum[]
  }


  /**
   * TipoEjercicio without action
   */
  export type TipoEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEjercicio
     */
    select?: TipoEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TipoEjercicioInclude<ExtArgs> | null
  }



  /**
   * Model Turno
   */

  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoAvgAggregateOutputType = {
    Turno_id: number | null
  }

  export type TurnoSumAggregateOutputType = {
    Turno_id: number | null
  }

  export type TurnoMinAggregateOutputType = {
    Turno_id: number | null
    Horario: string | null
  }

  export type TurnoMaxAggregateOutputType = {
    Turno_id: number | null
    Horario: string | null
  }

  export type TurnoCountAggregateOutputType = {
    Turno_id: number
    Horario: number
    _all: number
  }


  export type TurnoAvgAggregateInputType = {
    Turno_id?: true
  }

  export type TurnoSumAggregateInputType = {
    Turno_id?: true
  }

  export type TurnoMinAggregateInputType = {
    Turno_id?: true
    Horario?: true
  }

  export type TurnoMaxAggregateInputType = {
    Turno_id?: true
    Horario?: true
  }

  export type TurnoCountAggregateInputType = {
    Turno_id?: true
    Horario?: true
    _all?: true
  }

  export type TurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turno to aggregate.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithAggregationInput | TurnoOrderByWithAggregationInput[]
    by: TurnoScalarFieldEnum[] | TurnoScalarFieldEnum
    having?: TurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _avg?: TurnoAvgAggregateInputType
    _sum?: TurnoSumAggregateInputType
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }

  export type TurnoGroupByOutputType = {
    Turno_id: number
    Horario: string
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Turno_id?: boolean
    Horario?: boolean
    Administrador?: boolean | Turno$AdministradorArgs<ExtArgs>
    Grupos?: boolean | Turno$GruposArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectScalar = {
    Turno_id?: boolean
    Horario?: boolean
  }

  export type TurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Administrador?: boolean | Turno$AdministradorArgs<ExtArgs>
    Grupos?: boolean | Turno$GruposArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turno"
    objects: {
      Administrador: Prisma.$AdministradorPayload<ExtArgs>[]
      Grupos: Prisma.$GruposPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Turno_id: number
      Horario: string
    }, ExtArgs["result"]["turno"]>
    composites: {}
  }


  type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = $Result.GetResult<Prisma.$TurnoPayload, S>

  type TurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnoFindManyArgs, 'select' | 'include'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface TurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turno'], meta: { name: 'Turno' } }
    /**
     * Find zero or one Turno that matches the filter.
     * @param {TurnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TurnoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Turno that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TurnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TurnoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Turno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `Turno_id`
     * const turnoWithTurno_idOnly = await prisma.turno.findMany({ select: { Turno_id: true } })
     * 
    **/
    findMany<T extends TurnoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Turno.
     * @param {TurnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
    **/
    create<T extends TurnoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoCreateArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Turnos.
     *     @param {TurnoCreateManyArgs} args - Arguments to create many Turnos.
     *     @example
     *     // Create many Turnos
     *     const turno = await prisma.turno.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TurnoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turno.
     * @param {TurnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
    **/
    delete<T extends TurnoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoDeleteArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Turno.
     * @param {TurnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TurnoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoUpdateArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Turnos.
     * @param {TurnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TurnoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TurnoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turno.
     * @param {TurnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
    **/
    upsert<T extends TurnoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TurnoUpsertArgs<ExtArgs>>
    ): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnoCountArgs>(
      args?: Subset<T, TurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
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
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turno model
   */
  readonly fields: TurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Administrador<T extends Turno$AdministradorArgs<ExtArgs> = {}>(args?: Subset<T, Turno$AdministradorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findMany'> | Null>;

    Grupos<T extends Turno$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Turno$GruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Turno model
   */ 
  interface TurnoFieldRefs {
    readonly Turno_id: FieldRef<"Turno", 'Int'>
    readonly Horario: FieldRef<"Turno", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Turno findUnique
   */
  export type TurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }


  /**
   * Turno findUniqueOrThrow
   */
  export type TurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }


  /**
   * Turno findFirst
   */
  export type TurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }


  /**
   * Turno findFirstOrThrow
   */
  export type TurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }


  /**
   * Turno findMany
   */
  export type TurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }


  /**
   * Turno create
   */
  export type TurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Turno.
     */
    data: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
  }


  /**
   * Turno createMany
   */
  export type TurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Turno update
   */
  export type TurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Turno.
     */
    data: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
    /**
     * Choose, which Turno to update.
     */
    where: TurnoWhereUniqueInput
  }


  /**
   * Turno updateMany
   */
  export type TurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
  }


  /**
   * Turno upsert
   */
  export type TurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Turno to update in case it exists.
     */
    where: TurnoWhereUniqueInput
    /**
     * In case the Turno found by the `where` argument doesn't exist, create a new Turno with this data.
     */
    create: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
    /**
     * In case the Turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
  }


  /**
   * Turno delete
   */
  export type TurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter which Turno to delete.
     */
    where: TurnoWhereUniqueInput
  }


  /**
   * Turno deleteMany
   */
  export type TurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnoWhereInput
  }


  /**
   * Turno.Administrador
   */
  export type Turno$AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    cursor?: AdministradorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }


  /**
   * Turno.Grupos
   */
  export type Turno$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    cursor?: GruposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Turno without action
   */
  export type TurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TurnoInclude<ExtArgs> | null
  }



  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    Usuarios_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    Usuarios_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    Usuarios_id: number | null
    Nombres: string | null
    Apellidos: string | null
    Correo: string | null
    Contrasena: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    Usuarios_id: number | null
    Nombres: string | null
    Apellidos: string | null
    Correo: string | null
    Contrasena: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    Usuarios_id: number
    Nombres: number
    Apellidos: number
    Correo: number
    Contrasena: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    Usuarios_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    Usuarios_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    Usuarios_id?: true
    Nombres?: true
    Apellidos?: true
    Correo?: true
    Contrasena?: true
  }

  export type UsuariosMaxAggregateInputType = {
    Usuarios_id?: true
    Nombres?: true
    Apellidos?: true
    Correo?: true
    Contrasena?: true
  }

  export type UsuariosCountAggregateInputType = {
    Usuarios_id?: true
    Nombres?: true
    Apellidos?: true
    Correo?: true
    Contrasena?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    Usuarios_id: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Usuarios_id?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Correo?: boolean
    Contrasena?: boolean
    Administrador?: boolean | Usuarios$AdministradorArgs<ExtArgs>
    Alumnos?: boolean | Usuarios$AlumnosArgs<ExtArgs>
    Maestros?: boolean | Usuarios$MaestrosArgs<ExtArgs>
    SuperAdmin?: boolean | Usuarios$SuperAdminArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    Usuarios_id?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Correo?: boolean
    Contrasena?: boolean
  }

  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Administrador?: boolean | Usuarios$AdministradorArgs<ExtArgs>
    Alumnos?: boolean | Usuarios$AlumnosArgs<ExtArgs>
    Maestros?: boolean | Usuarios$MaestrosArgs<ExtArgs>
    SuperAdmin?: boolean | Usuarios$SuperAdminArgs<ExtArgs>
  }


  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      Administrador: Prisma.$AdministradorPayload<ExtArgs> | null
      Alumnos: Prisma.$AlumnosPayload<ExtArgs> | null
      Maestros: Prisma.$MaestrosPayload<ExtArgs> | null
      SuperAdmin: Prisma.$SuperAdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Usuarios_id: number
      Nombres: string
      Apellidos: string
      Correo: string
      Contrasena: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }


  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuariosFindManyArgs, 'select' | 'include'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `Usuarios_id`
     * const usuariosWithUsuarios_idOnly = await prisma.usuarios.findMany({ select: { Usuarios_id: true } })
     * 
    **/
    findMany<T extends UsuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
    **/
    create<T extends UsuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuarios = await prisma.usuarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
    **/
    delete<T extends UsuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends UsuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Administrador<T extends Usuarios$AdministradorArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$AdministradorArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Alumnos<T extends Usuarios$AlumnosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$AlumnosArgs<ExtArgs>>): Prisma__AlumnosClient<$Result.GetResult<Prisma.$AlumnosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Maestros<T extends Usuarios$MaestrosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$MaestrosArgs<ExtArgs>>): Prisma__MaestrosClient<$Result.GetResult<Prisma.$MaestrosPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    SuperAdmin<T extends Usuarios$SuperAdminArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$SuperAdminArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuarios model
   */ 
  interface UsuariosFieldRefs {
    readonly Usuarios_id: FieldRef<"Usuarios", 'Int'>
    readonly Nombres: FieldRef<"Usuarios", 'String'>
    readonly Apellidos: FieldRef<"Usuarios", 'String'>
    readonly Correo: FieldRef<"Usuarios", 'String'>
    readonly Contrasena: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }


  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
  }


  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }


  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }


  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
  }


  /**
   * Usuarios.Administrador
   */
  export type Usuarios$AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
  }


  /**
   * Usuarios.Alumnos
   */
  export type Usuarios$AlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alumnos
     */
    select?: AlumnosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlumnosInclude<ExtArgs> | null
    where?: AlumnosWhereInput
  }


  /**
   * Usuarios.Maestros
   */
  export type Usuarios$MaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maestros
     */
    select?: MaestrosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaestrosInclude<ExtArgs> | null
    where?: MaestrosWhereInput
  }


  /**
   * Usuarios.SuperAdmin
   */
  export type Usuarios$SuperAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SuperAdminInclude<ExtArgs> | null
    where?: SuperAdminWhereInput
  }


  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuariosInclude<ExtArgs> | null
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


  export const AdministradorScalarFieldEnum: {
    Usuario_id: 'Usuario_id',
    Escuela_id: 'Escuela_id',
    Turno_id: 'Turno_id'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const AlumnosScalarFieldEnum: {
    Usuario_id: 'Usuario_id',
    Grupo_id: 'Grupo_id'
  };

  export type AlumnosScalarFieldEnum = (typeof AlumnosScalarFieldEnum)[keyof typeof AlumnosScalarFieldEnum]


  export const EjerciciosScalarFieldEnum: {
    Ejercicios_id: 'Ejercicios_id',
    NombreEjercicio: 'NombreEjercicio',
    MaestroID: 'MaestroID',
    GrupoID: 'GrupoID',
    TipoEjercicio_id: 'TipoEjercicio_id',
    FechaPublicacion: 'FechaPublicacion',
    FechaLimite: 'FechaLimite',
    Estado_id: 'Estado_id'
  };

  export type EjerciciosScalarFieldEnum = (typeof EjerciciosScalarFieldEnum)[keyof typeof EjerciciosScalarFieldEnum]


  export const EscuelaScalarFieldEnum: {
    Escuela_id: 'Escuela_id',
    Nombre: 'Nombre'
  };

  export type EscuelaScalarFieldEnum = (typeof EscuelaScalarFieldEnum)[keyof typeof EscuelaScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    Estado_id: 'Estado_id',
    Nombre: 'Nombre'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const GradoScalarFieldEnum: {
    Grado_id: 'Grado_id',
    Nivel: 'Nivel'
  };

  export type GradoScalarFieldEnum = (typeof GradoScalarFieldEnum)[keyof typeof GradoScalarFieldEnum]


  export const GruposScalarFieldEnum: {
    Grupos_id: 'Grupos_id',
    Escuela_id: 'Escuela_id',
    NombreGrupo: 'NombreGrupo',
    Maestro_id: 'Maestro_id',
    Turno_id: 'Turno_id',
    Grado_id: 'Grado_id'
  };

  export type GruposScalarFieldEnum = (typeof GruposScalarFieldEnum)[keyof typeof GruposScalarFieldEnum]


  export const IncisosScalarFieldEnum: {
    Incisos_id: 'Incisos_id',
    LoSolicitado: 'LoSolicitado',
    EjercicioID: 'EjercicioID'
  };

  export type IncisosScalarFieldEnum = (typeof IncisosScalarFieldEnum)[keyof typeof IncisosScalarFieldEnum]


  export const MaestrosScalarFieldEnum: {
    Usuario_id: 'Usuario_id',
    Escuela_id: 'Escuela_id'
  };

  export type MaestrosScalarFieldEnum = (typeof MaestrosScalarFieldEnum)[keyof typeof MaestrosScalarFieldEnum]


  export const RespuestasScalarFieldEnum: {
    AlumnoID: 'AlumnoID',
    Imagen: 'Imagen',
    Puntaje: 'Puntaje',
    Respuesta: 'Respuesta',
    Inciso_id: 'Inciso_id'
  };

  export type RespuestasScalarFieldEnum = (typeof RespuestasScalarFieldEnum)[keyof typeof RespuestasScalarFieldEnum]


  export const SuperAdminScalarFieldEnum: {
    Usuario_id: 'Usuario_id'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const TipoEjercicioScalarFieldEnum: {
    Tipo_id: 'Tipo_id',
    Nombre: 'Nombre'
  };

  export type TipoEjercicioScalarFieldEnum = (typeof TipoEjercicioScalarFieldEnum)[keyof typeof TipoEjercicioScalarFieldEnum]


  export const TurnoScalarFieldEnum: {
    Turno_id: 'Turno_id',
    Horario: 'Horario'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    Usuarios_id: 'Usuarios_id',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Correo: 'Correo',
    Contrasena: 'Contrasena'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    Usuario_id?: IntFilter<"Administrador"> | number
    Escuela_id?: IntNullableFilter<"Administrador"> | number | null
    Turno_id?: IntNullableFilter<"Administrador"> | number | null
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Turno?: XOR<TurnoNullableRelationFilter, TurnoWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type AdministradorOrderByWithRelationInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    Turno_id?: SortOrderInput | SortOrder
    Escuela?: EscuelaOrderByWithRelationInput
    Turno?: TurnoOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    Usuario_id?: number
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    Escuela_id?: IntNullableFilter<"Administrador"> | number | null
    Turno_id?: IntNullableFilter<"Administrador"> | number | null
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Turno?: XOR<TurnoNullableRelationFilter, TurnoWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "Usuario_id">

  export type AdministradorOrderByWithAggregationInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    Turno_id?: SortOrderInput | SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    Usuario_id?: IntWithAggregatesFilter<"Administrador"> | number
    Escuela_id?: IntNullableWithAggregatesFilter<"Administrador"> | number | null
    Turno_id?: IntNullableWithAggregatesFilter<"Administrador"> | number | null
  }

  export type AlumnosWhereInput = {
    AND?: AlumnosWhereInput | AlumnosWhereInput[]
    OR?: AlumnosWhereInput[]
    NOT?: AlumnosWhereInput | AlumnosWhereInput[]
    Usuario_id?: IntFilter<"Alumnos"> | number
    Grupo_id?: IntNullableFilter<"Alumnos"> | number | null
    Grupos?: XOR<GruposNullableRelationFilter, GruposWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
    Respuestas?: RespuestasListRelationFilter
  }

  export type AlumnosOrderByWithRelationInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrderInput | SortOrder
    Grupos?: GruposOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
    Respuestas?: RespuestasOrderByRelationAggregateInput
  }

  export type AlumnosWhereUniqueInput = Prisma.AtLeast<{
    Usuario_id?: number
    AND?: AlumnosWhereInput | AlumnosWhereInput[]
    OR?: AlumnosWhereInput[]
    NOT?: AlumnosWhereInput | AlumnosWhereInput[]
    Grupo_id?: IntNullableFilter<"Alumnos"> | number | null
    Grupos?: XOR<GruposNullableRelationFilter, GruposWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
    Respuestas?: RespuestasListRelationFilter
  }, "Usuario_id">

  export type AlumnosOrderByWithAggregationInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrderInput | SortOrder
    _count?: AlumnosCountOrderByAggregateInput
    _avg?: AlumnosAvgOrderByAggregateInput
    _max?: AlumnosMaxOrderByAggregateInput
    _min?: AlumnosMinOrderByAggregateInput
    _sum?: AlumnosSumOrderByAggregateInput
  }

  export type AlumnosScalarWhereWithAggregatesInput = {
    AND?: AlumnosScalarWhereWithAggregatesInput | AlumnosScalarWhereWithAggregatesInput[]
    OR?: AlumnosScalarWhereWithAggregatesInput[]
    NOT?: AlumnosScalarWhereWithAggregatesInput | AlumnosScalarWhereWithAggregatesInput[]
    Usuario_id?: IntWithAggregatesFilter<"Alumnos"> | number
    Grupo_id?: IntNullableWithAggregatesFilter<"Alumnos"> | number | null
  }

  export type EjerciciosWhereInput = {
    AND?: EjerciciosWhereInput | EjerciciosWhereInput[]
    OR?: EjerciciosWhereInput[]
    NOT?: EjerciciosWhereInput | EjerciciosWhereInput[]
    Ejercicios_id?: IntFilter<"Ejercicios"> | number
    NombreEjercicio?: StringFilter<"Ejercicios"> | string
    MaestroID?: IntNullableFilter<"Ejercicios"> | number | null
    GrupoID?: IntNullableFilter<"Ejercicios"> | number | null
    TipoEjercicio_id?: IntFilter<"Ejercicios"> | number
    FechaPublicacion?: DateTimeFilter<"Ejercicios"> | Date | string
    FechaLimite?: DateTimeNullableFilter<"Ejercicios"> | Date | string | null
    Estado_id?: IntFilter<"Ejercicios"> | number
    Estado?: XOR<EstadoRelationFilter, EstadoWhereInput>
    Grupos?: XOR<GruposNullableRelationFilter, GruposWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    TipoEjercicio?: XOR<TipoEjercicioRelationFilter, TipoEjercicioWhereInput>
    Incisos?: IncisosListRelationFilter
  }

  export type EjerciciosOrderByWithRelationInput = {
    Ejercicios_id?: SortOrder
    NombreEjercicio?: SortOrder
    MaestroID?: SortOrderInput | SortOrder
    GrupoID?: SortOrderInput | SortOrder
    TipoEjercicio_id?: SortOrder
    FechaPublicacion?: SortOrder
    FechaLimite?: SortOrderInput | SortOrder
    Estado_id?: SortOrder
    Estado?: EstadoOrderByWithRelationInput
    Grupos?: GruposOrderByWithRelationInput
    Maestros?: MaestrosOrderByWithRelationInput
    TipoEjercicio?: TipoEjercicioOrderByWithRelationInput
    Incisos?: IncisosOrderByRelationAggregateInput
  }

  export type EjerciciosWhereUniqueInput = Prisma.AtLeast<{
    Ejercicios_id?: number
    AND?: EjerciciosWhereInput | EjerciciosWhereInput[]
    OR?: EjerciciosWhereInput[]
    NOT?: EjerciciosWhereInput | EjerciciosWhereInput[]
    NombreEjercicio?: StringFilter<"Ejercicios"> | string
    MaestroID?: IntNullableFilter<"Ejercicios"> | number | null
    GrupoID?: IntNullableFilter<"Ejercicios"> | number | null
    TipoEjercicio_id?: IntFilter<"Ejercicios"> | number
    FechaPublicacion?: DateTimeFilter<"Ejercicios"> | Date | string
    FechaLimite?: DateTimeNullableFilter<"Ejercicios"> | Date | string | null
    Estado_id?: IntFilter<"Ejercicios"> | number
    Estado?: XOR<EstadoRelationFilter, EstadoWhereInput>
    Grupos?: XOR<GruposNullableRelationFilter, GruposWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    TipoEjercicio?: XOR<TipoEjercicioRelationFilter, TipoEjercicioWhereInput>
    Incisos?: IncisosListRelationFilter
  }, "Ejercicios_id">

  export type EjerciciosOrderByWithAggregationInput = {
    Ejercicios_id?: SortOrder
    NombreEjercicio?: SortOrder
    MaestroID?: SortOrderInput | SortOrder
    GrupoID?: SortOrderInput | SortOrder
    TipoEjercicio_id?: SortOrder
    FechaPublicacion?: SortOrder
    FechaLimite?: SortOrderInput | SortOrder
    Estado_id?: SortOrder
    _count?: EjerciciosCountOrderByAggregateInput
    _avg?: EjerciciosAvgOrderByAggregateInput
    _max?: EjerciciosMaxOrderByAggregateInput
    _min?: EjerciciosMinOrderByAggregateInput
    _sum?: EjerciciosSumOrderByAggregateInput
  }

  export type EjerciciosScalarWhereWithAggregatesInput = {
    AND?: EjerciciosScalarWhereWithAggregatesInput | EjerciciosScalarWhereWithAggregatesInput[]
    OR?: EjerciciosScalarWhereWithAggregatesInput[]
    NOT?: EjerciciosScalarWhereWithAggregatesInput | EjerciciosScalarWhereWithAggregatesInput[]
    Ejercicios_id?: IntWithAggregatesFilter<"Ejercicios"> | number
    NombreEjercicio?: StringWithAggregatesFilter<"Ejercicios"> | string
    MaestroID?: IntNullableWithAggregatesFilter<"Ejercicios"> | number | null
    GrupoID?: IntNullableWithAggregatesFilter<"Ejercicios"> | number | null
    TipoEjercicio_id?: IntWithAggregatesFilter<"Ejercicios"> | number
    FechaPublicacion?: DateTimeWithAggregatesFilter<"Ejercicios"> | Date | string
    FechaLimite?: DateTimeNullableWithAggregatesFilter<"Ejercicios"> | Date | string | null
    Estado_id?: IntWithAggregatesFilter<"Ejercicios"> | number
  }

  export type EscuelaWhereInput = {
    AND?: EscuelaWhereInput | EscuelaWhereInput[]
    OR?: EscuelaWhereInput[]
    NOT?: EscuelaWhereInput | EscuelaWhereInput[]
    Escuela_id?: IntFilter<"Escuela"> | number
    Nombre?: StringFilter<"Escuela"> | string
    Administrador?: AdministradorListRelationFilter
    Grupos?: GruposListRelationFilter
    Maestros?: MaestrosListRelationFilter
  }

  export type EscuelaOrderByWithRelationInput = {
    Escuela_id?: SortOrder
    Nombre?: SortOrder
    Administrador?: AdministradorOrderByRelationAggregateInput
    Grupos?: GruposOrderByRelationAggregateInput
    Maestros?: MaestrosOrderByRelationAggregateInput
  }

  export type EscuelaWhereUniqueInput = Prisma.AtLeast<{
    Escuela_id?: number
    AND?: EscuelaWhereInput | EscuelaWhereInput[]
    OR?: EscuelaWhereInput[]
    NOT?: EscuelaWhereInput | EscuelaWhereInput[]
    Nombre?: StringFilter<"Escuela"> | string
    Administrador?: AdministradorListRelationFilter
    Grupos?: GruposListRelationFilter
    Maestros?: MaestrosListRelationFilter
  }, "Escuela_id">

  export type EscuelaOrderByWithAggregationInput = {
    Escuela_id?: SortOrder
    Nombre?: SortOrder
    _count?: EscuelaCountOrderByAggregateInput
    _avg?: EscuelaAvgOrderByAggregateInput
    _max?: EscuelaMaxOrderByAggregateInput
    _min?: EscuelaMinOrderByAggregateInput
    _sum?: EscuelaSumOrderByAggregateInput
  }

  export type EscuelaScalarWhereWithAggregatesInput = {
    AND?: EscuelaScalarWhereWithAggregatesInput | EscuelaScalarWhereWithAggregatesInput[]
    OR?: EscuelaScalarWhereWithAggregatesInput[]
    NOT?: EscuelaScalarWhereWithAggregatesInput | EscuelaScalarWhereWithAggregatesInput[]
    Escuela_id?: IntWithAggregatesFilter<"Escuela"> | number
    Nombre?: StringWithAggregatesFilter<"Escuela"> | string
  }

  export type EstadoWhereInput = {
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    Estado_id?: IntFilter<"Estado"> | number
    Nombre?: StringFilter<"Estado"> | string
    Ejercicios?: EjerciciosListRelationFilter
  }

  export type EstadoOrderByWithRelationInput = {
    Estado_id?: SortOrder
    Nombre?: SortOrder
    Ejercicios?: EjerciciosOrderByRelationAggregateInput
  }

  export type EstadoWhereUniqueInput = Prisma.AtLeast<{
    Estado_id?: number
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    Nombre?: StringFilter<"Estado"> | string
    Ejercicios?: EjerciciosListRelationFilter
  }, "Estado_id">

  export type EstadoOrderByWithAggregationInput = {
    Estado_id?: SortOrder
    Nombre?: SortOrder
    _count?: EstadoCountOrderByAggregateInput
    _avg?: EstadoAvgOrderByAggregateInput
    _max?: EstadoMaxOrderByAggregateInput
    _min?: EstadoMinOrderByAggregateInput
    _sum?: EstadoSumOrderByAggregateInput
  }

  export type EstadoScalarWhereWithAggregatesInput = {
    AND?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    OR?: EstadoScalarWhereWithAggregatesInput[]
    NOT?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    Estado_id?: IntWithAggregatesFilter<"Estado"> | number
    Nombre?: StringWithAggregatesFilter<"Estado"> | string
  }

  export type GradoWhereInput = {
    AND?: GradoWhereInput | GradoWhereInput[]
    OR?: GradoWhereInput[]
    NOT?: GradoWhereInput | GradoWhereInput[]
    Grado_id?: IntFilter<"Grado"> | number
    Nivel?: StringFilter<"Grado"> | string
    Grupos?: GruposListRelationFilter
  }

  export type GradoOrderByWithRelationInput = {
    Grado_id?: SortOrder
    Nivel?: SortOrder
    Grupos?: GruposOrderByRelationAggregateInput
  }

  export type GradoWhereUniqueInput = Prisma.AtLeast<{
    Grado_id?: number
    AND?: GradoWhereInput | GradoWhereInput[]
    OR?: GradoWhereInput[]
    NOT?: GradoWhereInput | GradoWhereInput[]
    Nivel?: StringFilter<"Grado"> | string
    Grupos?: GruposListRelationFilter
  }, "Grado_id">

  export type GradoOrderByWithAggregationInput = {
    Grado_id?: SortOrder
    Nivel?: SortOrder
    _count?: GradoCountOrderByAggregateInput
    _avg?: GradoAvgOrderByAggregateInput
    _max?: GradoMaxOrderByAggregateInput
    _min?: GradoMinOrderByAggregateInput
    _sum?: GradoSumOrderByAggregateInput
  }

  export type GradoScalarWhereWithAggregatesInput = {
    AND?: GradoScalarWhereWithAggregatesInput | GradoScalarWhereWithAggregatesInput[]
    OR?: GradoScalarWhereWithAggregatesInput[]
    NOT?: GradoScalarWhereWithAggregatesInput | GradoScalarWhereWithAggregatesInput[]
    Grado_id?: IntWithAggregatesFilter<"Grado"> | number
    Nivel?: StringWithAggregatesFilter<"Grado"> | string
  }

  export type GruposWhereInput = {
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    Grupos_id?: IntFilter<"Grupos"> | number
    Escuela_id?: IntNullableFilter<"Grupos"> | number | null
    NombreGrupo?: StringFilter<"Grupos"> | string
    Maestro_id?: IntNullableFilter<"Grupos"> | number | null
    Turno_id?: IntNullableFilter<"Grupos"> | number | null
    Grado_id?: IntNullableFilter<"Grupos"> | number | null
    Alumnos?: AlumnosListRelationFilter
    Ejercicios?: EjerciciosListRelationFilter
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Grado?: XOR<GradoNullableRelationFilter, GradoWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    Turno?: XOR<TurnoNullableRelationFilter, TurnoWhereInput> | null
  }

  export type GruposOrderByWithRelationInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    NombreGrupo?: SortOrder
    Maestro_id?: SortOrderInput | SortOrder
    Turno_id?: SortOrderInput | SortOrder
    Grado_id?: SortOrderInput | SortOrder
    Alumnos?: AlumnosOrderByRelationAggregateInput
    Ejercicios?: EjerciciosOrderByRelationAggregateInput
    Escuela?: EscuelaOrderByWithRelationInput
    Grado?: GradoOrderByWithRelationInput
    Maestros?: MaestrosOrderByWithRelationInput
    Turno?: TurnoOrderByWithRelationInput
  }

  export type GruposWhereUniqueInput = Prisma.AtLeast<{
    Grupos_id?: number
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    Escuela_id?: IntNullableFilter<"Grupos"> | number | null
    NombreGrupo?: StringFilter<"Grupos"> | string
    Maestro_id?: IntNullableFilter<"Grupos"> | number | null
    Turno_id?: IntNullableFilter<"Grupos"> | number | null
    Grado_id?: IntNullableFilter<"Grupos"> | number | null
    Alumnos?: AlumnosListRelationFilter
    Ejercicios?: EjerciciosListRelationFilter
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Grado?: XOR<GradoNullableRelationFilter, GradoWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    Turno?: XOR<TurnoNullableRelationFilter, TurnoWhereInput> | null
  }, "Grupos_id">

  export type GruposOrderByWithAggregationInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    NombreGrupo?: SortOrder
    Maestro_id?: SortOrderInput | SortOrder
    Turno_id?: SortOrderInput | SortOrder
    Grado_id?: SortOrderInput | SortOrder
    _count?: GruposCountOrderByAggregateInput
    _avg?: GruposAvgOrderByAggregateInput
    _max?: GruposMaxOrderByAggregateInput
    _min?: GruposMinOrderByAggregateInput
    _sum?: GruposSumOrderByAggregateInput
  }

  export type GruposScalarWhereWithAggregatesInput = {
    AND?: GruposScalarWhereWithAggregatesInput | GruposScalarWhereWithAggregatesInput[]
    OR?: GruposScalarWhereWithAggregatesInput[]
    NOT?: GruposScalarWhereWithAggregatesInput | GruposScalarWhereWithAggregatesInput[]
    Grupos_id?: IntWithAggregatesFilter<"Grupos"> | number
    Escuela_id?: IntNullableWithAggregatesFilter<"Grupos"> | number | null
    NombreGrupo?: StringWithAggregatesFilter<"Grupos"> | string
    Maestro_id?: IntNullableWithAggregatesFilter<"Grupos"> | number | null
    Turno_id?: IntNullableWithAggregatesFilter<"Grupos"> | number | null
    Grado_id?: IntNullableWithAggregatesFilter<"Grupos"> | number | null
  }

  export type IncisosWhereInput = {
    AND?: IncisosWhereInput | IncisosWhereInput[]
    OR?: IncisosWhereInput[]
    NOT?: IncisosWhereInput | IncisosWhereInput[]
    Incisos_id?: IntFilter<"Incisos"> | number
    LoSolicitado?: StringFilter<"Incisos"> | string
    EjercicioID?: IntNullableFilter<"Incisos"> | number | null
    Ejercicios?: XOR<EjerciciosNullableRelationFilter, EjerciciosWhereInput> | null
    Respuestas?: RespuestasListRelationFilter
  }

  export type IncisosOrderByWithRelationInput = {
    Incisos_id?: SortOrder
    LoSolicitado?: SortOrder
    EjercicioID?: SortOrderInput | SortOrder
    Ejercicios?: EjerciciosOrderByWithRelationInput
    Respuestas?: RespuestasOrderByRelationAggregateInput
  }

  export type IncisosWhereUniqueInput = Prisma.AtLeast<{
    Incisos_id?: number
    AND?: IncisosWhereInput | IncisosWhereInput[]
    OR?: IncisosWhereInput[]
    NOT?: IncisosWhereInput | IncisosWhereInput[]
    LoSolicitado?: StringFilter<"Incisos"> | string
    EjercicioID?: IntNullableFilter<"Incisos"> | number | null
    Ejercicios?: XOR<EjerciciosNullableRelationFilter, EjerciciosWhereInput> | null
    Respuestas?: RespuestasListRelationFilter
  }, "Incisos_id">

  export type IncisosOrderByWithAggregationInput = {
    Incisos_id?: SortOrder
    LoSolicitado?: SortOrder
    EjercicioID?: SortOrderInput | SortOrder
    _count?: IncisosCountOrderByAggregateInput
    _avg?: IncisosAvgOrderByAggregateInput
    _max?: IncisosMaxOrderByAggregateInput
    _min?: IncisosMinOrderByAggregateInput
    _sum?: IncisosSumOrderByAggregateInput
  }

  export type IncisosScalarWhereWithAggregatesInput = {
    AND?: IncisosScalarWhereWithAggregatesInput | IncisosScalarWhereWithAggregatesInput[]
    OR?: IncisosScalarWhereWithAggregatesInput[]
    NOT?: IncisosScalarWhereWithAggregatesInput | IncisosScalarWhereWithAggregatesInput[]
    Incisos_id?: IntWithAggregatesFilter<"Incisos"> | number
    LoSolicitado?: StringWithAggregatesFilter<"Incisos"> | string
    EjercicioID?: IntNullableWithAggregatesFilter<"Incisos"> | number | null
  }

  export type MaestrosWhereInput = {
    AND?: MaestrosWhereInput | MaestrosWhereInput[]
    OR?: MaestrosWhereInput[]
    NOT?: MaestrosWhereInput | MaestrosWhereInput[]
    Usuario_id?: IntFilter<"Maestros"> | number
    Escuela_id?: IntNullableFilter<"Maestros"> | number | null
    Ejercicios?: EjerciciosListRelationFilter
    Grupos?: GruposListRelationFilter
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type MaestrosOrderByWithRelationInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    Ejercicios?: EjerciciosOrderByRelationAggregateInput
    Grupos?: GruposOrderByRelationAggregateInput
    Escuela?: EscuelaOrderByWithRelationInput
    Usuarios?: UsuariosOrderByWithRelationInput
  }

  export type MaestrosWhereUniqueInput = Prisma.AtLeast<{
    Usuario_id?: number
    AND?: MaestrosWhereInput | MaestrosWhereInput[]
    OR?: MaestrosWhereInput[]
    NOT?: MaestrosWhereInput | MaestrosWhereInput[]
    Escuela_id?: IntNullableFilter<"Maestros"> | number | null
    Ejercicios?: EjerciciosListRelationFilter
    Grupos?: GruposListRelationFilter
    Escuela?: XOR<EscuelaNullableRelationFilter, EscuelaWhereInput> | null
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "Usuario_id">

  export type MaestrosOrderByWithAggregationInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrderInput | SortOrder
    _count?: MaestrosCountOrderByAggregateInput
    _avg?: MaestrosAvgOrderByAggregateInput
    _max?: MaestrosMaxOrderByAggregateInput
    _min?: MaestrosMinOrderByAggregateInput
    _sum?: MaestrosSumOrderByAggregateInput
  }

  export type MaestrosScalarWhereWithAggregatesInput = {
    AND?: MaestrosScalarWhereWithAggregatesInput | MaestrosScalarWhereWithAggregatesInput[]
    OR?: MaestrosScalarWhereWithAggregatesInput[]
    NOT?: MaestrosScalarWhereWithAggregatesInput | MaestrosScalarWhereWithAggregatesInput[]
    Usuario_id?: IntWithAggregatesFilter<"Maestros"> | number
    Escuela_id?: IntNullableWithAggregatesFilter<"Maestros"> | number | null
  }

  export type RespuestasWhereInput = {
    AND?: RespuestasWhereInput | RespuestasWhereInput[]
    OR?: RespuestasWhereInput[]
    NOT?: RespuestasWhereInput | RespuestasWhereInput[]
    AlumnoID?: IntFilter<"Respuestas"> | number
    Imagen?: StringNullableFilter<"Respuestas"> | string | null
    Puntaje?: IntNullableFilter<"Respuestas"> | number | null
    Respuesta?: StringNullableFilter<"Respuestas"> | string | null
    Inciso_id?: IntFilter<"Respuestas"> | number
    Alumnos?: XOR<AlumnosRelationFilter, AlumnosWhereInput>
    Incisos?: XOR<IncisosRelationFilter, IncisosWhereInput>
  }

  export type RespuestasOrderByWithRelationInput = {
    AlumnoID?: SortOrder
    Imagen?: SortOrderInput | SortOrder
    Puntaje?: SortOrderInput | SortOrder
    Respuesta?: SortOrderInput | SortOrder
    Inciso_id?: SortOrder
    Alumnos?: AlumnosOrderByWithRelationInput
    Incisos?: IncisosOrderByWithRelationInput
  }

  export type RespuestasWhereUniqueInput = Prisma.AtLeast<{
    AlumnoID_Inciso_id?: RespuestasAlumnoIDInciso_idCompoundUniqueInput
    AND?: RespuestasWhereInput | RespuestasWhereInput[]
    OR?: RespuestasWhereInput[]
    NOT?: RespuestasWhereInput | RespuestasWhereInput[]
    AlumnoID?: IntFilter<"Respuestas"> | number
    Imagen?: StringNullableFilter<"Respuestas"> | string | null
    Puntaje?: IntNullableFilter<"Respuestas"> | number | null
    Respuesta?: StringNullableFilter<"Respuestas"> | string | null
    Inciso_id?: IntFilter<"Respuestas"> | number
    Alumnos?: XOR<AlumnosRelationFilter, AlumnosWhereInput>
    Incisos?: XOR<IncisosRelationFilter, IncisosWhereInput>
  }, "AlumnoID_Inciso_id">

  export type RespuestasOrderByWithAggregationInput = {
    AlumnoID?: SortOrder
    Imagen?: SortOrderInput | SortOrder
    Puntaje?: SortOrderInput | SortOrder
    Respuesta?: SortOrderInput | SortOrder
    Inciso_id?: SortOrder
    _count?: RespuestasCountOrderByAggregateInput
    _avg?: RespuestasAvgOrderByAggregateInput
    _max?: RespuestasMaxOrderByAggregateInput
    _min?: RespuestasMinOrderByAggregateInput
    _sum?: RespuestasSumOrderByAggregateInput
  }

  export type RespuestasScalarWhereWithAggregatesInput = {
    AND?: RespuestasScalarWhereWithAggregatesInput | RespuestasScalarWhereWithAggregatesInput[]
    OR?: RespuestasScalarWhereWithAggregatesInput[]
    NOT?: RespuestasScalarWhereWithAggregatesInput | RespuestasScalarWhereWithAggregatesInput[]
    AlumnoID?: IntWithAggregatesFilter<"Respuestas"> | number
    Imagen?: StringNullableWithAggregatesFilter<"Respuestas"> | string | null
    Puntaje?: IntNullableWithAggregatesFilter<"Respuestas"> | number | null
    Respuesta?: StringNullableWithAggregatesFilter<"Respuestas"> | string | null
    Inciso_id?: IntWithAggregatesFilter<"Respuestas"> | number
  }

  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    Usuario_id?: IntFilter<"SuperAdmin"> | number
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }

  export type SuperAdminOrderByWithRelationInput = {
    Usuario_id?: SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    Usuario_id?: number
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    Usuarios?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
  }, "Usuario_id">

  export type SuperAdminOrderByWithAggregationInput = {
    Usuario_id?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _avg?: SuperAdminAvgOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
    _sum?: SuperAdminSumOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    Usuario_id?: IntWithAggregatesFilter<"SuperAdmin"> | number
  }

  export type TipoEjercicioWhereInput = {
    AND?: TipoEjercicioWhereInput | TipoEjercicioWhereInput[]
    OR?: TipoEjercicioWhereInput[]
    NOT?: TipoEjercicioWhereInput | TipoEjercicioWhereInput[]
    Tipo_id?: IntFilter<"TipoEjercicio"> | number
    Nombre?: StringFilter<"TipoEjercicio"> | string
    Ejercicios?: EjerciciosListRelationFilter
  }

  export type TipoEjercicioOrderByWithRelationInput = {
    Tipo_id?: SortOrder
    Nombre?: SortOrder
    Ejercicios?: EjerciciosOrderByRelationAggregateInput
  }

  export type TipoEjercicioWhereUniqueInput = Prisma.AtLeast<{
    Tipo_id?: number
    AND?: TipoEjercicioWhereInput | TipoEjercicioWhereInput[]
    OR?: TipoEjercicioWhereInput[]
    NOT?: TipoEjercicioWhereInput | TipoEjercicioWhereInput[]
    Nombre?: StringFilter<"TipoEjercicio"> | string
    Ejercicios?: EjerciciosListRelationFilter
  }, "Tipo_id">

  export type TipoEjercicioOrderByWithAggregationInput = {
    Tipo_id?: SortOrder
    Nombre?: SortOrder
    _count?: TipoEjercicioCountOrderByAggregateInput
    _avg?: TipoEjercicioAvgOrderByAggregateInput
    _max?: TipoEjercicioMaxOrderByAggregateInput
    _min?: TipoEjercicioMinOrderByAggregateInput
    _sum?: TipoEjercicioSumOrderByAggregateInput
  }

  export type TipoEjercicioScalarWhereWithAggregatesInput = {
    AND?: TipoEjercicioScalarWhereWithAggregatesInput | TipoEjercicioScalarWhereWithAggregatesInput[]
    OR?: TipoEjercicioScalarWhereWithAggregatesInput[]
    NOT?: TipoEjercicioScalarWhereWithAggregatesInput | TipoEjercicioScalarWhereWithAggregatesInput[]
    Tipo_id?: IntWithAggregatesFilter<"TipoEjercicio"> | number
    Nombre?: StringWithAggregatesFilter<"TipoEjercicio"> | string
  }

  export type TurnoWhereInput = {
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    Turno_id?: IntFilter<"Turno"> | number
    Horario?: StringFilter<"Turno"> | string
    Administrador?: AdministradorListRelationFilter
    Grupos?: GruposListRelationFilter
  }

  export type TurnoOrderByWithRelationInput = {
    Turno_id?: SortOrder
    Horario?: SortOrder
    Administrador?: AdministradorOrderByRelationAggregateInput
    Grupos?: GruposOrderByRelationAggregateInput
  }

  export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    Turno_id?: number
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    Horario?: StringFilter<"Turno"> | string
    Administrador?: AdministradorListRelationFilter
    Grupos?: GruposListRelationFilter
  }, "Turno_id">

  export type TurnoOrderByWithAggregationInput = {
    Turno_id?: SortOrder
    Horario?: SortOrder
    _count?: TurnoCountOrderByAggregateInput
    _avg?: TurnoAvgOrderByAggregateInput
    _max?: TurnoMaxOrderByAggregateInput
    _min?: TurnoMinOrderByAggregateInput
    _sum?: TurnoSumOrderByAggregateInput
  }

  export type TurnoScalarWhereWithAggregatesInput = {
    AND?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    OR?: TurnoScalarWhereWithAggregatesInput[]
    NOT?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    Turno_id?: IntWithAggregatesFilter<"Turno"> | number
    Horario?: StringWithAggregatesFilter<"Turno"> | string
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Usuarios_id?: IntFilter<"Usuarios"> | number
    Nombres?: StringFilter<"Usuarios"> | string
    Apellidos?: StringFilter<"Usuarios"> | string
    Correo?: StringFilter<"Usuarios"> | string
    Contrasena?: StringFilter<"Usuarios"> | string
    Administrador?: XOR<AdministradorNullableRelationFilter, AdministradorWhereInput> | null
    Alumnos?: XOR<AlumnosNullableRelationFilter, AlumnosWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    SuperAdmin?: XOR<SuperAdminNullableRelationFilter, SuperAdminWhereInput> | null
  }

  export type UsuariosOrderByWithRelationInput = {
    Usuarios_id?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Correo?: SortOrder
    Contrasena?: SortOrder
    Administrador?: AdministradorOrderByWithRelationInput
    Alumnos?: AlumnosOrderByWithRelationInput
    Maestros?: MaestrosOrderByWithRelationInput
    SuperAdmin?: SuperAdminOrderByWithRelationInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    Usuarios_id?: number
    Correo?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Nombres?: StringFilter<"Usuarios"> | string
    Apellidos?: StringFilter<"Usuarios"> | string
    Contrasena?: StringFilter<"Usuarios"> | string
    Administrador?: XOR<AdministradorNullableRelationFilter, AdministradorWhereInput> | null
    Alumnos?: XOR<AlumnosNullableRelationFilter, AlumnosWhereInput> | null
    Maestros?: XOR<MaestrosNullableRelationFilter, MaestrosWhereInput> | null
    SuperAdmin?: XOR<SuperAdminNullableRelationFilter, SuperAdminWhereInput> | null
  }, "Usuarios_id" | "Correo">

  export type UsuariosOrderByWithAggregationInput = {
    Usuarios_id?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Correo?: SortOrder
    Contrasena?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    Usuarios_id?: IntWithAggregatesFilter<"Usuarios"> | number
    Nombres?: StringWithAggregatesFilter<"Usuarios"> | string
    Apellidos?: StringWithAggregatesFilter<"Usuarios"> | string
    Correo?: StringWithAggregatesFilter<"Usuarios"> | string
    Contrasena?: StringWithAggregatesFilter<"Usuarios"> | string
  }

  export type AdministradorCreateInput = {
    Escuela?: EscuelaCreateNestedOneWithoutAdministradorInput
    Turno?: TurnoCreateNestedOneWithoutAdministradorInput
    Usuarios: UsuariosCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    Usuario_id: number
    Escuela_id?: number | null
    Turno_id?: number | null
  }

  export type AdministradorUpdateInput = {
    Escuela?: EscuelaUpdateOneWithoutAdministradorNestedInput
    Turno?: TurnoUpdateOneWithoutAdministradorNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdministradorCreateManyInput = {
    Usuario_id: number
    Escuela_id?: number | null
    Turno_id?: number | null
  }

  export type AdministradorUpdateManyMutationInput = {

  }

  export type AdministradorUncheckedUpdateManyInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlumnosCreateInput = {
    Grupos?: GruposCreateNestedOneWithoutAlumnosInput
    Usuarios: UsuariosCreateNestedOneWithoutAlumnosInput
    Respuestas?: RespuestasCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateInput = {
    Usuario_id: number
    Grupo_id?: number | null
    Respuestas?: RespuestasUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUpdateInput = {
    Grupos?: GruposUpdateOneWithoutAlumnosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutAlumnosNestedInput
    Respuestas?: RespuestasUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Grupo_id?: NullableIntFieldUpdateOperationsInput | number | null
    Respuestas?: RespuestasUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosCreateManyInput = {
    Usuario_id: number
    Grupo_id?: number | null
  }

  export type AlumnosUpdateManyMutationInput = {

  }

  export type AlumnosUncheckedUpdateManyInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Grupo_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EjerciciosCreateInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado: EstadoCreateNestedOneWithoutEjerciciosInput
    Grupos?: GruposCreateNestedOneWithoutEjerciciosInput
    Maestros?: MaestrosCreateNestedOneWithoutEjerciciosInput
    TipoEjercicio: TipoEjercicioCreateNestedOneWithoutEjerciciosInput
    Incisos?: IncisosCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
    Incisos?: IncisosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUpdateInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: EstadoUpdateOneRequiredWithoutEjerciciosNestedInput
    Grupos?: GruposUpdateOneWithoutEjerciciosNestedInput
    Maestros?: MaestrosUpdateOneWithoutEjerciciosNestedInput
    TipoEjercicio?: TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput
    Incisos?: IncisosUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
    Incisos?: IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosCreateManyInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
  }

  export type EjerciciosUpdateManyMutationInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EjerciciosUncheckedUpdateManyInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type EscuelaCreateInput = {
    Nombre: string
    Administrador?: AdministradorCreateNestedManyWithoutEscuelaInput
    Grupos?: GruposCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateInput = {
    Escuela_id?: number
    Nombre: string
    Administrador?: AdministradorUncheckedCreateNestedManyWithoutEscuelaInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateManyWithoutEscuelaNestedInput
    Grupos?: GruposUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateInput = {
    Escuela_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateManyWithoutEscuelaNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaCreateManyInput = {
    Escuela_id?: number
    Nombre: string
  }

  export type EscuelaUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EscuelaUncheckedUpdateManyInput = {
    Escuela_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateInput = {
    Nombre: string
    Ejercicios?: EjerciciosCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUncheckedCreateInput = {
    Estado_id?: number
    Nombre: string
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateInput = {
    Estado_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoCreateManyInput = {
    Estado_id?: number
    Nombre: string
  }

  export type EstadoUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateManyInput = {
    Estado_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GradoCreateInput = {
    Nivel: string
    Grupos?: GruposCreateNestedManyWithoutGradoInput
  }

  export type GradoUncheckedCreateInput = {
    Grado_id?: number
    Nivel: string
    Grupos?: GruposUncheckedCreateNestedManyWithoutGradoInput
  }

  export type GradoUpdateInput = {
    Nivel?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUpdateManyWithoutGradoNestedInput
  }

  export type GradoUncheckedUpdateInput = {
    Grado_id?: IntFieldUpdateOperationsInput | number
    Nivel?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUncheckedUpdateManyWithoutGradoNestedInput
  }

  export type GradoCreateManyInput = {
    Grado_id?: number
    Nivel: string
  }

  export type GradoUpdateManyMutationInput = {
    Nivel?: StringFieldUpdateOperationsInput | string
  }

  export type GradoUncheckedUpdateManyInput = {
    Grado_id?: IntFieldUpdateOperationsInput | number
    Nivel?: StringFieldUpdateOperationsInput | string
  }

  export type GruposCreateInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposUpdateInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposCreateManyInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
  }

  export type GruposUpdateManyMutationInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
  }

  export type GruposUncheckedUpdateManyInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IncisosCreateInput = {
    LoSolicitado: string
    Ejercicios?: EjerciciosCreateNestedOneWithoutIncisosInput
    Respuestas?: RespuestasCreateNestedManyWithoutIncisosInput
  }

  export type IncisosUncheckedCreateInput = {
    Incisos_id?: number
    LoSolicitado: string
    EjercicioID?: number | null
    Respuestas?: RespuestasUncheckedCreateNestedManyWithoutIncisosInput
  }

  export type IncisosUpdateInput = {
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUpdateOneWithoutIncisosNestedInput
    Respuestas?: RespuestasUpdateManyWithoutIncisosNestedInput
  }

  export type IncisosUncheckedUpdateInput = {
    Incisos_id?: IntFieldUpdateOperationsInput | number
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    EjercicioID?: NullableIntFieldUpdateOperationsInput | number | null
    Respuestas?: RespuestasUncheckedUpdateManyWithoutIncisosNestedInput
  }

  export type IncisosCreateManyInput = {
    Incisos_id?: number
    LoSolicitado: string
    EjercicioID?: number | null
  }

  export type IncisosUpdateManyMutationInput = {
    LoSolicitado?: StringFieldUpdateOperationsInput | string
  }

  export type IncisosUncheckedUpdateManyInput = {
    Incisos_id?: IntFieldUpdateOperationsInput | number
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    EjercicioID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaestrosCreateInput = {
    Ejercicios?: EjerciciosCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposCreateNestedManyWithoutMaestrosInput
    Escuela?: EscuelaCreateNestedOneWithoutMaestrosInput
    Usuarios: UsuariosCreateNestedOneWithoutMaestrosInput
  }

  export type MaestrosUncheckedCreateInput = {
    Usuario_id: number
    Escuela_id?: number | null
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutMaestrosInput
  }

  export type MaestrosUpdateInput = {
    Ejercicios?: EjerciciosUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUpdateManyWithoutMaestrosNestedInput
    Escuela?: EscuelaUpdateOneWithoutMaestrosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutMaestrosNestedInput
  }

  export type MaestrosCreateManyInput = {
    Usuario_id: number
    Escuela_id?: number | null
  }

  export type MaestrosUpdateManyMutationInput = {

  }

  export type MaestrosUncheckedUpdateManyInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RespuestasCreateInput = {
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Alumnos: AlumnosCreateNestedOneWithoutRespuestasInput
    Incisos: IncisosCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestasUncheckedCreateInput = {
    AlumnoID: number
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Inciso_id: number
  }

  export type RespuestasUpdateInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Alumnos?: AlumnosUpdateOneRequiredWithoutRespuestasNestedInput
    Incisos?: IncisosUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestasUncheckedUpdateInput = {
    AlumnoID?: IntFieldUpdateOperationsInput | number
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Inciso_id?: IntFieldUpdateOperationsInput | number
  }

  export type RespuestasCreateManyInput = {
    AlumnoID: number
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Inciso_id: number
  }

  export type RespuestasUpdateManyMutationInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RespuestasUncheckedUpdateManyInput = {
    AlumnoID?: IntFieldUpdateOperationsInput | number
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Inciso_id?: IntFieldUpdateOperationsInput | number
  }

  export type SuperAdminCreateInput = {
    Usuarios: UsuariosCreateNestedOneWithoutSuperAdminInput
  }

  export type SuperAdminUncheckedCreateInput = {
    Usuario_id: number
  }

  export type SuperAdminUpdateInput = {
    Usuarios?: UsuariosUpdateOneRequiredWithoutSuperAdminNestedInput
  }

  export type SuperAdminUncheckedUpdateInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type SuperAdminCreateManyInput = {
    Usuario_id: number
  }

  export type SuperAdminUpdateManyMutationInput = {

  }

  export type SuperAdminUncheckedUpdateManyInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type TipoEjercicioCreateInput = {
    Nombre: string
    Ejercicios?: EjerciciosCreateNestedManyWithoutTipoEjercicioInput
  }

  export type TipoEjercicioUncheckedCreateInput = {
    Tipo_id?: number
    Nombre: string
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutTipoEjercicioInput
  }

  export type TipoEjercicioUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUpdateManyWithoutTipoEjercicioNestedInput
  }

  export type TipoEjercicioUncheckedUpdateInput = {
    Tipo_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutTipoEjercicioNestedInput
  }

  export type TipoEjercicioCreateManyInput = {
    Tipo_id?: number
    Nombre: string
  }

  export type TipoEjercicioUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoEjercicioUncheckedUpdateManyInput = {
    Tipo_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoCreateInput = {
    Horario: string
    Administrador?: AdministradorCreateNestedManyWithoutTurnoInput
    Grupos?: GruposCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateInput = {
    Turno_id?: number
    Horario: string
    Administrador?: AdministradorUncheckedCreateNestedManyWithoutTurnoInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUpdateInput = {
    Horario?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateManyWithoutTurnoNestedInput
    Grupos?: GruposUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateInput = {
    Turno_id?: IntFieldUpdateOperationsInput | number
    Horario?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateManyWithoutTurnoNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoCreateManyInput = {
    Turno_id?: number
    Horario: string
  }

  export type TurnoUpdateManyMutationInput = {
    Horario?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoUncheckedUpdateManyInput = {
    Turno_id?: IntFieldUpdateOperationsInput | number
    Horario?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateInput = {
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosUncheckedCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosUncheckedCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUpdateInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUncheckedUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUncheckedUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosCreateManyInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
  }

  export type UsuariosUpdateManyMutationInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
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

  export type EscuelaNullableRelationFilter = {
    is?: EscuelaWhereInput | null
    isNot?: EscuelaWhereInput | null
  }

  export type TurnoNullableRelationFilter = {
    is?: TurnoWhereInput | null
    isNot?: TurnoWhereInput | null
  }

  export type UsuariosRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
    Turno_id?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
    Turno_id?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
    Turno_id?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
    Turno_id?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
    Turno_id?: SortOrder
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

  export type GruposNullableRelationFilter = {
    is?: GruposWhereInput | null
    isNot?: GruposWhereInput | null
  }

  export type RespuestasListRelationFilter = {
    every?: RespuestasWhereInput
    some?: RespuestasWhereInput
    none?: RespuestasWhereInput
  }

  export type RespuestasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlumnosCountOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrder
  }

  export type AlumnosAvgOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrder
  }

  export type AlumnosMaxOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrder
  }

  export type AlumnosMinOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrder
  }

  export type AlumnosSumOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Grupo_id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EstadoRelationFilter = {
    is?: EstadoWhereInput
    isNot?: EstadoWhereInput
  }

  export type MaestrosNullableRelationFilter = {
    is?: MaestrosWhereInput | null
    isNot?: MaestrosWhereInput | null
  }

  export type TipoEjercicioRelationFilter = {
    is?: TipoEjercicioWhereInput
    isNot?: TipoEjercicioWhereInput
  }

  export type IncisosListRelationFilter = {
    every?: IncisosWhereInput
    some?: IncisosWhereInput
    none?: IncisosWhereInput
  }

  export type IncisosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EjerciciosCountOrderByAggregateInput = {
    Ejercicios_id?: SortOrder
    NombreEjercicio?: SortOrder
    MaestroID?: SortOrder
    GrupoID?: SortOrder
    TipoEjercicio_id?: SortOrder
    FechaPublicacion?: SortOrder
    FechaLimite?: SortOrder
    Estado_id?: SortOrder
  }

  export type EjerciciosAvgOrderByAggregateInput = {
    Ejercicios_id?: SortOrder
    MaestroID?: SortOrder
    GrupoID?: SortOrder
    TipoEjercicio_id?: SortOrder
    Estado_id?: SortOrder
  }

  export type EjerciciosMaxOrderByAggregateInput = {
    Ejercicios_id?: SortOrder
    NombreEjercicio?: SortOrder
    MaestroID?: SortOrder
    GrupoID?: SortOrder
    TipoEjercicio_id?: SortOrder
    FechaPublicacion?: SortOrder
    FechaLimite?: SortOrder
    Estado_id?: SortOrder
  }

  export type EjerciciosMinOrderByAggregateInput = {
    Ejercicios_id?: SortOrder
    NombreEjercicio?: SortOrder
    MaestroID?: SortOrder
    GrupoID?: SortOrder
    TipoEjercicio_id?: SortOrder
    FechaPublicacion?: SortOrder
    FechaLimite?: SortOrder
    Estado_id?: SortOrder
  }

  export type EjerciciosSumOrderByAggregateInput = {
    Ejercicios_id?: SortOrder
    MaestroID?: SortOrder
    GrupoID?: SortOrder
    TipoEjercicio_id?: SortOrder
    Estado_id?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdministradorListRelationFilter = {
    every?: AdministradorWhereInput
    some?: AdministradorWhereInput
    none?: AdministradorWhereInput
  }

  export type GruposListRelationFilter = {
    every?: GruposWhereInput
    some?: GruposWhereInput
    none?: GruposWhereInput
  }

  export type MaestrosListRelationFilter = {
    every?: MaestrosWhereInput
    some?: MaestrosWhereInput
    none?: MaestrosWhereInput
  }

  export type AdministradorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GruposOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaestrosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscuelaCountOrderByAggregateInput = {
    Escuela_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EscuelaAvgOrderByAggregateInput = {
    Escuela_id?: SortOrder
  }

  export type EscuelaMaxOrderByAggregateInput = {
    Escuela_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EscuelaMinOrderByAggregateInput = {
    Escuela_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EscuelaSumOrderByAggregateInput = {
    Escuela_id?: SortOrder
  }

  export type EjerciciosListRelationFilter = {
    every?: EjerciciosWhereInput
    some?: EjerciciosWhereInput
    none?: EjerciciosWhereInput
  }

  export type EjerciciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoCountOrderByAggregateInput = {
    Estado_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EstadoAvgOrderByAggregateInput = {
    Estado_id?: SortOrder
  }

  export type EstadoMaxOrderByAggregateInput = {
    Estado_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EstadoMinOrderByAggregateInput = {
    Estado_id?: SortOrder
    Nombre?: SortOrder
  }

  export type EstadoSumOrderByAggregateInput = {
    Estado_id?: SortOrder
  }

  export type GradoCountOrderByAggregateInput = {
    Grado_id?: SortOrder
    Nivel?: SortOrder
  }

  export type GradoAvgOrderByAggregateInput = {
    Grado_id?: SortOrder
  }

  export type GradoMaxOrderByAggregateInput = {
    Grado_id?: SortOrder
    Nivel?: SortOrder
  }

  export type GradoMinOrderByAggregateInput = {
    Grado_id?: SortOrder
    Nivel?: SortOrder
  }

  export type GradoSumOrderByAggregateInput = {
    Grado_id?: SortOrder
  }

  export type AlumnosListRelationFilter = {
    every?: AlumnosWhereInput
    some?: AlumnosWhereInput
    none?: AlumnosWhereInput
  }

  export type GradoNullableRelationFilter = {
    is?: GradoWhereInput | null
    isNot?: GradoWhereInput | null
  }

  export type AlumnosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GruposCountOrderByAggregateInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrder
    NombreGrupo?: SortOrder
    Maestro_id?: SortOrder
    Turno_id?: SortOrder
    Grado_id?: SortOrder
  }

  export type GruposAvgOrderByAggregateInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrder
    Maestro_id?: SortOrder
    Turno_id?: SortOrder
    Grado_id?: SortOrder
  }

  export type GruposMaxOrderByAggregateInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrder
    NombreGrupo?: SortOrder
    Maestro_id?: SortOrder
    Turno_id?: SortOrder
    Grado_id?: SortOrder
  }

  export type GruposMinOrderByAggregateInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrder
    NombreGrupo?: SortOrder
    Maestro_id?: SortOrder
    Turno_id?: SortOrder
    Grado_id?: SortOrder
  }

  export type GruposSumOrderByAggregateInput = {
    Grupos_id?: SortOrder
    Escuela_id?: SortOrder
    Maestro_id?: SortOrder
    Turno_id?: SortOrder
    Grado_id?: SortOrder
  }

  export type EjerciciosNullableRelationFilter = {
    is?: EjerciciosWhereInput | null
    isNot?: EjerciciosWhereInput | null
  }

  export type IncisosCountOrderByAggregateInput = {
    Incisos_id?: SortOrder
    LoSolicitado?: SortOrder
    EjercicioID?: SortOrder
  }

  export type IncisosAvgOrderByAggregateInput = {
    Incisos_id?: SortOrder
    EjercicioID?: SortOrder
  }

  export type IncisosMaxOrderByAggregateInput = {
    Incisos_id?: SortOrder
    LoSolicitado?: SortOrder
    EjercicioID?: SortOrder
  }

  export type IncisosMinOrderByAggregateInput = {
    Incisos_id?: SortOrder
    LoSolicitado?: SortOrder
    EjercicioID?: SortOrder
  }

  export type IncisosSumOrderByAggregateInput = {
    Incisos_id?: SortOrder
    EjercicioID?: SortOrder
  }

  export type MaestrosCountOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
  }

  export type MaestrosAvgOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
  }

  export type MaestrosMaxOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
  }

  export type MaestrosMinOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
  }

  export type MaestrosSumOrderByAggregateInput = {
    Usuario_id?: SortOrder
    Escuela_id?: SortOrder
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

  export type AlumnosRelationFilter = {
    is?: AlumnosWhereInput
    isNot?: AlumnosWhereInput
  }

  export type IncisosRelationFilter = {
    is?: IncisosWhereInput
    isNot?: IncisosWhereInput
  }

  export type RespuestasAlumnoIDInciso_idCompoundUniqueInput = {
    AlumnoID: number
    Inciso_id: number
  }

  export type RespuestasCountOrderByAggregateInput = {
    AlumnoID?: SortOrder
    Imagen?: SortOrder
    Puntaje?: SortOrder
    Respuesta?: SortOrder
    Inciso_id?: SortOrder
  }

  export type RespuestasAvgOrderByAggregateInput = {
    AlumnoID?: SortOrder
    Puntaje?: SortOrder
    Inciso_id?: SortOrder
  }

  export type RespuestasMaxOrderByAggregateInput = {
    AlumnoID?: SortOrder
    Imagen?: SortOrder
    Puntaje?: SortOrder
    Respuesta?: SortOrder
    Inciso_id?: SortOrder
  }

  export type RespuestasMinOrderByAggregateInput = {
    AlumnoID?: SortOrder
    Imagen?: SortOrder
    Puntaje?: SortOrder
    Respuesta?: SortOrder
    Inciso_id?: SortOrder
  }

  export type RespuestasSumOrderByAggregateInput = {
    AlumnoID?: SortOrder
    Puntaje?: SortOrder
    Inciso_id?: SortOrder
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

  export type SuperAdminCountOrderByAggregateInput = {
    Usuario_id?: SortOrder
  }

  export type SuperAdminAvgOrderByAggregateInput = {
    Usuario_id?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    Usuario_id?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    Usuario_id?: SortOrder
  }

  export type SuperAdminSumOrderByAggregateInput = {
    Usuario_id?: SortOrder
  }

  export type TipoEjercicioCountOrderByAggregateInput = {
    Tipo_id?: SortOrder
    Nombre?: SortOrder
  }

  export type TipoEjercicioAvgOrderByAggregateInput = {
    Tipo_id?: SortOrder
  }

  export type TipoEjercicioMaxOrderByAggregateInput = {
    Tipo_id?: SortOrder
    Nombre?: SortOrder
  }

  export type TipoEjercicioMinOrderByAggregateInput = {
    Tipo_id?: SortOrder
    Nombre?: SortOrder
  }

  export type TipoEjercicioSumOrderByAggregateInput = {
    Tipo_id?: SortOrder
  }

  export type TurnoCountOrderByAggregateInput = {
    Turno_id?: SortOrder
    Horario?: SortOrder
  }

  export type TurnoAvgOrderByAggregateInput = {
    Turno_id?: SortOrder
  }

  export type TurnoMaxOrderByAggregateInput = {
    Turno_id?: SortOrder
    Horario?: SortOrder
  }

  export type TurnoMinOrderByAggregateInput = {
    Turno_id?: SortOrder
    Horario?: SortOrder
  }

  export type TurnoSumOrderByAggregateInput = {
    Turno_id?: SortOrder
  }

  export type AdministradorNullableRelationFilter = {
    is?: AdministradorWhereInput | null
    isNot?: AdministradorWhereInput | null
  }

  export type AlumnosNullableRelationFilter = {
    is?: AlumnosWhereInput | null
    isNot?: AlumnosWhereInput | null
  }

  export type SuperAdminNullableRelationFilter = {
    is?: SuperAdminWhereInput | null
    isNot?: SuperAdminWhereInput | null
  }

  export type UsuariosCountOrderByAggregateInput = {
    Usuarios_id?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Correo?: SortOrder
    Contrasena?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    Usuarios_id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    Usuarios_id?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Correo?: SortOrder
    Contrasena?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    Usuarios_id?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Correo?: SortOrder
    Contrasena?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    Usuarios_id?: SortOrder
  }

  export type EscuelaCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<EscuelaCreateWithoutAdministradorInput, EscuelaUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutAdministradorInput
    connect?: EscuelaWhereUniqueInput
  }

  export type TurnoCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<TurnoCreateWithoutAdministradorInput, TurnoUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutAdministradorInput
    connect?: TurnoWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<UsuariosCreateWithoutAdministradorInput, UsuariosUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAdministradorInput
    connect?: UsuariosWhereUniqueInput
  }

  export type EscuelaUpdateOneWithoutAdministradorNestedInput = {
    create?: XOR<EscuelaCreateWithoutAdministradorInput, EscuelaUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutAdministradorInput
    upsert?: EscuelaUpsertWithoutAdministradorInput
    disconnect?: EscuelaWhereInput | boolean
    delete?: EscuelaWhereInput | boolean
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutAdministradorInput, EscuelaUpdateWithoutAdministradorInput>, EscuelaUncheckedUpdateWithoutAdministradorInput>
  }

  export type TurnoUpdateOneWithoutAdministradorNestedInput = {
    create?: XOR<TurnoCreateWithoutAdministradorInput, TurnoUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutAdministradorInput
    upsert?: TurnoUpsertWithoutAdministradorInput
    disconnect?: TurnoWhereInput | boolean
    delete?: TurnoWhereInput | boolean
    connect?: TurnoWhereUniqueInput
    update?: XOR<XOR<TurnoUpdateToOneWithWhereWithoutAdministradorInput, TurnoUpdateWithoutAdministradorInput>, TurnoUncheckedUpdateWithoutAdministradorInput>
  }

  export type UsuariosUpdateOneRequiredWithoutAdministradorNestedInput = {
    create?: XOR<UsuariosCreateWithoutAdministradorInput, UsuariosUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAdministradorInput
    upsert?: UsuariosUpsertWithoutAdministradorInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutAdministradorInput, UsuariosUpdateWithoutAdministradorInput>, UsuariosUncheckedUpdateWithoutAdministradorInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GruposCreateNestedOneWithoutAlumnosInput = {
    create?: XOR<GruposCreateWithoutAlumnosInput, GruposUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutAlumnosInput
    connect?: GruposWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutAlumnosInput = {
    create?: XOR<UsuariosCreateWithoutAlumnosInput, UsuariosUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAlumnosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type RespuestasCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput> | RespuestasCreateWithoutAlumnosInput[] | RespuestasUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutAlumnosInput | RespuestasCreateOrConnectWithoutAlumnosInput[]
    createMany?: RespuestasCreateManyAlumnosInputEnvelope
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
  }

  export type RespuestasUncheckedCreateNestedManyWithoutAlumnosInput = {
    create?: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput> | RespuestasCreateWithoutAlumnosInput[] | RespuestasUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutAlumnosInput | RespuestasCreateOrConnectWithoutAlumnosInput[]
    createMany?: RespuestasCreateManyAlumnosInputEnvelope
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
  }

  export type GruposUpdateOneWithoutAlumnosNestedInput = {
    create?: XOR<GruposCreateWithoutAlumnosInput, GruposUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutAlumnosInput
    upsert?: GruposUpsertWithoutAlumnosInput
    disconnect?: GruposWhereInput | boolean
    delete?: GruposWhereInput | boolean
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutAlumnosInput, GruposUpdateWithoutAlumnosInput>, GruposUncheckedUpdateWithoutAlumnosInput>
  }

  export type UsuariosUpdateOneRequiredWithoutAlumnosNestedInput = {
    create?: XOR<UsuariosCreateWithoutAlumnosInput, UsuariosUncheckedCreateWithoutAlumnosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutAlumnosInput
    upsert?: UsuariosUpsertWithoutAlumnosInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutAlumnosInput, UsuariosUpdateWithoutAlumnosInput>, UsuariosUncheckedUpdateWithoutAlumnosInput>
  }

  export type RespuestasUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput> | RespuestasCreateWithoutAlumnosInput[] | RespuestasUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutAlumnosInput | RespuestasCreateOrConnectWithoutAlumnosInput[]
    upsert?: RespuestasUpsertWithWhereUniqueWithoutAlumnosInput | RespuestasUpsertWithWhereUniqueWithoutAlumnosInput[]
    createMany?: RespuestasCreateManyAlumnosInputEnvelope
    set?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    disconnect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    delete?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    update?: RespuestasUpdateWithWhereUniqueWithoutAlumnosInput | RespuestasUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: RespuestasUpdateManyWithWhereWithoutAlumnosInput | RespuestasUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
  }

  export type RespuestasUncheckedUpdateManyWithoutAlumnosNestedInput = {
    create?: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput> | RespuestasCreateWithoutAlumnosInput[] | RespuestasUncheckedCreateWithoutAlumnosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutAlumnosInput | RespuestasCreateOrConnectWithoutAlumnosInput[]
    upsert?: RespuestasUpsertWithWhereUniqueWithoutAlumnosInput | RespuestasUpsertWithWhereUniqueWithoutAlumnosInput[]
    createMany?: RespuestasCreateManyAlumnosInputEnvelope
    set?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    disconnect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    delete?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    update?: RespuestasUpdateWithWhereUniqueWithoutAlumnosInput | RespuestasUpdateWithWhereUniqueWithoutAlumnosInput[]
    updateMany?: RespuestasUpdateManyWithWhereWithoutAlumnosInput | RespuestasUpdateManyWithWhereWithoutAlumnosInput[]
    deleteMany?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
  }

  export type EstadoCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<EstadoCreateWithoutEjerciciosInput, EstadoUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutEjerciciosInput
    connect?: EstadoWhereUniqueInput
  }

  export type GruposCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<GruposCreateWithoutEjerciciosInput, GruposUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutEjerciciosInput
    connect?: GruposWhereUniqueInput
  }

  export type MaestrosCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<MaestrosCreateWithoutEjerciciosInput, MaestrosUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutEjerciciosInput
    connect?: MaestrosWhereUniqueInput
  }

  export type TipoEjercicioCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<TipoEjercicioCreateWithoutEjerciciosInput, TipoEjercicioUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: TipoEjercicioCreateOrConnectWithoutEjerciciosInput
    connect?: TipoEjercicioWhereUniqueInput
  }

  export type IncisosCreateNestedManyWithoutEjerciciosInput = {
    create?: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput> | IncisosCreateWithoutEjerciciosInput[] | IncisosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: IncisosCreateOrConnectWithoutEjerciciosInput | IncisosCreateOrConnectWithoutEjerciciosInput[]
    createMany?: IncisosCreateManyEjerciciosInputEnvelope
    connect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
  }

  export type IncisosUncheckedCreateNestedManyWithoutEjerciciosInput = {
    create?: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput> | IncisosCreateWithoutEjerciciosInput[] | IncisosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: IncisosCreateOrConnectWithoutEjerciciosInput | IncisosCreateOrConnectWithoutEjerciciosInput[]
    createMany?: IncisosCreateManyEjerciciosInputEnvelope
    connect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EstadoUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<EstadoCreateWithoutEjerciciosInput, EstadoUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutEjerciciosInput
    upsert?: EstadoUpsertWithoutEjerciciosInput
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutEjerciciosInput, EstadoUpdateWithoutEjerciciosInput>, EstadoUncheckedUpdateWithoutEjerciciosInput>
  }

  export type GruposUpdateOneWithoutEjerciciosNestedInput = {
    create?: XOR<GruposCreateWithoutEjerciciosInput, GruposUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutEjerciciosInput
    upsert?: GruposUpsertWithoutEjerciciosInput
    disconnect?: GruposWhereInput | boolean
    delete?: GruposWhereInput | boolean
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutEjerciciosInput, GruposUpdateWithoutEjerciciosInput>, GruposUncheckedUpdateWithoutEjerciciosInput>
  }

  export type MaestrosUpdateOneWithoutEjerciciosNestedInput = {
    create?: XOR<MaestrosCreateWithoutEjerciciosInput, MaestrosUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutEjerciciosInput
    upsert?: MaestrosUpsertWithoutEjerciciosInput
    disconnect?: MaestrosWhereInput | boolean
    delete?: MaestrosWhereInput | boolean
    connect?: MaestrosWhereUniqueInput
    update?: XOR<XOR<MaestrosUpdateToOneWithWhereWithoutEjerciciosInput, MaestrosUpdateWithoutEjerciciosInput>, MaestrosUncheckedUpdateWithoutEjerciciosInput>
  }

  export type TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<TipoEjercicioCreateWithoutEjerciciosInput, TipoEjercicioUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: TipoEjercicioCreateOrConnectWithoutEjerciciosInput
    upsert?: TipoEjercicioUpsertWithoutEjerciciosInput
    connect?: TipoEjercicioWhereUniqueInput
    update?: XOR<XOR<TipoEjercicioUpdateToOneWithWhereWithoutEjerciciosInput, TipoEjercicioUpdateWithoutEjerciciosInput>, TipoEjercicioUncheckedUpdateWithoutEjerciciosInput>
  }

  export type IncisosUpdateManyWithoutEjerciciosNestedInput = {
    create?: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput> | IncisosCreateWithoutEjerciciosInput[] | IncisosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: IncisosCreateOrConnectWithoutEjerciciosInput | IncisosCreateOrConnectWithoutEjerciciosInput[]
    upsert?: IncisosUpsertWithWhereUniqueWithoutEjerciciosInput | IncisosUpsertWithWhereUniqueWithoutEjerciciosInput[]
    createMany?: IncisosCreateManyEjerciciosInputEnvelope
    set?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    disconnect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    delete?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    connect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    update?: IncisosUpdateWithWhereUniqueWithoutEjerciciosInput | IncisosUpdateWithWhereUniqueWithoutEjerciciosInput[]
    updateMany?: IncisosUpdateManyWithWhereWithoutEjerciciosInput | IncisosUpdateManyWithWhereWithoutEjerciciosInput[]
    deleteMany?: IncisosScalarWhereInput | IncisosScalarWhereInput[]
  }

  export type IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput = {
    create?: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput> | IncisosCreateWithoutEjerciciosInput[] | IncisosUncheckedCreateWithoutEjerciciosInput[]
    connectOrCreate?: IncisosCreateOrConnectWithoutEjerciciosInput | IncisosCreateOrConnectWithoutEjerciciosInput[]
    upsert?: IncisosUpsertWithWhereUniqueWithoutEjerciciosInput | IncisosUpsertWithWhereUniqueWithoutEjerciciosInput[]
    createMany?: IncisosCreateManyEjerciciosInputEnvelope
    set?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    disconnect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    delete?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    connect?: IncisosWhereUniqueInput | IncisosWhereUniqueInput[]
    update?: IncisosUpdateWithWhereUniqueWithoutEjerciciosInput | IncisosUpdateWithWhereUniqueWithoutEjerciciosInput[]
    updateMany?: IncisosUpdateManyWithWhereWithoutEjerciciosInput | IncisosUpdateManyWithWhereWithoutEjerciciosInput[]
    deleteMany?: IncisosScalarWhereInput | IncisosScalarWhereInput[]
  }

  export type AdministradorCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput> | AdministradorCreateWithoutEscuelaInput[] | AdministradorUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutEscuelaInput | AdministradorCreateOrConnectWithoutEscuelaInput[]
    createMany?: AdministradorCreateManyEscuelaInputEnvelope
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
  }

  export type GruposCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput> | GruposCreateWithoutEscuelaInput[] | GruposUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEscuelaInput | GruposCreateOrConnectWithoutEscuelaInput[]
    createMany?: GruposCreateManyEscuelaInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type MaestrosCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput> | MaestrosCreateWithoutEscuelaInput[] | MaestrosUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: MaestrosCreateOrConnectWithoutEscuelaInput | MaestrosCreateOrConnectWithoutEscuelaInput[]
    createMany?: MaestrosCreateManyEscuelaInputEnvelope
    connect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
  }

  export type AdministradorUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput> | AdministradorCreateWithoutEscuelaInput[] | AdministradorUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutEscuelaInput | AdministradorCreateOrConnectWithoutEscuelaInput[]
    createMany?: AdministradorCreateManyEscuelaInputEnvelope
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
  }

  export type GruposUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput> | GruposCreateWithoutEscuelaInput[] | GruposUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEscuelaInput | GruposCreateOrConnectWithoutEscuelaInput[]
    createMany?: GruposCreateManyEscuelaInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type MaestrosUncheckedCreateNestedManyWithoutEscuelaInput = {
    create?: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput> | MaestrosCreateWithoutEscuelaInput[] | MaestrosUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: MaestrosCreateOrConnectWithoutEscuelaInput | MaestrosCreateOrConnectWithoutEscuelaInput[]
    createMany?: MaestrosCreateManyEscuelaInputEnvelope
    connect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
  }

  export type AdministradorUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput> | AdministradorCreateWithoutEscuelaInput[] | AdministradorUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutEscuelaInput | AdministradorCreateOrConnectWithoutEscuelaInput[]
    upsert?: AdministradorUpsertWithWhereUniqueWithoutEscuelaInput | AdministradorUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: AdministradorCreateManyEscuelaInputEnvelope
    set?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    disconnect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    delete?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    update?: AdministradorUpdateWithWhereUniqueWithoutEscuelaInput | AdministradorUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: AdministradorUpdateManyWithWhereWithoutEscuelaInput | AdministradorUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
  }

  export type GruposUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput> | GruposCreateWithoutEscuelaInput[] | GruposUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEscuelaInput | GruposCreateOrConnectWithoutEscuelaInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutEscuelaInput | GruposUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GruposCreateManyEscuelaInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutEscuelaInput | GruposUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutEscuelaInput | GruposUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type MaestrosUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput> | MaestrosCreateWithoutEscuelaInput[] | MaestrosUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: MaestrosCreateOrConnectWithoutEscuelaInput | MaestrosCreateOrConnectWithoutEscuelaInput[]
    upsert?: MaestrosUpsertWithWhereUniqueWithoutEscuelaInput | MaestrosUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: MaestrosCreateManyEscuelaInputEnvelope
    set?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    disconnect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    delete?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    connect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    update?: MaestrosUpdateWithWhereUniqueWithoutEscuelaInput | MaestrosUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: MaestrosUpdateManyWithWhereWithoutEscuelaInput | MaestrosUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: MaestrosScalarWhereInput | MaestrosScalarWhereInput[]
  }

  export type AdministradorUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput> | AdministradorCreateWithoutEscuelaInput[] | AdministradorUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutEscuelaInput | AdministradorCreateOrConnectWithoutEscuelaInput[]
    upsert?: AdministradorUpsertWithWhereUniqueWithoutEscuelaInput | AdministradorUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: AdministradorCreateManyEscuelaInputEnvelope
    set?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    disconnect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    delete?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    update?: AdministradorUpdateWithWhereUniqueWithoutEscuelaInput | AdministradorUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: AdministradorUpdateManyWithWhereWithoutEscuelaInput | AdministradorUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
  }

  export type GruposUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput> | GruposCreateWithoutEscuelaInput[] | GruposUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEscuelaInput | GruposCreateOrConnectWithoutEscuelaInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutEscuelaInput | GruposUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: GruposCreateManyEscuelaInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutEscuelaInput | GruposUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutEscuelaInput | GruposUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type MaestrosUncheckedUpdateManyWithoutEscuelaNestedInput = {
    create?: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput> | MaestrosCreateWithoutEscuelaInput[] | MaestrosUncheckedCreateWithoutEscuelaInput[]
    connectOrCreate?: MaestrosCreateOrConnectWithoutEscuelaInput | MaestrosCreateOrConnectWithoutEscuelaInput[]
    upsert?: MaestrosUpsertWithWhereUniqueWithoutEscuelaInput | MaestrosUpsertWithWhereUniqueWithoutEscuelaInput[]
    createMany?: MaestrosCreateManyEscuelaInputEnvelope
    set?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    disconnect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    delete?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    connect?: MaestrosWhereUniqueInput | MaestrosWhereUniqueInput[]
    update?: MaestrosUpdateWithWhereUniqueWithoutEscuelaInput | MaestrosUpdateWithWhereUniqueWithoutEscuelaInput[]
    updateMany?: MaestrosUpdateManyWithWhereWithoutEscuelaInput | MaestrosUpdateManyWithWhereWithoutEscuelaInput[]
    deleteMany?: MaestrosScalarWhereInput | MaestrosScalarWhereInput[]
  }

  export type EjerciciosCreateNestedManyWithoutEstadoInput = {
    create?: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput> | EjerciciosCreateWithoutEstadoInput[] | EjerciciosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutEstadoInput | EjerciciosCreateOrConnectWithoutEstadoInput[]
    createMany?: EjerciciosCreateManyEstadoInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type EjerciciosUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput> | EjerciciosCreateWithoutEstadoInput[] | EjerciciosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutEstadoInput | EjerciciosCreateOrConnectWithoutEstadoInput[]
    createMany?: EjerciciosCreateManyEstadoInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type EjerciciosUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput> | EjerciciosCreateWithoutEstadoInput[] | EjerciciosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutEstadoInput | EjerciciosCreateOrConnectWithoutEstadoInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutEstadoInput | EjerciciosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: EjerciciosCreateManyEstadoInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutEstadoInput | EjerciciosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutEstadoInput | EjerciciosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type EjerciciosUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput> | EjerciciosCreateWithoutEstadoInput[] | EjerciciosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutEstadoInput | EjerciciosCreateOrConnectWithoutEstadoInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutEstadoInput | EjerciciosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: EjerciciosCreateManyEstadoInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutEstadoInput | EjerciciosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutEstadoInput | EjerciciosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type GruposCreateNestedManyWithoutGradoInput = {
    create?: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput> | GruposCreateWithoutGradoInput[] | GruposUncheckedCreateWithoutGradoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutGradoInput | GruposCreateOrConnectWithoutGradoInput[]
    createMany?: GruposCreateManyGradoInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type GruposUncheckedCreateNestedManyWithoutGradoInput = {
    create?: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput> | GruposCreateWithoutGradoInput[] | GruposUncheckedCreateWithoutGradoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutGradoInput | GruposCreateOrConnectWithoutGradoInput[]
    createMany?: GruposCreateManyGradoInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type GruposUpdateManyWithoutGradoNestedInput = {
    create?: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput> | GruposCreateWithoutGradoInput[] | GruposUncheckedCreateWithoutGradoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutGradoInput | GruposCreateOrConnectWithoutGradoInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutGradoInput | GruposUpsertWithWhereUniqueWithoutGradoInput[]
    createMany?: GruposCreateManyGradoInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutGradoInput | GruposUpdateWithWhereUniqueWithoutGradoInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutGradoInput | GruposUpdateManyWithWhereWithoutGradoInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type GruposUncheckedUpdateManyWithoutGradoNestedInput = {
    create?: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput> | GruposCreateWithoutGradoInput[] | GruposUncheckedCreateWithoutGradoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutGradoInput | GruposCreateOrConnectWithoutGradoInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutGradoInput | GruposUpsertWithWhereUniqueWithoutGradoInput[]
    createMany?: GruposCreateManyGradoInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutGradoInput | GruposUpdateWithWhereUniqueWithoutGradoInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutGradoInput | GruposUpdateManyWithWhereWithoutGradoInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type AlumnosCreateNestedManyWithoutGruposInput = {
    create?: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput> | AlumnosCreateWithoutGruposInput[] | AlumnosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutGruposInput | AlumnosCreateOrConnectWithoutGruposInput[]
    createMany?: AlumnosCreateManyGruposInputEnvelope
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
  }

  export type EjerciciosCreateNestedManyWithoutGruposInput = {
    create?: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput> | EjerciciosCreateWithoutGruposInput[] | EjerciciosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutGruposInput | EjerciciosCreateOrConnectWithoutGruposInput[]
    createMany?: EjerciciosCreateManyGruposInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type EscuelaCreateNestedOneWithoutGruposInput = {
    create?: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGruposInput
    connect?: EscuelaWhereUniqueInput
  }

  export type GradoCreateNestedOneWithoutGruposInput = {
    create?: XOR<GradoCreateWithoutGruposInput, GradoUncheckedCreateWithoutGruposInput>
    connectOrCreate?: GradoCreateOrConnectWithoutGruposInput
    connect?: GradoWhereUniqueInput
  }

  export type MaestrosCreateNestedOneWithoutGruposInput = {
    create?: XOR<MaestrosCreateWithoutGruposInput, MaestrosUncheckedCreateWithoutGruposInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutGruposInput
    connect?: MaestrosWhereUniqueInput
  }

  export type TurnoCreateNestedOneWithoutGruposInput = {
    create?: XOR<TurnoCreateWithoutGruposInput, TurnoUncheckedCreateWithoutGruposInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutGruposInput
    connect?: TurnoWhereUniqueInput
  }

  export type AlumnosUncheckedCreateNestedManyWithoutGruposInput = {
    create?: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput> | AlumnosCreateWithoutGruposInput[] | AlumnosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutGruposInput | AlumnosCreateOrConnectWithoutGruposInput[]
    createMany?: AlumnosCreateManyGruposInputEnvelope
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
  }

  export type EjerciciosUncheckedCreateNestedManyWithoutGruposInput = {
    create?: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput> | EjerciciosCreateWithoutGruposInput[] | EjerciciosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutGruposInput | EjerciciosCreateOrConnectWithoutGruposInput[]
    createMany?: EjerciciosCreateManyGruposInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type AlumnosUpdateManyWithoutGruposNestedInput = {
    create?: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput> | AlumnosCreateWithoutGruposInput[] | AlumnosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutGruposInput | AlumnosCreateOrConnectWithoutGruposInput[]
    upsert?: AlumnosUpsertWithWhereUniqueWithoutGruposInput | AlumnosUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: AlumnosCreateManyGruposInputEnvelope
    set?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    disconnect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    delete?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    update?: AlumnosUpdateWithWhereUniqueWithoutGruposInput | AlumnosUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: AlumnosUpdateManyWithWhereWithoutGruposInput | AlumnosUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
  }

  export type EjerciciosUpdateManyWithoutGruposNestedInput = {
    create?: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput> | EjerciciosCreateWithoutGruposInput[] | EjerciciosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutGruposInput | EjerciciosCreateOrConnectWithoutGruposInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutGruposInput | EjerciciosUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: EjerciciosCreateManyGruposInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutGruposInput | EjerciciosUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutGruposInput | EjerciciosUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type EscuelaUpdateOneWithoutGruposNestedInput = {
    create?: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutGruposInput
    upsert?: EscuelaUpsertWithoutGruposInput
    disconnect?: EscuelaWhereInput | boolean
    delete?: EscuelaWhereInput | boolean
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutGruposInput, EscuelaUpdateWithoutGruposInput>, EscuelaUncheckedUpdateWithoutGruposInput>
  }

  export type GradoUpdateOneWithoutGruposNestedInput = {
    create?: XOR<GradoCreateWithoutGruposInput, GradoUncheckedCreateWithoutGruposInput>
    connectOrCreate?: GradoCreateOrConnectWithoutGruposInput
    upsert?: GradoUpsertWithoutGruposInput
    disconnect?: GradoWhereInput | boolean
    delete?: GradoWhereInput | boolean
    connect?: GradoWhereUniqueInput
    update?: XOR<XOR<GradoUpdateToOneWithWhereWithoutGruposInput, GradoUpdateWithoutGruposInput>, GradoUncheckedUpdateWithoutGruposInput>
  }

  export type MaestrosUpdateOneWithoutGruposNestedInput = {
    create?: XOR<MaestrosCreateWithoutGruposInput, MaestrosUncheckedCreateWithoutGruposInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutGruposInput
    upsert?: MaestrosUpsertWithoutGruposInput
    disconnect?: MaestrosWhereInput | boolean
    delete?: MaestrosWhereInput | boolean
    connect?: MaestrosWhereUniqueInput
    update?: XOR<XOR<MaestrosUpdateToOneWithWhereWithoutGruposInput, MaestrosUpdateWithoutGruposInput>, MaestrosUncheckedUpdateWithoutGruposInput>
  }

  export type TurnoUpdateOneWithoutGruposNestedInput = {
    create?: XOR<TurnoCreateWithoutGruposInput, TurnoUncheckedCreateWithoutGruposInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutGruposInput
    upsert?: TurnoUpsertWithoutGruposInput
    disconnect?: TurnoWhereInput | boolean
    delete?: TurnoWhereInput | boolean
    connect?: TurnoWhereUniqueInput
    update?: XOR<XOR<TurnoUpdateToOneWithWhereWithoutGruposInput, TurnoUpdateWithoutGruposInput>, TurnoUncheckedUpdateWithoutGruposInput>
  }

  export type AlumnosUncheckedUpdateManyWithoutGruposNestedInput = {
    create?: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput> | AlumnosCreateWithoutGruposInput[] | AlumnosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: AlumnosCreateOrConnectWithoutGruposInput | AlumnosCreateOrConnectWithoutGruposInput[]
    upsert?: AlumnosUpsertWithWhereUniqueWithoutGruposInput | AlumnosUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: AlumnosCreateManyGruposInputEnvelope
    set?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    disconnect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    delete?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    connect?: AlumnosWhereUniqueInput | AlumnosWhereUniqueInput[]
    update?: AlumnosUpdateWithWhereUniqueWithoutGruposInput | AlumnosUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: AlumnosUpdateManyWithWhereWithoutGruposInput | AlumnosUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
  }

  export type EjerciciosUncheckedUpdateManyWithoutGruposNestedInput = {
    create?: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput> | EjerciciosCreateWithoutGruposInput[] | EjerciciosUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutGruposInput | EjerciciosCreateOrConnectWithoutGruposInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutGruposInput | EjerciciosUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: EjerciciosCreateManyGruposInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutGruposInput | EjerciciosUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutGruposInput | EjerciciosUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type EjerciciosCreateNestedOneWithoutIncisosInput = {
    create?: XOR<EjerciciosCreateWithoutIncisosInput, EjerciciosUncheckedCreateWithoutIncisosInput>
    connectOrCreate?: EjerciciosCreateOrConnectWithoutIncisosInput
    connect?: EjerciciosWhereUniqueInput
  }

  export type RespuestasCreateNestedManyWithoutIncisosInput = {
    create?: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput> | RespuestasCreateWithoutIncisosInput[] | RespuestasUncheckedCreateWithoutIncisosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutIncisosInput | RespuestasCreateOrConnectWithoutIncisosInput[]
    createMany?: RespuestasCreateManyIncisosInputEnvelope
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
  }

  export type RespuestasUncheckedCreateNestedManyWithoutIncisosInput = {
    create?: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput> | RespuestasCreateWithoutIncisosInput[] | RespuestasUncheckedCreateWithoutIncisosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutIncisosInput | RespuestasCreateOrConnectWithoutIncisosInput[]
    createMany?: RespuestasCreateManyIncisosInputEnvelope
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
  }

  export type EjerciciosUpdateOneWithoutIncisosNestedInput = {
    create?: XOR<EjerciciosCreateWithoutIncisosInput, EjerciciosUncheckedCreateWithoutIncisosInput>
    connectOrCreate?: EjerciciosCreateOrConnectWithoutIncisosInput
    upsert?: EjerciciosUpsertWithoutIncisosInput
    disconnect?: EjerciciosWhereInput | boolean
    delete?: EjerciciosWhereInput | boolean
    connect?: EjerciciosWhereUniqueInput
    update?: XOR<XOR<EjerciciosUpdateToOneWithWhereWithoutIncisosInput, EjerciciosUpdateWithoutIncisosInput>, EjerciciosUncheckedUpdateWithoutIncisosInput>
  }

  export type RespuestasUpdateManyWithoutIncisosNestedInput = {
    create?: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput> | RespuestasCreateWithoutIncisosInput[] | RespuestasUncheckedCreateWithoutIncisosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutIncisosInput | RespuestasCreateOrConnectWithoutIncisosInput[]
    upsert?: RespuestasUpsertWithWhereUniqueWithoutIncisosInput | RespuestasUpsertWithWhereUniqueWithoutIncisosInput[]
    createMany?: RespuestasCreateManyIncisosInputEnvelope
    set?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    disconnect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    delete?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    update?: RespuestasUpdateWithWhereUniqueWithoutIncisosInput | RespuestasUpdateWithWhereUniqueWithoutIncisosInput[]
    updateMany?: RespuestasUpdateManyWithWhereWithoutIncisosInput | RespuestasUpdateManyWithWhereWithoutIncisosInput[]
    deleteMany?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
  }

  export type RespuestasUncheckedUpdateManyWithoutIncisosNestedInput = {
    create?: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput> | RespuestasCreateWithoutIncisosInput[] | RespuestasUncheckedCreateWithoutIncisosInput[]
    connectOrCreate?: RespuestasCreateOrConnectWithoutIncisosInput | RespuestasCreateOrConnectWithoutIncisosInput[]
    upsert?: RespuestasUpsertWithWhereUniqueWithoutIncisosInput | RespuestasUpsertWithWhereUniqueWithoutIncisosInput[]
    createMany?: RespuestasCreateManyIncisosInputEnvelope
    set?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    disconnect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    delete?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    connect?: RespuestasWhereUniqueInput | RespuestasWhereUniqueInput[]
    update?: RespuestasUpdateWithWhereUniqueWithoutIncisosInput | RespuestasUpdateWithWhereUniqueWithoutIncisosInput[]
    updateMany?: RespuestasUpdateManyWithWhereWithoutIncisosInput | RespuestasUpdateManyWithWhereWithoutIncisosInput[]
    deleteMany?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
  }

  export type EjerciciosCreateNestedManyWithoutMaestrosInput = {
    create?: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput> | EjerciciosCreateWithoutMaestrosInput[] | EjerciciosUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutMaestrosInput | EjerciciosCreateOrConnectWithoutMaestrosInput[]
    createMany?: EjerciciosCreateManyMaestrosInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type GruposCreateNestedManyWithoutMaestrosInput = {
    create?: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput> | GruposCreateWithoutMaestrosInput[] | GruposUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutMaestrosInput | GruposCreateOrConnectWithoutMaestrosInput[]
    createMany?: GruposCreateManyMaestrosInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type EscuelaCreateNestedOneWithoutMaestrosInput = {
    create?: XOR<EscuelaCreateWithoutMaestrosInput, EscuelaUncheckedCreateWithoutMaestrosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutMaestrosInput
    connect?: EscuelaWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutMaestrosInput = {
    create?: XOR<UsuariosCreateWithoutMaestrosInput, UsuariosUncheckedCreateWithoutMaestrosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutMaestrosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type EjerciciosUncheckedCreateNestedManyWithoutMaestrosInput = {
    create?: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput> | EjerciciosCreateWithoutMaestrosInput[] | EjerciciosUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutMaestrosInput | EjerciciosCreateOrConnectWithoutMaestrosInput[]
    createMany?: EjerciciosCreateManyMaestrosInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type GruposUncheckedCreateNestedManyWithoutMaestrosInput = {
    create?: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput> | GruposCreateWithoutMaestrosInput[] | GruposUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutMaestrosInput | GruposCreateOrConnectWithoutMaestrosInput[]
    createMany?: GruposCreateManyMaestrosInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type EjerciciosUpdateManyWithoutMaestrosNestedInput = {
    create?: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput> | EjerciciosCreateWithoutMaestrosInput[] | EjerciciosUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutMaestrosInput | EjerciciosCreateOrConnectWithoutMaestrosInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutMaestrosInput | EjerciciosUpsertWithWhereUniqueWithoutMaestrosInput[]
    createMany?: EjerciciosCreateManyMaestrosInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutMaestrosInput | EjerciciosUpdateWithWhereUniqueWithoutMaestrosInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutMaestrosInput | EjerciciosUpdateManyWithWhereWithoutMaestrosInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type GruposUpdateManyWithoutMaestrosNestedInput = {
    create?: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput> | GruposCreateWithoutMaestrosInput[] | GruposUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutMaestrosInput | GruposCreateOrConnectWithoutMaestrosInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutMaestrosInput | GruposUpsertWithWhereUniqueWithoutMaestrosInput[]
    createMany?: GruposCreateManyMaestrosInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutMaestrosInput | GruposUpdateWithWhereUniqueWithoutMaestrosInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutMaestrosInput | GruposUpdateManyWithWhereWithoutMaestrosInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type EscuelaUpdateOneWithoutMaestrosNestedInput = {
    create?: XOR<EscuelaCreateWithoutMaestrosInput, EscuelaUncheckedCreateWithoutMaestrosInput>
    connectOrCreate?: EscuelaCreateOrConnectWithoutMaestrosInput
    upsert?: EscuelaUpsertWithoutMaestrosInput
    disconnect?: EscuelaWhereInput | boolean
    delete?: EscuelaWhereInput | boolean
    connect?: EscuelaWhereUniqueInput
    update?: XOR<XOR<EscuelaUpdateToOneWithWhereWithoutMaestrosInput, EscuelaUpdateWithoutMaestrosInput>, EscuelaUncheckedUpdateWithoutMaestrosInput>
  }

  export type UsuariosUpdateOneRequiredWithoutMaestrosNestedInput = {
    create?: XOR<UsuariosCreateWithoutMaestrosInput, UsuariosUncheckedCreateWithoutMaestrosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutMaestrosInput
    upsert?: UsuariosUpsertWithoutMaestrosInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutMaestrosInput, UsuariosUpdateWithoutMaestrosInput>, UsuariosUncheckedUpdateWithoutMaestrosInput>
  }

  export type EjerciciosUncheckedUpdateManyWithoutMaestrosNestedInput = {
    create?: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput> | EjerciciosCreateWithoutMaestrosInput[] | EjerciciosUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutMaestrosInput | EjerciciosCreateOrConnectWithoutMaestrosInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutMaestrosInput | EjerciciosUpsertWithWhereUniqueWithoutMaestrosInput[]
    createMany?: EjerciciosCreateManyMaestrosInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutMaestrosInput | EjerciciosUpdateWithWhereUniqueWithoutMaestrosInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutMaestrosInput | EjerciciosUpdateManyWithWhereWithoutMaestrosInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type GruposUncheckedUpdateManyWithoutMaestrosNestedInput = {
    create?: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput> | GruposCreateWithoutMaestrosInput[] | GruposUncheckedCreateWithoutMaestrosInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutMaestrosInput | GruposCreateOrConnectWithoutMaestrosInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutMaestrosInput | GruposUpsertWithWhereUniqueWithoutMaestrosInput[]
    createMany?: GruposCreateManyMaestrosInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutMaestrosInput | GruposUpdateWithWhereUniqueWithoutMaestrosInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutMaestrosInput | GruposUpdateManyWithWhereWithoutMaestrosInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type AlumnosCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<AlumnosCreateWithoutRespuestasInput, AlumnosUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutRespuestasInput
    connect?: AlumnosWhereUniqueInput
  }

  export type IncisosCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<IncisosCreateWithoutRespuestasInput, IncisosUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: IncisosCreateOrConnectWithoutRespuestasInput
    connect?: IncisosWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlumnosUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<AlumnosCreateWithoutRespuestasInput, AlumnosUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutRespuestasInput
    upsert?: AlumnosUpsertWithoutRespuestasInput
    connect?: AlumnosWhereUniqueInput
    update?: XOR<XOR<AlumnosUpdateToOneWithWhereWithoutRespuestasInput, AlumnosUpdateWithoutRespuestasInput>, AlumnosUncheckedUpdateWithoutRespuestasInput>
  }

  export type IncisosUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<IncisosCreateWithoutRespuestasInput, IncisosUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: IncisosCreateOrConnectWithoutRespuestasInput
    upsert?: IncisosUpsertWithoutRespuestasInput
    connect?: IncisosWhereUniqueInput
    update?: XOR<XOR<IncisosUpdateToOneWithWhereWithoutRespuestasInput, IncisosUpdateWithoutRespuestasInput>, IncisosUncheckedUpdateWithoutRespuestasInput>
  }

  export type UsuariosCreateNestedOneWithoutSuperAdminInput = {
    create?: XOR<UsuariosCreateWithoutSuperAdminInput, UsuariosUncheckedCreateWithoutSuperAdminInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutSuperAdminInput
    connect?: UsuariosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutSuperAdminNestedInput = {
    create?: XOR<UsuariosCreateWithoutSuperAdminInput, UsuariosUncheckedCreateWithoutSuperAdminInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutSuperAdminInput
    upsert?: UsuariosUpsertWithoutSuperAdminInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutSuperAdminInput, UsuariosUpdateWithoutSuperAdminInput>, UsuariosUncheckedUpdateWithoutSuperAdminInput>
  }

  export type EjerciciosCreateNestedManyWithoutTipoEjercicioInput = {
    create?: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput> | EjerciciosCreateWithoutTipoEjercicioInput[] | EjerciciosUncheckedCreateWithoutTipoEjercicioInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutTipoEjercicioInput | EjerciciosCreateOrConnectWithoutTipoEjercicioInput[]
    createMany?: EjerciciosCreateManyTipoEjercicioInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type EjerciciosUncheckedCreateNestedManyWithoutTipoEjercicioInput = {
    create?: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput> | EjerciciosCreateWithoutTipoEjercicioInput[] | EjerciciosUncheckedCreateWithoutTipoEjercicioInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutTipoEjercicioInput | EjerciciosCreateOrConnectWithoutTipoEjercicioInput[]
    createMany?: EjerciciosCreateManyTipoEjercicioInputEnvelope
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
  }

  export type EjerciciosUpdateManyWithoutTipoEjercicioNestedInput = {
    create?: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput> | EjerciciosCreateWithoutTipoEjercicioInput[] | EjerciciosUncheckedCreateWithoutTipoEjercicioInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutTipoEjercicioInput | EjerciciosCreateOrConnectWithoutTipoEjercicioInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutTipoEjercicioInput | EjerciciosUpsertWithWhereUniqueWithoutTipoEjercicioInput[]
    createMany?: EjerciciosCreateManyTipoEjercicioInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutTipoEjercicioInput | EjerciciosUpdateWithWhereUniqueWithoutTipoEjercicioInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutTipoEjercicioInput | EjerciciosUpdateManyWithWhereWithoutTipoEjercicioInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type EjerciciosUncheckedUpdateManyWithoutTipoEjercicioNestedInput = {
    create?: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput> | EjerciciosCreateWithoutTipoEjercicioInput[] | EjerciciosUncheckedCreateWithoutTipoEjercicioInput[]
    connectOrCreate?: EjerciciosCreateOrConnectWithoutTipoEjercicioInput | EjerciciosCreateOrConnectWithoutTipoEjercicioInput[]
    upsert?: EjerciciosUpsertWithWhereUniqueWithoutTipoEjercicioInput | EjerciciosUpsertWithWhereUniqueWithoutTipoEjercicioInput[]
    createMany?: EjerciciosCreateManyTipoEjercicioInputEnvelope
    set?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    disconnect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    delete?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    connect?: EjerciciosWhereUniqueInput | EjerciciosWhereUniqueInput[]
    update?: EjerciciosUpdateWithWhereUniqueWithoutTipoEjercicioInput | EjerciciosUpdateWithWhereUniqueWithoutTipoEjercicioInput[]
    updateMany?: EjerciciosUpdateManyWithWhereWithoutTipoEjercicioInput | EjerciciosUpdateManyWithWhereWithoutTipoEjercicioInput[]
    deleteMany?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
  }

  export type AdministradorCreateNestedManyWithoutTurnoInput = {
    create?: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput> | AdministradorCreateWithoutTurnoInput[] | AdministradorUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutTurnoInput | AdministradorCreateOrConnectWithoutTurnoInput[]
    createMany?: AdministradorCreateManyTurnoInputEnvelope
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
  }

  export type GruposCreateNestedManyWithoutTurnoInput = {
    create?: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput> | GruposCreateWithoutTurnoInput[] | GruposUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutTurnoInput | GruposCreateOrConnectWithoutTurnoInput[]
    createMany?: GruposCreateManyTurnoInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type AdministradorUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput> | AdministradorCreateWithoutTurnoInput[] | AdministradorUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutTurnoInput | AdministradorCreateOrConnectWithoutTurnoInput[]
    createMany?: AdministradorCreateManyTurnoInputEnvelope
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
  }

  export type GruposUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput> | GruposCreateWithoutTurnoInput[] | GruposUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutTurnoInput | GruposCreateOrConnectWithoutTurnoInput[]
    createMany?: GruposCreateManyTurnoInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type AdministradorUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput> | AdministradorCreateWithoutTurnoInput[] | AdministradorUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutTurnoInput | AdministradorCreateOrConnectWithoutTurnoInput[]
    upsert?: AdministradorUpsertWithWhereUniqueWithoutTurnoInput | AdministradorUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: AdministradorCreateManyTurnoInputEnvelope
    set?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    disconnect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    delete?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    update?: AdministradorUpdateWithWhereUniqueWithoutTurnoInput | AdministradorUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: AdministradorUpdateManyWithWhereWithoutTurnoInput | AdministradorUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
  }

  export type GruposUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput> | GruposCreateWithoutTurnoInput[] | GruposUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutTurnoInput | GruposCreateOrConnectWithoutTurnoInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutTurnoInput | GruposUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: GruposCreateManyTurnoInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutTurnoInput | GruposUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutTurnoInput | GruposUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type AdministradorUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput> | AdministradorCreateWithoutTurnoInput[] | AdministradorUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AdministradorCreateOrConnectWithoutTurnoInput | AdministradorCreateOrConnectWithoutTurnoInput[]
    upsert?: AdministradorUpsertWithWhereUniqueWithoutTurnoInput | AdministradorUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: AdministradorCreateManyTurnoInputEnvelope
    set?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    disconnect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    delete?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    connect?: AdministradorWhereUniqueInput | AdministradorWhereUniqueInput[]
    update?: AdministradorUpdateWithWhereUniqueWithoutTurnoInput | AdministradorUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: AdministradorUpdateManyWithWhereWithoutTurnoInput | AdministradorUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
  }

  export type GruposUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput> | GruposCreateWithoutTurnoInput[] | GruposUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutTurnoInput | GruposCreateOrConnectWithoutTurnoInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutTurnoInput | GruposUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: GruposCreateManyTurnoInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutTurnoInput | GruposUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutTurnoInput | GruposUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type AdministradorCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuariosInput
    connect?: AdministradorWhereUniqueInput
  }

  export type AlumnosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutUsuariosInput
    connect?: AlumnosWhereUniqueInput
  }

  export type MaestrosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutUsuariosInput
    connect?: MaestrosWhereUniqueInput
  }

  export type SuperAdminCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutUsuariosInput
    connect?: SuperAdminWhereUniqueInput
  }

  export type AdministradorUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuariosInput
    connect?: AdministradorWhereUniqueInput
  }

  export type AlumnosUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutUsuariosInput
    connect?: AlumnosWhereUniqueInput
  }

  export type MaestrosUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutUsuariosInput
    connect?: MaestrosWhereUniqueInput
  }

  export type SuperAdminUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutUsuariosInput
    connect?: SuperAdminWhereUniqueInput
  }

  export type AdministradorUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuariosInput
    upsert?: AdministradorUpsertWithoutUsuariosInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuariosInput, AdministradorUpdateWithoutUsuariosInput>, AdministradorUncheckedUpdateWithoutUsuariosInput>
  }

  export type AlumnosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutUsuariosInput
    upsert?: AlumnosUpsertWithoutUsuariosInput
    disconnect?: AlumnosWhereInput | boolean
    delete?: AlumnosWhereInput | boolean
    connect?: AlumnosWhereUniqueInput
    update?: XOR<XOR<AlumnosUpdateToOneWithWhereWithoutUsuariosInput, AlumnosUpdateWithoutUsuariosInput>, AlumnosUncheckedUpdateWithoutUsuariosInput>
  }

  export type MaestrosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutUsuariosInput
    upsert?: MaestrosUpsertWithoutUsuariosInput
    disconnect?: MaestrosWhereInput | boolean
    delete?: MaestrosWhereInput | boolean
    connect?: MaestrosWhereUniqueInput
    update?: XOR<XOR<MaestrosUpdateToOneWithWhereWithoutUsuariosInput, MaestrosUpdateWithoutUsuariosInput>, MaestrosUncheckedUpdateWithoutUsuariosInput>
  }

  export type SuperAdminUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutUsuariosInput
    upsert?: SuperAdminUpsertWithoutUsuariosInput
    disconnect?: SuperAdminWhereInput | boolean
    delete?: SuperAdminWhereInput | boolean
    connect?: SuperAdminWhereUniqueInput
    update?: XOR<XOR<SuperAdminUpdateToOneWithWhereWithoutUsuariosInput, SuperAdminUpdateWithoutUsuariosInput>, SuperAdminUncheckedUpdateWithoutUsuariosInput>
  }

  export type AdministradorUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuariosInput
    upsert?: AdministradorUpsertWithoutUsuariosInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuariosInput, AdministradorUpdateWithoutUsuariosInput>, AdministradorUncheckedUpdateWithoutUsuariosInput>
  }

  export type AlumnosUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AlumnosCreateOrConnectWithoutUsuariosInput
    upsert?: AlumnosUpsertWithoutUsuariosInput
    disconnect?: AlumnosWhereInput | boolean
    delete?: AlumnosWhereInput | boolean
    connect?: AlumnosWhereUniqueInput
    update?: XOR<XOR<AlumnosUpdateToOneWithWhereWithoutUsuariosInput, AlumnosUpdateWithoutUsuariosInput>, AlumnosUncheckedUpdateWithoutUsuariosInput>
  }

  export type MaestrosUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: MaestrosCreateOrConnectWithoutUsuariosInput
    upsert?: MaestrosUpsertWithoutUsuariosInput
    disconnect?: MaestrosWhereInput | boolean
    delete?: MaestrosWhereInput | boolean
    connect?: MaestrosWhereUniqueInput
    update?: XOR<XOR<MaestrosUpdateToOneWithWhereWithoutUsuariosInput, MaestrosUpdateWithoutUsuariosInput>, MaestrosUncheckedUpdateWithoutUsuariosInput>
  }

  export type SuperAdminUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: SuperAdminCreateOrConnectWithoutUsuariosInput
    upsert?: SuperAdminUpsertWithoutUsuariosInput
    disconnect?: SuperAdminWhereInput | boolean
    delete?: SuperAdminWhereInput | boolean
    connect?: SuperAdminWhereUniqueInput
    update?: XOR<XOR<SuperAdminUpdateToOneWithWhereWithoutUsuariosInput, SuperAdminUpdateWithoutUsuariosInput>, SuperAdminUncheckedUpdateWithoutUsuariosInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EscuelaCreateWithoutAdministradorInput = {
    Nombre: string
    Grupos?: GruposCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutAdministradorInput = {
    Escuela_id?: number
    Nombre: string
    Grupos?: GruposUncheckedCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutAdministradorInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutAdministradorInput, EscuelaUncheckedCreateWithoutAdministradorInput>
  }

  export type TurnoCreateWithoutAdministradorInput = {
    Horario: string
    Grupos?: GruposCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutAdministradorInput = {
    Turno_id?: number
    Horario: string
    Grupos?: GruposUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutAdministradorInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutAdministradorInput, TurnoUncheckedCreateWithoutAdministradorInput>
  }

  export type UsuariosCreateWithoutAdministradorInput = {
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Alumnos?: AlumnosCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutAdministradorInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Alumnos?: AlumnosUncheckedCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosUncheckedCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutAdministradorInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutAdministradorInput, UsuariosUncheckedCreateWithoutAdministradorInput>
  }

  export type EscuelaUpsertWithoutAdministradorInput = {
    update: XOR<EscuelaUpdateWithoutAdministradorInput, EscuelaUncheckedUpdateWithoutAdministradorInput>
    create: XOR<EscuelaCreateWithoutAdministradorInput, EscuelaUncheckedCreateWithoutAdministradorInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutAdministradorInput, EscuelaUncheckedUpdateWithoutAdministradorInput>
  }

  export type EscuelaUpdateWithoutAdministradorInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutAdministradorInput = {
    Escuela_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUncheckedUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type TurnoUpsertWithoutAdministradorInput = {
    update: XOR<TurnoUpdateWithoutAdministradorInput, TurnoUncheckedUpdateWithoutAdministradorInput>
    create: XOR<TurnoCreateWithoutAdministradorInput, TurnoUncheckedCreateWithoutAdministradorInput>
    where?: TurnoWhereInput
  }

  export type TurnoUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: TurnoWhereInput
    data: XOR<TurnoUpdateWithoutAdministradorInput, TurnoUncheckedUpdateWithoutAdministradorInput>
  }

  export type TurnoUpdateWithoutAdministradorInput = {
    Horario?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutAdministradorInput = {
    Turno_id?: IntFieldUpdateOperationsInput | number
    Horario?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type UsuariosUpsertWithoutAdministradorInput = {
    update: XOR<UsuariosUpdateWithoutAdministradorInput, UsuariosUncheckedUpdateWithoutAdministradorInput>
    create: XOR<UsuariosCreateWithoutAdministradorInput, UsuariosUncheckedCreateWithoutAdministradorInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutAdministradorInput, UsuariosUncheckedUpdateWithoutAdministradorInput>
  }

  export type UsuariosUpdateWithoutAdministradorInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutAdministradorInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUncheckedUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUncheckedUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type GruposCreateWithoutAlumnosInput = {
    NombreGrupo: string
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutAlumnosInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutAlumnosInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutAlumnosInput, GruposUncheckedCreateWithoutAlumnosInput>
  }

  export type UsuariosCreateWithoutAlumnosInput = {
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutAlumnosInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosUncheckedCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutAlumnosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutAlumnosInput, UsuariosUncheckedCreateWithoutAlumnosInput>
  }

  export type RespuestasCreateWithoutAlumnosInput = {
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Incisos: IncisosCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestasUncheckedCreateWithoutAlumnosInput = {
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Inciso_id: number
  }

  export type RespuestasCreateOrConnectWithoutAlumnosInput = {
    where: RespuestasWhereUniqueInput
    create: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput>
  }

  export type RespuestasCreateManyAlumnosInputEnvelope = {
    data: RespuestasCreateManyAlumnosInput | RespuestasCreateManyAlumnosInput[]
    skipDuplicates?: boolean
  }

  export type GruposUpsertWithoutAlumnosInput = {
    update: XOR<GruposUpdateWithoutAlumnosInput, GruposUncheckedUpdateWithoutAlumnosInput>
    create: XOR<GruposCreateWithoutAlumnosInput, GruposUncheckedCreateWithoutAlumnosInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutAlumnosInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutAlumnosInput, GruposUncheckedUpdateWithoutAlumnosInput>
  }

  export type GruposUpdateWithoutAlumnosInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutAlumnosInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type UsuariosUpsertWithoutAlumnosInput = {
    update: XOR<UsuariosUpdateWithoutAlumnosInput, UsuariosUncheckedUpdateWithoutAlumnosInput>
    create: XOR<UsuariosCreateWithoutAlumnosInput, UsuariosUncheckedCreateWithoutAlumnosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutAlumnosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutAlumnosInput, UsuariosUncheckedUpdateWithoutAlumnosInput>
  }

  export type UsuariosUpdateWithoutAlumnosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutAlumnosInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUncheckedUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type RespuestasUpsertWithWhereUniqueWithoutAlumnosInput = {
    where: RespuestasWhereUniqueInput
    update: XOR<RespuestasUpdateWithoutAlumnosInput, RespuestasUncheckedUpdateWithoutAlumnosInput>
    create: XOR<RespuestasCreateWithoutAlumnosInput, RespuestasUncheckedCreateWithoutAlumnosInput>
  }

  export type RespuestasUpdateWithWhereUniqueWithoutAlumnosInput = {
    where: RespuestasWhereUniqueInput
    data: XOR<RespuestasUpdateWithoutAlumnosInput, RespuestasUncheckedUpdateWithoutAlumnosInput>
  }

  export type RespuestasUpdateManyWithWhereWithoutAlumnosInput = {
    where: RespuestasScalarWhereInput
    data: XOR<RespuestasUpdateManyMutationInput, RespuestasUncheckedUpdateManyWithoutAlumnosInput>
  }

  export type RespuestasScalarWhereInput = {
    AND?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
    OR?: RespuestasScalarWhereInput[]
    NOT?: RespuestasScalarWhereInput | RespuestasScalarWhereInput[]
    AlumnoID?: IntFilter<"Respuestas"> | number
    Imagen?: StringNullableFilter<"Respuestas"> | string | null
    Puntaje?: IntNullableFilter<"Respuestas"> | number | null
    Respuesta?: StringNullableFilter<"Respuestas"> | string | null
    Inciso_id?: IntFilter<"Respuestas"> | number
  }

  export type EstadoCreateWithoutEjerciciosInput = {
    Nombre: string
  }

  export type EstadoUncheckedCreateWithoutEjerciciosInput = {
    Estado_id?: number
    Nombre: string
  }

  export type EstadoCreateOrConnectWithoutEjerciciosInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutEjerciciosInput, EstadoUncheckedCreateWithoutEjerciciosInput>
  }

  export type GruposCreateWithoutEjerciciosInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutEjerciciosInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutEjerciciosInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutEjerciciosInput, GruposUncheckedCreateWithoutEjerciciosInput>
  }

  export type MaestrosCreateWithoutEjerciciosInput = {
    Grupos?: GruposCreateNestedManyWithoutMaestrosInput
    Escuela?: EscuelaCreateNestedOneWithoutMaestrosInput
    Usuarios: UsuariosCreateNestedOneWithoutMaestrosInput
  }

  export type MaestrosUncheckedCreateWithoutEjerciciosInput = {
    Usuario_id: number
    Escuela_id?: number | null
    Grupos?: GruposUncheckedCreateNestedManyWithoutMaestrosInput
  }

  export type MaestrosCreateOrConnectWithoutEjerciciosInput = {
    where: MaestrosWhereUniqueInput
    create: XOR<MaestrosCreateWithoutEjerciciosInput, MaestrosUncheckedCreateWithoutEjerciciosInput>
  }

  export type TipoEjercicioCreateWithoutEjerciciosInput = {
    Nombre: string
  }

  export type TipoEjercicioUncheckedCreateWithoutEjerciciosInput = {
    Tipo_id?: number
    Nombre: string
  }

  export type TipoEjercicioCreateOrConnectWithoutEjerciciosInput = {
    where: TipoEjercicioWhereUniqueInput
    create: XOR<TipoEjercicioCreateWithoutEjerciciosInput, TipoEjercicioUncheckedCreateWithoutEjerciciosInput>
  }

  export type IncisosCreateWithoutEjerciciosInput = {
    LoSolicitado: string
    Respuestas?: RespuestasCreateNestedManyWithoutIncisosInput
  }

  export type IncisosUncheckedCreateWithoutEjerciciosInput = {
    Incisos_id?: number
    LoSolicitado: string
    Respuestas?: RespuestasUncheckedCreateNestedManyWithoutIncisosInput
  }

  export type IncisosCreateOrConnectWithoutEjerciciosInput = {
    where: IncisosWhereUniqueInput
    create: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput>
  }

  export type IncisosCreateManyEjerciciosInputEnvelope = {
    data: IncisosCreateManyEjerciciosInput | IncisosCreateManyEjerciciosInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithoutEjerciciosInput = {
    update: XOR<EstadoUpdateWithoutEjerciciosInput, EstadoUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<EstadoCreateWithoutEjerciciosInput, EstadoUncheckedCreateWithoutEjerciciosInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutEjerciciosInput, EstadoUncheckedUpdateWithoutEjerciciosInput>
  }

  export type EstadoUpdateWithoutEjerciciosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateWithoutEjerciciosInput = {
    Estado_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GruposUpsertWithoutEjerciciosInput = {
    update: XOR<GruposUpdateWithoutEjerciciosInput, GruposUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<GruposCreateWithoutEjerciciosInput, GruposUncheckedCreateWithoutEjerciciosInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutEjerciciosInput, GruposUncheckedUpdateWithoutEjerciciosInput>
  }

  export type GruposUpdateWithoutEjerciciosInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutEjerciciosInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type MaestrosUpsertWithoutEjerciciosInput = {
    update: XOR<MaestrosUpdateWithoutEjerciciosInput, MaestrosUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<MaestrosCreateWithoutEjerciciosInput, MaestrosUncheckedCreateWithoutEjerciciosInput>
    where?: MaestrosWhereInput
  }

  export type MaestrosUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: MaestrosWhereInput
    data: XOR<MaestrosUpdateWithoutEjerciciosInput, MaestrosUncheckedUpdateWithoutEjerciciosInput>
  }

  export type MaestrosUpdateWithoutEjerciciosInput = {
    Grupos?: GruposUpdateManyWithoutMaestrosNestedInput
    Escuela?: EscuelaUpdateOneWithoutMaestrosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateWithoutEjerciciosInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grupos?: GruposUncheckedUpdateManyWithoutMaestrosNestedInput
  }

  export type TipoEjercicioUpsertWithoutEjerciciosInput = {
    update: XOR<TipoEjercicioUpdateWithoutEjerciciosInput, TipoEjercicioUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<TipoEjercicioCreateWithoutEjerciciosInput, TipoEjercicioUncheckedCreateWithoutEjerciciosInput>
    where?: TipoEjercicioWhereInput
  }

  export type TipoEjercicioUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: TipoEjercicioWhereInput
    data: XOR<TipoEjercicioUpdateWithoutEjerciciosInput, TipoEjercicioUncheckedUpdateWithoutEjerciciosInput>
  }

  export type TipoEjercicioUpdateWithoutEjerciciosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoEjercicioUncheckedUpdateWithoutEjerciciosInput = {
    Tipo_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IncisosUpsertWithWhereUniqueWithoutEjerciciosInput = {
    where: IncisosWhereUniqueInput
    update: XOR<IncisosUpdateWithoutEjerciciosInput, IncisosUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<IncisosCreateWithoutEjerciciosInput, IncisosUncheckedCreateWithoutEjerciciosInput>
  }

  export type IncisosUpdateWithWhereUniqueWithoutEjerciciosInput = {
    where: IncisosWhereUniqueInput
    data: XOR<IncisosUpdateWithoutEjerciciosInput, IncisosUncheckedUpdateWithoutEjerciciosInput>
  }

  export type IncisosUpdateManyWithWhereWithoutEjerciciosInput = {
    where: IncisosScalarWhereInput
    data: XOR<IncisosUpdateManyMutationInput, IncisosUncheckedUpdateManyWithoutEjerciciosInput>
  }

  export type IncisosScalarWhereInput = {
    AND?: IncisosScalarWhereInput | IncisosScalarWhereInput[]
    OR?: IncisosScalarWhereInput[]
    NOT?: IncisosScalarWhereInput | IncisosScalarWhereInput[]
    Incisos_id?: IntFilter<"Incisos"> | number
    LoSolicitado?: StringFilter<"Incisos"> | string
    EjercicioID?: IntNullableFilter<"Incisos"> | number | null
  }

  export type AdministradorCreateWithoutEscuelaInput = {
    Turno?: TurnoCreateNestedOneWithoutAdministradorInput
    Usuarios: UsuariosCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateWithoutEscuelaInput = {
    Usuario_id: number
    Turno_id?: number | null
  }

  export type AdministradorCreateOrConnectWithoutEscuelaInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput>
  }

  export type AdministradorCreateManyEscuelaInputEnvelope = {
    data: AdministradorCreateManyEscuelaInput | AdministradorCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type GruposCreateWithoutEscuelaInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutEscuelaInput = {
    Grupos_id?: number
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutEscuelaInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput>
  }

  export type GruposCreateManyEscuelaInputEnvelope = {
    data: GruposCreateManyEscuelaInput | GruposCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type MaestrosCreateWithoutEscuelaInput = {
    Ejercicios?: EjerciciosCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposCreateNestedManyWithoutMaestrosInput
    Usuarios: UsuariosCreateNestedOneWithoutMaestrosInput
  }

  export type MaestrosUncheckedCreateWithoutEscuelaInput = {
    Usuario_id: number
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutMaestrosInput
  }

  export type MaestrosCreateOrConnectWithoutEscuelaInput = {
    where: MaestrosWhereUniqueInput
    create: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput>
  }

  export type MaestrosCreateManyEscuelaInputEnvelope = {
    data: MaestrosCreateManyEscuelaInput | MaestrosCreateManyEscuelaInput[]
    skipDuplicates?: boolean
  }

  export type AdministradorUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: AdministradorWhereUniqueInput
    update: XOR<AdministradorUpdateWithoutEscuelaInput, AdministradorUncheckedUpdateWithoutEscuelaInput>
    create: XOR<AdministradorCreateWithoutEscuelaInput, AdministradorUncheckedCreateWithoutEscuelaInput>
  }

  export type AdministradorUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: AdministradorWhereUniqueInput
    data: XOR<AdministradorUpdateWithoutEscuelaInput, AdministradorUncheckedUpdateWithoutEscuelaInput>
  }

  export type AdministradorUpdateManyWithWhereWithoutEscuelaInput = {
    where: AdministradorScalarWhereInput
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type AdministradorScalarWhereInput = {
    AND?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
    OR?: AdministradorScalarWhereInput[]
    NOT?: AdministradorScalarWhereInput | AdministradorScalarWhereInput[]
    Usuario_id?: IntFilter<"Administrador"> | number
    Escuela_id?: IntNullableFilter<"Administrador"> | number | null
    Turno_id?: IntNullableFilter<"Administrador"> | number | null
  }

  export type GruposUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: GruposWhereUniqueInput
    update: XOR<GruposUpdateWithoutEscuelaInput, GruposUncheckedUpdateWithoutEscuelaInput>
    create: XOR<GruposCreateWithoutEscuelaInput, GruposUncheckedCreateWithoutEscuelaInput>
  }

  export type GruposUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: GruposWhereUniqueInput
    data: XOR<GruposUpdateWithoutEscuelaInput, GruposUncheckedUpdateWithoutEscuelaInput>
  }

  export type GruposUpdateManyWithWhereWithoutEscuelaInput = {
    where: GruposScalarWhereInput
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type GruposScalarWhereInput = {
    AND?: GruposScalarWhereInput | GruposScalarWhereInput[]
    OR?: GruposScalarWhereInput[]
    NOT?: GruposScalarWhereInput | GruposScalarWhereInput[]
    Grupos_id?: IntFilter<"Grupos"> | number
    Escuela_id?: IntNullableFilter<"Grupos"> | number | null
    NombreGrupo?: StringFilter<"Grupos"> | string
    Maestro_id?: IntNullableFilter<"Grupos"> | number | null
    Turno_id?: IntNullableFilter<"Grupos"> | number | null
    Grado_id?: IntNullableFilter<"Grupos"> | number | null
  }

  export type MaestrosUpsertWithWhereUniqueWithoutEscuelaInput = {
    where: MaestrosWhereUniqueInput
    update: XOR<MaestrosUpdateWithoutEscuelaInput, MaestrosUncheckedUpdateWithoutEscuelaInput>
    create: XOR<MaestrosCreateWithoutEscuelaInput, MaestrosUncheckedCreateWithoutEscuelaInput>
  }

  export type MaestrosUpdateWithWhereUniqueWithoutEscuelaInput = {
    where: MaestrosWhereUniqueInput
    data: XOR<MaestrosUpdateWithoutEscuelaInput, MaestrosUncheckedUpdateWithoutEscuelaInput>
  }

  export type MaestrosUpdateManyWithWhereWithoutEscuelaInput = {
    where: MaestrosScalarWhereInput
    data: XOR<MaestrosUpdateManyMutationInput, MaestrosUncheckedUpdateManyWithoutEscuelaInput>
  }

  export type MaestrosScalarWhereInput = {
    AND?: MaestrosScalarWhereInput | MaestrosScalarWhereInput[]
    OR?: MaestrosScalarWhereInput[]
    NOT?: MaestrosScalarWhereInput | MaestrosScalarWhereInput[]
    Usuario_id?: IntFilter<"Maestros"> | number
    Escuela_id?: IntNullableFilter<"Maestros"> | number | null
  }

  export type EjerciciosCreateWithoutEstadoInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Grupos?: GruposCreateNestedOneWithoutEjerciciosInput
    Maestros?: MaestrosCreateNestedOneWithoutEjerciciosInput
    TipoEjercicio: TipoEjercicioCreateNestedOneWithoutEjerciciosInput
    Incisos?: IncisosCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateWithoutEstadoInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Incisos?: IncisosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosCreateOrConnectWithoutEstadoInput = {
    where: EjerciciosWhereUniqueInput
    create: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput>
  }

  export type EjerciciosCreateManyEstadoInputEnvelope = {
    data: EjerciciosCreateManyEstadoInput | EjerciciosCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type EjerciciosUpsertWithWhereUniqueWithoutEstadoInput = {
    where: EjerciciosWhereUniqueInput
    update: XOR<EjerciciosUpdateWithoutEstadoInput, EjerciciosUncheckedUpdateWithoutEstadoInput>
    create: XOR<EjerciciosCreateWithoutEstadoInput, EjerciciosUncheckedCreateWithoutEstadoInput>
  }

  export type EjerciciosUpdateWithWhereUniqueWithoutEstadoInput = {
    where: EjerciciosWhereUniqueInput
    data: XOR<EjerciciosUpdateWithoutEstadoInput, EjerciciosUncheckedUpdateWithoutEstadoInput>
  }

  export type EjerciciosUpdateManyWithWhereWithoutEstadoInput = {
    where: EjerciciosScalarWhereInput
    data: XOR<EjerciciosUpdateManyMutationInput, EjerciciosUncheckedUpdateManyWithoutEstadoInput>
  }

  export type EjerciciosScalarWhereInput = {
    AND?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
    OR?: EjerciciosScalarWhereInput[]
    NOT?: EjerciciosScalarWhereInput | EjerciciosScalarWhereInput[]
    Ejercicios_id?: IntFilter<"Ejercicios"> | number
    NombreEjercicio?: StringFilter<"Ejercicios"> | string
    MaestroID?: IntNullableFilter<"Ejercicios"> | number | null
    GrupoID?: IntNullableFilter<"Ejercicios"> | number | null
    TipoEjercicio_id?: IntFilter<"Ejercicios"> | number
    FechaPublicacion?: DateTimeFilter<"Ejercicios"> | Date | string
    FechaLimite?: DateTimeNullableFilter<"Ejercicios"> | Date | string | null
    Estado_id?: IntFilter<"Ejercicios"> | number
  }

  export type GruposCreateWithoutGradoInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutGradoInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutGradoInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput>
  }

  export type GruposCreateManyGradoInputEnvelope = {
    data: GruposCreateManyGradoInput | GruposCreateManyGradoInput[]
    skipDuplicates?: boolean
  }

  export type GruposUpsertWithWhereUniqueWithoutGradoInput = {
    where: GruposWhereUniqueInput
    update: XOR<GruposUpdateWithoutGradoInput, GruposUncheckedUpdateWithoutGradoInput>
    create: XOR<GruposCreateWithoutGradoInput, GruposUncheckedCreateWithoutGradoInput>
  }

  export type GruposUpdateWithWhereUniqueWithoutGradoInput = {
    where: GruposWhereUniqueInput
    data: XOR<GruposUpdateWithoutGradoInput, GruposUncheckedUpdateWithoutGradoInput>
  }

  export type GruposUpdateManyWithWhereWithoutGradoInput = {
    where: GruposScalarWhereInput
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyWithoutGradoInput>
  }

  export type AlumnosCreateWithoutGruposInput = {
    Usuarios: UsuariosCreateNestedOneWithoutAlumnosInput
    Respuestas?: RespuestasCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateWithoutGruposInput = {
    Usuario_id: number
    Respuestas?: RespuestasUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosCreateOrConnectWithoutGruposInput = {
    where: AlumnosWhereUniqueInput
    create: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput>
  }

  export type AlumnosCreateManyGruposInputEnvelope = {
    data: AlumnosCreateManyGruposInput | AlumnosCreateManyGruposInput[]
    skipDuplicates?: boolean
  }

  export type EjerciciosCreateWithoutGruposInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado: EstadoCreateNestedOneWithoutEjerciciosInput
    Maestros?: MaestrosCreateNestedOneWithoutEjerciciosInput
    TipoEjercicio: TipoEjercicioCreateNestedOneWithoutEjerciciosInput
    Incisos?: IncisosCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateWithoutGruposInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
    Incisos?: IncisosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosCreateOrConnectWithoutGruposInput = {
    where: EjerciciosWhereUniqueInput
    create: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput>
  }

  export type EjerciciosCreateManyGruposInputEnvelope = {
    data: EjerciciosCreateManyGruposInput | EjerciciosCreateManyGruposInput[]
    skipDuplicates?: boolean
  }

  export type EscuelaCreateWithoutGruposInput = {
    Nombre: string
    Administrador?: AdministradorCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutGruposInput = {
    Escuela_id?: number
    Nombre: string
    Administrador?: AdministradorUncheckedCreateNestedManyWithoutEscuelaInput
    Maestros?: MaestrosUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutGruposInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
  }

  export type GradoCreateWithoutGruposInput = {
    Nivel: string
  }

  export type GradoUncheckedCreateWithoutGruposInput = {
    Grado_id?: number
    Nivel: string
  }

  export type GradoCreateOrConnectWithoutGruposInput = {
    where: GradoWhereUniqueInput
    create: XOR<GradoCreateWithoutGruposInput, GradoUncheckedCreateWithoutGruposInput>
  }

  export type MaestrosCreateWithoutGruposInput = {
    Ejercicios?: EjerciciosCreateNestedManyWithoutMaestrosInput
    Escuela?: EscuelaCreateNestedOneWithoutMaestrosInput
    Usuarios: UsuariosCreateNestedOneWithoutMaestrosInput
  }

  export type MaestrosUncheckedCreateWithoutGruposInput = {
    Usuario_id: number
    Escuela_id?: number | null
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutMaestrosInput
  }

  export type MaestrosCreateOrConnectWithoutGruposInput = {
    where: MaestrosWhereUniqueInput
    create: XOR<MaestrosCreateWithoutGruposInput, MaestrosUncheckedCreateWithoutGruposInput>
  }

  export type TurnoCreateWithoutGruposInput = {
    Horario: string
    Administrador?: AdministradorCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutGruposInput = {
    Turno_id?: number
    Horario: string
    Administrador?: AdministradorUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutGruposInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutGruposInput, TurnoUncheckedCreateWithoutGruposInput>
  }

  export type AlumnosUpsertWithWhereUniqueWithoutGruposInput = {
    where: AlumnosWhereUniqueInput
    update: XOR<AlumnosUpdateWithoutGruposInput, AlumnosUncheckedUpdateWithoutGruposInput>
    create: XOR<AlumnosCreateWithoutGruposInput, AlumnosUncheckedCreateWithoutGruposInput>
  }

  export type AlumnosUpdateWithWhereUniqueWithoutGruposInput = {
    where: AlumnosWhereUniqueInput
    data: XOR<AlumnosUpdateWithoutGruposInput, AlumnosUncheckedUpdateWithoutGruposInput>
  }

  export type AlumnosUpdateManyWithWhereWithoutGruposInput = {
    where: AlumnosScalarWhereInput
    data: XOR<AlumnosUpdateManyMutationInput, AlumnosUncheckedUpdateManyWithoutGruposInput>
  }

  export type AlumnosScalarWhereInput = {
    AND?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
    OR?: AlumnosScalarWhereInput[]
    NOT?: AlumnosScalarWhereInput | AlumnosScalarWhereInput[]
    Usuario_id?: IntFilter<"Alumnos"> | number
    Grupo_id?: IntNullableFilter<"Alumnos"> | number | null
  }

  export type EjerciciosUpsertWithWhereUniqueWithoutGruposInput = {
    where: EjerciciosWhereUniqueInput
    update: XOR<EjerciciosUpdateWithoutGruposInput, EjerciciosUncheckedUpdateWithoutGruposInput>
    create: XOR<EjerciciosCreateWithoutGruposInput, EjerciciosUncheckedCreateWithoutGruposInput>
  }

  export type EjerciciosUpdateWithWhereUniqueWithoutGruposInput = {
    where: EjerciciosWhereUniqueInput
    data: XOR<EjerciciosUpdateWithoutGruposInput, EjerciciosUncheckedUpdateWithoutGruposInput>
  }

  export type EjerciciosUpdateManyWithWhereWithoutGruposInput = {
    where: EjerciciosScalarWhereInput
    data: XOR<EjerciciosUpdateManyMutationInput, EjerciciosUncheckedUpdateManyWithoutGruposInput>
  }

  export type EscuelaUpsertWithoutGruposInput = {
    update: XOR<EscuelaUpdateWithoutGruposInput, EscuelaUncheckedUpdateWithoutGruposInput>
    create: XOR<EscuelaCreateWithoutGruposInput, EscuelaUncheckedCreateWithoutGruposInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutGruposInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutGruposInput, EscuelaUncheckedUpdateWithoutGruposInput>
  }

  export type EscuelaUpdateWithoutGruposInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutGruposInput = {
    Escuela_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateManyWithoutEscuelaNestedInput
    Maestros?: MaestrosUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type GradoUpsertWithoutGruposInput = {
    update: XOR<GradoUpdateWithoutGruposInput, GradoUncheckedUpdateWithoutGruposInput>
    create: XOR<GradoCreateWithoutGruposInput, GradoUncheckedCreateWithoutGruposInput>
    where?: GradoWhereInput
  }

  export type GradoUpdateToOneWithWhereWithoutGruposInput = {
    where?: GradoWhereInput
    data: XOR<GradoUpdateWithoutGruposInput, GradoUncheckedUpdateWithoutGruposInput>
  }

  export type GradoUpdateWithoutGruposInput = {
    Nivel?: StringFieldUpdateOperationsInput | string
  }

  export type GradoUncheckedUpdateWithoutGruposInput = {
    Grado_id?: IntFieldUpdateOperationsInput | number
    Nivel?: StringFieldUpdateOperationsInput | string
  }

  export type MaestrosUpsertWithoutGruposInput = {
    update: XOR<MaestrosUpdateWithoutGruposInput, MaestrosUncheckedUpdateWithoutGruposInput>
    create: XOR<MaestrosCreateWithoutGruposInput, MaestrosUncheckedCreateWithoutGruposInput>
    where?: MaestrosWhereInput
  }

  export type MaestrosUpdateToOneWithWhereWithoutGruposInput = {
    where?: MaestrosWhereInput
    data: XOR<MaestrosUpdateWithoutGruposInput, MaestrosUncheckedUpdateWithoutGruposInput>
  }

  export type MaestrosUpdateWithoutGruposInput = {
    Ejercicios?: EjerciciosUpdateManyWithoutMaestrosNestedInput
    Escuela?: EscuelaUpdateOneWithoutMaestrosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateWithoutGruposInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutMaestrosNestedInput
  }

  export type TurnoUpsertWithoutGruposInput = {
    update: XOR<TurnoUpdateWithoutGruposInput, TurnoUncheckedUpdateWithoutGruposInput>
    create: XOR<TurnoCreateWithoutGruposInput, TurnoUncheckedCreateWithoutGruposInput>
    where?: TurnoWhereInput
  }

  export type TurnoUpdateToOneWithWhereWithoutGruposInput = {
    where?: TurnoWhereInput
    data: XOR<TurnoUpdateWithoutGruposInput, TurnoUncheckedUpdateWithoutGruposInput>
  }

  export type TurnoUpdateWithoutGruposInput = {
    Horario?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutGruposInput = {
    Turno_id?: IntFieldUpdateOperationsInput | number
    Horario?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type EjerciciosCreateWithoutIncisosInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado: EstadoCreateNestedOneWithoutEjerciciosInput
    Grupos?: GruposCreateNestedOneWithoutEjerciciosInput
    Maestros?: MaestrosCreateNestedOneWithoutEjerciciosInput
    TipoEjercicio: TipoEjercicioCreateNestedOneWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateWithoutIncisosInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
  }

  export type EjerciciosCreateOrConnectWithoutIncisosInput = {
    where: EjerciciosWhereUniqueInput
    create: XOR<EjerciciosCreateWithoutIncisosInput, EjerciciosUncheckedCreateWithoutIncisosInput>
  }

  export type RespuestasCreateWithoutIncisosInput = {
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Alumnos: AlumnosCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestasUncheckedCreateWithoutIncisosInput = {
    AlumnoID: number
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
  }

  export type RespuestasCreateOrConnectWithoutIncisosInput = {
    where: RespuestasWhereUniqueInput
    create: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput>
  }

  export type RespuestasCreateManyIncisosInputEnvelope = {
    data: RespuestasCreateManyIncisosInput | RespuestasCreateManyIncisosInput[]
    skipDuplicates?: boolean
  }

  export type EjerciciosUpsertWithoutIncisosInput = {
    update: XOR<EjerciciosUpdateWithoutIncisosInput, EjerciciosUncheckedUpdateWithoutIncisosInput>
    create: XOR<EjerciciosCreateWithoutIncisosInput, EjerciciosUncheckedCreateWithoutIncisosInput>
    where?: EjerciciosWhereInput
  }

  export type EjerciciosUpdateToOneWithWhereWithoutIncisosInput = {
    where?: EjerciciosWhereInput
    data: XOR<EjerciciosUpdateWithoutIncisosInput, EjerciciosUncheckedUpdateWithoutIncisosInput>
  }

  export type EjerciciosUpdateWithoutIncisosInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: EstadoUpdateOneRequiredWithoutEjerciciosNestedInput
    Grupos?: GruposUpdateOneWithoutEjerciciosNestedInput
    Maestros?: MaestrosUpdateOneWithoutEjerciciosNestedInput
    TipoEjercicio?: TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateWithoutIncisosInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type RespuestasUpsertWithWhereUniqueWithoutIncisosInput = {
    where: RespuestasWhereUniqueInput
    update: XOR<RespuestasUpdateWithoutIncisosInput, RespuestasUncheckedUpdateWithoutIncisosInput>
    create: XOR<RespuestasCreateWithoutIncisosInput, RespuestasUncheckedCreateWithoutIncisosInput>
  }

  export type RespuestasUpdateWithWhereUniqueWithoutIncisosInput = {
    where: RespuestasWhereUniqueInput
    data: XOR<RespuestasUpdateWithoutIncisosInput, RespuestasUncheckedUpdateWithoutIncisosInput>
  }

  export type RespuestasUpdateManyWithWhereWithoutIncisosInput = {
    where: RespuestasScalarWhereInput
    data: XOR<RespuestasUpdateManyMutationInput, RespuestasUncheckedUpdateManyWithoutIncisosInput>
  }

  export type EjerciciosCreateWithoutMaestrosInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado: EstadoCreateNestedOneWithoutEjerciciosInput
    Grupos?: GruposCreateNestedOneWithoutEjerciciosInput
    TipoEjercicio: TipoEjercicioCreateNestedOneWithoutEjerciciosInput
    Incisos?: IncisosCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateWithoutMaestrosInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
    Incisos?: IncisosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosCreateOrConnectWithoutMaestrosInput = {
    where: EjerciciosWhereUniqueInput
    create: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput>
  }

  export type EjerciciosCreateManyMaestrosInputEnvelope = {
    data: EjerciciosCreateManyMaestrosInput | EjerciciosCreateManyMaestrosInput[]
    skipDuplicates?: boolean
  }

  export type GruposCreateWithoutMaestrosInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Turno?: TurnoCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutMaestrosInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Turno_id?: number | null
    Grado_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutMaestrosInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput>
  }

  export type GruposCreateManyMaestrosInputEnvelope = {
    data: GruposCreateManyMaestrosInput | GruposCreateManyMaestrosInput[]
    skipDuplicates?: boolean
  }

  export type EscuelaCreateWithoutMaestrosInput = {
    Nombre: string
    Administrador?: AdministradorCreateNestedManyWithoutEscuelaInput
    Grupos?: GruposCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaUncheckedCreateWithoutMaestrosInput = {
    Escuela_id?: number
    Nombre: string
    Administrador?: AdministradorUncheckedCreateNestedManyWithoutEscuelaInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEscuelaInput
  }

  export type EscuelaCreateOrConnectWithoutMaestrosInput = {
    where: EscuelaWhereUniqueInput
    create: XOR<EscuelaCreateWithoutMaestrosInput, EscuelaUncheckedCreateWithoutMaestrosInput>
  }

  export type UsuariosCreateWithoutMaestrosInput = {
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutMaestrosInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosUncheckedCreateNestedOneWithoutUsuariosInput
    SuperAdmin?: SuperAdminUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutMaestrosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutMaestrosInput, UsuariosUncheckedCreateWithoutMaestrosInput>
  }

  export type EjerciciosUpsertWithWhereUniqueWithoutMaestrosInput = {
    where: EjerciciosWhereUniqueInput
    update: XOR<EjerciciosUpdateWithoutMaestrosInput, EjerciciosUncheckedUpdateWithoutMaestrosInput>
    create: XOR<EjerciciosCreateWithoutMaestrosInput, EjerciciosUncheckedCreateWithoutMaestrosInput>
  }

  export type EjerciciosUpdateWithWhereUniqueWithoutMaestrosInput = {
    where: EjerciciosWhereUniqueInput
    data: XOR<EjerciciosUpdateWithoutMaestrosInput, EjerciciosUncheckedUpdateWithoutMaestrosInput>
  }

  export type EjerciciosUpdateManyWithWhereWithoutMaestrosInput = {
    where: EjerciciosScalarWhereInput
    data: XOR<EjerciciosUpdateManyMutationInput, EjerciciosUncheckedUpdateManyWithoutMaestrosInput>
  }

  export type GruposUpsertWithWhereUniqueWithoutMaestrosInput = {
    where: GruposWhereUniqueInput
    update: XOR<GruposUpdateWithoutMaestrosInput, GruposUncheckedUpdateWithoutMaestrosInput>
    create: XOR<GruposCreateWithoutMaestrosInput, GruposUncheckedCreateWithoutMaestrosInput>
  }

  export type GruposUpdateWithWhereUniqueWithoutMaestrosInput = {
    where: GruposWhereUniqueInput
    data: XOR<GruposUpdateWithoutMaestrosInput, GruposUncheckedUpdateWithoutMaestrosInput>
  }

  export type GruposUpdateManyWithWhereWithoutMaestrosInput = {
    where: GruposScalarWhereInput
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyWithoutMaestrosInput>
  }

  export type EscuelaUpsertWithoutMaestrosInput = {
    update: XOR<EscuelaUpdateWithoutMaestrosInput, EscuelaUncheckedUpdateWithoutMaestrosInput>
    create: XOR<EscuelaCreateWithoutMaestrosInput, EscuelaUncheckedCreateWithoutMaestrosInput>
    where?: EscuelaWhereInput
  }

  export type EscuelaUpdateToOneWithWhereWithoutMaestrosInput = {
    where?: EscuelaWhereInput
    data: XOR<EscuelaUpdateWithoutMaestrosInput, EscuelaUncheckedUpdateWithoutMaestrosInput>
  }

  export type EscuelaUpdateWithoutMaestrosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateManyWithoutEscuelaNestedInput
    Grupos?: GruposUpdateManyWithoutEscuelaNestedInput
  }

  export type EscuelaUncheckedUpdateWithoutMaestrosInput = {
    Escuela_id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateManyWithoutEscuelaNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEscuelaNestedInput
  }

  export type UsuariosUpsertWithoutMaestrosInput = {
    update: XOR<UsuariosUpdateWithoutMaestrosInput, UsuariosUncheckedUpdateWithoutMaestrosInput>
    create: XOR<UsuariosCreateWithoutMaestrosInput, UsuariosUncheckedCreateWithoutMaestrosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutMaestrosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutMaestrosInput, UsuariosUncheckedUpdateWithoutMaestrosInput>
  }

  export type UsuariosUpdateWithoutMaestrosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutMaestrosInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUncheckedUpdateOneWithoutUsuariosNestedInput
    SuperAdmin?: SuperAdminUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type AlumnosCreateWithoutRespuestasInput = {
    Grupos?: GruposCreateNestedOneWithoutAlumnosInput
    Usuarios: UsuariosCreateNestedOneWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateWithoutRespuestasInput = {
    Usuario_id: number
    Grupo_id?: number | null
  }

  export type AlumnosCreateOrConnectWithoutRespuestasInput = {
    where: AlumnosWhereUniqueInput
    create: XOR<AlumnosCreateWithoutRespuestasInput, AlumnosUncheckedCreateWithoutRespuestasInput>
  }

  export type IncisosCreateWithoutRespuestasInput = {
    LoSolicitado: string
    Ejercicios?: EjerciciosCreateNestedOneWithoutIncisosInput
  }

  export type IncisosUncheckedCreateWithoutRespuestasInput = {
    Incisos_id?: number
    LoSolicitado: string
    EjercicioID?: number | null
  }

  export type IncisosCreateOrConnectWithoutRespuestasInput = {
    where: IncisosWhereUniqueInput
    create: XOR<IncisosCreateWithoutRespuestasInput, IncisosUncheckedCreateWithoutRespuestasInput>
  }

  export type AlumnosUpsertWithoutRespuestasInput = {
    update: XOR<AlumnosUpdateWithoutRespuestasInput, AlumnosUncheckedUpdateWithoutRespuestasInput>
    create: XOR<AlumnosCreateWithoutRespuestasInput, AlumnosUncheckedCreateWithoutRespuestasInput>
    where?: AlumnosWhereInput
  }

  export type AlumnosUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: AlumnosWhereInput
    data: XOR<AlumnosUpdateWithoutRespuestasInput, AlumnosUncheckedUpdateWithoutRespuestasInput>
  }

  export type AlumnosUpdateWithoutRespuestasInput = {
    Grupos?: GruposUpdateOneWithoutAlumnosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateWithoutRespuestasInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Grupo_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IncisosUpsertWithoutRespuestasInput = {
    update: XOR<IncisosUpdateWithoutRespuestasInput, IncisosUncheckedUpdateWithoutRespuestasInput>
    create: XOR<IncisosCreateWithoutRespuestasInput, IncisosUncheckedCreateWithoutRespuestasInput>
    where?: IncisosWhereInput
  }

  export type IncisosUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: IncisosWhereInput
    data: XOR<IncisosUpdateWithoutRespuestasInput, IncisosUncheckedUpdateWithoutRespuestasInput>
  }

  export type IncisosUpdateWithoutRespuestasInput = {
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    Ejercicios?: EjerciciosUpdateOneWithoutIncisosNestedInput
  }

  export type IncisosUncheckedUpdateWithoutRespuestasInput = {
    Incisos_id?: IntFieldUpdateOperationsInput | number
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    EjercicioID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateWithoutSuperAdminInput = {
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutSuperAdminInput = {
    Usuarios_id?: number
    Nombres: string
    Apellidos: string
    Correo: string
    Contrasena: string
    Administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuariosInput
    Alumnos?: AlumnosUncheckedCreateNestedOneWithoutUsuariosInput
    Maestros?: MaestrosUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutSuperAdminInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutSuperAdminInput, UsuariosUncheckedCreateWithoutSuperAdminInput>
  }

  export type UsuariosUpsertWithoutSuperAdminInput = {
    update: XOR<UsuariosUpdateWithoutSuperAdminInput, UsuariosUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<UsuariosCreateWithoutSuperAdminInput, UsuariosUncheckedCreateWithoutSuperAdminInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutSuperAdminInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutSuperAdminInput, UsuariosUncheckedUpdateWithoutSuperAdminInput>
  }

  export type UsuariosUpdateWithoutSuperAdminInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutSuperAdminInput = {
    Usuarios_id?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Correo?: StringFieldUpdateOperationsInput | string
    Contrasena?: StringFieldUpdateOperationsInput | string
    Administrador?: AdministradorUncheckedUpdateOneWithoutUsuariosNestedInput
    Alumnos?: AlumnosUncheckedUpdateOneWithoutUsuariosNestedInput
    Maestros?: MaestrosUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type EjerciciosCreateWithoutTipoEjercicioInput = {
    NombreEjercicio: string
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado: EstadoCreateNestedOneWithoutEjerciciosInput
    Grupos?: GruposCreateNestedOneWithoutEjerciciosInput
    Maestros?: MaestrosCreateNestedOneWithoutEjerciciosInput
    Incisos?: IncisosCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosUncheckedCreateWithoutTipoEjercicioInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
    Incisos?: IncisosUncheckedCreateNestedManyWithoutEjerciciosInput
  }

  export type EjerciciosCreateOrConnectWithoutTipoEjercicioInput = {
    where: EjerciciosWhereUniqueInput
    create: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput>
  }

  export type EjerciciosCreateManyTipoEjercicioInputEnvelope = {
    data: EjerciciosCreateManyTipoEjercicioInput | EjerciciosCreateManyTipoEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type EjerciciosUpsertWithWhereUniqueWithoutTipoEjercicioInput = {
    where: EjerciciosWhereUniqueInput
    update: XOR<EjerciciosUpdateWithoutTipoEjercicioInput, EjerciciosUncheckedUpdateWithoutTipoEjercicioInput>
    create: XOR<EjerciciosCreateWithoutTipoEjercicioInput, EjerciciosUncheckedCreateWithoutTipoEjercicioInput>
  }

  export type EjerciciosUpdateWithWhereUniqueWithoutTipoEjercicioInput = {
    where: EjerciciosWhereUniqueInput
    data: XOR<EjerciciosUpdateWithoutTipoEjercicioInput, EjerciciosUncheckedUpdateWithoutTipoEjercicioInput>
  }

  export type EjerciciosUpdateManyWithWhereWithoutTipoEjercicioInput = {
    where: EjerciciosScalarWhereInput
    data: XOR<EjerciciosUpdateManyMutationInput, EjerciciosUncheckedUpdateManyWithoutTipoEjercicioInput>
  }

  export type AdministradorCreateWithoutTurnoInput = {
    Escuela?: EscuelaCreateNestedOneWithoutAdministradorInput
    Usuarios: UsuariosCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateWithoutTurnoInput = {
    Usuario_id: number
    Escuela_id?: number | null
  }

  export type AdministradorCreateOrConnectWithoutTurnoInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput>
  }

  export type AdministradorCreateManyTurnoInputEnvelope = {
    data: AdministradorCreateManyTurnoInput | AdministradorCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type GruposCreateWithoutTurnoInput = {
    NombreGrupo: string
    Alumnos?: AlumnosCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosCreateNestedManyWithoutGruposInput
    Escuela?: EscuelaCreateNestedOneWithoutGruposInput
    Grado?: GradoCreateNestedOneWithoutGruposInput
    Maestros?: MaestrosCreateNestedOneWithoutGruposInput
  }

  export type GruposUncheckedCreateWithoutTurnoInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Grado_id?: number | null
    Alumnos?: AlumnosUncheckedCreateNestedManyWithoutGruposInput
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposCreateOrConnectWithoutTurnoInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput>
  }

  export type GruposCreateManyTurnoInputEnvelope = {
    data: GruposCreateManyTurnoInput | GruposCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type AdministradorUpsertWithWhereUniqueWithoutTurnoInput = {
    where: AdministradorWhereUniqueInput
    update: XOR<AdministradorUpdateWithoutTurnoInput, AdministradorUncheckedUpdateWithoutTurnoInput>
    create: XOR<AdministradorCreateWithoutTurnoInput, AdministradorUncheckedCreateWithoutTurnoInput>
  }

  export type AdministradorUpdateWithWhereUniqueWithoutTurnoInput = {
    where: AdministradorWhereUniqueInput
    data: XOR<AdministradorUpdateWithoutTurnoInput, AdministradorUncheckedUpdateWithoutTurnoInput>
  }

  export type AdministradorUpdateManyWithWhereWithoutTurnoInput = {
    where: AdministradorScalarWhereInput
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyWithoutTurnoInput>
  }

  export type GruposUpsertWithWhereUniqueWithoutTurnoInput = {
    where: GruposWhereUniqueInput
    update: XOR<GruposUpdateWithoutTurnoInput, GruposUncheckedUpdateWithoutTurnoInput>
    create: XOR<GruposCreateWithoutTurnoInput, GruposUncheckedCreateWithoutTurnoInput>
  }

  export type GruposUpdateWithWhereUniqueWithoutTurnoInput = {
    where: GruposWhereUniqueInput
    data: XOR<GruposUpdateWithoutTurnoInput, GruposUncheckedUpdateWithoutTurnoInput>
  }

  export type GruposUpdateManyWithWhereWithoutTurnoInput = {
    where: GruposScalarWhereInput
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyWithoutTurnoInput>
  }

  export type AdministradorCreateWithoutUsuariosInput = {
    Escuela?: EscuelaCreateNestedOneWithoutAdministradorInput
    Turno?: TurnoCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateWithoutUsuariosInput = {
    Escuela_id?: number | null
    Turno_id?: number | null
  }

  export type AdministradorCreateOrConnectWithoutUsuariosInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
  }

  export type AlumnosCreateWithoutUsuariosInput = {
    Grupos?: GruposCreateNestedOneWithoutAlumnosInput
    Respuestas?: RespuestasCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosUncheckedCreateWithoutUsuariosInput = {
    Grupo_id?: number | null
    Respuestas?: RespuestasUncheckedCreateNestedManyWithoutAlumnosInput
  }

  export type AlumnosCreateOrConnectWithoutUsuariosInput = {
    where: AlumnosWhereUniqueInput
    create: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
  }

  export type MaestrosCreateWithoutUsuariosInput = {
    Ejercicios?: EjerciciosCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposCreateNestedManyWithoutMaestrosInput
    Escuela?: EscuelaCreateNestedOneWithoutMaestrosInput
  }

  export type MaestrosUncheckedCreateWithoutUsuariosInput = {
    Escuela_id?: number | null
    Ejercicios?: EjerciciosUncheckedCreateNestedManyWithoutMaestrosInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutMaestrosInput
  }

  export type MaestrosCreateOrConnectWithoutUsuariosInput = {
    where: MaestrosWhereUniqueInput
    create: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
  }

  export type SuperAdminCreateWithoutUsuariosInput = {

  }

  export type SuperAdminUncheckedCreateWithoutUsuariosInput = {

  }

  export type SuperAdminCreateOrConnectWithoutUsuariosInput = {
    where: SuperAdminWhereUniqueInput
    create: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
  }

  export type AdministradorUpsertWithoutUsuariosInput = {
    update: XOR<AdministradorUpdateWithoutUsuariosInput, AdministradorUncheckedUpdateWithoutUsuariosInput>
    create: XOR<AdministradorCreateWithoutUsuariosInput, AdministradorUncheckedCreateWithoutUsuariosInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutUsuariosInput, AdministradorUncheckedUpdateWithoutUsuariosInput>
  }

  export type AdministradorUpdateWithoutUsuariosInput = {
    Escuela?: EscuelaUpdateOneWithoutAdministradorNestedInput
    Turno?: TurnoUpdateOneWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateWithoutUsuariosInput = {
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlumnosUpsertWithoutUsuariosInput = {
    update: XOR<AlumnosUpdateWithoutUsuariosInput, AlumnosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<AlumnosCreateWithoutUsuariosInput, AlumnosUncheckedCreateWithoutUsuariosInput>
    where?: AlumnosWhereInput
  }

  export type AlumnosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: AlumnosWhereInput
    data: XOR<AlumnosUpdateWithoutUsuariosInput, AlumnosUncheckedUpdateWithoutUsuariosInput>
  }

  export type AlumnosUpdateWithoutUsuariosInput = {
    Grupos?: GruposUpdateOneWithoutAlumnosNestedInput
    Respuestas?: RespuestasUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateWithoutUsuariosInput = {
    Grupo_id?: NullableIntFieldUpdateOperationsInput | number | null
    Respuestas?: RespuestasUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type MaestrosUpsertWithoutUsuariosInput = {
    update: XOR<MaestrosUpdateWithoutUsuariosInput, MaestrosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<MaestrosCreateWithoutUsuariosInput, MaestrosUncheckedCreateWithoutUsuariosInput>
    where?: MaestrosWhereInput
  }

  export type MaestrosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: MaestrosWhereInput
    data: XOR<MaestrosUpdateWithoutUsuariosInput, MaestrosUncheckedUpdateWithoutUsuariosInput>
  }

  export type MaestrosUpdateWithoutUsuariosInput = {
    Ejercicios?: EjerciciosUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUpdateManyWithoutMaestrosNestedInput
    Escuela?: EscuelaUpdateOneWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateWithoutUsuariosInput = {
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutMaestrosNestedInput
  }

  export type SuperAdminUpsertWithoutUsuariosInput = {
    update: XOR<SuperAdminUpdateWithoutUsuariosInput, SuperAdminUncheckedUpdateWithoutUsuariosInput>
    create: XOR<SuperAdminCreateWithoutUsuariosInput, SuperAdminUncheckedCreateWithoutUsuariosInput>
    where?: SuperAdminWhereInput
  }

  export type SuperAdminUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: SuperAdminWhereInput
    data: XOR<SuperAdminUpdateWithoutUsuariosInput, SuperAdminUncheckedUpdateWithoutUsuariosInput>
  }

  export type SuperAdminUpdateWithoutUsuariosInput = {

  }

  export type SuperAdminUncheckedUpdateWithoutUsuariosInput = {

  }

  export type RespuestasCreateManyAlumnosInput = {
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
    Inciso_id: number
  }

  export type RespuestasUpdateWithoutAlumnosInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Incisos?: IncisosUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestasUncheckedUpdateWithoutAlumnosInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Inciso_id?: IntFieldUpdateOperationsInput | number
  }

  export type RespuestasUncheckedUpdateManyWithoutAlumnosInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Inciso_id?: IntFieldUpdateOperationsInput | number
  }

  export type IncisosCreateManyEjerciciosInput = {
    Incisos_id?: number
    LoSolicitado: string
  }

  export type IncisosUpdateWithoutEjerciciosInput = {
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    Respuestas?: RespuestasUpdateManyWithoutIncisosNestedInput
  }

  export type IncisosUncheckedUpdateWithoutEjerciciosInput = {
    Incisos_id?: IntFieldUpdateOperationsInput | number
    LoSolicitado?: StringFieldUpdateOperationsInput | string
    Respuestas?: RespuestasUncheckedUpdateManyWithoutIncisosNestedInput
  }

  export type IncisosUncheckedUpdateManyWithoutEjerciciosInput = {
    Incisos_id?: IntFieldUpdateOperationsInput | number
    LoSolicitado?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorCreateManyEscuelaInput = {
    Usuario_id: number
    Turno_id?: number | null
  }

  export type GruposCreateManyEscuelaInput = {
    Grupos_id?: number
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
    Grado_id?: number | null
  }

  export type MaestrosCreateManyEscuelaInput = {
    Usuario_id: number
  }

  export type AdministradorUpdateWithoutEscuelaInput = {
    Turno?: TurnoUpdateOneWithoutAdministradorNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateWithoutEscuelaInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdministradorUncheckedUpdateManyWithoutEscuelaInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GruposUpdateWithoutEscuelaInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutEscuelaInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateManyWithoutEscuelaInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MaestrosUpdateWithoutEscuelaInput = {
    Ejercicios?: EjerciciosUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUpdateManyWithoutMaestrosNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateWithoutEscuelaInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutMaestrosNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutMaestrosNestedInput
  }

  export type MaestrosUncheckedUpdateManyWithoutEscuelaInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type EjerciciosCreateManyEstadoInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
  }

  export type EjerciciosUpdateWithoutEstadoInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Grupos?: GruposUpdateOneWithoutEjerciciosNestedInput
    Maestros?: MaestrosUpdateOneWithoutEjerciciosNestedInput
    TipoEjercicio?: TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput
    Incisos?: IncisosUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateWithoutEstadoInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Incisos?: IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateManyWithoutEstadoInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GruposCreateManyGradoInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Turno_id?: number | null
  }

  export type GruposUpdateWithoutGradoInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutGradoInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateManyWithoutGradoInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlumnosCreateManyGruposInput = {
    Usuario_id: number
  }

  export type EjerciciosCreateManyGruposInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
  }

  export type AlumnosUpdateWithoutGruposInput = {
    Usuarios?: UsuariosUpdateOneRequiredWithoutAlumnosNestedInput
    Respuestas?: RespuestasUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateWithoutGruposInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Respuestas?: RespuestasUncheckedUpdateManyWithoutAlumnosNestedInput
  }

  export type AlumnosUncheckedUpdateManyWithoutGruposInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type EjerciciosUpdateWithoutGruposInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: EstadoUpdateOneRequiredWithoutEjerciciosNestedInput
    Maestros?: MaestrosUpdateOneWithoutEjerciciosNestedInput
    TipoEjercicio?: TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput
    Incisos?: IncisosUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateWithoutGruposInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
    Incisos?: IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateManyWithoutGruposInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type RespuestasCreateManyIncisosInput = {
    AlumnoID: number
    Imagen?: string | null
    Puntaje?: number | null
    Respuesta?: string | null
  }

  export type RespuestasUpdateWithoutIncisosInput = {
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    Alumnos?: AlumnosUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestasUncheckedUpdateWithoutIncisosInput = {
    AlumnoID?: IntFieldUpdateOperationsInput | number
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RespuestasUncheckedUpdateManyWithoutIncisosInput = {
    AlumnoID?: IntFieldUpdateOperationsInput | number
    Imagen?: NullableStringFieldUpdateOperationsInput | string | null
    Puntaje?: NullableIntFieldUpdateOperationsInput | number | null
    Respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EjerciciosCreateManyMaestrosInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    GrupoID?: number | null
    TipoEjercicio_id: number
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
  }

  export type GruposCreateManyMaestrosInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Turno_id?: number | null
    Grado_id?: number | null
  }

  export type EjerciciosUpdateWithoutMaestrosInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: EstadoUpdateOneRequiredWithoutEjerciciosNestedInput
    Grupos?: GruposUpdateOneWithoutEjerciciosNestedInput
    TipoEjercicio?: TipoEjercicioUpdateOneRequiredWithoutEjerciciosNestedInput
    Incisos?: IncisosUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateWithoutMaestrosInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
    Incisos?: IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateManyWithoutMaestrosInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    TipoEjercicio_id?: IntFieldUpdateOperationsInput | number
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type GruposUpdateWithoutMaestrosInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Turno?: TurnoUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutMaestrosInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateManyWithoutMaestrosInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Turno_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EjerciciosCreateManyTipoEjercicioInput = {
    Ejercicios_id?: number
    NombreEjercicio: string
    MaestroID?: number | null
    GrupoID?: number | null
    FechaPublicacion: Date | string
    FechaLimite?: Date | string | null
    Estado_id: number
  }

  export type EjerciciosUpdateWithoutTipoEjercicioInput = {
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: EstadoUpdateOneRequiredWithoutEjerciciosNestedInput
    Grupos?: GruposUpdateOneWithoutEjerciciosNestedInput
    Maestros?: MaestrosUpdateOneWithoutEjerciciosNestedInput
    Incisos?: IncisosUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateWithoutTipoEjercicioInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
    Incisos?: IncisosUncheckedUpdateManyWithoutEjerciciosNestedInput
  }

  export type EjerciciosUncheckedUpdateManyWithoutTipoEjercicioInput = {
    Ejercicios_id?: IntFieldUpdateOperationsInput | number
    NombreEjercicio?: StringFieldUpdateOperationsInput | string
    MaestroID?: NullableIntFieldUpdateOperationsInput | number | null
    GrupoID?: NullableIntFieldUpdateOperationsInput | number | null
    FechaPublicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorCreateManyTurnoInput = {
    Usuario_id: number
    Escuela_id?: number | null
  }

  export type GruposCreateManyTurnoInput = {
    Grupos_id?: number
    Escuela_id?: number | null
    NombreGrupo: string
    Maestro_id?: number | null
    Grado_id?: number | null
  }

  export type AdministradorUpdateWithoutTurnoInput = {
    Escuela?: EscuelaUpdateOneWithoutAdministradorNestedInput
    Usuarios?: UsuariosUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateWithoutTurnoInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdministradorUncheckedUpdateManyWithoutTurnoInput = {
    Usuario_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GruposUpdateWithoutTurnoInput = {
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Alumnos?: AlumnosUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUpdateManyWithoutGruposNestedInput
    Escuela?: EscuelaUpdateOneWithoutGruposNestedInput
    Grado?: GradoUpdateOneWithoutGruposNestedInput
    Maestros?: MaestrosUpdateOneWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateWithoutTurnoInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
    Alumnos?: AlumnosUncheckedUpdateManyWithoutGruposNestedInput
    Ejercicios?: EjerciciosUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateManyWithoutTurnoInput = {
    Grupos_id?: IntFieldUpdateOperationsInput | number
    Escuela_id?: NullableIntFieldUpdateOperationsInput | number | null
    NombreGrupo?: StringFieldUpdateOperationsInput | string
    Maestro_id?: NullableIntFieldUpdateOperationsInput | number | null
    Grado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AlumnosCountOutputTypeDefaultArgs instead
     */
    export type AlumnosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumnosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjerciciosCountOutputTypeDefaultArgs instead
     */
    export type EjerciciosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjerciciosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EscuelaCountOutputTypeDefaultArgs instead
     */
    export type EscuelaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EscuelaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoCountOutputTypeDefaultArgs instead
     */
    export type EstadoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradoCountOutputTypeDefaultArgs instead
     */
    export type GradoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GruposCountOutputTypeDefaultArgs instead
     */
    export type GruposCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GruposCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncisosCountOutputTypeDefaultArgs instead
     */
    export type IncisosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncisosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaestrosCountOutputTypeDefaultArgs instead
     */
    export type MaestrosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaestrosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoEjercicioCountOutputTypeDefaultArgs instead
     */
    export type TipoEjercicioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoEjercicioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoCountOutputTypeDefaultArgs instead
     */
    export type TurnoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdministradorDefaultArgs instead
     */
    export type AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdministradorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlumnosDefaultArgs instead
     */
    export type AlumnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumnosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjerciciosDefaultArgs instead
     */
    export type EjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjerciciosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EscuelaDefaultArgs instead
     */
    export type EscuelaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EscuelaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoDefaultArgs instead
     */
    export type EstadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradoDefaultArgs instead
     */
    export type GradoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GruposDefaultArgs instead
     */
    export type GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GruposDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncisosDefaultArgs instead
     */
    export type IncisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncisosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaestrosDefaultArgs instead
     */
    export type MaestrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaestrosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RespuestasDefaultArgs instead
     */
    export type RespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RespuestasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuperAdminDefaultArgs instead
     */
    export type SuperAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoEjercicioDefaultArgs instead
     */
    export type TipoEjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoEjercicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoDefaultArgs instead
     */
    export type TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosDefaultArgs instead
     */
    export type UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosDefaultArgs<ExtArgs>

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