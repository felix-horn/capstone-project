import { render } from '@testing-library/react'
import ListItem from './ListItem'
import user from '@testing-library/user-event'

describe('ListItem', () => {
  it('shows the correct title', () => {
    const { getByTestId } = render(<ListItem title="Butter" />)
    const title = getByTestId('title-list-item')
    expect(title).toHaveValue('Butter')
  })

  it('toggles the checkbox on property change', () => {
    const { rerender, getByTestId } = render(<ListItem isChecked={true} />)
    const checkbox = getByTestId('list-item')
    expect(checkbox).toHaveProperty('checked', true)
    rerender(<ListItem isChecked={false} />)
    expect(checkbox).toHaveProperty('checked', false)
  })

  it('calls onToggleCheckbox', () => {
    const onToggleCheckboxMock = jest.fn()
    const { getByTestId } = render(
      <ListItem onToggleCheckbox={onToggleCheckboxMock} />
    )
    const checkbox = getByTestId('checkbox')
    user.click(checkbox)
    expect(onToggleCheckboxMock).toHaveBeenCalled()
  })

  it('toggles the checkbox', () => {
    const onToggleCheckboxMock = jest.fn()
    const { getByRole } = render(
      <ListItem onToggleCheckbox={onToggleCheckboxMock} />
    )
    const checkbox = getByRole('checkbox')
    // const checkbox = getByTestId('checkbox') not working
    // material ui elment
    expect(checkbox).toHaveProperty('checked', false)
    user.click(checkbox)
    expect(checkbox).toHaveProperty('checked', true)
  })

  it('calls onDelete', () => {
    const onDeleteMock = jest.fn()
    const { getByTestId } = render(<ListItem onDelete={onDeleteMock} />)
    const button = getByTestId('delete-list-item')
    user.click(button)
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })

  xit('calls handleChange', () => {
    const onInputChangeMock = jest.fn()
    const { getByTestId, debug } = render(
      <ListItem onInputChange={onInputChangeMock} />
    )
    const inputField = getByTestId('title-list-item')
    //console.log({ inputField })
    //user.click(inputField)
    user.type(inputField, 'test')
    debug(inputField)
    expect(onInputChangeMock).toHaveBeenCalled()
    // expect(onInputChangeMock).toHaveBeenCalledTimes(1)
    // expect(onInputChangeMock).toHaveBeenCalledWith('t')
  })

  xit('shows typed in input', () => {
    const onInputChangeMock = jest.fn()
    const { getByTestId, debug } = render(
      <ListItem onInputChange={onInputChangeMock} />
    )
    const inputField = getByTestId('title-list-item')
    //console.log({ inputField })
    //user.click(inputField)
    user.type(inputField, 'test')
    debug(inputField)
    //expect(onInputChangeMock).toHaveBeenCalled()
    // expect(onInputChangeMock).toHaveBeenCalledTimes(1)
    // expect(onInputChangeMock).toHaveBeenCalledWith('t')
    //expect(inputField).toHaveValue('test')
  })

  xit('calls setIsDeleteIconShown', () => {
    const setIsDeleteIconShownMock = jest.fn()
    const { getByTestId } = render(
      <ListItem setIsDeleteIconShown={setIsDeleteIconShownMock} />
    )
    const inputField = getByTestId('title-list-item')
    console.log({ inputField })
    user.click(inputField)
    expect(setIsDeleteIconShownMock).toHaveBeenCalledTimes(1)
    expect(setIsDeleteIconShownMock).toHaveBeenCalledWith(true)
  })
})
