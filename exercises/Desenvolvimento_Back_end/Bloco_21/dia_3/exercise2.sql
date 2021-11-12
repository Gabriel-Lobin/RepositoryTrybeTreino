-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila .
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes.
-- Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
 
 CREATE VIEW film_info AS  
 SELECT 
	A.actor_id,
	CONCAT(A.first_name, ' ', A.last_name) AS `actor`,
    F.title
 FROM 
 actor AS A
 INNER JOIN
 film_actor AS FA
 ON FA.actor_id = A.actor_id
  INNER JOIN
 film AS F
 ON F.film_id = FA.film_id
 ORDER BY actor;
