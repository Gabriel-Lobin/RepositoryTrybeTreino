CREATE SCHEMA IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE sexo_animal (
	sexo_id INT PRIMARY KEY AUTO_INCREMENT,
    sexo VARCHAR(5) NOT NULL
);

CREATE TABLE localizacoes (
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(10) NOT NULL
);

CREATE TABLE especies (
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie VARCHAR(10) NOT NULL
);

CREATE TABLE animais (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
    especie_id INT NOT NULL,
    sexo_id INT NOT NULL ,
    idade INT NOT NULL,
    localizacao_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especies (especie_id),
    FOREIGN KEY (sexo_id) REFERENCES sexo_animal (sexo_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacoes (localizacao_id)    
);

CREATE TABLE cuidadores (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL    
);

CREATE TABLE gerentes (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL    
);

CREATE TABLE cuidador_gerente (
	cuidador_id INT NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id),
    FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id),
    CONSTRAINT PRIMARY KEY (cuidador_id, gerente_id)
);

CREATE TABLE cuidador_animal (
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais (animal_id),
    CONSTRAINT PRIMARY KEY (cuidador_id, animal_id)
);

INSERT INTO sexo_animal (sexo)
VALUES 
('macho'),
('femea');

INSERT INTO localizacoes (localizacao)
VALUES
('noroeste'),
('norte'),
('nordeste'),
('oeste'),
('leste'),
('sudoeste'),
('sul'),
('sudoete');

INSERT INTO especies (especie)
VALUES 
('hipopotamo'),
('leão'),
('chipanze'),
('zebra'),
('cobra'),
('tartaruga'),
('elefante'),
('lontra');

INSERT INTO animais (nome, especie_id, sexo_id, idade, localizacao_id)
VALUES 
('margarida', 1, 2, 6, 1),
('mark', 2, 1, 12, 7),
('zé', 3, 1, 20, 5),
('monica', 3, 2, 25, 5),
('didi', 4, 1, 4, 4),
('mama', 5, 2, 16, 6),
('binho', 6, 1, 125, 2),
('binha', 6, 2, 120, 2),
('biscoito', 7, 1, 45, 8),
('mica', 8, 2, 15, 3);

INSERT INTO cuidadores (nome)
VALUES
('joão'),
('miguel'),
('rodrigo'),
('joana'),
('maria'),
('mario'),
('diego'),
('luana');

INSERT INTO gerentes (nome)
VALUES
('marina'),
('lunna');

INSERT INTO cuidador_animal (cuidador_id, animal_id)
VALUES
(1,2),
(2,1),
(3,3),
(3,4),
(4,4),
(5,6),
(6,7),
(6,8),
(7,9),
(8,10);

INSERT INTO cuidador_gerente (cuidador_id, gerente_id)
VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(5,2),
(6,2),
(7,2),
(8,2);

