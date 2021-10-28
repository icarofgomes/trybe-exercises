USE IcaroZoo;
SELECT * FROM IcaroZoo.animal_cuidador;

INSERT INTO IcaroZoo.animal(animal_nome, especie, genero, idade, localização)
	VALUES ('Naruto', 'Sapo', 'Masculino', 17, 'Laguinho');
    
INSERT INTO IcaroZoo.gerente(gerente_nome)
	VALUES ('Hokage');
    
INSERT INTO IcaroZoo.cuidador(cuidador_nome, gerente_id)
	VALUES ('Kakashi', 1);

INSERT INTO IcaroZoo.animal_cuidador(cuidador_id, animal_id)
	VALUES (1, 1);
