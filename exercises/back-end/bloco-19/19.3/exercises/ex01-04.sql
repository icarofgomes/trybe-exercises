SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'gr%';
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor ASC;
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%n%';
SELECT * FROM PecasFornecedores.Fornecedores WHERE `name` LIKE '%LTDA%' ORDER BY `name` DESC;
