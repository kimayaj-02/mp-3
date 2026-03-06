import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    width: 30%;
    background-color: #360f5a;
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;

    @media screen and (max-width: 1000px){
        flex-direction: row;

    }
`;

const StyledListItem=styled.li`
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    background-color: #908fc2;
    border: #908fc2 5px solid;
    border-radius: 20px;
    text-align: center;
    
    &:hover {
        background-color: transparent;
        border: #908fc2 5px solid;   
    }

    @media screen and (max-width: 1000px){
        width: 15%;
        margin: 1%;
        padding: 1%;
    }

`;

const StyledLink=styled(Link)`
    font:normal small-caps bold calc(2px + 2vw) "Fjalla One",  sans-serif;
    color: #0d0c40;
    text-decoration: none;

    ${StyledListItem}:hover & {
        color: white;
    }

    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1vw);
    }
`;


export default function Nav(){
    return (
        <StyledNav>
            <StyledList>
                    <StyledListItem>
                        <StyledLink to ="/">Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to ="/education/education.html">Education</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to ="/experiences/experiences.html">Experiences</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to ="/leadership/leadership.html">Leadership</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to ="/projects/projects.html">Projects</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to ="/certs/certs.html">Certifications</StyledLink>
                    </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}