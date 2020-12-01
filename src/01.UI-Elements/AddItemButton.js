import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

AddItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function AddItemButton({ onClick }) {
  return (
    <AddItemButtonStyled onClick={onClick} data-testid="add-button">
      <AddIconStyled />
      <ButtonTextStyled>Listeneintrag</ButtonTextStyled>
    </AddItemButtonStyled>
  )
}

const AddItemButtonStyled = styled.button`
  margin-left: 27px;
  margin-bottom: 20px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
`
const AddIconStyled = styled(AddIcon)`
  margin-right: 20px;
  color: var(--mid-gray);
`

const ButtonTextStyled = styled.span`
  color: var(--light-gray);
`
