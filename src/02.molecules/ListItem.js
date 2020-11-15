import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onCheckboxClick: PropTypes.func.isRequired,
}
function ListItem({ titleListItem, isChecked, handleCheckboxClick }) {
  return (
    <LabelStyled>
      <CheckboxStyled
        color="default"
        checked={isChecked}
        onChange={handleCheckboxClick}
        value={titleListItem}
      />
      <span>{titleListItem}</span>
    </LabelStyled>
  )
}

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  font-family: 'roboto';
`

const CheckboxStyled = styled(Checkbox)`
  color: ${({ checked }) => (checked ? '#B2B2B2' : '#757575')};
  padding: 2px 22px;
`

/** @component */
export default ListItem
