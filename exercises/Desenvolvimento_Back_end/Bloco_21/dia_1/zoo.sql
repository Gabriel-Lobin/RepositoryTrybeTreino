CREATE SCHEMA IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animais (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
    especie VARCHAR(10) NOT NULL,
    sexo VARCHAR(5) NOT NULL ,
    idade INT NOT NULL,
    localizacao VARCHAR(10) NOT NULL
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



INSERT INTO animais (nome, especie, sexo, idade, localizacao)
VALUES 
('margarida', 'hipopotamo', 'femea', 6, 'noroeste'),
('mark', 'leão', 'macho', 12, 'sul'),
('zé', 'chipanze', 'macho', 20, 'leste'),
('monica', 'chipanze', 'femea', 25, 'leste'),
('didi', 'zebra', 'macho', 4, 'oeste'),
('mama', 'cobra', 'femea', 16, 'sudeste'),
('binho', 'tartaruga', 'macho', 125, 'norte'),
('binha', 'tartaruga', 'femea', 120, 'norte'),
('biscoito', 'elefante', 'macho', 45, 'sudoeste'),
('mica', 'lontra', 'femea', 15, 'nordeste');

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





