import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
// import styled from 'styled-components/macro'

AddListItemButton.propTypes = {
  // titleListItem: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool,
  // onCheckboxClick: PropTypes.func.isRequired,
}

function AddListItemButton() {
  return (
    <StyledButton onClick startIcon={<AddIcon />}>
      Listeneintrag
    </StyledButton>
  )
}

const StyledButton = withStyles({
  root: {},
  startIcon: {
    color: '#878889',
  },
  label: {
    textTransform: 'capitalize',
    color: '#b2b2b2',
    fontSize: '1rem',
    fontWeight: 300,
  },
})(Button)

/* const ButtonStyled = styled(Button)`
  text-transform: capitalize;
  color: #b2b2b2;
  font-size: 1rem;
  font-weight: 300;
` */

export default AddListItemButton
