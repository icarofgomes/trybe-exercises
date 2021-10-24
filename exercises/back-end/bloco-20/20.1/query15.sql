SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- DIFERENÇA, PRIMEIRA PELA SEGUNDA
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');
-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');
-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

-- EXTRAIR MEDIDAS DE TEMPO ESPECÍFICOS
SELECT DATE(current_date()); -- YYYY-MM-DD
SELECT YEAR(current_date()); -- Ano
SELECT MONTH(current_date()); -- Mês
SELECT DAY(current_date()); -- Dia
SELECT HOUR(now()); -- Hora
SELECT MINUTE(now()); -- Minuto
SELECT SECOND(now()); -- Segundo