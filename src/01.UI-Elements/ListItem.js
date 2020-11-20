import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default function ListItem({ title, isChecked, onToggle }) {
  return (
    <ListItemStyled checked={isChecked}>
      <CheckboxStyled
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
const CheckboxStyled = styled(Checkbox)`
  /* opacity: ${(props) => (props.checked ? 0.8 : 1)}; */
`
const TitleStyled = styled.span`
  margin-left: 9px;
`
