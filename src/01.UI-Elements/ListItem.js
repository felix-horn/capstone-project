import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function ListItem({ title, isChecked, onToggle, onDelete }) {
  return (
    <ListItemStyled checked={isChecked} data-testid="list-item">
      <Checkbox
        type="checkbox"
        color="default"
        checked={isChecked}
        onChange={onToggle}
        data-testid="checkbox"
      />
      <TitleStyled data-testid="title-list-item">{title}</TitleStyled>
      <DeleteButtonStyled onClick={onDelete} data-testid="delete-list-item" />
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  width: 80vw;
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.span`
  margin-left: 9px;
`
const DeleteButtonStyled = styled(CloseIcon)`
  margin-left: auto;
  transform: scale(0.9);
  opacity: 0.4;
`
