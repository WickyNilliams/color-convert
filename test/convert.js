import convert from "../convert/index.js";
import assert from "assert";
import fixtures from "./fixtures/convert.js";
import { test } from 'node:test';

function round(arr) {
  return arr.map(Math.round)
}

function equal(actual, expected) {
  if (!Array.isArray(expected)) {
    assert.equal(actual, expected);
  } else {
    assert.deepEqual(round(actual), expected);
  }
}

// dynamically create tests for hwb...
for(var angle = 0; angle <= 360; angle ++) {
  // all extreme value should give black, white or grey
  fixtures.hwb.rgb.push([[angle, 0, 100], [0, 0, 0]]);
  fixtures.hwb.rgb.push([[angle, 100, 0], [255, 255, 255]]);
  fixtures.hwb.rgb.push([[angle, 100, 100], [128, 128, 128]]);
}

// run tests
for (var from in fixtures) {
  for (var to in fixtures[from]) {
    test(`converting: ${from}2${to}`, () => {
      var conversion = convert[from][to];
      fixtures[from][to].forEach(function(color) {
        equal(conversion(color[0]), color[1]);
      });
    });
  }
}
