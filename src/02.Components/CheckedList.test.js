import { render } from '@testing-library/react'
import CheckedList from './CheckedList'

describe('CheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <CheckedList
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
      <CheckedList
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
    const milkListItem = queryByDisplayValue(/milk/i)
    const cheeseListItem = getByDisplayValue(/cheese/i)
    expect(milkListItem).not.toBeInTheDocument()
    expect(cheeseListItem).toBeInTheDocument()
  })
})
