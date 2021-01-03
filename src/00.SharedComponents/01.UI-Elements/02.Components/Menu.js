import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

Menu.propTypes = {
  deleteShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function Menu({ deleteShop, className }) {
  return (
    <LayoutWrapper className={className}>
      <NavDeleteButton
        onClick={deleteShop}
        exact
        to="/"
        data-testid="delete-button"
      >
        <DeleteForeverIcon />
        Liste unwiderruflich löschen
      </NavDeleteButton>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  box-shadow: var(--light-box-shadow);
  border-radius: 3px;
  background-color: var(--white);
  padding: 20px;
  display: grid;
  justify-items: start;
`

const NavDeleteButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--warning-red);
`
