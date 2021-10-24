SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = 25
WHERE (length > 100) AND (rating IN ('P', 'PG', 'PG-13')) AND (replacement_cost > 20);