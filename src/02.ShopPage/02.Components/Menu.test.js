import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from './Menu'

describe('Menu', () => {
  it('renders correctly', () => {
    const deleteShopMock = jest.fn()
    const { container } = render(
      <Router>
        <Menu deleteShop={deleteShopMock} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function deleteShop', () => {
    const deleteShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <Menu deleteShop={deleteShopMock} />
      </Router>
    )
    const deleteButton = getByTestId('delete-button')
    user.click(deleteButton)
    expect(deleteShopMock).toHaveBeenCalledTimes(1)
  })

  it('links to correct href', () => {
    const deleteShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <Menu deleteShop={deleteShopMock} />
      </Router>
    )
    const deleteButton = getByTestId('delete-button')
    user.click(deleteButton)
    expect(deleteButton).toHaveProperty('href', 'http://localhost/')
  })
})
