import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box } from '@chakra-ui/react';

const CodeEditor = ({ Code }) => {
  const [code, setCode] = useState('// Start typing your code here...');

  return (
    <Box
      border="1px solid #0284c7"
      rounded="md"
      overflow="hidden"
      bg="#070707"
      w={'100%'}
      textColor="#f6f7f8"
    >
      <MonacoEditor width="100%"
        height="500px"
        language="javascript"
        theme="vs-dark"
        value={Code}
        defaultLanguage='javascript'
        onChange={(value) => setCode(value || '')}
        options={{
          bracketPairColorization: true,
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false, cursorStyle: 'line', automaticLayout: true, wordWrap: 'on', minimap: { enabled: true }, // Enable minimap
          lineNumbers: 'on',
          // // Show line numbers
          fontSize: 14,
          // Adjust font size
        }}
      />
      <style> {` .monaco-editor
      { background-color: red !important; } `}
      </style>
    </Box>
  );
};

export default CodeEditor;
