import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default function ListTitle({ title, handleInputChange }) {
  return (
    <ListTitleStyled
      type="text"
      placeholder="Geschäft"
      value={title}
      onChange={handleInputChange}
      data-testid="title-list"
    />
  )

  /* function handleEnter(event) {
    event.target.blur()
    onEnter()
  } */
}

const ListTitleStyled = styled.input`
  margin-left: 7px;
  margin-bottom: 10px;
  font-weight: 400 !important;
  font-size: 1.3em !important;
  border: none;
  &:focus {
    outline: none;
  }
  opacity: ${(props) => (props.title === '' ? 0.5 : 1)};
`
