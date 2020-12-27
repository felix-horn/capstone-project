import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuWithOverlay from './MenuWithOverlay'

describe('MenuWithOverlay', () => {
  it('renders correctly', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { container } = render(
      <Router>
        <MenuWithOverlay
          toggleMenu={toggleMenuMock}
          deleteShop={deleteShopMock}
        />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function deleteShop', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <MenuWithOverlay
          toggleMenu={toggleMenuMock}
          deleteShop={deleteShopMock}
        />
      </Router>
    )
    const background = getByTestId('background')
    user.click(background)
    expect(toggleMenuMock).toHaveBeenCalledTimes(1)
  })
})
