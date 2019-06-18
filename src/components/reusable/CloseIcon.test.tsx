import React from 'react'
import { render } from '@testing-library/react'
import CloseIcon from './CloseIcon'

describe('CloseIcon', () => {
  test('should render correctly', () => {
    const {container} = render(<CloseIcon />)

    expect(container.firstChild).toMatchSnapshot()
  });
});
