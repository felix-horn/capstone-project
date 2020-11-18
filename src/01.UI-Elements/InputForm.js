import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

InputForm.propTypes = {
  onCreateListItem: PropTypes.func.isRequired,
}

export default function InputForm({ onCreateListItem }) {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <AddIcon />
        <input name="title" type="text" placeholder="Listeneintrag" />
      </label>
    </FormStyled>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.elements.title
    onCreateListItem(input.value)
    formElement.reset()
  }
}

const FormStyled = styled.form`
  label {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: #878889;
  }

  input {
    margin-left: 13px;
    border: none;
    font-size: 1em;
    font-weight: 300;
    color: #212121;

    &::placeholder {
      color: #b2b2b2;
    }
  }
`
