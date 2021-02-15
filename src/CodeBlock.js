import SyntaxHighlighter from 'react-syntax-highlighter';

import "./CodeBlock.css";

import {codestrings} from "./codestrings.js";

function CodeBlock() {
  const codeString_1 = codestrings.html_1;
  const codeString_2 = codestrings.css_1;
  return (
        <SyntaxHighlighter language="css" showLineNumbers="true" contenteditable="true">
            {codeString_1}
            {codeString_2}
        </SyntaxHighlighter>
  );
};

export default CodeBlock; 