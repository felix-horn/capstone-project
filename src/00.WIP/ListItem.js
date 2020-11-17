import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import { InputBase } from '@material-ui/core'

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool,
}

function ListItem({ value, handleCheckboxClick, isChecked }) {
  return (
    <StyledListItem>
      <Checkbox
        color="default"
        checked={isChecked}
        onChange={handleCheckboxClick}
      />

      <InputBase name={value} value={value} />
    </StyledListItem>
  )
}

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
`

export default ListItem
