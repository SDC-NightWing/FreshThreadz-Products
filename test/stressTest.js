import http from 'k6/http';
import k6example from 'https://raw.githubusercontent.com/grafana/k6/master/samples/thresholds_readme_example.js';
import { sleep } from 'k6';
import endpoints from "./endpoints.js"

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
  thresholds: {
    http_req_duration: ['p(99)<50']
  }
};

export function handleSummary(data) {
  return {
    "test/testData/summaryPage.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true })
  };
}


export default function () {
  const responses = http.batch(endpoints);

  sleep(1);
}
