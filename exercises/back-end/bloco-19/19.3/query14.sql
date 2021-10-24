SELECT
YEAR(rental_date) as year,
MONTH(rental_date) as mounth,
DAY(rental_date) as day,
HOUR(rental_date) as hour,
MINUTE(rental_date) as minute,
SECOND(rental_date) as second
FROM sakila.rental
WHERE rental_id = 10330;