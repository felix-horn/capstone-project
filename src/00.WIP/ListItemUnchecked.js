import React from 'react'
// import { useState } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { InputBase, withStyles } from '@material-ui/core'

ListItemUnchecked.propTypes = {
  value: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool,
  // onCheckboxClick: PropTypes.func.isRequired,
}

function ListItemUnchecked({ value, handleCheckboxClick }) {
  return (
    <StyledFormControlLabel
      control={<Checkbox onChange={handleCheckboxClick} color="default" />}
      label={<InputBase value={value} />}
    />
  )
}

const StyledFormControlLabel = withStyles({
  root: {},
  control: {
    opacity: '50',
  },
  label: {
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    color: '#b2b2b2',
    fontSize: '1rem',
    fontWeight: 300,
    opacity: '50%',
  },
})(FormControlLabel)

export default ListItemUnchecked
