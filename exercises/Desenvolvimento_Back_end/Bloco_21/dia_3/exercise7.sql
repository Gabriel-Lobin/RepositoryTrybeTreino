-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

SHOW COLUMNS FROM hr.locations;

ALTER TABLE locations CHANGE street_address address VARCHAR(40);
