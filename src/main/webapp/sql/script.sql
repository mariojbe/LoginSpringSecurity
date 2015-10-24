#use demo
create table conta(
	id int primary key auto_increment,
	usuario varchar(50) not null,
	senha varchar(30) not null,
	nome varchar(50) not null
) 

CREATE TABLE usuarios
(
  usuario character varying(50) NOT NULL,
  senha character varying(50) NOT NULL,
  ativado boolean NOT NULL,
  CONSTRAINT usuarios_pkey PRIMARY KEY (usuario)
);
 
CREATE TABLE autoridades
(
  usuario character varying(50) NOT NULL,
  autoridade character varying(50) NOT NULL,
  CONSTRAINT fk_autoridades_usuarios FOREIGN KEY (usuario)
      REFERENCES usuarios (usuario) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);
 
CREATE UNIQUE INDEX ix_auto_usuario USING btree
ON autoridades (usuario, autoridade);

INSERT INTO usuarios(usuario,senha,ativado)
VALUES ('mario',MD5('123456'), true);
INSERT INTO usuarios(usuario,senha,ativado)
VALUES ('jorge',MD5('123456'), true);
INSERT INTO usuarios(usuario,senha,ativado)
VALUES ('admin',MD5('123456'), true);

INSERT INTO autoridades (usuario, autoridade)
VALUES ('mario', 'ROLE_USER');
INSERT INTO autoridades (usuario, autoridade)
VALUES ('admin', 'ROLE_ADMIN');
INSERT INTO autoridades (usuario, autoridade)
VALUES ('jorge', 'ROLE_USER');

CREATE TABLE persistent_logins (
	username VARCHAR(64) NOT NULL,
	series VARCHAR(64) NOT NULL,
	token VARCHAR(64) NOT NULL,
	last_used TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (series)
)

select * from  persistent_logins







