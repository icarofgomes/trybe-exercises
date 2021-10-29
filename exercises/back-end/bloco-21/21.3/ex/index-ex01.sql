USE sakila;

CREATE FULLTEXT INDEX index_category ON category(`name`);
DROP INDEX index_category ON category;

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';