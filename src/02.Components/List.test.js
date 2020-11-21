import { render } from '@testing-library/react'
import List from './List'

describe('List', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <List
        listAllocation={['a', 'b']}
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
  it('only renders unchecked listItems', () => {
    const { queryByText } = render(
      <List
        listAllocation={['a']}
        list={{
          allIds: ['a', 'b'],
          byId: {
            a: {
              id: 'a',
              title: 'Milk',
              isChecked: false,
            },
            b: {
              id: 'b',
              title: 'Cheese',
              isChecked: true,
            },
          },
        }}
      />
    )
    const milkListItem = queryByText(/milk/i)
    const cheeseListItem = queryByText(/cheese/i)
    expect(milkListItem).toBeInTheDocument()
    expect(cheeseListItem).not.toBeInTheDocument()
  })
  it('only renders checked listItems', () => {
    const { queryByText } = render(
      <List
        listAllocation={['b']}
        list={{
          allIds: ['a', 'b'],
          byId: {
            a: {
              id: 'a',
              title: 'Milk',
              isChecked: false,
            },
            b: {
              id: 'b',
              title: 'Cheese',
              isChecked: true,
            },
          },
        }}
      />
    )
    const milkListItem = queryByText(/milk/i)
    const cheeseListItem = queryByText(/cheese/i)
    expect(milkListItem).not.toBeInTheDocument()
    expect(cheeseListItem).toBeInTheDocument()
  })
})
