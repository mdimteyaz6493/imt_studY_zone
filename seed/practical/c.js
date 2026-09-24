const cPracticalQuestions = [
  {
    title: "Output Prediction",
    question: "What will be the output of the following C program?",
    tables: [],
    options: [
      "10",
      "20",
      "30",
      "Compilation Error"
    ],
    correctAnswer: 2,
    explanation:
      "The values of a and b are 10 and 20. The expression a + b produces 30.",
    difficulty: "Easy",
    topic: "Basic Operations",
    code: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;

    printf("%d", a + b);

    return 0;
}`
  },

  {
    title: "Output Prediction",
    question: "What will be the output?",
    tables: [],
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 2,
    explanation:
      "The values are 5 and 10. Their sum is 15.",
    difficulty: "Easy",
    topic: "Arithmetic Operators",
    code: `#include <stdio.h>

int main() {
    int x = 5;
    int y = 10;

    printf("%d", x + y);

    return 0;
}`
  },

  {
    title: "Conditional Statement",
    question: "What will be printed by this program?",
    tables: [],
    options: [
      "Positive",
      "Negative",
      "Zero",
      "Nothing"
    ],
    correctAnswer: 0,
    explanation:
      "Since num is greater than zero, the first if condition is true and Positive is printed.",
    difficulty: "Easy",
    topic: "If Else",
    code: `#include <stdio.h>

int main() {
    int num = 10;

    if (num > 0)
        printf("Positive");
    else
        printf("Negative");

    return 0;
}`
  },

  {
    title: "Even or Odd",
    question: "What will be the output?",
    tables: [],
    options: [
      "Even",
      "Odd",
      "0",
      "Compilation Error"
    ],
    correctAnswer: 0,
    explanation:
      "10 % 2 gives 0, so the number is even.",
    difficulty: "Easy",
    topic: "Modulo Operator",
    code: `#include <stdio.h>

int main() {
    int n = 10;

    if (n % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}`
  },

  {
    title: "For Loop",
    question: "What will be printed?",
    tables: [],
    options: [
      "12345",
      "01234",
      "012345",
      "54321"
    ],
    correctAnswer: 1,
    explanation:
      "The loop starts at 0 and continues while i < 5, so it prints 0 through 4.",
    difficulty: "Easy",
    topic: "For Loop",
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("%d", i);
    }

    return 0;
}`
  },

  {
    title: "While Loop",
    question: "What will be the output?",
    tables: [],
    options: [
      "123",
      "012",
      "1234",
      "0123"
    ],
    correctAnswer: 0,
    explanation:
      "The variable starts at 1 and the loop runs while i <= 3, producing 123.",
    difficulty: "Easy",
    topic: "While Loop",
    code: `#include <stdio.h>

int main() {
    int i = 1;

    while (i <= 3) {
        printf("%d", i);
        i++;
    }

    return 0;
}`
  },

  {
    title: "Do While Loop",
    question: "What will this program print?",
    tables: [],
    options: [
      "0",
      "1",
      "Nothing",
      "Compilation Error"
    ],
    correctAnswer: 1,
    explanation:
      "A do-while loop executes at least once. Even though the condition is false after execution, 1 is printed.",
    difficulty: "Easy",
    topic: "Do While Loop",
    code: `#include <stdio.h>

int main() {
    int i = 1;

    do {
        printf("%d", i);
        i++;
    } while (i < 1);

    return 0;
}`
  },

  {
    title: "Array",
    question: "What will be the output?",
    tables: [],
    options: [
      "10",
      "20",
      "30",
      "40"
    ],
    correctAnswer: 2,
    explanation:
      "Array indexing starts from 0. arr[2] contains 30.",
    difficulty: "Easy",
    topic: "Arrays",
    code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40};

    printf("%d", arr[2]);

    return 0;
}`
  },

  {
    title: "Array Sum",
    question: "What will be printed?",
    tables: [],
    options: [
      "6",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation:
      "The loop adds 1 + 2 + 3 + 4, resulting in 10.",
    difficulty: "Easy",
    topic: "Arrays",
    code: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4};
    int sum = 0;

    for (int i = 0; i < 4; i++) {
        sum += arr[i];
    }

    printf("%d", sum);

    return 0;
}`
  },

  {
    title: "String",
    question: "What will be the output?",
    tables: [],
    options: [
      "Hello",
      "H",
      "5",
      "Compilation Error"
    ],
    correctAnswer: 0,
    explanation:
      "The character array contains the string Hello followed by the null character.",
    difficulty: "Easy",
    topic: "Strings",
    code: `#include <stdio.h>

int main() {
    char str[] = "Hello";

    printf("%s", str);

    return 0;
}`
  },

  {
    title: "String Length",
    question: "What will be printed?",
    tables: [],
    options: [
      "4",
      "5",
      "6",
      "0"
    ],
    correctAnswer: 1,
    explanation:
      "strlen() counts the characters in Hello. The null terminator is not included, so the length is 5.",
    difficulty: "Easy",
    topic: "Strings",
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";

    printf("%lu", strlen(str));

    return 0;
}`
  },

  {
    title: "Pointer",
    question: "What will be the output?",
    tables: [],
    options: [
      "10",
      "20",
      "Address of x",
      "Compilation Error"
    ],
    correctAnswer: 0,
    explanation:
      "The pointer p stores the address of x. Dereferencing p using *p gives the value of x, which is 10.",
    difficulty: "Medium",
    topic: "Pointers",
    code: `#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    printf("%d", *p);

    return 0;
}`
  },

  {
    title: "Pointer Modification",
    question: "What will be printed?",
    tables: [],
    options: [
      "10",
      "20",
      "30",
      "Garbage Value"
    ],
    correctAnswer: 1,
    explanation:
      "p points to x. Assigning 20 to *p changes the value of x to 20.",
    difficulty: "Medium",
    topic: "Pointers",
    code: `#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    *p = 20;

    printf("%d", x);

    return 0;
}`
  },

  {
    title: "Function",
    question: "What will be the output?",
    tables: [],
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 2,
    explanation:
      "The add() function returns 5 + 10, which is 15.",
    difficulty: "Easy",
    topic: "Functions",
    code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d", add(5, 10));

    return 0;
}`
  },

  {
    title: "Recursion",
    question: "What will be printed?",
    tables: [],
    options: [
      "1",
      "3",
      "6",
      "10"
    ],
    correctAnswer: 2,
    explanation:
      "The recursive function calculates 3 + 2 + 1, resulting in 6.",
    difficulty: "Medium",
    topic: "Recursion",
    code: `#include <stdio.h>

int sum(int n) {
    if (n == 0)
        return 0;

    return n + sum(n - 1);
}

int main() {
    printf("%d", sum(3));

    return 0;
}`
  },

  {
    title: "Structure",
    question: "What will be the output?",
    tables: [],
    options: [
      "20",
      "25",
      "30",
      "35"
    ],
    correctAnswer: 1,
    explanation:
      "The structure variable s has age = 25, so s.age prints 25.",
    difficulty: "Easy",
    topic: "Structures",
    code: `#include <stdio.h>

struct Student {
    int age;
};

int main() {
    struct Student s;

    s.age = 25;

    printf("%d", s.age);

    return 0;
}`
  },

  {
    title: "Switch",
    question: "What will be printed?",
    tables: [],
    options: [
      "One",
      "Two",
      "Three",
      "Default"
    ],
    correctAnswer: 1,
    explanation:
      "The value of n is 2, so case 2 executes.",
    difficulty: "Easy",
    topic: "Switch",
    code: `#include <stdio.h>

int main() {
    int n = 2;

    switch (n) {
        case 1:
            printf("One");
            break;

        case 2:
            printf("Two");
            break;

        default:
            printf("Default");
    }

    return 0;
}`
  },

  {
    title: "Break Statement",
    question: "What will be the output?",
    tables: [],
    options: [
      "01234",
      "012",
      "123",
      "01"
    ],
    correctAnswer: 1,
    explanation:
      "When i becomes 3, the break statement terminates the loop. Therefore 0, 1 and 2 are printed.",
    difficulty: "Easy",
    topic: "Break",
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        if (i == 3)
            break;

        printf("%d", i);
    }

    return 0;
}`
  },

  {
    title: "Continue Statement",
    question: "What will be printed?",
    tables: [],
    options: [
      "01234",
      "0134",
      "0124",
      "1234"
    ],
    correctAnswer: 2,
    explanation:
      "When i is 3, continue skips the printf statement for that iteration. Therefore 0, 1, 2 and 4 are printed.",
    difficulty: "Medium",
    topic: "Continue",
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        if (i == 3)
            continue;

        printf("%d", i);
    }

    return 0;
}`
  }
];

module.exports = cPracticalQuestions;