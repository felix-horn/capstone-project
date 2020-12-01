import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onToggleCheckbox: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default function ListItem({
  id,
  title,
  isChecked,
  onInputChange,
  onToggleCheckbox,
  onDelete,
  onEnter,
}) {
  const [isDeleteIconShown, setIsDeleteIconShown] = useState(false)
  let raceConditionTimer
  return (
    <ListItemStyled checked={isChecked} data-testid="list-item">
      <Checkbox
        type="checkbox"
        color="default"
        checked={isChecked}
        onChange={onToggleCheckbox}
        data-testid="checkbox"
      />
      <TitleStyled
        name={id}
        value={title}
        onChange={onInputChange}
        onKeyUp={(event) => event.key === 'Enter' && handleEnter(event)}
        onFocus={showDeleteIcon}
        onBlur={hideDeleteIcon}
        autoFocus={true}
        isCrossedOut={isChecked}
        data-testid="title-list-item"
      />
      {isDeleteIconShown && (
        <DeleteButtonStyled
          onClick={handleDelete}
          data-testid="delete-list-item"
        />
      )}
    </ListItemStyled>
  )

  function handleEnter(event) {
    event.target.blur()
    !isChecked && onEnter()
  }

  function showDeleteIcon() {
    setIsDeleteIconShown(true)
  }

  function hideDeleteIcon() {
    raceConditionTimer = setTimeout(() => setIsDeleteIconShown(false), 150)
    return () => clearTimeout(raceConditionTimer)
  }

  function handleDelete() {
    clearTimeout(raceConditionTimer)
    onDelete()
  }
}

const ListItemStyled = styled.label`
  width: 75vw;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.input`
  margin-left: 9px; */
  text-decoration: ${(props) => (props.isCrossedOut ? 'line-through' : 'none')};
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
