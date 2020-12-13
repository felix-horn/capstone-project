import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import SaveIcon from '@material-ui/icons/Save'
import StorageIcon from '@material-ui/icons/Storage'

ButtonBack.propTypes = {
  shopId: PropTypes.string.isRequired,
  className: PropTypes.string,
  isBarcodeInDatabase: PropTypes.bool,
}

export default function ButtonBack({ shopId, isBarcodeInDatabase, className }) {
  const location = shopId ? { pathname: '/ShopPage', state: { shopId } } : '/'
  return (
    <ButtonBackStyled exact to={location} className={className}>
      {shopId && (
        <>
          <SaveIcon />
          <span>Speichern</span>
        </>
      )}
      {isBarcodeInDatabase && (
        <>
          <StorageIcon />
          <span>zurück zur Übersicht</span>
        </>
      )}
      {!isBarcodeInDatabase && (
        <>
          <StorageIcon />
          <span>Barcod über Übersicht hinzufügen</span>
        </>
      )}
    </ButtonBackStyled>
  )
}

const ButtonBackStyled = styled(NavLink)`
  border-radius: 5px;
  border: none;

  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  text-decoration: none;
`
