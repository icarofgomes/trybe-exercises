(SELECT first_name, last_name FROM sakila.actor LIMIT 60)
UNION
(SELECT first_name, last_name FROM sakila.customer LIMIT 60)
ORDER BY first_name
LIMIT 15 OFFSET 45;