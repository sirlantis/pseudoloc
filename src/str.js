/**
* Str.js
*
* Replaces all characters in str with pseudolocalized version according to
* pseudoloc.options.
*
* (c) 2013 Bill, BunKat LLC.
* Pseudoloc is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/pseudoloc
*/
import table from "./table";
import pad from "./pad";
import option from "./option";

export var str = function(s) {
  var opts = option,
      startdelim = opts.startDelimiter || opts.delimiter,
      enddelim = opts.endDelimiter || opts.delimiter,
      re = new RegExp(startdelim + '\\s*[\\w\\.\\s*]+\\s*' + enddelim, 'g'),
      m, tokens = [], i = 0, tokenIdx = 0, result = '', c, pc;

  while((m = re.exec(s))) {
    tokens.push(m);
  }

  var token = tokens[tokenIdx++] || {index: -1};
  while(i < s.length) {

    if(token.index === i) {
      result += token[0];
      i += token[0].length;
      token = tokens[tokenIdx++] || {index: -1};
      continue;
    }

    c = opts.override !== undefined ? opts.override : s[i];
    pc = table[c];
    if (pc) {
      var diacriticalIndex = s.length % pc.length;
      c = pc[diacriticalIndex];
    }
    result += c;
    i++;
  }

  return opts.prepend + pad(result, opts.extend) + opts.append;
};

export default str;
