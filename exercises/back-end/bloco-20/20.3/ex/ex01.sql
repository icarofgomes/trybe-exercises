-- Create Two triggers 
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER set_release_year
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER add_movie_log
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- Insert a movie
INSERT INTO BeeMovies.movies(ticket_price) VALUES (15);