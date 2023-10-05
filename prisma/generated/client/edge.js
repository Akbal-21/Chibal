
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Paco\\Desktop\\Github\\TT2\\Chibal\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIEFkbWluaXN0cmFkb3IgewogIFVzdWFyaW9faWQgSW50ICAgICAgQGlkCiAgRXNjdWVsYV9pZCBJbnQ/CiAgVHVybm9faWQgICBJbnQ/CiAgRXNjdWVsYSAgICBFc2N1ZWxhPyBAcmVsYXRpb24oZmllbGRzOiBbRXNjdWVsYV9pZF0sIHJlZmVyZW5jZXM6IFtFc2N1ZWxhX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgVHVybm8gICAgICBUdXJubz8gICBAcmVsYXRpb24oZmllbGRzOiBbVHVybm9faWRdLCByZWZlcmVuY2VzOiBbVHVybm9faWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBVc3VhcmlvcyAgIFVzdWFyaW9zIEByZWxhdGlvbihmaWVsZHM6IFtVc3VhcmlvX2lkXSwgcmVmZXJlbmNlczogW1VzdWFyaW9zX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIEFsdW1ub3MgewogIFVzdWFyaW9faWQgSW50ICAgICAgICAgIEBpZAogIEdydXBvX2lkICAgSW50PwogIEdydXBvcyAgICAgR3J1cG9zPyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtHcnVwb19pZF0sIHJlZmVyZW5jZXM6IFtHcnVwb3NfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBVc3VhcmlvcyAgIFVzdWFyaW9zICAgICBAcmVsYXRpb24oZmllbGRzOiBbVXN1YXJpb19pZF0sIHJlZmVyZW5jZXM6IFtVc3Vhcmlvc19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIFJlc3B1ZXN0YXMgUmVzcHVlc3Rhc1tdCn0KCm1vZGVsIEVqZXJjaWNpb3MgewogIEVqZXJjaWNpb3NfaWQgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE5vbWJyZUVqZXJjaWNpbyAgU3RyaW5nICAgICAgICBAZGIuVmFyQ2hhcgogIE1hZXN0cm9JRCAgICAgICAgSW50PwogIEdydXBvSUQgICAgICAgICAgSW50PwogIFRpcG9FamVyY2ljaW9faWQgSW50CiAgRmVjaGFQdWJsaWNhY2lvbiBEYXRlVGltZSAgICAgIEBkYi5EYXRlCiAgRmVjaGFMaW1pdGUgICAgICBEYXRlVGltZT8gICAgIEBkYi5EYXRlCiAgRXN0YWRvX2lkICAgICAgICBJbnQKICBFc3RhZG8gICAgICAgICAgIEVzdGFkbyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW0VzdGFkb19pZF0sIHJlZmVyZW5jZXM6IFtFc3RhZG9faWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBHcnVwb3MgICAgICAgICAgIEdydXBvcz8gICAgICAgQHJlbGF0aW9uKGZpZWxkczogW0dydXBvSURdLCByZWZlcmVuY2VzOiBbR3J1cG9zX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgTWFlc3Ryb3MgICAgICAgICBNYWVzdHJvcz8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtNYWVzdHJvSURdLCByZWZlcmVuY2VzOiBbVXN1YXJpb19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIFRpcG9FamVyY2ljaW8gICAgVGlwb0VqZXJjaWNpbyBAcmVsYXRpb24oZmllbGRzOiBbVGlwb0VqZXJjaWNpb19pZF0sIHJlZmVyZW5jZXM6IFtUaXBvX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgSW5jaXNvcyAgICAgICAgICBJbmNpc29zW10KfQoKbW9kZWwgRXNjdWVsYSB7CiAgRXNjdWVsYV9pZCAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBOb21icmUgICAgICAgIFN0cmluZyAgICAgICAgICBAZGIuVmFyQ2hhcgogIEFkbWluaXN0cmFkb3IgQWRtaW5pc3RyYWRvcltdCiAgR3J1cG9zICAgICAgICBHcnVwb3NbXQogIE1hZXN0cm9zICAgICAgTWFlc3Ryb3NbXQp9Cgptb2RlbCBFc3RhZG8gewogIEVzdGFkb19pZCAgSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTm9tYnJlICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIKICBFamVyY2ljaW9zIEVqZXJjaWNpb3NbXQp9Cgptb2RlbCBHcmFkbyB7CiAgR3JhZG9faWQgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBOaXZlbCAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcgogIEdydXBvcyAgIEdydXBvc1tdCn0KCm1vZGVsIEdydXBvcyB7CiAgR3J1cG9zX2lkICAgSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgRXNjdWVsYV9pZCAgSW50PwogIE5vbWJyZUdydXBvIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcgogIE1hZXN0cm9faWQgIEludD8KICBUdXJub19pZCAgICBJbnQ/CiAgR3JhZG9faWQgICAgSW50PwogIEFsdW1ub3MgICAgIEFsdW1ub3NbXQogIEVqZXJjaWNpb3MgIEVqZXJjaWNpb3NbXQogIEVzY3VlbGEgICAgIEVzY3VlbGE/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbRXNjdWVsYV9pZF0sIHJlZmVyZW5jZXM6IFtFc2N1ZWxhX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgR3JhZG8gICAgICAgR3JhZG8/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtHcmFkb19pZF0sIHJlZmVyZW5jZXM6IFtHcmFkb19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIE1hZXN0cm9zICAgIE1hZXN0cm9zPyAgICBAcmVsYXRpb24oZmllbGRzOiBbTWFlc3Ryb19pZF0sIHJlZmVyZW5jZXM6IFtVc3VhcmlvX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgVHVybm8gICAgICAgVHVybm8/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtUdXJub19pZF0sIHJlZmVyZW5jZXM6IFtUdXJub19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCBJbmNpc29zIHsKICBJbmNpc29zX2lkICAgSW50ICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTG9Tb2xpY2l0YWRvIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcgogIEVqZXJjaWNpb0lEICBJbnQ/CiAgRWplcmNpY2lvcyAgIEVqZXJjaWNpb3M/ICBAcmVsYXRpb24oZmllbGRzOiBbRWplcmNpY2lvSURdLCByZWZlcmVuY2VzOiBbRWplcmNpY2lvc19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIFJlc3B1ZXN0YXMgICBSZXNwdWVzdGFzW10KfQoKbW9kZWwgTWFlc3Ryb3MgewogIFVzdWFyaW9faWQgSW50ICAgICAgICAgIEBpZAogIEVzY3VlbGFfaWQgSW50PwogIEVqZXJjaWNpb3MgRWplcmNpY2lvc1tdCiAgR3J1cG9zICAgICBHcnVwb3NbXQogIEVzY3VlbGEgICAgRXNjdWVsYT8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtFc2N1ZWxhX2lkXSwgcmVmZXJlbmNlczogW0VzY3VlbGFfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBVc3VhcmlvcyAgIFVzdWFyaW9zICAgICBAcmVsYXRpb24oZmllbGRzOiBbVXN1YXJpb19pZF0sIHJlZmVyZW5jZXM6IFtVc3Vhcmlvc19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCBSZXNwdWVzdGFzIHsKICBBbHVtbm9JRCAgSW50CiAgSW1hZ2VuICAgIFN0cmluZz8gQGRiLlZhckNoYXIKICBQdW50YWplICAgSW50PwogIFJlc3B1ZXN0YSBTdHJpbmc/IEBkYi5WYXJDaGFyCiAgSW5jaXNvX2lkIEludAogIEFsdW1ub3MgICBBbHVtbm9zIEByZWxhdGlvbihmaWVsZHM6IFtBbHVtbm9JRF0sIHJlZmVyZW5jZXM6IFtVc3VhcmlvX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgSW5jaXNvcyAgIEluY2lzb3MgQHJlbGF0aW9uKGZpZWxkczogW0luY2lzb19pZF0sIHJlZmVyZW5jZXM6IFtJbmNpc29zX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCgogIEBAaWQoW0FsdW1ub0lELCBJbmNpc29faWRdKQp9Cgptb2RlbCBTdXBlckFkbWluIHsKICBVc3VhcmlvX2lkIEludCAgICAgIEBpZAogIFVzdWFyaW9zICAgVXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW1VzdWFyaW9faWRdLCByZWZlcmVuY2VzOiBbVXN1YXJpb3NfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKfQoKbW9kZWwgVGlwb0VqZXJjaWNpbyB7CiAgVGlwb19pZCAgICBJbnQgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBOb21icmUgICAgIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcgogIEVqZXJjaWNpb3MgRWplcmNpY2lvc1tdCn0KCm1vZGVsIFR1cm5vIHsKICBUdXJub19pZCAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIEhvcmFyaW8gICAgICAgU3RyaW5nICAgICAgICAgIEBkYi5WYXJDaGFyCiAgQWRtaW5pc3RyYWRvciBBZG1pbmlzdHJhZG9yW10KICBHcnVwb3MgICAgICAgIEdydXBvc1tdCn0KCm1vZGVsIFVzdWFyaW9zIHsKICBVc3Vhcmlvc19pZCAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTm9tYnJlcyAgICAgICBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcgogIEFwZWxsaWRvcyAgICAgU3RyaW5nICAgICAgICAgQGRiLlZhckNoYXIKICBDb3JyZW8gICAgICAgIFN0cmluZyAgICAgICAgIEB1bmlxdWUgQGRiLlZhckNoYXIKICBDb250cmFzZW5hICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyCiAgQWRtaW5pc3RyYWRvciBBZG1pbmlzdHJhZG9yPwogIEFsdW1ub3MgICAgICAgQWx1bW5vcz8KICBNYWVzdHJvcyAgICAgIE1hZXN0cm9zPwogIFN1cGVyQWRtaW4gICAgU3VwZXJBZG1pbj8KfQo=",
  "inlineSchemaHash": "37997a14246ce05a9868bc9d2fd9d9870c3b63d7d613126b7bf03f32925a8e46",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Administrador\":{\"dbName\":null,\"fields\":[{\"name\":\"Usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escuela\",\"relationName\":\"AdministradorToEscuela\",\"relationFromFields\":[\"Escuela_id\"],\"relationToFields\":[\"Escuela_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Turno\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"AdministradorToTurno\",\"relationFromFields\":[\"Turno_id\"],\"relationToFields\":[\"Turno_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"AdministradorToUsuarios\",\"relationFromFields\":[\"Usuario_id\"],\"relationToFields\":[\"Usuarios_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Alumnos\":{\"dbName\":null,\"fields\":[{\"name\":\"Usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"AlumnosToGrupos\",\"relationFromFields\":[\"Grupo_id\"],\"relationToFields\":[\"Grupos_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"AlumnosToUsuarios\",\"relationFromFields\":[\"Usuario_id\"],\"relationToFields\":[\"Usuarios_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Respuestas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Respuestas\",\"relationName\":\"AlumnosToRespuestas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ejercicios\":{\"dbName\":null,\"fields\":[{\"name\":\"Ejercicios_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreEjercicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaestroID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GrupoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoEjercicio_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaPublicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaLimite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estado_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estado\",\"relationName\":\"EjerciciosToEstado\",\"relationFromFields\":[\"Estado_id\"],\"relationToFields\":[\"Estado_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"EjerciciosToGrupos\",\"relationFromFields\":[\"GrupoID\"],\"relationToFields\":[\"Grupos_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maestros\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Maestros\",\"relationName\":\"EjerciciosToMaestros\",\"relationFromFields\":[\"MaestroID\"],\"relationToFields\":[\"Usuario_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoEjercicio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoEjercicio\",\"relationName\":\"EjerciciosToTipoEjercicio\",\"relationFromFields\":[\"TipoEjercicio_id\"],\"relationToFields\":[\"Tipo_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Incisos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Incisos\",\"relationName\":\"EjerciciosToIncisos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Escuela\":{\"dbName\":null,\"fields\":[{\"name\":\"Escuela_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Administrador\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Administrador\",\"relationName\":\"AdministradorToEscuela\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"EscuelaToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maestros\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Maestros\",\"relationName\":\"EscuelaToMaestros\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Estado\":{\"dbName\":null,\"fields\":[{\"name\":\"Estado_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ejercicios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ejercicios\",\"relationName\":\"EjerciciosToEstado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Grado\":{\"dbName\":null,\"fields\":[{\"name\":\"Grado_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nivel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"GradoToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"Grupos_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreGrupo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maestro_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grado_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alumnos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Alumnos\",\"relationName\":\"AlumnosToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ejercicios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ejercicios\",\"relationName\":\"EjerciciosToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escuela\",\"relationName\":\"EscuelaToGrupos\",\"relationFromFields\":[\"Escuela_id\"],\"relationToFields\":[\"Escuela_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grado\",\"relationName\":\"GradoToGrupos\",\"relationFromFields\":[\"Grado_id\"],\"relationToFields\":[\"Grado_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maestros\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Maestros\",\"relationName\":\"GruposToMaestros\",\"relationFromFields\":[\"Maestro_id\"],\"relationToFields\":[\"Usuario_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Turno\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"GruposToTurno\",\"relationFromFields\":[\"Turno_id\"],\"relationToFields\":[\"Turno_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Incisos\":{\"dbName\":null,\"fields\":[{\"name\":\"Incisos_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoSolicitado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EjercicioID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ejercicios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ejercicios\",\"relationName\":\"EjerciciosToIncisos\",\"relationFromFields\":[\"EjercicioID\"],\"relationToFields\":[\"Ejercicios_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Respuestas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Respuestas\",\"relationName\":\"IncisosToRespuestas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Maestros\":{\"dbName\":null,\"fields\":[{\"name\":\"Usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ejercicios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ejercicios\",\"relationName\":\"EjerciciosToMaestros\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"GruposToMaestros\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Escuela\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escuela\",\"relationName\":\"EscuelaToMaestros\",\"relationFromFields\":[\"Escuela_id\"],\"relationToFields\":[\"Escuela_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"MaestrosToUsuarios\",\"relationFromFields\":[\"Usuario_id\"],\"relationToFields\":[\"Usuarios_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Respuestas\":{\"dbName\":null,\"fields\":[{\"name\":\"AlumnoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Imagen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Puntaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Respuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Inciso_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alumnos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Alumnos\",\"relationName\":\"AlumnosToRespuestas\",\"relationFromFields\":[\"AlumnoID\"],\"relationToFields\":[\"Usuario_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Incisos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Incisos\",\"relationName\":\"IncisosToRespuestas\",\"relationFromFields\":[\"Inciso_id\"],\"relationToFields\":[\"Incisos_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"AlumnoID\",\"Inciso_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SuperAdmin\":{\"dbName\":null,\"fields\":[{\"name\":\"Usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuarios\",\"relationName\":\"SuperAdminToUsuarios\",\"relationFromFields\":[\"Usuario_id\"],\"relationToFields\":[\"Usuarios_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TipoEjercicio\":{\"dbName\":null,\"fields\":[{\"name\":\"Tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ejercicios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ejercicios\",\"relationName\":\"EjerciciosToTipoEjercicio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Turno\":{\"dbName\":null,\"fields\":[{\"name\":\"Turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Horario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Administrador\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Administrador\",\"relationName\":\"AdministradorToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"GruposToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"Usuarios_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nombres\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Apellidos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Administrador\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Administrador\",\"relationName\":\"AdministradorToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alumnos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Alumnos\",\"relationName\":\"AlumnosToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Maestros\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Maestros\",\"relationName\":\"MaestrosToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SuperAdmin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SuperAdmin\",\"relationName\":\"SuperAdminToUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

