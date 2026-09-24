const dbmsQuestions = [
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Monitoring System",
      "Data Management Software"
    ],
    correctAnswer: 0,
    explanation:
      "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, and manage data in databases.",
    difficulty: "Easy",
    topic: "DBMS Basics"
  },

  {
    question: "Which of the following is a primary function of a DBMS?",
    options: [
      "Managing and accessing data",
      "Designing computer hardware",
      "Compiling programming languages",
      "Managing operating system processes"
    ],
    correctAnswer: 0,
    explanation:
      "A DBMS provides facilities for storing, organizing, retrieving, updating, and managing data efficiently.",
    difficulty: "Easy",
    topic: "DBMS Basics"
  },

  {
    question: "Which of the following is an example of a relational DBMS?",
    options: [
      "MongoDB",
      "MySQL",
      "Redis",
      "Neo4j"
    ],
    correctAnswer: 1,
    explanation:
      "MySQL is a relational DBMS that stores data in tables consisting of rows and columns.",
    difficulty: "Easy",
    topic: "RDBMS"
  },

  {
    question: "What is a database?",
    options: [
      "A collection of related data",
      "A programming language",
      "A computer network",
      "An operating system"
    ],
    correctAnswer: 0,
    explanation:
      "A database is an organized collection of related data that can be stored, accessed, and managed efficiently.",
    difficulty: "Easy",
    topic: "Database Basics"
  },

  {
    question: "What is RDBMS?",
    options: [
      "Remote Database Management System",
      "Relational Database Management System",
      "Rapid Database Management System",
      "Runtime Database Management System"
    ],
    correctAnswer: 1,
    explanation:
      "RDBMS stands for Relational Database Management System. It organizes data into related tables.",
    difficulty: "Easy",
    topic: "RDBMS"
  },

  {
    question: "In a relational database, a row is also called a:",
    options: [
      "Field",
      "Attribute",
      "Record",
      "Column"
    ],
    correctAnswer: 2,
    explanation:
      "A row in a relational table represents a record or tuple.",
    difficulty: "Easy",
    topic: "Relational Model"
  },

  {
    question: "In a relational database, a column is also called a:",
    options: [
      "Tuple",
      "Attribute",
      "Record",
      "Relation"
    ],
    correctAnswer: 1,
    explanation:
      "A column represents an attribute or field of the data stored in a table.",
    difficulty: "Easy",
    topic: "Relational Model"
  },

  {
    question: "Which key uniquely identifies each record in a table?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Candidate Key",
      "Composite Key"
    ],
    correctAnswer: 1,
    explanation:
      "A primary key uniquely identifies each row in a table and cannot contain NULL values.",
    difficulty: "Easy",
    topic: "Keys"
  },

  {
    question: "Can a primary key contain NULL values?",
    options: [
      "Yes",
      "No",
      "Only one NULL value",
      "Depends on the database"
    ],
    correctAnswer: 1,
    explanation:
      "A primary key must uniquely identify every row, so it cannot contain NULL values.",
    difficulty: "Easy",
    topic: "Primary Key"
  },

  {
    question: "What is a foreign key used for?",
    options: [
      "To uniquely identify every row",
      "To establish a relationship between tables",
      "To sort records",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation:
      "A foreign key references a key in another table and helps maintain relationships between tables.",
    difficulty: "Easy",
    topic: "Foreign Key"
  },

  {
    question: "A key that can potentially become a primary key is called:",
    options: [
      "Foreign Key",
      "Candidate Key",
      "Alternate Table",
      "Super Attribute"
    ],
    correctAnswer: 1,
    explanation:
      "A candidate key is a minimal set of attributes that can uniquely identify a record. One candidate key is selected as the primary key.",
    difficulty: "Easy",
    topic: "Keys"
  },

  {
    question: "What is a super key?",
    options: [
      "A key that uniquely identifies a row",
      "Only the primary key",
      "Only a foreign key",
      "A key used for sorting"
    ],
    correctAnswer: 0,
    explanation:
      "A super key is any set of one or more attributes that can uniquely identify a row.",
    difficulty: "Medium",
    topic: "Keys"
  },

  {
    question: "What is a composite key?",
    options: [
      "A key containing only one column",
      "A key made up of multiple columns",
      "A foreign key only",
      "A temporary key"
    ],
    correctAnswer: 1,
    explanation:
      "A composite key consists of two or more columns that together uniquely identify a record.",
    difficulty: "Easy",
    topic: "Keys"
  },

  {
    question: "Which SQL command is used to create a database?",
    options: [
      "MAKE DATABASE",
      "NEW DATABASE",
      "CREATE DATABASE",
      "BUILD DATABASE"
    ],
    correctAnswer: 2,
    explanation:
      "The CREATE DATABASE command is used to create a new database.",
    difficulty: "Easy",
    topic: "SQL Basics"
  },

  {
    question: "Which SQL command is used to retrieve data from a table?",
    options: [
      "GET",
      "SELECT",
      "FETCH DATA",
      "READ"
    ],
    correctAnswer: 1,
    explanation:
      "The SELECT statement is used to retrieve data from one or more database tables.",
    difficulty: "Easy",
    topic: "SQL Basics"
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
      "UPDATE is a DML command used to modify existing records in a table.",
    difficulty: "Easy",
    topic: "SQL Commands"
  },

  {
    question: "Which SQL command is used to remove records from a table?",
    options: [
      "REMOVE",
      "DELETE",
      "DROP",
      "CLEAR"
    ],
    correctAnswer: 1,
    explanation:
      "DELETE removes selected rows from a table based on the specified condition.",
    difficulty: "Easy",
    topic: "SQL Commands"
  },

  {
    question: "Which command removes a table completely from the database?",
    options: [
      "DELETE",
      "REMOVE",
      "DROP",
      "CLEAR"
    ],
    correctAnswer: 2,
    explanation:
      "DROP TABLE removes the table structure along with its data.",
    difficulty: "Easy",
    topic: "SQL Commands"
  },

  {
    question: "Which command is used to add a new column to an existing table?",
    options: [
      "UPDATE",
      "ALTER TABLE",
      "MODIFY TABLE",
      "CHANGE TABLE"
    ],
    correctAnswer: 1,
    explanation:
      "ALTER TABLE can be used to add, modify, or drop columns and constraints.",
    difficulty: "Easy",
    topic: "DDL"
  },

  {
    question: "Which of the following is a DDL command?",
    options: [
      "INSERT",
      "UPDATE",
      "CREATE",
      "SELECT"
    ],
    correctAnswer: 2,
    explanation:
      "CREATE is a Data Definition Language command used to create database objects.",
    difficulty: "Easy",
    topic: "DDL"
  },

  {
    question: "Which of the following is a DML command?",
    options: [
      "CREATE",
      "ALTER",
      "INSERT",
      "DROP"
    ],
    correctAnswer: 2,
    explanation:
      "INSERT is a Data Manipulation Language command used to add records to a table.",
    difficulty: "Easy",
    topic: "DML"
  },

  {
    question: "Which SQL clause is used to filter rows?",
    options: [
      "HAVING",
      "WHERE",
      "GROUP BY",
      "ORDER BY"
    ],
    correctAnswer: 1,
    explanation:
      "The WHERE clause filters individual rows based on a specified condition.",
    difficulty: "Easy",
    topic: "SQL Clauses"
  },

  {
    question: "Which clause is used to group rows having the same values?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "HAVING"
    ],
    correctAnswer: 1,
    explanation:
      "GROUP BY combines rows with the same values in specified columns, commonly for aggregate calculations.",
    difficulty: "Easy",
    topic: "SQL Clauses"
  },

  {
    question: "Which clause is used to filter grouped results?",
    options: [
      "WHERE",
      "HAVING",
      "FILTER",
      "GROUP"
    ],
    correctAnswer: 1,
    explanation:
      "HAVING filters groups after GROUP BY has been applied.",
    difficulty: "Medium",
    topic: "SQL Clauses"
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
    topic: "SQL Clauses"
  },

  {
    question: "Which SQL function returns the number of rows?",
    options: [
      "SUM()",
      "COUNT()",
      "TOTAL()",
      "NUMBER()"
    ],
    correctAnswer: 1,
    explanation:
      "COUNT() returns the number of rows or non-NULL values depending on how it is used.",
    difficulty: "Easy",
    topic: "SQL Functions"
  },

  {
    question: "Which SQL function calculates the average value?",
    options: [
      "MEAN()",
      "AVERAGE()",
      "AVG()",
      "MID()"
    ],
    correctAnswer: 2,
    explanation:
      "AVG() is the SQL aggregate function used to calculate the average of numeric values.",
    difficulty: "Easy",
    topic: "SQL Functions"
  },

  {
    question: "Which SQL function returns the largest value?",
    options: [
      "HIGH()",
      "MAX()",
      "LARGEST()",
      "TOP()"
    ],
    correctAnswer: 1,
    explanation:
      "MAX() returns the maximum value from a set of values.",
    difficulty: "Easy",
    topic: "SQL Functions"
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
      "MIN() returns the smallest value from a set of values.",
    difficulty: "Easy",
    topic: "SQL Functions"
  },

  {
    question: "What is normalization in DBMS?",
    options: [
      "Increasing duplicate data",
      "Organizing data to reduce redundancy",
      "Encrypting the database",
      "Deleting all NULL values"
    ],
    correctAnswer: 1,
    explanation:
      "Normalization organizes data into related tables to reduce redundancy and improve data integrity.",
    difficulty: "Easy",
    topic: "Normalization"
  },

  {
    question: "Which normal form removes repeating groups and ensures atomic values?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    correctAnswer: 0,
    explanation:
      "First Normal Form (1NF) requires atomic values and eliminates repeating groups.",
    difficulty: "Medium",
    topic: "Normalization"
  },

  {
    question: "Which normal form removes partial dependency?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "4NF"
    ],
    correctAnswer: 1,
    explanation:
      "Second Normal Form (2NF) requires 1NF and removes partial functional dependencies on a composite candidate key.",
    difficulty: "Medium",
    topic: "Normalization"
  },

  {
    question: "Which normal form removes transitive dependency?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "4NF"
    ],
    correctAnswer: 2,
    explanation:
      "Third Normal Form (3NF) removes transitive dependencies of non-key attributes on a key.",
    difficulty: "Medium",
    topic: "Normalization"
  },

  {
    question: "What is denormalization?",
    options: [
      "Removing all tables",
      "Adding controlled redundancy to improve performance",
      "Deleting duplicate rows",
      "Encrypting data"
    ],
    correctAnswer: 1,
    explanation:
      "Denormalization intentionally introduces some redundancy to reduce joins and potentially improve read performance.",
    difficulty: "Medium",
    topic: "Normalization"
  },

  {
    question: "What is a transaction in DBMS?",
    options: [
      "A database table",
      "A logical unit of database operations",
      "A database user",
      "A type of index"
    ],
    correctAnswer: 1,
    explanation:
      "A transaction is a logical unit of work containing one or more database operations that should be completed consistently.",
    difficulty: "Easy",
    topic: "Transactions"
  },

  {
    question: "Which property of ACID ensures that a transaction is completed entirely or not at all?",
    options: [
      "Consistency",
      "Isolation",
      "Atomicity",
      "Durability"
    ],
    correctAnswer: 2,
    explanation:
      "Atomicity ensures that all operations in a transaction succeed together or the entire transaction is rolled back.",
    difficulty: "Easy",
    topic: "ACID"
  },

  {
    question: "Which ACID property ensures that the database remains valid before and after a transaction?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswer: 1,
    explanation:
      "Consistency ensures that a transaction takes the database from one valid state to another valid state.",
    difficulty: "Easy",
    topic: "ACID"
  },

  {
    question: "Which ACID property prevents concurrent transactions from interfering with each other?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswer: 2,
    explanation:
      "Isolation controls how concurrent transactions interact and prevents intermediate transaction states from causing unwanted interference.",
    difficulty: "Easy",
    topic: "ACID"
  },

  {
    question: "Which ACID property ensures committed data survives a system failure?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswer: 3,
    explanation:
      "Durability ensures that once a transaction is committed, its changes persist even after failures.",
    difficulty: "Easy",
    topic: "ACID"
  },

  {
    question: "Which SQL command permanently saves a transaction?",
    options: [
      "SAVE",
      "COMMIT",
      "STORE",
      "PERSIST"
    ],
    correctAnswer: 1,
    explanation:
      "COMMIT permanently saves the changes made by the current transaction.",
    difficulty: "Easy",
    topic: "Transactions"
  },

  {
    question: "Which SQL command cancels changes made during the current transaction?",
    options: [
      "CANCEL",
      "UNDO",
      "ROLLBACK",
      "REVERSE"
    ],
    correctAnswer: 2,
    explanation:
      "ROLLBACK undoes changes made during the current transaction that have not been committed.",
    difficulty: "Easy",
    topic: "Transactions"
  },

  {
    question: "What is an index in a database?",
    options: [
      "A backup copy of the database",
      "A structure used to speed up data retrieval",
      "A database user",
      "A type of table"
    ],
    correctAnswer: 1,
    explanation:
      "An index is a data structure that can improve query performance by making data retrieval faster.",
    difficulty: "Easy",
    topic: "Indexes"
  },

  {
    question: "What is the main disadvantage of having too many indexes?",
    options: [
      "Queries always become slower",
      "They consume storage and can slow INSERT, UPDATE, and DELETE operations",
      "They delete duplicate records",
      "They prevent SELECT queries"
    ],
    correctAnswer: 1,
    explanation:
      "Indexes require additional storage and must be maintained when data changes, which can increase write overhead.",
    difficulty: "Medium",
    topic: "Indexes"
  },

  {
    question: "What is a view in DBMS?",
    options: [
      "A physical copy of a table",
      "A virtual table based on a query",
      "A backup database",
      "An index"
    ],
    correctAnswer: 1,
    explanation:
      "A view is a virtual table whose data is derived from one or more underlying tables using a query.",
    difficulty: "Easy",
    topic: "Views"
  },

  {
    question: "Which JOIN returns matching rows from both tables?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    correctAnswer: 2,
    explanation:
      "INNER JOIN returns rows where the join condition matches in both tables.",
    difficulty: "Easy",
    topic: "Joins"
  },

  {
    question: "Which JOIN returns all rows from the left table and matching rows from the right table?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    correctAnswer: 1,
    explanation:
      "LEFT JOIN returns all rows from the left table and matching rows from the right table. Unmatched right-side columns contain NULL.",
    difficulty: "Easy",
    topic: "Joins"
  },

  {
    question: "Which JOIN produces the Cartesian product of two tables?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "CROSS JOIN",
      "SELF JOIN"
    ],
    correctAnswer: 2,
    explanation:
      "CROSS JOIN combines every row of the first table with every row of the second table.",
    difficulty: "Medium",
    topic: "Joins"
  },

  {
    question: "What is a self join?",
    options: [
      "Joining two databases",
      "Joining a table with itself",
      "Joining two columns",
      "Joining two primary keys"
    ],
    correctAnswer: 1,
    explanation:
      "A self join joins a table with itself, usually using different aliases for the same table.",
    difficulty: "Easy",
    topic: "Joins"
  },

  {
    question: "What is a deadlock in DBMS?",
    options: [
      "A database backup",
      "A situation where transactions wait indefinitely for each other",
      "A deleted table",
      "A failed SELECT query"
    ],
    correctAnswer: 1,
    explanation:
      "A deadlock occurs when two or more transactions wait for resources held by each other, creating a cycle of waiting.",
    difficulty: "Medium",
    topic: "Concurrency Control"
  },

  {
    question: "What is concurrency control in DBMS?",
    options: [
      "Managing simultaneous transactions safely",
      "Creating database users",
      "Deleting old records",
      "Creating indexes"
    ],
    correctAnswer: 0,
    explanation:
      "Concurrency control ensures that multiple transactions can execute simultaneously without causing inconsistent results.",
    difficulty: "Medium",
    topic: "Concurrency Control"
  },

  {
    question: "Which mechanism is commonly used to control concurrent access to database resources?",
    options: [
      "Locks",
      "Compilers",
      "Routers",
      "DNS"
    ],
    correctAnswer: 0,
    explanation:
      "Locks are commonly used to control concurrent access to database resources and maintain consistency.",
    difficulty: "Easy",
    topic: "Concurrency Control"
  },

  {
    question: "What is data integrity?",
    options: [
      "Keeping data accurate and consistent",
      "Encrypting every record",
      "Deleting duplicate tables",
      "Backing up data"
    ],
    correctAnswer: 0,
    explanation:
      "Data integrity refers to maintaining the accuracy, consistency, and reliability of data throughout its lifecycle.",
    difficulty: "Easy",
    topic: "Data Integrity"
  },

  {
    question: "Which constraint prevents duplicate values in a column?",
    options: [
      "CHECK",
      "UNIQUE",
      "DEFAULT",
      "NOT NULL"
    ],
    correctAnswer: 1,
    explanation:
      "The UNIQUE constraint ensures that values in a column or combination of columns are unique.",
    difficulty: "Easy",
    topic: "Constraints"
  },

  {
    question: "Which constraint ensures that a column cannot contain NULL values?",
    options: [
      "UNIQUE",
      "CHECK",
      "NOT NULL",
      "DEFAULT"
    ],
    correctAnswer: 2,
    explanation:
      "The NOT NULL constraint requires every inserted row to have a value for that column.",
    difficulty: "Easy",
    topic: "Constraints"
  },

  {
    question: "Which constraint is used to enforce a condition on column values?",
    options: [
      "CHECK",
      "DEFAULT",
      "UNIQUE",
      "INDEX"
    ],
    correctAnswer: 0,
    explanation:
      "The CHECK constraint ensures that inserted or updated values satisfy a specified condition.",
    difficulty: "Easy",
    topic: "Constraints"
  },

  {
    question: "What is referential integrity?",
    options: [
      "Ensuring foreign key references remain valid",
      "Ensuring every table has an index",
      "Encrypting foreign keys",
      "Removing NULL values"
    ],
    correctAnswer: 0,
    explanation:
      "Referential integrity ensures that relationships between tables remain valid, particularly through foreign key constraints.",
    difficulty: "Medium",
    topic: "Data Integrity"
  },

  {
    question: "What is a schema in DBMS?",
    options: [
      "A database password",
      "The logical structure of a database",
      "A database backup",
      "A query result"
    ],
    correctAnswer: 1,
    explanation:
      "A database schema defines the logical structure of the database, including tables, columns, relationships, constraints, and other objects.",
    difficulty: "Easy",
    topic: "Database Schema"
  },

  {
    question: "What is a tuple in the relational model?",
    options: [
      "A column",
      "A row",
      "A database",
      "An index"
    ],
    correctAnswer: 1,
    explanation:
      "A tuple represents a single row or record in a relational table.",
    difficulty: "Easy",
    topic: "Relational Model"
  }
];

module.exports = dbmsQuestions;