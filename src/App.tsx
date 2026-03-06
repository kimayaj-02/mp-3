import Footer from "./components/Footer.tsx";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Leadership from "./components/mains/Leadership.tsx";
import Projects from "./components/mains/Projects.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #EDEDED;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    
    img {
        width: 100%;
        max-width: 300px;  
        height: auto;
        display: flex;
        border-radius: 8px;
        padding: 2%;
    }
    main {
        width: 75%;
        display: flex;
        flex-direction: column;
        min-height: 80vh;
        padding: 4%;

        @media screen and (max-width: 1000px){
            width: 100%;
        }
    }
`

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px){
        flex-direction: column;
        font-size: calc(2px + 2vw);
    }
    
`
function Root(){
  return(
      <StyledWrapper>
          <Header/>
          <StyledContainer>
            <Nav/>
            <Routes>
                <Route
                    path={"/"}
                    element={<Home/>}
                />

                <Route
                    path={`/education/education.html`}
                    element={<Education/>}
                />

                <Route
                    path={`/experiences/experiences.html`}
                    element={<Experiences/>}
                />

                <Route
                    path={`/leadership/leadership.html`}
                    element={<Leadership/>}
                />

                <Route
                    path={`/projects/projects.html`}
                    element={<Projects/>}
                />

                <Route
                    path={`/certs/certs.html`}
                    element={<Certifications/>}
                />
            </Routes>
          </StyledContainer>
          <Footer/>
      </StyledWrapper>
  );
}

const router = createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App(){
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


