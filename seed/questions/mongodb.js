const mongodbQuestions = [
  {
    question: "What is MongoDB?",
    options: [
      "A relational database management system",
      "A NoSQL document-oriented database",
      "A programming language",
      "A web server"
    ],
    correctAnswer: 1,
    explanation:
      "MongoDB is a NoSQL, document-oriented database that stores data in flexible BSON documents.",
    difficulty: "Easy",
    topic: "MongoDB Basics"
  },

  {
    question: "What format is MongoDB data commonly represented in at the application level?",
    options: [
      "XML",
      "JSON",
      "CSV",
      "HTML"
    ],
    correctAnswer: 1,
    explanation:
      "MongoDB documents are commonly represented using JSON-like syntax, while MongoDB stores them internally as BSON.",
    difficulty: "Easy",
    topic: "MongoDB Basics"
  },

  {
    question: "What does BSON stand for?",
    options: [
      "Binary JSON",
      "Basic Structured Object Notation",
      "Binary Structured Object Network",
      "Base System Object Notation"
    ],
    correctAnswer: 0,
    explanation:
      "BSON stands for Binary JSON. It is a binary-encoded serialization format used by MongoDB to store documents.",
    difficulty: "Easy",
    topic: "BSON"
  },

  {
    question: "What is the MongoDB equivalent of a relational database table?",
    options: [
      "Document",
      "Collection",
      "Field",
      "Schema"
    ],
    correctAnswer: 1,
    explanation:
      "A MongoDB collection is roughly equivalent to a table in a relational database.",
    difficulty: "Easy",
    topic: "MongoDB Structure"
  },

  {
    question: "What is the MongoDB equivalent of a relational database row?",
    options: [
      "Collection",
      "Document",
      "Field",
      "Index"
    ],
    correctAnswer: 1,
    explanation:
      "A MongoDB document is roughly equivalent to a row in a relational database.",
    difficulty: "Easy",
    topic: "MongoDB Structure"
  },

  {
    question: "What is a field in a MongoDB document?",
    options: [
      "A database",
      "A collection",
      "A key-value pair",
      "An index only"
    ],
    correctAnswer: 2,
    explanation:
      "A field is a key-value pair inside a MongoDB document.",
    difficulty: "Easy",
    topic: "Documents"
  },

  {
    question: "Which field is commonly used as the unique identifier of a MongoDB document?",
    options: [
      "id",
      "_id",
      "uniqueId",
      "key"
    ],
    correctAnswer: 1,
    explanation:
      "MongoDB documents normally have an _id field that uniquely identifies the document within its collection.",
    difficulty: "Easy",
    topic: "Documents"
  },

  {
    question: "What type of value does MongoDB commonly generate automatically for _id?",
    options: [
      "UUID only",
      "ObjectId",
      "Integer",
      "String only"
    ],
    correctAnswer: 1,
    explanation:
      "When an _id is not supplied, MongoDB drivers commonly generate an ObjectId.",
    difficulty: "Easy",
    topic: "ObjectId"
  },

  {
    question: "Which command is commonly used to list databases in the MongoDB shell?",
    options: [
      "show databases",
      "show dbs",
      "list databases",
      "db.list()"
    ],
    correctAnswer: 1,
    explanation:
      "show dbs is a commonly used MongoDB shell command to list databases.",
    difficulty: "Easy",
    topic: "MongoDB Shell"
  },

  {
    question: "Which command switches to a database in the MongoDB shell?",
    options: [
      "use databaseName",
      "select databaseName",
      "switch databaseName",
      "db.use(databaseName)"
    ],
    correctAnswer: 0,
    explanation:
      "The use databaseName command switches the shell context to the specified database.",
    difficulty: "Easy",
    topic: "MongoDB Shell"
  },

  {
    question: "Which method is commonly used to retrieve documents from a collection?",
    options: [
      "find()",
      "get()",
      "select()",
      "read()"
    ],
    correctAnswer: 0,
    explanation:
      "The find() method is used to query documents in a MongoDB collection.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method retrieves a single document matching a query?",
    options: [
      "findOne()",
      "findSingle()",
      "getOne()",
      "selectOne()"
    ],
    correctAnswer: 0,
    explanation:
      "findOne() returns a single document matching the specified query.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method inserts a single document?",
    options: [
      "insert()",
      "insertOne()",
      "addOne()",
      "createOne()"
    ],
    correctAnswer: 1,
    explanation:
      "insertOne() inserts one document into a collection.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method inserts multiple documents?",
    options: [
      "insertMany()",
      "insertMultiple()",
      "addMany()",
      "createManyOnly()"
    ],
    correctAnswer: 0,
    explanation:
      "insertMany() inserts multiple documents in a single operation.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method updates a single matching document?",
    options: [
      "update()",
      "updateOne()",
      "modifyOne()",
      "changeOne()"
    ],
    correctAnswer: 1,
    explanation:
      "updateOne() updates the first document that matches the specified filter.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method updates multiple matching documents?",
    options: [
      "updateAll()",
      "updateMany()",
      "modifyMany()",
      "changeMany()"
    ],
    correctAnswer: 1,
    explanation:
      "updateMany() updates all documents that match the specified filter.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method deletes a single matching document?",
    options: [
      "deleteOne()",
      "removeSingle()",
      "deleteSingle()",
      "dropOne()"
    ],
    correctAnswer: 0,
    explanation:
      "deleteOne() deletes the first document that matches the specified filter.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which method deletes multiple matching documents?",
    options: [
      "deleteAll()",
      "deleteMany()",
      "removeManyOnly()",
      "dropMany()"
    ],
    correctAnswer: 1,
    explanation:
      "deleteMany() removes all documents matching the specified filter.",
    difficulty: "Easy",
    topic: "CRUD"
  },

  {
    question: "Which MongoDB operator is used for equality comparison?",
    options: [
      "$eq",
      "$equals",
      "$equal",
      "$same"
    ],
    correctAnswer: 0,
    explanation:
      "$eq matches values that are equal to the specified value.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches values greater than a specified value?",
    options: [
      "$gt",
      "$greater",
      "$above",
      "$more"
    ],
    correctAnswer: 0,
    explanation:
      "$gt means greater than.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches values less than a specified value?",
    options: [
      "$lt",
      "$less",
      "$below",
      "$under"
    ],
    correctAnswer: 0,
    explanation:
      "$lt means less than.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches values greater than or equal to a specified value?",
    options: [
      "$gte",
      "$ge",
      "$greaterEqual",
      "$min"
    ],
    correctAnswer: 0,
    explanation:
      "$gte means greater than or equal to.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches values less than or equal to a specified value?",
    options: [
      "$lte",
      "$le",
      "$lessEqual",
      "$max"
    ],
    correctAnswer: 0,
    explanation:
      "$lte means less than or equal to.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator is used to match values that are not equal to a specified value?",
    options: [
      "$ne",
      "$notEqual",
      "$different",
      "$neq"
    ],
    correctAnswer: 0,
    explanation:
      "$ne matches values that are not equal to the specified value.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches documents where a field value is included in an array of specified values?",
    options: [
      "$in",
      "$contains",
      "$include",
      "$matchArray"
    ],
    correctAnswer: 0,
    explanation:
      "$in selects documents where the field value matches any value in the specified array.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator matches documents where a field value is not included in a specified array?",
    options: [
      "$notIn",
      "$nin",
      "$exclude",
      "$notContains"
    ],
    correctAnswer: 1,
    explanation:
      "$nin selects documents where the field value does not match any value in the specified array.",
    difficulty: "Easy",
    topic: "Query Operators"
  },

  {
    question: "Which operator is commonly used for logical AND conditions?",
    options: [
      "$and",
      "$all",
      "$both",
      "$matchAll"
    ],
    correctAnswer: 0,
    explanation:
      "$and joins query clauses and requires all specified conditions to be true.",
    difficulty: "Easy",
    topic: "Logical Operators"
  },

  {
    question: "Which operator is used for logical OR conditions?",
    options: [
      "$either",
      "$or",
      "$any",
      "$one"
    ],
    correctAnswer: 1,
    explanation:
      "$or matches documents when at least one of the specified conditions is true.",
    difficulty: "Easy",
    topic: "Logical Operators"
  },

  {
    question: "Which operator negates the result of another query expression?",
    options: [
      "$not",
      "$negate",
      "$no",
      "$inverse"
    ],
    correctAnswer: 0,
    explanation:
      "$not performs a logical NOT operation on another query expression.",
    difficulty: "Medium",
    topic: "Logical Operators"
  },

  {
    question: "Which update operator is used to modify a field value?",
    options: [
      "$set",
      "$change",
      "$modify",
      "$update"
    ],
    correctAnswer: 0,
    explanation:
      "$set replaces the value of a field with the specified value.",
    difficulty: "Easy",
    topic: "Update Operators"
  },

  {
    question: "Which operator increments a numeric field?",
    options: [
      "$add",
      "$inc",
      "$increase",
      "$plus"
    ],
    correctAnswer: 1,
    explanation:
      "$inc increments a field by a specified amount.",
    difficulty: "Easy",
    topic: "Update Operators"
  },

  {
    question: "Which operator removes a field from a document?",
    options: [
      "$delete",
      "$remove",
      "$unset",
      "$drop"
    ],
    correctAnswer: 2,
    explanation:
      "$unset removes the specified field from a document.",
    difficulty: "Easy",
    topic: "Update Operators"
  },

  {
    question: "Which operator adds an element to an array?",
    options: [
      "$push",
      "$addArray",
      "$append",
      "$insert"
    ],
    correctAnswer: 0,
    explanation:
      "$push adds an element to an array field.",
    difficulty: "Easy",
    topic: "Array Operators"
  },

  {
    question: "Which operator removes the first or last element from an array?",
    options: [
      "$pull",
      "$pop",
      "$remove",
      "$shift"
    ],
    correctAnswer: 1,
    explanation:
      "$pop removes the first or last element from an array depending on the supplied value.",
    difficulty: "Medium",
    topic: "Array Operators"
  },

  {
    question: "Which operator removes array elements that match a specified condition?",
    options: [
      "$pull",
      "$removeAll",
      "$filterOut",
      "$delete"
    ],
    correctAnswer: 0,
    explanation:
      "$pull removes all array elements that match a specified condition.",
    difficulty: "Medium",
    topic: "Array Operators"
  },

  {
    question: "What is a MongoDB index used for?",
    options: [
      "Increasing document size",
      "Improving query performance",
      "Encrypting all documents",
      "Replacing collections"
    ],
    correctAnswer: 1,
    explanation:
      "Indexes support efficient query execution by allowing MongoDB to avoid scanning every document in many cases.",
    difficulty: "Easy",
    topic: "Indexes"
  },

  {
    question: "Which method creates an index on a collection?",
    options: [
      "createIndex()",
      "makeIndex()",
      "addIndex()",
      "indexCreate()"
    ],
    correctAnswer: 0,
    explanation:
      "The createIndex() method creates an index on one or more fields.",
    difficulty: "Easy",
    topic: "Indexes"
  },

  {
    question: "What is a compound index?",
    options: [
      "An index on multiple fields",
      "An index on multiple databases",
      "A duplicate index",
      "An encrypted index"
    ],
    correctAnswer: 0,
    explanation:
      "A compound index is an index that contains multiple fields.",
    difficulty: "Medium",
    topic: "Indexes"
  },

  {
    question: "What is a unique index used for?",
    options: [
      "Sorting documents only",
      "Preventing duplicate indexed values",
      "Deleting duplicate collections",
      "Encrypting fields"
    ],
    correctAnswer: 1,
    explanation:
      "A unique index prevents multiple documents from having the same indexed value, subject to MongoDB's unique-index rules.",
    difficulty: "Medium",
    topic: "Indexes"
  },

  {
    question: "What is aggregation in MongoDB?",
    options: [
      "A way to process and transform documents through stages",
      "A method for creating users",
      "A backup mechanism",
      "A replacement for indexes"
    ],
    correctAnswer: 0,
    explanation:
      "Aggregation processes documents through a pipeline of stages to filter, group, transform and calculate results.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which method is used to run an aggregation pipeline?",
    options: [
      "aggregate()",
      "group()",
      "pipeline()",
      "process()"
    ],
    correctAnswer: 0,
    explanation:
      "The aggregate() method executes an aggregation pipeline on a collection.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage filters documents?",
    options: [
      "$filter",
      "$match",
      "$whereOnly",
      "$select"
    ],
    correctAnswer: 1,
    explanation:
      "The $match stage filters documents based on specified conditions.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage groups documents?",
    options: [
      "$group",
      "$collect",
      "$combine",
      "$aggregateGroup"
    ],
    correctAnswer: 0,
    explanation:
      "The $group stage combines documents based on a specified group key and can calculate aggregate values.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage is commonly used to reshape documents?",
    options: [
      "$change",
      "$project",
      "$reshape",
      "$select"
    ],
    correctAnswer: 1,
    explanation:
      "$project can include, exclude or compute fields to reshape documents in the aggregation pipeline.",
    difficulty: "Medium",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage sorts documents?",
    options: [
      "$sort",
      "$order",
      "$arrange",
      "$orderby"
    ],
    correctAnswer: 0,
    explanation:
      "The $sort stage sorts documents based on one or more fields.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage limits the number of documents?",
    options: [
      "$limit",
      "$top",
      "$countLimit",
      "$max"
    ],
    correctAnswer: 0,
    explanation:
      "The $limit stage restricts the number of documents passed to the next stage.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage skips a specified number of documents?",
    options: [
      "$skip",
      "$offset",
      "$ignore",
      "$jump"
    ],
    correctAnswer: 0,
    explanation:
      "The $skip stage skips a specified number of documents in the aggregation pipeline.",
    difficulty: "Easy",
    topic: "Aggregation"
  },

  {
    question: "Which aggregation stage can combine documents from another collection?",
    options: [
      "$join",
      "$lookup",
      "$combine",
      "$mergeJoin"
    ],
    correctAnswer: 1,
    explanation:
      "The $lookup aggregation stage performs a left outer join-like operation with another collection.",
    difficulty: "Medium",
    topic: "Aggregation"
  },

  {
    question: "What is schema flexibility in MongoDB?",
    options: [
      "Every collection must have identical fields",
      "Documents in a collection can have different structures",
      "MongoDB does not store schemas at all",
      "Only strings can be stored"
    ],
    correctAnswer: 1,
    explanation:
      "MongoDB collections are flexible by default, allowing documents to have different fields and structures.",
    difficulty: "Easy",
    topic: "Schema Design"
  },

  {
    question: "What is embedding in MongoDB schema design?",
    options: [
      "Storing related data inside the same document",
      "Creating another database",
      "Adding an index",
      "Encrypting a document"
    ],
    correctAnswer: 0,
    explanation:
      "Embedding stores related data within the same document, often reducing the need for separate queries.",
    difficulty: "Medium",
    topic: "Schema Design"
  },

  {
    question: "What is referencing in MongoDB?",
    options: [
      "Storing related data in separate documents and keeping a reference",
      "Creating duplicate collections",
      "Creating an index",
      "Converting BSON to XML"
    ],
    correctAnswer: 0,
    explanation:
      "Referencing stores related information separately and uses identifiers or references to connect the data.",
    difficulty: "Medium",
    topic: "Schema Design"
  },

  {
    question: "Which MongoDB feature provides multi-document ACID transactions?",
    options: [
      "Transactions",
      "Only aggregation",
      "Indexes",
      "Capped collections"
    ],
    correctAnswer: 0,
    explanation:
      "MongoDB supports transactions that can provide ACID guarantees across multiple documents and collections in supported deployment configurations.",
    difficulty: "Medium",
    topic: "Transactions"
  },

  {
    question: "What is replication in MongoDB?",
    options: [
      "Creating multiple copies of data across replica set members",
      "Compressing documents",
      "Deleting old data",
      "Creating indexes"
    ],
    correctAnswer: 0,
    explanation:
      "Replication maintains copies of data across members of a replica set to provide redundancy and high availability.",
    difficulty: "Medium",
    topic: "Replication"
  },

  {
    question: "What is a MongoDB replica set?",
    options: [
      "A group of MongoDB instances that maintain the same data set",
      "A collection of indexes",
      "A database schema",
      "A group of unrelated databases"
    ],
    correctAnswer: 0,
    explanation:
      "A replica set is a group of MongoDB instances that maintain the same data set and provide redundancy and high availability.",
    difficulty: "Medium",
    topic: "Replication"
  },

  {
    question: "What is sharding in MongoDB?",
    options: [
      "Horizontal scaling by distributing data across multiple servers",
      "Deleting duplicate documents",
      "Creating a backup",
      "Compressing collections"
    ],
    correctAnswer: 0,
    explanation:
      "Sharding distributes data across multiple servers to support horizontal scaling for large datasets and workloads.",
    difficulty: "Medium",
    topic: "Sharding"
  },

  {
    question: "What is a shard key?",
    options: [
      "A field or fields used to distribute documents across shards",
      "A password for MongoDB",
      "An encryption key",
      "A replica set name"
    ],
    correctAnswer: 0,
    explanation:
      "A shard key determines how MongoDB distributes documents across shards in a sharded cluster.",
    difficulty: "Hard",
    topic: "Sharding"
  },

  {
    question: "Which command can be used to inspect the query plan for a MongoDB operation?",
    options: [
      "explain()",
      "queryPlan()",
      "plan()",
      "analyzeQuery()"
    ],
    correctAnswer: 0,
    explanation:
      "The explain() method provides information about how MongoDB executes a query, including query plans and execution statistics.",
    difficulty: "Medium",
    topic: "Query Optimization"
  },

  {
    question: "Which MongoDB data type represents a date and time?",
    options: [
      "TimestampString",
      "Date",
      "DateTimeText",
      "TimeObject"
    ],
    correctAnswer: 1,
    explanation:
      "MongoDB's BSON Date type represents a signed 64-bit integer of milliseconds since the Unix epoch.",
    difficulty: "Easy",
    topic: "BSON Data Types"
  },

  {
    question: "Which MongoDB data type can store an array?",
    options: [
      "Array",
      "ListOnly",
      "Collection",
      "VectorOnly"
    ],
    correctAnswer: 0,
    explanation:
      "BSON supports arrays, allowing multiple values to be stored in a single document field.",
    difficulty: "Easy",
    topic: "BSON Data Types"
  },

  {
    question: "Which command is commonly used to view collections in the current MongoDB database?",
    options: [
      "show collections",
      "show tables",
      "list collections",
      "db.collections()"
    ],
    correctAnswer: 0,
    explanation:
      "show collections is a commonly used MongoDB shell command to list collections in the current database.",
    difficulty: "Easy",
    topic: "MongoDB Shell"
  }
];

module.exports = mongodbQuestions;