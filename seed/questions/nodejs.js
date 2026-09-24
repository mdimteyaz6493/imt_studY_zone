const nodejsQuestions = [
  {
    question: "What is Node.js?",
    options: [
      "A JavaScript runtime built on Chrome's V8 engine",
      "A JavaScript CSS framework",
      "A database management system",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser. It uses Google's V8 JavaScript engine.",
    difficulty: "Easy",
    topic: "Node.js Basics"
  },

  {
    question: "Which JavaScript engine does Node.js use?",
    options: [
      "SpiderMonkey",
      "V8",
      "JavaScriptCore",
      "Chakra"
    ],
    correctAnswer: 1,
    explanation:
      "Node.js uses Google's V8 JavaScript engine, which is also used by Chromium-based browsers.",
    difficulty: "Easy",
    topic: "Node.js Basics"
  },

  {
    question: "What is the main purpose of Node.js?",
    options: [
      "To run JavaScript on the server and outside the browser",
      "To create CSS styles",
      "To design databases",
      "To replace HTML"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js allows developers to execute JavaScript outside the browser, commonly for servers, APIs, command-line tools and other applications.",
    difficulty: "Easy",
    topic: "Node.js Basics"
  },

  {
    question: "Which command checks the installed Node.js version?",
    options: [
      "node --version",
      "node --check",
      "npm --node",
      "node version-check"
    ],
    correctAnswer: 0,
    explanation:
      "The command node --version or node -v displays the installed Node.js version.",
    difficulty: "Easy",
    topic: "Node.js CLI"
  },

  {
    question: "Which command executes a JavaScript file using Node.js?",
    options: [
      "run app.js",
      "node app.js",
      "execute app.js",
      "js app.js"
    ],
    correctAnswer: 1,
    explanation:
      "The node command followed by a JavaScript filename executes that file using Node.js.",
    difficulty: "Easy",
    topic: "Node.js CLI"
  },

  {
    question: "What is npm?",
    options: [
      "Node Package Manager",
      "Node Programming Method",
      "Network Package Module",
      "Node Project Manager only"
    ],
    correctAnswer: 0,
    explanation:
      "npm stands for Node Package Manager and is used to install, manage and publish JavaScript packages.",
    difficulty: "Easy",
    topic: "NPM"
  },

  {
    question: "Which file commonly contains npm project metadata and dependencies?",
    options: [
      "node.json",
      "package.json",
      "project.json",
      "npm.config"
    ],
    correctAnswer: 1,
    explanation:
      "package.json contains project metadata, scripts, dependencies and other npm configuration.",
    difficulty: "Easy",
    topic: "NPM"
  },

  {
    question: "Which command creates a package.json file interactively?",
    options: [
      "npm create",
      "npm init",
      "npm package",
      "node init"
    ],
    correctAnswer: 1,
    explanation:
      "npm init creates a package.json file and prompts for project information.",
    difficulty: "Easy",
    topic: "NPM"
  },

  {
    question: "Which command installs a package as a project dependency?",
    options: [
      "npm add package",
      "npm install package",
      "node install package",
      "npm get package"
    ],
    correctAnswer: 1,
    explanation:
      "npm install package installs the specified package and normally records it in dependencies.",
    difficulty: "Easy",
    topic: "NPM"
  },

  {
    question: "Where are npm project dependencies normally installed?",
    options: [
      "packages/",
      "node_modules/",
      "dependencies/",
      "modules/"
    ],
    correctAnswer: 1,
    explanation:
      "npm installs project dependencies into the node_modules directory.",
    difficulty: "Easy",
    topic: "NPM"
  },

  {
    question: "What is the event-driven architecture in Node.js?",
    options: [
      "A model based on responding to events and callbacks",
      "A database architecture",
      "A CSS architecture",
      "A file compression technique"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js uses an event-driven programming model where actions such as requests, I/O completion and timers can trigger event handlers.",
    difficulty: "Medium",
    topic: "Architecture"
  },

  {
    question: "What is the Event Loop in Node.js?",
    options: [
      "A mechanism that handles asynchronous callbacks and coordinates non-blocking operations",
      "A database query loop",
      "A CSS rendering engine",
      "A loop that only handles for statements"
    ],
    correctAnswer: 0,
    explanation:
      "The Node.js event loop coordinates execution of JavaScript callbacks and asynchronous operations, allowing non-blocking I/O.",
    difficulty: "Medium",
    topic: "Event Loop"
  },

  {
    question: "Is Node.js single-threaded for JavaScript execution?",
    options: [
      "Yes, JavaScript execution uses a main thread",
      "No, every request gets a new JavaScript thread",
      "Only on Windows",
      "Only when using Express"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js executes JavaScript callbacks on a main thread, while the runtime can use additional threads internally for certain operations.",
    difficulty: "Medium",
    topic: "Architecture"
  },

  {
    question: "What is non-blocking I/O?",
    options: [
      "I/O operations that allow other work to continue while waiting for completion",
      "I/O that always fails",
      "I/O that blocks the event loop",
      "I/O that works only with files"
    ],
    correctAnswer: 0,
    explanation:
      "Non-blocking I/O allows the application to continue processing other work while an I/O operation is waiting to complete.",
    difficulty: "Medium",
    topic: "Asynchronous Programming"
  },

  {
    question: "Which object is commonly used to access command-line arguments in Node.js?",
    options: [
      "process.args",
      "process.argv",
      "node.argv",
      "console.argv"
    ],
    correctAnswer: 1,
    explanation:
      "process.argv is an array containing the command-line arguments passed to the Node.js process.",
    difficulty: "Easy",
    topic: "Process"
  },

  {
    question: "Which object provides information and control over the current Node.js process?",
    options: [
      "runtime",
      "process",
      "nodeProcess",
      "system"
    ],
    correctAnswer: 1,
    explanation:
      "The global process object provides information about and control over the current Node.js process.",
    difficulty: "Easy",
    topic: "Process"
  },

  {
    question: "Which method is used to terminate the Node.js process?",
    options: [
      "process.stop()",
      "process.exit()",
      "process.close()",
      "node.exitProcess()"
    ],
    correctAnswer: 1,
    explanation:
      "process.exit() instructs Node.js to terminate the process.",
    difficulty: "Easy",
    topic: "Process"
  },

  {
    question: "Which built-in module is used for working with files and file system operations?",
    options: [
      "file",
      "fs",
      "files",
      "filesystem"
    ],
    correctAnswer: 1,
    explanation:
      "The built-in fs module provides APIs for interacting with the file system.",
    difficulty: "Easy",
    topic: "File System"
  },

  {
    question: "Which method reads a file asynchronously?",
    options: [
      "fs.readFile()",
      "fs.getFile()",
      "fs.openFileAsync()",
      "fs.loadFile()"
    ],
    correctAnswer: 0,
    explanation:
      "fs.readFile() asynchronously reads the contents of a file.",
    difficulty: "Easy",
    topic: "File System"
  },

  {
    question: "Which method reads a file synchronously?",
    options: [
      "fs.readFileSync()",
      "fs.syncRead()",
      "fs.readSyncFile()",
      "fs.getFileSyncOnly()"
    ],
    correctAnswer: 0,
    explanation:
      "fs.readFileSync() reads a file synchronously and blocks execution until the operation completes.",
    difficulty: "Easy",
    topic: "File System"
  },

  {
    question: "Which built-in module is used to create an HTTP server?",
    options: [
      "server",
      "http",
      "web",
      "netserver"
    ],
    correctAnswer: 1,
    explanation:
      "Node.js provides the built-in http module for creating HTTP servers and making HTTP-related requests.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "Which method creates an HTTP server?",
    options: [
      "http.createServer()",
      "http.server()",
      "http.newServer()",
      "http.startServer()"
    ],
    correctAnswer: 0,
    explanation:
      "http.createServer() creates and returns an HTTP server.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "Which object contains information about an incoming HTTP request?",
    options: [
      "response",
      "request",
      "req",
      "Both request and req"
    ],
    correctAnswer: 3,
    explanation:
      "In Node.js HTTP handlers, the incoming request is commonly represented by the req/request object.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "Which object is used to send a response to an HTTP request?",
    options: [
      "request",
      "response",
      "req",
      "serverRequest"
    ],
    correctAnswer: 1,
    explanation:
      "The response object is used to send headers, status codes and response data back to the client.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "Which HTTP status code represents a successful request?",
    options: [
      "200",
      "301",
      "404",
      "500"
    ],
    correctAnswer: 0,
    explanation:
      "HTTP 200 OK indicates that a request was successfully processed.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "Which HTTP status code indicates that a requested resource was not found?",
    options: [
      "200",
      "201",
      "404",
      "500"
    ],
    correctAnswer: 2,
    explanation:
      "HTTP 404 Not Found indicates that the requested resource could not be found.",
    difficulty: "Easy",
    topic: "HTTP"
  },

  {
    question: "What is Express.js?",
    options: [
      "A Node.js web framework",
      "A database",
      "A JavaScript compiler",
      "A frontend CSS framework"
    ],
    correctAnswer: 0,
    explanation:
      "Express.js is a popular web framework for Node.js used to build APIs and web applications.",
    difficulty: "Easy",
    topic: "Express.js"
  },

  {
    question: "Which command installs Express as a project dependency?",
    options: [
      "npm install express",
      "node install express",
      "npm add-node express",
      "express install"
    ],
    correctAnswer: 0,
    explanation:
      "npm install express installs Express.js as a project dependency.",
    difficulty: "Easy",
    topic: "Express.js"
  },

  {
    question: "What is middleware in Express.js?",
    options: [
      "A function that has access to the request, response and next function",
      "A database collection",
      "A frontend component",
      "A Node.js compiler"
    ],
    correctAnswer: 0,
    explanation:
      "Express middleware functions can access the request and response objects and either end the request-response cycle or call next().",
    difficulty: "Easy",
    topic: "Express.js"
  },

  {
    question: "Which function is commonly used to pass control to the next Express middleware?",
    options: [
      "continue()",
      "next()",
      "forward()",
      "nextMiddleware()"
    ],
    correctAnswer: 1,
    explanation:
      "The next() function passes control to the next middleware function in the chain.",
    difficulty: "Easy",
    topic: "Express Middleware"
  },

  {
    question: "Which Express method is used to handle GET requests?",
    options: [
      "app.fetch()",
      "app.get()",
      "app.read()",
      "app.request()"
    ],
    correctAnswer: 1,
    explanation:
      "app.get() defines a route handler for HTTP GET requests.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Which Express method is used to handle POST requests?",
    options: [
      "app.send()",
      "app.post()",
      "app.create()",
      "app.insert()"
    ],
    correctAnswer: 1,
    explanation:
      "app.post() defines a route handler for HTTP POST requests.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Which Express method is used to handle PUT requests?",
    options: [
      "app.update()",
      "app.put()",
      "app.modify()",
      "app.change()"
    ],
    correctAnswer: 1,
    explanation:
      "app.put() defines a route handler for HTTP PUT requests.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Which Express method is used to handle DELETE requests?",
    options: [
      "app.remove()",
      "app.delete()",
      "app.destroy()",
      "app.drop()"
    ],
    correctAnswer: 1,
    explanation:
      "app.delete() defines a route handler for HTTP DELETE requests.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Which Express middleware parses incoming JSON request bodies?",
    options: [
      "express.json()",
      "express.body()",
      "express.parseJSON()",
      "express.requestJSON()"
    ],
    correctAnswer: 0,
    explanation:
      "express.json() returns middleware that parses incoming requests with JSON payloads.",
    difficulty: "Easy",
    topic: "Express Middleware"
  },

  {
    question: "Where are URL route parameters commonly available in Express?",
    options: [
      "req.params",
      "req.routeData",
      "req.urlParamsOnly",
      "req.arguments"
    ],
    correctAnswer: 0,
    explanation:
      "Route parameters such as /users/:id are available through req.params.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Where are query string parameters commonly available in Express?",
    options: [
      "req.query",
      "req.search",
      "req.paramsQuery",
      "req.urlData"
    ],
    correctAnswer: 0,
    explanation:
      "Query string values such as /users?page=2 are available through req.query.",
    difficulty: "Easy",
    topic: "Express Routing"
  },

  {
    question: "Where is JSON request body data commonly available in Express after using express.json()?",
    options: [
      "req.data",
      "req.body",
      "req.json",
      "req.payloadOnly"
    ],
    correctAnswer: 1,
    explanation:
      "After JSON body parsing middleware runs, parsed request data is commonly available as req.body.",
    difficulty: "Easy",
    topic: "Express Middleware"
  },

  {
    question: "What is a REST API?",
    options: [
      "An architectural style commonly used for web APIs using HTTP methods and resources",
      "A database engine",
      "A Node.js package manager",
      "A frontend library"
    ],
    correctAnswer: 0,
    explanation:
      "REST is an architectural style for networked applications. RESTful APIs commonly represent resources through URLs and use HTTP methods.",
    difficulty: "Medium",
    topic: "REST API"
  },

  {
    question: "Which HTTP method is commonly used to create a resource in a REST API?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "HEAD"
    ],
    correctAnswer: 1,
    explanation:
      "POST is commonly used to submit data to create a new resource.",
    difficulty: "Easy",
    topic: "REST API"
  },

  {
    question: "Which HTTP method is commonly used to retrieve a resource?",
    options: [
      "POST",
      "GET",
      "PATCH",
      "DELETE"
    ],
    correctAnswer: 1,
    explanation:
      "GET is commonly used to retrieve resources from a server.",
    difficulty: "Easy",
    topic: "REST API"
  },

  {
    question: "Which HTTP method is commonly used for a partial update?",
    options: [
      "GET",
      "POST",
      "PATCH",
      "HEAD"
    ],
    correctAnswer: 2,
    explanation:
      "PATCH is commonly used to apply a partial modification to a resource.",
    difficulty: "Medium",
    topic: "REST API"
  },

  {
    question: "What is a Buffer in Node.js?",
    options: [
      "An object used to work with raw binary data",
      "A database cache only",
      "A type of HTTP request",
      "A replacement for arrays"
    ],
    correctAnswer: 0,
    explanation:
      "Buffer objects provide a way to work with sequences of raw binary data in Node.js.",
    difficulty: "Medium",
    topic: "Buffers"
  },

  {
    question: "What are Node.js streams used for?",
    options: [
      "Processing data incrementally instead of loading everything into memory at once",
      "Creating CSS animations",
      "Managing database schemas",
      "Compiling JavaScript"
    ],
    correctAnswer: 0,
    explanation:
      "Streams allow data to be processed piece by piece, which is useful for large files, network data and other continuous sources.",
    difficulty: "Medium",
    topic: "Streams"
  },

  {
    question: "Which module is commonly used for creating and working with streams and stream-related utilities?",
    options: [
      "stream",
      "flow",
      "data-stream",
      "pipe-system"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js provides the built-in stream module for working with streams.",
    difficulty: "Medium",
    topic: "Streams"
  },

  {
    question: "What is the purpose of the pipe() method on a readable stream?",
    options: [
      "To connect a readable stream to a writable stream",
      "To delete a stream",
      "To pause JavaScript permanently",
      "To convert a stream to JSON automatically"
    ],
    correctAnswer: 0,
    explanation:
      "pipe() connects a readable stream to a writable or transform stream so data can flow between them.",
    difficulty: "Medium",
    topic: "Streams"
  },

  {
    question: "Which built-in module is used to work with paths in Node.js?",
    options: [
      "directory",
      "path",
      "filepath",
      "location"
    ],
    correctAnswer: 1,
    explanation:
      "The built-in path module provides utilities for working with file and directory paths.",
    difficulty: "Easy",
    topic: "Path Module"
  },

  {
    question: "Which method joins multiple path segments correctly for the current operating system?",
    options: [
      "path.combine()",
      "path.join()",
      "path.merge()",
      "path.concatPath()"
    ],
    correctAnswer: 1,
    explanation:
      "path.join() joins path segments using the appropriate separator for the current platform.",
    difficulty: "Easy",
    topic: "Path Module"
  },

  {
    question: "Which built-in module provides utilities for working with operating system information?",
    options: [
      "system",
      "os",
      "machine",
      "platform"
    ],
    correctAnswer: 1,
    explanation:
      "The os module provides operating-system-related utility methods and properties.",
    difficulty: "Easy",
    topic: "OS Module"
  },

  {
    question: "Which module provides cryptographic functionality in Node.js?",
    options: [
      "security",
      "crypto",
      "encrypt",
      "hashing"
    ],
    correctAnswer: 1,
    explanation:
      "The built-in crypto module provides cryptographic functionality such as hashing, encryption-related primitives and random data generation.",
    difficulty: "Medium",
    topic: "Crypto"
  },

  {
    question: "What is process.env commonly used for?",
    options: [
      "Accessing environment variables",
      "Reading HTML elements",
      "Creating database tables",
      "Managing browser cookies only"
    ],
    correctAnswer: 0,
    explanation:
      "process.env provides access to environment variables available to the Node.js process.",
    difficulty: "Easy",
    topic: "Environment Variables"
  },

  {
    question: "What is the purpose of environment variables in a Node.js application?",
    options: [
      "To store configuration values outside the source code",
      "To create HTML pages",
      "To replace all JavaScript variables",
      "To automatically create APIs"
    ],
    correctAnswer: 0,
    explanation:
      "Environment variables are commonly used for configuration such as ports, database connection strings and API keys without hard-coding them into source files.",
    difficulty: "Easy",
    topic: "Environment Variables"
  },

  {
    question: "What is CommonJS?",
    options: [
      "A module system commonly used in Node.js",
      "A database protocol",
      "A CSS specification",
      "An HTTP method"
    ],
    correctAnswer: 0,
    explanation:
      "CommonJS is a module system historically used widely in Node.js, using constructs such as require() and module.exports.",
    difficulty: "Medium",
    topic: "Modules"
  },

  {
    question: "Which syntax imports a CommonJS module?",
    options: [
      "import module from",
      "require()",
      "include()",
      "use()"
    ],
    correctAnswer: 1,
    explanation:
      "The require() function is commonly used to load CommonJS modules.",
    difficulty: "Easy",
    topic: "Modules"
  },

  {
    question: "Which property is commonly used to export values from a CommonJS module?",
    options: [
      "exports.module",
      "module.exports",
      "module.exported",
      "export.default"
    ],
    correctAnswer: 1,
    explanation:
      "module.exports is used to specify the value exported by a CommonJS module.",
    difficulty: "Easy",
    topic: "Modules"
  },

  {
    question: "What is the purpose of async/await in Node.js?",
    options: [
      "To write asynchronous Promise-based code in a more readable style",
      "To create CSS",
      "To make all operations synchronous",
      "To replace HTTP"
    ],
    correctAnswer: 0,
    explanation:
      "async/await provides a cleaner syntax for working with Promises and asynchronous operations.",
    difficulty: "Easy",
    topic: "Async Await"
  },

  {
    question: "What happens when an async function is called?",
    options: [
      "It always returns a Promise",
      "It always returns undefined",
      "It blocks the entire Node.js process",
      "It automatically creates a database"
    ],
    correctAnswer: 0,
    explanation:
      "An async function always returns a Promise, which resolves to its returned value or rejects if an exception is thrown.",
    difficulty: "Medium",
    topic: "Async Await"
  }
];

module.exports = nodejsQuestions;