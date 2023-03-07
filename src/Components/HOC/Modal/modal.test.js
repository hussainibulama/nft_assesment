import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Modal from '.';

describe('Modal Tests', () => {
  afterEach(cleanup);
  it('should render modal with chilren', () => {
    render(
      <Modal>
        <p>Hello</p>
      </Modal>,
    );
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });
});
