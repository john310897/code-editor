import { LANGUAGES } from "../constants"

const CodeEditorControlsComponent = ({
    language,
    handleLanguageChange,
    handleRun,
    loading
}) => {
    return (
        <>
            <div className='code_controls'>
                <div className='code_control_options'>
                    <select name='language' value={language} onChange={handleLanguageChange}>
                        {LANGUAGES.map((languageObj, index) => (
                            <option
                                key={index}
                                value={languageObj.value}
                            >{languageObj.label}</option>
                        ))}
                    </select>
                    <button disabled={loading} onClick={handleRun}>COMPILE</button>
                </div>
            </div>
        </>
    )
}

export default CodeEditorControlsComponent