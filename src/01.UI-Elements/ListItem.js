import { useEffect, useState } from 'react'
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
  onEnter: PropTypes.func.isRequired,
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
  const [isDeleteIconRendered, setIsDeleteIconRendered] = useState(false)

  useEffect(() => {
    let timeoutId
    if (isDeleteIconShown) {
      setIsDeleteIconRendered(true)
    } else {
      timeoutId = setTimeout(() => setIsDeleteIconRendered(false))
    }
    return () => clearTimeout(timeoutId)
  }, [isDeleteIconShown])

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
        onKeyUp={(e) => e.key === 'Enter' && handleEnter(e)}
        onFocus={() => setIsDeleteIconShown(true)}
        //onBlur={() => setIsDeleteIconShown(false)}
        autoFocus={true}
        data-testid="title-list-item"
      />
      {isDeleteIconRendered && (
        <DeleteButtonStyled onClick={onDelete} data-testid="delete-list-item" />
      )}
    </ListItemStyled>
  )

  function handleEnter(e) {
    e.target.blur()
    onEnter()
  }
}

const ListItemStyled = styled.label`
  width: 75vw;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.input`
  margin-left: 9px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  text-decoration: 'line-through';
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
