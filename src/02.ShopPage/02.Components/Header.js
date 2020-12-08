import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function Header({ onClick, className }) {
  return (
    <HeaderStyled className={className}>
      <BackButton exact to="/">
        <ArrowBackIcon />
      </BackButton>
      <MoreVertIconStyled onClick={onClick} />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  grid-template-columns: 60px auto 60px;
  box-shadow: var(--light-box-shadow);
`

const BackButton = styled(NavLink)`
  margin-top: 2px;
  color: var(--dark-gray);
`

const MoreVertIconStyled = styled(MoreVertIcon)`
  grid-column: 3;
  color: var(--dark-gray);
`
