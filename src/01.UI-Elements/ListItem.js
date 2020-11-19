import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default function ListItem({ title, isChecked, onToggle }) {
  return (
    <ListItemStyled>
      <CheckboxStyled type="checkbox" checked={isChecked} onChange={onToggle} />
      <TitleStyled>{title}</TitleStyled>
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
  margin-left: 9px;
`
