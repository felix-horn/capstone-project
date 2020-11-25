import { render } from '@testing-library/react'
import ListItem from './ListItem'
import user from '@testing-library/user-event'

describe('ListItem', () => {
  it('shows the correct title', () => {
    const { getByText } = render(<ListItem title="Butter" />)

    expect(getByText('Butter')).toBeInTheDocument()
  })

  it('toggles the checkbox by property change', () => {
    const onToggleMock = jest.fn()
    const onDeleteMock = jest.fn()
    const { rerender, getByLabelText } = render(
      <ListItem
        isChecked={true}
        title="Milk"
        onToggle={onToggleMock}
        onDelete={onDeleteMock}
      />
    )
    const checkbox = getByLabelText('Milk')
    expect(checkbox).toHaveProperty('checked', true)

    rerender(
      <ListItem isChecked={false} title="Milk" onToggle={onToggleMock} />
    )
    expect(checkbox).toHaveProperty('checked', false)
  })

  it('calls onToggle', () => {
    const onToggleMock = jest.fn()
    const onDeleteMock = jest.fn()
    const { getByText } = render(
      <ListItem
        onToggle={onToggleMock}
        title="Bread"
        isChecked
        onDelete={onDeleteMock}
      />
    )

    const listItem = getByText('Bread')
    user.click(listItem)

    expect(onToggleMock).toHaveBeenCalled()
  })

  it('toggles the checkbox', () => {
    const onToggleMock = jest.fn()
    const onDeleteMock = jest.fn()
    const { getByLabelText } = render(
      <ListItem title="Milk" onToggle={onToggleMock} onDelete={onDeleteMock} />
    )
    const checkbox = getByLabelText('Milk')
    expect(checkbox).toHaveProperty('checked', false)

    user.click(checkbox)

    expect(checkbox).toHaveProperty('checked', true)
  })
  it('calls onDelete', () => {
    const onToggleMock = jest.fn()
    const onDeleteMock = jest.fn()
    const { getByTestId } = render(
      <ListItem
        onToggle={onToggleMock}
        title="Bread"
        isChecked
        onDelete={onDeleteMock}
      />
    )

    const button = getByTestId('delete-list-item')
    user.click(button)

    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })
})
