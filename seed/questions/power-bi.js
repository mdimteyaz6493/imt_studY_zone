const powerBIQuestions = [
  {
    question: "What is Power BI?",
    options: [
      "A business intelligence and data visualization platform",
      "A programming language",
      "A relational database",
      "A web browser"
    ],
    correctAnswer: 0,
    explanation:
      "Power BI is Microsoft's business intelligence platform used to connect, transform, analyze, visualize, and share data.",
    difficulty: "Easy",
    topic: "Power BI Basics"
  },
  {
    question: "Which company develops Power BI?",
    options: [
      "Google",
      "Microsoft",
      "Oracle",
      "Amazon"
    ],
    correctAnswer: 1,
    explanation:
      "Power BI is a business intelligence product developed by Microsoft.",
    difficulty: "Easy",
    topic: "Power BI Basics"
  },
  {
    question: "Which application is primarily used to create Power BI reports on a Windows desktop?",
    options: [
      "Power BI Desktop",
      "Power BI Server",
      "Power BI Editor",
      "Power BI Studio"
    ],
    correctAnswer: 0,
    explanation:
      "Power BI Desktop is the main Windows application used to connect to data, build models, create reports, and develop visualizations.",
    difficulty: "Easy",
    topic: "Power BI Desktop"
  },
  {
    question: "What is Power BI Service?",
    options: [
      "A cloud-based platform for publishing, sharing, and collaborating on Power BI content",
      "A programming language",
      "A local database",
      "A Windows driver"
    ],
    correctAnswer: 0,
    explanation:
      "Power BI Service is Microsoft's cloud-based environment for publishing, sharing, managing, and consuming Power BI content.",
    difficulty: "Easy",
    topic: "Power BI Service"
  },
  {
    question: "What is Power Query used for in Power BI?",
    options: [
      "Data extraction and transformation",
      "Creating operating systems",
      "Managing user passwords",
      "Writing JavaScript applications"
    ],
    correctAnswer: 0,
    explanation:
      "Power Query is used to connect to data sources and perform data extraction, cleaning, transformation, and preparation.",
    difficulty: "Easy",
    topic: "Power Query"
  },
  {
    question: "Which language is primarily used by Power Query for data transformation?",
    options: [
      "DAX",
      "M",
      "SQL",
      "Python"
    ],
    correctAnswer: 1,
    explanation:
      "Power Query transformations are represented using the M language, also called Power Query M.",
    difficulty: "Medium",
    topic: "Power Query"
  },
  {
    question: "What is DAX in Power BI?",
    options: [
      "A formula and expression language used for calculations",
      "A database server",
      "A visualization library",
      "A file format"
    ],
    correctAnswer: 0,
    explanation:
      "DAX, or Data Analysis Expressions, is used to create measures, calculated columns, and calculated tables.",
    difficulty: "Easy",
    topic: "DAX"
  },
  {
    question: "Which DAX function is commonly used to calculate the sum of a column?",
    options: [
      "TOTAL()",
      "SUM()",
      "ADD()",
      "SUMCOLUMN()"
    ],
    correctAnswer: 1,
    explanation:
      "The DAX SUM() function adds all the values in a specified column.",
    difficulty: "Easy",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function counts the number of rows in a table?",
    options: [
      "COUNTROWS()",
      "ROWCOUNT()",
      "COUNTALL()",
      "ROWS()"
    ],
    correctAnswer: 0,
    explanation:
      "COUNTROWS() returns the number of rows in the specified table.",
    difficulty: "Easy",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function counts non-blank values in a column?",
    options: [
      "COUNT()",
      "COUNTA()",
      "COUNTBLANK()",
      "COUNTROWS()"
    ],
    correctAnswer: 0,
    explanation:
      "COUNT() counts non-blank values in a column when the values are numbers, dates, or similar supported numeric types.",
    difficulty: "Medium",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function counts non-blank values including text?",
    options: [
      "COUNT()",
      "COUNTA()",
      "COUNTBLANK()",
      "COUNTROWS()"
    ],
    correctAnswer: 1,
    explanation:
      "COUNTA() counts non-blank values in a column, including text values.",
    difficulty: "Medium",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function counts blank values?",
    options: [
      "COUNTBLANK()",
      "BLANKCOUNT()",
      "COUNTNULL()",
      "EMPTYCOUNT()"
    ],
    correctAnswer: 0,
    explanation:
      "COUNTBLANK() counts the number of blank cells in a column.",
    difficulty: "Easy",
    topic: "DAX Functions"
  },
  {
    question: "What is a measure in Power BI?",
    options: [
      "A dynamic calculation evaluated based on filter context",
      "A physical database table",
      "A Power Query step",
      "A chart type"
    ],
    correctAnswer: 0,
    explanation:
      "A measure is a DAX calculation evaluated dynamically based on the current filter and query context.",
    difficulty: "Medium",
    topic: "Measures"
  },
  {
    question: "What is a calculated column?",
    options: [
      "A column calculated row by row using a DAX expression",
      "A dashboard",
      "A Power Query connection",
      "A report page"
    ],
    correctAnswer: 0,
    explanation:
      "A calculated column is created using DAX and is evaluated for each row of a table during data model processing.",
    difficulty: "Medium",
    topic: "Calculated Columns"
  },
  {
    question: "What is generally a key difference between a measure and a calculated column?",
    options: [
      "Measures are calculated based on filter context, while calculated columns are stored row-level results",
      "Measures can only contain text",
      "Calculated columns cannot use DAX",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation:
      "Measures are evaluated at query time according to filter context, while calculated columns are computed for rows during model processing and stored in the model.",
    difficulty: "Hard",
    topic: "Measures vs Calculated Columns"
  },
  {
    question: "What is a calculated table?",
    options: [
      "A table created using a DAX expression",
      "A table created only in Excel",
      "A table that cannot contain rows",
      "A visual table"
    ],
    correctAnswer: 0,
    explanation:
      "A calculated table is created in the data model using a DAX table expression.",
    difficulty: "Medium",
    topic: "Data Modeling"
  },
  {
    question: "What is a data model in Power BI?",
    options: [
      "A collection of tables, relationships, columns, and calculations used for analysis",
      "Only a chart",
      "Only a Power Query query",
      "A report theme"
    ],
    correctAnswer: 0,
    explanation:
      "A Power BI data model organizes tables and relationships and can include measures, calculated columns, and other model metadata.",
    difficulty: "Easy",
    topic: "Data Modeling"
  },
  {
    question: "What is a relationship in Power BI?",
    options: [
      "A connection between tables based on related columns",
      "A connection between dashboards only",
      "A connection to the internet",
      "A relationship between report colors"
    ],
    correctAnswer: 0,
    explanation:
      "Relationships connect tables through related columns and allow filters to propagate between related tables.",
    difficulty: "Easy",
    topic: "Relationships"
  },
  {
    question: "Which relationship type is commonly used between a fact table and a dimension table?",
    options: [
      "One-to-many",
      "One-to-one only",
      "Many-to-many only",
      "Zero-to-zero"
    ],
    correctAnswer: 0,
    explanation:
      "A common star-schema relationship has one dimension row related to many fact rows.",
    difficulty: "Easy",
    topic: "Relationships"
  },
  {
    question: "What is a star schema?",
    options: [
      "A model with a central fact table connected to dimension tables",
      "A single flat table only",
      "A model without relationships",
      "A collection of dashboards"
    ],
    correctAnswer: 0,
    explanation:
      "A star schema typically contains a central fact table surrounded by related dimension tables.",
    difficulty: "Easy",
    topic: "Data Modeling"
  },
  {
    question: "What is a fact table?",
    options: [
      "A table containing measurable business events or transactions",
      "A table containing only descriptions",
      "A table containing dashboard settings",
      "A table containing report themes"
    ],
    correctAnswer: 0,
    explanation:
      "Fact tables generally contain transactional or event-level data and numeric measures such as sales amount or quantity.",
    difficulty: "Easy",
    topic: "Data Modeling"
  },
  {
    question: "What is a dimension table?",
    options: [
      "A table containing descriptive attributes used to analyze facts",
      "A table containing only calculations",
      "A table containing report layouts",
      "A table containing Power BI users"
    ],
    correctAnswer: 0,
    explanation:
      "Dimension tables contain descriptive attributes such as product, customer, date, or location information.",
    difficulty: "Easy",
    topic: "Data Modeling"
  },
  {
    question: "What is filter context in DAX?",
    options: [
      "The set of filters affecting the evaluation of a calculation",
      "A Power Query error",
      "A visual formatting option",
      "A database connection string"
    ],
    correctAnswer: 0,
    explanation:
      "Filter context consists of filters applied by visuals, slicers, relationships, and DAX expressions during calculation.",
    difficulty: "Hard",
    topic: "DAX Context"
  },
  {
    question: "What is row context in DAX?",
    options: [
      "The current row being evaluated",
      "The current report page",
      "The current visual",
      "The current database"
    ],
    correctAnswer: 0,
    explanation:
      "Row context represents the current row being evaluated, especially in calculated columns and iterator functions.",
    difficulty: "Hard",
    topic: "DAX Context"
  },
  {
    question: "Which DAX function is commonly used to modify filter context?",
    options: [
      "CALCULATE()",
      "FILTERONLY()",
      "CHANGEFILTER()",
      "CONTEXT()"
    ],
    correctAnswer: 0,
    explanation:
      "CALCULATE() evaluates an expression in a modified filter context and is one of the most important DAX functions.",
    difficulty: "Hard",
    topic: "CALCULATE"
  },
  {
    question: "Which DAX function returns a table filtered according to a condition?",
    options: [
      "FILTER()",
      "WHERE()",
      "FILTERTABLE()",
      "SELECTFILTER()"
    ],
    correctAnswer: 0,
    explanation:
      "FILTER() returns a table that contains only rows satisfying the specified condition.",
    difficulty: "Medium",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function is commonly used to remove filters from a table or column?",
    options: [
      "REMOVEFILTERS()",
      "CLEARFILTER()",
      "DELETEFILTER()",
      "UNFILTER()"
    ],
    correctAnswer: 0,
    explanation:
      "REMOVEFILTERS() can be used within DAX expressions to clear filters from specified tables or columns.",
    difficulty: "Medium",
    topic: "DAX Functions"
  },
  {
    question: "Which DAX function can return a distinct list of values from a column?",
    options: [
      "VALUES()",
      "DISTINCTVALUES()",
      "UNIQUE()",
      "ONLY()"
    ],
    correctAnswer: 0,
    explanation:
      "VALUES() can return a one-column table containing distinct values from a column, with context-dependent behavior around blank values.",
    difficulty: "Medium",
    topic: "DAX Functions"
  },
  {
    question: "Which Power BI visual is commonly used to show trends over time?",
    options: [
      "Line chart",
      "Card",
      "Gauge",
      "Slicer"
    ],
    correctAnswer: 0,
    explanation:
      "Line charts are commonly used to visualize trends across continuous or ordered time periods.",
    difficulty: "Easy",
    topic: "Visualizations"
  },
  {
    question: "Which visual is commonly used to display a single important KPI value?",
    options: [
      "Card",
      "Scatter chart",
      "Map",
      "Treemap"
    ],
    correctAnswer: 0,
    explanation:
      "A Card visual is commonly used to display a single summarized value such as total sales or profit.",
    difficulty: "Easy",
    topic: "Visualizations"
  },
  {
    question: "What is a slicer in Power BI?",
    options: [
      "An interactive visual used to filter report data",
      "A database table",
      "A DAX function",
      "A Power Query language"
    ],
    correctAnswer: 0,
    explanation:
      "A slicer is an interactive report visual that allows users to filter data based on selected values.",
    difficulty: "Easy",
    topic: "Filters and Slicers"
  },
  {
    question: "What is a drill-through page used for?",
    options: [
      "Showing detailed information related to a selected data point",
      "Creating a database",
      "Importing Excel files",
      "Changing the Power BI license"
    ],
    correctAnswer: 0,
    explanation:
      "Drill-through lets users navigate to a detail page filtered according to the selected data point.",
    difficulty: "Medium",
    topic: "Drill Through"
  },
  {
    question: "What is drill-down in Power BI?",
    options: [
      "Moving from a higher level of a hierarchy to a more detailed level",
      "Deleting a visual",
      "Downloading a report",
      "Changing a data source"
    ],
    correctAnswer: 0,
    explanation:
      "Drill-down allows users to move through levels of a hierarchy, such as Year → Quarter → Month → Day.",
    difficulty: "Easy",
    topic: "Drill Down"
  },
  {
    question: "What is a dashboard in Power BI Service?",
    options: [
      "A single-page canvas containing pinned tiles",
      "A Power Query table",
      "A DAX formula",
      "A local CSV file"
    ],
    correctAnswer: 0,
    explanation:
      "A Power BI dashboard is a single-page view in Power BI Service made up of tiles pinned from reports and other supported sources.",
    difficulty: "Medium",
    topic: "Dashboards"
  },
  {
    question: "What is a Power BI report?",
    options: [
      "A collection of one or more pages containing interactive visuals",
      "Only a single KPI",
      "Only a database table",
      "Only a DAX measure"
    ],
    correctAnswer: 0,
    explanation:
      "A Power BI report can contain multiple pages with interactive visualizations based on a semantic model.",
    difficulty: "Easy",
    topic: "Reports"
  },
  {
    question: "What is a workspace in Power BI Service?",
    options: [
      "A collaborative environment for storing and managing Power BI content",
      "A DAX formula",
      "A database column",
      "A chart type"
    ],
    correctAnswer: 0,
    explanation:
      "Workspaces are collaborative areas in Power BI Service where reports, semantic models, dashboards, and related content can be managed.",
    difficulty: "Easy",
    topic: "Power BI Service"
  },
  {
    question: "What is a semantic model in Power BI?",
    options: [
      "A structured collection of data, relationships, calculations, and metadata used by reports",
      "Only a chart",
      "Only a Power Query script",
      "Only a dashboard"
    ],
    correctAnswer: 0,
    explanation:
      "A semantic model organizes data and business logic for analysis and is used by Power BI reports and other consumers.",
    difficulty: "Medium",
    topic: "Semantic Models"
  },
  {
    question: "What is row-level security (RLS) used for?",
    options: [
      "Restricting which rows of data users can see",
      "Deleting duplicate rows",
      "Increasing chart size",
      "Changing report colors"
    ],
    correctAnswer: 0,
    explanation:
      "Row-level security restricts data access so different users can see different rows based on defined roles and filters.",
    difficulty: "Medium",
    topic: "Security"
  },
  {
    question: "Where are RLS roles commonly defined during model development?",
    options: [
      "Power BI Desktop",
      "Notepad",
      "Excel only",
      "PowerPoint"
    ],
    correctAnswer: 0,
    explanation:
      "Roles and their DAX filter expressions can be defined in Power BI Desktop and then managed or assigned in the Power BI Service.",
    difficulty: "Medium",
    topic: "Security"
  },
  {
    question: "What is an on-premises data gateway used for?",
    options: [
      "Connecting Power BI Service to supported on-premises data sources",
      "Creating DAX formulas",
      "Designing charts",
      "Editing Power BI themes"
    ],
    correctAnswer: 0,
    explanation:
      "An on-premises data gateway enables Power BI Service to securely access supported data sources located within an organization's network.",
    difficulty: "Medium",
    topic: "Data Gateway"
  },
  {
    question: "What is scheduled refresh?",
    options: [
      "Automatically updating imported data on a configured schedule",
      "Automatically deleting reports",
      "Automatically changing visuals",
      "Automatically creating dashboards"
    ],
    correctAnswer: 0,
    explanation:
      "Scheduled refresh allows imported model data to be refreshed automatically according to a configured schedule, subject to capacity and licensing limits.",
    difficulty: "Easy",
    topic: "Data Refresh"
  },
  {
    question: "Which storage mode keeps data primarily in Power BI's in-memory engine?",
    options: [
      "Import",
      "DirectQuery",
      "LiveText",
      "External"
    ],
    correctAnswer: 0,
    explanation:
      "Import mode loads data into Power BI's in-memory storage engine for fast interactive analysis.",
    difficulty: "Medium",
    topic: "Storage Modes"
  },
  {
    question: "Which storage mode sends queries to the underlying data source instead of importing all data into the model?",
    options: [
      "Import",
      "DirectQuery",
      "Snapshot",
      "StaticQuery"
    ],
    correctAnswer: 1,
    explanation:
      "DirectQuery sends queries to the underlying source rather than importing the entire dataset into Power BI's in-memory model.",
    difficulty: "Medium",
    topic: "Storage Modes"
  },
  {
    question: "What is a composite model in Power BI?",
    options: [
      "A model that can combine different storage modes or data sources",
      "A report with only one visual",
      "A model containing only Excel data",
      "A model without relationships"
    ],
    correctAnswer: 0,
    explanation:
      "Composite models allow a semantic model to combine Import and DirectQuery storage modes and work with multiple data sources.",
    difficulty: "Hard",
    topic: "Storage Modes"
  },
  {
    question: "What is data profiling in Power Query useful for?",
    options: [
      "Understanding data quality, distributions, and potential issues",
      "Creating dashboards",
      "Writing DAX measures",
      "Publishing reports"
    ],
    correctAnswer: 0,
    explanation:
      "Power Query data profiling features help analyze column quality, distribution, and statistics to identify data issues.",
    difficulty: "Medium",
    topic: "Power Query"
  },
  {
    question: "Which Power Query transformation is useful for removing duplicate records?",
    options: [
      "Remove Duplicates",
      "Remove Rows Only",
      "Delete Repeats",
      "Unique Filter"
    ],
    correctAnswer: 0,
    explanation:
      "The Remove Duplicates transformation removes duplicate values or rows based on the selected columns.",
    difficulty: "Easy",
    topic: "Power Query"
  },
  {
    question: "What is an Applied Step in Power Query?",
    options: [
      "A recorded transformation or operation applied to a query",
      "A DAX measure",
      "A report page",
      "A dashboard tile"
    ],
    correctAnswer: 0,
    explanation:
      "Applied Steps show the sequence of transformations performed on a Power Query query.",
    difficulty: "Easy",
    topic: "Power Query"
  },
  {
    question: "What is unpivoting in Power Query?",
    options: [
      "Converting columns into attribute-value rows",
      "Deleting columns",
      "Sorting rows",
      "Creating relationships"
    ],
    correctAnswer: 0,
    explanation:
      "Unpivot transforms columns into rows, producing attribute-value pairs and is useful for normalizing wide datasets.",
    difficulty: "Medium",
    topic: "Power Query"
  },
  {
    question: "What is a Date table used for in Power BI?",
    options: [
      "Supporting time-based analysis and date-related calculations",
      "Storing only product names",
      "Creating dashboard backgrounds",
      "Managing Power BI users"
    ],
    correctAnswer: 0,
    explanation:
      "A dedicated Date table provides a consistent date dimension for filtering, grouping, and time-intelligence calculations.",
    difficulty: "Easy",
    topic: "Date Table"
  },
  {
    question: "Which DAX function can calculate year-to-date values when used appropriately with a proper date context?",
    options: [
      "TOTALYTD()",
      "YEARCOUNT()",
      "YTD()",
      "YEAR_TOTAL()"
    ],
    correctAnswer: 0,
    explanation:
      "TOTALYTD() evaluates an expression for the year-to-date period based on the current date context.",
    difficulty: "Medium",
    topic: "Time Intelligence"
  },
  {
    question: "What is a KPI visual primarily used for?",
    options: [
      "Comparing a key performance indicator against a target or goal",
      "Editing Power Query code",
      "Creating database tables",
      "Managing relationships"
    ],
    correctAnswer: 0,
    explanation:
      "A KPI visual communicates a key metric and can show its status or progress relative to a target.",
    difficulty: "Easy",
    topic: "Visualizations"
  },
  {
    question: "What is the purpose of bookmarks in Power BI?",
    options: [
      "Capture and restore a particular report view or state",
      "Create database backups",
      "Store passwords",
      "Write DAX formulas"
    ],
    correctAnswer: 0,
    explanation:
      "Bookmarks save the state of a report page, including selections and visibility states, and can be used for navigation or interactive storytelling.",
    difficulty: "Medium",
    topic: "Bookmarks"
  },
  {
    question: "What is Performance Analyzer in Power BI Desktop used for?",
    options: [
      "Analyzing the performance of report visuals and queries",
      "Creating database tables",
      "Changing user permissions",
      "Editing images"
    ],
    correctAnswer: 0,
    explanation:
      "Performance Analyzer helps identify how long visuals take to load and can help diagnose report performance issues.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "Which practice generally improves Power BI data model performance?",
    options: [
      "Using a well-designed star schema and removing unnecessary columns",
      "Adding every available column",
      "Creating duplicate tables unnecessarily",
      "Using many calculated columns for everything"
    ],
    correctAnswer: 0,
    explanation:
      "A clean star schema, appropriate data types, and removing unnecessary columns can reduce model size and improve performance.",
    difficulty: "Medium",
    topic: "Performance"
  }
];

module.exports = powerBIQuestions;