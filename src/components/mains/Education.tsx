import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    
    h2 {
        color: #360f5a;
        margin-bottom: 0.5rem;
        font-size: calc(1.5rem + 1vw);
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    
    h3 {
        margin: 1.5rem 0 0.5rem;
        font-size: calc(1.2rem + 0.5vw);
    }
    p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    ul {
        margin-bottom: 1rem;
        padding-left: 1.2rem;
    }
    li {
        line-height: 1.4;
        margin-bottom: 0.3rem;
    }
`;

export default function Education(){
    return (
        <StyledMain>
            <h2> Education </h2>
            <ContentWrapper>
                <h3> Boston University, Questrom School of Business </h3>
                <ul>
                    <li>B.S. in Business Administration, Concentration in Finance, Minor in CS</li>
                    <li>Boston, MA | September 2023 - May 2026</li>
                    <li>Dean's List Spring 2024-Fall 2025</li>

                </ul>
                <img src="../../../public/bu.jpg" alt="Boston University Logo"/>
                <h3> Rutgers University, Rutgers Business School </h3>
                <ul>
                    <li>B.S. Major in Finance, Minor in CS</li>
                    <li>New Brunswick, NJ | September 2022 - May 2023</li>
                </ul>
                <img src="../../../public/rutgers.jpg" alt="Rutgers University Logo"/>
            </ContentWrapper>
        </StyledMain>
    );
}