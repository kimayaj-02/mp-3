import styled from "styled-components"

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
    
    h3 {
        margin: 1.5rem 0 0.2rem; 
        font-size: calc(1.1rem + 0.5vw);
        color: #360f5a;
    }

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

export default function Leadership() {
    return(
        <StyledMain>
            <h2> Leadership </h2>
            <ContentWrapper>
                <h3> AI/ML Tech Fellow - Breakthrough Tech</h3>
                <ul>
                    <li>
                        Selected from 4,000+ applicants to join a selective fellowship cohort providing advanced AI
                        and machine learning training alongside hands-on industry projects that apply ML solutions to
                        real-world business challenges
                    </li>
                    <li>
                        Building supervised machine learning models for business use cases, focusing on regression and
                        classification tasks with end-to-end pipelines in Python while completing a machine learning
                        foundations certification
                    </li>
                </ul>

                <h3>Executive Board Member - Girls Who Code BU</h3>
                <ul>
                    <li>
                        Direct the Bits Mentorship Program, managing a team of 8 facilitators to deliver virtual coding
                        workshops to 24 students, successfully increasing participation by 13% through targeted outreach
                        to local schools
                    </li>
                    <li>
                        Collaborate with an executive board of 10 to facilitate workshops, professional development, and
                        networking events for 30+ chapter members, promoting diversity and inclusion in business and
                        technology
                    </li>

                </ul>
            </ContentWrapper>
        </StyledMain>
    );
}