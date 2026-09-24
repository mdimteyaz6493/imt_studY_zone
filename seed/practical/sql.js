const sqlPracticalQuestions = [
  {
    title: "Select All Records",

    question:
      "sales table se saare records aur saare columns retrieve karne ke liye kaunsi SQL query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales;",
      "GET * FROM sales;",
      "SELECT ALL sales;",
      "FETCH sales;"
    ],

    correctAnswer: 0,

    explanation:
      "SELECT * FROM sales; returns all columns and all rows from the sales table.",

    difficulty: "Easy",

    topic: "SELECT",

    tags: ["sql", "practical", "select"]
  },

  {
    title: "Select Specific Columns",

    question:
      "sales table se sirf product aur price columns retrieve karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT product, price FROM sales;",
      "SELECT product AND price FROM sales;",
      "GET product, price FROM sales;",
      "SELECT product + price FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "Multiple columns ko retrieve karne ke liye column names ko comma se separate kiya jata hai.",

    difficulty: "Easy",

    topic: "SELECT",

    tags: ["sql", "practical", "select"]
  },

  {
    title: "Filter Sales by City",

    question:
      "Sirf Patna city ki sales retrieve karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE city = 'Patna';",
      "SELECT * FROM sales IF city = 'Patna';",
      "SELECT * FROM sales FILTER city = 'Patna';",
      "SELECT * FROM sales HAVING city = 'Patna';"
    ],

    correctAnswer: 0,

    explanation:
      "WHERE clause ka use rows ko condition ke basis par filter karne ke liye hota hai.",

    difficulty: "Easy",

    topic: "WHERE",

    tags: ["sql", "practical", "where"]
  },

  {
    title: "Find Electronics Products",

    question:
      "Sirf Electronics category ke products retrieve karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE category = 'Electronics';",
      "SELECT * FROM sales WHERE category == 'Electronics';",
      "SELECT * FROM sales WHERE category IS 'Electronics';",
      "SELECT * FROM sales FILTER category = 'Electronics';"
    ],

    correctAnswer: 0,

    explanation:
      "WHERE category = 'Electronics' sirf Electronics category ke records return karega.",

    difficulty: "Easy",

    topic: "WHERE",

    tags: ["sql", "practical", "where"]
  },

  {
    title: "Products Above Price",

    question:
      "Un products ko retrieve karo jinki price 5000 se greater hai.",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE price > 5000;",
      "SELECT * FROM sales WHERE price < 5000;",
      "SELECT * FROM sales HAVING price > 5000;",
      "SELECT * FROM sales WHERE price >= 5000;"
    ],

    correctAnswer: 0,

    explanation:
      "Greater than condition ke liye > operator use hota hai.",

    difficulty: "Easy",

    topic: "Comparison Operators",

    tags: ["sql", "practical", "operators"]
  },

  {
    title: "Sort by Price",

    question:
      "Products ko price ke ascending order mein sort karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales ORDER BY price ASC;",
      "SELECT * FROM sales SORT price ASC;",
      "SELECT * FROM sales ORDER price ASC;",
      "SELECT * FROM sales GROUP BY price ASC;"
    ],

    correctAnswer: 0,

    explanation:
      "ORDER BY price ASC price ko ascending order mein sort karta hai.",

    difficulty: "Easy",

    topic: "ORDER BY",

    tags: ["sql", "practical", "sorting"]
  },

  {
    title: "Sort by Price Descending",

    question:
      "Products ko highest price se lowest price tak sort karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales ORDER BY price DESC;",
      "SELECT * FROM sales ORDER BY price ASC;",
      "SELECT * FROM sales SORT price DESC;",
      "SELECT * FROM sales GROUP BY price DESC;"
    ],

    correctAnswer: 0,

    explanation:
      "DESC ka use descending order ke liye hota hai.",

    difficulty: "Easy",

    topic: "ORDER BY",

    tags: ["sql", "practical", "sorting"]
  },

  {
    title: "Find Unique Cities",

    question:
      "sales table mein available unique cities retrieve karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT UNIQUE city FROM sales;",
      "SELECT DISTINCT city FROM sales;",
      "SELECT DIFFERENT city FROM sales;",
      "SELECT ONLY city FROM sales;"
    ],

    correctAnswer: 1,

    explanation:
      "DISTINCT duplicate values ko remove karke unique values return karta hai.",

    difficulty: "Easy",

    topic: "DISTINCT",

    tags: ["sql", "practical", "distinct"]
  },

  {
    title: "Count Sales Records",

    question:
      "sales table mein total records count karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT COUNT(*) FROM sales;",
      "SELECT TOTAL(*) FROM sales;",
      "SELECT NUMBER(*) FROM sales;",
      "SELECT ROWS(*) FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "COUNT(*) table ke total rows ko count karta hai.",

    difficulty: "Easy",

    topic: "COUNT",

    tags: ["sql", "practical", "aggregate"]
  },

  {
    title: "Calculate Total Quantity",

    question:
      "sales table mein sold products ki total quantity calculate karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT SUM(quantity) FROM sales;",
      "SELECT TOTAL(quantity) FROM sales;",
      "SELECT ADD(quantity) FROM sales;",
      "SELECT COUNT(quantity) FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "SUM(quantity) quantity column ke saare numeric values ka total calculate karta hai.",

    difficulty: "Easy",

    topic: "SUM",

    tags: ["sql", "practical", "aggregate"]
  },

  {
    title: "Find Maximum Price",

    question:
      "sales table mein sabse expensive product ki price find karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT MAX(price) FROM sales;",
      "SELECT HIGH(price) FROM sales;",
      "SELECT TOP(price) FROM sales;",
      "SELECT BIGGEST(price) FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "MAX() numeric column ki highest value return karta hai.",

    difficulty: "Easy",

    topic: "MAX",

    tags: ["sql", "practical", "aggregate"]
  },

  {
    title: "Find Average Price",

    question:
      "Sales table ke products ki average price calculate karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT AVG(price) FROM sales;",
      "SELECT AVERAGE(price) FROM sales;",
      "SELECT MEAN(price) FROM sales;",
      "SELECT MID(price) FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "AVG() numeric values ka average calculate karta hai.",

    difficulty: "Easy",

    topic: "AVG",

    tags: ["sql", "practical", "aggregate"]
  },

  {
    title: "Group Sales by City",

    question:
      "Har city mein kitne sales records hain ye find karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT city, COUNT(*) FROM sales GROUP BY city;",
      "SELECT city, COUNT(*) FROM sales ORDER BY city;",
      "SELECT city FROM sales COUNT GROUP;",
      "SELECT COUNT(city) FROM sales SORT BY city;"
    ],

    correctAnswer: 0,

    explanation:
      "GROUP BY city same city ke records ko group karta hai aur COUNT(*) har group ke records count karta hai.",

    difficulty: "Medium",

    topic: "GROUP BY",

    tags: ["sql", "practical", "group-by"]
  },

  {
    title: "Filter Grouped Results",

    question:
      "Sirf un cities ko retrieve karo jahan 1 se zyada sales records hain.",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT city, COUNT(*) FROM sales GROUP BY city HAVING COUNT(*) > 1;",
      "SELECT city, COUNT(*) FROM sales WHERE COUNT(*) > 1 GROUP BY city;",
      "SELECT city FROM sales WHERE city > 1;",
      "SELECT city, COUNT(*) FROM sales FILTER COUNT(*) > 1;"
    ],

    correctAnswer: 0,

    explanation:
      "Grouped results ko filter karne ke liye HAVING clause use hota hai.",

    difficulty: "Medium",

    topic: "HAVING",

    tags: ["sql", "practical", "having"]
  },

  {
    title: "Find Products Between Prices",

    question:
      "Un products ko retrieve karo jinki price 1000 aur 5000 ke beech hai.",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE price BETWEEN 1000 AND 5000;",
      "SELECT * FROM sales WHERE price RANGE 1000 AND 5000;",
      "SELECT * FROM sales WHERE price IN 1000 TO 5000;",
      "SELECT * FROM sales WHERE price > 1000 AND < 5000;"
    ],

    correctAnswer: 0,

    explanation:
      "BETWEEN operator inclusive range ke liye use hota hai.",

    difficulty: "Easy",

    topic: "BETWEEN",

    tags: ["sql", "practical", "between"]
  },

  {
    title: "Find Products Using LIKE",

    question:
      "Un products ko find karo jinke naam 'M' letter se start hote hain.",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE product LIKE 'M%';",
      "SELECT * FROM sales WHERE product LIKE '%M';",
      "SELECT * FROM sales WHERE product STARTS 'M';",
      "SELECT * FROM sales WHERE product = 'M%';"
    ],

    correctAnswer: 0,

    explanation:
      "LIKE 'M%' un values ko match karta hai jo M se start hoti hain.",

    difficulty: "Easy",

    topic: "LIKE",

    tags: ["sql", "practical", "like"]
  },

  {
    title: "Top 2 Expensive Products",

    question:
      "MySQL mein highest price wale top 2 products retrieve karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales ORDER BY price DESC LIMIT 2;",
      "SELECT TOP 2 * FROM sales ORDER BY price ASC;",
      "SELECT * FROM sales LIMIT 2 ORDER price DESC;",
      "SELECT FIRST 2 * FROM sales ORDER BY price DESC;"
    ],

    correctAnswer: 0,

    explanation:
      "ORDER BY price DESC highest price se sorting karta hai aur LIMIT 2 top 2 rows return karta hai.",

    difficulty: "Medium",

    topic: "LIMIT",

    tags: ["sql", "practical", "limit", "mysql"]
  },

  {
    title: "Calculate Total Revenue",

    question:
      "Sales table mein quantity × price ke basis par total revenue calculate karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT SUM(quantity * price) AS total_revenue FROM sales;",
      "SELECT TOTAL(quantity + price) FROM sales;",
      "SELECT SUM(quantity, price) FROM sales;",
      "SELECT quantity * SUM(price) FROM sales;"
    ],

    correctAnswer: 0,

    explanation:
      "Har sale ka revenue quantity * price hota hai. SUM() in sab revenues ka total calculate karta hai.",

    difficulty: "Medium",

    topic: "Aggregate Functions",

    tags: ["sql", "practical", "sum", "sales-analysis"]
  },

  {
    title: "Revenue by City",

    question:
      "Har city ka total revenue calculate karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT city, SUM(quantity * price) AS revenue FROM sales GROUP BY city;",
      "SELECT city, SUM(quantity + price) FROM sales;",
      "SELECT city, COUNT(quantity * price) FROM sales GROUP BY city;",
      "SELECT SUM(city) FROM sales GROUP BY price;"
    ],

    correctAnswer: 0,

    explanation:
      "GROUP BY city har city ka group banata hai aur SUM(quantity * price) us city ka total revenue calculate karta hai.",

    difficulty: "Medium",

    topic: "GROUP BY",

    tags: ["sql", "practical", "sales-analysis", "group-by"]
  },

  {
    title: "Multiple Conditions",

    question:
      "Patna city mein Electronics category ke products find karne ke liye kaunsi query use karoge?",

    tables: [
      {
        name: "sales",

        columns: [
          { name: "id", type: "INT" },
          { name: "product", type: "VARCHAR" },
          { name: "category", type: "VARCHAR" },
          { name: "quantity", type: "INT" },
          { name: "price", type: "DECIMAL" },
          { name: "city", type: "VARCHAR" }
        ],

        rows: [
          [1, "Laptop", "Electronics", 2, 55000, "Patna"],
          [2, "Mouse", "Electronics", 5, 800, "Delhi"],
          [3, "Keyboard", "Electronics", 3, 1500, "Mumbai"],
          [4, "Chair", "Furniture", 4, 4500, "Patna"],
          [5, "Monitor", "Electronics", 2, 12000, "Delhi"]
        ]
      }
    ],

    options: [
      "SELECT * FROM sales WHERE city = 'Patna' AND category = 'Electronics';",
      "SELECT * FROM sales WHERE city = 'Patna' OR category = 'Electronics';",
      "SELECT * FROM sales WHERE city AND category = 'Patna';",
      "SELECT * FROM sales WHERE city = 'Patna' + category = 'Electronics';"
    ],

    correctAnswer: 0,

    explanation:
      "AND operator dono conditions ko simultaneously true hona require karta hai.",

    difficulty: "Medium",

    topic: "AND Operator",

    tags: ["sql", "practical", "and"]
  }
];

module.exports = sqlPracticalQuestions;