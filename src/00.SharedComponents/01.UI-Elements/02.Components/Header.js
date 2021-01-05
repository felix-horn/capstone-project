import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  return (
    <LayoutWrapper className={className}>
      <BackButton onClick={navigateBack} data-testid="back-button">
        <ArrowBackIcon />
      </BackButton>
      {onClick && <MenuButton onClick={onClick} data-testid="menu-button" />}
    </LayoutWrapper>
  )
  function navigateBack() {
    history.replace(shopId ? { pathname: '/shop', state: { shopId } } : '/')
  }
}

const LayoutWrapper = styled.div`
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  grid-template-columns: 60px auto 60px;
  box-shadow: var(--light-box-shadow);
`

const BackButton = styled.div`
  grid-column: 1;
  margin-top: 2px;
  color: var(--dark-gray);
`

const MenuButton = styled(MoreVertIcon)`
  grid-column: 3;
  color: var(--dark-gray);
`
