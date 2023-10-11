import React from 'react'
import styled from 'styled-components';
import MarkdownGuide from './MarkdownGuide';



function Title() {
    const StickyHeader = styled.section`
    position: sticky;
    top:0;
    `;
    const Header = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background: papayawhip;
    overflow: hidden;
    padding: 10px 20px;
    
    `;
    const HeaderButton = styled.button`
    padding: 10px;
    background-color: rgb(97, 218, 251);
    color: rgb(40, 44, 52);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease 0s;
    &:hover {background-color: red}; 
    `;
    const Headertitle = styled.section`
    color:white;
    font-size:2em;
    margin:0px;
    `;
    const [Results, setResults] = React.useState(false);
    function buttonHandler(Results: boolean){
      setResults(!Results);
    
    }
    return (
      <div>
    <StickyHeader>
      <Header>
        <Headertitle>
        <h1>Markdown Previewer</h1>
        </Headertitle>
        <HeaderButton onClick={() => buttonHandler(Results)}>
        Markdown Cheat Sheet
        </HeaderButton>
      </Header>
    </StickyHeader>
    {Results? <MarkdownGuide/> : null}
    
    </div>
    )
  }
  
  export default Title