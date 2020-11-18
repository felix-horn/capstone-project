import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import InputForm from './InputForm'

describe('InputForm', () => {
  it('shows one input field', () => {
    const handleCreateListItem = jest.fn()

    const { getByPlaceholderText } = render(
      <InputForm onCreateListItem={handleCreateListItem} />
    )

    const inputField = getByPlaceholderText(/Listeneintrag/i)
    expect(inputField).toBeInTheDocument()

    user.type(inputField, 'Milk{enter}')

    expect(handleCreateListItem).toHaveBeenCalledTimes(1)
    expect(handleCreateListItem).toHaveBeenCalledWith('Milk')
    expect(inputField).toHaveValue('')
  })
})
