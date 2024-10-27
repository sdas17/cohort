function jsonMethods(dumy){
      // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(dumy);
  console.log("After JSON.parse():", parsedObject);
  console.log("get data:", parsedObject["number"]);

    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
    //they can't be acess string 
    console.log("get data:", jsonStringified["number"]);

  
}


const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  jsonMethods(sampleJSONString);
