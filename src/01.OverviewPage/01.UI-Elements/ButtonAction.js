import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import MenuIcon from '@material-ui/icons/Menu'

ButtonAction.propTypes = {
  className: PropTypes.string,
}

export default function ButtonAction({ onClick, className }) {
  return (
    <ButtonActionStyled onClick={onClick} className={className}>
      <MenuIconStyled className={className} />
    </ButtonActionStyled>
  )
}

const ButtonActionStyled = styled.div`
  box-shadow: var(--strong-box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--white);
  display: grid;
  place-items: center;
`
const MenuIconStyled = styled(MenuIcon)`
  position: relative !important;
  bottom: 0px !important;
  right: 0px !important;
  color: var(--CTA-blue);

  &.rotate {
    animation: 0.2s rotateBack ease-in-out;

    @keyframes rotateBack {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`
