import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

AddButton.propTypes = {
  addListItem: PropTypes.func.isRequired,
}

export default function AddButton({ onClick }) {
  return (
    <AddButtonStyled onClick={onClick} data-testid="add-button">
      <AddIconStyled />
      <ButtenTextStyled>Listeneintrag</ButtenTextStyled>
    </AddButtonStyled>
  )
}

const AddButtonStyled = styled.button`
  margin-left: 4px;
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

const ButtenTextStyled = styled.span`
  color: var(--light-gray);
`
