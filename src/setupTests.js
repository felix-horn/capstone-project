// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-styled-components'

import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

global.renderWithRouter = (children) => {
  return render(<Router>{children}</Router>)
}
