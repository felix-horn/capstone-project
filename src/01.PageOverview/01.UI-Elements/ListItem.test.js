import { render } from '@testing-library/react'
import ListItem from './ListItem'

describe('ListItem', () => {
  it('renders correctly', () => {
    const { container } = render(<ListItem title="foo" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows the correct title', () => {
    const { getByText } = render(<ListItem title="foo" />)
    const titleItem = getByText('foo')
    expect(titleItem).toBeInTheDocument()
  })
})
