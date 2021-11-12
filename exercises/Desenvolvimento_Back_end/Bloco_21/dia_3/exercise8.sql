-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

SHOW COLUMNS FROM hr.regions;

ALTER TABLE regions CHANGE region_name region VARCHAR(25);



