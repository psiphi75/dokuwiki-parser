# parse-dokuwiki
A very simple dokuwiki syntax parser.  It does not parse all dokuwiki tokens.  But it does parse:
 - Text
 - Links
 - Headings
 - Bullet points (unnumbered)


```JavaScript
var dokuwiki = require('dokuwiki-parser');
dokuwiki.parse(dokuwikiMarkdown)
```
