import {Link} from "react-router";
import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h2 {
        color: #360f5a; 
        margin-bottom: 1.5rem;
        font-size: calc(1.5rem + 1vw);
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px; 
    margin: 0 auto;

    img {
        display: block;
        margin: 0 auto 2rem;
        width: calc(200px + 10vw);
        max-width: 400px;
        min-width: 150px;

        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h3 {
        margin: 1rem 0;
        font-size: calc(1.2rem + 0.5vw);
    }

    p {
        line-height: 1.6; 
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
`;


export default function Home(){
   return (
       <StyledMain>
           <h2> Home </h2>
           <ContentWrapper>
               <img src="../../../public/headshot.jpg" alt="Kimaya Jadhav"/>
               <h3> Welcome to my website! </h3>
               <p>
                   My name is Kimaya Jadhav, I'm a senior at Boston University studying Finance
                   and Computer Science. I hope to pursue a full time career in the investments space,
                   particularly as a quantitative researcher. I'm passionate about blending financial concepts
                   with statistics and programming.
               </p>
               <br/>

               <p>
                   Welcome to my site! You can see some of my career
                   <strong><em><u><Link to = {`/experiences/experiences.html`}> Experiences </Link></u></em></strong>
                   alongside my
                   <strong><em><u><Link to = {`/education/education.html`} > Educational </Link></u></em></strong>
                   journey and some interesting
                   <strong><em><u><Link to = {`/projects/projects.html`} > Projects </Link></u></em></strong>
                   I've worked on.
               </p>
           </ContentWrapper>
       </StyledMain>
   );
}