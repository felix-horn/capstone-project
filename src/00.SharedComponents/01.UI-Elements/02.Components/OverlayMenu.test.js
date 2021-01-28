/* eslint-disable no-undef */
import user from '@testing-library/user-event'
import OverlayMenu from './OverlayMenu'

describe('OverlayMenu', () => {
  it('renders correctly', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { container } = renderWithRouter(
      <OverlayMenu toggleMenu={toggleMenuMock} deleteShop={deleteShopMock} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function deleteShop', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { getByTestId } = renderWithRouter(
      <OverlayMenu toggleMenu={toggleMenuMock} deleteShop={deleteShopMock} />
    )
    const deleteButton = getByTestId('delete-button')
    user.click(deleteButton)
    expect(deleteShopMock).toHaveBeenCalledTimes(1)
  })

  it('calls function toggleMenu', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { getByTestId } = renderWithRouter(
      <OverlayMenu toggleMenu={toggleMenuMock} deleteShop={deleteShopMock} />
    )
    const background = getByTestId('background')
    user.click(background)
    expect(toggleMenuMock).toHaveBeenCalledTimes(1)
  })
})
