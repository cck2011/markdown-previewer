import { useState } from 'react'


import Header from './components/Header'
import InputContainer from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import { styled } from 'styled-components';

function App() {
  const TextWrapperCss = styled.section`
  display: flex;
  width: 100%;
    `;

  const [markdown, setMarkdown] = useState(`# Hello World`);

  function handleOnChange(evt:any) {
  
    setMarkdown(evt.target.value);
  }
  
  return (
    <>
      <Header/>
      <TextWrapperCss>
      <InputContainer value={markdown} handleChange={handleOnChange} />
      <MarkdownOutput value={markdown}/>
      </TextWrapperCss>
    </>
  )
}

export default App
