const pythonQuestions = [
  {
    question: "What type of programming language is Python?",
    options: [
      "High-level programming language",
      "Low-level programming language",
      "Machine language",
      "Assembly language"
    ],
    correctAnswer: 0,
    explanation:
      "Python is a high-level, interpreted, general-purpose programming language.",
    difficulty: "Easy",
    topic: "Python Basics"
  },
  {
    question: "Which file extension is commonly used for Python programs?",
    options: [".py", ".python", ".pt", ".pyt"],
    correctAnswer: 0,
    explanation: "Python source files commonly use the .py extension.",
    difficulty: "Easy",
    topic: "Python Basics"
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: 1,
    explanation:
      "The def keyword is used to define a function in Python.",
    difficulty: "Easy",
    topic: "Functions"
  },
  {
    question: "Which symbol is used to write a single-line comment in Python?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: 1,
    explanation:
      "Python uses the # symbol to begin a single-line comment.",
    difficulty: "Easy",
    topic: "Python Basics"
  },
  {
    question: "Which of the following is a valid Python variable name?",
    options: ["2name", "my-name", "my_name", "class"],
    correctAnswer: 2,
    explanation:
      "my_name is valid because Python variable names can contain letters, numbers, and underscores but cannot start with a number or use reserved keywords.",
    difficulty: "Easy",
    topic: "Variables"
  },
  {
    question: "Which function is used to display output in Python?",
    options: ["echo()", "print()", "display()", "write()"],
    correctAnswer: 1,
    explanation:
      "The print() function is used to display output in Python.",
    difficulty: "Easy",
    topic: "Input Output"
  },
  {
    question: "Which function is used to take input from the user?",
    options: ["scan()", "read()", "input()", "get()"],
    correctAnswer: 2,
    explanation:
      "The input() function reads input from the user and returns it as a string.",
    difficulty: "Easy",
    topic: "Input Output"
  },
  {
    question: "What is the data type returned by input() by default?",
    options: ["int", "float", "string", "boolean"],
    correctAnswer: 2,
    explanation:
      "input() always returns the entered value as a string unless explicitly converted.",
    difficulty: "Easy",
    topic: "Input Output"
  },
  {
    question: "Which of the following is an immutable data type in Python?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correctAnswer: 3,
    explanation:
      "Tuples are immutable, meaning their elements cannot be changed after creation.",
    difficulty: "Easy",
    topic: "Data Types"
  },
  {
    question: "Which data type is used to store True or False values?",
    options: ["bool", "boolean", "logical", "bit"],
    correctAnswer: 0,
    explanation:
      "Python uses the bool data type for True and False values.",
    difficulty: "Easy",
    topic: "Data Types"
  },
  {
    question: "Which brackets are used to create a Python list?",
    options: ["()", "{}", "[]", "<>"],
    correctAnswer: 2,
    explanation:
      "Lists are created using square brackets, for example [1, 2, 3].",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "Which brackets are commonly used to create a tuple?",
    options: ["[]", "{}", "()", "<>"],
    correctAnswer: 2,
    explanation:
      "Tuples are commonly created using parentheses, for example (1, 2, 3).",
    difficulty: "Easy",
    topic: "Tuples"
  },
  {
    question: "Which data structure stores key-value pairs in Python?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    correctAnswer: 2,
    explanation:
      "A dictionary stores data as key-value pairs.",
    difficulty: "Easy",
    topic: "Dictionaries"
  },
  {
    question: "Which collection contains only unique values?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    correctAnswer: 2,
    explanation:
      "A set stores unique elements and automatically removes duplicate values.",
    difficulty: "Easy",
    topic: "Sets"
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "^^"],
    correctAnswer: 1,
    explanation:
      "The ** operator is used for exponentiation, such as 2 ** 3.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "What does the // operator do in Python?",
    options: [
      "Normal division",
      "Exponentiation",
      "Floor division",
      "Modulo division"
    ],
    correctAnswer: 2,
    explanation:
      "The // operator performs floor division and returns the quotient rounded down.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which operator returns the remainder of a division?",
    options: ["%", "//", "/", "&"],
    correctAnswer: 0,
    explanation:
      "The % operator returns the remainder after division.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "What is the output of `print(10 // 3)`?",
    options: ["3.33", "3", "1", "4"],
    correctAnswer: 1,
    explanation:
      "10 // 3 performs floor division, so the result is 3.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which keyword is used for conditional branching?",
    options: ["if", "when", "condition", "check"],
    correctAnswer: 0,
    explanation:
      "Python uses if, elif, and else for conditional execution.",
    difficulty: "Easy",
    topic: "Conditional Statements"
  },
  {
    question: "Which keyword is used for an additional condition after if?",
    options: ["else if", "elseif", "elif", "elsif"],
    correctAnswer: 2,
    explanation:
      "Python uses elif to check additional conditions.",
    difficulty: "Easy",
    topic: "Conditional Statements"
  },
  {
    question: "Which loop is commonly used when iterating over a sequence?",
    options: ["repeat", "for", "foreach", "loop"],
    correctAnswer: 1,
    explanation:
      "The for loop is commonly used to iterate over strings, lists, tuples, ranges, and other iterables.",
    difficulty: "Easy",
    topic: "Loops"
  },
  {
    question: "Which keyword immediately terminates a loop?",
    options: ["stop", "exit", "break", "terminate"],
    correctAnswer: 2,
    explanation:
      "The break statement terminates the nearest enclosing loop.",
    difficulty: "Easy",
    topic: "Loops"
  },
  {
    question: "Which keyword skips the current iteration of a loop?",
    options: ["skip", "continue", "pass", "next"],
    correctAnswer: 1,
    explanation:
      "The continue statement skips the remaining code in the current iteration and moves to the next iteration.",
    difficulty: "Easy",
    topic: "Loops"
  },
  {
    question: "What does the pass statement do?",
    options: [
      "Stops the program",
      "Skips the entire program",
      "Does nothing",
      "Repeats the loop"
    ],
    correctAnswer: 2,
    explanation:
      "pass is a null statement used when syntactically a statement is required but no action is needed.",
    difficulty: "Easy",
    topic: "Control Statements"
  },
  {
    question: "Which function returns the number of items in a sequence?",
    options: ["count()", "size()", "length()", "len()"],
    correctAnswer: 3,
    explanation:
      "The len() function returns the number of elements in a sequence or collection.",
    difficulty: "Easy",
    topic: "Built-in Functions"
  },
  {
    question: "Which function returns the largest item from an iterable?",
    options: ["large()", "max()", "maximum()", "top()"],
    correctAnswer: 1,
    explanation:
      "The max() function returns the largest item.",
    difficulty: "Easy",
    topic: "Built-in Functions"
  },
  {
    question: "Which function returns the smallest item from an iterable?",
    options: ["min()", "small()", "minimum()", "least()"],
    correctAnswer: 0,
    explanation:
      "The min() function returns the smallest item.",
    difficulty: "Easy",
    topic: "Built-in Functions"
  },
  {
    question: "Which function converts a value into an integer?",
    options: ["integer()", "number()", "int()", "toInt()"],
    correctAnswer: 2,
    explanation:
      "The int() function converts compatible values to integers.",
    difficulty: "Easy",
    topic: "Type Conversion"
  },
  {
    question: "Which function converts a value into a floating-point number?",
    options: ["float()", "decimal()", "double()", "real()"],
    correctAnswer: 0,
    explanation:
      "The float() function converts compatible values into floating-point numbers.",
    difficulty: "Easy",
    topic: "Type Conversion"
  },
  {
    question: "Which function is used to check the type of an object?",
    options: ["typeof()", "type()", "datatype()", "checktype()"],
    correctAnswer: 1,
    explanation:
      "The type() function returns the type of an object.",
    difficulty: "Easy",
    topic: "Built-in Functions"
  },
  {
    question: "What is the index of the first element in a Python list?",
    options: ["0", "1", "-1", "Depends on the list"],
    correctAnswer: 0,
    explanation:
      "Python uses zero-based indexing, so the first element has index 0.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "Which method adds one element to the end of a list?",
    options: ["add()", "insert()", "append()", "push()"],
    correctAnswer: 2,
    explanation:
      "append() adds a single element to the end of a list.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "Which method removes and returns the last element of a list by default?",
    options: ["remove()", "delete()", "pop()", "discard()"],
    correctAnswer: 2,
    explanation:
      "pop() removes and returns an element, and by default it removes the last element.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "Which method sorts a list in place?",
    options: ["sort()", "sorted()", "order()", "arrange()"],
    correctAnswer: 0,
    explanation:
      "list.sort() sorts the existing list in place.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "What is the main difference between `sort()` and `sorted()`?",
    options: [
      "There is no difference",
      "sort() creates a new list",
      "sorted() returns a new sorted object while sort() modifies the list in place",
      "sorted() only works with tuples"
    ],
    correctAnswer: 2,
    explanation:
      "sort() modifies a list in place, while sorted() returns a new sorted list from an iterable.",
    difficulty: "Medium",
    topic: "Lists"
  },
  {
    question: "Which keyword is used to import a module in Python?",
    options: ["include", "using", "import", "require"],
    correctAnswer: 2,
    explanation:
      "The import keyword is used to import modules in Python.",
    difficulty: "Easy",
    topic: "Modules"
  },
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["class", "struct", "object", "define"],
    correctAnswer: 0,
    explanation:
      "The class keyword is used to define a class.",
    difficulty: "Easy",
    topic: "OOP"
  },
  {
    question: "What is `self` in a Python class?",
    options: [
      "A keyword for creating classes",
      "A reference to the current object",
      "A reference to the parent class only",
      "A global variable"
    ],
    correctAnswer: 1,
    explanation:
      "self refers to the current instance of a class and is commonly used to access instance attributes and methods.",
    difficulty: "Medium",
    topic: "OOP"
  },
  {
    question: "Which method is automatically called when an object is initialized?",
    options: ["start()", "__init__()", "constructor()", "create()"],
    correctAnswer: 1,
    explanation:
      "__init__() is commonly used as the initializer method when a new instance is created.",
    difficulty: "Easy",
    topic: "OOP"
  },
  {
    question: "What does inheritance allow in Python?",
    options: [
      "A class to acquire attributes and methods from another class",
      "A function to become a variable",
      "A variable to become a class",
      "A module to become a package"
    ],
    correctAnswer: 0,
    explanation:
      "Inheritance allows a child class to reuse and extend functionality from a parent class.",
    difficulty: "Medium",
    topic: "OOP"
  },
  {
    question: "What is encapsulation in OOP?",
    options: [
      "Creating multiple loops",
      "Bundling data and methods together",
      "Converting code to machine language",
      "Deleting unused variables"
    ],
    correctAnswer: 1,
    explanation:
      "Encapsulation combines data and methods that operate on that data within a class and helps control access to implementation details.",
    difficulty: "Medium",
    topic: "OOP"
  },
  {
    question: "Which collection is unordered and does not allow duplicate elements?",
    options: ["List", "Tuple", "Set", "String"],
    correctAnswer: 2,
    explanation:
      "A set is a collection of unique elements. Modern Python sets do not provide sequence-style indexing.",
    difficulty: "Easy",
    topic: "Sets"
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "error", "handle"],
    correctAnswer: 1,
    explanation:
      "Python uses try with except, else, and finally for exception handling.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },
  {
    question: "Which block executes whether an exception occurs or not?",
    options: ["except", "else", "finally", "always"],
    correctAnswer: 2,
    explanation:
      "The finally block is generally executed whether an exception occurs or not.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },
  {
    question: "Which keyword is used to manually raise an exception?",
    options: ["throw", "raise", "error", "except"],
    correctAnswer: 1,
    explanation:
      "The raise keyword is used to explicitly raise an exception.",
    difficulty: "Medium",
    topic: "Exception Handling"
  },
  {
    question: "What is a lambda function in Python?",
    options: [
      "A named class",
      "An anonymous function expression",
      "A database function",
      "A loop statement"
    ],
    correctAnswer: 1,
    explanation:
      "A lambda is a small anonymous function defined using the lambda keyword.",
    difficulty: "Medium",
    topic: "Functions"
  },
  {
    question: "Which function is commonly used with lambda to transform items in an iterable?",
    options: ["filter()", "map()", "reduce()", "transform()"],
    correctAnswer: 1,
    explanation:
      "map() applies a function to each item of an iterable and returns an iterator.",
    difficulty: "Medium",
    topic: "Functional Programming"
  },
  {
    question: "Which function selects items from an iterable based on a condition?",
    options: ["map()", "filter()", "select()", "where()"],
    correctAnswer: 1,
    explanation:
      "filter() returns an iterator containing items for which the given function evaluates to true.",
    difficulty: "Medium",
    topic: "Functional Programming"
  },
  {
    question: "What is a list comprehension?",
    options: [
      "A method for deleting lists",
      "A concise syntax for creating lists",
      "A method for sorting dictionaries",
      "A type of Python class"
    ],
    correctAnswer: 1,
    explanation:
      "List comprehension provides a concise way to create lists from an iterable, optionally with a condition.",
    difficulty: "Medium",
    topic: "List Comprehension"
  },
  {
    question: "Which keyword is used to create a generator function?",
    options: ["generate", "yield", "generator", "return"],
    correctAnswer: 1,
    explanation:
      "A function containing yield produces values lazily as a generator.",
    difficulty: "Medium",
    topic: "Generators"
  },
  {
    question: "What is the purpose of `with open(...)` when working with files?",
    options: [
      "It automatically closes the file after the block",
      "It encrypts the file",
      "It converts the file to JSON",
      "It deletes the file"
    ],
    correctAnswer: 0,
    explanation:
      "The with statement uses a context manager so the file is properly closed after the block completes.",
    difficulty: "Medium",
    topic: "File Handling"
  },
  {
    question: "Which mode opens a file for reading?",
    options: ["w", "a", "r", "x"],
    correctAnswer: 2,
    explanation:
      "The r mode opens a file for reading.",
    difficulty: "Easy",
    topic: "File Handling"
  },
  {
    question: "What does the `pip` command primarily manage?",
    options: [
      "Operating system processes",
      "Python packages",
      "Database tables",
      "HTML files"
    ],
    correctAnswer: 1,
    explanation:
      "pip is Python's package installer and is commonly used to install and manage Python packages.",
    difficulty: "Easy",
    topic: "Python Environment"
  },
  {
    question: "Which special variable is commonly used to check whether a Python file is being run directly?",
    options: [
      "__name__",
      "__main__",
      "__file__",
      "__run__"
    ],
    correctAnswer: 0,
    explanation:
      "Python sets __name__ to '__main__' when the file is executed directly.",
    difficulty: "Medium",
    topic: "Modules"
  },
  {
    question: "What is the output of `print(bool(0))`?",
    options: ["True", "False", "0", "None"],
    correctAnswer: 1,
    explanation:
      "Zero is considered falsy in Python, so bool(0) returns False.",
    difficulty: "Easy",
    topic: "Boolean"
  }
];

module.exports = pythonQuestions;