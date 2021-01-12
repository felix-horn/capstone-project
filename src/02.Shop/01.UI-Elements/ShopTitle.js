import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { getShopTitle } from '../../services/database.services'

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
    <Title
      placeholder="Geschäft"
      value={getShopTitle(database, shopId)}
      onChange={handleInputChange}
      className={className}
      data-testid="title-shop"
    />
  )
  function handleInputChange(event) {
    changeTitle(event.target.value)
  }
}

const Title = styled.input`
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 1.3em;
  opacity: ${(props) => (props.title === '' ? 0.5 : 1)};
`
