SELECT rating, AVG(length) AS average
FROM sakila.film
GROUP BY rating
HAVING average BETWEEN (115) AND (121.5)
ORDER BY average DESC;