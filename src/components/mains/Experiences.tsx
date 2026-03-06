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

export default function Experiences() {
    return(
        <StyledMain>
            <h2> Experiences </h2>
            <ContentWrapper>
                <h3> Data Analytics Intern - Wells Fargo </h3>
                <ul>
                    <li>
                        Built machine learning pipelines to analyze prepayments in Agency MBS,
                        identifying key risk drivers that informed portfolio managers’ hedging and
                        risk management for a $400B fixed-income portfolio
                    </li>
                    <li>
                        Developed an automated reporting tool in Python to calculate daily metrics such as
                        Net Interest Income and Value at Risk, enabling faster, data-driven allocation decisions
                        for portfolio managers and traders
                    </li>
                    <li>
                        Designed interactive Power BI dashboards analyzing interest rate risk and macroeconomic
                        scenarios, supporting senior leadership in long-term portfolio planning and strategy
                    </li>
                </ul>

                <h3> Investment Research Intern - QuotedData </h3>
                <ul>
                    <li>
                        Created eight Bloomberg-based data visualizations for institutional clients including
                        BlackRock and Fidelity, analyzing performance trends of UK-listed investment trusts with
                        400M+ in assets
                    </li>
                    <li>
                        Synthesized market and financial data across 30+ investment trusts into client-ready
                        insights reports
                    </li>

                </ul>

                <h3> Project Management Intern - NYU Langone </h3>
                <ul>
                    <li>
                        Supported 25+ enterprise-wide digital transformation initiatives focused on improving
                        operational efficiency and patient care, contributing to their successful implementation
                        across corporate and hospital systems
                    </li>
                    <li>
                        Tracked project progress and prepared daily presentations, equipping leadership to make
                        informed adjustments
                    </li>
                </ul>
            </ContentWrapper>
        </StyledMain>
    );
}