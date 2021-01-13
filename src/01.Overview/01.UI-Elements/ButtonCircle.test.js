import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonCircle from './ButtonCircle'
import AddShopIcon from '@material-ui/icons/PostAdd'

describe('ButtonCircle', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ButtonCircle>
        <AddShopIcon />
      </ButtonCircle>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonCircle onClick={onClickMock}>
        <AddShopIcon />
      </ButtonCircle>
    )
    const button = getByTestId('button')
    user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('displays the correct height for variant "small"', () => {
    const { getByTestId } = render(
      <ButtonCircle variant="small">
        <AddShopIcon />
      </ButtonCircle>
    )
    const button = getByTestId('button')
    const style = window.getComputedStyle(button)
    console.log(style)
    console.log(style.height)
    expect(style.height).toBe('40px')
  })

  xit('displays the correct color for variant "primary"', () => {
    const { getByTestId } = render(
      <ButtonCircle variant="primary">
        <AddShopIcon />
      </ButtonCircle>
    )
    const button = getByTestId('button')
    const style = window.getComputedStyle(button)
    console.log(style)
    //    backgroundColor is not available
    console.log(style.backgroundColor)
    expect(style.backgroundColor).toBe('var(--CTA-blu)')
    expect(button).toHaveStyle(`background: var(--CTA-blu)`)
  })
})
