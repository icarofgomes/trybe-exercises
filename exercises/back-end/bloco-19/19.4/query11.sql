SELECT * FROM sakila.actor
WHERE first_name = 'Matthew';

SELECT * FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'Matthew';