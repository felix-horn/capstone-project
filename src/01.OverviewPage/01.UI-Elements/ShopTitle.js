import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ShopTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function ShopTitle({ title }) {
  return <ShopTitleStyled>{title}</ShopTitleStyled>
}

const ShopTitleStyled = styled.h2`
  margin-left: 5px !important;
  margin-bottom: 8px !important;
  font-size: 18px;
  font-weight: 400;
  color: var(--almost-black);
`
