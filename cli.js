#!/usr/bin/env node

import meow from 'meow';
import openGoogle from 'open-google';

const cli = meow(`
	Usage
	  $ open-google <search query>

	Examples
	  $ open-google Kirkhorn
	  $ open-google Knut Kirkhorn
	  $ open-google example search
`, {importMeta: import.meta});

const searchQuery = cli.input.join(' ');

if (cli.input.length === 0) {
	console.error('Specify a Google search to open');
	process.exit(1);
}

openGoogle(searchQuery);
