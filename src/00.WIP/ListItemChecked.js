import React from 'react'
// import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import { InputBase } from '@material-ui/core'

ListItemChecked.propTypes = {
  value: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool,
  // onCheckboxClick: PropTypes.func.isRequired,
}

function ListItemChecked({ value, handleCheckboxClick }) {
  return (
    <ListItemCheckedStyled
      control={
        <Checkbox checked onChange={handleCheckboxClick} color="default" />
      }
      label={<InputBase value={value} />}
    />
  )
}

const ListItemCheckedStyled = styled(ListItemChecked)`
  text-decoration: strike-line-through;
`

export default ListItemChecked
