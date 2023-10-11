import React from 'react'
import styled from 'styled-components';


interface MarkdownInputProps  {
    value : string;
    handleChange:(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
    
}

function InputContainer ({value,handleChange}: MarkdownInputProps){
    
    
    return(
    
       
        <InputContainerCss  value={value} onChange={(evt)=>{handleChange(evt)}} />
        
    
    )
}


const InputContainerCss = styled.textarea`
    width: 50%;
    height: calc(100vh - 58.5px);
    padding: 20px;
    box-sizing: border-box;
    font-size: 16px;
    `;
 
export default InputContainer