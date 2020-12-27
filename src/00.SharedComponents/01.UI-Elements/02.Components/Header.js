import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'

Header.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  shopId: PropTypes.string,
}

export default function Header({ onClick, shopId, className }) {
  const location = shopId ? { pathname: '/shop', state: { shopId } } : '/'
  return (
    <HeaderLayout className={className}>
      <BackButton exact to={location} data-testid="back-button">
        <ArrowBackIcon />
      </BackButton>
      {onClick && <MenuButton onClick={onClick} data-testid="menu-button" />}
    </HeaderLayout>
  )
}

const HeaderLayout = styled.div`
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  grid-template-columns: 60px auto 60px;
  box-shadow: var(--light-box-shadow);
`

const BackButton = styled(NavLink)`
  grid-column: 1;
  margin-top: 2px;
  color: var(--dark-gray);
`

const MenuButton = styled(MoreVertIcon)`
  grid-column: 3;
  color: var(--dark-gray);
`
