import SyntaxHighlighter from 'react-syntax-highlighter';

function CodeBlock() {
  const codeString = ".wrapper {\n    display : flex;\n    flex-direction : row\n}";
  return (
    <SyntaxHighlighter language="css" showLineNumbers="true" contenteditable="true">
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock; 