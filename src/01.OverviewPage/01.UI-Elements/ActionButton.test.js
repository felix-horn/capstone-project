import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import ActionButton from './ActionButton'

describe('ActionButton', () => {
  it('renders correctly', () => {
    const addShopMock = jest.fn()
    const { container } = render(
      <Router>
        <ActionButton addShop={addShopMock} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function addShop', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <ActionButton addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    expect(addShopMock).toHaveBeenCalledTimes(1)
  })

  it('contains correct href', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <ActionButton addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    expect(button).toHaveProperty('href', 'http://localhost/ShopPage')
  })
})
