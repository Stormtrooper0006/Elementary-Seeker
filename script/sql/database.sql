-- create elementary_seeker database
-- create table
CREATE TABLE regions (
	id INT PRIMARY KEY AUTO_INCREMENT,
    province TEXT,
    regency TEXT
);

CREATE TABLE schools (
	id INT PRIMARY KEY AUTO_INCREMENT,
    region_id INT,
    name TEXT,
    description TEXT,
    contact_number TEXT,
    address TEXT,
    website_link TEXT,
    FOREIGN KEY (region_id) REFERENCES regions(id)
);

CREATE TABLE photos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    school_id INT,
    photo_url1 TEXT,
    photo_url2 TEXT,
    photo_url3 TEXT,
    FOREIGN KEY (school_id) REFERENCES schools(id)
);