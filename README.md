# Dokuwiki Parser
A very simple [dokuwiki](https://www.dokuwiki.org/) syntax parser.  It does not parse all dokuwiki tokens.  But it does parse:
 - Text
 - Links
 - Headings
 - Bullet points (unnumbered)

It is used to parse blobs of text / files.

## Usage

```JavaScript
var dokuwiki = require('dokuwiki-parser');
console.log(dokuwiki.parse('=== Glycerol monostearate ==='));  // outputs: <h3>Glycerol monostearate</h3>
```
