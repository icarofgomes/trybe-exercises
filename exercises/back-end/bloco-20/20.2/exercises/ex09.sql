SELECT `name`, `location` FROM Theater AS the
	WHERE NOT EXISTS (
		SELECT * FROM Movies
			WHERE theater_id = the.id
    );