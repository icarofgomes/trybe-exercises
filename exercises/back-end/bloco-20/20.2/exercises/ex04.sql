SELECT 
    the.`name`,
    the.location,
    mov.title,
    mov.director,
    mov.`year`,
    mov.length_minutes
FROM Pixar.Theater AS the
LEFT JOIN Pixar.Movies AS mov
ON the.id = mov.theater_id
ORDER BY the.`name`;