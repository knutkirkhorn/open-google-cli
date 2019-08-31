const meow = require('meow');
const openGoogle = require('open-google');

const cli = meow(`
        Usage
          $ open-google <search query>
        Examples
          $ free-space Kirkhorn
          $ free-space "Knut Kirkhorn"
          $ free-space "example search"
`);

const searchQuery = cli.input[0];

if (cli.input.length === 1) {
    openGoogle(searchQuery);
}