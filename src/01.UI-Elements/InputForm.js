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
  margin-left: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const AddIconStyled = styled(AddIcon)`
  color: #878889;
`
const InputFieldStyled = styled.input`
  margin-left: 20px;
  border: none;

  &::placeholder {
    color: #b2b2b2;
  }

  &:focus {
    outline: none;
  }
`
