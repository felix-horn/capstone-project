import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import UndoButton from './UndoButton'

describe('UndoButton', () => {
  it('calls function on click', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(<UndoButton onClick={onClickMock} />)
    const button = getByTestId('undo-button')
    user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
