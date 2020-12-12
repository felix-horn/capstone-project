import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import PostAddIcon from '@material-ui/icons/PostAdd'

ButtonAddShop.propTypes = {
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonAddShop({ addShop, className }) {
  const newShopId = uuid()
  return (
    <ButtonAddShopStyled
      exact
      to={{
        pathname: '/ShopPage',
        state: { shopId: newShopId },
      }}
      onClick={() => addShop(newShopId)}
      className={className}
      data-testid="action-button"
    >
      Neues Geschäft hinzufügen
      <IconWrapperStyled>
        <PostAddIconStyled />
      </IconWrapperStyled>
    </ButtonAddShopStyled>
  )
}

const ButtonAddShopStyled = styled(NavLink)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;

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

const IconWrapperStyled = styled.div`
  box-shadow: var(--strong-box-shadow);
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background-color: var(--white);
  display: grid;
  place-items: center;
`

const PostAddIconStyled = styled(PostAddIcon)`
  color: var(--CTA-blue);
`
