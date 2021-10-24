SELECT title, rating, CASE rating
		WHEN 'G' THEN 'Livre para todos os públicos'
        WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS 'Público Alvo'
FROM sakila.film;