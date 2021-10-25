SELECT MAX(SALARY) FROM hr.employees;
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
SELECT JOB_ID, AVG(SALARY) AS 'Average'
FROM hr.employees GROUP BY JOB_ID ORDER BY Average;
SELECT SUM(SALARY) FROM hr.employees;
SELECT
	ROUND(MAX(SALARY), 2) AS 'Maior Salário',
    ROUND(MIN(SALARY), 2) AS 'Menor Salário',
    ROUND(SUM(SALARY), 2) AS 'Soma dos Salários',
    ROUND(AVG(SALARY), 2) AS 'Média dos Salários'
    FROM hr.employees;