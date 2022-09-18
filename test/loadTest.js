import http from 'k6/http';
import k6example from 'https://raw.githubusercontent.com/grafana/k6/master/samples/thresholds_readme_example.js';
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
    http_req_duration: ['p(95)<50']
  }
};

export default function () {
  const responses = http.batch(endpoints);

  sleep(1);
}


