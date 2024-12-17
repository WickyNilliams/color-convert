import assert from "assert";
import fixtures from "./fixtures/parse.js";

import rgb from "../parse/rgb.js";
import hex from "../parse/hex.js";
import hsl from "../parse/hsl.js";
import parse from "../parse/index.js";
import { test } from 'node:test';

const parsers = {
  rgb,
  hex,
  hsl,
  parse
};

for (const space in parsers) {
  test(`parsing: ${space}`, () => {
    const parser = parsers[space];
    fixtures[space].forEach(function(color) {
      assert.deepEqual(parser(color[0]), color[1]);
    });
  });
}