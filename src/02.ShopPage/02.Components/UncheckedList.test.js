import { render } from '@testing-library/react'
import UncheckedList from './UncheckedList'

const testDatabase = {
  shops: {
    allIds: ['x', 'y', 'z'],
    byId: {
      x: {
        id: 'x',
        title: 'Penny',
        items: ['a', 'b'],
      },
      y: {
        id: 'y',
        title: 'Budni',
        items: ['c'],
      },
    },
  },
  items: {
    allIds: ['a', 'b', 'c'],
    byId: {
      a: {
        id: 'a',
        title: 'Milch',
        isChecked: false,
      },
      b: {
        id: 'b',
        title: 'Butter',
        isChecked: true,
      },
      c: {
        id: 'c',
        title: 'Shampoo',
        isChecked: false,
      },
    },
  },
}

describe('UncheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(<UncheckedList database={testDatabase} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  fit('only renders allocated listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <UncheckedList database={testDatabase} />
    )
    const milkListItem = getByDisplayValue(/milch/i)
    const cheeseListItem = queryByDisplayValue(/butter/i)
    expect(milkListItem).toBeInTheDocument()
    expect(cheeseListItem).not.toBeInTheDocument()
  })
})
