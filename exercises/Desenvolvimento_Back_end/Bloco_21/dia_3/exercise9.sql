-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados


SHOW COLUMNS FROM hr.countries;

ALTER TABLE countries CHANGE country_name country VARCHAR(40);