import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import ButtonAddShop from './ButtonAddShop'

describe('ButtonAddShop', () => {
  it('renders correctly', () => {
    const addShopMock = jest.fn()
    const { container } = render(
      <Router>
        <ButtonAddShop addShop={addShopMock} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function addShop', () => {
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <ButtonAddShop addShop={addShopMock} />
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
        <ButtonAddShop addShop={addShopMock} />
      </Router>
    )
    const button = getByTestId('action-button')
    user.click(button)
    expect(button).toHaveProperty('href', 'http://localhost/ShopPage')
  })
})
