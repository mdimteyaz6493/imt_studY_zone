const reactQuestions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A database management system",
      "A CSS framework",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "React is a JavaScript library developed for building user interfaces, especially component-based web applications.",
    difficulty: "Easy",
    topic: "React Basics"
  },
  {
    question: "Who originally developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook",
      "Amazon"
    ],
    correctAnswer: 2,
    explanation:
      "React was originally developed by Facebook, now Meta, and was open-sourced in 2013.",
    difficulty: "Easy",
    topic: "React Basics"
  },
  {
    question: "What is JSX?",
    options: [
      "A database query language",
      "A syntax extension that allows HTML-like syntax in JavaScript",
      "A CSS preprocessor",
      "A React database"
    ],
    correctAnswer: 1,
    explanation:
      "JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript code.",
    difficulty: "Easy",
    topic: "JSX"
  },
  {
    question: "Which file extension is commonly used for React components containing JSX?",
    options: [".jsx", ".react", ".component", ".rjs"],
    correctAnswer: 0,
    explanation:
      ".jsx is commonly used for files containing JSX, although React components can also use .js files.",
    difficulty: "Easy",
    topic: "JSX"
  },
  {
    question: "What is a React component?",
    options: [
      "A reusable piece of UI",
      "A database table",
      "A CSS selector",
      "A server"
    ],
    correctAnswer: 0,
    explanation:
      "A React component is a reusable piece of UI that can contain its own logic, markup, and styling.",
    difficulty: "Easy",
    topic: "Components"
  },
  {
    question: "Which type of component is commonly written as a JavaScript function?",
    options: [
      "Functional component",
      "Database component",
      "HTML component",
      "CSS component"
    ],
    correctAnswer: 0,
    explanation:
      "Modern React applications primarily use functional components written as JavaScript functions.",
    difficulty: "Easy",
    topic: "Components"
  },
  {
    question: "What are props in React?",
    options: [
      "Data passed from a component to another component",
      "Global CSS variables",
      "Database records",
      "Browser cookies"
    ],
    correctAnswer: 0,
    explanation:
      "Props are inputs passed from a parent component to a child component.",
    difficulty: "Easy",
    topic: "Props"
  },
  {
    question: "Are React props normally mutable by the receiving component?",
    options: [
      "Yes, always",
      "No, props should be treated as read-only",
      "Only strings are mutable",
      "Only numbers are mutable"
    ],
    correctAnswer: 1,
    explanation:
      "Props should be treated as read-only by the component receiving them.",
    difficulty: "Easy",
    topic: "Props"
  },
  {
    question: "What is state in React?",
    options: [
      "Data managed by a component that can change over time",
      "A CSS property",
      "A database schema",
      "An HTML attribute"
    ],
    correctAnswer: 0,
    explanation:
      "State represents data that belongs to a component and can change during the component's lifecycle.",
    difficulty: "Easy",
    topic: "State"
  },
  {
    question: "Which Hook is commonly used to manage state in a functional component?",
    options: [
      "useState",
      "useData",
      "useValue",
      "useComponent"
    ],
    correctAnswer: 0,
    explanation:
      "useState is the React Hook used to add state to functional components.",
    difficulty: "Easy",
    topic: "Hooks"
  },
  {
    question: "What does useState return?",
    options: [
      "Only the state value",
      "Only a setter function",
      "The current state value and a state setter function",
      "A Promise"
    ],
    correctAnswer: 2,
    explanation:
      "useState returns an array containing the current state value and a function used to update it.",
    difficulty: "Easy",
    topic: "useState"
  },
  {
    question: "Which Hook is commonly used for side effects?",
    options: [
      "useEffect",
      "useSideEffect",
      "useAction",
      "useAsync"
    ],
    correctAnswer: 0,
    explanation:
      "useEffect is used to synchronize a component with external systems and perform side effects.",
    difficulty: "Easy",
    topic: "useEffect"
  },
  {
    question: "When does an effect with an empty dependency array generally run?",
    options: [
      "After every render",
      "After the initial mount",
      "Only when the user clicks",
      "Before every render"
    ],
    correctAnswer: 1,
    explanation:
      "An effect with an empty dependency array generally runs after the component is initially mounted.",
    difficulty: "Medium",
    topic: "useEffect"
  },
  {
    question: "What is the purpose of the dependency array in useEffect?",
    options: [
      "It determines when the effect should re-run",
      "It creates CSS classes",
      "It stores component state",
      "It defines routes"
    ],
    correctAnswer: 0,
    explanation:
      "The dependency array tells React which reactive values the effect depends on.",
    difficulty: "Medium",
    topic: "useEffect"
  },
  {
    question: "What is the Virtual DOM?",
    options: [
      "A lightweight representation of the UI maintained by React",
      "A physical browser database",
      "A CSS engine",
      "A server-side database"
    ],
    correctAnswer: 0,
    explanation:
      "The Virtual DOM is an in-memory representation of the UI that React uses to determine necessary DOM updates.",
    difficulty: "Medium",
    topic: "Virtual DOM"
  },
  {
    question: "What is reconciliation in React?",
    options: [
      "The process of determining what UI changes need to be applied",
      "Creating a database",
      "Compiling CSS",
      "Installing React"
    ],
    correctAnswer: 0,
    explanation:
      "Reconciliation is React's process of comparing the previous and next element trees to determine updates.",
    difficulty: "Medium",
    topic: "Virtual DOM"
  },
  {
    question: "Why are keys used when rendering lists in React?",
    options: [
      "To help React identify list items between renders",
      "To style list items",
      "To encrypt list data",
      "To create routes"
    ],
    correctAnswer: 0,
    explanation:
      "Keys provide stable identity for list items and help React efficiently determine which items changed.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "Which attribute should normally be used as a unique key when rendering a list?",
    options: [
      "key",
      "idKey",
      "unique",
      "listKey"
    ],
    correctAnswer: 0,
    explanation:
      "React uses the special key prop to identify elements in a list.",
    difficulty: "Easy",
    topic: "Lists"
  },
  {
    question: "What is conditional rendering in React?",
    options: [
      "Rendering UI based on a condition",
      "Rendering only CSS",
      "Creating database conditions",
      "Compiling JSX manually"
    ],
    correctAnswer: 0,
    explanation:
      "Conditional rendering means displaying different UI depending on a condition.",
    difficulty: "Easy",
    topic: "Conditional Rendering"
  },
  {
    question: "Which JavaScript operator is commonly used for simple conditional rendering?",
    options: [
      "&&",
      "::",
      "=>",
      "??="
    ],
    correctAnswer: 0,
    explanation:
      "The && operator is commonly used to render something only when a condition is truthy.",
    difficulty: "Easy",
    topic: "Conditional Rendering"
  },
  {
    question: "Which operator can be used for inline if/else rendering?",
    options: [
      "Ternary operator",
      "Spread operator",
      "Optional chaining",
      "Bitwise operator"
    ],
    correctAnswer: 0,
    explanation:
      "The ternary operator `condition ? value1 : value2` is commonly used for inline if/else rendering.",
    difficulty: "Easy",
    topic: "Conditional Rendering"
  },
  {
    question: "How are click events commonly handled in JSX?",
    options: [
      "onclick",
      "onClick",
      "clickEvent",
      "handleClickEvent"
    ],
    correctAnswer: 1,
    explanation:
      "React uses camelCase event handler names such as onClick.",
    difficulty: "Easy",
    topic: "Events"
  },
  {
    question: "Which syntax correctly passes a function to an onClick handler?",
    options: [
      "onClick={handleClick}",
      "onClick=\"handleClick()\"",
      "onclick=\"handleClick\"",
      "click={handleClick}"
    ],
    correctAnswer: 0,
    explanation:
      "In JSX, event handlers are passed using curly braces, for example onClick={handleClick}.",
    difficulty: "Easy",
    topic: "Events"
  },
  {
    question: "What is a controlled component?",
    options: [
      "A form element whose value is controlled by React state",
      "A component controlled by CSS",
      "A component controlled by the browser only",
      "A component without state"
    ],
    correctAnswer: 0,
    explanation:
      "A controlled form element gets its value from React state and updates through React event handlers.",
    difficulty: "Medium",
    topic: "Forms"
  },
  {
    question: "Which event is commonly used to handle changes in an input field?",
    options: [
      "onChange",
      "onInputChange",
      "onUpdate",
      "onTextChange"
    ],
    correctAnswer: 0,
    explanation:
      "React commonly uses the onChange event to handle input value changes.",
    difficulty: "Easy",
    topic: "Forms"
  },
  {
    question: "What is lifting state up?",
    options: [
      "Moving shared state to the closest common parent",
      "Moving state into CSS",
      "Deleting state",
      "Moving state to the database"
    ],
    correctAnswer: 0,
    explanation:
      "When multiple components need the same state, the state can be moved to their closest common parent and passed through props.",
    difficulty: "Medium",
    topic: "State Management"
  },
  {
    question: "What is prop drilling?",
    options: [
      "Passing props through multiple intermediate components",
      "Deleting props",
      "Using props inside CSS",
      "Creating database props"
    ],
    correctAnswer: 0,
    explanation:
      "Prop drilling occurs when data is passed through several components that do not directly need it just to reach a deeply nested component.",
    difficulty: "Medium",
    topic: "Props"
  },
  {
    question: "Which React feature can help avoid prop drilling for shared values?",
    options: [
      "Context API",
      "CSS Modules",
      "ReactDOM",
      "JSX Compiler"
    ],
    correctAnswer: 0,
    explanation:
      "The Context API allows values to be shared with components without manually passing props through every level.",
    difficulty: "Medium",
    topic: "Context API"
  },
  {
    question: "Which Hook is used to access a Context value?",
    options: [
      "useContext",
      "useProvider",
      "useGlobal",
      "useValue"
    ],
    correctAnswer: 0,
    explanation:
      "useContext lets a functional component read and subscribe to a context value.",
    difficulty: "Easy",
    topic: "Context API"
  },
  {
    question: "Which component is used to provide a Context value to descendants?",
    options: [
      "Context.Provider",
      "Context.ConsumerOnly",
      "Context.Value",
      "Context.Root"
    ],
    correctAnswer: 0,
    explanation:
      "A Context.Provider supplies the context value to its descendant components.",
    difficulty: "Easy",
    topic: "Context API"
  },
  {
    question: "What is useRef commonly used for?",
    options: [
      "Accessing DOM elements or storing mutable values without causing re-renders",
      "Creating database tables",
      "Replacing all state",
      "Creating CSS animations only"
    ],
    correctAnswer: 0,
    explanation:
      "useRef can hold a mutable value that persists between renders and can also be used to reference DOM elements.",
    difficulty: "Medium",
    topic: "useRef"
  },
  {
    question: "Does changing a useRef value normally cause a component to re-render?",
    options: [
      "Yes, always",
      "No",
      "Only in production",
      "Only with useEffect"
    ],
    correctAnswer: 1,
    explanation:
      "Updating the current value of a ref does not by itself trigger a React re-render.",
    difficulty: "Medium",
    topic: "useRef"
  },
  {
    question: "Which Hook is used to memoize a calculated value?",
    options: [
      "useMemo",
      "useCalculate",
      "useCache",
      "useValue"
    ],
    correctAnswer: 0,
    explanation:
      "useMemo can cache the result of a calculation between renders when its dependencies have not changed.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "Which Hook is used to memoize a function reference?",
    options: [
      "useCallback",
      "useFunction",
      "useMemoFunction",
      "useHandler"
    ],
    correctAnswer: 0,
    explanation:
      "useCallback caches a function definition between renders based on its dependencies.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "What is React.memo used for?",
    options: [
      "Preventing unnecessary re-renders when props have not changed",
      "Creating state",
      "Fetching APIs",
      "Creating routes"
    ],
    correctAnswer: 0,
    explanation:
      "React.memo can skip re-rendering a component when its props are unchanged according to the memo comparison.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "What is a custom Hook?",
    options: [
      "A reusable function that uses React Hooks",
      "A built-in browser API",
      "A CSS class",
      "A React component with no logic"
    ],
    correctAnswer: 0,
    explanation:
      "A custom Hook is a reusable JavaScript function whose name conventionally starts with use and can call other Hooks.",
    difficulty: "Medium",
    topic: "Custom Hooks"
  },
  {
    question: "What naming convention should custom React Hooks follow?",
    options: [
      "They should start with use",
      "They should end with Hook",
      "They must start with react",
      "They must be uppercase"
    ],
    correctAnswer: 0,
    explanation:
      "Custom Hooks should start with `use`, such as useAuth or useFetch.",
    difficulty: "Easy",
    topic: "Custom Hooks"
  },
  {
    question: "What is the purpose of React Router in a React application?",
    options: [
      "Client-side routing",
      "Database management",
      "CSS compilation",
      "Image compression"
    ],
    correctAnswer: 0,
    explanation:
      "React Router provides routing capabilities for navigating between views in React applications.",
    difficulty: "Easy",
    topic: "React Router"
  },
  {
    question: "Which component is commonly used to define a route with React Router?",
    options: [
      "Route",
      "Path",
      "NavigateTo",
      "RouterLink"
    ],
    correctAnswer: 0,
    explanation:
      "The Route component is used to associate a URL pattern with an element in React Router.",
    difficulty: "Easy",
    topic: "React Router"
  },
  {
    question: "Which component is commonly used to create navigation links in React Router?",
    options: [
      "Link",
      "Anchor",
      "NavRoute",
      "RouterButton"
    ],
    correctAnswer: 0,
    explanation:
      "React Router's Link component provides client-side navigation without a full page reload.",
    difficulty: "Easy",
    topic: "React Router"
  },
  {
    question: "Which Hook is used to navigate programmatically in React Router?",
    options: [
      "useNavigate",
      "useRoute",
      "useRedirect",
      "useLink"
    ],
    correctAnswer: 0,
    explanation:
      "useNavigate returns a function that can be used to navigate programmatically.",
    difficulty: "Easy",
    topic: "React Router"
  },
  {
    question: "What is a Fragment in React?",
    options: [
      "A way to group elements without adding an extra DOM node",
      "A database object",
      "A CSS selector",
      "A routing component"
    ],
    correctAnswer: 0,
    explanation:
      "Fragments allow multiple elements to be grouped without introducing an additional DOM element.",
    difficulty: "Easy",
    topic: "Fragments"
  },
  {
    question: "Which syntax represents a React Fragment?",
    options: [
      "<></>",
      "<fragment></fragment>",
      "<group></group>",
      "<React></React>"
    ],
    correctAnswer: 0,
    explanation:
      "The shorthand syntax `<>...</>` is used for React Fragments.",
    difficulty: "Easy",
    topic: "Fragments"
  },
  {
    question: "What is the purpose of React StrictMode?",
    options: [
      "To enable additional development-time checks",
      "To make CSS strict",
      "To disable JavaScript",
      "To optimize database queries"
    ],
    correctAnswer: 0,
    explanation:
      "StrictMode enables additional development-time checks and warnings to help identify potential problems.",
    difficulty: "Medium",
    topic: "React Basics"
  },
  {
    question: "What does `createRoot` do in modern React?",
    options: [
      "Creates a React root for rendering an application",
      "Creates a database",
      "Creates a CSS root",
      "Creates an API server"
    ],
    correctAnswer: 0,
    explanation:
      "createRoot creates a React root that can be used to render a React application into a DOM container.",
    difficulty: "Medium",
    topic: "ReactDOM"
  },
  {
    question: "What is an immutable update in React state?",
    options: [
      "Creating a new value instead of directly modifying the existing state",
      "Changing state directly",
      "Deleting all state",
      "Storing state in localStorage only"
    ],
    correctAnswer: 0,
    explanation:
      "React state should generally be updated immutably by creating new arrays or objects instead of directly mutating existing state.",
    difficulty: "Medium",
    topic: "State Management"
  },
  {
    question: "Which syntax correctly updates an array state by adding an item?",
    options: [
      "setItems([...items, newItem])",
      "items.push(newItem)",
      "items.add(newItem)",
      "setItems(items.push(newItem))"
    ],
    correctAnswer: 0,
    explanation:
      "Using the spread operator creates a new array and preserves immutable state updates.",
    difficulty: "Medium",
    topic: "State Management"
  },
  {
    question: "Why should state not normally be mutated directly?",
    options: [
      "React relies on state updates and references to determine when rendering work is needed",
      "JavaScript does not allow mutation",
      "Mutation always causes syntax errors",
      "React cannot store objects"
    ],
    correctAnswer: 0,
    explanation:
      "Direct mutation can prevent React from correctly detecting changes and can lead to inconsistent UI behavior.",
    difficulty: "Medium",
    topic: "State Management"
  },
  {
    question: "What is lazy loading in React?",
    options: [
      "Loading a component only when it is needed",
      "Loading CSS after the page closes",
      "Delaying every state update",
      "Loading all components at startup"
    ],
    correctAnswer: 0,
    explanation:
      "Lazy loading allows code for a component to be loaded when it is needed, which can reduce the initial bundle size.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "Which React API is commonly used for lazy-loading a component?",
    options: [
      "React.lazy",
      "React.load",
      "React.dynamic",
      "React.import"
    ],
    correctAnswer: 0,
    explanation:
      "React.lazy lets you define a component that is loaded dynamically.",
    difficulty: "Medium",
    topic: "Performance"
  },
  {
    question: "Which component is normally used with React.lazy to display fallback UI?",
    options: [
      "Suspense",
      "Fallback",
      "Loader",
      "LazyBoundary"
    ],
    correctAnswer: 0,
    explanation:
      "Suspense can display fallback content while a lazy component is loading.",
    difficulty: "Medium",
    topic: "Suspense"
  }
];

module.exports = reactQuestions;