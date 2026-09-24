const javaQuestions = [
  {
    question: "What is Java?",
    options: [
      "A database management system",
      "A high-level, object-oriented programming language",
      "A markup language",
      "An operating system"
    ],
    correctAnswer: 1,
    explanation:
      "Java is a high-level, class-based, object-oriented programming language designed to be portable across platforms.",
    difficulty: "Easy",
    topic: "Java Basics"
  },

  {
    question: "Which feature allows Java programs to run on different operating systems?",
    options: [
      "Pointers",
      "Platform independence through the JVM",
      "Multiple inheritance",
      "Preprocessor"
    ],
    correctAnswer: 1,
    explanation:
      "Java source code is compiled into bytecode, which can run on any platform that has a compatible Java Virtual Machine.",
    difficulty: "Easy",
    topic: "Java Basics"
  },

  {
    question: "What does JVM stand for?",
    options: [
      "Java Variable Machine",
      "Java Virtual Machine",
      "Java Verified Machine",
      "Java Visual Machine"
    ],
    correctAnswer: 1,
    explanation:
      "JVM stands for Java Virtual Machine. It executes Java bytecode.",
    difficulty: "Easy",
    topic: "JVM"
  },

  {
    question: "What does JDK stand for?",
    options: [
      "Java Development Kit",
      "Java Deployment Kernel",
      "Java Design Kit",
      "Java Developer Kernel"
    ],
    correctAnswer: 0,
    explanation:
      "JDK stands for Java Development Kit and provides tools required to develop Java applications.",
    difficulty: "Easy",
    topic: "JDK"
  },

  {
    question: "What does JRE stand for?",
    options: [
      "Java Runtime Environment",
      "Java Resource Engine",
      "Java Runtime Extension",
      "Java Register Environment"
    ],
    correctAnswer: 0,
    explanation:
      "JRE stands for Java Runtime Environment and provides the components needed to run Java applications.",
    difficulty: "Easy",
    topic: "JRE"
  },

  {
    question: "Which command is used to compile a Java source file?",
    options: [
      "java",
      "javac",
      "compile",
      "jcompile"
    ],
    correctAnswer: 1,
    explanation:
      "The javac command compiles Java source code into bytecode.",
    difficulty: "Easy",
    topic: "Compilation"
  },

  {
    question: "Which command is commonly used to run a compiled Java class?",
    options: [
      "javac",
      "java",
      "runjava",
      "execute"
    ],
    correctAnswer: 1,
    explanation:
      "The java command launches the Java application using the JVM.",
    difficulty: "Easy",
    topic: "Compilation"
  },

  {
    question: "Which method is the traditional entry point of a Java application?",
    options: [
      "start()",
      "run()",
      "main()",
      "execute()"
    ],
    correctAnswer: 2,
    explanation:
      "The main() method is the traditional entry point for a standalone Java application.",
    difficulty: "Easy",
    topic: "Java Basics"
  },

  {
    question: "Which signature is commonly used for the Java main method?",
    options: [
      "public void main(String args)",
      "public static void main(String[] args)",
      "static main(String[] args)",
      "public main(String args[])"
    ],
    correctAnswer: 1,
    explanation:
      "The standard entry point is public static void main(String[] args).",
    difficulty: "Easy",
    topic: "Methods"
  },

  {
    question: "Which keyword is used to create a class in Java?",
    options: [
      "class",
      "Class",
      "struct",
      "define"
    ],
    correctAnswer: 0,
    explanation:
      "The class keyword is used to declare a class in Java.",
    difficulty: "Easy",
    topic: "Classes"
  },

  {
    question: "Which keyword is used to create an object?",
    options: [
      "create",
      "object",
      "new",
      "instance"
    ],
    correctAnswer: 2,
    explanation:
      "The new keyword is used to create an object and invoke its constructor.",
    difficulty: "Easy",
    topic: "Objects"
  },

  {
    question: "Which of the following is an OOP concept?",
    options: [
      "Encapsulation",
      "Compilation",
      "Parsing",
      "Linking"
    ],
    correctAnswer: 0,
    explanation:
      "Encapsulation is one of the core object-oriented programming concepts along with inheritance, polymorphism and abstraction.",
    difficulty: "Easy",
    topic: "OOP"
  },

  {
    question: "What is encapsulation?",
    options: [
      "Creating multiple classes",
      "Bundling data and methods together and controlling access to the data",
      "Executing multiple threads",
      "Converting code to bytecode"
    ],
    correctAnswer: 1,
    explanation:
      "Encapsulation combines data and related methods within a class and can restrict direct access using access modifiers.",
    difficulty: "Easy",
    topic: "OOP"
  },

  {
    question: "What is inheritance in Java?",
    options: [
      "A mechanism where one class acquires properties and behavior of another class",
      "Creating multiple objects",
      "Converting primitive types",
      "Handling exceptions"
    ],
    correctAnswer: 0,
    explanation:
      "Inheritance allows a subclass to acquire accessible fields and methods from a superclass.",
    difficulty: "Easy",
    topic: "Inheritance"
  },

  {
    question: "Which keyword is used for class inheritance in Java?",
    options: [
      "inherits",
      "extends",
      "implements",
      "super"
    ],
    correctAnswer: 1,
    explanation:
      "The extends keyword is used when one class inherits from another class.",
    difficulty: "Easy",
    topic: "Inheritance"
  },

  {
    question: "Which keyword is used when a class implements an interface?",
    options: [
      "extends",
      "interface",
      "implements",
      "inherits"
    ],
    correctAnswer: 2,
    explanation:
      "A class uses the implements keyword to implement an interface.",
    difficulty: "Easy",
    topic: "Interfaces"
  },

  {
    question: "Does Java support multiple inheritance of classes?",
    options: [
      "Yes, directly",
      "No, a class cannot extend multiple classes",
      "Only with constructors",
      "Only with private classes"
    ],
    correctAnswer: 1,
    explanation:
      "Java does not allow a class to extend multiple classes. Multiple inheritance of type can be achieved using interfaces.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "What is method overloading?",
    options: [
      "Defining methods with the same name but different parameter lists",
      "Overriding a parent method",
      "Deleting a method",
      "Making a method private"
    ],
    correctAnswer: 0,
    explanation:
      "Method overloading occurs when methods have the same name but different parameter lists within a class or inherited context.",
    difficulty: "Easy",
    topic: "Polymorphism"
  },

  {
    question: "What is method overriding?",
    options: [
      "Creating two methods with different names",
      "A subclass providing its own implementation of an inherited method",
      "Calling a constructor",
      "Changing a variable type"
    ],
    correctAnswer: 1,
    explanation:
      "Method overriding occurs when a subclass provides a compatible implementation of an inherited instance method.",
    difficulty: "Easy",
    topic: "Polymorphism"
  },

  {
    question: "Which annotation is commonly used to indicate that a method overrides a superclass method?",
    options: [
      "@Override",
      "@Overload",
      "@Inherited",
      "@Super"
    ],
    correctAnswer: 0,
    explanation:
      "@Override tells the compiler that the method is intended to override an inherited method.",
    difficulty: "Easy",
    topic: "Annotations"
  },

  {
    question: "What is polymorphism?",
    options: [
      "Ability of an object or reference to take multiple forms",
      "Creating only one object",
      "Using only primitive variables",
      "Deleting inherited methods"
    ],
    correctAnswer: 0,
    explanation:
      "Polymorphism allows the same interface or method call to represent different underlying implementations.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "What is abstraction?",
    options: [
      "Showing implementation details",
      "Hiding implementation details and exposing essential behavior",
      "Creating variables",
      "Copying objects"
    ],
    correctAnswer: 1,
    explanation:
      "Abstraction focuses on essential behavior while hiding unnecessary implementation details.",
    difficulty: "Easy",
    topic: "Abstraction"
  },

  {
    question: "Which keyword is used to declare an abstract class?",
    options: [
      "interface",
      "abstract",
      "virtual",
      "base"
    ],
    correctAnswer: 1,
    explanation:
      "The abstract keyword is used to declare an abstract class or abstract method.",
    difficulty: "Easy",
    topic: "Abstraction"
  },

  {
    question: "Which keyword is used to prevent a class from being inherited?",
    options: [
      "static",
      "private",
      "final",
      "sealed"
    ],
    correctAnswer: 2,
    explanation:
      "A class declared final cannot be extended by another class.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "Which keyword prevents a variable from being reassigned after initialization?",
    options: [
      "const",
      "final",
      "static",
      "fixed"
    ],
    correctAnswer: 1,
    explanation:
      "A final variable can be assigned only once after initialization.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which keyword is used to refer to the current object?",
    options: [
      "self",
      "this",
      "current",
      "object"
    ],
    correctAnswer: 1,
    explanation:
      "The this keyword refers to the current object within an instance context.",
    difficulty: "Easy",
    topic: "Keywords"
  },

  {
    question: "Which keyword refers to the immediate superclass?",
    options: [
      "parent",
      "base",
      "super",
      "extends"
    ],
    correctAnswer: 2,
    explanation:
      "The super keyword is used to access members and constructors of the immediate superclass.",
    difficulty: "Easy",
    topic: "Inheritance"
  },

  {
    question: "What is a constructor?",
    options: [
      "A method used to initialize objects",
      "A method used only for deletion",
      "A static variable",
      "An interface"
    ],
    correctAnswer: 0,
    explanation:
      "A constructor is invoked when an object is created and is commonly used to initialize its state.",
    difficulty: "Easy",
    topic: "Constructors"
  },

  {
    question: "Which statement about constructors is correct?",
    options: [
      "Constructors have a return type",
      "Constructors have the same name as their class",
      "Constructors must be static",
      "Constructors cannot accept parameters"
    ],
    correctAnswer: 1,
    explanation:
      "A constructor has the same name as its class and does not have a return type.",
    difficulty: "Easy",
    topic: "Constructors"
  },

  {
    question: "Can constructors be overloaded in Java?",
    options: [
      "Yes",
      "No",
      "Only static constructors",
      "Only private constructors"
    ],
    correctAnswer: 0,
    explanation:
      "A class can have multiple constructors with different parameter lists.",
    difficulty: "Medium",
    topic: "Constructors"
  },

  {
    question: "Which access modifier provides the widest access?",
    options: [
      "private",
      "protected",
      "default",
      "public"
    ],
    correctAnswer: 3,
    explanation:
      "public members are accessible from classes in other packages, subject to normal access rules.",
    difficulty: "Easy",
    topic: "Access Modifiers"
  },

  {
    question: "Which access modifier restricts access to the declaring class?",
    options: [
      "public",
      "protected",
      "private",
      "default"
    ],
    correctAnswer: 2,
    explanation:
      "A private member is directly accessible only within the class that declares it.",
    difficulty: "Easy",
    topic: "Access Modifiers"
  },

  {
    question: "What is the default access level when no access modifier is specified for a class member?",
    options: [
      "public",
      "private",
      "protected",
      "Package-private"
    ],
    correctAnswer: 3,
    explanation:
      "Without an access modifier, a member has package-private access and is accessible within the same package.",
    difficulty: "Medium",
    topic: "Access Modifiers"
  },

  {
    question: "Which keyword is used to create a class-level member shared by all instances?",
    options: [
      "shared",
      "static",
      "common",
      "global"
    ],
    correctAnswer: 1,
    explanation:
      "The static keyword makes a field or method belong to the class rather than individual instances.",
    difficulty: "Easy",
    topic: "Static"
  },

  {
    question: "Can a static method directly access an instance variable without an object reference?",
    options: [
      "Yes, always",
      "No",
      "Only if it is public",
      "Only if it is final"
    ],
    correctAnswer: 1,
    explanation:
      "A static method does not have an implicit instance, so it cannot directly access instance members without an object reference.",
    difficulty: "Medium",
    topic: "Static"
  },

  {
    question: "Which is a primitive data type in Java?",
    options: [
      "String",
      "Integer",
      "int",
      "ArrayList"
    ],
    correctAnswer: 2,
    explanation:
      "int is a primitive data type. String, Integer and ArrayList are reference types.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which type is used to store a single 16-bit Unicode character?",
    options: [
      "char",
      "byte",
      "character",
      "String"
    ],
    correctAnswer: 0,
    explanation:
      "The char type represents a single 16-bit UTF-16 code unit.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which primitive type is commonly used to store true or false?",
    options: [
      "bool",
      "boolean",
      "bit",
      "logical"
    ],
    correctAnswer: 1,
    explanation:
      "Java uses the boolean type for true or false values.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which class is commonly used to represent text strings in Java?",
    options: [
      "Text",
      "String",
      "CharSequenceClass",
      "StringValue"
    ],
    correctAnswer: 1,
    explanation:
      "String is the standard Java class used to represent sequences of characters.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "Are Java String objects mutable?",
    options: [
      "Yes, always",
      "No, String objects are immutable",
      "Only when declared final",
      "Only inside methods"
    ],
    correctAnswer: 1,
    explanation:
      "String objects are immutable. Operations that appear to modify a String create another String value.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "Which class is commonly used when a mutable sequence of characters is needed?",
    options: [
      "StringBuilder",
      "StringConstant",
      "MutableStringOnly",
      "CharObject"
    ],
    correctAnswer: 0,
    explanation:
      "StringBuilder provides a mutable sequence of characters and is useful for repeated string modifications.",
    difficulty: "Medium",
    topic: "Strings"
  },

  {
    question: "Which keyword is used to handle an exception?",
    options: [
      "catch",
      "handle",
      "exception",
      "error"
    ],
    correctAnswer: 0,
    explanation:
      "The catch block handles exceptions thrown from the associated try block.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which block contains code that may throw an exception?",
    options: [
      "catch",
      "throw",
      "try",
      "finally"
    ],
    correctAnswer: 2,
    explanation:
      "The try block contains code for which exceptions may be handled by corresponding catch blocks.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which block is generally used for cleanup code that should run after try/catch processing?",
    options: [
      "final",
      "finally",
      "cleanup",
      "end"
    ],
    correctAnswer: 1,
    explanation:
      "A finally block is used for cleanup code and normally executes after try/catch processing.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which keyword is used to explicitly throw an exception?",
    options: [
      "throws",
      "throw",
      "raise",
      "exception"
    ],
    correctAnswer: 1,
    explanation:
      "The throw statement is used to explicitly throw an exception object or throwable value.",
    difficulty: "Easy",
    topic: "Exception Handling"
  },

  {
    question: "Which keyword declares that a method may throw specified exceptions?",
    options: [
      "throw",
      "throws",
      "exception",
      "raise"
    ],
    correctAnswer: 1,
    explanation:
      "The throws clause declares exceptions that a method may propagate to its caller.",
    difficulty: "Medium",
    topic: "Exception Handling"
  },

  {
    question: "Which collection does not allow duplicate elements?",
    options: [
      "List",
      "Set",
      "ArrayList",
      "Vector"
    ],
    correctAnswer: 1,
    explanation:
      "The Set interface represents a collection that does not permit duplicate elements according to its equality rules.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "Which collection maintains insertion order and allows duplicate elements?",
    options: [
      "HashSet",
      "TreeSet",
      "List",
      "Set"
    ],
    correctAnswer: 2,
    explanation:
      "List represents an ordered collection and generally permits duplicate elements.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "Which class provides a resizable array implementation?",
    options: [
      "ArrayList",
      "ArrayCollection",
      "DynamicArrayOnly",
      "ResizableListClass"
    ],
    correctAnswer: 0,
    explanation:
      "ArrayList is a resizable-array implementation of the List interface.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "Which collection stores key-value pairs?",
    options: [
      "List",
      "Set",
      "Map",
      "Queue"
    ],
    correctAnswer: 2,
    explanation:
      "The Map interface represents mappings from keys to values.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "Which class is commonly used for key-value storage with no guaranteed iteration order?",
    options: [
      "HashMap",
      "ArrayList",
      "HashList",
      "TreeList"
    ],
    correctAnswer: 0,
    explanation:
      "HashMap is a hash-table-based Map implementation and does not guarantee iteration order.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "What is the purpose of a Java interface?",
    options: [
      "To define a contract that implementing classes can follow",
      "To create database tables",
      "To replace every class",
      "To store only primitive variables"
    ],
    correctAnswer: 0,
    explanation:
      "An interface defines a contract that classes can implement, including abstract behavior and, in modern Java, default and static methods.",
    difficulty: "Medium",
    topic: "Interfaces"
  },

  {
    question: "Which package contains the core Java collection interfaces and classes?",
    options: [
      "java.sql",
      "java.net",
      "java.util",
      "java.collection"
    ],
    correctAnswer: 2,
    explanation:
      "The java.util package contains many commonly used collection interfaces and implementations.",
    difficulty: "Easy",
    topic: "Collections"
  },

  {
    question: "What is garbage collection in Java?",
    options: [
      "Deleting source code",
      "Automatically reclaiming memory occupied by objects that are no longer reachable",
      "Removing unused classes from the JDK",
      "Clearing the CPU cache"
    ],
    correctAnswer: 1,
    explanation:
      "Java's garbage collector automatically reclaims heap memory from objects that are no longer reachable.",
    difficulty: "Medium",
    topic: "Memory Management"
  },

  {
    question: "Which memory area is primarily used to store Java objects?",
    options: [
      "Stack",
      "Heap",
      "Register",
      "Code cache only"
    ],
    correctAnswer: 1,
    explanation:
      "Objects are generally allocated in the Java heap, while local variables and call frames are associated with thread stacks.",
    difficulty: "Easy",
    topic: "Memory Management"
  },

  {
    question: "What is method overloading primarily determined by?",
    options: [
      "Return type only",
      "Method name and parameter list",
      "Access modifier only",
      "Class name only"
    ],
    correctAnswer: 1,
    explanation:
      "Overloaded methods must differ in their parameter lists. Return type alone cannot distinguish overloaded methods.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "Which concept allows the same method call to behave differently depending on the runtime object?",
    options: [
      "Encapsulation",
      "Runtime polymorphism",
      "Compilation",
      "Serialization"
    ],
    correctAnswer: 1,
    explanation:
      "Runtime polymorphism is commonly achieved through method overriding and dynamic method dispatch.",
    difficulty: "Medium",
    topic: "Polymorphism"
  },

  {
    question: "Which keyword is used to define a package in Java source code?",
    options: [
      "namespace",
      "package",
      "module",
      "group"
    ],
    correctAnswer: 1,
    explanation:
      "The package statement declares the package to which a Java source file belongs.",
    difficulty: "Easy",
    topic: "Packages"
  },

  {
    question: "Which keyword is used to make classes or members available from another package?",
    options: [
      "include",
      "import",
      "using",
      "require"
    ],
    correctAnswer: 1,
    explanation:
      "The import statement allows source code to refer to types declared in other packages without using fully qualified names.",
    difficulty: "Easy",
    topic: "Packages"
  },

  {
    question: "Which of the following is true about Java arrays?",
    options: [
      "Their size can automatically grow after creation",
      "They have a fixed length after creation",
      "They can store only strings",
      "They cannot store primitive values"
    ],
    correctAnswer: 1,
    explanation:
      "Java arrays have a fixed length determined when the array is created.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which property gives the length of a Java array?",
    options: [
      "size()",
      "length()",
      "length",
      "count()"
    ],
    correctAnswer: 2,
    explanation:
      "For arrays, length is a field, so an array's length is accessed using array.length.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which interface is commonly used to define a task that can be executed by a thread?",
    options: [
      "Runnable",
      "Executable",
      "Threadable",
      "Task"
    ],
    correctAnswer: 0,
    explanation:
      "The Runnable interface represents a task that can be executed by a thread.",
    difficulty: "Medium",
    topic: "Multithreading"
  },

  {
    question: "Which method starts a new thread when called on a Thread object?",
    options: [
      "run()",
      "start()",
      "begin()",
      "execute()"
    ],
    correctAnswer: 1,
    explanation:
      "Calling start() causes the JVM to schedule the thread's run() method for execution.",
    difficulty: "Medium",
    topic: "Multithreading"
  },

  {
    question: "Which keyword can be used to synchronize access to a method or block?",
    options: [
      "lock",
      "sync",
      "synchronized",
      "atomic"
    ],
    correctAnswer: 2,
    explanation:
      "The synchronized keyword provides monitor-based mutual exclusion for synchronized methods or blocks.",
    difficulty: "Medium",
    topic: "Multithreading"
  },

  {
    question: "Which interface is a functional interface commonly used for operations that return a value?",
    options: [
      "Consumer",
      "Supplier",
      "Function",
      "Runnable"
    ],
    correctAnswer: 2,
    explanation:
      "java.util.function.Function represents a function that accepts one argument and produces a result.",
    difficulty: "Hard",
    topic: "Functional Programming"
  },

  {
    question: "What is a lambda expression in Java?",
    options: [
      "A database query",
      "A concise way to represent an implementation of a functional interface",
      "A special constructor",
      "A type of exception"
    ],
    correctAnswer: 1,
    explanation:
      "Lambda expressions provide a concise syntax for implementing functional interfaces.",
    difficulty: "Medium",
    topic: "Lambda Expressions"
  },

  {
    question: "Which Java feature was introduced to support functional-style processing of collections?",
    options: [
      "Streams",
      "Pointers",
      "Preprocessor macros",
      "Header files"
    ],
    correctAnswer: 0,
    explanation:
      "The Stream API provides a functional-style way to process sequences of data, especially collections.",
    difficulty: "Medium",
    topic: "Streams"
  }
];

module.exports = javaQuestions;