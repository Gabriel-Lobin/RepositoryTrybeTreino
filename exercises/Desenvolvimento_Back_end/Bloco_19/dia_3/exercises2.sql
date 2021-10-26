SELECT * FROM Scientists.Scientists
WHERE name LIKE '%e%';

SELECT name FROM Scientists.Projects
WHERE name LIKE 'A%'
ORDER BY name;

SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY code;

SELECT * FROM Scientists.Projects
WHERE Code IN('AeH3','Ast3', 'Che1');

SELECT * FROM Scientists.Projects
WHERE Hours > 500;

SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;

SELECT Code, Name FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';

SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';




