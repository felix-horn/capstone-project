import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  // isChecked: PropTypes.bool,
  // onCheckboxClick: PropTypes.func.isRequired,
}

function ListItem({ titleListItem }) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxClick(e) {
    setIsChecked(e.target.checked)
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxClick}
          color="default"
        />
      }
      label={titleListItem}
    />
  )
}

/** @component */
export default ListItem
