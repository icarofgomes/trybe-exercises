DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;

USE normalization;

CREATE TABLE employee(
	employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    create_date DATE NOT NULL
);

INSERT INTO employee(first_name, last_name, email, phone) VALUES
	('Joseph', 'Rodrigues', 'jo@gmail.com','(35)998552-1445'),
	('André', 'Freeman', 'andre1990@gmail.com',	'(47)99522-4996'),
    ('Cíntia', 'Duval',	'cindy@outlook.com', '(33)99855-4669'),
    ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

CREATE TABLE sector(
	sector_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sector_name VARCHAR(30) NOT NULL
);

INSERT INTO sector(sector_name) VALUES
	('Administração'),
    ('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');
    
CREATE TABLE sector_employee(
	sector_id INT NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY (sector_id) REFERENCES sector(sector_id),
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO sector_employee(sector_id, employee_id) VALUES
	(1, 12),
    (2, 12),
    (3, 13),
    (4, 14),
    (2, 14),
    (5, 15);
