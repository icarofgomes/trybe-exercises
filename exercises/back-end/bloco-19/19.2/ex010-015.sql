SELECT `Name`, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT `Name` FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT `Name` FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT(
	'Existem ',
    COUNT(*),
    ' cientistas na tabela Scientists.') AS 'text'
    FROM Scientists.Scientists;