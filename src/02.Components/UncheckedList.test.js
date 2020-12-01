import { render } from '@testing-library/react'
import UncheckedList from './UncheckedList'

describe('UncheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <UncheckedList
        list={{
          allIds: ['a', 'b', 'c'],
          byId: {
            a: {
              id: 'a',
              title: 'friends',
              isChecked: false,
            },
            b: {
              id: 'b',
              title: 'family',
              isChecked: false,
            },
            c: {
              id: 'c',
              title: 'ReactJs',
              isChecked: true,
            },
          },
        }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('only renders allocated listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <UncheckedList
        list={{
          allIds: ['a', 'c'],
          byId: {
            a: {
              id: 'a',
              title: 'Milk',
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
    const milkListItem = getByDisplayValue(/milk/i)
    const cheeseListItem = queryByDisplayValue(/cheese/i)
    expect(milkListItem).toBeInTheDocument()
    expect(cheeseListItem).not.toBeInTheDocument()
  })
})
