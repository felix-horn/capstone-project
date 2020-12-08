import { render } from '@testing-library/react'
import UncheckedList from './UncheckedList'

const testDatabase = {
  shops: {
    allIds: ['x', 'y'],
    byId: {
      x: {
        id: 'x',
        title: 'shopX',
        items: ['a', 'b'],
      },
      y: {
        id: 'y',
        title: 'shopY',
        items: ['c'],
      },
    },
  },
  items: {
    allIds: ['a', 'b', 'c'],
    byId: {
      a: {
        id: 'a',
        title: 'itemA',
        isChecked: false,
      },
      b: {
        id: 'b',
        title: 'itemB',
        isChecked: true,
      },
      c: {
        id: 'c',
        title: 'itemC',
        isChecked: false,
      },
    },
  },
}

const testProps = {
  shopId: 'x',
  database: testDatabase,
  changeTitle: jest.fn(),
  toggleIsChecked: jest.fn(),
  deleteListItem: jest.fn(),
  addListItem: jest.fn(),
  rearrangeListOrder: jest.fn(),
}

describe('UncheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(<UncheckedList {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('only renders listItems of its shop', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <UncheckedList {...testProps} shopId={'x'} database={testDatabase} />
    )
    const itemA = getByDisplayValue(/itemA/i)
    const itemC = queryByDisplayValue(/itemC/i)
    expect(itemA).toBeInTheDocument()
    expect(itemC).not.toBeInTheDocument()
  })

  it('only renders unchecked listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <UncheckedList {...testProps} database={testDatabase} />
    )
    const itemA = getByDisplayValue(/itemA/i)
    const itemB = queryByDisplayValue(/itemB/i)
    expect(itemA).toBeInTheDocument()
    expect(itemB).not.toBeInTheDocument()
  })
})
