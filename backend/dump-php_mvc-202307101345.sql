--
-- PostgreSQL database dump
--

-- Dumped from database version 13.11
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

-- Started on 2023-07-10 13:45:36 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3030 (class 1262 OID 16384)
-- Name: php_mvc; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE php_mvc WITH TEMPLATE = template0 ENCODING = 'LATIN1' LOCALE = 'C';


ALTER DATABASE php_mvc OWNER TO postgres;

\connect php_mvc

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3031 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16386)
-- Name: phinxlog; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phinxlog (
    version bigint NOT NULL,
    migration_name character varying(100),
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    breakpoint boolean DEFAULT false NOT NULL
);


ALTER TABLE public.phinxlog OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16401)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255),
    price numeric(9,3),
    quantity integer,
    created timestamp without time zone,
    tax numeric(10,2)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16399)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 16394)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    name character varying(255),
    password character varying(255),
    created timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16392)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3020 (class 0 OID 16386)
-- Dependencies: 200
-- Data for Name: phinxlog; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.phinxlog VALUES (20230223025254, 'UsersMigration', '2023-07-09 20:11:30', '2023-07-09 20:11:30', false);
INSERT INTO public.phinxlog VALUES (20230706151749, 'ProductsMigration', '2023-07-09 20:11:30', '2023-07-09 20:11:30', false);


--
-- TOC entry 3024 (class 0 OID 16401)
-- Dependencies: 204
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (1, 'Produto 2', 260.300, 2, '2023-10-07 04:11:30', 1.50);
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES (2, 'Produto 3', 260.300, 2, '2023-10-07 03:46:13', 1.50);


--
-- TOC entry 3022 (class 0 OID 16394)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (2, '', '', '$2y$10$3b0ePNZPHxmm4pTi6hhfbuobt95II0vNXOQAd7y14osF8hhrMP1gS', '2023-10-07 01:24:09');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (3, 'thaubr284@gmail.com', 'Thauan Almeida 3', '$2y$10$9yKKmAtaqzB12ojZLfjf2ut8TJ6x8FnEcooG2L5e8egMT/RdIAaDm', '2023-10-07 01:24:09');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (4, 'thaubr285@gmail.com', 'Thauan 5', '$2y$10$wPua3wQslAexBgigqJ6ls.Y/YXRaP5XF.FLwXSH.1YPjZpoa0Bo6C', '2023-10-07 01:25:36');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (1, 'jonhdoe@gmail.com', 'Jonh Doe', '$2y$10$qiPF31Pby.trq0B1v2fLjeZbKtmibcayWzqkyxHhtOqj0hGf74gv.', '2023-10-07 01:11:46');


--
-- TOC entry 3032 (class 0 OID 0)
-- Dependencies: 203
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 2, true);


--
-- TOC entry 3033 (class 0 OID 0)
-- Dependencies: 201
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 2885 (class 2606 OID 16391)
-- Name: phinxlog phinxlog_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phinxlog
    ADD CONSTRAINT phinxlog_pkey PRIMARY KEY (version);


--
-- TOC entry 2889 (class 2606 OID 16405)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2887 (class 2606 OID 16398)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2023-07-10 13:45:36 -03

--
-- PostgreSQL database dump complete
--

