-- Database: notasdb

-- DROP DATABASE IF EXISTS notasdb;

CREATE DATABASE notasdb
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

CREATE SCHEMA IF NOT EXISTS public
    AUTHORIZATION pg_database_owner;

COMMENT ON SCHEMA public
    IS 'standard public schema';

GRANT USAGE ON SCHEMA public TO PUBLIC;

GRANT ALL ON SCHEMA public TO pg_database_owner;
-- Table: public.cores

-- DROP TABLE IF EXISTS public.cores;

CREATE TABLE IF NOT EXISTS public.cores
(
    id integer NOT NULL,
    cor text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT cores_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cores
    OWNER to postgres;
-- Table: public.notas

-- DROP TABLE IF EXISTS public.notas;

CREATE TABLE IF NOT EXISTS public.notas
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    titulo text COLLATE pg_catalog."default" NOT NULL,
    conteudo text COLLATE pg_catalog."default" NOT NULL,
    cor_id integer,
    favorito boolean NOT NULL,
    CONSTRAINT notas_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.notas
    OWNER to postgres;