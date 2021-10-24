SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date LIKE '2005-05-25%';

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-25 00:00:00' AND '2005-05-25 23:59:59';