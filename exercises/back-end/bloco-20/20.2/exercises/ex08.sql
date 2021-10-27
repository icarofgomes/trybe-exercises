SELECT `name`, `location` FROM Theater AS the
 WHERE EXISTS(
	SELECT * FROM Movies
		WHERE theater_id = the.id
 );