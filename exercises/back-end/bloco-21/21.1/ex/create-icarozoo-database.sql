-- Create IcaroZoo Database
DROP SCHEMA IF EXISTS IcaroZoo;
CREATE SCHEMA IcaroZoo;
USE IcaroZoo;

-- Create Gerente Table
CREATE TABLE gerente(
	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gerente_nome VARCHAR(255) NOT NULL
);

-- Create Cuidador Table
CREATE TABLE cuidador(
	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cuidador_nome VARCHAR(255) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

-- Create Animal Table
CREATE TABLE animal(
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    animal_nome VARCHAR(255) NOT NULL,
    especie VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    idade INT NOT null,
    localização VARCHAR(255)
);

-- Create Animal x Cuidador Table
CREATE TABLE animal_cuidador(
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
);

