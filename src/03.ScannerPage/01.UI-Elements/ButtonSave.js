import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import SaveIcon from '@material-ui/icons/Save'

ButtonSave.propTypes = {
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonSave({ shopId, className }) {
  return (
    <ButtonSaveStyled
      to={{
        pathname: '/ShopPage',
        state: { shopId },
      }}
      className={className}
    >
      <SaveIcon />
      Speichern
    </ButtonSaveStyled>
  )
}

const ButtonSaveStyled = styled(NavLink)`
  box-shadow: var(--light-box-shadow);
  border-radius: 5px;
  border: none;
  background-color: var(--CTA-blue);
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white) !important;
  text-decoration: none;
`
