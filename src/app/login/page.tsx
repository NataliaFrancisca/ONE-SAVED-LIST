'use client';
import Link from "next/link";
import AppName from "../components/AppName/AppName";
import { useState } from "react";
import Loader from "../components/Loader/Loader";
import { useForm } from '../../hooks/useForm';

const Login = () => {

  const [userLogin, setUserLogin] = useState({
    user: {
      email: '',
      password: ''
    }
  });

  const { error, loading, onSubmit } = useForm(userLogin.user, {LOGIN: true});

  return(
    <main className="default-page-layout _light">
      <AppName />

      <form className="default-form-component" role='form' onSubmit={async () => { await onSubmit(); }}>
        <legend>LOGIN.</legend>

        {loading && <Loader color="PURPLE" />}

        <fieldset>
          <label htmlFor="email-input">E-MAIL:</label>
          <input 
            id="email-input" 
            type="email" 
            required 
            placeholder="Type your email"
            onChange={(e) => { setUserLogin({user: {...userLogin.user, email: e.target.value}}); }}
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
            onChange={(e) => { setUserLogin({user: {...userLogin.user, password: e.target.value}}); }}
          />
          {error && <span>{error.password}</span>}
        </fieldset>

        <button type="submit" className="default-button-component">
          LOGIN
        </button>

        <span className="txt-or">OR</span>

        <button className="default-button-component _google" onClick={async () => { await onSubmit(true); }}>
          LOGIN WITH GOOGLE
        </button>

        <span className="form-link-message">
            NEW HERE?{' '}
          <Link href="/register" aria-label="Navigate to register page">
            SIGN UP
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Login;