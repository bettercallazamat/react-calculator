import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('rendered Home page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment(<Quote />)).toMatchSnapshot();
  });
});
