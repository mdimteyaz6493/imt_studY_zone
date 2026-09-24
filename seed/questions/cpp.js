const cppQuestions = [
  {
    question: "What does C++ stand for?",
    options: [
      "C Plus Plus",
      "C Programming Plus",
      "Computer Programming Plus",
      "C Plus Programming"
    ],
    correctAnswer: 0,
    explanation:
      "C++ is commonly called C Plus Plus. It is an extension of the C programming language with object-oriented and other programming features.",
    difficulty: "Easy",
    topic: "C++ Basics"
  },

  {
    question: "Who developed C++?",
    options: [
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "James Gosling",
      "Guido van Rossum"
    ],
    correctAnswer: 1,
    explanation:
      "Bjarne Stroustrup developed C++ at Bell Labs as an extension of the C programming language.",
    difficulty: "Easy",
    topic: "C++ Basics"
  },

  {
    question: "Which extension is commonly used for a C++ source file?",
    options: [
      ".java",
      ".py",
      ".cpp",
      ".html"
    ],
    correctAnswer: 2,
    explanation:
      "The .cpp extension is commonly used for C++ source files.",
    difficulty: "Easy",
    topic: "C++ Basics"
  },

  {
    question: "Which header file is commonly used for input and output in modern C++?",
    options: [
      "<stdio.h>",
      "<iostream>",
      "<input.h>",
      "<conio.h>"
    ],
    correctAnswer: 1,
    explanation:
      "The <iostream> header provides standard input and output streams such as cin and cout.",
    difficulty: "Easy",
    topic: "Input Output"
  },

  {
    question: "Which object is used for standard output in C++?",
    options: [
      "cin",
      "cout",
      "cerrin",
      "output"
    ],
    correctAnswer: 1,
    explanation:
      "cout is the standard output stream object in C++.",
    difficulty: "Easy",
    topic: "Input Output"
  },

  {
    question: "Which object is used for standard input in C++?",
    options: [
      "cin",
      "cout",
      "input",
      "scan"
    ],
    correctAnswer: 0,
    explanation:
      "cin is the standard input stream object used to read data from the user.",
    difficulty: "Easy",
    topic: "Input Output"
  },

  {
    question: "Which operator is used with cout for output?",
    options: [
      ">>",
      "<<",
      "==",
      "::"
    ],
    correctAnswer: 1,
    explanation:
      "The insertion operator << is used to send data to cout.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which operator is used with cin for input?",
    options: [
      "<<",
      ">>",
      "==",
      "::"
    ],
    correctAnswer: 1,
    explanation:
      "The extraction operator >> is used to read data from cin.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which keyword is used to define a class in C++?",
    options: [
      "object",
      "struct",
      "class",
      "define"
    ],
    correctAnswer: 2,
    explanation:
      "The class keyword is used to define a class in C++.",
    difficulty: "Easy",
    topic: "Classes and Objects"
  },

  {
    question: "What is an object in C++?",
    options: [
      "A function only",
      "An instance of a class",
      "A header file",
      "A namespace"
    ],
    correctAnswer: 1,
    explanation:
      "An object is an instance of a class and contains the data and behavior defined by that class.",
    difficulty: "Easy",
    topic: "Classes and Objects"
  },

  {
    question: "Which access specifier makes class members accessible from anywhere through an object?",
    options: [
      "private",
      "protected",
      "public",
      "internal"
    ],
    correctAnswer: 2,
    explanation:
      "Public members can be accessed from outside the class through an object, subject to the normal access rules.",
    difficulty: "Easy",
    topic: "Access Specifiers"
  },

  {
    question: "What is the default access specifier for members of a C++ class?",
    options: [
      "public",
      "private",
      "protected",
      "internal"
    ],
    correctAnswer: 1,
    explanation:
      "Members of a class are private by default.",
    difficulty: "Easy",
    topic: "Access Specifiers"
  },

  {
    question: "What is the default access specifier for members of a C++ struct?",
    options: [
      "private",
      "protected",
      "public",
      "static"
    ],
    correctAnswer: 2,
    explanation:
      "Members of a struct are public by default, unlike class members which are private by default.",
    difficulty: "Easy",
    topic: "Classes and Structs"
  },

  {
    question: "Which symbol is used to access a member of an object?",
    options: [
      ".",
      "->",
      "::",
      "#"
    ],
    correctAnswer: 0,
    explanation:
      "The dot operator . is used to access members of an object directly.",
    difficulty: "Easy",
    topic: "Classes and Objects"
  },

  {
    question: "Which operator is commonly used to access members through a pointer to an object?",
    options: [
      ".",
      "->",
      "::",
      "&"
    ],
    correctAnswer: 1,
    explanation:
      "The arrow operator -> is used to access members through a pointer to an object.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which concept allows a class to have multiple functions with the same name but different parameters?",
    options: [
      "Inheritance",
      "Function overloading",
      "Encapsulation",
      "Abstraction"
    ],
    correctAnswer: 1,
    explanation:
      "Function overloading allows multiple functions with the same name but different parameter lists.",
    difficulty: "Easy",
    topic: "Polymorphism"
  },

  {
    question: "Which concept allows the same function name to behave differently in different contexts?",
    options: [
      "Polymorphism",
      "Compilation",
      "Namespace",
      "Encapsulation"
    ],
    correctAnswer: 0,
    explanation:
      "Polymorphism allows the same interface or function name to have different implementations or behaviors.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "Which type of polymorphism is function overloading?",
    options: [
      "Runtime polymorphism",
      "Compile-time polymorphism",
      "Dynamic polymorphism",
      "Virtual polymorphism"
    ],
    correctAnswer: 1,
    explanation:
      "Function overloading is resolved by the compiler, so it is compile-time polymorphism.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "Which keyword is used to define a virtual function?",
    options: [
      "virtual",
      "dynamic",
      "override",
      "runtime"
    ],
    correctAnswer: 0,
    explanation:
      "The virtual keyword is used to declare a virtual function and enable runtime polymorphism.",
    difficulty: "Medium",
    topic: "Virtual Functions"
  },

  {
    question: "Which keyword is used to explicitly indicate that a derived class function overrides a base class function?",
    options: [
      "virtual",
      "override",
      "extends",
      "inherits"
    ],
    correctAnswer: 1,
    explanation:
      "The override specifier explicitly tells the compiler that a derived class function is intended to override a virtual base class function.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "Which concept allows a class to inherit properties and methods from another class?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Abstraction",
      "Overloading"
    ],
    correctAnswer: 1,
    explanation:
      "Inheritance allows a derived class to acquire accessible members of a base class.",
    difficulty: "Easy",
    topic: "Inheritance"
  },

  {
    question: "Which symbol is used to specify inheritance in a C++ class declaration?",
    options: [
      ":",
      "::",
      "->",
      "#"
    ],
    correctAnswer: 0,
    explanation:
      "A colon is used after the derived class name to specify its base class or classes.",
    difficulty: "Easy",
    topic: "Inheritance"
  },

  {
    question: "What is encapsulation?",
    options: [
      "Combining data and methods into a single unit",
      "Creating multiple objects",
      "Copying a class",
      "Deleting unused memory"
    ],
    correctAnswer: 0,
    explanation:
      "Encapsulation combines data and the functions that operate on that data within a class and controls access to the members.",
    difficulty: "Easy",
    topic: "OOP Concepts"
  },

  {
    question: "What is abstraction in C++?",
    options: [
      "Showing only essential details while hiding implementation details",
      "Creating multiple classes",
      "Copying objects",
      "Allocating memory"
    ],
    correctAnswer: 0,
    explanation:
      "Abstraction focuses on exposing essential functionality while hiding unnecessary implementation details.",
    difficulty: "Easy",
    topic: "OOP Concepts"
  },

  {
    question: "Which keyword is used to declare a constant variable?",
    options: [
      "constant",
      "fixed",
      "const",
      "readonly"
    ],
    correctAnswer: 2,
    explanation:
      "The const keyword is used to indicate that a variable cannot be modified after initialization.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which operator is used to obtain the address of a variable?",
    options: [
      "*",
      "&",
      "%",
      "#"
    ],
    correctAnswer: 1,
    explanation:
      "The address-of operator & returns the memory address of an object or variable.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which operator is used to dereference a pointer?",
    options: [
      "&",
      "*",
      "->",
      "::"
    ],
    correctAnswer: 1,
    explanation:
      "The dereference operator * is used to access the value stored at the address held by a pointer.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which pointer value indicates that a pointer does not point to an object?",
    options: [
      "zero only",
      "nullptr",
      "empty",
      "void"
    ],
    correctAnswer: 1,
    explanation:
      "nullptr is the modern C++ null pointer literal used to represent a pointer that does not point to an object or function.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which keyword is used to allocate memory dynamically using the C++ allocation mechanism?",
    options: [
      "malloc",
      "alloc",
      "new",
      "create"
    ],
    correctAnswer: 2,
    explanation:
      "The new operator dynamically allocates memory and can also initialize the allocated object.",
    difficulty: "Easy",
    topic: "Dynamic Memory"
  },

  {
    question: "Which keyword is used to release memory allocated using new?",
    options: [
      "free",
      "delete",
      "remove",
      "release"
    ],
    correctAnswer: 1,
    explanation:
      "The delete operator releases memory allocated for a single object using new.",
    difficulty: "Easy",
    topic: "Dynamic Memory"
  },

  {
    question: "Which operator is used to release dynamically allocated arrays?",
    options: [
      "delete",
      "delete[]",
      "free[]",
      "remove[]"
    ],
    correctAnswer: 1,
    explanation:
      "delete[] should be used to release memory allocated for an array using new[].",
    difficulty: "Medium",
    topic: "Dynamic Memory"
  },

  {
    question: "Which keyword is used to define a namespace?",
    options: [
      "package",
      "namespace",
      "module",
      "scope"
    ],
    correctAnswer: 1,
    explanation:
      "The namespace keyword is used to define a namespace in C++.",
    difficulty: "Easy",
    topic: "Namespaces"
  },

  {
    question: "Which namespace is commonly used for standard C++ library names?",
    options: [
      "standard",
      "std",
      "cpp",
      "system"
    ],
    correctAnswer: 1,
    explanation:
      "Most names in the C++ standard library are contained in the std namespace.",
    difficulty: "Easy",
    topic: "Namespaces"
  },

  {
    question: "What does :: represent in C++?",
    options: [
      "Member access through pointer",
      "Scope resolution operator",
      "Address operator",
      "Dereference operator"
    ],
    correctAnswer: 1,
    explanation:
      "The :: operator is the scope resolution operator and is used to access names in a particular scope.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which keyword is used to return a value from a function?",
    options: [
      "send",
      "return",
      "output",
      "result"
    ],
    correctAnswer: 1,
    explanation:
      "The return statement terminates a function and can provide a value to the caller.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "What is a constructor in C++?",
    options: [
      "A function used to initialize objects",
      "A function used to destroy objects",
      "A static variable",
      "A namespace"
    ],
    correctAnswer: 0,
    explanation:
      "A constructor is a special member function that is automatically called when an object is initialized.",
    difficulty: "Easy",
    topic: "Constructors"
  },

  {
    question: "What is the name of a constructor?",
    options: [
      "It can have any name",
      "It must match the class name",
      "It must be named constructor",
      "It must be named init"
    ],
    correctAnswer: 1,
    explanation:
      "A constructor has the same name as its class.",
    difficulty: "Easy",
    topic: "Constructors"
  },

  {
    question: "Which special member function is called when an object is destroyed?",
    options: [
      "Constructor",
      "Destructor",
      "Finalizer",
      "Cleaner"
    ],
    correctAnswer: 1,
    explanation:
      "A destructor is automatically called when an object's lifetime ends.",
    difficulty: "Easy",
    topic: "Destructors"
  },

  {
    question: "Which symbol is used before a destructor name?",
    options: [
      "#",
      "~",
      "!",
      "*"
    ],
    correctAnswer: 1,
    explanation:
      "A destructor is declared using the tilde ~ before the class name.",
    difficulty: "Easy",
    topic: "Destructors"
  },

  {
    question: "Can a destructor take parameters?",
    options: [
      "Yes, always",
      "Yes, but only one",
      "No",
      "Only in derived classes"
    ],
    correctAnswer: 2,
    explanation:
      "A destructor cannot take parameters and cannot be overloaded.",
    difficulty: "Medium",
    topic: "Destructors"
  },

  {
    question: "What is a copy constructor?",
    options: [
      "A constructor that creates an object from another object of the same class",
      "A constructor that deletes an object",
      "A constructor with no parameters",
      "A constructor used only for inheritance"
    ],
    correctAnswer: 0,
    explanation:
      "A copy constructor initializes an object using another object of the same class.",
    difficulty: "Medium",
    topic: "Copy Constructor"
  },

  {
    question: "Which keyword can be used to prevent a class from being inherited in modern C++?",
    options: [
      "stop",
      "sealed",
      "final",
      "private"
    ],
    correctAnswer: 2,
    explanation:
      "The final specifier can be used on a class to prevent further inheritance.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "Which STL container stores elements in a dynamic contiguous array?",
    options: [
      "list",
      "vector",
      "map",
      "set"
    ],
    correctAnswer: 1,
    explanation:
      "std::vector is a dynamic array container whose elements are stored contiguously.",
    difficulty: "Easy",
    topic: "STL"
  },

  {
    question: "Which STL container stores key-value pairs in sorted key order?",
    options: [
      "vector",
      "queue",
      "map",
      "stack"
    ],
    correctAnswer: 2,
    explanation:
      "std::map stores key-value pairs and maintains them ordered by key.",
    difficulty: "Medium",
    topic: "STL"
  },

  {
    question: "Which STL container stores unique elements in sorted order?",
    options: [
      "set",
      "vector",
      "list",
      "queue"
    ],
    correctAnswer: 0,
    explanation:
      "std::set stores unique elements and maintains them in sorted order according to its comparison function.",
    difficulty: "Medium",
    topic: "STL"
  },

  {
    question: "Which STL container follows the LIFO principle?",
    options: [
      "queue",
      "stack",
      "vector",
      "map"
    ],
    correctAnswer: 1,
    explanation:
      "A stack follows Last In, First Out (LIFO).",
    difficulty: "Easy",
    topic: "STL"
  },

  {
    question: "Which STL container follows the FIFO principle?",
    options: [
      "stack",
      "queue",
      "set",
      "map"
    ],
    correctAnswer: 1,
    explanation:
      "A queue follows First In, First Out (FIFO).",
    difficulty: "Easy",
    topic: "STL"
  },

  {
    question: "Which keyword is used to handle exceptions in C++?",
    options: [
      "try",
      "catch",
      "throw",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation:
      "C++ exception handling uses try blocks, catch handlers, and throw expressions.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which keyword is used to explicitly throw an exception?",
    options: [
      "throw",
      "raise",
      "exception",
      "error"
    ],
    correctAnswer: 0,
    explanation:
      "The throw expression is used to signal an exception in C++.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which keyword is used to define a function that cannot be overridden in a derived class?",
    options: [
      "static",
      "final",
      "const",
      "private"
    ],
    correctAnswer: 1,
    explanation:
      "A virtual function declared with final cannot be overridden by further derived classes.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "What is function overriding?",
    options: [
      "Defining a derived class function with the same signature as a virtual base class function",
      "Defining two functions with different parameters",
      "Calling a function recursively",
      "Creating a static function"
    ],
    correctAnswer: 0,
    explanation:
      "Function overriding occurs when a derived class provides its own implementation of a virtual function from the base class.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "Which feature allows a function to have default values for parameters?",
    options: [
      "Default arguments",
      "Function overriding",
      "Templates",
      "Inheritance"
    ],
    correctAnswer: 0,
    explanation:
      "Default arguments allow parameters to have predefined values when arguments are omitted.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which feature allows writing generic code that works with different data types?",
    options: [
      "Templates",
      "Namespaces",
      "Inheritance",
      "Pointers"
    ],
    correctAnswer: 0,
    explanation:
      "C++ templates allow generic functions and classes to work with different data types.",
    difficulty: "Medium",
    topic: "Templates"
  },

  {
    question: "Which keyword is commonly used to declare a function or class template parameter?",
    options: [
      "generic",
      "template",
      "typename",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation:
      "The template keyword begins a template declaration, and typename can declare a type template parameter.",
    difficulty: "Medium",
    topic: "Templates"
  },

  {
    question: "Which of the following is NOT a fundamental OOP concept?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Compilation"
    ],
    correctAnswer: 3,
    explanation:
      "Compilation is a language processing step, not one of the core object-oriented programming concepts.",
    difficulty: "Easy",
    topic: "OOP Concepts"
  }
];

module.exports = cppQuestions;