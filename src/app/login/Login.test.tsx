import { render, screen, renderHook, act, fireEvent} from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Login from "./page";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { useForm } from "../../hooks/useForm";
import { validateForm } from '../../validation/form';

const mockErrorMessage = validateForm({email: '', password: ''}, undefined);

beforeEach(() => {
  render(<Login />);
});

describe('PAGE [LOGIN] - UI COMPONENTS', () => {

  test('Should render the <AppName /> component', () => {
    const appName = screen.getByText('ONE. SAVED LIST');
    expect(appName).toBeDefined();
  });

  test('Should render the [Legend, Input(e-mail and password)]', () => {
    const legend = screen.getByText('LOGIN.');
    expect(legend).toBeDefined();

    const inputEmail = screen.getByLabelText('E-MAIL:');
    const inputPassword = screen.getByLabelText('PASSWORD:');

    expect(inputEmail).toBeDefined();
    expect(inputPassword).toBeDefined();
  });

  test('Should render button Login and LoginWithGoogle', () => {
    const buttonLogin = screen.getByRole('button', {name: 'LOGIN'});
    const buttonLoginGoogle = screen.getByRole('button', {name: 'LOGIN WITH GOOGLE'})

    expect(buttonLogin).toBeDefined();
    expect(buttonLoginGoogle).toBeDefined();
  });

  test('Should render a link that navigates to Register Page', () => {
    const link = screen.getByText('SIGN UP');
    expect(link).toBeDefined();
  });

  test('Should not the Loader component be defined', () => {
    const loader = screen.queryByTestId('loader');
    expect(loader).toBe(null)
  });
})

describe('PAGE [LOGIN] - UI EVENT', () => {

  test('Should render the user typed value into the input', async() => {
    const inputEmail = screen.getByLabelText('E-MAIL:');
    const inputPassword = screen.getByLabelText('PASSWORD:');

    await userEvent.type(inputEmail, 'nat@mail.com');
    await userEvent.type(inputPassword, '12345678');

    expect((inputEmail as HTMLInputElement).value).toBe('nat@mail.com')
    expect((inputPassword as HTMLInputElement).value).toBe('12345678');
  });

  test('Should set the user EMAIL into the useState', async() => {
    const { result } = renderHook(() => useState({user: {email: '', password: ''}}));

    const [userLogin, setLogin] = result.current;

    act(() => {
      setLogin({user: {...userLogin.user, email: 'nat@mail.com'}});
    })

    const userLoginUpdated = result.current[0];
    expect(userLoginUpdated.user.email).toBe('nat@mail.com');
  });

  test('Should set the user PASSWORD into the useState', async() => {

    const { result } = renderHook(() => useState({user: {email: 'nat@mail.com', password: ''}}));
    const [userLogin, setLogin] = result.current;;

    act(() => {
      setLogin({user: {...userLogin.user, password: '12345678'}});
    })

    const userLoginUpdated = result.current[0];
    expect(userLoginUpdated.user.password).toBe('12345678');
  });


  test('Should show a error message if the input is empty', async() => {
    const { result } = renderHook(() => useForm({email: '', password: ''}, { LOGIN: true })); 
  
    expect(result.current.error).toBe(undefined);
   
    await act(async() => {
      await result.current.onSubmit();
    });

    expect(result.current.error).toEqual(mockErrorMessage.responseValidationMessage);
  });

  test('Should submit the form values when the button submit is clicked', async() => {
    const form = screen.getByRole('form');
    const buttonLogin = screen.getByRole('button', {name: 'LOGIN'});

    await act(async() => {
      fireEvent.submit(buttonLogin)
    });

    expect(form).toBeDefined();
  });
});