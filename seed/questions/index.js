const pythonQuestions = require("./python");
const sqlQuestions = require("./sql");
const cQuestions = require("./c");
const cssQuestions = require("./css");
const dataAnalyticsQuestions = require("./data-analytics");
const excelQuestions = require("./excel");
const gitGithubQuestions = require("./git-github");
const hrInterviewQuestions = require("./hr-interview");
const cppQuestions = require("./cpp");
const computerNetworksQuestions = require("./computer-networks");
const htmlQuestions = require("./html");
const javascriptQuestions = require("./javascript");
const javaQuestions = require("./java");
const mongodbQuestions = require("./mongodb");
const nodejsQuestions = require("./nodejs");
const reactQuestions = require("./react");
const powerBIQuestions = require("./power-bi");
const operatingSystemQuestions = require("./operating-system");
const dbmsQuestions = require("./dbms");
// Competitive Practice
const reasoningQuestions = require("./reasoning");


module.exports = {
  python: pythonQuestions,
  sql: sqlQuestions,
  c: cQuestions,
  css: cssQuestions,
  "data-analytics": dataAnalyticsQuestions,
  excel: excelQuestions,
  "git-github": gitGithubQuestions,
  "hr-interview": hrInterviewQuestions,
  cpp: cppQuestions,
  "computer-networks": computerNetworksQuestions,
  html: htmlQuestions,
  javascript: javascriptQuestions,
  java: javaQuestions,
  mongodb: mongodbQuestions,
  nodejs: nodejsQuestions,
  react: reactQuestions,
  "power-bi": powerBIQuestions,
  "operating-system": operatingSystemQuestions,
  dbms: dbmsQuestions,
  // Competitive Practice
  reasoning: reasoningQuestions
};