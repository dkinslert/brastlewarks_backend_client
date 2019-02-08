CREATE DATABASE ng_brastlewarks;

use ng_brastlewarks;

CREATE TABLE brastlewarks (
	id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	thumbnail VARCHAR(255),
	pictures VARCHAR(255),
	age INT(11),
	weight DECIMAL,
	heihgt DECIMAL,
	hair_color VARCHAR(255),
	professions VARCHAR(255),
	friends VARCHAR(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);