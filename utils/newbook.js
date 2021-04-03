const fs = require('fs');
const { DateTime } = require('luxon');

const frontmatter = `---
layout: layouts/book.njk
title: ${process.argv[2] || ''}
author: 
ISBN: 
buy: 
cover: 
date: ${DateTime.fromJSDate(new Date()).toFormat('yyyy-LL-dd')}
---

`;

fs.writeFileSync(
  `src/books/${
    process.argv[2]
      ? process.argv[2].toLowerCase().replace(/ /g, '-')
      : 'new-book'
  }.md`,
  frontmatter,
);
