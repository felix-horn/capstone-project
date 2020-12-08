import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import OverviewPage from './OverviewPage'

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

describe('OverviewPage', () => {
  it('renders correctly', () => {
    const addShopMock = jest.fn()
    const { container } = render(
      <Router>
        <OverviewPage database={testDatabase} addShop={addShopMock} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls on addShop', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <OverviewPage database={testDatabase} addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    expect(addShopMock).toHaveBeenCalledTimes(1)
  })

  it('links to correct href', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <OverviewPage database={testDatabase} addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    expect(button).toHaveProperty('href', 'http://localhost/ShopPage')
  })
})
