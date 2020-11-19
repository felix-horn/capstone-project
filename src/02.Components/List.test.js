import { render } from '@testing-library/react'
import List from './List'

describe('List', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <List
        list={{
          allIds: ['a', 'b', 'c'],
          byId: {
            a: {
              id: 'a',
              title: 'Milk',
              isChecked: false,
            },
            b: {
              id: 'b',
              title: 'Butter',
              isChecked: false,
            },
            c: {
              id: 'c',
              title: 'Cheese',
              isChecked: true,
            },
          },
        }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
