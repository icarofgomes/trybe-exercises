SELECT COUNT(*) FROM PecasFornecedores.Fornecedores WHERE `code` LIKE '%F%';
SELECT * FROM PecasFornecedores.Fornecimentos
	WHERE Preco > 10 AND Preco < 40
    ORDER BY Preco ASC;
SELECT COUNT(*) FROM PecasFornecedores.Vendas
	WHERE order_date BETWEEN '2018-04-15 00:00:00' AND '2019-07-30 23:59:59';