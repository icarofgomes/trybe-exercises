SELECT a.actor_id, a.first_name, fa.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id;