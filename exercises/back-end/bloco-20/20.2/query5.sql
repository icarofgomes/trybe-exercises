SELECT c.first_name, COUNT(a.address) AS 'Quantidade de Endereço'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address
WHERE c.active = 1
GROUP BY first_name
ORDER BY first_name DESC;