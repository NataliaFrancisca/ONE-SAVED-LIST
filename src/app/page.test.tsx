import { expect, test, describe, beforeAll, vi, } from 'vitest'
import { render, screen } from "@testing-library/react";
import { userEvent} from "@testing-library/user-event";
import React from 'react';
import Home from './page';
import mockRouter from 'next-router-mock';

beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
});

describe('HomePage component', () => {
  test('Should render the title', () => {
    render(<Home />);
    const title = screen.getByText('ONE. SAVED LIST');
    expect(title).toBeDefined();
  })

  test('Should render the illustration', () => {
    render(<Home />);
    const illustration = screen.getByRole('img');
    expect(illustration).toBeDefined();
  });

  test('Should render the button [GET STARTED]', () => {
    render(<Home />);
    const buttonNavigation = screen.getByRole('button');
    expect(buttonNavigation).toBeDefined();
  }); 

  test('Should the button be clicked and navigate to [Register] page', async() => {
    render(<Home />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(mockRouter).toMatchObject({ 
      asPath: "/register",
      pathname: "/register",
      query: {},
    });
  });
})

