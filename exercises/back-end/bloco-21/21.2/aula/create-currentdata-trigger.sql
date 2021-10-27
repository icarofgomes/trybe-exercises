USE normalization;

DELIMITER $$

CREATE TRIGGER set_current_date
    BEFORE INSERT ON employee
    FOR EACH ROW
BEGIN
	SET NEW.create_date = CURRENT_DATE();
END $$
DELIMITER ;