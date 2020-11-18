import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

InputForm.propTypes = {
  onCreateListItem: PropTypes.func.isRequired,
}

export default function InputForm({ onCreateListItem }) {
  return (
    <form onSubmit={handleSubmit}>
      <Element>
        <AddIconStyled />
        <InputFieldStyled
          name="title"
          type="text"
          placeholder="Listeneintrag"
        />
      </Element>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.elements.title
    onCreateListItem(input.value)
    formElement.reset()
  }
}

const Element = styled.label`
  margin-top: 8px;
  display: flex;
  align-items: center;
`
const AddIconStyled = styled(AddIcon)`
  color: #878889;
`
const InputFieldStyled = styled.input`
  margin-left: 13px;
  border: none;

  &::placeholder {
    color: #b2b2b2;
  }
`
