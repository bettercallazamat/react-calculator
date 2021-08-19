import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Snapshot Home page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment(<Home />)).toMatchSnapshot();
  });
});
