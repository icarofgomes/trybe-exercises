(SELECT first_name FROM sakila.actor ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;