SELECT * FROM sakila.actor
WHERE first_name = 'Karl';

SELECT * FROM sakila.film_actor;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'Karl';