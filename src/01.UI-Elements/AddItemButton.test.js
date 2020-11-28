import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import AddItemButton from './AddItemButton'

describe('AddItemButton', () => {
  it('calls function on click', () => {
    const handleClickMock = jest.fn()
    const { getByTestId } = render(<AddItemButton onClick={handleClickMock} />)
    const button = getByTestId('add-button')
    user.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})
