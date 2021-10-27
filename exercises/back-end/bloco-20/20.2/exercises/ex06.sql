-- Using INNER JOIN
SELECT mov.title
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS box
ON mov.id = box.movie_id
WHERE box.rating > 7.5;

-- Using SUBSTRINGS
SELECT title FROM Pixar.Movies
	WHERE id IN (SELECT movie_id FROM BoxOffice WHERE rating > 7.5);
