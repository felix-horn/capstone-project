import { render } from '@testing-library/react'
import ShopTitle from './ShopTitle'

describe('ShopTitle', () => {
  it('renders correctly', () => {
    const { container } = render(<ShopTitle title="foo" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows the correct title', () => {
    const { getByText } = render(<ShopTitle title="foo" />)
    const titleItem = getByText('foo')
    expect(titleItem).toBeInTheDocument()
  })
})
