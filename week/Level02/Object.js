// Example Usage for Object Methods
const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  function objectMethods(obj) {
  console.log(obj)
  let keys = Object.entries(obj);
  console.log("After Object.keys():", keys);
  
  let hasProp = Object.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp);
  let newObj = Object.assign({}, obj, { firstName: "subham" });
  console.log("After Object.assign():", newObj);
  }