-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila .
-- Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo.
-- Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS 
SELECT
    F.title,
    FC.category_id,
    C.name    
FROM
    film AS F
INNER JOIN
	film_category AS FC
    ON FC.film_id = F.film_id
INNER JOIN
	category AS C
    ON C.category_id = FC.category_id
    ORDER BY title;

