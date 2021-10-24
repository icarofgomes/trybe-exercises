SELECT p.staff_id, AVG(p.amount), s.first_name, s.last_name
FROM sakila.payment AS p
INNER JOIN sakila.staff AS s ON p.staff_id = s.staff_id
WHERE payment_date BETWEEN '2006-01-01 00:00:00' AND '2006-12-31 23:59:59'
GROUP BY staff_id
ORDER BY first_name;

SELECT stf.first_name, stf.last_name, AVG(pay.amount) AS `Média de pagamento`
FROM sakila.staff AS stf
INNER JOIN sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.first_name , stf.last_name;