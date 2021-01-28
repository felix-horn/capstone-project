import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonLabeledCircle from './ButtonLabeledCircle'
import AddShopIcon from '@material-ui/icons/PostAdd'

describe('ButtonLabeledCircle', () => {
  it('renders correctly', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <ButtonLabeledCircle onClick={onClickMock} title="button title">
        <AddShopIcon />
      </ButtonLabeledCircle>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('calls function onClick', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonLabeledCircle onClick={onClickMock} title="button title">
        <AddShopIcon />
      </ButtonLabeledCircle>
    )
    const button = getByTestId('labeled-circle-button')
    user.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('shows the correct button label', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonLabeledCircle onClick={onClickMock} title="button title">
        <AddShopIcon />
      </ButtonLabeledCircle>
    )
    const button = getByTestId('labeled-circle-button')
    expect(button.firstChild.textContent).toEqual('button title')
  })

  it('displays the correct height for variant "small"', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonLabeledCircle
        variant="small"
        onClick={onClickMock}
        title="button title"
      >
        <AddShopIcon />
      </ButtonLabeledCircle>
    )
    const button = getByTestId('button')
    const style = window.getComputedStyle(button)
    expect(style.height).toBe('40px')
  })

  xit('displays the correct color for variant "primary"', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonLabeledCircle
        variant="primary"
        onClick={onClickMock}
        title="button title"
      >
        <AddShopIcon />
      </ButtonLabeledCircle>
    )
    const button = getByTestId('button')
    // console.log(button.getComputedStyle)
    const style = window.getComputedStyle(button)
    //    backgroundColor is not available
    // console.log(style.backgroundColor)
    expect(style.backgroundColor).toBe('var(--CTA-blu)')
    // expect(button).toHaveStyle(`background: var(--CTA-blu)`)
  })
})
