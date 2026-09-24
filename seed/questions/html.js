const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: 0,
    explanation:
      "HTML stands for Hyper Text Markup Language. It is used to structure content on web pages.",
    difficulty: "Easy",
    topic: "HTML Basics"
  },

  {
    question: "Which tag is used to define the root of an HTML document?",
    options: [
      "<body>",
      "<html>",
      "<head>",
      "<root>"
    ],
    correctAnswer: 1,
    explanation:
      "The <html> element is the root element of an HTML document and contains the <head> and <body> sections.",
    difficulty: "Easy",
    topic: "Document Structure"
  },

  {
    question: "Which declaration is used to specify HTML5?",
    options: [
      "<html5>",
      "<doctype html>",
      "<!DOCTYPE html>",
      "<DOCTYPE HTML5>"
    ],
    correctAnswer: 2,
    explanation:
      "<!DOCTYPE html> tells the browser that the document uses the HTML5 standard.",
    difficulty: "Easy",
    topic: "HTML5"
  },

  {
    question: "Which tag is used to create the largest heading?",
    options: [
      "<heading>",
      "<h6>",
      "<head>",
      "<h1>"
    ],
    correctAnswer: 3,
    explanation:
      "<h1> represents the highest-level heading. HTML provides headings from <h1> to <h6>.",
    difficulty: "Easy",
    topic: "Headings"
  },

  {
    question: "Which tag is used to create a paragraph?",
    options: [
      "<paragraph>",
      "<p>",
      "<para>",
      "<text>"
    ],
    correctAnswer: 1,
    explanation:
      "The <p> element is used to define a paragraph in HTML.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ],
    correctAnswer: 2,
    explanation:
      "The <a> anchor element is used to create hyperlinks. The destination is specified using the href attribute.",
    difficulty: "Easy",
    topic: "Links"
  },

  {
    question: "Which attribute specifies the destination URL of an anchor element?",
    options: [
      "src",
      "href",
      "link",
      "url"
    ],
    correctAnswer: 1,
    explanation:
      "The href attribute specifies the URL or destination of an <a> element.",
    difficulty: "Easy",
    topic: "Links"
  },

  {
    question: "Which HTML tag is used to display an image?",
    options: [
      "<image>",
      "<picture>",
      "<img>",
      "<src>"
    ],
    correctAnswer: 2,
    explanation:
      "The <img> element is used to embed an image in an HTML document.",
    difficulty: "Easy",
    topic: "Images"
  },

  {
    question: "Which attribute specifies the image source in an <img> element?",
    options: [
      "href",
      "src",
      "source",
      "path"
    ],
    correctAnswer: 1,
    explanation:
      "The src attribute specifies the URL or path of the image displayed by the <img> element.",
    difficulty: "Easy",
    topic: "Images"
  },

  {
    question: "What is the purpose of the alt attribute in an image?",
    options: [
      "To change image size",
      "To add an alternative text description",
      "To change image color",
      "To create an image link"
    ],
    correctAnswer: 1,
    explanation:
      "The alt attribute provides alternative text for an image and is important for accessibility and situations where the image cannot load.",
    difficulty: "Easy",
    topic: "Accessibility"
  },

  {
    question: "Which tag creates an unordered list?",
    options: [
      "<ol>",
      "<list>",
      "<ul>",
      "<li>"
    ],
    correctAnswer: 2,
    explanation:
      "The <ul> element creates an unordered list, while each list item is represented by <li>.",
    difficulty: "Easy",
    topic: "Lists"
  },

  {
    question: "Which tag creates an ordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<order>",
      "<li>"
    ],
    correctAnswer: 1,
    explanation:
      "The <ol> element creates an ordered list, normally displayed with numbers.",
    difficulty: "Easy",
    topic: "Lists"
  },

  {
    question: "Which tag represents an individual list item?",
    options: [
      "<item>",
      "<list>",
      "<li>",
      "<ul>"
    ],
    correctAnswer: 2,
    explanation:
      "The <li> element represents an individual item inside an ordered or unordered list.",
    difficulty: "Easy",
    topic: "Lists"
  },

  {
    question: "Which HTML element is used to create a table row?",
    options: [
      "<td>",
      "<tr>",
      "<th>",
      "<row>"
    ],
    correctAnswer: 1,
    explanation:
      "The <tr> element defines a row in an HTML table.",
    difficulty: "Easy",
    topic: "Tables"
  },

  {
    question: "Which HTML element defines a table data cell?",
    options: [
      "<td>",
      "<tr>",
      "<data>",
      "<cell>"
    ],
    correctAnswer: 0,
    explanation:
      "The <td> element defines a standard data cell inside a table row.",
    difficulty: "Easy",
    topic: "Tables"
  },

  {
    question: "Which HTML element defines a table header cell?",
    options: [
      "<header>",
      "<thead>",
      "<th>",
      "<td>"
    ],
    correctAnswer: 2,
    explanation:
      "The <th> element defines a header cell in an HTML table.",
    difficulty: "Easy",
    topic: "Tables"
  },

  {
    question: "Which tag is used to create an HTML form?",
    options: [
      "<input>",
      "<form>",
      "<fieldset>",
      "<submit>"
    ],
    correctAnswer: 1,
    explanation:
      "The <form> element is used to create a form for collecting user input.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used to accept user input?",
    options: [
      "<input>",
      "<text>",
      "<data>",
      "<user>"
    ],
    correctAnswer: 0,
    explanation:
      "The <input> element is used to create different types of form controls such as text fields, passwords, checkboxes and radio buttons.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which input type is used for entering a password?",
    options: [
      "text",
      "hidden",
      "password",
      "secure"
    ],
    correctAnswer: 2,
    explanation:
      "The input type=\"password\" hides the characters entered by the user.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which input type allows the user to select one option from multiple choices?",
    options: [
      "checkbox",
      "radio",
      "select",
      "option"
    ],
    correctAnswer: 1,
    explanation:
      "Radio buttons are generally used when the user should select one option from a group.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which input type allows users to select multiple independent options?",
    options: [
      "radio",
      "multiple",
      "checkbox",
      "select"
    ],
    correctAnswer: 2,
    explanation:
      "Checkboxes allow users to select multiple independent options.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used to create a dropdown list?",
    options: [
      "<dropdown>",
      "<select>",
      "<list>",
      "<option>"
    ],
    correctAnswer: 1,
    explanation:
      "The <select> element creates a dropdown control. Individual choices are defined using <option>.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which element defines an option inside a <select> element?",
    options: [
      "<choice>",
      "<item>",
      "<option>",
      "<select-item>"
    ],
    correctAnswer: 2,
    explanation:
      "The <option> element defines an individual option inside a <select> dropdown.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used for multi-line text input?",
    options: [
      "<input type=\"text\">",
      "<textarea>",
      "<multitext>",
      "<textblock>"
    ],
    correctAnswer: 1,
    explanation:
      "The <textarea> element provides a multi-line text input field.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which attribute makes a form field mandatory?",
    options: [
      "mandatory",
      "required",
      "validate",
      "must"
    ],
    correctAnswer: 1,
    explanation:
      "The required attribute prevents form submission until the user provides a value for the field.",
    difficulty: "Easy",
    topic: "Form Validation"
  },

  {
    question: "Which attribute specifies a unique identifier for an HTML element?",
    options: [
      "class",
      "name",
      "id",
      "key"
    ],
    correctAnswer: 2,
    explanation:
      "The id attribute identifies a unique HTML element within a document.",
    difficulty: "Easy",
    topic: "Attributes"
  },

  {
    question: "Which attribute is commonly used to assign one or more CSS classes to an element?",
    options: [
      "style",
      "class",
      "css",
      "classname"
    ],
    correctAnswer: 1,
    explanation:
      "The class attribute assigns one or more class names to an HTML element.",
    difficulty: "Easy",
    topic: "Attributes"
  },

  {
    question: "Which HTML element is used to define metadata about a document?",
    options: [
      "<meta>",
      "<data>",
      "<info>",
      "<metadata>"
    ],
    correctAnswer: 0,
    explanation:
      "The <meta> element provides metadata such as character encoding, viewport settings and descriptions.",
    difficulty: "Easy",
    topic: "Meta Tags"
  },

  {
    question: "Where is the <title> element normally placed?",
    options: [
      "Inside <body>",
      "Inside <footer>",
      "Inside <head>",
      "Outside <html>"
    ],
    correctAnswer: 2,
    explanation:
      "The <title> element is placed inside the <head> and defines the document title shown in the browser tab.",
    difficulty: "Easy",
    topic: "Document Structure"
  },

  {
    question: "Which meta tag is important for responsive web design?",
    options: [
      "<meta name=\"responsive\">",
      "<meta name=\"viewport\">",
      "<meta name=\"mobile\">",
      "<meta name=\"screen\">"
    ],
    correctAnswer: 1,
    explanation:
      "The viewport meta tag helps control the page's dimensions and scaling on mobile devices.",
    difficulty: "Medium",
    topic: "Responsive Design"
  },

  {
    question: "Which HTML element represents the main content of a document?",
    options: [
      "<content>",
      "<main>",
      "<section>",
      "<body-content>"
    ],
    correctAnswer: 1,
    explanation:
      "The <main> element represents the dominant content of the document.",
    difficulty: "Easy",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element represents a navigation section?",
    options: [
      "<navigate>",
      "<navigation>",
      "<nav>",
      "<menu-bar>"
    ],
    correctAnswer: 2,
    explanation:
      "The <nav> element represents a section containing navigation links.",
    difficulty: "Easy",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is used for an independent piece of content such as a blog post?",
    options: [
      "<article>",
      "<post>",
      "<content>",
      "<blog>"
    ],
    correctAnswer: 0,
    explanation:
      "The <article> element represents a self-contained composition that can be independently distributed or reused.",
    difficulty: "Medium",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is used to group related content thematically?",
    options: [
      "<group>",
      "<section>",
      "<content>",
      "<area>"
    ],
    correctAnswer: 1,
    explanation:
      "The <section> element represents a thematic grouping of content.",
    difficulty: "Easy",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element represents content at the bottom of a page or section?",
    options: [
      "<bottom>",
      "<footer>",
      "<end>",
      "<section-footer>"
    ],
    correctAnswer: 1,
    explanation:
      "The <footer> element represents footer content for a page or section.",
    difficulty: "Easy",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is used for introductory content or navigation aids at the top of a page or section?",
    options: [
      "<top>",
      "<header>",
      "<intro>",
      "<head-content>"
    ],
    correctAnswer: 1,
    explanation:
      "The <header> element represents introductory content or navigational aids for a page or section.",
    difficulty: "Easy",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is commonly used as a generic block-level container?",
    options: [
      "<span>",
      "<container>",
      "<div>",
      "<block>"
    ],
    correctAnswer: 2,
    explanation:
      "The <div> element is a generic block-level container used to group content.",
    difficulty: "Easy",
    topic: "HTML Elements"
  },

  {
    question: "Which HTML element is commonly used as a generic inline container?",
    options: [
      "<inline>",
      "<span>",
      "<div>",
      "<text>"
    ],
    correctAnswer: 1,
    explanation:
      "The <span> element is a generic inline container used to group or style portions of text or inline content.",
    difficulty: "Easy",
    topic: "HTML Elements"
  },

  {
    question: "Which HTML tag is used to embed audio content?",
    options: [
      "<sound>",
      "<music>",
      "<audio>",
      "<media>"
    ],
    correctAnswer: 2,
    explanation:
      "The <audio> element is used to embed sound or audio content in a web page.",
    difficulty: "Easy",
    topic: "Multimedia"
  },

  {
    question: "Which HTML tag is used to embed video content?",
    options: [
      "<movie>",
      "<media>",
      "<video>",
      "<play>"
    ],
    correctAnswer: 2,
    explanation:
      "The <video> element is used to embed video content in an HTML document.",
    difficulty: "Easy",
    topic: "Multimedia"
  },

  {
    question: "Which attribute displays built-in playback controls for audio or video?",
    options: [
      "buttons",
      "controls",
      "player",
      "toolbar"
    ],
    correctAnswer: 1,
    explanation:
      "The controls attribute tells the browser to display built-in playback controls.",
    difficulty: "Easy",
    topic: "Multimedia"
  },

  {
    question: "Which HTML element is used to embed another web page inside a page?",
    options: [
      "<frame>",
      "<iframe>",
      "<embed-page>",
      "<window>"
    ],
    correctAnswer: 1,
    explanation:
      "The <iframe> element embeds another HTML document or external content within the current page.",
    difficulty: "Easy",
    topic: "Embedding"
  },

  {
    question: "Which attribute opens a link in a new browsing context?",
    options: [
      "target=\"new\"",
      "target=\"_blank\"",
      "new=\"true\"",
      "window=\"new\""
    ],
    correctAnswer: 1,
    explanation:
      "target=\"_blank\" requests that the linked resource be opened in a new browsing context.",
    difficulty: "Medium",
    topic: "Links"
  },

  {
    question: "Which HTML element is used to provide a caption for a figure?",
    options: [
      "<caption>",
      "<figcaption>",
      "<figurecaption>",
      "<description>"
    ],
    correctAnswer: 1,
    explanation:
      "The <figcaption> element provides a caption or legend for a <figure> element.",
    difficulty: "Medium",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is used together with <figcaption> to represent self-contained content?",
    options: [
      "<figure>",
      "<image>",
      "<media>",
      "<content>"
    ],
    correctAnswer: 0,
    explanation:
      "The <figure> element represents self-contained content such as images, diagrams, charts or code examples.",
    difficulty: "Medium",
    topic: "Semantic HTML"
  },

  {
    question: "Which HTML element is used to draw graphics using JavaScript?",
    options: [
      "<draw>",
      "<canvas>",
      "<graphics>",
      "<paint>"
    ],
    correctAnswer: 1,
    explanation:
      "The <canvas> element provides a drawing surface that can be controlled using JavaScript.",
    difficulty: "Medium",
    topic: "HTML5"
  },

  {
    question: "Which HTML element is used for scalable vector graphics?",
    options: [
      "<vector>",
      "<svg>",
      "<graphics>",
      "<shape>"
    ],
    correctAnswer: 1,
    explanation:
      "SVG stands for Scalable Vector Graphics and is represented using the <svg> element.",
    difficulty: "Medium",
    topic: "HTML5"
  },

  {
    question: "What are data-* attributes used for?",
    options: [
      "Creating database tables",
      "Storing custom data associated with an HTML element",
      "Creating CSS variables only",
      "Defining JavaScript functions"
    ],
    correctAnswer: 1,
    explanation:
      "Custom data-* attributes allow developers to store custom data directly on HTML elements.",
    difficulty: "Medium",
    topic: "Attributes"
  },

  {
    question: "Which HTML entity represents a non-breaking space?",
    options: [
      "&space;",
      "&nbsp;",
      "&blank;",
      "&nbs;"
    ],
    correctAnswer: 1,
    explanation:
      "&nbsp; represents a non-breaking space in HTML.",
    difficulty: "Medium",
    topic: "HTML Entities"
  },

  {
    question: "Which attribute specifies the language of an HTML document?",
    options: [
      "language",
      "lang",
      "locale",
      "language-code"
    ],
    correctAnswer: 1,
    explanation:
      "The lang attribute on the <html> element specifies the primary language of the document, such as lang=\"en\".",
    difficulty: "Easy",
    topic: "Accessibility"
  },

  {
    question: "Which attribute provides a tooltip when the user hovers over an element?",
    options: [
      "tooltip",
      "hint",
      "title",
      "hover"
    ],
    correctAnswer: 2,
    explanation:
      "The title attribute commonly provides advisory information that browsers may display as a tooltip.",
    difficulty: "Easy",
    topic: "Global Attributes"
  },

  {
    question: "Which HTML element is used to define a label for a form control?",
    options: [
      "<label>",
      "<form-label>",
      "<caption>",
      "<name>"
    ],
    correctAnswer: 0,
    explanation:
      "The <label> element defines a label for a form control and improves form accessibility.",
    difficulty: "Easy",
    topic: "Accessibility"
  },

  {
    question: "Which attribute connects a <label> with a form control?",
    options: [
      "for",
      "target",
      "control",
      "input"
    ],
    correctAnswer: 0,
    explanation:
      "The for attribute of a <label> should match the id of the associated form control.",
    difficulty: "Medium",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used to group related controls inside a form?",
    options: [
      "<group>",
      "<fieldset>",
      "<formgroup>",
      "<controls>"
    ],
    correctAnswer: 1,
    explanation:
      "The <fieldset> element groups related form controls. A <legend> can provide a caption for the group.",
    difficulty: "Medium",
    topic: "Forms"
  },

  {
    question: "Which element provides a caption for a <fieldset>?",
    options: [
      "<caption>",
      "<label>",
      "<legend>",
      "<title>"
    ],
    correctAnswer: 2,
    explanation:
      "The <legend> element defines a caption for the content of a <fieldset>.",
    difficulty: "Medium",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used to represent emphasized text?",
    options: [
      "<italic>",
      "<em>",
      "<i-text>",
      "<emphasis>"
    ],
    correctAnswer: 1,
    explanation:
      "The <em> element represents stress emphasis. Browsers commonly render it in italics by default.",
    difficulty: "Easy",
    topic: "Text Formatting"
  },

  {
    question: "Which HTML element represents strong importance?",
    options: [
      "<strong>",
      "<bold>",
      "<important>",
      "<bstrong>"
    ],
    correctAnswer: 0,
    explanation:
      "The <strong> element represents strong importance, seriousness or urgency.",
    difficulty: "Easy",
    topic: "Text Formatting"
  },

  {
    question: "Which HTML tag is used to create a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<newline>"
    ],
    correctAnswer: 2,
    explanation:
      "The <br> element creates a line break in HTML.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which HTML element is used to define a horizontal thematic break?",
    options: [
      "<line>",
      "<hr>",
      "<break>",
      "<horizontal>"
    ],
    correctAnswer: 1,
    explanation:
      "The <hr> element represents a thematic break between sections of content.",
    difficulty: "Easy",
    topic: "HTML Elements"
  },

  {
    question: "Which HTML attribute can be used to make an element non-editable?",
    options: [
      "readonly",
      "disabled-edit",
      "editable=\"false\"",
      "noedit"
    ],
    correctAnswer: 0,
    explanation:
      "The readonly attribute prevents the user from editing the value of supported form controls while still allowing the value to be submitted.",
    difficulty: "Medium",
    topic: "Forms"
  },

  {
    question: "Which attribute disables a form control?",
    options: [
      "inactive",
      "disabled",
      "readonly-only",
      "off"
    ],
    correctAnswer: 1,
    explanation:
      "The disabled attribute makes a supported form control unavailable for user interaction.",
    difficulty: "Easy",
    topic: "Forms"
  },

  {
    question: "Which HTML element is used to define a description list?",
    options: [
      "<dl>",
      "<description>",
      "<list-description>",
      "<desc>"
    ],
    correctAnswer: 0,
    explanation:
      "The <dl> element represents a description list, usually containing <dt> terms and <dd> descriptions.",
    difficulty: "Medium",
    topic: "Lists"
  },

  {
    question: "Which element defines a term in a description list?",
    options: [
      "<term>",
      "<dt>",
      "<dd>",
      "<definition>"
    ],
    correctAnswer: 1,
    explanation:
      "The <dt> element defines a term or name in a description list.",
    difficulty: "Medium",
    topic: "Lists"
  },

  {
    question: "Which element defines the description of a term in a description list?",
    options: [
      "<description>",
      "<dt>",
      "<dd>",
      "<detail>"
    ],
    correctAnswer: 2,
    explanation:
      "The <dd> element provides the description or value associated with a <dt> term.",
    difficulty: "Medium",
    topic: "Lists"
  }
];

module.exports = htmlQuestions;