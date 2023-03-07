import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import TokenCard from '.';

describe('Card Tests', () => {
  afterEach(cleanup);
  it('should render card', () => {
    render(<TokenCard />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });
  it('should navigate when click', async () => {
    const nav = jest.fn();
    render(<TokenCard onClick={nav} />);
    const button = screen.getByTestId(/navigate/i);
    await fireEvent.click(button);
    expect(nav).toBeCalled();
  });
});
