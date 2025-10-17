import { useState } from 'react';
import './App.css';
import { CodeiumEditor } from '@codeium/react-code-editor';
import { API_URL, OPTIONS } from './constants';

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(null);
  const [output, setOutput] = useState(null);

  const handleChange = (value) => {
    setCode(value);
  };

  const handleRun = async () => {
    setOutput(null)
    const tempOptions = { ...OPTIONS };
    tempOptions.body.files = [
      {
        name: 'index.py',
        content: code,
      },
    ];
    tempOptions.body = JSON.stringify(tempOptions.body);
    const response = await fetch(API_URL, tempOptions).then((resp) =>
      resp?.json()
    );
    console.log(response);
    setOutput(response?.stdout?.replaceAll('\n', '<br/>'));
  };
  return (
    <>
      <div className="main_container">
        <div className="code_editor">
          <CodeiumEditor
            language="python"
            onAutocomplete={false}
            theme="vs-dark"
            onChange={handleChange}
          />
        </div>
        <div className="code_output" dangerouslySetInnerHTML={{ __html: output }}></div>
      </div>

      <button onClick={handleRun}>COMPILE</button>
    </>
  );
}

export default App;
