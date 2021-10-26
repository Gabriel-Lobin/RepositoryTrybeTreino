USE BeeMovies;

DELIMITER $$

CREATE TRIGGER colocaAno
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies (release_year)
    VALUES (YEAR(NOW()));
END $$

DELIMITER ;



