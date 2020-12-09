import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuWrapped from './MenuWrapped'

describe('MenuWrapped', () => {
  it('renders correctly', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { container } = render(
      <Router>
        <MenuWrapped toggleMenu={toggleMenuMock} deleteShop={deleteShopMock} />
      </Router>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function deleteShop', () => {
    const toggleMenuMock = jest.fn()
    const deleteShopMock = jest.fn()
    const { getByTestId } = render(
      <Router>
        <MenuWrapped toggleMenu={toggleMenuMock} deleteShop={deleteShopMock} />
      </Router>
    )
    const background = getByTestId('background')
    user.click(background)
    expect(toggleMenuMock).toHaveBeenCalledTimes(1)
  })
})
