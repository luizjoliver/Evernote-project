import React from "react"; 
import {Card,Section, Container,Column ,Title} from "rbx"
import Header from "../../../components/header"
import logoImage from "../../../assets/imgs/logo.png";
import '../../../styles/auth.scss';
import LoginForm from "../../../components/auth/loginForm";

const LoginScreen = () =>{
 return (
    <>
    <Header/>
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={logoImage} alt="logoImg" />
                    </Column>
                  </Column.Group>

                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} className="has-text-grey has-text-centered">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                  <LoginForm/>
                </Section>

              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
    </>
 )
}

export  default LoginScreen