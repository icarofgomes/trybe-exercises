USE sakila;

SELECT * FROM address;

CREATE INDEX postal_code_index ON address(postal_code);
DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';