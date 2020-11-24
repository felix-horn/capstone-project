import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import UndoButton from './UndoButton'

describe('UndoButton', () => {
  it('calls function on click', () => {
    const handleClickMock = jest.fn()

    const { getByTestId } = render(<UndoButton onClick={handleClickMock} />)

    const button = getByTestId('UndoButton')

    user.click(button)

    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})
