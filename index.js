import http from 'k6/http';
import { sleep, check } from 'k6';
//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

/* Options
Global options for your script
stages - Ramping pattern
thresholds - pass/fail criteria for the test
ext - Options used by Load Impact cloud service test name and distribution
*/
export let options = {
  stages: [
    { target: 200, duration: "1m" },
    { target: 200, duration: "3m" },
    { target: 0, duration: "1m" }
  ],
  thresholds: {
    "http_req_duration": ["p(95)<500"],
  },
};

export default function () {
  const response = http.get('http://asciiart.artillery.io:8080');
  check(response, { "Status is Ok(200)": (r) => r.status === 200 })
  sleep(1);
}

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }
