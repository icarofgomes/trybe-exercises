SELECT * FROM sakila.customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;