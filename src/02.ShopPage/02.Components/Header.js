import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreVertIcon from '@material-ui/icons/MoreVert'

Header.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function Header({
  toggleIsChecked,
  deleteListItem,
  addListItem,
  rearrangeListOrder,
}) {
  return (
    <HeaderStyled>
      <BackButton exact to="/">
        <ArrowBackIcon />
      </BackButton>
      <MoreVertIconStyled />
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
  color: var(--dark-gray);
  /* margin-left: 5px;
  margin-bottom: 30px;
  display: block;*/
`

const MoreVertIconStyled = styled(MoreVertIcon)`
  grid-column: 3;
  color: var(--dark-gray);
`
