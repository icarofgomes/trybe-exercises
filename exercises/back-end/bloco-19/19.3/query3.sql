SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;