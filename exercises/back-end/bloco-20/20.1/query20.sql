-- 1
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;
-- 2
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;
-- 3
SELECT rating, AVG(rental_duration) AS 'Average'
FROM sakila.film
GROUP BY rating
ORDER BY Average;
-- 4
SELECT district, COUNT(district) AS 'Quantidade'
FROM sakila.address
GROUP BY district 
ORDER BY Quantidade;
