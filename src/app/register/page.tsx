'use client';
import Link from "next/link";
import AppName from "../components/AppName/AppName";
import { useState } from "react";
import Loader from "../components/Loader/Loader";
import { useForm } from '../../hooks/useForm';

const Register = () => {

  const [userRegister, setUserRegister] = useState({
    user: {
      name: '',
      email: '',
      password: ''
    }
  });

  const { error, loading, onSubmit } = useForm(userRegister.user, {REGISTER: true});

  return(
    <main className="default-page-layout _light">
      <AppName />

      <form className="default-form-component" role="form" onSubmit={async () => { await onSubmit(); }}>
        <legend>REGISTER.</legend>

        {loading && <Loader color="PURPLE" />}

        <fieldset>
          <label htmlFor="name-input">NAME:</label>
          <input 
            id="name-input" 
            type="string" 
            required 
            placeholder="Type your name"
            onChange={(e) => { setUserRegister({user: {...userRegister.user, name: e.target.value}}); }}
          />
          {error && <span>{error.name}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="email-input">E-MAIL:</label>
          <input 
            id="email-input" 
            type="email" 
            required 
            placeholder="Type your email"
            onChange={(e) => { setUserRegister({user: {...userRegister.user, email: e.target.value}}); }}
          />
          {error && <span>{error.email}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="password-input">PASSWORD:</label>
          <input 
            id="password-input"
            type="password" 
            required 
            placeholder="Type your password"
            onChange={(e) => { setUserRegister({user: {...userRegister.user, password: e.target.value}}); }}
          />
          {error && <span>{error.password}</span>}
        </fieldset>

        <button type="submit" className="default-button-component">
          REGISTER
        </button>

        <span className="txt-or">OR</span>

        <button className="default-button-component _google" onClick={async () => { await onSubmit(true); }}>
          REGISTER WITH GOOGLE
        </button>

        <span className="form-link-message">
            ALREADY HAVE AN ACCOUNT?{' '}
          <Link href="/login" aria-label="Navigate to login page">
            SIGN IN
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Register;