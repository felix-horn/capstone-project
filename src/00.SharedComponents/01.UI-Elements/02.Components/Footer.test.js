import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Footer from './Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <Footer onClick={onClickMock} stateButtonUndo="active" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Footer onClick={onClickMock} stateButtonUndo="active" />
    )
    const undoButton = getByTestId('undo-button')
    user.click(undoButton)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  xit('displays the undo button correctly', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Footer onClick={onClickMock} stateButtonUndo="inactive" />
    )
    const undoButton = getByTestId('undo-button')
    // only provides "currentColor" - probably because it's a nested Material UI Icon
    expect(undoButton.fill).toBe('var(--dark-gray)')
  })
})
