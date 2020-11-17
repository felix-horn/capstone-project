import { render } from '@testing-library/react'

import ListItem from './ListItem'

describe('ListItem', () => {
  it('shows the right item title', () => {
    const { container } = render(<ListItem titleListItem="Milk" checked />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
