import React from "react";
import Header from "../../components/header";
import { Column,Section,Title,Container } from "rbx";
import presentationImg from "../../assets/imgs/presentation.png";
import "../../styles/home.scss"
import { Link } from "react-router-dom";

const HomeScreen = () =>{
    return(
        <>
        <Header/>
        <Section size="medium" className="home">
         <Container>
           <Column.Group>
             <Column size={5}>
                <Title size={2} spaced className="has-text-white">
  Create notes easily and access when you wants on the cloud
                </Title>
                <Title size={5} spaced className="has-text-light" subtitle>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br/><br/>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                </Title>
                <Link className="button is-outlined is-white is-large" >
                 <strong>Register for free Nowstrong</strong>
                </Link>
             </Column>
             <Column size={6} offset={1}>
             <img src={presentationImg} alt="imgPresentation" />
             </Column>
           </Column.Group>
         </Container>
        </Section>  
        
 
        </>
    )
}

export default HomeScreen