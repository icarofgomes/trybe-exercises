SELECT cus.name, car.name
	FROM hotel.Cars AS car
		INNER JOIN hotel.Customers AS cus
    WHERE
		EXISTS(
			SELECT * FROM hotel.CarSales
				WHERE CustomerID = cus.CustomerID AND CarID = CarID);
