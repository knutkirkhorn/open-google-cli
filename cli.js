#!/usr/bin/env node

import meow from 'meow';
import openGoogle from 'open-google';

const cli = meow(`
	Usage
	  $ open-google <search query>

	Examples
	  $ free-space Kirkhorn
	  $ free-space "Knut Kirkhorn"
	  $ free-space "example search"
`, {importMeta: import.meta});

const searchQuery = cli.input[0];

if (cli.input.length !== 1) {
	console.error('Specify a Google search to open');
	process.exit(1);
}

openGoogle(searchQuery);
