import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import CropFreeIcon from '@material-ui/icons/CropFree'

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
  const title = database.items.byId[itemId].title
  const isChecked = database.items.byId[itemId].isChecked
  const hasBarcode = !!database.items.byId[itemId].barcode
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
          <ButtonScannerStyled
            to={{
              pathname: '/ScannerPage',
              state: { itemId, shopId, useCase: 'setup' },
            }}
          >
            <ScannerIconStyled hasBarcode={hasBarcode} />
          </ButtonScannerStyled>
          <DeleteButtonStyled
            onClick={handleDelete}
            data-testid="delete-list-item"
          />
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

const ButtonScannerStyled = styled(NavLink)`
  margin-left: auto;
`

const ScannerIconStyled = styled(CropFreeIcon)`
  margin-top: 3px;
  transform: scale(0.9);
  color: ${(props) => (props.hasBarcode ? 'black' : '#4285F4')};
  opacity: ${(props) => (props.hasBarcode ? '0.1' : '1')};
`
