SELECT film_id, title,
IF( title = 'ACE GOLDFINGER', 'Conheço esse filme', 'Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;