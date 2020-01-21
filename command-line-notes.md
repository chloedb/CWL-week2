# Command line arguments

Command line arguments are strings of text used to pass additional information to a program when an application is run through the command line interface (CLI) of an operating system.

## Why use CLA's?
- Pass info to an application before it starts
- CLA's are passed as strings, which can easily be converted to other data types.
- No limits on # of CLA's

## Passing CLA's in Node.js

### Using process.argv
Here, we use a "process.argv" array to pass arguments

#### Code sample:
In JS file:

`for (let j = 0; j < process.argv.length; j++){
    console.log(j + ' -> ' + (process.argv[j]));
}`

In command line:
`$ node file.js tom jack 43`

