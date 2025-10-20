<h2 align="center" style="color:#CD7F32;">ONLINE CODE EDITOR</h2>

## 🚀 Overview

This is a web-based code compiler that allows users to write, compile, and execute code directly in the browser. It currently supports JavaScript and Python, with plans to expand to more languages. 

 The project integrates:
 - Codeium for intelligent code autocompletion.
 - OneCompiler API for compiling and executing code.

## 🧰 Features

- ✅ Language selection (JavaScript, Python)
- 🧠 Code autocompletion via Codeium
- 🐞 Syntax and runtime error display
- 📤 Output window for compiled code

## 🖼️ Screenshots

### Successful Compilation (JavaScript)

![Alt text](<Screenshot 2025-10-20 1.png>)

### Error Handleing (JavaScript)

![Alt text](<Screenshot 2025-10-20 2.png>)

## 🛠️ Tech Stack

- **Frontend**: React (v19.2.0)
- **Autocomplete**: [Codeium Editor](https://www.npmjs.com/package/@codeium/react-code-editor) npm package
- **Compiler**: OneCompiler (free tire)

## 📦 Installation

```bash
git clone https://github.com/john310897/code-editor.git
cd code-editor
npm install
npm start 

```

## 📄 Usage

1. Select a language from the dropdown.
2. Write your code in the editor.
3. Click compile to run the code.
4. View output or errors in the output window