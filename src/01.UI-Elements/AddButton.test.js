import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import AddButton from './AddButton'

describe('AddButton', () => {
  it('calls function on click', () => {
    const handleClickMock = jest.fn()
    const { getByTestId } = render(<AddButton onClick={handleClickMock} />)
    const button = getByTestId('add-button')
    user.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})
