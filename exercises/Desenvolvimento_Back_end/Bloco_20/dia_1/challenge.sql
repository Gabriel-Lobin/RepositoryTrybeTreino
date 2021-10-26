SELECT 
    language_id, MAX(replacement_cost) AS maior_preco
FROM
    sakila.film
GROUP BY language_id;


SELECT 
    rating, SUM(replacement_cost) AS soma
FROM
    sakila.film
GROUP BY rating
ORDER BY `soma` DESC
LIMIT 1;

SELECT 
    DIF.customer_id AS `name`, AVG(DIF.date) AS MEDIA
FROM
    (SELECT 
        *, DATEDIFF(DATE(rental_date), DATE(return_date)) AS `date`
    FROM
        sakila.rental) AS DIF
        GROUP BY customer_id
        ORDER BY MEDIA DESC
        LIMIT 1;


