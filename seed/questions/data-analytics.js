const dataAnalyticsQuestions = [
  {
    question: "What is Data Analytics?",
    options: [
      "The process of designing websites",
      "The process of examining data to discover useful insights",
      "The process of developing mobile applications",
      "The process of creating computer networks"
    ],
    correctAnswer: 1,
    explanation:
      "Data Analytics is the process of examining, cleaning, transforming, and interpreting data to discover useful insights and support decision-making.",
    difficulty: "Easy",
    topic: "Data Analytics Basics"
  },

  {
    question: "What is the primary goal of data analytics?",
    options: [
      "To store as much data as possible",
      "To create programming languages",
      "To extract useful insights from data",
      "To increase computer memory"
    ],
    correctAnswer: 2,
    explanation:
      "The primary goal of data analytics is to analyze data and extract meaningful insights that can support better decisions.",
    difficulty: "Easy",
    topic: "Data Analytics Basics"
  },

  {
    question: "Which of the following is a type of data analytics?",
    options: [
      "Descriptive Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation:
      "Descriptive, diagnostic, predictive, and prescriptive analytics are the major types of data analytics.",
    difficulty: "Easy",
    topic: "Types of Analytics"
  },

  {
    question: "What does descriptive analytics answer?",
    options: [
      "What happened?",
      "Why did it happen?",
      "What will happen?",
      "What should we do?"
    ],
    correctAnswer: 0,
    explanation:
      "Descriptive analytics summarizes historical data and answers the question: What happened?",
    difficulty: "Easy",
    topic: "Descriptive Analytics"
  },

  {
    question: "What does diagnostic analytics primarily focus on?",
    options: [
      "What happened?",
      "Why did it happen?",
      "What will happen?",
      "What should happen?"
    ],
    correctAnswer: 1,
    explanation:
      "Diagnostic analytics investigates data to understand why something happened.",
    difficulty: "Easy",
    topic: "Diagnostic Analytics"
  },

  {
    question: "What does predictive analytics attempt to determine?",
    options: [
      "What happened in the past",
      "Why something happened",
      "What is likely to happen in the future",
      "How data is stored"
    ],
    correctAnswer: 2,
    explanation:
      "Predictive analytics uses historical data, statistical methods, and machine learning techniques to estimate future outcomes.",
    difficulty: "Easy",
    topic: "Predictive Analytics"
  },

  {
    question: "What is the purpose of prescriptive analytics?",
    options: [
      "To describe historical data",
      "To identify database tables",
      "To recommend actions based on analysis",
      "To remove duplicate rows"
    ],
    correctAnswer: 2,
    explanation:
      "Prescriptive analytics recommends possible actions or decisions based on data and predicted outcomes.",
    difficulty: "Medium",
    topic: "Prescriptive Analytics"
  },

  {
    question: "Which of the following is structured data?",
    options: [
      "A relational database table",
      "A video file",
      "An audio recording",
      "A social media image"
    ],
    correctAnswer: 0,
    explanation:
      "Structured data is organized in a predefined format such as rows and columns in a relational database.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which of the following is an example of unstructured data?",
    options: [
      "Excel table",
      "SQL table",
      "Customer database",
      "Video file"
    ],
    correctAnswer: 3,
    explanation:
      "Video files generally do not follow a predefined tabular structure, making them an example of unstructured data.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "What is semi-structured data?",
    options: [
      "Data with no information",
      "Data that has some organizational structure but does not follow a strict table format",
      "Only numerical data",
      "Only text data"
    ],
    correctAnswer: 1,
    explanation:
      "Semi-structured data contains organizational elements such as keys, tags, or metadata but does not follow a strict relational table structure.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which step usually comes first in a data analysis project?",
    options: [
      "Data visualization",
      "Understanding the business problem",
      "Machine learning",
      "Creating a dashboard"
    ],
    correctAnswer: 1,
    explanation:
      "Before analyzing data, an analyst should understand the business problem, objectives, and questions that need to be answered.",
    difficulty: "Easy",
    topic: "Analytics Process"
  },

  {
    question: "What is data cleaning?",
    options: [
      "Deleting the entire dataset",
      "Removing or correcting inaccurate, duplicate, missing, or inconsistent data",
      "Creating a database",
      "Creating charts"
    ],
    correctAnswer: 1,
    explanation:
      "Data cleaning involves identifying and fixing issues such as missing values, duplicates, incorrect formats, and inconsistent data.",
    difficulty: "Easy",
    topic: "Data Cleaning"
  },

  {
    question: "What is a duplicate record?",
    options: [
      "A record containing numerical data",
      "A repeated record representing the same information",
      "A record containing missing data",
      "A calculated column"
    ],
    correctAnswer: 1,
    explanation:
      "A duplicate record is a repeated row or record that represents the same entity or event more than once.",
    difficulty: "Easy",
    topic: "Data Cleaning"
  },

  {
    question: "Which of the following is a common method for handling missing values?",
    options: [
      "Imputation",
      "Ignoring the entire dataset",
      "Changing every value to zero",
      "Deleting all columns"
    ],
    correctAnswer: 0,
    explanation:
      "Imputation replaces missing values using methods such as mean, median, mode, or other appropriate techniques.",
    difficulty: "Medium",
    topic: "Missing Data"
  },

  {
    question: "When is median often preferred over mean for filling missing numerical values?",
    options: [
      "When the data contains significant outliers",
      "When all values are text",
      "When there are no numerical values",
      "When the dataset is empty"
    ],
    correctAnswer: 0,
    explanation:
      "Median is less affected by extreme values or outliers, so it can be more appropriate than mean for skewed data.",
    difficulty: "Medium",
    topic: "Missing Data"
  },

  {
    question: "What is an outlier?",
    options: [
      "The most common value",
      "A value significantly different from other observations",
      "A missing value",
      "A duplicate value"
    ],
    correctAnswer: 1,
    explanation:
      "An outlier is an observation that is unusually far from the general pattern of the dataset.",
    difficulty: "Easy",
    topic: "Outliers"
  },

  {
    question: "Which measure represents the middle value of sorted data?",
    options: [
      "Mean",
      "Median",
      "Mode",
      "Range"
    ],
    correctAnswer: 1,
    explanation:
      "The median is the middle value when observations are arranged in ascending or descending order.",
    difficulty: "Easy",
    topic: "Statistics"
  },

  {
    question: "Which measure represents the most frequently occurring value?",
    options: [
      "Mean",
      "Median",
      "Mode",
      "Variance"
    ],
    correctAnswer: 2,
    explanation:
      "Mode is the value that occurs most frequently in a dataset.",
    difficulty: "Easy",
    topic: "Statistics"
  },

  {
    question: "How is the arithmetic mean calculated?",
    options: [
      "Maximum value minus minimum value",
      "Sum of values divided by the number of values",
      "Middle value of sorted data",
      "Most frequent value"
    ],
    correctAnswer: 1,
    explanation:
      "Mean is calculated by adding all values and dividing the total by the number of observations.",
    difficulty: "Easy",
    topic: "Statistics"
  },

  {
    question: "What does standard deviation measure?",
    options: [
      "Central value",
      "Data dispersion or spread",
      "Number of rows",
      "Number of columns"
    ],
    correctAnswer: 1,
    explanation:
      "Standard deviation measures how much individual values tend to differ from the mean.",
    difficulty: "Medium",
    topic: "Statistics"
  },

  {
    question: "What does variance measure?",
    options: [
      "The average squared deviation from the mean",
      "The middle value",
      "The most frequent value",
      "The maximum value"
    ],
    correctAnswer: 0,
    explanation:
      "Variance measures the average squared deviation of observations from their mean.",
    difficulty: "Medium",
    topic: "Statistics"
  },

  {
    question: "What is the range of a dataset?",
    options: [
      "Mean divided by median",
      "Maximum value minus minimum value",
      "Total number of rows",
      "Average of all values"
    ],
    correctAnswer: 1,
    explanation:
      "Range is calculated by subtracting the minimum value from the maximum value.",
    difficulty: "Easy",
    topic: "Statistics"
  },

  {
    question: "What is correlation?",
    options: [
      "A measure of relationship between variables",
      "A method of deleting duplicates",
      "A database constraint",
      "A data storage method"
    ],
    correctAnswer: 0,
    explanation:
      "Correlation measures the strength and direction of the relationship between two variables.",
    difficulty: "Medium",
    topic: "Correlation"
  },

  {
    question: "What does a correlation coefficient close to +1 generally indicate?",
    options: [
      "Strong positive relationship",
      "Strong negative relationship",
      "No relationship",
      "Missing data"
    ],
    correctAnswer: 0,
    explanation:
      "A correlation coefficient close to +1 indicates a strong positive linear relationship between variables.",
    difficulty: "Medium",
    topic: "Correlation"
  },

  {
    question: "What does a correlation coefficient close to -1 generally indicate?",
    options: [
      "Strong positive relationship",
      "Strong negative relationship",
      "No relationship",
      "Perfectly missing data"
    ],
    correctAnswer: 1,
    explanation:
      "A correlation coefficient close to -1 indicates a strong negative linear relationship.",
    difficulty: "Medium",
    topic: "Correlation"
  },

  {
    question: "Does correlation necessarily mean causation?",
    options: [
      "Yes, always",
      "No",
      "Only for numerical data",
      "Only for categorical data"
    ],
    correctAnswer: 1,
    explanation:
      "Correlation indicates an association between variables but does not by itself prove that one variable causes the other.",
    difficulty: "Easy",
    topic: "Correlation"
  },

  {
    question: "What is a KPI?",
    options: [
      "Key Performance Indicator",
      "Key Programming Interface",
      "Known Process Input",
      "Key Prediction Index"
    ],
    correctAnswer: 0,
    explanation:
      "KPI stands for Key Performance Indicator and is used to measure progress toward important business objectives.",
    difficulty: "Easy",
    topic: "Business Analytics"
  },

  {
    question: "Which is an example of a sales KPI?",
    options: [
      "Total Sales Revenue",
      "Keyboard Type",
      "Operating System",
      "File Size"
    ],
    correctAnswer: 0,
    explanation:
      "Total sales revenue is a common KPI used to monitor sales performance.",
    difficulty: "Easy",
    topic: "Business Analytics"
  },

  {
    question: "What is a dashboard?",
    options: [
      "A collection of visualizations and KPIs used to monitor information",
      "A database server",
      "A programming language",
      "A file compression tool"
    ],
    correctAnswer: 0,
    explanation:
      "A dashboard combines charts, metrics, KPIs, and other visual elements to provide an overview of important information.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which chart is generally suitable for showing trends over time?",
    options: [
      "Pie chart",
      "Line chart",
      "Scatter plot",
      "Donut chart"
    ],
    correctAnswer: 1,
    explanation:
      "Line charts are commonly used to display changes and trends over time.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which chart is commonly used to compare categories?",
    options: [
      "Bar chart",
      "Line chart only",
      "Histogram only",
      "Gauge chart only"
    ],
    correctAnswer: 0,
    explanation:
      "Bar charts are useful for comparing values across different categories.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which chart is commonly used to show the distribution of numerical data?",
    options: [
      "Histogram",
      "Pie chart",
      "Card",
      "Map"
    ],
    correctAnswer: 0,
    explanation:
      "A histogram displays the distribution of numerical values by grouping them into intervals or bins.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which visualization is commonly used to examine the relationship between two numerical variables?",
    options: [
      "Scatter plot",
      "Pie chart",
      "Card",
      "Table only"
    ],
    correctAnswer: 0,
    explanation:
      "Scatter plots show individual observations using two numerical variables and help identify relationships or patterns.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "What is data visualization?",
    options: [
      "Representing data using visual elements such as charts and graphs",
      "Deleting data",
      "Encrypting data",
      "Backing up files"
    ],
    correctAnswer: 0,
    explanation:
      "Data visualization represents information graphically so patterns, trends, and relationships can be understood more easily.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "What is ETL?",
    options: [
      "Extract, Transform, Load",
      "Evaluate, Test, Learn",
      "Extract, Test, Link",
      "Execute, Transform, List"
    ],
    correctAnswer: 0,
    explanation:
      "ETL stands for Extract, Transform, Load. It is a process used to extract data from sources, transform it, and load it into a target system.",
    difficulty: "Easy",
    topic: "ETL"
  },

  {
    question: "What happens during the Extract stage of ETL?",
    options: [
      "Data is retrieved from source systems",
      "Charts are created",
      "Data is deleted",
      "Reports are printed"
    ],
    correctAnswer: 0,
    explanation:
      "During extraction, data is collected from source systems such as databases, APIs, files, or applications.",
    difficulty: "Easy",
    topic: "ETL"
  },

  {
    question: "What happens during the Transform stage of ETL?",
    options: [
      "Data is cleaned and converted into a suitable format",
      "The database is deleted",
      "Only charts are created",
      "Users are created"
    ],
    correctAnswer: 0,
    explanation:
      "Transformation can include cleaning, filtering, formatting, joining, aggregating, and converting data.",
    difficulty: "Easy",
    topic: "ETL"
  },

  {
    question: "What is data normalization in the context of analytics?",
    options: [
      "A process of scaling numerical values to a common range or distribution",
      "Deleting all rows",
      "Creating a dashboard",
      "Changing database passwords"
    ],
    correctAnswer: 0,
    explanation:
      "In data preprocessing, normalization can scale numerical variables so they are represented on a comparable scale.",
    difficulty: "Medium",
    topic: "Data Preprocessing"
  },

  {
    question: "What is a categorical variable?",
    options: [
      "A variable representing categories or groups",
      "A variable containing only decimal numbers",
      "A database index",
      "A calculated formula"
    ],
    correctAnswer: 0,
    explanation:
      "Categorical variables represent groups or categories such as gender, city, product category, or department.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which is an example of a categorical variable?",
    options: [
      "Age",
      "Salary",
      "City",
      "Height"
    ],
    correctAnswer: 2,
    explanation:
      "City represents categories such as Patna, Delhi, Mumbai, or Bengaluru.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "Which is an example of a numerical variable?",
    options: [
      "Department",
      "City",
      "Age",
      "Product Category"
    ],
    correctAnswer: 2,
    explanation:
      "Age is numerical because it represents a measurable quantity.",
    difficulty: "Easy",
    topic: "Data Types"
  },

  {
    question: "What is a dimension in data analytics?",
    options: [
      "A descriptive attribute used to categorize data",
      "A calculated total",
      "A database password",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "Dimensions are descriptive attributes such as product, city, category, or department used to analyze data from different perspectives.",
    difficulty: "Medium",
    topic: "Data Modeling"
  },

  {
    question: "What is a measure in data analytics?",
    options: [
      "A numerical value that can be aggregated",
      "A category name",
      "A database table name",
      "A file extension"
    ],
    correctAnswer: 0,
    explanation:
      "Measures are typically numerical fields such as sales, quantity, profit, or revenue that can be aggregated.",
    difficulty: "Medium",
    topic: "Data Modeling"
  },

  {
    question: "What is a data warehouse?",
    options: [
      "A system designed for storing and analyzing data from multiple sources",
      "A web browser",
      "A programming editor",
      "A spreadsheet formula"
    ],
    correctAnswer: 0,
    explanation:
      "A data warehouse is a centralized system designed to store integrated data for reporting and analytical workloads.",
    difficulty: "Easy",
    topic: "Data Warehousing"
  },

  {
    question: "What is a data source?",
    options: [
      "A location or system from which data is obtained",
      "A chart type",
      "A statistical formula",
      "A dashboard filter"
    ],
    correctAnswer: 0,
    explanation:
      "A data source can be a database, Excel file, CSV file, API, application, or other system that provides data.",
    difficulty: "Easy",
    topic: "Data Sources"
  },

  {
    question: "Which file format is commonly used for tabular data exchange?",
    options: [
      "CSV",
      "MP3",
      "PNG",
      "MP4"
    ],
    correctAnswer: 0,
    explanation:
      "CSV, or Comma-Separated Values, is commonly used to store and exchange tabular data.",
    difficulty: "Easy",
    topic: "Data Sources"
  },

  {
    question: "What is data profiling?",
    options: [
      "Examining a dataset to understand its structure, quality, and characteristics",
      "Creating user profiles",
      "Encrypting a database",
      "Designing a website"
    ],
    correctAnswer: 0,
    explanation:
      "Data profiling involves examining data to understand distributions, missing values, duplicates, data types, and quality issues.",
    difficulty: "Medium",
    topic: "Data Quality"
  },

  {
    question: "What is data quality?",
    options: [
      "The degree to which data is accurate, complete, consistent, and suitable for use",
      "The number of charts in a report",
      "The size of a database",
      "The number of users"
    ],
    correctAnswer: 0,
    explanation:
      "Data quality describes how accurate, complete, consistent, valid, and reliable data is for its intended purpose.",
    difficulty: "Easy",
    topic: "Data Quality"
  },

  {
    question: "What is a pivot table commonly used for?",
    options: [
      "Summarizing and analyzing large datasets",
      "Writing HTML code",
      "Creating operating systems",
      "Compressing images"
    ],
    correctAnswer: 0,
    explanation:
      "Pivot tables are commonly used to summarize, group, filter, and analyze large datasets efficiently.",
    difficulty: "Easy",
    topic: "Excel Analytics"
  },

  {
    question: "Which Excel function is commonly used to calculate the average?",
    options: [
      "SUM",
      "COUNT",
      "AVERAGE",
      "MAX"
    ],
    correctAnswer: 2,
    explanation:
      "The Excel AVERAGE function calculates the arithmetic mean of the supplied values.",
    difficulty: "Easy",
    topic: "Excel Analytics"
  },

  {
    question: "Which Excel function can be used to look up a value in a table?",
    options: [
      "XLOOKUP",
      "SUM",
      "ROUND",
      "LEN"
    ],
    correctAnswer: 0,
    explanation:
      "XLOOKUP is an Excel lookup function used to search for a value and return a corresponding value from another range.",
    difficulty: "Easy",
    topic: "Excel Analytics"
  },

  {
    question: "What is a business question in data analytics?",
    options: [
      "A question that analysis aims to answer to support a business objective",
      "A programming syntax error",
      "A database password",
      "A chart formatting option"
    ],
    correctAnswer: 0,
    explanation:
      "A business question defines what the organization wants to understand or improve through data analysis.",
    difficulty: "Easy",
    topic: "Business Analytics"
  },

  {
    question: "Why is data storytelling important?",
    options: [
      "It helps communicate insights and their business meaning clearly",
      "It increases database storage",
      "It replaces data cleaning",
      "It removes the need for analysis"
    ],
    correctAnswer: 0,
    explanation:
      "Data storytelling combines data, visuals, and narrative to communicate insights clearly and help stakeholders understand what the data means.",
    difficulty: "Medium",
    topic: "Data Storytelling"
  },

  {
    question: "What should an analyst do when a dataset contains inconsistent date formats?",
    options: [
      "Standardize the date format",
      "Delete the entire dataset",
      "Ignore the issue",
      "Convert every date to a random value"
    ],
    correctAnswer: 0,
    explanation:
      "Date formats should be standardized so that filtering, sorting, grouping, and calculations work consistently.",
    difficulty: "Easy",
    topic: "Data Cleaning"
  },

  {
    question: "What is a trend in data analysis?",
    options: [
      "A general direction or pattern in data over time",
      "A duplicate row",
      "A missing value",
      "A database constraint"
    ],
    correctAnswer: 0,
    explanation:
      "A trend describes a general direction or pattern observed in data, often across time.",
    difficulty: "Easy",
    topic: "Data Analysis"
  }
];

module.exports = dataAnalyticsQuestions;