SELECT * FROM hotel.Books AS b
	WHERE EXISTS(
		SELECT * FROM hotel.Books_Lent
			WHERE b.Id = Books_Lent.book_id
				AND Books_Lent.rental_return_date IS NULL
				AND title LIKE '%lost%'
    );