import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

AddItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function AddItemButton({ onClick, className }) {
  return (
    <AddItemButtonStyled
      onClick={onClick}
      className={className}
      data-testid="add-button"
    >
      <AddIconStyled />
      <ButtonTextStyled>Listeneintrag</ButtonTextStyled>
    </AddItemButtonStyled>
  )
}

const AddItemButtonStyled = styled.button`
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
