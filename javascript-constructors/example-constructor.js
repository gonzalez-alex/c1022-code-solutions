function ExampleConstructor() {}
console.log('prototype property value:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var example1 = new ExampleConstructor();
console.log('return value:', example1);

var instanceResult = example1 instanceof ExampleConstructor;
console.log('example1 instanceof ExampleConstructor:', instanceResult);
