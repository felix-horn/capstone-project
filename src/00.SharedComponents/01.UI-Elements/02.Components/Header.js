import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'

Header.propTypes = {
  onMenuClick: PropTypes.func,
  shopId: PropTypes.string,
  className: PropTypes.string,
}

export default function Header({ onMenuClick, className }) {
  const history = useHistory()
  return (
    <LayoutWrapper className={className}>
      <BackButton onClick={navigateBack} data-testid="back-button" />
      {onMenuClick && (
        <MenuButton onClick={onMenuClick} data-testid="menu-button" />
      )}
    </LayoutWrapper>
  )
  function navigateBack() {
    history.goBack()
  }
}

const LayoutWrapper = styled.div`
  box-shadow: var(--light-box-shadow);
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  grid-template-columns: 60px auto 60px;
`

const BackButton = styled(ArrowBackIcon)`
  grid-column: 1;
  margin-top: 2px;
  color: var(--dark-gray);
`

const MenuButton = styled(MoreVertIcon)`
  grid-column: 3;
  color: var(--dark-gray);
`
