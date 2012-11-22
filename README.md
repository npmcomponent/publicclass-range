# Range

  Parses a Range from a string (ex. "0...10")

## Installation

    $ component install publicclass/range

## Examples

  (generated using mocha)

### Integers

**0..1**

```js
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
```

**10..0**

```js
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
```

**0...1**

```js
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
```

**0-1**

```js
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
```

**0..-1**

```js
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
```

### Floats

**0.1..1.0**

```js
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
```

**0.001...1.0**

```js
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
```

**0.1-15**

```js
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
```

## Alphabetic

**a..z**

```js
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
```

**a...z**

```js
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
```

**a-z**

```js
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
```

**z-a**

```js
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
```

**A-Z**

```js
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
```



## License

  MIT