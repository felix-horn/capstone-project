import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

ButtonAddItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonAddItem({ onClick, className }) {
  return (
    <Button onClick={onClick} className={className} data-testid="add-button">
      <AddIconStyled />
      <ButtonTextStyled>Listeneintrag</ButtonTextStyled>
    </Button>
  )
}

const Button = styled.button`
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
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--light-gray);
`
