USE sakila;

CREATE VIEW film_with_categories AS (
SELECT fil.title, cat.category_id, cat.`name`
FROM sakila.film_category AS fct
INNER JOIN sakila.film AS fil
ON fct.film_id = fil.film_id
INNER JOIN sakila.category AS cat
ON fct.category_id = cat.category_id
ORDER BY fil.title);

SELECT * FROM film_with_categories;