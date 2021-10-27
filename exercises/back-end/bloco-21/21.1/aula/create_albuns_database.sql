-- Create Albuns Database
DROP SCHEMA IF EXISTS albuns;
CREATE SCHEMA albuns;
USE albuns;

-- Create Category Table
CREATE TABLE category(
	category_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Create Artist Table
CREATE TABLE artist(
	artist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- Create Albun Table
CREATE TABLE album(
	album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    album_title VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    artist_id INT NOT NULL,
    category_id INT NOT NULL,
    release_date DATE NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

-- Create Songs Table
CREATE TABLE song(
	song_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    song_title VARCHAR(255) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
);
