
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.0
 * Query Engine version: a5596b96668f0f4b397761ce0956db54e17e48c4
 */
Prisma.prismaVersion = {
  client: "5.4.0",
  engine: "a5596b96668f0f4b397761ce0956db54e17e48c4"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdministradorScalarFieldEnum = {
  Usuario_id: 'Usuario_id',
  Escuela_id: 'Escuela_id',
  Turno_id: 'Turno_id'
};

exports.Prisma.AlumnosScalarFieldEnum = {
  Usuario_id: 'Usuario_id',
  Grupo_id: 'Grupo_id'
};

exports.Prisma.EjerciciosScalarFieldEnum = {
  Ejercicios_id: 'Ejercicios_id',
  NombreEjercicio: 'NombreEjercicio',
  MaestroID: 'MaestroID',
  GrupoID: 'GrupoID',
  TipoEjercicio_id: 'TipoEjercicio_id',
  FechaPublicacion: 'FechaPublicacion',
  FechaLimite: 'FechaLimite',
  Estado_id: 'Estado_id'
};

exports.Prisma.EscuelaScalarFieldEnum = {
  Escuela_id: 'Escuela_id',
  Nombre: 'Nombre'
};

exports.Prisma.EstadoScalarFieldEnum = {
  Estado_id: 'Estado_id',
  Nombre: 'Nombre'
};

exports.Prisma.GradoScalarFieldEnum = {
  Grado_id: 'Grado_id',
  Nivel: 'Nivel'
};

exports.Prisma.GruposScalarFieldEnum = {
  Grupos_id: 'Grupos_id',
  Escuela_id: 'Escuela_id',
  NombreGrupo: 'NombreGrupo',
  Maestro_id: 'Maestro_id',
  Turno_id: 'Turno_id',
  Grado_id: 'Grado_id'
};

exports.Prisma.IncisosScalarFieldEnum = {
  Incisos_id: 'Incisos_id',
  LoSolicitado: 'LoSolicitado',
  EjercicioID: 'EjercicioID'
};

exports.Prisma.MaestrosScalarFieldEnum = {
  Usuario_id: 'Usuario_id',
  Escuela_id: 'Escuela_id'
};

exports.Prisma.RespuestasScalarFieldEnum = {
  AlumnoID: 'AlumnoID',
  Imagen: 'Imagen',
  Puntaje: 'Puntaje',
  Respuesta: 'Respuesta',
  Inciso_id: 'Inciso_id'
};

exports.Prisma.SuperAdminScalarFieldEnum = {
  Usuario_id: 'Usuario_id'
};

exports.Prisma.TipoEjercicioScalarFieldEnum = {
  Tipo_id: 'Tipo_id',
  Nombre: 'Nombre'
};

exports.Prisma.TurnoScalarFieldEnum = {
  Turno_id: 'Turno_id',
  Horario: 'Horario'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  Usuarios_id: 'Usuarios_id',
  Nombres: 'Nombres',
  Apellidos: 'Apellidos',
  Correo: 'Correo',
  Contrasena: 'Contrasena'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
