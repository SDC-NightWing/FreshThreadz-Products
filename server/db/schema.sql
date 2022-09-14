DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products

-- products

CREATE TABLE products (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  slogan text DEFAULT NULL,
  description text DEFAULT NULL,
  category text DEFAULT NULL,
  default_price int DEFAULT 0
);


-- features

CREATE TABLE features (
  id bigserial PRIMARY KEY,
  product_id bigint NOT NULL references products(id),
  feature text DEFAULT NULL,
  value text DEFAULT NULL
);


-- styles

CREATE TABLE styles (
  id bigserial PRIMARY KEY,
  productId bigint NOT NULL references products(id),
  name text,
  original_price int DEFAULT NULL,
  sale_price int DEFAULT NULL,
  default_style int DEFAULT 0
);

-- photos

CREATE TABLE photos (
  id bigserial PRIMARY KEY,
  style_id bigint NOT NULL references styles(id),
  thumbnail_url text DEFAULT NULL,
  url text DEFAULT NULL
);


-- inventory

CREATE TABLE inventory (
  id bigserial PRIMARY KEY,
  style_id bigint NOT NULL references styles(id),
  size text DEFAULT NULL,
  quantity int DEFAULT 0
);

-- related

CREATE TABLE related (
  id bigserial PRIMARY KEY,
  current_product_id bigint references products(id),
  related_product_id bigint references products(id)
);
