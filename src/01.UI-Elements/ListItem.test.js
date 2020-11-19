import { render } from '@testing-library/react'
import ListItem from './ListItem'
import user from '@testing-library/user-event'

describe('ListItem', () => {
  it('shows the correct title', () => {
    const { getByText } = render(<ListItem titleListItem="Butter" />)

    expect(getByText('Butter')).toBeInTheDocument()
  })

  it('toggles the checkbox', () => {
    const onToggleMock = jest.fn()
    const { rerender, getByLabelText } = render(
      <ListItem isChecked={true} titleListItem="Milk" onToggle={onToggleMock} />
    )
    const listItem = getByLabelText('Milk')
    expect(listItem).toHaveProperty('checked', true)

    rerender(
      <ListItem
        isChecked={false}
        titleListItem="Milk"
        onToggle={onToggleMock}
      />
    )
    expect(listItem).toHaveProperty('checked', false)
  })

  it('calls onToggle', () => {
    const onToggleMock = jest.fn()
    const { getByText } = render(
      <ListItem onToggle={onToggleMock} titleListItem="Bread" isChecked />
    )

    const listItem = getByText('Bread')
    user.click(listItem)

    expect(onToggleMock).toHaveBeenCalled()
  })
})
