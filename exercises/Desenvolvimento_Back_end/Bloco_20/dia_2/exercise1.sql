-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Pixar.BoxOffice AS B
        INNER JOIN
    Pixar.Movies AS M ON M.id = B.movie_id;
    
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme 
-- que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT 
    COUNT(M.title) AS Contagem
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS B ON M.id = B.movie_id
        AND B.international_sales > B.domestic_sales;
        
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT 
    M.title, B.rating
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS B ON M.id = B.movie_id
ORDER BY rating DESC;
   
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e,
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
   
SELECT 
    *
FROM
    Pixar.Theater AS T
        LEFT JOIN
    Pixar.Movies AS M ON M.theater_id = T.id
ORDER BY name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente,
-- os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    *
FROM
    Pixar.Theater AS T
        RIGHT JOIN
    Pixar.Movies AS M ON M.theater_id = T.id
ORDER BY name;
    
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
    
SELECT 
    MR.title, MR.rating
FROM
    (SELECT 
        M.title, B.rating
    FROM
        Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id) AS MR
WHERE
    MR.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT 
    MR.rating
FROM
    (SELECT 
        M.title, M.year, B.rating
    FROM
        Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id) AS MR
WHERE
    MR.year > 2009;
    
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT 
    name, location
FROM
    Pixar.Theater AS T
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies AS M
        WHERE
            T.id = M.theater_id);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT 
    name, location
FROM
    Pixar.Theater AS T
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies AS M
        WHERE
            T.id = M.theater_id);
            
-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT 
    M.*, B.rating
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.Theater AS T ON T.id = M.theater_id
        INNER JOIN
    Pixar.BoxOffice AS B ON M.id = B.movie_id
WHERE
    B.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT 
    M1.title, M1.length_minutes, M2.title, M2.length_minutes
FROM
    Pixar.Movies AS M1, Pixar.Movies AS M2
WHERE M1.director = M2.director
AND M1.title <> M2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que 
-- arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT 
    title
FROM
    (SELECT 
        *
    FROM
        Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B ON B.movie_id = M.id) AS MB
WHERE
    domestic_sales > 500000000 < international_sales
AND length_minutes > 110;

