import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ButtonCircle from './ButtonCircle'

import MenuIcon from '@material-ui/icons/Menu'

ButtonNavigation.propTypes = {
  className: PropTypes.string,
}

export default function ButtonNavigation({ onClick, className }) {
  return (
    <ButtonCircle onClick={onClick} className={className}>
      <MenuIconAnimated className={className} />
    </ButtonCircle>
  )
}

const MenuIconAnimated = styled(MenuIcon)`
  position: relative !important;
  bottom: 0px !important;
  right: 0px !important;

  &.rotate-back {
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
