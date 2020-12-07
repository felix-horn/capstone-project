import { render } from '@testing-library/react'
import ActionButton from './ActionButton'

describe('ActionButton', () => {
  it('renders correctly', () => {
    const { container } = render(<ActionButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
