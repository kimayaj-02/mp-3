import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #0d0c40;
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
    h1 {
        color: white;
        margin: 0;
        font-family: 'Fjalla One', sans-serif;
        font-size: calc(1.5rem + 0.5vw);
    }
    
    p {
        margin: 10px 0 0;
        font-family: 'Montserrat', sans-serif;
        font-size: calc(0.9rem + 0.3vw);
        font-weight: 300; 
    }
`;

export default function Header(){
    return(
        <StyledHeader>
            <h1>Kimaya's Resume</h1>
            <p>An online application showcasing Kimaya's career background</p>
        </StyledHeader>
    );
}