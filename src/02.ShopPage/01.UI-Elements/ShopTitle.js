import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ShopTitle.propTypes = {
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
}

export default function ShopTitle({ database, changeTitle }) {
  return (
    <ShopTitleStyled
      placeholder="Geschäft"
      value={database.shops.byId['dummyId'].title} //this is only the preparation for the datastructure for more than one shop
      onChange={handleInputChange}
      data-testid="title-list"
    />
  )
  function handleInputChange(event) {
    changeTitle(event.target.value)
  }
}

const ShopTitleStyled = styled.input`
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
