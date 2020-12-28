import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import PageOverview from './PageOverview'

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

/* export as global helper function */

function renderWithRouter(children) {
  return render(<Router>{children}</Router>)
}

describe('PageOverview', () => {
  it('renders correctly', () => {
    const addShopMock = jest.fn()
    const { container } = renderWithRouter(
      <PageOverview database={testDatabase} addShop={addShopMock} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls on addShop', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <PageOverview database={testDatabase} addShop={addShopMock} />
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
        <PageOverview database={testDatabase} addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    const href = button.href
    expect(href).toMatch('/shop')
  })
})
