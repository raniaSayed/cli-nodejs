#!/usr/bin/env node
'use strict';
const program = require("commander");
program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .option('--no-sauce', 'Remove sauce')
  .parse(process.argv);
 
console.log('you ordered a pizza');
if (program.sauce) console.log('  with sauce');
else console.log(' without sauce');
 
console.log('you ordered a pizza with:');
//console.log(program)
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
