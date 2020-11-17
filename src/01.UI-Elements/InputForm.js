import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

InputForm.propTypes = {
  onCreateTodo: PropTypes.func.isRequired,
}

export default function InputForm({ onCreateTodo }) {
  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target
    const input = formElement.title
    onCreateTodo(input.value)
    formElement.reset()
    input.focus()
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        +
        <input name="title" type="text" placeholder="Listeneintrag" />
      </label>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  label {
    font-family: sans-serif;
  }

  input {
    border: none;
    margin-left: 6px;
    font-size: 1em;
  }
`
