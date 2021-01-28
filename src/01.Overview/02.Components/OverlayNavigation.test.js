/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import OverlayNavigation from './OverlayNavigation'

describe('OverlayNavigation', () => {
  it('renders correctly', () => {
    const onBackgroundClickMock = jest.fn()
    const addShopMock = jest.fn()
    const { container } = render(
      <OverlayNavigation
        onBackgroundClick={onBackgroundClickMock}
        addShop={addShopMock}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onBackgroundClick', () => {
    const onBackgroundClickMock = jest.fn()
    const addShopMock = jest.fn()
    const { getByTestId } = render(
      <OverlayNavigation
        onBackgroundClick={onBackgroundClickMock}
        addShop={addShopMock}
      />
    )
    const background = getByTestId('opaque-background')
    user.click(background)
    expect(onBackgroundClickMock).toHaveBeenCalledTimes(1)
  })

  it('calls function addShop', () => {
    const onBackgroundClickMock = jest.fn()
    const addShopMock = jest.fn()
    const { getByTestId, getByText } = renderWithRouter(
      <OverlayNavigation
        onBackgroundClick={onBackgroundClickMock}
        addShop={addShopMock}
      />
    )
    // why cant the button be gotten by its own test ID?
    // probably because it already got one in general
    // but I wanna get that specific one by an ID
    // const button = getByTestId('button-add-shop')
    const button = getByText('Neues Geschäft hinzufügen')
    user.click(button)
    expect(addShopMock).toHaveBeenCalledTimes(1)
  })
})
