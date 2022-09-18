import http from 'k6/http';
import k6example from 'https://raw.githubusercontent.com/grafana/k6/master/samples/thresholds_readme_example.js';
import { sleep } from 'k6';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
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


