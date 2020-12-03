import { render } from '@testing-library/react'
import CheckedList from './CheckedList'

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

const testProps = {
  changeTitle: jest.fn(),
  toggleIsChecked: jest.fn(),
  deleteListItem: jest.fn(),
  addListItem: jest.fn(),
  rearrangeListOrder: jest.fn(),
}

describe('CheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <CheckedList {...testProps} database={testDatabase} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('only renders allocated listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <CheckedList {...testProps} database={testDatabase} />
    )
    const milkListItem = queryByDisplayValue(/milch/i)
    const butterListItem = getByDisplayValue(/butter/i)
    expect(milkListItem).not.toBeInTheDocument()
    expect(butterListItem).toBeInTheDocument()
  })
})
