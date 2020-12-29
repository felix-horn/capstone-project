import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

global.renderWithRouter = (children) => {
  return render(<Router>{children}</Router>)
}
