#!/usr/bin/env node

const minimist= require('minimist');
const args = minimist(process.argv.slice(2))
require('../src/cli')(args);
