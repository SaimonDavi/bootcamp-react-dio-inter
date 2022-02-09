CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CÓDIGO PARA CRIAÇÃO DE UMA TABELA
CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

-- CÓDIGO PARA CRIAÇÃO DE UM USUÁRIO
-- INSERT INTO application_user(username, password) VALUES ('Saimon', crypt('admin','my_salt'));
INSERT INTO application_user(username, password) VALUES ('Saimon', 'admin');