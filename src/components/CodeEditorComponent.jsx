import { CodeiumEditor } from '@codeium/react-code-editor';
import { useEffect } from 'react';

const CodeEditorComponent = ({
    language,
    output,
    handleChange,
}) => {
    return (
        <>
            <div className="main_container">
                <div className="code_editor">
                    <CodeiumEditor
                        language={language}
                        key={language}
                        className='codeium_editor'
                        onAutocomplete={false}
                        theme="vs-dark"
                        height={'80vh'}
                        containerStyle={{ height: '80vh' }}
                        onChange={handleChange}
                    />
                </div>
                <div
                    className="code_output"
                    dangerouslySetInnerHTML={{ __html: output }}>
                </div>
            </div>
        </>
    )
}
export default CodeEditorComponent