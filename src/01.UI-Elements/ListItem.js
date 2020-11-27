import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function ListItem({
  id,
  title,
  isChecked,
  handleChange,
  onToggle,
  onDelete,
  onEnter,
}) {
  const [isDeleteIconShown, setIsDeleteIconShown] = useState(false)

  return (
    <ListItemStyled checked={isChecked} data-testid="list-item">
      <Checkbox
        type="checkbox"
        color="default"
        checked={isChecked}
        onChange={onToggle}
        data-testid="checkbox"
      />
      <TitleStyled
        name={id}
        value={title}
        onChange={handleChange}
        onKeyUp={(e) => e.key === 'Enter' && onEnter()}
        onFocus={() => setIsDeleteIconShown(true)}
        onBlur={() => setTimeout(() => setIsDeleteIconShown(false), 100)}
        autoFocus={true}
        data-testid="title-list-item"
      />
      {isDeleteIconShown && (
        <DeleteButtonStyled onClick={onDelete} data-testid="delete-list-item" />
      )}
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
const TitleStyled = styled.input`
  margin-left: 9px;
  border: none;
  &:focus {
    outline: none;
  }
`
const DeleteButtonStyled = styled(CloseIcon)`
  margin-left: auto;
  transform: scale(0.9);
  opacity: 0.4;
`
