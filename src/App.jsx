import { useEffect, useState } from 'react';
import './App.css';
import { API_URL, DEFAULT_LANGUAGE, OPTIONS, SERVER_API_URL } from './constants';
import CodeEditorComponent from './components/CodeEditorComponent';
import CodeEditorControlsComponent from './components/CodeEditorControlsComponent';

function App() {
	const [code, setCode] = useState(null);
	const [output, setOutput] = useState(null);
	const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
	const [loading, setLoading] = useState(false);
	const [apiKey,setApiKey]=useState(null)

	useEffect(() => {
		getOneCompiler()
	}, [])

	const getOneCompiler = async () => {
		const response = await fetch(SERVER_API_URL,{credentials:'include'}).then(resp=>resp?.json())
		setApiKey(response?.apiKey)
	}

	const handleChange = (value) => {
		setCode(value);
	};

	const handleRun = async () => {
		setOutput(null)
		setLoading(true)
		const tempOptions = { ...OPTIONS };
		console.log("testing branches")
		tempOptions.body.files = [
			{
				name: 'index.py',
				content: code,
			},
		];
		tempOptions.body.language = language
		tempOptions.body = JSON.stringify(tempOptions.body);
		tempOptions.headers['x-rapidapi-key']=apiKey
		const response = await fetch(API_URL, tempOptions).then((resp) =>
			resp?.json()
		);
		if (response?.exception) {
			let exceptionMessage = `<span class='error_message'>${response?.exception}</span>`
			exceptionMessage.replaceAll('\n', '<br>')
			setOutput(exceptionMessage)
		} else {
			setOutput(response?.stdout?.replaceAll('\n', '<br>'));
		}
		setLoading(false)
	};

	const handleLanguageChange = (e) => {
		const { value } = e.target;
		setLanguage(value)
	}
	return (
		<>
			<div className='container'>
				<CodeEditorControlsComponent
					handleLanguageChange={handleLanguageChange}
					handleRun={handleRun}
					language={language}
					loading={loading}
				/>
				<CodeEditorComponent
					language={language}
					output={output}
					handleChange={handleChange}
				/>
			</div>
		</>
	);
}

export default App;
