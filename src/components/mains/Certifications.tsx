import styled from "styled-components";


const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 2rem;

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

    ul {
        padding-top: 1rem;
        margin-bottom: 1.5rem;
        padding-left: 1.2rem; 
    }

    li {
        line-height: 1.6; 
        margin-bottom: 0.6rem; 
    }
`;

export default function Certifications(){
    return (
        <StyledMain>
            <h2> Certifications </h2>
            <ContentWrapper>
                <ul>
                    <li>
                        Machine Learning Foundations - ECornell
                        <img src="/ecornell.jpg" alt="eCornell Logo"/>
                    </li>
                    <li>
                        Financial Services Cloud Data Modeling - Salesforce
                        <img src="/salesforce.jpg" alt="Salesforce Logo"/>
                    </li>
                    <li>
                        Intro to Machine Learning & Data Visualization - Kaggle
                        <img src="/kaggle.jpg" alt="Kaggle Logo"/>
                    </li>
                </ul>
            </ContentWrapper>
        </StyledMain>
    );
}