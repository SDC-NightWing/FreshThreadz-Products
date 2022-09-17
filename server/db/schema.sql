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
  default_price int DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
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
  original_price text DEFAULT NULL,
  sale_price text DEFAULT NULL,
  default_style text DEFAULT 0
);

-- photos

CREATE TABLE photos (
  id bigserial PRIMARY KEY,
  styleId bigint NOT NULL references styles(id),
  thumbnail_url text DEFAULT NULL,
  url text DEFAULT NULL
);


-- inventory

CREATE TABLE skus (
  id bigserial PRIMARY KEY,
  styleId bigint NOT NULL references styles(id),
  size text DEFAULT NULL,
  quantity int DEFAULT 0
);

-- related

CREATE TABLE related (
  id bigserial PRIMARY KEY,
  current_product_id bigint references products(id),
  related_product_id bigint
);

-- load data

COPY products(id, name, slogan, description, category, default_price)
FROM '/Users/kathryngao/Desktop/sdc data/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(id, product_id, feature, value)
FROM '/Users/kathryngao/Desktop/sdc data/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles(id, productId, name, original_price, sale_price, default_style)
FROM '/Users/kathryngao/Desktop/sdc data/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos(id, styleId, thumbnail_url, url)
FROM '/Users/kathryngao/Desktop/sdc data/photos.csv'
QUOTE '\'
ESCAPE '"'
DELIMITER ','
CSV HEADER;

COPY skus(id, styleId, size, quantity)
FROM '/Users/kathryngao/Desktop/sdc data/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related(id, current_product_id, related_product_id)
FROM '/Users/kathryngao/Desktop/sdc data/related.csv'
DELIMITER ','
CSV HEADER;

-- index
CREATE INDEX features_productId_index ON features(product_id);

CREATE INDEX style_productId_index ON styles(productId);

CREATE INDEX photos_styleId_index ON photos(styleId);

CREATE INDEX sku_styleId_index ON skus(styleId);

CREATE INDEX related_curr_index ON related(current_product_id);
