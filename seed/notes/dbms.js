const dbmsNotes = [
  {
    title: "Introduction to DBMS",
    slug: "introduction-to-dbms",
    description:
      "Learn what DBMS is, why it is used, and its basic features.",

    order: 1,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is DBMS?",
        },

        {
          type: "paragraph",
          text:
            "DBMS stands for Database Management System. It is software that allows users and applications to create, store, organize, retrieve, update, and manage data in a database.",
        },

        {
          type: "heading",
          heading: "Why do we need DBMS?",
        },

        {
          type: "paragraph",
          text:
            "A DBMS provides an organized way to manage large amounts of data. It helps users access data efficiently while providing security, consistency, integrity, and controlled access.",
        },

        {
          type: "list",
          heading: "Important Features",
          items: [
            "Data storage and retrieval",
            "Data security",
            "Data integrity",
            "Concurrent access",
            "Backup and recovery",
            "Transaction management",
          ],
        },

        {
          type: "heading",
          heading: "Examples of DBMS",
        },

        {
          type: "list",
          items: [
            "MySQL",
            "PostgreSQL",
            "Oracle Database",
            "Microsoft SQL Server",
            "SQLite",
          ],
        },

        {
          type: "important",
          title: "Interview Point",
          text:
            "DBMS is software used to manage databases, while a database is the organized collection of data itself.",
        },
      ],
    },
  },

  {
    title: "DBMS vs RDBMS",
    slug: "dbms-vs-rdbms",
    description:
      "Understand the difference between DBMS and RDBMS.",

    order: 2,

    content: {
      sections: [
        {
          type: "heading",
          heading: "DBMS",
        },

        {
          type: "paragraph",
          text:
            "DBMS is a general term for software used to manage databases. Depending on the model, data may be stored in different structures.",
        },

        {
          type: "heading",
          heading: "RDBMS",
        },

        {
          type: "paragraph",
          text:
            "RDBMS stands for Relational Database Management System. It stores data in tables and establishes relationships between those tables.",
        },

        {
          type: "table",
          headers: [
            "Feature",
            "DBMS",
            "RDBMS",
          ],
          rows: [
            [
              "Data Structure",
              "May use different models",
              "Tables",
            ],
            [
              "Relationships",
              "Not necessarily relational",
              "Relationships between tables",
            ],
            [
              "Normalization",
              "May not be required",
              "Commonly used",
            ],
            [
              "Examples",
              "Various DBMS systems",
              "MySQL, PostgreSQL, Oracle",
            ],
          ],
        },

        {
          type: "important",
          title: "Remember",
          text:
            "RDBMS is a type of DBMS based on the relational model.",
        },
      ],
    },
  },

  {
    title: "Database Models",
    slug: "database-models",
    description:
      "Learn the major database models used to organize data.",

    order: 3,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is a Database Model?",
        },

        {
          type: "paragraph",
          text:
            "A database model defines how data is organized, stored, and related within a database system.",
        },

        {
          type: "list",
          heading: "Major Database Models",
          items: [
            "Hierarchical Model",
            "Network Model",
            "Relational Model",
            "Object-Oriented Model",
            "Document Model",
          ],
        },

        {
          type: "heading",
          heading: "Relational Model",
        },

        {
          type: "paragraph",
          text:
            "The relational model represents data using tables. Each table consists of rows and columns, and relationships can be established using keys.",
        },

        {
          type: "important",
          title: "Interview Point",
          text:
            "MySQL, PostgreSQL, Oracle Database, and SQL Server are examples of relational database systems.",
        },
      ],
    },
  },

  {
    title: "Keys in DBMS",
    slug: "keys",
    description:
      "Understand primary key, foreign key, candidate key, super key and composite key.",

    order: 4,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What are Keys?",
        },

        {
          type: "paragraph",
          text:
            "Keys are attributes or combinations of attributes used to identify records and establish relationships between tables.",
        },

        {
          type: "heading",
          heading: "Primary Key",
        },

        {
          type: "paragraph",
          text:
            "A primary key uniquely identifies every record in a table. It cannot contain NULL values.",
        },

        {
          type: "code",
          language: "sql",
          code:
`CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100)
);`,
        },

        {
          type: "list",
          heading: "Primary Key Properties",
          items: [
            "Uniquely identifies each record",
            "Cannot contain NULL values",
            "A table has one primary key constraint",
            "It can contain multiple columns",
          ],
        },

        {
          type: "heading",
          heading: "Foreign Key",
        },

        {
          type: "paragraph",
          text:
            "A foreign key is a column or set of columns that references a key in another table. It is commonly used to establish relationships between tables.",
        },

        {
          type: "heading",
          heading: "Candidate Key",
        },

        {
          type: "paragraph",
          text:
            "A candidate key is a minimal set of attributes that can uniquely identify a record. One candidate key can be selected as the primary key.",
        },

        {
          type: "heading",
          heading: "Super Key",
        },

        {
          type: "paragraph",
          text:
            "A super key is any set of attributes that can uniquely identify a record. A candidate key is a minimal super key.",
        },

        {
          type: "heading",
          heading: "Composite Key",
        },

        {
          type: "paragraph",
          text:
            "A composite key is a key made up of two or more columns that together uniquely identify a record.",
        },

        {
          type: "important",
          title: "Interview Tip",
          text:
            "Primary Key identifies records. Foreign Key establishes relationships between tables.",
        },
      ],
    },
  },

  {
    title: "Constraints",
    slug: "constraints",
    description:
      "Learn SQL constraints used to maintain data integrity.",

    order: 5,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What are Constraints?",
        },

        {
          type: "paragraph",
          text:
            "Constraints are rules applied to database columns to maintain accuracy, consistency, and integrity of data.",
        },

        {
          type: "list",
          heading: "Common Constraints",
          items: [
            "PRIMARY KEY",
            "FOREIGN KEY",
            "NOT NULL",
            "UNIQUE",
            "CHECK",
            "DEFAULT",
          ],
        },

        {
          type: "code",
          language: "sql",
          code:
`CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 18),
    city VARCHAR(100) DEFAULT 'Patna'
);`,
        },

        {
          type: "heading",
          heading: "NOT NULL",
        },

        {
          type: "paragraph",
          text:
            "NOT NULL prevents a column from storing NULL values.",
        },

        {
          type: "heading",
          heading: "UNIQUE",
        },

        {
          type: "paragraph",
          text:
            "UNIQUE prevents duplicate values in a column or combination of columns.",
        },

        {
          type: "heading",
          heading: "CHECK",
        },

        {
          type: "paragraph",
          text:
            "CHECK ensures that a value satisfies a specified condition.",
        },
      ],
    },
  },

  {
    title: "Normalization",
    slug: "normalization",
    description:
      "Learn how normalization reduces redundancy and improves database design.",

    order: 6,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is Normalization?",
        },

        {
          type: "paragraph",
          text:
            "Normalization is the process of organizing data into related tables to reduce unnecessary data redundancy and improve data integrity.",
        },

        {
          type: "heading",
          heading: "Why Normalization is Used",
        },

        {
          type: "list",
          items: [
            "Reduce data redundancy",
            "Improve data consistency",
            "Avoid update anomalies",
            "Improve database structure",
            "Make relationships clearer",
          ],
        },

        {
          type: "heading",
          heading: "Normal Forms",
        },

        {
          type: "list",
          items: [
            "1NF - First Normal Form",
            "2NF - Second Normal Form",
            "3NF - Third Normal Form",
            "BCNF - Boyce-Codd Normal Form",
          ],
        },

        {
          type: "important",
          title: "Interview Tip",
          text:
            "1NF deals with atomic values, 2NF removes partial dependency, and 3NF removes transitive dependency.",
        },
      ],
    },
  },

  {
    title: "First Normal Form (1NF)",
    slug: "1nf",
    description:
      "Understand the rules and purpose of First Normal Form.",

    order: 7,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is 1NF?",
        },

        {
          type: "paragraph",
          text:
            "A table is in First Normal Form when each column contains atomic values and there are no repeating groups.",
        },

        {
          type: "heading",
          heading: "Example",
        },

        {
          type: "paragraph",
          text:
            "A column containing multiple phone numbers in a single cell violates the idea of atomic values. The phone numbers should be stored in a suitable structure where each field contains a single value.",
        },

        {
          type: "list",
          heading: "Key Points",
          items: [
            "Values should be atomic",
            "No repeating groups",
            "Each row should be uniquely identifiable",
          ],
        },
      ],
    },
  },

  {
    title: "Second Normal Form (2NF)",
    slug: "2nf",
    description:
      "Understand partial dependency and Second Normal Form.",

    order: 8,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is 2NF?",
        },

        {
          type: "paragraph",
          text:
            "A table is in 2NF when it is already in 1NF and every non-key attribute is fully dependent on the entire candidate key.",
        },

        {
          type: "heading",
          heading: "Partial Dependency",
        },

        {
          type: "paragraph",
          text:
            "Partial dependency occurs when a non-key attribute depends only on part of a composite key rather than the complete key.",
        },

        {
          type: "important",
          title: "Remember",
          text:
            "2NF removes partial dependency.",
        },
      ],
    },
  },

  {
    title: "Third Normal Form (3NF)",
    slug: "3nf",
    description:
      "Understand transitive dependency and Third Normal Form.",

    order: 9,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is 3NF?",
        },

        {
          type: "paragraph",
          text:
            "A table is in 3NF when it is in 2NF and non-key attributes do not depend transitively on a candidate key.",
        },

        {
          type: "heading",
          heading: "Transitive Dependency",
        },

        {
          type: "paragraph",
          text:
            "A transitive dependency occurs when a non-key attribute depends on another non-key attribute instead of directly depending on the key.",
        },

        {
          type: "important",
          title: "Interview Tip",
          text:
            "3NF removes transitive dependency.",
        },
      ],
    },
  },

  {
    title: "SQL Joins",
    slug: "joins",
    description:
      "Learn INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN and other joins.",

    order: 10,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is a JOIN?",
        },

        {
          type: "paragraph",
          text:
            "A JOIN combines rows from two or more tables based on a related column or condition.",
        },

        {
          type: "list",
          heading: "Common Types of JOINs",
          items: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN",
            "CROSS JOIN",
            "SELF JOIN",
          ],
        },

        {
          type: "heading",
          heading: "INNER JOIN",
        },

        {
          type: "paragraph",
          text:
            "INNER JOIN returns rows where the join condition matches in both tables.",
        },

        {
          type: "code",
          language: "sql",
          code:
`SELECT
    students.name,
    courses.course_name
FROM students
INNER JOIN courses
    ON students.course_id = courses.id;`,
        },

        {
          type: "heading",
          heading: "LEFT JOIN",
        },

        {
          type: "paragraph",
          text:
            "LEFT JOIN returns all rows from the left table and matching rows from the right table. If there is no match, the right-side columns contain NULL.",
        },

        {
          type: "important",
          title: "Interview Tip",
          text:
            "INNER JOIN returns matching records, while LEFT JOIN keeps all records from the left table.",
        },
      ],
    },
  },

  {
    title: "Transactions",
    slug: "transactions",
    description:
      "Learn database transactions and how they maintain reliable operations.",

    order: 11,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is a Transaction?",
        },

        {
          type: "paragraph",
          text:
            "A transaction is a logical unit of database operations that should be completed consistently.",
        },

        {
          type: "code",
          language: "sql",
          code:
`START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;`,
        },

        {
          type: "heading",
          heading: "COMMIT",
        },

        {
          type: "paragraph",
          text:
            "COMMIT permanently saves the changes made during a transaction.",
        },

        {
          type: "heading",
          heading: "ROLLBACK",
        },

        {
          type: "paragraph",
          text:
            "ROLLBACK undoes changes made during the current transaction that have not been committed.",
        },
      ],
    },
  },

  {
    title: "ACID Properties",
    slug: "acid-properties",
    description:
      "Learn Atomicity, Consistency, Isolation and Durability.",

    order: 12,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is ACID?",
        },

        {
          type: "paragraph",
          text:
            "ACID represents four important properties of reliable database transactions: Atomicity, Consistency, Isolation, and Durability.",
        },

        {
          type: "heading",
          heading: "Atomicity",
        },

        {
          type: "paragraph",
          text:
            "Atomicity means a transaction is treated as one complete unit. Either all required operations succeed or the transaction is rolled back.",
        },

        {
          type: "heading",
          heading: "Consistency",
        },

        {
          type: "paragraph",
          text:
            "Consistency ensures that a transaction moves the database from one valid state to another valid state.",
        },

        {
          type: "heading",
          heading: "Isolation",
        },

        {
          type: "paragraph",
          text:
            "Isolation controls how concurrent transactions interact with each other.",
        },

        {
          type: "heading",
          heading: "Durability",
        },

        {
          type: "paragraph",
          text:
            "Durability ensures that committed changes remain stored even after a system failure.",
        },

        {
          type: "table",
          headers: [
            "Property",
            "Meaning",
          ],
          rows: [
            [
              "Atomicity",
              "All or nothing",
            ],
            [
              "Consistency",
              "Database remains valid",
            ],
            [
              "Isolation",
              "Transactions do not improperly interfere",
            ],
            [
              "Durability",
              "Committed changes persist",
            ],
          ],
        },
      ],
    },
  },

  {
    title: "Indexes",
    slug: "indexes",
    description:
      "Understand database indexes and their effect on query performance.",

    order: 13,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is an Index?",
        },

        {
          type: "paragraph",
          text:
            "An index is a data structure used by a database system to make certain data retrieval operations faster.",
        },

        {
          type: "code",
          language: "sql",
          code:
`CREATE INDEX idx_student_name
ON students(name);`,
        },

        {
          type: "heading",
          heading: "Advantages",
        },

        {
          type: "list",
          items: [
            "Can speed up suitable SELECT queries",
            "Can improve lookup performance",
            "Useful for frequently searched columns",
          ],
        },

        {
          type: "heading",
          heading: "Disadvantages",
        },

        {
          type: "list",
          items: [
            "Requires additional storage",
            "Indexes need maintenance when data changes",
            "Too many indexes can increase write overhead",
          ],
        },

        {
          type: "important",
          title: "Interview Point",
          text:
            "Indexes generally improve read performance but add storage and write-maintenance overhead.",
        },
      ],
    },
  },

  {
    title: "Views",
    slug: "views",
    description:
      "Learn what database views are and why they are used.",

    order: 14,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is a View?",
        },

        {
          type: "paragraph",
          text:
            "A view is a virtual table based on the result of a SQL query. It can provide a simplified or restricted way to access data.",
        },

        {
          type: "code",
          language: "sql",
          code:
`CREATE VIEW employee_view AS
SELECT
    id,
    name,
    department
FROM employees;`,
        },

        {
          type: "heading",
          heading: "Why Use Views?",
        },

        {
          type: "list",
          items: [
            "Simplify complex queries",
            "Restrict access to selected columns or rows",
            "Provide a reusable query interface",
            "Improve abstraction",
          ],
        },
      ],
    },
  },

  {
    title: "Concurrency Control",
    slug: "concurrency-control",
    description:
      "Learn how DBMS manages multiple transactions executing at the same time.",

    order: 15,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is Concurrency Control?",
        },

        {
          type: "paragraph",
          text:
            "Concurrency control manages simultaneous database transactions so that they can execute safely without causing unwanted inconsistencies.",
        },

        {
          type: "heading",
          heading: "Why is it Needed?",
        },

        {
          type: "list",
          items: [
            "Maintain data consistency",
            "Prevent conflicting operations",
            "Control concurrent access",
            "Maintain transaction isolation",
          ],
        },

        {
          type: "heading",
          heading: "Locks",
        },

        {
          type: "paragraph",
          text:
            "Locks are commonly used by database systems to control access to shared data during concurrent transactions.",
        },
      ],
    },
  },

  {
    title: "Deadlock",
    slug: "deadlock",
    description:
      "Understand deadlocks in database transaction processing.",

    order: 16,

    content: {
      sections: [
        {
          type: "heading",
          heading: "What is a Deadlock?",
        },

        {
          type: "paragraph",
          text:
            "A deadlock occurs when two or more transactions are waiting for resources held by each other, so none of them can proceed.",
        },

        {
          type: "heading",
          heading: "Simple Example",
        },

        {
          type: "list",
          items: [
            "Transaction A holds Resource 1 and waits for Resource 2.",
            "Transaction B holds Resource 2 and waits for Resource 1.",
            "Both transactions continue waiting.",
          ],
        },

        {
          type: "important",
          title: "Interview Point",
          text:
            "Deadlock is a circular waiting situation between transactions or processes for resources.",
        },
      ],
    },
  },
];

module.exports = dbmsNotes;