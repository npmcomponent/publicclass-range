var range = require('./index')
  , Range = range.Range;


/*
'0..1' -> [0,1] // inclusive
'0...1' -> [0]  // exclusive
'0-1000' -> [0,1,2,3,....,10000] // inclusive
'-1..-5' -> [-1,-2,-3,-4,-5]
'-5..-1' -> [] // range going the wrong way
'a-z' -> ['a','b','c'...,'z'] // alphabet too
*/

describe('range',function(){

  describe('integers',function(){
    it('0..1',function(){
      range('0..1').should.be.an.instanceof(Range)
      range('0..1').should.have.property('inclusive',true)
      range('0..1').should.have.property('exclusive',false)
      range('0..1').values.should.include(0)
      range('0..1').values.should.include(1)
      range('0..1').values.should.not.include(-1)
      range('0..1').values.should.not.include(1.5)
      range('0..1').values.should.not.include(2)
      range('0..1').values.should.not.include('0')
      range('0..1').values.should.not.include('1')
    })

    it('10..0',function(){
      range('10..0').should.be.an.instanceof(Range)
      range('10..0').should.have.property('inclusive',true)
      range('10..0').should.have.property('exclusive',false)
      range('10..0').values.should.include(0)
      range('10..0').values.should.include(2)
      range('10..0').values.should.include(10)
      range('10..0').values.should.not.include(-1)
      range('10..0').values.should.not.include(1.5)
      range('10..0').values.should.not.include('0')
      range('10..0').values.should.not.include('1')
    })

    it('0...1',function(){
      range('0...1').should.be.an.instanceof(Range)
      range('0...1').should.have.property('inclusive',false)
      range('0...1').should.have.property('exclusive',true)
      range('0...1').values.should.include(0)
      range('0...1').values.should.not.include(1)
      range('0...1').values.should.not.include(-1)
      range('0...1').values.should.not.include(1.5)
      range('0...1').values.should.not.include(2)
      range('0...1').values.should.not.include('0')
      range('0...1').values.should.not.include('1')
    })

    it('0-1',function(){
      range('0-1').should.be.an.instanceof(Range)
      range('0-1').should.have.property('inclusive',true)
      range('0-1').should.have.property('exclusive',false)
      range('0-1').values.should.include(0)
      range('0-1').values.should.include(1)
      range('0-1').values.should.not.include(-1)
      range('0-1').values.should.not.include(1.5)
      range('0-1').values.should.not.include(2)
      range('0-1').values.should.not.include('0')
      range('0-1').values.should.not.include('1')
    })

    it('0..-1',function(){
      range('0..-1').should.be.an.instanceof(Range)
      range('0..-1').should.have.property('inclusive',true)
      range('0..-1').should.have.property('exclusive',false)
      range('0..-1').values.should.include(0)
      range('0..-1').values.should.include(-1)
      range('0..-1').values.should.not.include(1)
      range('0..-1').values.should.not.include(1.5)
      range('0..-1').values.should.not.include(2)
      range('0..-1').values.should.not.include('0')
      range('0..-1').values.should.not.include('1')
    })

    it.skip('0...-10',function(){
      range('0...-10').should.be.an.instanceof(Range)
      range('0...-10').should.have.property('inclusive',false)
      range('0...-10').should.have.property('exclusive',true)
      range('0...-10').values.should.include(0)
      range('0...-10').values.should.include(-1)
      range('0...-10').values.should.not.include(-10)
      range('0...-10').values.should.not.include(1)
      range('0...-10').values.should.not.include(1.5)
      range('0...-10').values.should.not.include(2)
      range('0...-10').values.should.not.include('0')
      range('0...-10').values.should.not.include('1')
    })
  })

  describe('floats',function(){
    it('0.1..1.0',function(){
      range('0.1..1.0').should.be.an.instanceof(Range)
      range('0.1..1.0').should.have.property('inclusive',true)
      range('0.1..1.0').should.have.property('exclusive',false)
      range('0.1..1.0').values.should.include(.1)
      range('0.1..1.0').values.should.include(.5)
      range('0.1..1.0').values.should.include(1)
      range('0.1..1.0').values.should.not.include(0)
      range('0.1..1.0').values.should.not.include(0.01)
      range('0.1..1.0').values.should.not.include(0.15)
      range('0.1..1.0').values.should.not.include(-1)
      range('0.1..1.0').values.should.not.include(1.5)
      range('0.1..1.0').values.should.not.include(2)
      range('0.1..1.0').values.should.not.include('0')
      range('0.1..1.0').values.should.not.include('1')
    })

    it.skip('-0.001...-1.0',function(){
      range('-0.001...-1.0').should.be.an.instanceof(Range)
      range('-0.001...-1.0').should.have.property('inclusive',false)
      range('-0.001...-1.0').should.have.property('exclusive',true)
      range('-0.001...-1.0').values.should.include(-0.001)
      range('-0.001...-1.0').values.should.include(-0.002)
      range('-0.001...-1.0').values.should.include(-0.01)
      range('-0.001...-1.0').values.should.include(-0.15)
      range('-0.001...-1.0').values.should.include(-0.9)
      range('-0.001...-1.0').values.should.not.include(1)
      range('-0.001...-1.0').values.should.not.include(0)
      range('-0.001...-1.0').values.should.not.include(0.001)
      range('-0.001...-1.0').values.should.not.include(-1)
      range('-0.001...-1.0').values.should.not.include(1.5)
      range('-0.001...-1.0').values.should.not.include(2)
      range('-0.001...-1.0').values.should.not.include('0')
      range('-0.001...-1.0').values.should.not.include('1')
    })

    it('0.001...1.0',function(){
      range('0.001...1.0').should.be.an.instanceof(Range)
      range('0.001...1.0').should.have.property('inclusive',false)
      range('0.001...1.0').should.have.property('exclusive',true)
      range('0.001...1.0').values.should.include(0.001)
      range('0.001...1.0').values.should.include(0.01)
      range('0.001...1.0').values.should.include(0.15)
      range('0.001...1.0').values.should.include(0.9)
      range('0.001...1.0').values.should.not.include(1)
      range('0.001...1.0').values.should.not.include(0)
      range('0.001...1.0').values.should.not.include(-1)
      range('0.001...1.0').values.should.not.include(1.5)
      range('0.001...1.0').values.should.not.include(2)
      range('0.001...1.0').values.should.not.include('0')
      range('0.001...1.0').values.should.not.include('1')
    })

    it('0.1-15',function(){
      range('0.1-15').should.be.an.instanceof(Range)
      range('0.1-15').should.have.property('inclusive',true)
      range('0.1-15').should.have.property('exclusive',false)
      range('0.1-15').values.should.include(0.9)
      range('0.1-15').values.should.include(1)
      range('0.1-15').values.should.include(1.5)
      range('0.1-15').values.should.include(2)
      range('0.1-15').values.should.include(15)
      range('0.1-15').values.should.not.include(0.001)
      range('0.1-15').values.should.not.include(0.01)
      range('0.1-15').values.should.not.include(0)
      range('0.1-15').values.should.not.include(0.15)
      range('0.1-15').values.should.not.include(-1)
      range('0.1-15').values.should.not.include('0')
      range('0.1-15').values.should.not.include('1')
    })
  })

  describe('alphabetic',function(){
    it('a..z',function(){
      range('a..z').should.be.an.instanceof(Range)
      range('a..z').should.have.property('inclusive',true)
      range('a..z').should.have.property('exclusive',false)
      range('a..z').values.should.include('a')
      range('a..z').values.should.include('c')
      range('a..z').values.should.include('z')
      range('a..z').values.should.not.include(-1)
      range('a..z').values.should.not.include(1.5)
      range('a..z').values.should.not.include(2)
      range('a..z').values.should.not.include('0')
      range('a..z').values.should.not.include('1')
      range('a..z').values.should.not.include('A')
      range('a..z').values.should.not.include('Z')
    })

    it('a...z',function(){
      range('a...z').should.be.an.instanceof(Range)
      range('a...z').should.have.property('inclusive',false)
      range('a...z').should.have.property('exclusive',true)
      range('a...z').values.should.include('a')
      range('a...z').values.should.include('c')
      range('a...z').values.should.not.include('z')
      range('a...z').values.should.not.include(-1)
      range('a...z').values.should.not.include(1.5)
      range('a...z').values.should.not.include(2)
      range('a...z').values.should.not.include('0')
      range('a...z').values.should.not.include('1')
      range('a...z').values.should.not.include('A')
      range('a...z').values.should.not.include('Z')
    })

    it('a-z',function(){
      range('a-z').should.be.an.instanceof(Range)
      range('a-z').should.have.property('inclusive',true)
      range('a-z').should.have.property('exclusive',false)
      range('a-z').values.should.include('a')
      range('a-z').values.should.include('c')
      range('a-z').values.should.include('z')
      range('a-z').values.should.not.include(-1)
      range('a-z').values.should.not.include(1.5)
      range('a-z').values.should.not.include(2)
      range('a-z').values.should.not.include('0')
      range('a-z').values.should.not.include('1')
      range('a-z').values.should.not.include('A')
      range('a-z').values.should.not.include('Z')
    })

    it('z-a',function(){
      range('z-a').should.be.an.instanceof(Range)
      range('z-a').should.have.property('inclusive',true)
      range('z-a').should.have.property('exclusive',false)
      range('z-a').values.should.include('a')
      range('z-a').values.should.include('c')
      range('z-a').values.should.include('z')
      range('z-a').values.should.not.include(-1)
      range('z-a').values.should.not.include(1.5)
      range('z-a').values.should.not.include(2)
      range('z-a').values.should.not.include('0')
      range('z-a').values.should.not.include('1')
      range('z-a').values.should.not.include('A')
      range('z-a').values.should.not.include('Z')
    })

    it('A-Z',function(){
      range('A-Z').should.be.an.instanceof(Range)
      range('A-Z').should.have.property('inclusive',true)
      range('A-Z').should.have.property('exclusive',false)
      range('A-Z').values.should.include('A')
      range('A-Z').values.should.include('C')
      range('A-Z').values.should.include('Z')
      range('A-Z').values.should.not.include(-1)
      range('A-Z').values.should.not.include(1.5)
      range('A-Z').values.should.not.include(2)
      range('A-Z').values.should.not.include('0')
      range('A-Z').values.should.not.include('1')
      range('A-Z').values.should.not.include('a')
      range('A-Z').values.should.not.include('z')
    })

  })

  describe('toString',function(){
    it('0..1',function(){
      range('0..1').toString().should.equal('0..1')
    })

    it('10...1',function(){
      range('10...1').toString().should.equal('10...1')
    })

    it('A-Z',function(){
      range('A-Z').toString().should.equal('A..Z')
    })

    it('z-a',function(){
      range('z-a').toString().should.equal('z..a')
    })

    it('0.1-15',function(){
      range('0.1-15').toString().should.equal('0.1..15')
    })

    it('0..-1',function(){
      range('0..-1').toString().should.equal('0..-1')
    })

    it('0.001...1.0',function(){
      range('0.001...1.0').toString().should.equal('0.001...1.0')
    })

    it('-0.001...-1.0',function(){
      range('-0.001...-1.0').toString().should.equal('-0.001...-1.0')
    })
  })

  describe('valueOf',function(){
    it('should return a string',function(){
      (''+range('0..1')).should.equal('0..1')
      range('0..1').should.not.equal('0..1')
    })
  })

})