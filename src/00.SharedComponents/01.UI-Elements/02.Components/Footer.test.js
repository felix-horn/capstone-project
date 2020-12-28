import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import Footer from './Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <Footer onClick={onClickMock} visibilityButtonUndo="shown" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Footer onClick={onClickMock} visibilityButtonUndo="shown" />
    )
    const undoButton = getByTestId('undo-button')
    user.click(undoButton)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
