import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import PostAddIcon from '@material-ui/icons/PostAdd'

ActionButton.propTypes = {
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ActionButton({ addShop, className }) {
  const newShopId = uuid()
  return (
    <ActionButtonStyled
      exact
      to={{
        pathname: '/ShopPage',
        state: { shopId: newShopId },
      }}
      onClick={() => addShop(newShopId)}
      className={className}
      data-testid="action-button"
    >
      <PostAddIconStyled />
    </ActionButtonStyled>
  )
}

const ActionButtonStyled = styled(NavLink)`
  box-shadow: var(--box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--white);
  opacity: 0.5;
  display: grid;
  place-items: center;
`
const PostAddIconStyled = styled(PostAddIcon)`
  color: var(--dark-gray);
`
