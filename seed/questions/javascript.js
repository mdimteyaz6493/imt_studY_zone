const javascriptQuestions = [
  {
    question: "What is JavaScript?",
    options: [
      "A database management system",
      "A programming language used to create dynamic web functionality",
      "A CSS framework",
      "An operating system"
    ],
    correctAnswer: 1,
    explanation:
      "JavaScript is a programming language commonly used to add interactivity and dynamic behavior to web applications.",
    difficulty: "Easy",
    topic: "JavaScript Basics"
  },

  {
    question: "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    correctAnswer: 2,
    explanation:
      "The const keyword declares a block-scoped variable whose binding cannot be reassigned.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: [
      "let",
      "const",
      "var",
      "define"
    ],
    correctAnswer: 0,
    explanation:
      "The let keyword declares a block-scoped variable that can later be reassigned.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which keyword was traditionally used to declare function-scoped variables?",
    options: [
      "let",
      "const",
      "var",
      "variable"
    ],
    correctAnswer: 2,
    explanation:
      "var declares variables with function scope rather than block scope.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which operator checks both value and type equality?",
    options: [
      "==",
      "=",
      "===",
      "!="
    ],
    correctAnswer: 2,
    explanation:
      "The strict equality operator === checks both value and type without performing type coercion.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "What does the == operator generally perform?",
    options: [
      "Assignment",
      "Strict equality comparison",
      "Loose equality comparison with type coercion",
      "Object comparison only"
    ],
    correctAnswer: 2,
    explanation:
      "The == operator performs loose equality comparison and may convert types before comparing values.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which operator is used for assignment?",
    options: [
      "==",
      "=",
      "===",
      ":="
    ],
    correctAnswer: 1,
    explanation:
      "The = operator assigns a value to a variable or property.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which of the following is a primitive data type in JavaScript?",
    options: [
      "Array",
      "Object",
      "String",
      "Function"
    ],
    correctAnswer: 2,
    explanation:
      "String is a primitive data type. Other primitive types include number, bigint, boolean, undefined, symbol and null.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "What is the result of typeof null?",
    options: [
      "\"null\"",
      "\"undefined\"",
      "\"object\"",
      "\"boolean\""
    ],
    correctAnswer: 2,
    explanation:
      "typeof null returns \"object\". This is a long-standing historical behavior in JavaScript.",
    difficulty: "Medium",
    topic: "Data Types"
  },

  {
    question: "Which value represents an intentional absence of an object value?",
    options: [
      "undefined",
      "null",
      "NaN",
      "false"
    ],
    correctAnswer: 1,
    explanation:
      "null is commonly used to explicitly indicate that a variable has no object value.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which value usually indicates that a variable has been declared but has not been assigned a value?",
    options: [
      "null",
      "undefined",
      "empty",
      "NaN"
    ],
    correctAnswer: 1,
    explanation:
      "A declared variable without an assigned value normally has the value undefined.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which keyword is used to define a function declaration?",
    options: [
      "function",
      "def",
      "func",
      "method"
    ],
    correctAnswer: 0,
    explanation:
      "The function keyword is used to define a traditional function declaration or function expression.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which syntax represents an arrow function?",
    options: [
      "function => ()",
      "() => {}",
      "=> function()",
      "arrow() {}"
    ],
    correctAnswer: 1,
    explanation:
      "() => {} is the basic syntax for an arrow function.",
    difficulty: "Easy",
    topic: "Arrow Functions"
  },

  {
    question: "What does a function's return statement do?",
    options: [
      "Stops JavaScript execution permanently",
      "Returns a value from the function",
      "Creates a new function",
      "Declares a variable"
    ],
    correctAnswer: 1,
    explanation:
      "The return statement exits the current function and optionally provides a value to the caller.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "What is a callback function?",
    options: [
      "A function passed to another function to be called later",
      "A function that cannot return a value",
      "A function that runs only once",
      "A function declared inside CSS"
    ],
    correctAnswer: 0,
    explanation:
      "A callback is a function passed as an argument to another function and invoked by that function.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close the browser",
      "A function that remembers variables from its lexical scope",
      "A method for deleting objects",
      "A special type of loop"
    ],
    correctAnswer: 1,
    explanation:
      "A closure allows a function to retain access to variables from its surrounding lexical scope even after the outer function has finished.",
    difficulty: "Medium",
    topic: "Closures"
  },

  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    correctAnswer: 0,
    explanation:
      "push() adds one or more elements to the end of an array.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which method removes the last element from an array?",
    options: [
      "shift()",
      "remove()",
      "pop()",
      "delete()"
    ],
    correctAnswer: 2,
    explanation:
      "pop() removes and returns the last element of an array.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which method adds an element to the beginning of an array?",
    options: [
      "push()",
      "unshift()",
      "prepend()",
      "addFirst()"
    ],
    correctAnswer: 1,
    explanation:
      "unshift() adds one or more elements to the beginning of an array.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which method removes the first element from an array?",
    options: [
      "pop()",
      "shift()",
      "removeFirst()",
      "delete()"
    ],
    correctAnswer: 1,
    explanation:
      "shift() removes and returns the first element of an array.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which method creates a new array by transforming every element?",
    options: [
      "filter()",
      "forEach()",
      "map()",
      "reduce()"
    ],
    correctAnswer: 2,
    explanation:
      "map() creates a new array containing the results of calling a function on every element.",
    difficulty: "Easy",
    topic: "Array Methods"
  },

  {
    question: "Which array method returns a new array containing elements that pass a condition?",
    options: [
      "map()",
      "filter()",
      "find()",
      "some()"
    ],
    correctAnswer: 1,
    explanation:
      "filter() creates a new array containing elements for which the callback returns true.",
    difficulty: "Easy",
    topic: "Array Methods"
  },

  {
    question: "Which method executes a function for each array element but does not create a new array?",
    options: [
      "map()",
      "forEach()",
      "filter()",
      "reduce()"
    ],
    correctAnswer: 1,
    explanation:
      "forEach() executes a callback for each element and returns undefined.",
    difficulty: "Easy",
    topic: "Array Methods"
  },

  {
    question: "Which method is commonly used to accumulate array values into a single result?",
    options: [
      "reduce()",
      "map()",
      "filter()",
      "every()"
    ],
    correctAnswer: 0,
    explanation:
      "reduce() processes array elements and accumulates them into a single value.",
    difficulty: "Medium",
    topic: "Array Methods"
  },

  {
    question: "Which method returns the first array element that satisfies a condition?",
    options: [
      "filter()",
      "find()",
      "search()",
      "first()"
    ],
    correctAnswer: 1,
    explanation:
      "find() returns the first element for which the callback function returns true.",
    difficulty: "Easy",
    topic: "Array Methods"
  },

  {
    question: "Which method checks whether at least one array element satisfies a condition?",
    options: [
      "every()",
      "some()",
      "findAll()",
      "exists()"
    ],
    correctAnswer: 1,
    explanation:
      "some() returns true if at least one element passes the provided test.",
    difficulty: "Medium",
    topic: "Array Methods"
  },

  {
    question: "Which method checks whether all array elements satisfy a condition?",
    options: [
      "all()",
      "every()",
      "some()",
      "each()"
    ],
    correctAnswer: 1,
    explanation:
      "every() returns true only when all elements pass the provided test.",
    difficulty: "Medium",
    topic: "Array Methods"
  },

  {
    question: "Which syntax is commonly used to create an object literal?",
    options: [
      "[]",
      "()",
      "{}",
      "<>"
    ],
    correctAnswer: 2,
    explanation:
      "Object literals are created using curly braces, for example: { name: \"Imteyaz\" }.",
    difficulty: "Easy",
    topic: "Objects"
  },

  {
    question: "How can you access the name property of an object named user?",
    options: [
      "user->name",
      "user.name",
      "user::name",
      "user/name"
    ],
    correctAnswer: 1,
    explanation:
      "Dot notation, user.name, is commonly used to access an object's property.",
    difficulty: "Easy",
    topic: "Objects"
  },

  {
    question: "Which notation can be used to access an object property dynamically?",
    options: [
      "user(name)",
      "user[name]",
      "user->name",
      "user::name"
    ],
    correctAnswer: 1,
    explanation:
      "Bracket notation, such as user[name], allows a property name to be determined dynamically.",
    difficulty: "Medium",
    topic: "Objects"
  },

  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Network",
      "JavaScript Online Notation",
      "JSON Object Network"
    ],
    correctAnswer: 0,
    explanation:
      "JSON stands for JavaScript Object Notation and is commonly used for data interchange.",
    difficulty: "Easy",
    topic: "JSON"
  },

  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    correctAnswer: 1,
    explanation:
      "JSON.stringify() converts a JavaScript value into a JSON string.",
    difficulty: "Easy",
    topic: "JSON"
  },

  {
    question: "Which method converts a JSON string into a JavaScript value?",
    options: [
      "JSON.convert()",
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toJS()"
    ],
    correctAnswer: 2,
    explanation:
      "JSON.parse() parses a JSON string and returns the corresponding JavaScript value.",
    difficulty: "Easy",
    topic: "JSON"
  },

  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Oriented Model",
      "Dynamic Object Method"
    ],
    correctAnswer: 0,
    explanation:
      "DOM stands for Document Object Model. It represents an HTML or XML document as a tree of objects.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which method selects an element by its ID?",
    options: [
      "document.getElementById()",
      "document.getById()",
      "document.selectId()",
      "document.findId()"
    ],
    correctAnswer: 0,
    explanation:
      "document.getElementById() returns the element whose id matches the supplied value.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which method selects the first element matching a CSS selector?",
    options: [
      "document.query()",
      "document.querySelector()",
      "document.selectFirst()",
      "document.getSelector()"
    ],
    correctAnswer: 1,
    explanation:
      "querySelector() returns the first element that matches the specified CSS selector.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which method selects all elements matching a CSS selector?",
    options: [
      "document.querySelectorAll()",
      "document.queryAll()",
      "document.getAllSelector()",
      "document.selectAllElements()"
    ],
    correctAnswer: 0,
    explanation:
      "querySelectorAll() returns a static NodeList containing all elements that match the selector.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which property is commonly used to change the HTML content of an element?",
    options: [
      "innerHTML",
      "htmlContent",
      "contentHTML",
      "elementHTML"
    ],
    correctAnswer: 0,
    explanation:
      "The innerHTML property gets or sets the HTML markup contained inside an element.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which property changes only the text content of an element?",
    options: [
      "innerTextOnly",
      "textContent",
      "textHTML",
      "contentTextHTML"
    ],
    correctAnswer: 1,
    explanation:
      "textContent gets or sets the text content of a node without interpreting the value as HTML.",
    difficulty: "Easy",
    topic: "DOM"
  },

  {
    question: "Which method is used to add an event handler to an element?",
    options: [
      "addEventListener()",
      "addEvent()",
      "listenEvent()",
      "onEvent()"
    ],
    correctAnswer: 0,
    explanation:
      "addEventListener() attaches an event listener to an EventTarget.",
    difficulty: "Easy",
    topic: "Events"
  },

  {
    question: "Which event occurs when a user clicks an element?",
    options: [
      "press",
      "onclicked",
      "click",
      "mousepress"
    ],
    correctAnswer: 2,
    explanation:
      "The click event occurs when an element is activated by a mouse click or an equivalent user action.",
    difficulty: "Easy",
    topic: "Events"
  },

  {
    question: "Which event is commonly triggered when a user submits a form?",
    options: [
      "send",
      "submit",
      "formSubmit",
      "post"
    ],
    correctAnswer: 1,
    explanation:
      "The submit event is fired when a form is submitted.",
    difficulty: "Easy",
    topic: "Events"
  },

  {
    question: "What does event.preventDefault() do?",
    options: [
      "Stops all JavaScript execution",
      "Removes the event listener",
      "Prevents the browser's default action for the event",
      "Deletes the event"
    ],
    correctAnswer: 2,
    explanation:
      "preventDefault() cancels the default browser action associated with an event when the event is cancelable.",
    difficulty: "Medium",
    topic: "Events"
  },

  {
    question: "What is event bubbling?",
    options: [
      "An event moving from parent to child only",
      "An event propagating from the target toward ancestor elements",
      "An event being deleted",
      "A method for creating animations"
    ],
    correctAnswer: 1,
    explanation:
      "During bubbling, an event propagates from the target element upward through its ancestors.",
    difficulty: "Medium",
    topic: "Events"
  },

  {
    question: "Which function executes code after a specified delay?",
    options: [
      "setDelay()",
      "setTimeout()",
      "delayFunction()",
      "wait()"
    ],
    correctAnswer: 1,
    explanation:
      "setTimeout() schedules a function to run after a specified delay.",
    difficulty: "Easy",
    topic: "Asynchronous JavaScript"
  },

  {
    question: "Which function repeatedly executes code after a specified time interval?",
    options: [
      "setRepeat()",
      "setInterval()",
      "repeatTimeout()",
      "loopTimer()"
    ],
    correctAnswer: 1,
    explanation:
      "setInterval() repeatedly executes a function at a specified interval until it is cleared.",
    difficulty: "Easy",
    topic: "Asynchronous JavaScript"
  },

  {
    question: "What is a Promise in JavaScript?",
    options: [
      "A CSS property",
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A type of loop",
      "A database table"
    ],
    correctAnswer: 1,
    explanation:
      "A Promise represents the eventual result of an asynchronous operation and can be pending, fulfilled or rejected.",
    difficulty: "Medium",
    topic: "Promises"
  },

  {
    question: "Which keyword is used to wait for a Promise inside an async function?",
    options: [
      "wait",
      "pause",
      "await",
      "asyncWait"
    ],
    correctAnswer: 2,
    explanation:
      "The await keyword pauses execution of an async function until the Promise settles.",
    difficulty: "Easy",
    topic: "Async Await"
  },

  {
    question: "Which keyword is used to declare an asynchronous function?",
    options: [
      "await",
      "async",
      "promise",
      "defer"
    ],
    correctAnswer: 1,
    explanation:
      "The async keyword declares a function that returns a Promise and allows the use of await inside it.",
    difficulty: "Easy",
    topic: "Async Await"
  },

  {
    question: "Which statement is commonly used to handle exceptions?",
    options: [
      "if...else",
      "try...catch",
      "check...error",
      "handle...exception"
    ],
    correctAnswer: 1,
    explanation:
      "try...catch is used to handle exceptions that occur during execution.",
    difficulty: "Easy",
    topic: "Error Handling"
  },

  {
    question: "Which keyword is used to manually throw an exception?",
    options: [
      "error",
      "throw",
      "exception",
      "raise"
    ],
    correctAnswer: 1,
    explanation:
      "The throw statement is used to throw a user-defined exception or any JavaScript value.",
    difficulty: "Easy",
    topic: "Error Handling"
  },

  {
    question: "What is hoisting in JavaScript?",
    options: [
      "Moving code to another file",
      "The behavior where certain declarations are processed before code execution",
      "Converting JavaScript to HTML",
      "Deleting unused variables"
    ],
    correctAnswer: 1,
    explanation:
      "Hoisting describes how JavaScript processes certain declarations before executing the surrounding code.",
    difficulty: "Medium",
    topic: "Hoisting"
  },

  {
    question: "What is the value of a variable declared with let before its declaration is executed?",
    options: [
      "null",
      "undefined",
      "It cannot be accessed because of the Temporal Dead Zone",
      "false"
    ],
    correctAnswer: 2,
    explanation:
      "let and const declarations are in the Temporal Dead Zone from the start of their scope until execution reaches the declaration.",
    difficulty: "Hard",
    topic: "Temporal Dead Zone"
  },

  {
    question: "What is the purpose of the spread operator (...)?",
    options: [
      "To delete an array",
      "To expand iterable elements or object properties",
      "To declare a variable",
      "To create a loop"
    ],
    correctAnswer: 1,
    explanation:
      "The spread syntax ... expands iterable elements or object properties into another context.",
    difficulty: "Medium",
    topic: "Modern JavaScript"
  },

  {
    question: "What is the purpose of the rest parameter (...args)?",
    options: [
      "Collects multiple arguments into an array",
      "Deletes extra arguments",
      "Creates a Promise",
      "Stops function execution"
    ],
    correctAnswer: 0,
    explanation:
      "A rest parameter collects remaining function arguments into an array.",
    difficulty: "Medium",
    topic: "Functions"
  },

  {
    question: "Which feature allows extracting values from arrays or objects into variables?",
    options: [
      "Destructuring",
      "Hoisting",
      "Inheritance",
      "Casting"
    ],
    correctAnswer: 0,
    explanation:
      "Destructuring assignment allows values from arrays or properties from objects to be unpacked into variables.",
    difficulty: "Easy",
    topic: "Modern JavaScript"
  },

  {
    question: "What does the optional chaining operator ?. do?",
    options: [
      "Creates optional variables",
      "Safely accesses properties or methods when a value may be null or undefined",
      "Converts values to strings",
      "Creates a Promise"
    ],
    correctAnswer: 1,
    explanation:
      "Optional chaining allows safe property, method or index access without throwing when an intermediate value is null or undefined.",
    difficulty: "Medium",
    topic: "Modern JavaScript"
  },

  {
    question: "What does the nullish coalescing operator ?? do?",
    options: [
      "Returns the right-hand value when the left-hand value is null or undefined",
      "Checks strict equality",
      "Converts null into false",
      "Creates an object"
    ],
    correctAnswer: 0,
    explanation:
      "The ?? operator returns its right-hand operand when the left-hand operand is null or undefined.",
    difficulty: "Medium",
    topic: "Modern JavaScript"
  },

  {
    question: "Which keyword refers to the current execution context's this value?",
    options: [
      "self",
      "current",
      "this",
      "context"
    ],
    correctAnswer: 2,
    explanation:
      "The this keyword refers to a context-dependent value determined by how a function is called.",
    difficulty: "Medium",
    topic: "this Keyword"
  },

  {
    question: "Which method can explicitly set the this value when calling a function?",
    options: [
      "bind()",
      "setThis()",
      "thisCall()",
      "context()"
    ],
    correctAnswer: 0,
    explanation:
      "bind() creates a new function with a specified this value and optionally preset arguments.",
    difficulty: "Medium",
    topic: "this Keyword"
  },

  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: [
      "object",
      "class",
      "struct",
      "prototype"
    ],
    correctAnswer: 1,
    explanation:
      "The class keyword is used to define JavaScript classes.",
    difficulty: "Easy",
    topic: "Classes"
  },

  {
    question: "Which method is automatically called when a new class instance is created?",
    options: [
      "init()",
      "create()",
      "constructor()",
      "start()"
    ],
    correctAnswer: 2,
    explanation:
      "The constructor() method is automatically called when a new instance of a class is created.",
    difficulty: "Easy",
    topic: "Classes"
  },

  {
    question: "Which keyword is used to create an instance of a class?",
    options: [
      "create",
      "new",
      "instance",
      "make"
    ],
    correctAnswer: 1,
    explanation:
      "The new keyword creates an instance of a class or invokes a constructor function.",
    difficulty: "Easy",
    topic: "Classes"
  },

  {
    question: "What is the prototype in JavaScript mainly used for?",
    options: [
      "Styling HTML elements",
      "Sharing properties and methods through the prototype chain",
      "Creating database connections",
      "Compiling JavaScript"
    ],
    correctAnswer: 1,
    explanation:
      "JavaScript uses prototypes for inheritance and for sharing properties and methods between objects.",
    difficulty: "Medium",
    topic: "Prototypes"
  },

  {
    question: "Which browser storage mechanism stores data with no automatic expiration until it is removed?",
    options: [
      "sessionStorage",
      "localStorage",
      "cookieSession",
      "memoryStorage"
    ],
    correctAnswer: 1,
    explanation:
      "localStorage persists data across browser sessions until it is explicitly removed or cleared.",
    difficulty: "Easy",
    topic: "Web Storage"
  },

  {
    question: "Which browser storage mechanism is cleared when the page session ends?",
    options: [
      "localStorage",
      "sessionStorage",
      "permanentStorage",
      "cacheStorage"
    ],
    correctAnswer: 1,
    explanation:
      "sessionStorage stores data for the duration of the page session and is generally cleared when that session ends.",
    difficulty: "Easy",
    topic: "Web Storage"
  },

  {
    question: "Which API is commonly used to make HTTP requests from modern JavaScript?",
    options: [
      "fetch()",
      "httpRequest()",
      "requestURL()",
      "ajaxRequest()"
    ],
    correctAnswer: 0,
    explanation:
      "The Fetch API provides the fetch() function for making HTTP requests and handling responses using Promises.",
    difficulty: "Easy",
    topic: "Fetch API"
  },

  {
    question: "What does Array.isArray([]) return?",
    options: [
      "false",
      "undefined",
      "true",
      "null"
    ],
    correctAnswer: 2,
    explanation:
      "Array.isArray() returns true when the supplied value is an Array.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "What is NaN in JavaScript?",
    options: [
      "A null object",
      "Not-a-Number value",
      "A new array",
      "A string value"
    ],
    correctAnswer: 1,
    explanation:
      "NaN stands for Not-a-Number and represents a value that is not a valid numerical result.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which method can be used to check whether a value is NaN reliably?",
    options: [
      "Number.isNaN()",
      "Number.isNull()",
      "isNumberOnly()",
      "checkNaN()"
    ],
    correctAnswer: 0,
    explanation:
      "Number.isNaN() determines whether the provided value is the numeric NaN value without performing coercion.",
    difficulty: "Medium",
    topic: "Numbers"
  },

  {
    question: "Which method converts a string into an integer?",
    options: [
      "parseInt()",
      "toInteger()",
      "Integer.parse()",
      "parseNumber()"
    ],
    correctAnswer: 0,
    explanation:
      "parseInt() parses a string and returns an integer according to the specified radix.",
    difficulty: "Easy",
    topic: "Type Conversion"
  },

  {
    question: "Which method converts a string into a floating-point number?",
    options: [
      "parseFloat()",
      "toFloat()",
      "parseDecimal()",
      "Float.parse()"
    ],
    correctAnswer: 0,
    explanation:
      "parseFloat() parses a string and returns a floating-point number.",
    difficulty: "Easy",
    topic: "Type Conversion"
  }
];

module.exports = javascriptQuestions;