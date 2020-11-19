import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default function ListItem({ titleListItem, isChecked, onToggle }) {
  return (
    <ListItemStyled>
      <CheckboxStyled type="checkbox" checked={isChecked} onChange={onToggle} />
      <TitleStyled>{titleListItem}</TitleStyled>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  display: flex;
  align-items: center;
`
const CheckboxStyled = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
`
const TitleStyled = styled.span`
  margin-left: 10px;
`
