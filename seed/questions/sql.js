const sqlQuestions = [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Question Language",
      "System Query Language"
    ],
    correctAnswer: 0,
    explanation:
      "SQL stands for Structured Query Language. It is used to communicate with and manage relational databases.",
    difficulty: "Easy",
    topic: "SQL Basics"
  },
  {
    question: "Which SQL statement is used to retrieve data from a database?",
    options: [
      "GET",
      "SELECT",
      "FETCH",
      "RETRIEVE"
    ],
    correctAnswer: 1,
    explanation:
      "The SELECT statement is used to retrieve data from one or more database tables.",
    difficulty: "Easy",
    topic: "SQL Basics"
  },
  {
    question: "Which SQL statement is used to create a new table?",
    options: [
      "MAKE TABLE",
      "NEW TABLE",
      "CREATE TABLE",
      "ADD TABLE"
    ],
    correctAnswer: 2,
    explanation:
      "CREATE TABLE is used to create a new table and define its columns and data types.",
    difficulty: "Easy",
    topic: "DDL"
  },
  {
    question: "Which SQL command is used to add a new row to a table?",
    options: [
      "INSERT",
      "ADD",
      "UPDATE",
      "APPEND"
    ],
    correctAnswer: 0,
    explanation:
      "The INSERT statement is used to add new rows to a table.",
    difficulty: "Easy",
    topic: "DML"
  },
  {
    question: "Which SQL command is used to modify existing records?",
    options: [
      "CHANGE",
      "MODIFY",
      "UPDATE",
      "ALTER"
    ],
    correctAnswer: 2,
    explanation:
      "UPDATE is used to modify existing records in a table.",
    difficulty: "Easy",
    topic: "DML"
  },
  {
    question: "Which SQL command is used to remove rows from a table?",
    options: [
      "REMOVE",
      "DELETE",
      "DROP",
      "CLEAR"
    ],
    correctAnswer: 1,
    explanation:
      "DELETE removes selected rows from a table, usually based on a WHERE condition.",
    difficulty: "Easy",
    topic: "DML"
  },
  {
    question: "Which SQL command removes an entire table from the database?",
    options: [
      "DELETE",
      "REMOVE",
      "DROP TABLE",
      "CLEAR TABLE"
    ],
    correctAnswer: 2,
    explanation:
      "DROP TABLE removes the table structure along with its data.",
    difficulty: "Easy",
    topic: "DDL"
  },
  {
    question: "Which clause is used to filter rows in a SELECT query?",
    options: [
      "FILTER",
      "WHERE",
      "HAVING",
      "SEARCH"
    ],
    correctAnswer: 1,
    explanation:
      "The WHERE clause filters individual rows based on a specified condition.",
    difficulty: "Easy",
    topic: "Filtering"
  },
  {
    question: "Which clause is used to sort query results?",
    options: [
      "SORT BY",
      "ORDER BY",
      "GROUP BY",
      "ARRANGE BY"
    ],
    correctAnswer: 1,
    explanation:
      "ORDER BY sorts query results in ascending or descending order.",
    difficulty: "Easy",
    topic: "Sorting"
  },
  {
    question: "Which keyword is used to remove duplicate rows from SELECT results?",
    options: [
      "UNIQUE",
      "DISTINCT",
      "REMOVE",
      "DEDUP"
    ],
    correctAnswer: 1,
    explanation:
      "DISTINCT returns only unique combinations of the selected columns.",
    difficulty: "Easy",
    topic: "SELECT"
  },
  {
    question: "Which SQL operator is used to search for a pattern in a string?",
    options: [
      "MATCH",
      "LIKE",
      "SEARCH",
      "PATTERN"
    ],
    correctAnswer: 1,
    explanation:
      "LIKE is used with wildcard characters such as % and _ to perform pattern matching.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which wildcard represents zero or more characters with the LIKE operator?",
    options: [
      "*",
      "_",
      "%",
      "#"
    ],
    correctAnswer: 2,
    explanation:
      "The % wildcard represents zero or more characters in a LIKE pattern.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which wildcard represents exactly one character with the LIKE operator?",
    options: [
      "%",
      "_",
      "*",
      "?"
    ],
    correctAnswer: 1,
    explanation:
      "The underscore (_) wildcard represents exactly one character in a LIKE pattern.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which operator is used to check whether a value exists within a list of values?",
    options: [
      "WITHIN",
      "IN",
      "EXISTS IN",
      "LIST"
    ],
    correctAnswer: 1,
    explanation:
      "The IN operator checks whether a value matches any value in a specified list.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which operator is used to check whether a value falls within a range?",
    options: [
      "RANGE",
      "BETWEEN",
      "WITHIN",
      "LIMIT"
    ],
    correctAnswer: 1,
    explanation:
      "BETWEEN is used to select values within an inclusive range.",
    difficulty: "Easy",
    topic: "Operators"
  },
  {
    question: "Which SQL function returns the number of rows?",
    options: [
      "TOTAL()",
      "COUNT()",
      "ROWS()",
      "NUMBER()"
    ],
    correctAnswer: 1,
    explanation:
      "COUNT() returns the number of rows or non-NULL values depending on how it is used.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
  },
  {
    question: "Which SQL function returns the average value of a numeric column?",
    options: [
      "AVERAGE()",
      "AVG()",
      "MEAN()",
      "MID()"
    ],
    correctAnswer: 1,
    explanation:
      "AVG() calculates the average of numeric values, ignoring NULL values.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
  },
  {
    question: "Which SQL function returns the largest value?",
    options: [
      "HIGH()",
      "TOP()",
      "MAX()",
      "LARGEST()"
    ],
    correctAnswer: 2,
    explanation:
      "MAX() returns the maximum value from a set of values.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
  },
  {
    question: "Which SQL function returns the smallest value?",
    options: [
      "MIN()",
      "LOW()",
      "SMALL()",
      "BOTTOM()"
    ],
    correctAnswer: 0,
    explanation:
      "MIN() returns the minimum value from a set of values.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
  },
  {
    question: "Which SQL function returns the total of numeric values?",
    options: [
      "TOTAL()",
      "SUM()",
      "ADD()",
      "COUNT()"
    ],
    correctAnswer: 1,
    explanation:
      "SUM() calculates the total of numeric values in a column.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
  },
  {
    question: "Which clause is used to group rows with the same values?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "COMBINE BY",
      "COLLECT BY"
    ],
    correctAnswer: 0,
    explanation:
      "GROUP BY groups rows that have the same values in specified columns.",
    difficulty: "Easy",
    topic: "Grouping"
  },
  {
    question: "Which clause is used to filter grouped results?",
    options: [
      "WHERE",
      "FILTER",
      "HAVING",
      "GROUP WHERE"
    ],
    correctAnswer: 2,
    explanation:
      "HAVING filters groups after GROUP BY has been applied.",
    difficulty: "Medium",
    topic: "Grouping"
  },
  {
    question: "What is a primary key?",
    options: [
      "A column that can contain duplicate values",
      "A column that uniquely identifies each row",
      "A column used only for sorting",
      "A column that stores NULL values"
    ],
    correctAnswer: 1,
    explanation:
      "A primary key uniquely identifies each record in a table and cannot contain NULL values.",
    difficulty: "Easy",
    topic: "Constraints"
  },
  {
    question: "Can a table have more than one primary key?",
    options: [
      "Yes, any number",
      "Yes, exactly two",
      "No, only one primary key constraint",
      "Only if the table has more than 100 rows"
    ],
    correctAnswer: 2,
    explanation:
      "A table can have only one primary key constraint, although that key can contain multiple columns.",
    difficulty: "Medium",
    topic: "Keys"
  },
  {
    question: "What is a foreign key?",
    options: [
      "A key used to encrypt data",
      "A column that references a key in another table",
      "A key that must always be unique",
      "A temporary database key"
    ],
    correctAnswer: 1,
    explanation:
      "A foreign key creates a relationship between tables by referencing a key, commonly the primary key, in another table.",
    difficulty: "Easy",
    topic: "Keys"
  },
  {
    question: "Which constraint prevents NULL values in a column?",
    options: [
      "UNIQUE",
      "NOT NULL",
      "CHECK",
      "DEFAULT"
    ],
    correctAnswer: 1,
    explanation:
      "NOT NULL ensures that a column must contain a value.",
    difficulty: "Easy",
    topic: "Constraints"
  },
  {
    question: "Which constraint ensures that all values in a column are different?",
    options: [
      "UNIQUE",
      "DISTINCT",
      "DIFFERENT",
      "CHECK"
    ],
    correctAnswer: 0,
    explanation:
      "The UNIQUE constraint ensures that duplicate values are not stored in the constrained column or column combination.",
    difficulty: "Easy",
    topic: "Constraints"
  },
  {
    question: "Which constraint is used to enforce a condition on column values?",
    options: [
      "CHECK",
      "VERIFY",
      "VALIDATE",
      "CONDITION"
    ],
    correctAnswer: 0,
    explanation:
      "CHECK allows a condition to be specified that values must satisfy.",
    difficulty: "Medium",
    topic: "Constraints"
  },
  {
    question: "Which constraint provides a value automatically when no value is supplied?",
    options: [
      "AUTO",
      "DEFAULT",
      "FILL",
      "VALUE"
    ],
    correctAnswer: 1,
    explanation:
      "DEFAULT specifies a value that is automatically used when an INSERT statement does not provide one.",
    difficulty: "Easy",
    topic: "Constraints"
  },
  {
    question: "What is an INNER JOIN used for?",
    options: [
      "Returns all rows from both tables",
      "Returns matching rows from both tables",
      "Returns only rows from the first table",
      "Deletes matching rows"
    ],
    correctAnswer: 1,
    explanation:
      "INNER JOIN returns rows where the join condition matches in both tables.",
    difficulty: "Easy",
    topic: "Joins"
  },
  {
    question: "Which JOIN returns all rows from the left table and matching rows from the right table?",
    options: [
      "RIGHT JOIN",
      "FULL JOIN",
      "LEFT JOIN",
      "INNER JOIN"
    ],
    correctAnswer: 2,
    explanation:
      "LEFT JOIN returns every row from the left table and matching rows from the right table. Unmatched right-side columns become NULL.",
    difficulty: "Easy",
    topic: "Joins"
  },
  {
    question: "Which JOIN returns all rows from the right table and matching rows from the left table?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: 1,
    explanation:
      "RIGHT JOIN returns every row from the right table and matching rows from the left table.",
    difficulty: "Easy",
    topic: "Joins"
  },
  {
    question: "Which JOIN can return all rows from both tables, including unmatched rows?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "FULL OUTER JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: 2,
    explanation:
      "FULL OUTER JOIN returns matching rows as well as unmatched rows from both tables.",
    difficulty: "Medium",
    topic: "Joins"
  },
  {
    question: "What does a CROSS JOIN produce?",
    options: [
      "Only matching records",
      "The Cartesian product of two tables",
      "Only unmatched records",
      "A sorted result"
    ],
    correctAnswer: 1,
    explanation:
      "CROSS JOIN produces every possible combination of rows from the two tables.",
    difficulty: "Medium",
    topic: "Joins"
  },
  {
    question: "What is a database index used for?",
    options: [
      "Increasing table size",
      "Improving query performance",
      "Deleting duplicate data",
      "Encrypting database records"
    ],
    correctAnswer: 1,
    explanation:
      "Indexes can speed up data retrieval by providing a faster way for the database engine to locate rows.",
    difficulty: "Medium",
    topic: "Indexes"
  },
  {
    question: "What is a view in SQL?",
    options: [
      "A physical copy of a table",
      "A virtual table based on a query",
      "A database backup",
      "A type of index"
    ],
    correctAnswer: 1,
    explanation:
      "A view is a virtual table whose data is generally derived from the result of a stored SELECT query.",
    difficulty: "Medium",
    topic: "Views"
  },
  {
    question: "Which command is commonly used to change the structure of an existing table?",
    options: [
      "UPDATE",
      "ALTER TABLE",
      "CHANGE TABLE",
      "MODIFY TABLE"
    ],
    correctAnswer: 1,
    explanation:
      "ALTER TABLE is used to modify the structure of an existing table, such as adding or modifying columns.",
    difficulty: "Easy",
    topic: "DDL"
  },
  {
    question: "What is normalization in a relational database?",
    options: [
      "Increasing duplicate data",
      "Organizing data to reduce redundancy",
      "Encrypting all database data",
      "Deleting all NULL values"
    ],
    correctAnswer: 1,
    explanation:
      "Normalization organizes database tables to reduce unnecessary data duplication and improve data integrity.",
    difficulty: "Medium",
    topic: "Database Design"
  },
  {
    question: "What is denormalization?",
    options: [
      "Removing all tables",
      "Intentionally introducing redundancy for performance or other reasons",
      "Deleting indexes",
      "Converting SQL to NoSQL"
    ],
    correctAnswer: 1,
    explanation:
      "Denormalization intentionally introduces some redundancy, often to simplify queries or improve read performance.",
    difficulty: "Medium",
    topic: "Database Design"
  },
  {
    question: "What does ACID stand for in database transactions?",
    options: [
      "Accuracy, Consistency, Integrity, Data",
      "Atomicity, Consistency, Isolation, Durability",
      "Atomicity, Control, Integrity, Dependency",
      "Access, Consistency, Isolation, Data"
    ],
    correctAnswer: 1,
    explanation:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability, which are key properties of reliable database transactions.",
    difficulty: "Medium",
    topic: "Transactions"
  },
  {
    question: "Which SQL command permanently saves a transaction's changes?",
    options: [
      "SAVE",
      "COMMIT",
      "APPLY",
      "CONFIRM"
    ],
    correctAnswer: 1,
    explanation:
      "COMMIT permanently saves the changes made during the current transaction.",
    difficulty: "Medium",
    topic: "Transactions"
  },
  {
    question: "Which SQL command undoes changes made during a transaction that have not been committed?",
    options: [
      "UNDO",
      "ROLLBACK",
      "CANCEL",
      "REVERSE"
    ],
    correctAnswer: 1,
    explanation:
      "ROLLBACK reverses changes made in the current transaction that have not been committed.",
    difficulty: "Medium",
    topic: "Transactions"
  },
  {
    question: "What is a subquery?",
    options: [
      "A query written inside another query",
      "A query that deletes a database",
      "A query without a WHERE clause",
      "A query that runs only once"
    ],
    correctAnswer: 0,
    explanation:
      "A subquery is a query nested inside another SQL statement.",
    difficulty: "Medium",
    topic: "Subqueries"
  },
  {
    question: "Which keyword is commonly used with a subquery to check whether at least one row exists?",
    options: [
      "EXISTS",
      "HAS",
      "FOUND",
      "AVAILABLE"
    ],
    correctAnswer: 0,
    explanation:
      "EXISTS returns true when the subquery produces at least one row.",
    difficulty: "Medium",
    topic: "Subqueries"
  },
  {
    question: "What is a self join?",
    options: [
      "Joining a table with itself",
      "Joining two databases",
      "Joining only primary keys",
      "Joining tables without a condition"
    ],
    correctAnswer: 0,
    explanation:
      "A self join joins a table to itself, often using table aliases to compare rows within the same table.",
    difficulty: "Medium",
    topic: "Joins"
  },
  {
    question: "Which SQL clause limits the number of rows returned in MySQL?",
    options: [
      "TOP",
      "LIMIT",
      "ROWCOUNT",
      "MAXROWS"
    ],
    correctAnswer: 1,
    explanation:
      "In MySQL, LIMIT is used to restrict the number of rows returned by a query.",
    difficulty: "Easy",
    topic: "MySQL"
  },
  {
    question: "What is the purpose of the COALESCE() function?",
    options: [
      "Sort values",
      "Return the first non-NULL expression",
      "Count rows",
      "Create a table"
    ],
    correctAnswer: 1,
    explanation:
      "COALESCE() returns the first non-NULL value from the expressions supplied to it.",
    difficulty: "Medium",
    topic: "Functions"
  },
  {
    question: "Which SQL expression is commonly used to perform conditional logic?",
    options: [
      "IFONLY",
      "CASE",
      "SWITCH",
      "CONDITION"
    ],
    correctAnswer: 1,
    explanation:
      "The CASE expression allows conditional logic to be used inside SQL queries.",
    difficulty: "Medium",
    topic: "Conditional Logic"
  },
  {
    question: "What is a composite key?",
    options: [
      "A key containing encrypted data",
      "A key made up of multiple columns",
      "A key containing only NULL values",
      "A key used only for sorting"
    ],
    correctAnswer: 1,
    explanation:
      "A composite key uses two or more columns together to uniquely identify a row.",
    difficulty: "Medium",
    topic: "Keys"
  },
  {
    question: "Which statement is true about NULL in SQL?",
    options: [
      "NULL is always equal to 0",
      "NULL is the same as an empty string",
      "NULL represents a missing or unknown value",
      "NULL means FALSE"
    ],
    correctAnswer: 2,
    explanation:
      "NULL represents a missing, unknown, or undefined value. It is not the same as zero or an empty string.",
    difficulty: "Easy",
    topic: "NULL"
  },
  {
    question: "Which operator should normally be used to check for NULL values?",
    options: [
      "= NULL",
      "IS NULL",
      "== NULL",
      "NULL ="
    ],
    correctAnswer: 1,
    explanation:
      "IS NULL is used to test whether a value is NULL. Using = NULL does not correctly perform the comparison.",
    difficulty: "Easy",
    topic: "NULL"
  },
  {
    question: "Which SQL command is used to remove all rows from a table while keeping the table structure?",
    options: [
      "DROP",
      "TRUNCATE",
      "DELETE DATABASE",
      "REMOVE TABLE"
    ],
    correctAnswer: 1,
    explanation:
      "TRUNCATE removes all rows from a table while keeping the table definition.",
    difficulty: "Medium",
    topic: "DDL"
  },
  {
    question: "What is the main difference between DELETE and TRUNCATE?",
    options: [
      "DELETE can filter rows with WHERE, while TRUNCATE removes all rows",
      "TRUNCATE removes the table structure",
      "DELETE can only remove one row",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation:
      "DELETE can remove selected rows using WHERE, whereas TRUNCATE is generally used to remove all rows while retaining the table structure.",
    difficulty: "Medium",
    topic: "DML and DDL"
  }
];

module.exports = sqlQuestions;