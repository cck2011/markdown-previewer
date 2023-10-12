
import { styled } from "styled-components";

interface MarkdownOutputProps {
    value: string;
}

const MarkdownOutputCss  = styled.section`
width: 50%;
height: calc(100vh - 58.5px);

`;

function MarkdownOutput({value}:MarkdownOutputProps){
    return(
    
    <MarkdownOutputCss>
        <h1>{value}</h1>
    </MarkdownOutputCss>
    
    )
}

export default MarkdownOutput;
