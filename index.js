const fs = require('fs');

text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`

fs.writeFile('log.svg', text, (err) =>
  err ? console.error(err) : console.log('Success!')
);



