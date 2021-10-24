SELECT * FROM sakila.film WHERE title LIKE '%ace%';
SELECT * FROM sakila.film WHERE title LIKE '%china';
SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM sakila.film WHERE title LIKE '___gon%' LIMIT 2;
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%' LIMIT 1;
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%' LIMIT 2;
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%' LIMIT 6;
