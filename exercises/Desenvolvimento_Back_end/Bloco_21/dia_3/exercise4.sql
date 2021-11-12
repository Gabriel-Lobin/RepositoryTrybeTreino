-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila .
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS
SELECT 
F.title,
F.language_id,
L.name
FROM
film AS F
INNER JOIN
language AS L
ON L.language_id = F.language_id;









