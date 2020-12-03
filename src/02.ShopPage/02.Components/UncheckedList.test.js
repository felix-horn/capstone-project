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

const testProps = {
  changeTitle: jest.fn(),
  toggleIsChecked: jest.fn(),
  deleteListItem: jest.fn(),
  addListItem: jest.fn(),
  rearrangeListOrder: jest.fn(),
}

describe('UncheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <UncheckedList {...testProps} database={testDatabase} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('only renders unchecked listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <UncheckedList {...testProps} database={testDatabase} />
    )
    const milkListItem = getByDisplayValue(/milch/i)
    const butterListItem = queryByDisplayValue(/butter/i)
    expect(milkListItem).toBeInTheDocument()
    expect(butterListItem).not.toBeInTheDocument()
  })
})
