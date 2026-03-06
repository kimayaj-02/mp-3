import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #908fc2;
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        color: #1a1a1a; 
        font-size: 0.9rem;
        font-weight: bold;
    }
`;

const StyledLink = styled(Link)`
    color: #360f5a; 
    font-weight: bold;
    border-bottom: 1px solid transparent;
    
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>
                All Rights Reserved by Kimaya Jadhav
                <StyledLink to={``}> Credits</StyledLink> &#169; </p>
            <div id="time-date"></div>
        </StyledFooter>
    );
}