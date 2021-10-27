SELECT 
    the.id,
    the.`name`,
    the.location,
    mov.title,
    mov.director,
    mov.year,
    mov.length_minutes
FROM
    Pixar.Theater AS the
        RIGHT JOIN
    Pixar.Movies AS mov ON mov.theater_id = the.id
ORDER BY the.name;