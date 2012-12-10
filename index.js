
module.exports = parse;
module.exports.Range = Range;

/*
'0..1' -> [0,1] // inclusive
'0...1' -> [0]  // exclusive
'0-1000' -> [0,1,2,3,....,999] // exclusive
'-1..-5' -> [-1,-2,-3,-4,-5]
'-5..-1' -> [] // range going the wrong way
'a-z' -> ['a','b','c'...,'z'] // alphabet too
*/
function parse(range){

  var RE_RANGE = /^([\w\d-\.]+?)(\.{2,3}|-)([\w\d-\.]+?)$/gi;

  // TODO multiple (i.e. "0..1 4..9 a-z")

  var md;
  while( md = RE_RANGE.exec(''+range) ){
    switch(md[2]){
      // inclusive
      case '-':
      case '..':
        return new Range(md[1],md[3],false)

      // exclusive
      case '...':
        return new Range(md[1],md[3],true)

      default:
        console.log('invalid range')
    }
  }
}


function Range(start,end,exclusive){
  if( start === undefined || end === undefined )
    throw new Error('missing range');

  this.start = start;
  this.end = end;
  this.inclusive = !exclusive
  this.exclusive = !this.inclusive
  this.values = []

  // attempt to parse based on type
  if( isNaN(start) && isNaN(end) )
    this.asString();

  else if( !isNaN(start) && !isNaN(end) && ~(start+end).indexOf('.') )
    this.asNumeric();

  else if( !isNaN(start) && !isNaN(end) )
    this.asNumeric(0);

  else
    throw new Error('only string->string or number->number supported');
}

Range.prototype = {

  includes: function(v){
    return this.values.indexOf(v) !== -1;
  },

  asString: function(){
    var start = this.start.charCodeAt(0)
      , end = this.end.charCodeAt(0)
      , i = start
      , reversed = start > end;

    // check direction
    if( reversed ){
      var tmp = start;
      start = end;
      end = tmp;
    }

    for(var i=start; i <= end; i++){
      this.values.push(String.fromCharCode(i));
      if( this.exclusive && i+1 === end )
        break
    }

    if( reversed )
      this.values.reverse();
  },

  asNumeric: function(precision){
    var start = parseFloat(this.start)
      , end = parseFloat(this.end)
      , i = start
      , reversed = start > end;

    // check direction
    if( reversed ){
      var tmp = start;
      start = end;
      end = tmp;
    }

    // guess precision
    if( precision === undefined )
      precision = guessPrecision(start,end);

    var step = Math.pow(10,-precision);
    for(var i=start; i <= end; i += step){

      // fix the floating point rounding errors
      // (i'm sure theres a better/faster way...)
      i = parseFloat(i.toFixed(precision))

      this.values.push(i);

      if( this.exclusive && i + step == end )
        break
    }

    if( reversed )
      this.values.reverse();
  },

  toString: function(){
    return ''
      + this.start
      + (this.exclusive ? '...' : '..')
      + this.end;
  }

}

// attempt to guess the precision
// by getting the number of digits after the
// one with the highest precision
function guessPrecision(start,end){
  var s = start.toString() // strips any extra 0s
    , e = end.toString()
    , n = s.length > e.length ? s : e;
  return Math.abs(n.indexOf('.')-n.length+1);
}