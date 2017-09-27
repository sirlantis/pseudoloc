/**
* Option.js
*
* Pseudolocalization options.
*
* (c) 2013 Bill, BunKat LLC.
* Pseudoloc is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/pseudoloc
*/

function Option() {

}

Option.prototype = {
  prepend: '[!!',
  append: '!!]',
  delimiter: '%',
  startDelimiter: '',
  endDelimiter: '',
  extend: 0,
  override: undefined
};

export var option = new Option();

export var reset = function() {
  for (var key in option) {
    delete option[key];
  }
};

export default option;
