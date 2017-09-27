/**
* obj.js
*
* Replaces all string values in given object with pseudolocalized version according to
* pseudoloc.options.
*
* (c) 2016 Rafał Sierawski
* (c) 2013 Bill, BunKat LLC.
* Pseudoloc is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/pseudoloc
*/
import str from "./str"

export var obj = function(o) {
  for(var id in o) {
    switch (typeof(o[id])) {
      case "string":
        o[id] = str(o[id]);
        break;
      case "object":
        obj(o[id]);
        break;
      default:
        continue;
    }
  }
  return o;
};

export default obj;
