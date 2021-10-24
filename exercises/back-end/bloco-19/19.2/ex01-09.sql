SELECT "This is SQL Exercise, Practice and Solution";
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT (3 + 7) + 5;
SELECT * FROM Scientists.Scientists;
SELECT `Name` AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT `Name` FROM Scientists.Scientists ORDER BY `Name` ASC;
SELECT `Name` FROM Scientists.Projects ORDER BY `Name` DESC;
SELECT CONCAT(
	'O Projeto ',
    `Name`,
    'precisou de',
    Hours,
    'horas para ser concluído'
) AS 'Text' FROM Scientists.Projects; 