import http from 'k6/http';
import k6example from 'https://raw.githubusercontent.com/grafana/k6/master/samples/thresholds_readme_example.js';
import { sleep } from 'k6';
import endpoints from "./endpoints.js"

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 100 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 }, // spike to 1400 users
    { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
    { duration: '10s', target: 100 }, // scale down. Recovery stage.
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<50']
  }
};


export default function () {
  const responses = http.batch(endpoints);

  sleep(1);
}