import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import CropFreeIcon from '@material-ui/icons/CropFree'

ListItem.propTypes = {
  isChecked: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default function ListItem({
  isChecked,
  id,
  title,
  changeTitle,
  toggleCheckbox,
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
        onChange={handleCheckboxToggle}
        data-testid="checkbox"
      />
      <TitleStyled
        value={title}
        onChange={handleInputChange}
        onKeyUp={(event) => event.key === 'Enter' && handleEnter(event)}
        onFocus={showIcons}
        onBlur={hideIcons}
        autoFocus={true}
        isCrossedOut={isChecked}
        data-testid="title-list-item"
      />
      {isDeleteIconShown && (
        <>
          <DeleteButtonStyled
            onClick={handleDelete}
            data-testid="delete-list-item"
          />
          <NavLink
            to={{
              pathname: '/ScannerPage',
              state: { id },
            }}
          >
            <BarcodeScannerButtonStyled />
          </NavLink>
        </>
      )}
    </ListItemStyled>
  )

  function handleCheckboxToggle() {
    //clearTimeout(raceConditionTimer)
    toggleCheckbox()
  }

  function handleInputChange(event) {
    changeTitle(event.target.value)
  }

  function handleEnter(event) {
    event.target.blur()
    !isChecked && onEnter()
  }

  function showIcons() {
    setIsDeleteIconShown(true)
  }

  function hideIcons() {
    raceConditionTimer = setTimeout(() => setIsDeleteIconShown(false), 0)
    //return () => clearTimeout(raceConditionTimer)
  }

  function handleDelete() {
    //clearTimeout(raceConditionTimer)
    onDelete()
  }

  function openScanner() {}
}

const ListItemStyled = styled.label`
  width: 85vw;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.input`
  margin-left: 9px;
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
const BarcodeScannerButtonStyled = styled(CropFreeIcon)`
  margin-left: 5px;
  transform: scale(0.9);
  opacity: 0.4;
`
