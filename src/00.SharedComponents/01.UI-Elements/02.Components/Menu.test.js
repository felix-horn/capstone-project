/* eslint-disable no-undef */
import user from '@testing-library/user-event'
import Menu from './Menu'

describe('Menu', () => {
  it('renders correctly', () => {
    const deleteShopMock = jest.fn()
    const { container } = renderWithRouter(<Menu deleteShop={deleteShopMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function deleteShop', () => {
    const deleteShopMock = jest.fn()
    const { getByTestId } = renderWithRouter(
      <Menu deleteShop={deleteShopMock} />
    )
    const deleteButton = getByTestId('delete-button')
    user.click(deleteButton)
    expect(deleteShopMock).toHaveBeenCalledTimes(1)
  })

  it('links to correct href', () => {
    const deleteShopMock = jest.fn()
    const { getByTestId } = renderWithRouter(
      <Menu deleteShop={deleteShopMock} />
    )
    const deleteButton = getByTestId('delete-button')
    user.click(deleteButton)
    const href = deleteButton.href
    expect(href).toMatch('/')
  })
})
