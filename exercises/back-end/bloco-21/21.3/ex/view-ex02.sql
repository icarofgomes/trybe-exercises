USE sakila;

CREATE VIEW film_info AS(
SELECT
act.actor_id AS actor_id,
CONCAT(act.first_name, ' ', act.last_name) AS actor,
fil.title AS title
FROM film_actor AS fac
INNER JOIN actor AS act
ON fac.actor_id = act.actor_id
INNER JOIN film AS fil
ON fac.film_id = fil.film_id
ORDER BY actor);

SELECT * FROM film_info;
