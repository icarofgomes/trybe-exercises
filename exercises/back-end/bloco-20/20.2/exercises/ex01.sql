SELECT mov.title, box.domestic_sales, box.international_sales
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS mov
ON box.movie_id = mov.id;