SELECT * FROM hotel.Books AS b
	WHERE NOT EXISTS (
		SELECT * FROM hotel.Books_Lent
			WHERE b.Id = Books_Lent.book_id
	);