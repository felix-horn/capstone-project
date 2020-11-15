import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components/macro'
import InputAdornment from '@material-ui/core/InputAdornment'

InputField.propTypes = {
  // titleListItem: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool,
  // onCheckboxClick: PropTypes.func.isRequired,
}

function InputField() {
  return (
    <InputBase
      placeholder="Listeneintrag"
      startAdornment={
        <InputAdornment position="start">
          <AddIcon />
        </InputAdornment>
      }
    />
  )
}

const useStyles = makeStyles({
  root: {},
})

/** @component */
export default InputField
