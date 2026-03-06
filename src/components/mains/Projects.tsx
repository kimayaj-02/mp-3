import {useState} from "react";
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

const CalcContainer = styled.div`
    background-color:#d1d1d1;
    border: 5px solid #360f5a;
    border-radius: 15px;
    padding: 1.5rem;
    max-width: 320px;
    margin: 3rem auto;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    
    h3{
        color: #360f5a;
        margin-top: 0;
        margin-bottom: 1rem; 
    }
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    
    label {
        font-size: 0.9rem;
        font-weight: bold;
        color: #360f5a;
        text-align: left;
    }
    
    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }
`;

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    button {
        padding: 12px;
        background-color: #360f5a;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        
        &:hover { background-color: #908fc2; }
    }
    
`;

const ResultDisplay = styled.div<{ $isNegative: boolean }>`
    margin-top: 1.5rem;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.$isNegative ? "#d9534f" : "#360f5a"};
`;

export default function Projects(){
    const[input1, setInput1] = useState("");
    const[input2, setInput2] = useState("");
    const[output, setOutput] = useState(0);

    function doAdd(){
        setOutput(Number(input1) + Number(input2));
    }
    function doSubtract(){
        setOutput(Number(input1) - Number(input2));
    }
    function doMultiply(){
        setOutput(Number(input1) * Number(input2));
    }
    function doDivision(){
        setOutput(Number(input1) / Number(input2));
    }
    function doPower(){
        setOutput(Number(input1) ** Number(input2));
    }
    function clearOut(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }

    return(
        <StyledMain>
            <h2> Projects </h2>
            <ContentWrapper>
                <h3> Product Valuation & Investment Pitch </h3>
                <ul>
                    <li>
                        Led financial analysis for an 8-person team, directing valuation for an innovative
                        new home furniture product
                    </li>
                    <li>
                        Performed advanced quantitative modeling, including K-means clustering and multivariate
                        regression, on consumer research data to identify market segments and inform product
                        pricing and positioning strategies
                    </li>
                    <li>
                        Created a 20-page financial workbook and comprehensive business plan integrating cost
                        structure, pricing strategy, and market sizing; presented the plan as an investment pitch
                        to potential stakeholders
                    </li>
                </ul>

                <h3> Stock Price Forecasting Model </h3>
                <ul>
                    <li>
                        Implemented an LSTM-based predictive model in Python using 20+ years of Microsoft stock
                        data, achieving a validation mean absolute error of 4.21 to support investment analysis
                        and identify trading opportunities
                    </li>
                    <li>
                        Visualized model predictions against actual stock prices to benchmark accuracy and refine
                        forecasting approach
                    </li>

                </ul>
            </ContentWrapper>

            <CalcContainer>
                <h3>Calculator</h3>

                <InputGroup>
                    <label htmlFor="first-number">First Number: </label>
                    <input
                        id={`first-number`}
                        value={input1}
                        placeholder={`Enter a number`}
                        onChange = {(e)=> setInput1(e.target.value)}
                    />

                    <label htmlFor="second">Second Number: </label>
                    <input
                        id={`second-number`}
                        value={input2}
                        placeholder={`Enter a number`}
                        onChange = {(e)=> setInput2(e.target.value)}
                    />
                </InputGroup>

                <ButtonGrid>
                    <button onClick={doAdd}> +</button>
                    <button onClick={doSubtract}> -</button>
                    <button onClick={doMultiply}> *</button>
                    <button onClick={doDivision}> /</button>
                    <button onClick={doPower}> **</button>
                    <button onClick={clearOut}> Clear</button>
                </ButtonGrid>

                <ResultDisplay $isNegative={output < 0}>
                    {output}
                </ResultDisplay>

            </CalcContainer>
        </StyledMain>
    );
}