const BASE_URL = 'http://localhost:8080';

const endpoints = [
  ['GET', `${BASE_URL}/products`],
  ['GET', `${BASE_URL}/products/?page=500&count=50`],
  ['GET', `${BASE_URL}/products/?page=10000&count=50`],
  ['GET', `${BASE_URL}/products/1`],
  ['GET', `${BASE_URL}/products/50000`],
  ['GET', `${BASE_URL}/products/999999`],
  ['GET', `${BASE_URL}/products/1/styles`],
  ['GET', `${BASE_URL}/products/50000/styles`],
  ['GET', `${BASE_URL}/products/999999/styles`],
  ['GET', `${BASE_URL}/products/1/related`],
  ['GET', `${BASE_URL}/products/50000/related`],
  ['GET', `${BASE_URL}/products/999999/related`],
]

export default endpoints;