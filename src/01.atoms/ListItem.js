import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onCheckboxClick: PropTypes.func.isRequired,
}
function ListItem({ titleListItem, isChecked, onCheckboxClick }) {
  return (
    <LabelStyled>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxClick}
      />
      <span>{titleListItem}</span>
    </LabelStyled>
  )
}

const LabelStyled = styled.label`
  display: block;
`

const Checkbox = styled.input`
  font-size: 1em;
`

/** @component */
export default ListItem
