import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import CropFreeIcon from '@material-ui/icons/CropFree'
import {
  getItemBarcodeStatus,
  getItemCheckStatus,
  getItemTitle,
} from '../../services/filter.services'

ListItem.propTypes = {
  isChecked: PropTypes.bool,
  itemId: PropTypes.string.isRequired,
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default function ListItem({
  itemId,
  shopId,
  database,
  changeTitle,
  toggleCheckbox,
  onDelete,
  onEnter,
}) {
  const [isIconsShown, setIsIconsShown] = useState(false)
  const title = getItemTitle(database, itemId)
  const isChecked = getItemCheckStatus(database, itemId)
  const hasBarcode = getItemBarcodeStatus(database, itemId)
  const history = useHistory()
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
      {isIconsShown && (
        <>
          <ScannerIconStyled
            onClick={navigateToScanner}
            hasBarcode={hasBarcode}
          />
          <DeleteButtonStyled
            onClick={handleDelete}
            data-testid="delete-list-item"
          />
        </>
      )}
    </ListItemStyled>
  )

  function navigateToScanner() {
    history.push({
      pathname: '/scanner',
      state: { itemId, title, shopId, useCase: 'setup' },
    })
  }

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
    setIsIconsShown(true)
  }

  function hideIcons() {
    raceConditionTimer = setTimeout(() => setIsIconsShown(false), 0)
    //return () => clearTimeout(raceConditionTimer)
  }

  function handleDelete() {
    //clearTimeout(raceConditionTimer)
    onDelete()
  }
}

const ListItemStyled = styled.label`
  width: 85vw;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const TitleStyled = styled.input`
  margin-left: 9px;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 300;
  color: var(--almost-black);
  text-decoration: ${(props) => (props.isCrossedOut ? 'line-through' : 'none')};
  border: none;
  &:focus {
    outline: none;
  }
`
const DeleteButtonStyled = styled(CloseIcon)`
  margin-left: 5px;
  transform: scale(0.9);
  opacity: 0.4;
`

const ScannerIconStyled = styled(CropFreeIcon)`
  margin-left: auto;
  transform: scale(0.9);
  color: ${(props) => (props.hasBarcode ? 'black' : '#4285F4')};
  opacity: ${(props) => (props.hasBarcode ? '0.1' : '1')};
`
