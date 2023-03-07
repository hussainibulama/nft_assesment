import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import Home from '.';
import {BrowserRouter} from 'react-router-dom';

describe('Home Screen Unit Test', () => {
  afterEach(cleanup);

  it('should render Home Page', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const homePage = screen.getByTestId('Home_Page');
    expect(homePage).toBeInTheDocument();
  });
  it('should open modal', async () => {
    render(<Home openmodal={true} activemodal={0} />, {wrapper: BrowserRouter});
    const button = screen.queryAllByTestId(/navigate/i);
    await waitFor(async () => {
      await fireEvent.click(button[0]);
    });
    const text = screen.getByText(/Description/i);
    expect(text).toBeInTheDocument();
  });
  it('should close modal', async () => {
    render(<Home openmodal={true} activemodal={0} />, {
      wrapper: BrowserRouter,
    });
    const button = screen.queryAllByTestId(/navigate/i);
    await waitFor(async () => {
      await fireEvent.click(button[0]);
    });
    const close = screen.getByTestId(/closeMe/i);
    await waitFor(async () => {
      await fireEvent.click(close);
    });
    const text = screen.queryByText(/Description/i);
    expect(text).toBe(null);
  });
});
