SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

SELECT COUNT(name) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

SELECT * FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
