-- Active: 1706315115732@@127.0.0.1@5432@postgres@public


create table tbl_rol
(
  id serial PRIMARY KEY,
  nombre_rol varchar (200),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  activo BOOLEAN DEFAULT TRUE
);

create table tbl_usuarios
(
    nombre_usuario varchar(20) PRIMARY KEY,
    contrasena varchar(20),
    correo_electronico varchar(50),
    nombre varchar (200),
    apellido varchar(200),
    foto_perfil bytea,
    id_rol int REFERENCES tbl_rol(id),
     fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);