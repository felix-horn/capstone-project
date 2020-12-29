import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders correctly', () => {
    const onClickMock = jest.fn()
    const { container } = renderWithRouter(<Header onClick={onClickMock} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = renderWithRouter(<Header onClick={onClickMock} />)
    const menuButton = getByTestId('menu-button')
    user.click(menuButton)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('links to correct href', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = renderWithRouter(<Header onClick={onClickMock} />)
    const backButton = getByTestId('back-button')
    user.click(backButton)
    expect(backButton).toHaveProperty('href', 'http://localhost/')
  })
})
