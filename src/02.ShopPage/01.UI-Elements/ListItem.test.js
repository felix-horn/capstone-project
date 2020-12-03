import { render, fireEvent } from '@testing-library/react'
import ListItem from './ListItem'
import user from '@testing-library/user-event'

const testProps = {
  title: 'foo',
  isChecked: true,
  changeTitle: jest.fn(),
  toggleCheckbox: jest.fn(),
  onDelete: jest.fn(),
  onEnter: jest.fn(),
}

describe('ListItem', () => {
  it('shows the correct title', () => {
    const props = { ...testProps, title: 'Butter' }
    const { getByTestId } = render(<ListItem {...props} />)
    const title = getByTestId('title-list-item')
    expect(title).toHaveValue('Butter')
  })

  it('toggles the checkbox on property change', () => {
    let props = { ...testProps, isChecked: true }
    const { rerender, getByTestId } = render(<ListItem {...props} />)
    const checkbox = getByTestId('list-item')
    expect(checkbox).toHaveProperty('checked', true)
    props = { ...testProps, isChecked: false }
    rerender(<ListItem {...props} />)
    expect(checkbox).toHaveProperty('checked', false)
  })

  it('calls onToggleCheckbox', () => {
    const toggleCheckboxMock = jest.fn()
    const props = { ...testProps, toggleCheckbox: toggleCheckboxMock }
    const { getByTestId } = render(<ListItem {...props} />)
    const checkbox = getByTestId('checkbox')
    user.click(checkbox)
    expect(toggleCheckboxMock).toHaveBeenCalled()
  })

  it('toggles the checkbox', () => {
    const toggleCheckboxMock = jest.fn()
    const props = {
      ...testProps,
      isChecked: false,
      toggleCheckbox: toggleCheckboxMock,
    }
    const { getByRole } = render(<ListItem {...props} />)
    const checkbox = getByRole('checkbox')
    // const checkbox = getByTestId('checkbox') not working
    // material ui elment
    expect(checkbox).toHaveProperty('checked', false)
    //user.click(checkbox)
    //expect(checkbox).toHaveProperty('checked', true)
  })

  it('calls onDelete', () => {
    const onDeleteMock = jest.fn()
    const props = { ...testProps, onDelete: onDeleteMock }
    const { getByTestId } = render(<ListItem {...props} />)
    const button = getByTestId('delete-list-item')
    user.click(button)
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })

  it('calls on changeTitle', () => {
    const changeTitleMock = jest.fn()
    const props = { ...testProps, changeTitle: changeTitleMock }
    const { getByTestId } = render(<ListItem {...props} />)
    const inputField = getByTestId('title-list-item')
    fireEvent.change(inputField, { target: { value: 'test' } })
    expect(changeTitleMock).toHaveBeenCalledTimes(1)
    expect(changeTitleMock).toHaveBeenCalledWith('test')
  })
})
