DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products

-- products

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  slogan text DEFAULT NULL,
  description text DEFAULT NULL,
  category text DEFAULT NULL,
  default_price int DEFAULT 0
);


-- features

DROP TABLE IF EXISTS features;

CREATE TABLE features (
  id bigserial PRIMARY KEY,
  product_id bigint NOT NULL references products(id),
  feature text DEFAULT NULL,
  value text DEFAULT NULL
);


-- styles

DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
  id bigserial PRIMARY KEY,
  productId bigint NOT NULL references products(id),
  name text,
  original_price int DEFAULT NULL,
  sale_price int DEFAULT NULL,
  default_style int DEFAULT 0
);

-- photos

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id bigserial PRIMARY KEY,
  style_id bigint NOT NULL references styles(id),
  thumbnail_url text DEFAULT NULL,
  url text DEFAULT NULL
);


-- inventory

DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
  id bigserial PRIMARY KEY,
  style_id bigint NOT NULL references styles(id),
  size text DEFAULT NULL,
  quantity int DEFAULT 0
);

-- related

DROP TABLE IF EXISTS related;

CREATE TABLE related (
  relate_id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  current_product_id bigint references products(id),
  related_product_id bigint references products(id)
);
