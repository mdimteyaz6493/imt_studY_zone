const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    explanation:
      "CSS stands for Cascading Style Sheets and is used to style and layout HTML documents.",
    difficulty: "Easy",
    topic: "CSS Basics"
  },

  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      "<css>",
      "<style>",
      "<link>",
      "<script>"
    ],
    correctAnswer: 2,
    explanation:
      "The <link> element is used to connect an external CSS stylesheet to an HTML document.",
    difficulty: "Easy",
    topic: "CSS Basics"
  },

  {
    question: "Which CSS property is used to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground"
    ],
    correctAnswer: 2,
    explanation:
      "The color property is used to set the text color of an element.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which CSS property is used to change the background color?",
    options: [
      "bgcolor",
      "background-color",
      "color-background",
      "background"
    ],
    correctAnswer: 1,
    explanation:
      "The background-color property sets the background color of an element.",
    difficulty: "Easy",
    topic: "Background"
  },

  {
    question: "Which property is used to make text bold?",
    options: [
      "font-style",
      "font-weight",
      "text-bold",
      "font-bold"
    ],
    correctAnswer: 1,
    explanation:
      "The font-weight property controls the thickness of text. Values such as 700 or bold make text bold.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which property is used to change the font size?",
    options: [
      "text-size",
      "font-size",
      "font-height",
      "size"
    ],
    correctAnswer: 1,
    explanation:
      "The font-size property specifies the size of text.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which property is used to change the font family?",
    options: [
      "font-family",
      "text-family",
      "font-type",
      "typeface"
    ],
    correctAnswer: 0,
    explanation:
      "The font-family property specifies the typeface used for text.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which CSS property is used to center text horizontally?",
    options: [
      "align-text",
      "text-align",
      "horizontal-align",
      "text-center"
    ],
    correctAnswer: 1,
    explanation:
      "text-align: center centers inline content such as text horizontally within its container.",
    difficulty: "Easy",
    topic: "Text Alignment"
  },

  {
    question: "Which property controls the space between lines of text?",
    options: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-spacing"
    ],
    correctAnswer: 2,
    explanation:
      "The line-height property controls the vertical distance between lines of text.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which property controls the space between characters?",
    options: [
      "word-spacing",
      "character-spacing",
      "letter-spacing",
      "text-spacing"
    ],
    correctAnswer: 2,
    explanation:
      "The letter-spacing property controls the horizontal space between characters.",
    difficulty: "Easy",
    topic: "Text"
  },

  {
    question: "Which CSS property is used to add space inside an element?",
    options: [
      "margin",
      "padding",
      "spacing",
      "border"
    ],
    correctAnswer: 1,
    explanation:
      "Padding creates space between an element's content and its border.",
    difficulty: "Easy",
    topic: "Box Model"
  },

  {
    question: "Which CSS property is used to add space outside an element?",
    options: [
      "padding",
      "margin",
      "spacing",
      "outline"
    ],
    correctAnswer: 1,
    explanation:
      "Margin creates space outside an element's border.",
    difficulty: "Easy",
    topic: "Box Model"
  },

  {
    question: "Which of the following is part of the CSS box model?",
    options: [
      "Content",
      "Padding",
      "Border",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation:
      "The CSS box model consists of content, padding, border, and margin.",
    difficulty: "Easy",
    topic: "Box Model"
  },

  {
    question: "Which property is used to set the width of an element?",
    options: [
      "element-width",
      "width",
      "size-width",
      "box-width"
    ],
    correctAnswer: 1,
    explanation:
      "The width property specifies the width of an element.",
    difficulty: "Easy",
    topic: "Box Model"
  },

  {
    question: "Which property is used to set the height of an element?",
    options: [
      "height",
      "element-height",
      "box-height",
      "size-height"
    ],
    correctAnswer: 0,
    explanation:
      "The height property specifies the height of an element.",
    difficulty: "Easy",
    topic: "Box Model"
  },

  {
    question: "Which value of box-sizing makes width and height include padding and border?",
    options: [
      "content-box",
      "border-box",
      "padding-box",
      "full-box"
    ],
    correctAnswer: 1,
    explanation:
      "With box-sizing: border-box, the declared width and height include the content, padding, and border.",
    difficulty: "Medium",
    topic: "Box Model"
  },

  {
    question: "Which CSS selector selects an element by its ID?",
    options: [
      ".",
      "#",
      "*",
      "@"
    ],
    correctAnswer: 1,
    explanation:
      "The # symbol is used to select an element by its ID.",
    difficulty: "Easy",
    topic: "Selectors"
  },

  {
    question: "Which CSS selector selects elements by class?",
    options: [
      "#",
      ".",
      "*",
      "$"
    ],
    correctAnswer: 1,
    explanation:
      "The dot (.) selector is used to target elements with a specific class.",
    difficulty: "Easy",
    topic: "Selectors"
  },

  {
    question: "What does the universal selector (*) select?",
    options: [
      "Only paragraphs",
      "Only div elements",
      "All elements",
      "Only classes"
    ],
    correctAnswer: 2,
    explanation:
      "The universal selector (*) matches all elements.",
    difficulty: "Easy",
    topic: "Selectors"
  },

  {
    question: "Which selector selects all <p> elements inside a <div>?",
    options: [
      "div + p",
      "div > p",
      "div p",
      "div.p"
    ],
    correctAnswer: 2,
    explanation:
      "The descendant selector div p selects all p elements that are descendants of a div.",
    difficulty: "Easy",
    topic: "Selectors"
  },

  {
    question: "Which selector selects direct child elements?",
    options: [
      "+",
      "~",
      ">",
      "="
    ],
    correctAnswer: 2,
    explanation:
      "The > combinator selects elements that are direct children of another element.",
    difficulty: "Easy",
    topic: "Selectors"
  },

  {
    question: "Which pseudo-class is used when the mouse pointer is over an element?",
    options: [
      ":active",
      ":hover",
      ":focus",
      ":visited"
    ],
    correctAnswer: 1,
    explanation:
      "The :hover pseudo-class applies styles when the pointer is over an element.",
    difficulty: "Easy",
    topic: "Pseudo Classes"
  },

  {
    question: "Which pseudo-class is applied when an input element receives focus?",
    options: [
      ":hover",
      ":focus",
      ":active",
      ":input"
    ],
    correctAnswer: 1,
    explanation:
      "The :focus pseudo-class applies when an element, such as an input, receives focus.",
    difficulty: "Easy",
    topic: "Pseudo Classes"
  },

  {
    question: "Which pseudo-element is used to insert content before an element?",
    options: [
      "::before",
      "::first",
      ":before-content",
      "::start"
    ],
    correctAnswer: 0,
    explanation:
      "The ::before pseudo-element creates a generated child before the element's content.",
    difficulty: "Medium",
    topic: "Pseudo Elements"
  },

  {
    question: "Which pseudo-element is used to insert content after an element?",
    options: [
      "::end",
      "::after",
      ":after-content",
      "::last"
    ],
    correctAnswer: 1,
    explanation:
      "The ::after pseudo-element creates generated content after an element's content.",
    difficulty: "Medium",
    topic: "Pseudo Elements"
  },

  {
    question: "Which CSS property controls the positioning method of an element?",
    options: [
      "position",
      "placement",
      "location",
      "display"
    ],
    correctAnswer: 0,
    explanation:
      "The position property specifies how an element is positioned in the document.",
    difficulty: "Easy",
    topic: "Position"
  },

  {
    question: "Which position value keeps an element in the normal document flow?",
    options: [
      "absolute",
      "fixed",
      "relative",
      "static"
    ],
    correctAnswer: 3,
    explanation:
      "static is the default positioning value and keeps the element in normal document flow.",
    difficulty: "Easy",
    topic: "Position"
  },

  {
    question: "Which position value positions an element relative to its normal position?",
    options: [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    correctAnswer: 0,
    explanation:
      "position: relative allows an element to be offset from its normal position.",
    difficulty: "Easy",
    topic: "Position"
  },

  {
    question: "An absolutely positioned element is positioned relative to what?",
    options: [
      "The browser window only",
      "Its nearest positioned ancestor",
      "The previous element",
      "The body only"
    ],
    correctAnswer: 1,
    explanation:
      "An absolute element is positioned relative to its nearest ancestor whose position is not static.",
    difficulty: "Medium",
    topic: "Position"
  },

  {
    question: "Which position value makes an element stay fixed relative to the viewport?",
    options: [
      "absolute",
      "sticky",
      "fixed",
      "relative"
    ],
    correctAnswer: 2,
    explanation:
      "position: fixed positions an element relative to the viewport.",
    difficulty: "Easy",
    topic: "Position"
  },

  {
    question: "Which CSS property controls how an element is displayed?",
    options: [
      "visibility",
      "display",
      "show",
      "render"
    ],
    correctAnswer: 1,
    explanation:
      "The display property determines how an element participates in layout.",
    difficulty: "Easy",
    topic: "Display"
  },

  {
    question: "Which display value creates a flex container?",
    options: [
      "display: block",
      "display: flex",
      "display: inline",
      "display: grid"
    ],
    correctAnswer: 1,
    explanation:
      "display: flex turns an element into a flex container.",
    difficulty: "Easy",
    topic: "Flexbox"
  },

  {
    question: "Which property defines the direction of flex items?",
    options: [
      "flex-direction",
      "flex-flow-direction",
      "direction",
      "item-direction"
    ],
    correctAnswer: 0,
    explanation:
      "flex-direction controls whether flex items are arranged in rows or columns.",
    difficulty: "Easy",
    topic: "Flexbox"
  },

  {
    question: "Which property aligns flex items along the main axis?",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "flex-align"
    ],
    correctAnswer: 1,
    explanation:
      "justify-content controls alignment along the flex container's main axis.",
    difficulty: "Easy",
    topic: "Flexbox"
  },

  {
    question: "Which property aligns flex items along the cross axis?",
    options: [
      "justify-content",
      "align-items",
      "flex-align",
      "cross-align"
    ],
    correctAnswer: 1,
    explanation:
      "align-items controls alignment along the cross axis.",
    difficulty: "Easy",
    topic: "Flexbox"
  },

  {
    question: "Which CSS property allows flex items to move onto multiple lines?",
    options: [
      "flex-wrap",
      "flex-line",
      "wrap-items",
      "line-wrap"
    ],
    correctAnswer: 0,
    explanation:
      "flex-wrap determines whether flex items should wrap onto multiple lines.",
    difficulty: "Easy",
    topic: "Flexbox"
  },

  {
    question: "Which display value creates a CSS Grid container?",
    options: [
      "display: flex",
      "display: table",
      "display: grid",
      "display: block"
    ],
    correctAnswer: 2,
    explanation:
      "display: grid turns an element into a CSS Grid container.",
    difficulty: "Easy",
    topic: "CSS Grid"
  },

  {
    question: "Which property defines columns in CSS Grid?",
    options: [
      "grid-columns",
      "grid-template-columns",
      "column-template",
      "grid-column-template"
    ],
    correctAnswer: 1,
    explanation:
      "grid-template-columns defines the size and number of grid columns.",
    difficulty: "Medium",
    topic: "CSS Grid"
  },

  {
    question: "Which property defines rows in CSS Grid?",
    options: [
      "grid-template-rows",
      "grid-rows",
      "row-template",
      "grid-row-template"
    ],
    correctAnswer: 0,
    explanation:
      "grid-template-rows defines the size and number of grid rows.",
    difficulty: "Medium",
    topic: "CSS Grid"
  },

  {
    question: "Which property creates gaps between rows and columns in Grid and Flexbox?",
    options: [
      "spacing",
      "gap",
      "grid-space",
      "margin-gap"
    ],
    correctAnswer: 1,
    explanation:
      "The gap property sets the spacing between rows and columns in supported Grid and Flexbox layouts.",
    difficulty: "Easy",
    topic: "Layout"
  },

  {
    question: "Which CSS unit is relative to the root element's font size?",
    options: [
      "em",
      "rem",
      "%",
      "vh"
    ],
    correctAnswer: 1,
    explanation:
      "The rem unit is relative to the font size of the root HTML element.",
    difficulty: "Medium",
    topic: "CSS Units"
  },

  {
    question: "Which CSS unit is relative to the viewport width?",
    options: [
      "vw",
      "vh",
      "em",
      "rem"
    ],
    correctAnswer: 0,
    explanation:
      "1vw represents 1% of the viewport's width.",
    difficulty: "Easy",
    topic: "CSS Units"
  },

  {
    question: "Which CSS unit is relative to the viewport height?",
    options: [
      "vw",
      "vh",
      "em",
      "rem"
    ],
    correctAnswer: 1,
    explanation:
      "1vh represents 1% of the viewport's height.",
    difficulty: "Easy",
    topic: "CSS Units"
  },

  {
    question: "Which at-rule is used to create responsive styles?",
    options: [
      "@responsive",
      "@media",
      "@screen",
      "@device"
    ],
    correctAnswer: 1,
    explanation:
      "@media is used to apply CSS rules based on conditions such as viewport width.",
    difficulty: "Easy",
    topic: "Responsive Design"
  },

  {
    question: "Which property controls whether content is clipped when it overflows?",
    options: [
      "overflow",
      "content-overflow",
      "clip-content",
      "overflow-content"
    ],
    correctAnswer: 0,
    explanation:
      "The overflow property controls what happens when content exceeds an element's box.",
    difficulty: "Medium",
    topic: "Overflow"
  },

  {
    question: "Which value of overflow hides content that extends outside the element?",
    options: [
      "visible",
      "hidden",
      "scroll",
      "auto"
    ],
    correctAnswer: 1,
    explanation:
      "overflow: hidden clips content that extends beyond the element's box.",
    difficulty: "Easy",
    topic: "Overflow"
  },

  {
    question: "Which property controls the stacking order of positioned elements?",
    options: [
      "stack-order",
      "layer",
      "z-index",
      "position-index"
    ],
    correctAnswer: 2,
    explanation:
      "The z-index property controls the stacking order of positioned elements.",
    difficulty: "Medium",
    topic: "Position"
  },

  {
    question: "Which property is used to create rounded corners?",
    options: [
      "corner-radius",
      "border-radius",
      "radius",
      "border-corner"
    ],
    correctAnswer: 1,
    explanation:
      "border-radius is used to create rounded corners.",
    difficulty: "Easy",
    topic: "Borders"
  },

  {
    question: "Which property is used to add a shadow around an element?",
    options: [
      "element-shadow",
      "box-shadow",
      "shadow-box",
      "border-shadow"
    ],
    correctAnswer: 1,
    explanation:
      "box-shadow adds one or more shadows around an element's box.",
    difficulty: "Easy",
    topic: "Effects"
  },

  {
    question: "Which property is used to add a shadow to text?",
    options: [
      "font-shadow",
      "text-shadow",
      "shadow-text",
      "text-effect"
    ],
    correctAnswer: 1,
    explanation:
      "text-shadow adds a shadow effect to text.",
    difficulty: "Easy",
    topic: "Effects"
  },

  {
    question: "Which keyword can be used to give a CSS rule the highest priority?",
    options: [
      "!important",
      "!priority",
      "!high",
      "!override"
    ],
    correctAnswer: 0,
    explanation:
      "!important increases the priority of a declaration, though it should be used carefully.",
    difficulty: "Medium",
    topic: "Specificity"
  },

  {
    question: "Which has the highest specificity?",
    options: [
      "Element selector",
      "Class selector",
      "ID selector",
      "Universal selector"
    ],
    correctAnswer: 2,
    explanation:
      "Among these selectors, an ID selector has higher specificity than a class, element, or universal selector.",
    difficulty: "Medium",
    topic: "Specificity"
  },

  {
    question: "What is CSS inheritance?",
    options: [
      "Copying HTML elements",
      "Child elements receiving certain styles from their parent",
      "Creating new CSS files",
      "Removing parent styles"
    ],
    correctAnswer: 1,
    explanation:
      "Inheritance allows certain CSS properties of a parent element to be inherited by its children.",
    difficulty: "Medium",
    topic: "Inheritance"
  },

  {
    question: "Which CSS property controls the transparency of an element?",
    options: [
      "transparent",
      "opacity",
      "alpha",
      "visibility"
    ],
    correctAnswer: 1,
    explanation:
      "The opacity property controls the transparency level of an element, from 0 to 1.",
    difficulty: "Easy",
    topic: "Effects"
  }
];

module.exports = cssQuestions;