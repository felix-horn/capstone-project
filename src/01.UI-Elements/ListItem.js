import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default function ListItem({ title, isChecked, onToggle }) {
  return (
    <ListItemStyled checked={isChecked}>
      <Checkbox
        type="checkbox"
        color="default"
        checked={isChecked}
        onChange={onToggle}
      />
      <TitleStyled>{title}</TitleStyled>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.span`
  margin-left: 9px;
`
