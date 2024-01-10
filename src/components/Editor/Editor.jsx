import React from 'react';
import * as monaco from 'monaco-editor';

import { DEFAULT_THEME } from './Editor.constants';

const Editor = ({
	value = '',
	options = {},
	language = 'html',
	width = 'inherit',
	height = 'inherit',
	onChange = () => null
}) => {
	const editorRef = React.useRef(null);
	const timeoutRef = React.useRef(null);
	const containerRef = React.useRef(null);

	const [ refresh, setRefresh ] = React.useState(false);

	React.useEffect(() => {
		if (editorRef.current) {
			console.log('Editor ready', value);
			if (!refresh) setRefresh(true);
		} else {
			console.log('Editor not ready', value);
		}
	}, [ value ]);

	React.useEffect(() => {
		// Define Monaco Editor theme
		monaco.editor.defineTheme('tigadoTheme', DEFAULT_THEME);

		// Set Monaco Editor theme
		monaco.editor.setTheme('tigadoTheme');

		// Create or update Monaco Editor instance
		if (!editorRef.current) {
			editorRef.current = monaco.editor.create(containerRef.current, {
				value,
				language,
				fontSize: 20,
				fontFamily: 'Arial',
				...options
			});

			// Add onChange callback with delay
			editorRef.current.onDidChangeModelContent(() => {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(() => {
					const updatedContent = editorRef.current.getValue();
					onChange(updatedContent);
				}, 500); // 500ms (1/2 second) delay
			});
		} else {
			editorRef.current.setValue(value);
			editorRef.current.updateOptions(options);
			monaco.editor.setModelLanguage(editorRef.current.getModel(), language);
		}

		// Cleanup function
		return () => {
			if (editorRef.current) {
				editorRef.current.dispose(); // Dispose the editor to avoid memory leaks
				editorRef.current = null;
			}
			clearTimeout(timeoutRef.current);
		};
	}, [ refresh ]);

	return (
		<div ref={containerRef} style={{ width, height }} />
	);
};

export default Editor;

