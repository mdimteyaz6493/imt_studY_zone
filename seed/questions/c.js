const cQuestions = [
  {
    question: "Who is known as the father of the C programming language?",
    options: [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "James Gosling",
      "Brian Kernighan"
    ],
    correctAnswer: 1,
    explanation:
      "Dennis Ritchie developed the C programming language at Bell Labs in the early 1970s.",
    difficulty: "Easy",
    topic: "C Basics"
  },

  {
    question: "Which symbol is used to end a statement in C?",
    options: [
      ":",
      ".",
      ";",
      ","
    ],
    correctAnswer: 2,
    explanation:
      "A semicolon (;) is used to terminate most statements in C.",
    difficulty: "Easy",
    topic: "C Syntax"
  },

  {
    question: "Which function is the entry point of a C program?",
    options: [
      "start()",
      "main()",
      "begin()",
      "init()"
    ],
    correctAnswer: 1,
    explanation:
      "The main() function is the standard entry point of a C program.",
    difficulty: "Easy",
    topic: "C Basics"
  },

  {
    question: "Which header file is required for printf() and scanf()?",
    options: [
      "<string.h>",
      "<stdlib.h>",
      "<stdio.h>",
      "<math.h>"
    ],
    correctAnswer: 2,
    explanation:
      "printf() and scanf() are declared in the stdio.h header file.",
    difficulty: "Easy",
    topic: "Input Output"
  },

  {
    question: "Which format specifier is used to print an integer in C?",
    options: [
      "%f",
      "%c",
      "%d",
      "%s"
    ],
    correctAnswer: 2,
    explanation:
      "The %d format specifier is commonly used to print an integer.",
    difficulty: "Easy",
    topic: "Format Specifiers"
  },

  {
    question: "Which format specifier is used to print a character?",
    options: [
      "%c",
      "%d",
      "%f",
      "%s"
    ],
    correctAnswer: 0,
    explanation:
      "The %c format specifier is used for a single character.",
    difficulty: "Easy",
    topic: "Format Specifiers"
  },

  {
    question: "Which format specifier is used to print a string?",
    options: [
      "%d",
      "%s",
      "%c",
      "%f"
    ],
    correctAnswer: 1,
    explanation:
      "The %s format specifier is used to print a null-terminated string.",
    difficulty: "Easy",
    topic: "Format Specifiers"
  },

  {
    question: "Which data type is used to store a single character?",
    options: [
      "string",
      "char",
      "character",
      "text"
    ],
    correctAnswer: 1,
    explanation:
      "The char data type is used to store a single character.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which of the following is NOT a basic data type in C?",
    options: [
      "int",
      "float",
      "char",
      "string"
    ],
    correctAnswer: 3,
    explanation:
      "C does not have a built-in string data type. Strings are represented using character arrays.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which operator is used to get the address of a variable?",
    options: [
      "*",
      "&",
      "#",
      "@"
    ],
    correctAnswer: 1,
    explanation:
      "The address-of operator (&) returns the memory address of a variable.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which operator is used to dereference a pointer?",
    options: [
      "&",
      "*",
      "%",
      "#"
    ],
    correctAnswer: 1,
    explanation:
      "The * operator is used to access the value stored at the address held by a pointer.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "Which keyword is used to declare a constant variable?",
    options: [
      "constant",
      "const",
      "static",
      "fixed"
    ],
    correctAnswer: 1,
    explanation:
      "The const keyword prevents the value of a variable from being modified through that variable.",
    difficulty: "Easy",
    topic: "Variables"
  },

  {
    question: "Which keyword is used to define a structure in C?",
    options: [
      "class",
      "struct",
      "record",
      "object"
    ],
    correctAnswer: 1,
    explanation:
      "The struct keyword is used to define a structure in C.",
    difficulty: "Easy",
    topic: "Structures"
  },

  {
    question: "Which keyword is used to define an enumeration?",
    options: [
      "enum",
      "enumerate",
      "list",
      "typedef"
    ],
    correctAnswer: 0,
    explanation:
      "The enum keyword is used to define an enumeration type.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which keyword is used to create an alias for a data type?",
    options: [
      "alias",
      "typedef",
      "define",
      "type"
    ],
    correctAnswer: 1,
    explanation:
      "typedef creates an alternative name for an existing data type.",
    difficulty: "Easy",
    topic: "Typedef"
  },

  {
    question: "Which loop is guaranteed to execute at least once?",
    options: [
      "for",
      "while",
      "do-while",
      "nested for"
    ],
    correctAnswer: 2,
    explanation:
      "A do-while loop executes its body before checking the condition, so it runs at least once.",
    difficulty: "Easy",
    topic: "Loops"
  },

  {
    question: "Which keyword is used to exit a loop immediately?",
    options: [
      "stop",
      "exit",
      "break",
      "return"
    ],
    correctAnswer: 2,
    explanation:
      "The break statement immediately terminates the nearest loop or switch statement.",
    difficulty: "Easy",
    topic: "Control Statements"
  },

  {
    question: "Which keyword skips the current iteration of a loop?",
    options: [
      "skip",
      "continue",
      "pass",
      "next"
    ],
    correctAnswer: 1,
    explanation:
      "The continue statement skips the remaining statements of the current iteration.",
    difficulty: "Easy",
    topic: "Control Statements"
  },

  {
    question: "Which statement is used for decision making in C?",
    options: [
      "if",
      "loop",
      "repeat",
      "define"
    ],
    correctAnswer: 0,
    explanation:
      "The if statement is used to execute code conditionally.",
    difficulty: "Easy",
    topic: "Conditional Statements"
  },

  {
    question: "Which statement is useful for multiple fixed-value choices?",
    options: [
      "if",
      "switch",
      "while",
      "goto"
    ],
    correctAnswer: 1,
    explanation:
      "The switch statement is commonly used when selecting among multiple constant cases.",
    difficulty: "Easy",
    topic: "Switch"
  },

  {
    question: "Which keyword is used in a switch statement to define a case?",
    options: [
      "option",
      "case",
      "choice",
      "when"
    ],
    correctAnswer: 1,
    explanation:
      "The case keyword defines an individual branch inside a switch statement.",
    difficulty: "Easy",
    topic: "Switch"
  },

  {
    question: "What is the purpose of the default label in a switch statement?",
    options: [
      "It executes before every case",
      "It handles unmatched cases",
      "It stops the program",
      "It creates a loop"
    ],
    correctAnswer: 1,
    explanation:
      "The default label executes when none of the case values match.",
    difficulty: "Easy",
    topic: "Switch"
  },

  {
    question: "Which operator is used for logical AND in C?",
    options: [
      "&",
      "&&",
      "AND",
      "||"
    ],
    correctAnswer: 1,
    explanation:
      "The && operator performs logical AND.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which operator is used for logical OR in C?",
    options: [
      "|",
      "||",
      "OR",
      "&&"
    ],
    correctAnswer: 1,
    explanation:
      "The || operator performs logical OR.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which operator is used for logical NOT?",
    options: [
      "!",
      "~",
      "not",
      "^"
    ],
    correctAnswer: 0,
    explanation:
      "The ! operator reverses a logical condition.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which operator gives the remainder of integer division?",
    options: [
      "/",
      "%",
      "//",
      "rem"
    ],
    correctAnswer: 1,
    explanation:
      "The % operator returns the remainder after integer division.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "What is the result of 10 / 3 when both operands are integers?",
    options: [
      "3",
      "3.33",
      "4",
      "1"
    ],
    correctAnswer: 0,
    explanation:
      "Integer division discards the fractional part, so 10 / 3 gives 3.",
    difficulty: "Easy",
    topic: "Operators"
  },

  {
    question: "Which function is used to dynamically allocate memory?",
    options: [
      "alloc()",
      "malloc()",
      "memory()",
      "new()"
    ],
    correctAnswer: 1,
    explanation:
      "malloc() dynamically allocates a specified amount of memory.",
    difficulty: "Medium",
    topic: "Dynamic Memory"
  },

  {
    question: "Which function is used to release dynamically allocated memory?",
    options: [
      "delete()",
      "remove()",
      "free()",
      "release()"
    ],
    correctAnswer: 2,
    explanation:
      "free() releases memory that was dynamically allocated.",
    difficulty: "Easy",
    topic: "Dynamic Memory"
  },

  {
    question: "Which function allocates memory and initializes it to zero?",
    options: [
      "malloc()",
      "calloc()",
      "realloc()",
      "alloc()"
    ],
    correctAnswer: 1,
    explanation:
      "calloc() allocates memory for multiple elements and initializes the allocated bytes to zero.",
    difficulty: "Medium",
    topic: "Dynamic Memory"
  },

  {
    question: "Which function is used to resize previously allocated memory?",
    options: [
      "resize()",
      "malloc()",
      "realloc()",
      "calloc()"
    ],
    correctAnswer: 2,
    explanation:
      "realloc() changes the size of a previously allocated memory block.",
    difficulty: "Medium",
    topic: "Dynamic Memory"
  },

  {
    question: "What is an array in C?",
    options: [
      "A collection of elements of the same type",
      "A collection of functions",
      "A collection of different programs",
      "A single variable only"
    ],
    correctAnswer: 0,
    explanation:
      "An array stores multiple elements of the same data type in contiguous memory locations.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "What is the index of the first element of an array in C?",
    options: [
      "0",
      "1",
      "-1",
      "Depends on the compiler"
    ],
    correctAnswer: 0,
    explanation:
      "C arrays use zero-based indexing, so the first element has index 0.",
    difficulty: "Easy",
    topic: "Arrays"
  },

  {
    question: "Which character marks the end of a C string?",
    options: [
      "\\n",
      "\\0",
      "\\t",
      "\\e"
    ],
    correctAnswer: 1,
    explanation:
      "C strings are terminated by the null character '\\0'.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "Which header file contains strlen()?",
    options: [
      "<stdio.h>",
      "<stdlib.h>",
      "<string.h>",
      "<math.h>"
    ],
    correctAnswer: 2,
    explanation:
      "The strlen() function is declared in the string.h header file.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "Which function is used to compare two strings?",
    options: [
      "strcompare()",
      "strcmp()",
      "compare()",
      "strcomp()"
    ],
    correctAnswer: 1,
    explanation:
      "strcmp() compares two null-terminated strings.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "Which function is used to copy one string to another?",
    options: [
      "strcopy()",
      "copystr()",
      "strcpy()",
      "stringcopy()"
    ],
    correctAnswer: 2,
    explanation:
      "strcpy() copies the contents of one string into another character array.",
    difficulty: "Easy",
    topic: "Strings"
  },

  {
    question: "What is a pointer in C?",
    options: [
      "A variable that stores an address",
      "A variable that stores only integers",
      "A function",
      "An array only"
    ],
    correctAnswer: 0,
    explanation:
      "A pointer is a variable capable of storing the memory address of another object.",
    difficulty: "Easy",
    topic: "Pointers"
  },

  {
    question: "What does a NULL pointer represent?",
    options: [
      "A pointer to the first memory location",
      "A pointer that does not point to a valid object",
      "A pointer containing integer 1",
      "A pointer to a string"
    ],
    correctAnswer: 1,
    explanation:
      "A null pointer does not point to a valid object or function.",
    difficulty: "Medium",
    topic: "Pointers"
  },

  {
    question: "What is a dangling pointer?",
    options: [
      "A pointer initialized to NULL",
      "A pointer pointing to memory that is no longer valid",
      "A pointer to an array",
      "A pointer to a constant"
    ],
    correctAnswer: 1,
    explanation:
      "A dangling pointer refers to memory whose lifetime has ended or which has otherwise become invalid.",
    difficulty: "Medium",
    topic: "Pointers"
  },

  {
    question: "What is recursion in C?",
    options: [
      "A function calling another program",
      "A function calling itself",
      "A loop inside an array",
      "A pointer calling a function"
    ],
    correctAnswer: 1,
    explanation:
      "Recursion occurs when a function calls itself directly or indirectly.",
    difficulty: "Easy",
    topic: "Functions"
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
      "The return statement terminates a function and can send a value back to the caller.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "What is the purpose of a function prototype?",
    options: [
      "To execute a function",
      "To declare a function before it is used",
      "To delete a function",
      "To create a variable"
    ],
    correctAnswer: 1,
    explanation:
      "A function prototype tells the compiler about a function's name, return type, and parameters before its use.",
    difficulty: "Medium",
    topic: "Functions"
  },

  {
    question: "Which storage class preserves a local variable's value between function calls?",
    options: [
      "auto",
      "register",
      "static",
      "extern"
    ],
    correctAnswer: 2,
    explanation:
      "A static local variable retains its value between function calls.",
    difficulty: "Medium",
    topic: "Storage Classes"
  },

  {
    question: "Which keyword is used to declare a variable defined in another file?",
    options: [
      "extern",
      "global",
      "import",
      "public"
    ],
    correctAnswer: 0,
    explanation:
      "The extern keyword declares a variable or function that is defined elsewhere.",
    difficulty: "Medium",
    topic: "Storage Classes"
  },

  {
    question: "Which preprocessor directive is used to include a header file?",
    options: [
      "#include",
      "#header",
      "#import",
      "#using"
    ],
    correctAnswer: 0,
    explanation:
      "The #include preprocessor directive includes the contents of a header file.",
    difficulty: "Easy",
    topic: "Preprocessor"
  },

  {
    question: "Which preprocessor directive is commonly used to define a macro?",
    options: [
      "#macro",
      "#define",
      "#const",
      "#declare"
    ],
    correctAnswer: 1,
    explanation:
      "The #define directive is used to define macros and symbolic constants.",
    difficulty: "Easy",
    topic: "Preprocessor"
  },

  {
    question: "Which operator is used to access a structure member through a structure variable?",
    options: [
      "->",
      ".",
      "::",
      ":"
    ],
    correctAnswer: 1,
    explanation:
      "The dot (.) operator is used to access members through a structure variable.",
    difficulty: "Easy",
    topic: "Structures"
  },

  {
    question: "Which operator is used to access a structure member through a pointer?",
    options: [
      ".",
      "::",
      "->",
      "&"
    ],
    correctAnswer: 2,
    explanation:
      "The arrow (->) operator accesses a structure member through a pointer to the structure.",
    difficulty: "Easy",
    topic: "Structures"
  },

  {
    question: "Which function is used to open a file in C?",
    options: [
      "open()",
      "fileopen()",
      "fopen()",
      "openfile()"
    ],
    correctAnswer: 2,
    explanation:
      "fopen() opens a file and returns a FILE pointer.",
    difficulty: "Easy",
    topic: "File Handling"
  },

  {
    question: "Which function is used to close a file in C?",
    options: [
      "close()",
      "fclose()",
      "fileclose()",
      "endfile()"
    ],
    correctAnswer: 1,
    explanation:
      "fclose() closes an opened file.",
    difficulty: "Easy",
    topic: "File Handling"
  },

  {
    question: "Which mode opens a file for reading?",
    options: [
      "\"w\"",
      "\"a\"",
      "\"r\"",
      "\"rw\""
    ],
    correctAnswer: 2,
    explanation:
      "The \"r\" mode opens an existing file for reading.",
    difficulty: "Easy",
    topic: "File Handling"
  },

  {
    question: "Which mode opens a file for writing and can overwrite existing content?",
    options: [
      "\"r\"",
      "\"w\"",
      "\"a\"",
      "\"read\""
    ],
    correctAnswer: 1,
    explanation:
      "The \"w\" mode opens a file for writing and may truncate an existing file.",
    difficulty: "Easy",
    topic: "File Handling"
  },

  {
    question: "Which function is commonly used to allocate memory dynamically at runtime?",
    options: [
      "malloc()",
      "sizeof()",
      "strlen()",
      "printf()"
    ],
    correctAnswer: 0,
    explanation:
      "malloc() dynamically allocates a block of memory at runtime.",
    difficulty: "Easy",
    topic: "Dynamic Memory"
  },

  {
    question: "Which operator is used to determine the size of a data type or variable?",
    options: [
      "length",
      "size",
      "sizeof",
      "sizeof()"
    ],
    correctAnswer: 2,
    explanation:
      "sizeof is an operator used to determine the size in bytes of a type or expression.",
    difficulty: "Easy",
    topic: "Operators"
  }
];

module.exports = cQuestions;