-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila .
-- Sua view deve exibir o address_id , o address , o district , o city_id e a city . 
-- Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
SELECT
	A.address_id,
    A.address,
    A.district,
    A.city_id,
    C.city
FROM
address AS A
INNER JOIN
city AS C
ON C.city_id = A.city_id
ORDER BY city;











