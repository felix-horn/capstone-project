import { render } from '@testing-library/react'
import ListItem from './ListItem'
import user from '@testing-library/user-event'

describe('ListItem', () => {
  it('shows the right item title', () => {
    const onToggleMock = jest.fn()
    const { rerender, getByLabelText } = render(
      <ListItem titleListItem="Milk" isChecked={true} onToggle={onToggleMock} />
    )
    expect(getByLabelText('Milk')).toHaveProperty('checked', true)
    rerender(
      <ListItem
        titleListItem="Milk"
        onToggle={onToggleMock}
        isChecked={false}
      />
    )
    expect(getByLabelText('Milk')).toHaveProperty('checked', false)
  })

  it('shows the correct title', () => {
    const { getByText } = render(<ListItem titleListItem="Foo" />)

    expect(getByText(/foo/i)).toBeInTheDocument()
  })

  it('calls onToggle', () => {
    const onToggleMock = jest.fn()
    const { getByText } = render(
      <ListItem titleListItem="Foo" isChecked onToggle={onToggleMock} />
    )
    user.click(getByText('Foo'))

    expect(onToggleMock).toHaveBeenCalled()
  })
})
