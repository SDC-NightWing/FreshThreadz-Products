import http from 'k6/http';
import { sleep, check} from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '1m', target: 1 },
    { duration: '2m', target: 1 },
    { duration: '1m', target: 10 },
    { duration: '2m', target: 10 },
    { duration: '1m', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '1m', target: 1000 },
    { duration: '2m', target: 1000 },
    { duration: '4m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<50']
  }
};

export default function () {
  const getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  // const res = http.get(`http://localhost:8080/products?page=${getRandomInt(1e4, 1e5)}&count=5`);
  const res = http.get(`http://localhost:8080/products/${getRandomInt(1e5, 1e6)}`);
  // const res = http.get(`http://localhost:8080/products/${getRandomInt(1e5, 1e6)}/styles`);
  // const res = http.get(`http://localhost:8080/products/${getRandomInt(1e5, 1e6)}/related`);
  check(res, { 'status was 200': (res) => res.status == 200 });

  sleep(1);
}
