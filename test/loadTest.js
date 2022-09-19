import http from 'k6/http';
import { sleep } from 'k6';
import endpoints from "./endpoints.js"

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5m', target: 100 },
    { duration: '10m', target: 100 },
    { duration: '5m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<50']
  }
};


export default function () {
  const getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  const res = http.get(`http://localhost:8080/products?page=${getRandomInt(100000, 100000)}&count=5`);
  // const res = http.get(`http://localhost:8080/products/${getRandomInt(100000, 1000000)}`);
  // const res = http.get(`http://localhost:8080/products/${getRandomInt(100000, 1000000)}/styles`);
  // const res = http.get(`http://localhost:8080/products/${getRandomInt(100000, 1000000)}/related`);
  check(res, { 'status was 200': (res) => res.status == 200 });

  sleep(1);
}

