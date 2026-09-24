const excelQuestions = [
  {
    question: "What is Microsoft Excel primarily used for?",
    options: [
      "Video editing",
      "Spreadsheet-based data management and analysis",
      "Web hosting",
      "Operating system development"
    ],
    correctAnswer: 1,
    explanation:
      "Microsoft Excel is a spreadsheet application used for storing, organizing, calculating, analyzing, and visualizing data.",
    difficulty: "Easy",
    topic: "Excel Basics"
  },

  {
    question: "What is a cell in Excel?",
    options: [
      "A complete worksheet",
      "The intersection of a row and a column",
      "A collection of worksheets",
      "A chart"
    ],
    correctAnswer: 1,
    explanation:
      "A cell is the intersection of a row and a column, such as A1 or B5.",
    difficulty: "Easy",
    topic: "Excel Basics"
  },

  {
    question: "What is the address of the cell in column B and row 5?",
    options: [
      "5B",
      "B5",
      "B-5",
      "ROW5-COLUMNB"
    ],
    correctAnswer: 1,
    explanation:
      "Excel cell references use the column letter followed by the row number, so the address is B5.",
    difficulty: "Easy",
    topic: "Cell References"
  },

  {
    question: "What is a worksheet in Excel?",
    options: [
      "A single spreadsheet page containing rows and columns",
      "Only a chart",
      "A database server",
      "An Excel formula"
    ],
    correctAnswer: 0,
    explanation:
      "A worksheet is an individual spreadsheet page inside an Excel workbook.",
    difficulty: "Easy",
    topic: "Excel Basics"
  },

  {
    question: "What is an Excel workbook?",
    options: [
      "A single cell",
      "A collection of worksheets stored in one Excel file",
      "Only a formula",
      "A chart template"
    ],
    correctAnswer: 1,
    explanation:
      "An Excel workbook is an Excel file that can contain one or more worksheets.",
    difficulty: "Easy",
    topic: "Excel Basics"
  },

  {
    question: "Which symbol is used to start a formula in Excel?",
    options: [
      "#",
      "@",
      "=",
      "$"
    ],
    correctAnswer: 2,
    explanation:
      "Excel formulas normally begin with the equals sign (=).",
    difficulty: "Easy",
    topic: "Formulas"
  },

  {
    question: "Which Excel function is used to add numbers?",
    options: [
      "COUNT",
      "SUM",
      "AVERAGE",
      "MAX"
    ],
    correctAnswer: 1,
    explanation:
      "The SUM function adds numbers or values from a specified range.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which formula correctly adds cells A1 through A10?",
    options: [
      "=ADD(A1:A10)",
      "=SUM(A1:A10)",
      "=TOTAL(A1:A10)",
      "=PLUS(A1:A10)"
    ],
    correctAnswer: 1,
    explanation:
      "=SUM(A1:A10) adds all numeric values from A1 through A10.",
    difficulty: "Easy",
    topic: "Formulas"
  },

  {
    question: "Which function calculates the average of numbers?",
    options: [
      "SUM",
      "AVERAGE",
      "COUNT",
      "MEDIAN"
    ],
    correctAnswer: 1,
    explanation:
      "The AVERAGE function calculates the arithmetic mean of the supplied numbers.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which function returns the largest value in a range?",
    options: [
      "MIN",
      "MAX",
      "LARGECOUNT",
      "TOP"
    ],
    correctAnswer: 1,
    explanation:
      "The MAX function returns the largest numeric value in a range.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which function returns the smallest value in a range?",
    options: [
      "MIN",
      "MAX",
      "LOW",
      "SMALLVALUE"
    ],
    correctAnswer: 0,
    explanation:
      "The MIN function returns the smallest numeric value in a range.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which function counts cells containing numbers?",
    options: [
      "COUNT",
      "COUNTA",
      "COUNTBLANK",
      "SUM"
    ],
    correctAnswer: 0,
    explanation:
      "COUNT counts cells containing numeric values.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which function counts non-empty cells?",
    options: [
      "COUNT",
      "COUNTA",
      "COUNTBLANK",
      "COUNTNUMBER"
    ],
    correctAnswer: 1,
    explanation:
      "COUNTA counts cells that are not empty, including cells containing text, numbers, errors, or other values.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "Which function counts blank cells?",
    options: [
      "COUNT",
      "COUNTA",
      "COUNTBLANK",
      "BLANKCOUNT"
    ],
    correctAnswer: 2,
    explanation:
      "COUNTBLANK counts the number of empty cells in a specified range.",
    difficulty: "Easy",
    topic: "Functions"
  },

  {
    question: "What does the IF function do?",
    options: [
      "Creates a chart",
      "Tests a condition and returns different results based on whether it is TRUE or FALSE",
      "Deletes rows",
      "Sorts a table"
    ],
    correctAnswer: 1,
    explanation:
      "The IF function evaluates a condition and returns one value when the condition is TRUE and another when it is FALSE.",
    difficulty: "Easy",
    topic: "Logical Functions"
  },

  {
    question: "Which formula correctly checks whether A1 is greater than 50?",
    options: [
      "=IF(A1>50,\"Pass\",\"Fail\")",
      "=CHECK(A1>50,\"Pass\",\"Fail\")",
      "=TEST(A1>50,\"Pass\",\"Fail\")",
      "=COMPARE(A1>50,\"Pass\",\"Fail\")"
    ],
    correctAnswer: 0,
    explanation:
      "The IF function can test A1>50 and return Pass when TRUE and Fail when FALSE.",
    difficulty: "Easy",
    topic: "Logical Functions"
  },

  {
    question: "Which function returns TRUE only when all specified conditions are TRUE?",
    options: [
      "OR",
      "AND",
      "IF",
      "NOT"
    ],
    correctAnswer: 1,
    explanation:
      "The AND function returns TRUE only when all supplied logical conditions are TRUE.",
    difficulty: "Easy",
    topic: "Logical Functions"
  },

  {
    question: "Which function returns TRUE when at least one condition is TRUE?",
    options: [
      "AND",
      "OR",
      "IF",
      "XORONLY"
    ],
    correctAnswer: 1,
    explanation:
      "The OR function returns TRUE if at least one of its conditions evaluates to TRUE.",
    difficulty: "Easy",
    topic: "Logical Functions"
  },

  {
    question: "What is an absolute cell reference?",
    options: [
      "A reference that changes whenever copied",
      "A reference that remains fixed when copied",
      "A reference containing only text",
      "A reference to another workbook only"
    ],
    correctAnswer: 1,
    explanation:
      "An absolute reference remains fixed when a formula is copied. For example, $A$1 is an absolute reference.",
    difficulty: "Medium",
    topic: "Cell References"
  },

  {
    question: "Which of the following is an absolute cell reference?",
    options: [
      "A1",
      "A$1",
      "$A1",
      "$A$1"
    ],
    correctAnswer: 3,
    explanation:
      "$A$1 fixes both the column A and row 1, making it an absolute reference.",
    difficulty: "Easy",
    topic: "Cell References"
  },

  {
    question: "What is a relative cell reference?",
    options: [
      "A reference that automatically changes when copied",
      "A reference that never changes",
      "A reference containing only numbers",
      "A reference to a chart"
    ],
    correctAnswer: 0,
    explanation:
      "Relative references adjust their row and column positions when a formula is copied to another cell.",
    difficulty: "Easy",
    topic: "Cell References"
  },

  {
    question: "What is a mixed cell reference?",
    options: [
      "A reference where both row and column are fixed",
      "A reference where either the row or column is fixed",
      "A reference containing text and numbers",
      "A reference to multiple worksheets"
    ],
    correctAnswer: 1,
    explanation:
      "A mixed reference fixes either the row or the column, such as $A1 or A$1.",
    difficulty: "Medium",
    topic: "Cell References"
  },

  {
    question: "What is VLOOKUP used for?",
    options: [
      "Creating charts",
      "Looking up a value vertically in a table",
      "Removing duplicate rows",
      "Formatting cells"
    ],
    correctAnswer: 1,
    explanation:
      "VLOOKUP searches for a value in the first column of a table and returns a corresponding value from another column.",
    difficulty: "Easy",
    topic: "Lookup Functions"
  },

  {
    question: "What is XLOOKUP used for?",
    options: [
      "Searching for a value and returning a corresponding result",
      "Creating pivot tables",
      "Changing font styles",
      "Removing blank rows"
    ],
    correctAnswer: 0,
    explanation:
      "XLOOKUP searches a range or array and returns a corresponding value from another range or array.",
    difficulty: "Easy",
    topic: "Lookup Functions"
  },

  {
    question: "Which function is generally considered more flexible than VLOOKUP for modern Excel lookups?",
    options: [
      "SUM",
      "XLOOKUP",
      "COUNT",
      "ROUND"
    ],
    correctAnswer: 1,
    explanation:
      "XLOOKUP provides more flexible lookup capabilities than traditional VLOOKUP, including left-side lookups and customizable match behavior.",
    difficulty: "Easy",
    topic: "Lookup Functions"
  },

  {
    question: "What is HLOOKUP used for?",
    options: [
      "Searching vertically",
      "Searching horizontally",
      "Creating charts",
      "Sorting data"
    ],
    correctAnswer: 1,
    explanation:
      "HLOOKUP searches for a value in the first row of a table and returns a corresponding value from another row.",
    difficulty: "Easy",
    topic: "Lookup Functions"
  },

  {
    question: "What does INDEX function do?",
    options: [
      "Returns a value from a specified position in a range or array",
      "Sorts a table",
      "Deletes duplicates",
      "Creates a chart"
    ],
    correctAnswer: 0,
    explanation:
      "INDEX returns the value at a specified row and column position within a range or array.",
    difficulty: "Medium",
    topic: "Lookup Functions"
  },

  {
    question: "What does MATCH function return?",
    options: [
      "The actual value from a range",
      "The position of a lookup value within a range",
      "The sum of a range",
      "The average of a range"
    ],
    correctAnswer: 1,
    explanation:
      "MATCH returns the relative position of a specified value within a range.",
    difficulty: "Medium",
    topic: "Lookup Functions"
  },

  {
    question: "Which combination is commonly used as an alternative to VLOOKUP?",
    options: [
      "SUM + COUNT",
      "INDEX + MATCH",
      "MAX + MIN",
      "IF + SUM"
    ],
    correctAnswer: 1,
    explanation:
      "INDEX and MATCH can be combined to create flexible lookup formulas.",
    difficulty: "Medium",
    topic: "Lookup Functions"
  },

  {
    question: "What is sorting in Excel?",
    options: [
      "Arranging data according to a specified order",
      "Deleting data",
      "Creating formulas",
      "Changing worksheet names"
    ],
    correctAnswer: 0,
    explanation:
      "Sorting arranges data in a particular order, such as ascending or descending.",
    difficulty: "Easy",
    topic: "Data Management"
  },

  {
    question: "What does filtering data do?",
    options: [
      "Deletes all data",
      "Displays only rows that meet specified conditions",
      "Changes formulas",
      "Creates a new workbook"
    ],
    correctAnswer: 1,
    explanation:
      "Filtering hides rows that do not meet the selected criteria while displaying matching records.",
    difficulty: "Easy",
    topic: "Data Management"
  },

  {
    question: "What is a PivotTable used for?",
    options: [
      "Summarizing and analyzing large datasets",
      "Writing VBA code only",
      "Changing Windows settings",
      "Compressing files"
    ],
    correctAnswer: 0,
    explanation:
      "PivotTables allow users to summarize, group, filter, and analyze large datasets efficiently.",
    difficulty: "Easy",
    topic: "PivotTable"
  },

  {
    question: "Which area of a PivotTable is commonly used to group categories?",
    options: [
      "Rows",
      "Formula Bar",
      "Name Box",
      "Status Bar"
    ],
    correctAnswer: 0,
    explanation:
      "The Rows area of a PivotTable is commonly used to organize and group categorical fields.",
    difficulty: "Easy",
    topic: "PivotTable"
  },

  {
    question: "Which PivotTable area is commonly used for numerical calculations?",
    options: [
      "Values",
      "Rows only",
      "Columns only",
      "Filters only"
    ],
    correctAnswer: 0,
    explanation:
      "The Values area contains numerical fields that can be summarized using Sum, Count, Average, and other calculations.",
    difficulty: "Easy",
    topic: "PivotTable"
  },

  {
    question: "What is a PivotChart?",
    options: [
      "A chart connected to a PivotTable",
      "A chart created only with VBA",
      "A chart without data",
      "A chart used only for printing"
    ],
    correctAnswer: 0,
    explanation:
      "A PivotChart is a visual representation connected to PivotTable data.",
    difficulty: "Easy",
    topic: "PivotChart"
  },

  {
    question: "What is Conditional Formatting?",
    options: [
      "Formatting cells automatically based on specified conditions",
      "Deleting cells based on conditions",
      "Creating formulas automatically",
      "Protecting a worksheet"
    ],
    correctAnswer: 0,
    explanation:
      "Conditional Formatting changes the appearance of cells when specified conditions are met.",
    difficulty: "Easy",
    topic: "Formatting"
  },

  {
    question: "Which Excel feature can highlight duplicate values?",
    options: [
      "Conditional Formatting",
      "Page Layout",
      "Freeze Panes",
      "Goal Seek"
    ],
    correctAnswer: 0,
    explanation:
      "Conditional Formatting includes a built-in rule for identifying duplicate values.",
    difficulty: "Easy",
    topic: "Data Cleaning"
  },

  {
    question: "What is Data Validation used for?",
    options: [
      "Controlling what type of data can be entered into a cell",
      "Creating PivotTables",
      "Deleting formulas",
      "Creating charts only"
    ],
    correctAnswer: 0,
    explanation:
      "Data Validation restricts cell entries according to defined rules, such as a list of allowed values.",
    difficulty: "Easy",
    topic: "Data Validation"
  },

  {
    question: "Which feature can create a drop-down list in an Excel cell?",
    options: [
      "Data Validation",
      "Conditional Formatting",
      "PivotChart",
      "Goal Seek"
    ],
    correctAnswer: 0,
    explanation:
      "Data Validation can be configured with the List option to create a drop-down menu.",
    difficulty: "Easy",
    topic: "Data Validation"
  },

  {
    question: "What does Freeze Panes do?",
    options: [
      "Keeps selected rows or columns visible while scrolling",
      "Prevents formulas from calculating",
      "Deletes hidden rows",
      "Locks the entire workbook permanently"
    ],
    correctAnswer: 0,
    explanation:
      "Freeze Panes keeps selected rows or columns visible when you scroll through a worksheet.",
    difficulty: "Easy",
    topic: "Excel Features"
  },

  {
    question: "What is the purpose of Remove Duplicates?",
    options: [
      "To remove repeated records from a dataset",
      "To remove formulas",
      "To delete worksheets",
      "To remove formatting"
    ],
    correctAnswer: 0,
    explanation:
      "Remove Duplicates identifies and removes repeated records based on selected columns.",
    difficulty: "Easy",
    topic: "Data Cleaning"
  },

  {
    question: "Which function can remove extra spaces from text?",
    options: [
      "TRIM",
      "SPACE",
      "CLEANUP",
      "REMOVE"
    ],
    correctAnswer: 0,
    explanation:
      "TRIM removes extra spaces from text while preserving single spaces between words.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function returns the number of characters in a text string?",
    options: [
      "COUNT",
      "LEN",
      "TEXTCOUNT",
      "CHARCOUNT"
    ],
    correctAnswer: 1,
    explanation:
      "LEN returns the number of characters in a text string, including spaces.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function converts text to uppercase?",
    options: [
      "UPPER",
      "CAPITAL",
      "UPCASE",
      "UPTEXT"
    ],
    correctAnswer: 0,
    explanation:
      "The UPPER function converts all letters in a text string to uppercase.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function converts text to lowercase?",
    options: [
      "LOWER",
      "SMALL",
      "LOWCASE",
      "TEXTLOW"
    ],
    correctAnswer: 0,
    explanation:
      "The LOWER function converts all letters in a text string to lowercase.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function extracts characters from the beginning of a text string?",
    options: [
      "RIGHT",
      "MID",
      "LEFT",
      "START"
    ],
    correctAnswer: 2,
    explanation:
      "The LEFT function returns a specified number of characters from the beginning of a text string.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function extracts characters from the end of a text string?",
    options: [
      "LEFT",
      "RIGHT",
      "ENDTEXT",
      "LAST"
    ],
    correctAnswer: 1,
    explanation:
      "The RIGHT function returns a specified number of characters from the end of a text string.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function extracts characters from the middle of a text string?",
    options: [
      "MID",
      "CENTER",
      "MIDDLE",
      "EXTRACT"
    ],
    correctAnswer: 0,
    explanation:
      "The MID function extracts a specified number of characters starting from a specified position.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function can combine text from multiple cells?",
    options: [
      "CONCAT",
      "COUNT",
      "COMBINEONLY",
      "MERGEROW"
    ],
    correctAnswer: 0,
    explanation:
      "CONCAT can combine text from multiple ranges or text strings into one text string.",
    difficulty: "Easy",
    topic: "Text Functions"
  },

  {
    question: "Which function can calculate the number of cells that meet a condition?",
    options: [
      "COUNTIF",
      "SUM",
      "COUNTALL",
      "IFCOUNT"
    ],
    correctAnswer: 0,
    explanation:
      "COUNTIF counts the number of cells in a range that meet a specified condition.",
    difficulty: "Easy",
    topic: "Conditional Functions"
  },

  {
    question: "Which function adds values based on one or more conditions?",
    options: [
      "SUMIF",
      "ADDIFONLY",
      "TOTALIF",
      "CONDITIONSUM"
    ],
    correctAnswer: 0,
    explanation:
      "SUMIF adds values in a range that meet a specified condition.",
    difficulty: "Easy",
    topic: "Conditional Functions"
  },

  {
    question: "Which function calculates the average of cells that meet a condition?",
    options: [
      "AVERAGEIF",
      "IFAVERAGE",
      "AVGCOUNT",
      "CONDITIONAVG"
    ],
    correctAnswer: 0,
    explanation:
      "AVERAGEIF calculates the average of cells that meet a specified criterion.",
    difficulty: "Easy",
    topic: "Conditional Functions"
  },

  {
    question: "What is Power Query mainly used for in Excel?",
    options: [
      "Importing, cleaning, transforming, and combining data",
      "Creating operating systems",
      "Editing videos",
      "Designing websites"
    ],
    correctAnswer: 0,
    explanation:
      "Power Query is a data transformation and preparation tool used to import, clean, transform, and combine data from various sources.",
    difficulty: "Medium",
    topic: "Power Query"
  },

  {
    question: "What is Power Pivot used for?",
    options: [
      "Creating advanced data models and analyzing large datasets",
      "Editing images",
      "Creating email accounts",
      "Compressing Excel files"
    ],
    correctAnswer: 0,
    explanation:
      "Power Pivot allows users to create data models, establish relationships between tables, and perform advanced analysis using DAX.",
    difficulty: "Medium",
    topic: "Power Pivot"
  },

  {
    question: "What language is commonly used to create calculations in Power Pivot?",
    options: [
      "HTML",
      "DAX",
      "CSS",
      "Java"
    ],
    correctAnswer: 1,
    explanation:
      "DAX, or Data Analysis Expressions, is used for calculations and measures in Power Pivot and Power BI.",
    difficulty: "Medium",
    topic: "DAX"
  },

  {
    question: "What is a chart in Excel used for?",
    options: [
      "Visually representing data",
      "Deleting duplicate data",
      "Creating database indexes",
      "Writing programming code"
    ],
    correctAnswer: 0,
    explanation:
      "Excel charts visually represent data and make patterns, comparisons, and trends easier to understand.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which chart is generally suitable for showing trends over time?",
    options: [
      "Line chart",
      "Pie chart",
      "Doughnut chart",
      "Radar chart"
    ],
    correctAnswer: 0,
    explanation:
      "Line charts are commonly used to show changes and trends over time.",
    difficulty: "Easy",
    topic: "Data Visualization"
  },

  {
    question: "Which Excel feature can be used to find an input value needed to achieve a specific formula result?",
    options: [
      "Goal Seek",
      "Freeze Panes",
      "Remove Duplicates",
      "Conditional Formatting"
    ],
    correctAnswer: 0,
    explanation:
      "Goal Seek is a What-If Analysis tool that determines the input value needed to achieve a specified result.",
    difficulty: "Medium",
    topic: "What-If Analysis"
  },

  {
    question: "Which Excel feature is useful for analyzing different possible scenarios?",
    options: [
      "Scenario Manager",
      "Spell Check",
      "Format Painter",
      "Freeze Panes"
    ],
    correctAnswer: 0,
    explanation:
      "Scenario Manager is a What-If Analysis tool used to compare different sets of input values and their results.",
    difficulty: "Medium",
    topic: "What-If Analysis"
  },

  {
    question: "What is a named range in Excel?",
    options: [
      "A range of cells given a meaningful name",
      "A worksheet name",
      "A chart title",
      "A formula error"
    ],
    correctAnswer: 0,
    explanation:
      "A named range assigns a meaningful name to a cell or range, making formulas easier to understand and manage.",
    difficulty: "Medium",
    topic: "Excel Features"
  },

  {
    question: "What does the error #DIV/0! generally indicate?",
    options: [
      "A formula is dividing by zero or an empty cell",
      "A missing worksheet",
      "An invalid chart",
      "A duplicate value"
    ],
    correctAnswer: 0,
    explanation:
      "#DIV/0! occurs when a formula attempts to divide a number by zero or by a blank cell treated as zero.",
    difficulty: "Easy",
    topic: "Excel Errors"
  },

  {
    question: "What does the #N/A error generally indicate?",
    options: [
      "A value is not available or cannot be found",
      "A number is too large",
      "A worksheet is protected",
      "A cell is formatted incorrectly"
    ],
    correctAnswer: 0,
    explanation:
      "#N/A commonly indicates that a required value is not available, often occurring when a lookup cannot find a match.",
    difficulty: "Easy",
    topic: "Excel Errors"
  },

  {
    question: "What is the main purpose of Excel Tables?",
    options: [
      "To organize data and provide structured features such as filtering and automatic expansion",
      "To create computer networks",
      "To replace all formulas",
      "To create presentations"
    ],
    correctAnswer: 0,
    explanation:
      "Excel Tables organize data into a structured format and provide features such as automatic filtering, structured references, and automatic expansion.",
    difficulty: "Easy",
    topic: "Excel Tables"
  }
];

module.exports = excelQuestions;