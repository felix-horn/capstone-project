import { render } from '@testing-library/react'
import shallow from 'react-test-renderer/shallow'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import ShopCard from './ShopCard'

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

describe('ShopCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ShopCard shopId="x" database={testDatabase} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the correct shop title', () => {
    const { getByText } = render(
      <ShopCard shopId="x" database={testDatabase} />
    )
    const title = getByText('shopX')
    expect(title).toBeInTheDocument()
  })

  it('only renders allocated listItems', () => {
    const { getByText, queryByText } = render(
      <ShopCard shopId="x" database={testDatabase} />
    )
    const itemA = getByText('itemA')
    const itemB = queryByText('itemB')
    const itemC = queryByText('itemC')
    expect(itemA).toBeInTheDocument()
    expect(itemB).not.toBeInTheDocument()
    expect(itemC).not.toBeInTheDocument()
  })

  it('renders the correct summary text', () => {
    const { getByText } = render(
      <ShopCard shopId="x" database={testDatabase} />
    )
    const summaryText = getByText('und 1 abgehakter Eintrag')
    expect(summaryText).toBeInTheDocument()
  })

  fit('links to correct href', () => {
    const historyMock = { push: jest.fn() }
    const { getByTestId } = shallow(
      <ShopCard history={historyMock} shopId="x" database={testDatabase} />
    )

    const card = getByTestId('shop-card')
    console.log({ card })
    user.click(card)
    expect(historyMock.push.mock.calls[0]).toEqual([
      'http://localhost/shop',
      'x',
    ])
    // expect(card).toHaveProperty('href', 'http://localhost/shop')
  })
  /* fit('links to correct href', () => {
    const historyMock = { push: jest.fn() }
    const { getByTestId } = render(
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
    )
    const card = getByTestId('shop-card')
    user.click(card)
    expect(historyMock.push.mock.calls[0]).toEqual([
      'http://localhost/shop',
      'x',
    ])
    // expect(card).toHaveProperty('href', 'http://localhost/shop')
  }) */
})
