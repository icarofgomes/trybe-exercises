SELECT first_name FROM sakila.actor GROUP BY first_name;
SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name;
SELECT rating, AVG(length) FROM sakila.film GROUP BY rating;
SELECT rating, MIN(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, MAX(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP by rating;