function range(val){


}
const program = require("commander");

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-i, --integer <n>','An integer argument',parseInt)
  .option('-f, --float <f>','An float argument',parseFloat)
  .parse(process.argv);

  var int = program.integer;
  var float = program.float;
  console.log('int: %j',int?int:0);
  console.log('float: %j',float?float:0);