import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Header from './Header'

describe('Header', () => {
  it('renders correctly', () => {
    const onClickMock = jest.fn()
    const { container } = render(<Header onMenuClick={onClickMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onMenuClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(<Header onMenuClick={onClickMock} />)
    const menuButton = getByTestId('menu-button')
    user.click(menuButton)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
