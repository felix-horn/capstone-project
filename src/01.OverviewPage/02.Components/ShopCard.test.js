import { render } from '@testing-library/react'
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
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the correct shop title', () => {
    const { getByText } = render(
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
    )
    const title = getByText('shopX')
    expect(title).toBeInTheDocument()
  })

  it('only renders allocated listItems', () => {
    const { getByText, queryByText } = render(
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
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
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
    )
    const summaryText = getByText('und 1 abgehakter Eintrag')
    expect(summaryText).toBeInTheDocument()
  })

  it('links to correct href', () => {
    const { getByTestId } = render(
      <Router>
        <ShopCard shopId="x" database={testDatabase} />
      </Router>
    )
    const card = getByTestId('shop-card')
    user.click(card)
    expect(card).toHaveProperty('href', 'http://localhost/ShopPage')
  })
})
