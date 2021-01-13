import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Close'
import ScannerIcon from '@material-ui/icons/CropFree'
import {
  getItemBarcodeStatus,
  getItemCheckStatus,
  getItemTitle,
} from '../../services/database.services'

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
  isFocused,
}) {
  const [isEditOptionsShown, setIsEditOptionsShown] = useState(false)
  const title = getItemTitle(database, itemId)
  const isChecked = getItemCheckStatus(database, itemId)
  const scannerIconColoring = getScannerIconColoring()
  const history = useHistory()
  let raceConditionTimer

  return (
    <ListItemLayout checked={isChecked} data-testid="list-item">
      <Checkbox
        type="checkbox"
        color="default"
        checked={isChecked}
        onChange={handleCheckboxToggle}
        data-testid="checkbox"
      />
      <Title
        value={title}
        onChange={handleInputChange}
        onKeyUp={actionIfEnter}
        onFocus={showEditOptions}
        onBlur={hideEditOptions}
        autoFocus={isFocused}
        isCrossedOut={isChecked}
        data-testid="title-list-item"
      />
      {isEditOptionsShown && (
        <>
          <ScannerButton
            onClick={navigateToScanner}
            className={scannerIconColoring}
          />
          <DeleteButton onClick={handleDelete} data-testid="delete-list-item" />
        </>
      )}
    </ListItemLayout>
  )

  function handleCheckboxToggle() {
    clearTimeout(raceConditionTimer)
    toggleCheckbox()
  }

  function handleInputChange(event) {
    changeTitle(event.target.value)
  }

  function actionIfEnter(event) {
    event.key === 'Enter' && !isChecked && onEnter()
  }

  function showEditOptions() {
    setIsEditOptionsShown(true)
  }

  function hideEditOptions() {
    raceConditionTimer = setTimeout(() => setIsEditOptionsShown(false), 0)
    return () => clearTimeout(raceConditionTimer)
  }

  function navigateToScanner() {
    clearTimeout(raceConditionTimer)
    history.push({
      pathname: '/scanner',
      state: { itemId, title, shopId, useCase: 'setup' },
    })
  }

  function handleDelete() {
    clearTimeout(raceConditionTimer)
    onDelete()
  }

  function getScannerIconColoring() {
    const itemBarcodeStatus = getItemBarcodeStatus(database, itemId)
    if (itemBarcodeStatus === 'inDatabase') {
      return 'grayed-out'
    } else {
      return 'cta'
    }
  }
}

const ListItemLayout = styled.label`
  width: 85vw;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`
const Title = styled.input`
  margin-left: 9px;
  outline: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 300;
  color: var(--almost-black);
  text-decoration: ${(props) => (props.isCrossedOut ? 'line-through' : 'none')};
`
const DeleteButton = styled(DeleteIcon)`
  margin-left: 5px;
  transform: scale(0.9);
  opacity: 0.4;
`
const ScannerButton = styled(ScannerIcon)`
  margin-left: auto;
  transform: scale(0.9);
  &.cta {
    color: var(--CTA-blue);
  }
  &.grayed-out {
    opacity: 0.1;
  }
`
