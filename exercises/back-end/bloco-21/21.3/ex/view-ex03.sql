USE sakila;

CREATE VIEW address_info AS(
SELECT
ad.address_id AS address_id,
ad.address AS address,
ad.district AS district,
ci.city_id AS city_id,
ci.city AS city
FROM address AS ad
INNER JOIN city AS ci
ON ad.city_id = ci.city_id
ORDER BY city);

SELECT * FROM address_info;