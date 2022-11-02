'use strict';

const prisma = require('..');
const assert = require('assert').strict;

assert.strictEqual(prisma(), 'Hello from prisma');
console.info("prisma tests passed");
