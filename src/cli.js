#! /usr/bin/env node

import meow from 'meow';
import checkExpect from './lib/';

const cli = meow({
  help: [
    'Usage',
    '  $ check-expect [input]',
    '',
    'Options',
    '  --foo  Lorem ipsum. [Default: false]',
    '',
    'Examples',
    '  $ check-expect',
    '  unicorns & rainbows',
    '  $ check-expect ponies',
    '  ponies & rainbows'
  ]
});

const input = cli.input || [];
const flags = cli.flags || {};

console.log(cli.help); // eslint-disable-line

checkExpect(input, flags);
