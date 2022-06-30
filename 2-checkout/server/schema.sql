CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  session_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  street_add VARCHAR(255),
  apartment VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip INT,
  credit_card INT,
  expiration INT,
  cvv INT,
  cc_zip INT,
  PRIMARY KEY (session_id)
);