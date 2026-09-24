
const cNotes = [
  {
    title: "Introduction to C",
    slug: "introduction-to-c",
    description: "Learn what C is, its history, uses and importance.",
    order: 1,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "C is a general-purpose procedural programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It is widely used for system programming, operating systems, embedded systems, compilers and performance-sensitive applications."
        },
        {
          type: "heading",
          heading: "Why Learn C?"
        },
        {
          type: "list",
          items: [
            "Builds strong programming fundamentals.",
            "Helps understand memory and pointers.",
            "Useful for system and embedded programming.",
            "Provides a strong foundation for C++, Java and other languages.",
            "Widely used in programming interviews and academic courses."
          ]
        },
        {
          type: "important",
          title: "Remember",
          text: "C is a procedural programming language and is especially useful for understanding how programs interact with memory."
        }
      ]
    }
  },

  {
    title: "Features of C",
    slug: "features-of-c",
    description: "Understand the major features that make C an important programming language.",
    order: 2,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Major Features"
        },
        {
          type: "list",
          items: [
            "Procedural programming",
            "Structured programming",
            "Fast execution",
            "Portable source code",
            "Low-level memory access",
            "Rich set of operators",
            "Functions and modular programming",
            "Dynamic memory allocation",
            "Pointers",
            "Large ecosystem of libraries"
          ]
        },
        {
          type: "paragraph",
          text: "C combines high-level programming constructs with low-level memory manipulation capabilities. This makes it useful for applications where performance and hardware-level control are important."
        }
      ]
    }
  },

  {
    title: "C Program Structure",
    slug: "c-program-structure",
    description: "Learn the basic structure of a C program.",
    order: 3,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}`
        },
        {
          type: "heading",
          heading: "Explanation"
        },
        {
          type: "list",
          items: [
            "#include <stdio.h> includes the standard input/output declarations.",
            "main() is the entry point of a normal C program.",
            "printf() displays output on the screen.",
            "return 0 indicates successful termination from main."
          ]
        }
      ]
    }
  },

  {
    title: "Variables & Constants",
    slug: "variables-and-constants",
    description: "Learn how variables and constants store values in C.",
    order: 4,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Variables"
        },
        {
          type: "paragraph",
          text: "A variable is a named object used to store a value that may change during program execution."
        },
        {
          type: "code",
          language: "C",
          code: `int age = 25;
float salary = 25000.50;
char grade = 'A';`
        },
        {
          type: "heading",
          heading: "Constants"
        },
        {
          type: "paragraph",
          text: "A constant represents a value that should not be modified through the variable after initialization."
        },
        {
          type: "code",
          language: "C",
          code: `const int MAX_AGE = 100;`
        }
      ]
    }
  },

  {
    title: "Data Types",
    slug: "data-types",
    description: "Learn the basic data types available in C.",
    order: 5,
    content: {
      sections: [
        {
          type: "table",
          headers: ["Data Type", "Purpose", "Example"],
          rows: [
            ["char", "Character", "char grade = 'A';"],
            ["int", "Integer", "int age = 25;"],
            ["float", "Single precision decimal", "float price = 10.5f;"],
            ["double", "Double precision decimal", "double value = 10.55;"],
            ["void", "No value", "void function()"]
          ]
        },
        {
          type: "important",
          title: "Important",
          text: "The exact size and range of some C data types depend on the implementation and target platform."
        }
      ]
    }
  },

  {
    title: "Keywords & Identifiers",
    slug: "keywords-and-identifiers",
    description: "Understand reserved keywords and naming rules in C.",
    order: 6,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Keywords"
        },
        {
          type: "paragraph",
          text: "Keywords are reserved words that have predefined meanings in the C language."
        },
        {
          type: "code",
          language: "C",
          code: `int
char
float
double
if
else
for
while
return
struct
switch
case
break
continue
void
const`
        },
        {
          type: "heading",
          heading: "Identifiers"
        },
        {
          type: "list",
          items: [
            "Cannot start with a number.",
            "Can contain letters, digits and underscore.",
            "Cannot contain spaces.",
            "Cannot be a C keyword.",
            "C identifiers are case-sensitive."
          ]
        }
      ]
    }
  },

  {
    title: "Input & Output",
    slug: "input-and-output",
    description: "Learn printf() and scanf() for basic console input and output.",
    order: 7,
    content: {
      sections: [
        {
          type: "heading",
          heading: "printf()"
        },
        {
          type: "paragraph",
          text: "printf() is commonly used to display formatted output."
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>

int main()
{
    int age = 25;

    printf("Age = %d", age);

    return 0;
}`
        },
        {
          type: "heading",
          heading: "scanf()"
        },
        {
          type: "paragraph",
          text: "scanf() reads formatted input. For most scalar variables, the address operator & is used so scanf() can store the input in the variable."
        },
        {
          type: "code",
          language: "C",
          code: `int age;

printf("Enter age: ");
scanf("%d", &age);`
        }
      ]
    }
  },

  {
    title: "Format Specifiers",
    slug: "format-specifiers",
    description: "Learn commonly used format specifiers in C.",
    order: 8,
    content: {
      sections: [
        {
          type: "table",
          headers: ["Specifier", "Common Use"],
          rows: [
            ["%d", "int"],
            ["%f", "float in printf()"],
            ["%c", "char"],
            ["%s", "String"],
            ["%lf", "double in scanf()"],
            ["%u", "unsigned int"],
            ["%x", "Hexadecimal integer"],
            ["%p", "Pointer address"]
          ]
        },
        {
          type: "code",
          language: "C",
          code: `int age = 25;
float marks = 85.5f;
char grade = 'A';

printf("%d\\n", age);
printf("%f\\n", marks);
printf("%c\\n", grade);`
        }
      ]
    }
  },

  {
    title: "Operators",
    slug: "operators",
    description: "Learn arithmetic, relational, logical and other C operators.",
    order: 9,
    content: {
      sections: [
        {
          type: "table",
          headers: ["Category", "Operators"],
          rows: [
            ["Arithmetic", "+ - * / %"],
            ["Relational", "== != > < >= <="],
            ["Logical", "&& || !"],
            ["Assignment", "= += -= *= /= %="],
            ["Increment/Decrement", "++ --"],
            ["Bitwise", "& | ^ ~ << >>"],
            ["Conditional", "?:"]
          ]
        },
        {
          type: "code",
          language: "C",
          code: `int a = 10;
int b = 3;

printf("%d", a % b);`
        }
      ]
    }
  },

  {
    title: "Type Conversion",
    slug: "type-conversion",
    description: "Learn implicit and explicit type conversion in C.",
    order: 10,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Implicit Conversion"
        },
        {
          type: "paragraph",
          text: "Implicit conversion happens automatically when C converts a value from one type to another as required by an expression."
        },
        {
          type: "code",
          language: "C",
          code: `int a = 10;
double b = a;`
        },
        {
          type: "heading",
          heading: "Explicit Conversion"
        },
        {
          type: "paragraph",
          text: "Explicit conversion, also called casting, is performed by specifying the target type."
        },
        {
          type: "code",
          language: "C",
          code: `int a = 5;
int b = 2;

double result = (double)a / b;`
        }
      ]
    }
  },

  {
    title: "Conditional Statements",
    slug: "conditional-statements",
    description: "Learn how to make decisions using conditions.",
    order: 11,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Conditional statements allow a program to execute different blocks of code depending on whether conditions are true or false."
        },
        {
          type: "list",
          items: [
            "if",
            "if-else",
            "else-if ladder",
            "nested if",
            "switch"
          ]
        },
        {
          type: "code",
          language: "C",
          code: `int age = 20;

if (age >= 18)
{
    printf("Adult");
}
else
{
    printf("Minor");
}`
        }
      ]
    }
  },

  {
    title: "if Statement",
    slug: "if-statement",
    description: "Learn the syntax and usage of the if statement.",
    order: 12,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Syntax"
        },
        {
          type: "code",
          language: "C",
          code: `if (condition)
{
    // statements
}`
        },
        {
          type: "heading",
          heading: "Example"
        },
        {
          type: "code",
          language: "C",
          code: `int number = 10;

if (number > 0)
{
    printf("Positive number");
}`
        }
      ]
    }
  },

  {
    title: "if-else Statement",
    slug: "if-else-statement",
    description: "Learn how if-else selects between two execution paths.",
    order: 13,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int number = 10;

if (number % 2 == 0)
{
    printf("Even");
}
else
{
    printf("Odd");
}`
        },
        {
          type: "paragraph",
          text: "If the condition is true, the first block executes. Otherwise, the else block executes."
        }
      ]
    }
  },

  {
    title: "else-if Ladder",
    slug: "else-if-ladder",
    description: "Learn how to test multiple conditions.",
    order: 14,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int marks = 82;

if (marks >= 90)
{
    printf("A+");
}
else if (marks >= 75)
{
    printf("A");
}
else if (marks >= 60)
{
    printf("B");
}
else
{
    printf("C");
}`
        },
        {
          type: "important",
          title: "Remember",
          text: "Conditions are checked from top to bottom. Once a matching condition is found, its block is executed and the remaining else-if conditions are skipped."
        }
      ]
    }
  },

  {
    title: "Nested if",
    slug: "nested-if",
    description: "Learn how an if statement can be placed inside another if statement.",
    order: 15,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int age = 20;
int hasId = 1;

if (age >= 18)
{
    if (hasId)
    {
        printf("Allowed");
    }
}`
        },
        {
          type: "paragraph",
          text: "A nested if is useful when one condition should only be checked after another condition has been satisfied."
        }
      ]
    }
  },

  {
    title: "switch Statement",
    slug: "switch-statement",
    description: "Learn how switch selects among multiple constant cases.",
    order: 16,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int day = 2;

switch (day)
{
    case 1:
        printf("Monday");
        break;

    case 2:
        printf("Tuesday");
        break;

    case 3:
        printf("Wednesday");
        break;

    default:
        printf("Invalid day");
}`
        },
        {
          type: "important",
          title: "Important",
          text: "The break statement is commonly used to prevent execution from continuing into the next case."
        }
      ]
    }
  },

  {
    title: "Loops",
    slug: "loops",
    description: "Learn how loops repeatedly execute a block of code.",
    order: 17,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Types of Loops"
        },
        {
          type: "list",
          items: [
            "for loop",
            "while loop",
            "do-while loop"
          ]
        },
        {
          type: "paragraph",
          text: "Loops reduce repetitive code by allowing a block of statements to execute multiple times."
        }
      ]
    }
  },

  {
    title: "for Loop",
    slug: "for-loop",
    description: "Learn the syntax and usage of the for loop.",
    order: 18,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `for (int i = 1; i <= 5; i++)
{
    printf("%d\\n", i);
}`
        },
        {
          type: "table",
          headers: ["Part", "Purpose"],
          rows: [
            ["Initialization", "Runs once before the loop starts."],
            ["Condition", "Checked before each iteration."],
            ["Update", "Runs after each iteration."]
          ]
        }
      ]
    }
  },

  {
    title: "while Loop",
    slug: "while-loop",
    description: "Learn how the while loop works.",
    order: 19,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int i = 1;

while (i <= 5)
{
    printf("%d\\n", i);
    i++;
}`
        },
        {
          type: "paragraph",
          text: "A while loop checks its condition before executing the loop body. Therefore, the body may execute zero times."
        }
      ]
    }
  },

  {
    title: "do-while Loop",
    slug: "do-while-loop",
    description: "Learn the loop that executes its body at least once.",
    order: 20,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int i = 1;

do
{
    printf("%d\\n", i);
    i++;
}
while (i <= 5);`
        },
        {
          type: "important",
          title: "Key Point",
          text: "The do-while condition is checked after the loop body, so the body executes at least once."
        }
      ]
    }
  },

  {
    title: "break & continue",
    slug: "break-and-continue",
    description: "Learn how break and continue control loop execution.",
    order: 21,
    content: {
      sections: [
        {
          type: "heading",
          heading: "break"
        },
        {
          type: "paragraph",
          text: "break immediately terminates the nearest loop or switch statement."
        },
        {
          type: "code",
          language: "C",
          code: `for (int i = 1; i <= 10; i++)
{
    if (i == 5)
        break;

    printf("%d\\n", i);
}`
        },
        {
          type: "heading",
          heading: "continue"
        },
        {
          type: "paragraph",
          text: "continue skips the remaining statements of the current iteration and proceeds to the next iteration."
        },
        {
          type: "code",
          language: "C",
          code: `for (int i = 1; i <= 5; i++)
{
    if (i == 3)
        continue;

    printf("%d\\n", i);
}`
        }
      ]
    }
  },

  {
    title: "Arrays",
    slug: "arrays",
    description: "Learn how arrays store multiple elements of the same type.",
    order: 22,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "An array stores multiple elements of the same type in a contiguous sequence of elements."
        },
        {
          type: "code",
          language: "C",
          code: `int marks[5] = {80, 75, 90, 85, 88};

printf("%d", marks[0]);`
        },
        {
          type: "important",
          title: "Remember",
          text: "C array indexing starts from 0."
        }
      ]
    }
  },

  {
    title: "One-Dimensional Array",
    slug: "one-dimensional-array",
    description: "Learn how to create, initialize and access one-dimensional arrays.",
    order: 23,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int numbers[5] = {10, 20, 30, 40, 50};

for (int i = 0; i < 5; i++)
{
    printf("%d\\n", numbers[i]);
}`
        },
        {
          type: "list",
          items: [
            "Index of first element is 0.",
            "Index of last element is size - 1.",
            "All elements have the same declared type."
          ]
        }
      ]
    }
  },

  {
    title: "Two-Dimensional Array",
    slug: "two-dimensional-array",
    description: "Learn how to work with rows and columns using 2D arrays.",
    order: 24,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int matrix[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};

printf("%d", matrix[1][2]);`
        },
        {
          type: "paragraph",
          text: "A two-dimensional array is commonly used to represent table-like data with rows and columns."
        }
      ]
    }
  },

  {
    title: "Strings",
    slug: "strings",
    description: "Learn how strings are represented using character arrays.",
    order: 25,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "C does not have a separate built-in string type. A string is represented as an array of characters terminated by the null character '\\0'."
        },
        {
          type: "code",
          language: "C",
          code: `char name[] = "Imteyaz";

printf("%s", name);`
        },
        {
          type: "important",
          title: "Important",
          text: "A valid C string ends with a null character, represented by \\0."
        }
      ]
    }
  },

  {
    title: "String Functions",
    slug: "string-functions",
    description: "Learn common string functions from string.h.",
    order: 26,
    content: {
      sections: [
        {
          type: "table",
          headers: ["Function", "Purpose"],
          rows: [
            ["strlen()", "Finds string length."],
            ["strcpy()", "Copies a string."],
            ["strcmp()", "Compares strings."],
            ["strcat()", "Concatenates strings."]
          ]
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>
#include <string.h>

int main()
{
    char name[] = "Imteyaz";

    printf("Length = %zu", strlen(name));

    return 0;
}`
        }
      ]
    }
  },

  {
    title: "Functions",
    slug: "functions",
    description: "Learn how functions make C programs modular and reusable.",
    order: 27,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "A function is a reusable block of code designed to perform a particular task."
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>

void greet()
{
    printf("Hello!");
}

int main()
{
    greet();

    return 0;
}`
        },
        {
          type: "list",
          items: [
            "Functions improve code organization.",
            "Functions reduce repetition.",
            "Functions make testing and maintenance easier."
          ]
        }
      ]
    }
  },

  {
    title: "Function Arguments",
    slug: "function-arguments",
    description: "Learn how to pass values to functions.",
    order: 28,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `void add(int a, int b)
{
    printf("Sum = %d", a + b);
}

int main()
{
    add(10, 20);

    return 0;
}`
        },
        {
          type: "paragraph",
          text: "Parameters receive values passed to a function. In this example, a and b are parameters and 10 and 20 are arguments in the function call."
        }
      ]
    }
  },

  {
    title: "Return Values",
    slug: "return-values",
    description: "Learn how functions return values.",
    order: 29,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int add(int a, int b)
{
    return a + b;
}

int main()
{
    int result = add(10, 20);

    printf("%d", result);

    return 0;
}`
        },
        {
          type: "important",
          title: "Remember",
          text: "The return type of a function should match the type of value it returns, subject to normal C conversion rules."
        }
      ]
    }
  },

  {
    title: "Recursion",
    slug: "recursion",
    description: "Learn how a function can call itself.",
    order: 30,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Recursion is a technique in which a function calls itself. A recursive function needs a base condition to stop further calls."
        },
        {
          type: "code",
          language: "C",
          code: `int factorial(int n)
{
    if (n <= 1)
        return 1;

    return n * factorial(n - 1);
}`
        },
        {
          type: "important",
          title: "Important",
          text: "Without an appropriate terminating condition, recursion can continue indefinitely until available call stack resources are exhausted."
        }
      ]
    }
  },

  {
    title: "Pointers",
    slug: "pointers",
    description: "Learn pointers, addresses and dereferencing.",
    order: 31,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "A pointer is an object that stores the address of another object."
        },
        {
          type: "code",
          language: "C",
          code: `int age = 25;

int *ptr = &age;

printf("%d", *ptr);`
        },
        {
          type: "table",
          headers: ["Expression", "Meaning"],
          rows: [
            ["&age", "Address of age"],
            ["ptr", "Pointer storing the address"],
            ["*ptr", "Value stored at the pointed-to address"]
          ]
        }
      ]
    }
  },

  {
    title: "Pointer Arithmetic",
    slug: "pointer-arithmetic",
    description: "Learn pointer arithmetic using arrays.",
    order: 32,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int numbers[] = {10, 20, 30};

int *ptr = numbers;

printf("%d\\n", *ptr);

ptr++;

printf("%d\\n", *ptr);`
        },
        {
          type: "paragraph",
          text: "When a pointer to an element type is incremented, it advances by one element of that type rather than by one byte."
        }
      ]
    }
  },

  {
    title: "Pointers & Arrays",
    slug: "pointers-and-arrays",
    description: "Understand the relationship between arrays and pointers.",
    order: 33,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int numbers[] = {10, 20, 30};

printf("%d", *numbers);

printf("%d", *(numbers + 1));`
        },
        {
          type: "paragraph",
          text: "In many expressions, an array name is converted to a pointer to its first element. This is why pointer arithmetic can be used to access array elements."
        }
      ]
    }
  },

  {
    title: "Pointers & Functions",
    slug: "pointers-and-functions",
    description: "Learn how pointers can be passed to functions.",
    order: 34,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `void changeValue(int *ptr)
{
    *ptr = 100;
}

int main()
{
    int number = 10;

    changeValue(&number);

    printf("%d", number);

    return 0;
}`
        },
        {
          type: "paragraph",
          text: "Passing an address allows a function to modify the object whose address was passed, provided the pointer is valid and points to a modifiable object."
        }
      ]
    }
  },

  {
    title: "Structures",
    slug: "structures",
    description: "Learn how structures group related values of different types.",
    order: 35,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

int main()
{
    struct Student student1;

    student1.rollNo = 101;
    student1.marks = 85.5f;

    return 0;
}`
        },
        {
          type: "paragraph",
          text: "A structure is a user-defined type that groups related members, which may have different data types."
        }
      ]
    }
  },

  {
    title: "Unions",
    slug: "unions",
    description: "Learn how unions store different members in shared storage.",
    order: 36,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `union Data
{
    int number;
    float price;
    char letter;
};`
        },
        {
          type: "paragraph",
          text: "Union members share the same storage. Writing to one member can affect the value represented by another member."
        },
        {
          type: "important",
          title: "Structure vs Union",
          text: "Structure members have separate storage within the object, while union members share overlapping storage."
        }
      ]
    }
  },

  {
    title: "enum",
    slug: "enum",
    description: "Learn how enumeration types represent named integer constants.",
    order: 37,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};

enum Day today = TUESDAY;`
        },
        {
          type: "paragraph",
          text: "Enumeration constants are named integer constants. Unless explicitly assigned, the first enumerator has value 0 and subsequent enumerators increase by 1."
        }
      ]
    }
  },

  {
    title: "typedef",
    slug: "typedef",
    description: "Learn how typedef creates aliases for existing types.",
    order: 38,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `typedef unsigned int uint;

uint age = 25;`
        },
        {
          type: "paragraph",
          text: "typedef does not create a new distinct type; it creates an alternative name, or alias, for an existing type."
        }
      ]
    }
  },

  {
    title: "Storage Classes",
    slug: "storage-classes",
    description: "Learn common storage-class specifiers in C.",
    order: 39,
    content: {
      sections: [
        {
          type: "table",
          headers: ["Specifier", "General Role"],
          rows: [
            ["auto", "Default storage class for local variables in ordinary block scope."],
            ["static", "Can provide static storage duration and/or internal linkage depending on context."],
            ["extern", "Declares an object or function defined elsewhere."],
            ["register", "Suggests storing an object in a processor register; modern compilers may ignore the suggestion."]
          ]
        },
        {
          type: "code",
          language: "C",
          code: `void counter()
{
    static int count = 0;

    count++;

    printf("%d\\n", count);
}`
        }
      ]
    }
  },

  {
    title: "Dynamic Memory Allocation",
    slug: "dynamic-memory-allocation",
    description: "Learn how memory can be allocated dynamically at runtime.",
    order: 40,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Dynamic memory allocation allows a program to request memory during execution. The standard functions are declared in stdlib.h."
        },
        {
          type: "list",
          items: [
            "malloc()",
            "calloc()",
            "realloc()",
            "free()"
          ]
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdlib.h>

int *ptr = malloc(5 * sizeof(int));

if (ptr != NULL)
{
    /* use memory */
}

free(ptr);`
        }
      ]
    }
  },

  {
    title: "malloc()",
    slug: "malloc",
    description: "Learn how malloc allocates a block of dynamic memory.",
    order: 41,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "malloc() allocates a specified number of bytes and returns a pointer to the allocated memory. The allocated bytes are not initialized."
        },
        {
          type: "code",
          language: "C",
          code: `int *ptr = malloc(5 * sizeof(int));

if (ptr == NULL)
{
    printf("Allocation failed");
}`
        },
        {
          type: "important",
          title: "Important",
          text: "Always check whether the returned pointer is NULL before using dynamically allocated memory."
        }
      ]
    }
  },

  {
    title: "calloc()",
    slug: "calloc",
    description: "Learn how calloc allocates and initializes dynamic memory.",
    order: 42,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "calloc() allocates space for a specified number of elements and initializes all allocated bytes to zero."
        },
        {
          type: "code",
          language: "C",
          code: `int *ptr = calloc(5, sizeof(int));

if (ptr == NULL)
{
    printf("Allocation failed");
}`
        },
        {
          type: "table",
          headers: ["Function", "Main Difference"],
          rows: [
            ["malloc()", "Allocates bytes without initializing them."],
            ["calloc()", "Allocates elements and initializes allocated bytes to zero."]
          ]
        }
      ]
    }
  },

  {
    title: "realloc()",
    slug: "realloc",
    description: "Learn how realloc changes the size of an allocated memory block.",
    order: 43,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `int *temp;

temp = realloc(ptr, 10 * sizeof(int));

if (temp != NULL)
{
    ptr = temp;
}`
        },
        {
          type: "important",
          title: "Best Practice",
          text: "Using a temporary pointer for realloc() helps preserve the original pointer if the resize operation fails."
        }
      ]
    }
  },

  {
    title: "free()",
    slug: "free",
    description: "Learn how to release dynamically allocated memory.",
    order: 44,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `free(ptr);
ptr = NULL;`
        },
        {
          type: "paragraph",
          text: "free() releases memory previously allocated by a dynamic allocation function. After freeing a pointer, do not dereference it."
        },
        {
          type: "important",
          title: "Common Problem",
          text: "Failing to release memory that is no longer needed can cause memory leaks."
        }
      ]
    }
  },

  {
    title: "Preprocessor Directives",
    slug: "preprocessor-directives",
    description: "Learn how the C preprocessor handles directives before compilation.",
    order: 45,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Preprocessor directives are processed before the main compilation stage. They begin with #."
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>
#define PI 3.14159`
        },
        {
          type: "list",
          items: [
            "#include",
            "#define",
            "#if",
            "#ifdef",
            "#ifndef",
            "#else",
            "#elif",
            "#endif"
          ]
        }
      ]
    }
  },

  {
    title: "Header Files",
    slug: "header-files",
    description: "Learn about standard and user-defined header files.",
    order: 46,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Header files contain declarations and definitions that can be shared across source files."
        },
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>`
        },
        {
          type: "table",
          headers: ["Header", "Common Purpose"],
          rows: [
            ["stdio.h", "Input and output"],
            ["stdlib.h", "Memory allocation and utility functions"],
            ["string.h", "String handling"],
            ["math.h", "Mathematical functions"]
          ]
        }
      ]
    }
  },

  {
    title: "File Handling",
    slug: "file-handling",
    description: "Learn how C programs work with files.",
    order: 47,
    content: {
      sections: [
        {
          type: "paragraph",
          text: "C provides file-handling functions through stdio.h. Files can be opened, read, written and closed."
        },
        {
          type: "table",
          headers: ["Function", "Purpose"],
          rows: [
            ["fopen()", "Opens a file."],
            ["fclose()", "Closes a file."],
            ["fprintf()", "Writes formatted data."],
            ["fscanf()", "Reads formatted data."],
            ["fgets()", "Reads a line/string."],
            ["fputs()", "Writes a string."],
            ["fread()", "Reads binary data."],
            ["fwrite()", "Writes binary data."]
          ]
        },
        {
          type: "code",
          language: "C",
          code: `FILE *file;

file = fopen("data.txt", "w");

if (file != NULL)
{
    fprintf(file, "Hello C");
    fclose(file);
}`
        }
      ]
    }
  },

  {
    title: "Command Line Arguments",
    slug: "command-line-arguments",
    description: "Learn how C programs receive arguments from the command line.",
    order: 48,
    content: {
      sections: [
        {
          type: "code",
          language: "C",
          code: `#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Argument count: %d\\n", argc);

    return 0;
}`
        },
        {
          type: "table",
          headers: ["Parameter", "Meaning"],
          rows: [
            ["argc", "Number of command-line arguments."],
            ["argv", "Array containing the argument strings."]
          ]
        }
      ]
    }
  },

  {
    title: "Common C Errors",
    slug: "common-c-errors",
    description: "Learn common categories of errors found in C programs.",
    order: 49,
    content: [
      {
        type: "heading",
        heading: "Syntax Error"
      },
      {
        type: "paragraph",
        text: "A syntax error occurs when source code violates the grammar rules of C."
      },
      {
        type: "code",
        language: "C",
        code: `printf("Hello")`
      },
      {
        type: "heading",
        heading: "Runtime Error"
      },
      {
        type: "paragraph",
        text: "A runtime error occurs while the program is executing. Examples include invalid memory access and other execution-time failures."
      },
      {
        type: "heading",
        heading: "Logical Error"
      },
      {
        type: "paragraph",
        text: "A logical error occurs when the program executes but produces an incorrect result because the algorithm or logic is wrong."
      },
      {
        type: "important",
        title: "Interview Tip",
        text: "Be able to distinguish compile-time problems, runtime problems and logical mistakes."
      }
    ]
  },

  {
    title: "C Interview Revision",
    slug: "c-interview-revision",
    description: "Quick revision of important C programming concepts for interviews.",
    order: 50,
    content: {
      sections: [
        {
          type: "heading",
          heading: "Important Topics"
        },
        {
          type: "list",
          items: [
            "Variables and data types",
            "Operators",
            "Conditional statements",
            "Loops",
            "Arrays",
            "Strings",
            "Functions",
            "Recursion",
            "Pointers",
            "Structures and unions",
            "enum and typedef",
            "Storage classes",
            "Dynamic memory allocation",
            "Preprocessor directives",
            "File handling",
            "Command-line arguments"
          ]
        },
        {
          type: "heading",
          heading: "Quick Questions"
        },
        {
          type: "list",
          items: [
            "What is a pointer?",
            "What is the difference between an array and a pointer?",
            "What is recursion?",
            "What is the difference between malloc() and calloc()?",
            "What is a structure?",
            "What is the difference between structure and union?",
            "What is dynamic memory allocation?",
            "What is the purpose of free()?",
            "What is a static variable?",
            "What is the purpose of the preprocessor?"
          ]
        },
        {
          type: "important",
          title: "Final Revision",
          text: "For C interviews, focus especially on pointers, arrays, strings, functions, memory allocation, structures and program execution concepts."
        }
      ]
    }
  }
];

module.exports = cNotes;

