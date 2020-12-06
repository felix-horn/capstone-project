import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

Menu.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function Menu({
  toggleIsChecked,
  deleteListItem,
  addListItem,
  rearrangeListOrder,
}) {
  return (
    <MenuStyled>
      <DeleteEntry exact to="/">
        <DeleteForeverIcon />
        Liste Löschen
      </DeleteEntry>
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  box-shadow: var(--light-box-shadow);
  border-radius: 3px;
  background-color: var(--white);
  padding: 20px;
  display: grid;
  justify-items: start;
`

const DeleteEntry = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--dark-gray);
`
