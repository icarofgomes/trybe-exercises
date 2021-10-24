-- SUBQUERYS
SELECT address, district, (
	SELECT city FROM sakila.city WHERE city.city_id = sakila.address.city_id
) AS city FROM sakila.address;

-- JOIN
SELECT a.address, a.district, c.city
	FROM sakila.address AS a
    INNER JOIN sakila.city as c
    ON a.city_id = c.city_id;