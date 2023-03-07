import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import BuyModal from './buyModal';

describe('Card Tests', () => {
  afterEach(cleanup);
  it('should render card', () => {
    render(<BuyModal />);
    const text = screen.getByText(/Description/i);
    expect(text).toBeInTheDocument();
  });
  it('should navigate and close when click', async () => {
    const mock = jest.fn();
    render(<BuyModal cancel={mock} opensea_link={mock} />);
    const close = screen.getByTestId(/closeMe/i);
    const redirect = screen.getByTestId(/redirectMe/i);
    await fireEvent.click(close);
    await fireEvent.click(redirect);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
