import { render } from '@testing-library/react'
import CheckedList from './CheckedList'

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

describe('CheckedList', () => {
  it('renders the list correctly', () => {
    const { container } = render(<CheckedList {...testProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('only renders listItems of its shop', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <CheckedList {...testProps} shopId={'x'} database={testDatabase} />
    )
    const itemB = getByDisplayValue(/itemB/i)
    const itemC = queryByDisplayValue(/itemC/i)
    expect(itemB).toBeInTheDocument()
    expect(itemC).not.toBeInTheDocument()
  })

  it('only renders checked listItems', () => {
    const { queryByDisplayValue, getByDisplayValue } = render(
      <CheckedList {...testProps} database={testDatabase} />
    )
    const itemA = queryByDisplayValue(/itemA/i)
    const itemB = getByDisplayValue(/itemB/i)
    expect(itemA).not.toBeInTheDocument()
    expect(itemB).toBeInTheDocument()
  })
})
