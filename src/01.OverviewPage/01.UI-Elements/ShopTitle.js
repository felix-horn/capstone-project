import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ShopTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function ShopTitle({ title }) {
  return <ShopTitleStyled>{title}</ShopTitleStyled>
}

const ShopTitleStyled = styled.h2`
  margin-left: 7px;
  font-size: 18px;
  font-weight: 100;
  /* margin-bottom: 10px; */
`
