import React from 'react';
import { render } from '@testing-library/react';
import Calc from '../pages/Calc';

describe('Snapshot Home page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calc />);
    expect(asFragment(<Calc />)).toMatchSnapshot();
  });
});
