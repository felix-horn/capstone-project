import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default function ListTitle({ title, handleInputChange /* onEnter */ }) {
  return (
    <ListTitleStyled
      type="text"
      placeholder="Geschäft"
      value={title}
      onChange={handleInputChange}
      //   onKeyUp={(event) => event.key === 'Enter' && handleEnter(event)}
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
  font-weight: 300 !important;
  font-size: 1.2em !important;
  border: none;
  &:focus {
    outline: none;
  }
  opacity: ${(props) => (props.title === '' ? 0.5 : 1)};
`
