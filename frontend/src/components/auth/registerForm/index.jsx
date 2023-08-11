import React, { Fragment, useEffect, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import {useNavigate } from 'react-router-dom';
import userServices from '../../../services/users';

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

    if(redirectToLogin){
      return navigate("/login");
    }

    const handleSubmit = async(event) =>{
      event.preventDefault()
      try {
        const user = await userServices.register({name:name,email:email, password:password})
        setRedirectToLogin(true)
      } catch (error) {
          setError(true)
      }
    }
  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="name"
                  value = {name}
                  onChange={e => setName(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input 
                  type="email" 
                  required
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input 
                  type="password" 
                  required
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
     
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a  onClick={e => setRedirectToLogin(true)} 
                    className="button is-white has-text-custom-purple"
                    >Login or</a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>Register</Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            { error && <Help color="danger">Email or Password invalid</Help> }
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )
}

export default RegisterForm;