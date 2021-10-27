SELECT box.rating
FROM BoxOffice AS box
INNER JOIN Movies AS mov
ON box.movie_id = mov.id
WHERE year > 2009;

SELECT rating FROM BoxOffice
	WHERE movie_id IN (SELECT id FROM Movies WHERE year > 2009);