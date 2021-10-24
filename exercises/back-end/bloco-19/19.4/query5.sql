SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET first_name = (
CASE staff_id WHEN 3 THEN 'Icaro'
			  WHEN 6 THEN 'Teste 1'
              WHEN 7 THEN 'Teste 2'
			ELSE first_name
END);