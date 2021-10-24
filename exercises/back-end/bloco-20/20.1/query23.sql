SELECT rating, SUM(replacement_cost) AS total_cost
FROM sakila.film
GROUP by rating
HAVING total_cost > 3950.50
ORDER BY total_cost;