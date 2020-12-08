import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ShopTitle.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ShopTitle({
  shopId,
  database,
  changeTitle,
  className,
}) {
  return (
    <ShopTitleStyled
      placeholder="Geschäft"
      value={database.shops.byId[shopId].title}
      onChange={handleInputChange}
      className={className}
      data-testid="title-shop"
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
