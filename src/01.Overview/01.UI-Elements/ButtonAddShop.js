import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import AddShopIcon from '@material-ui/icons/PostAdd'
import CircleButton from './CircleButton'

ButtonAddShop.propTypes = {
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonAddShop({ addShop, className }) {
  const newShopId = uuid()
  const history = useHistory()
  return (
    <ButtonLayout
      onClick={handleClick}
      className={className}
      data-testid="action-button"
    >
      Neues Geschäft hinzufügen
      <CircleButton className="small">
        <AddShopIcon />
      </CircleButton>
    </ButtonLayout>
  )
  function handleClick() {
    history.push({
      pathname: '/shop',
      state: { shopId: newShopId },
    })
    addShop(newShopId)
  }
}

const ButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;

  animation: 0.2s ease-in-out 0s 1 slideUp;

  @keyframes slideUp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
