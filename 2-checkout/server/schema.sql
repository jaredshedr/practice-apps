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
  zip VARCHAR(255),
  phone VARCHAR(255),
  credit_card VARCHAR(255),
  expiration VARCHAR(255),
  cvv VARCHAR(255),
  cc_zip VARCHAR(255),
  PRIMARY KEY (session_id)
);