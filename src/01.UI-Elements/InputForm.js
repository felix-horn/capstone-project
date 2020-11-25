import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

InputForm.propTypes = {
  addListItem: PropTypes.func.isRequired,
}

export default function InputForm({ addListItem }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputFormStyled>
        <AddIconStyled />
        <InputFieldStyled
          name="title"
          type="text"
          placeholder="Listeneintrag"
          data-testid="input-form"
        />
      </InputFormStyled>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.elements.title
    addListItem(input.value)
    formElement.reset()
  }
}

const InputFormStyled = styled.label`
  margin-left: 11px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const AddIconStyled = styled(AddIcon)`
  color: var(--mid-gray);
`
const InputFieldStyled = styled.input`
  margin-left: 20px;
  border: none;

  &::placeholder {
    color: var(--light-gray);
  }

  &:focus {
    outline: none;
  }
`
