USE sakila;

CREATE VIEW movies_languages AS(
SELECT
fil.title AS title,
lan.language_id AS language_id,
lan.`name` AS `language`
FROM film AS fil
INNER JOIN `language` AS lan
ON fil.language_id = lan.language_id
ORDER BY title);

SELECT * FROM movies_languages;
