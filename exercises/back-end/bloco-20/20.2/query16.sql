SELECT `Name` FROM hotel.Customers AS c
	WHERE NOT EXISTS(
		SELECT * FROM hotel.CarSales
			WHERE c.CustomerId = CarSales.CustomerID
    );