import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ShopTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default function ShopTitle({ title, className }) {
  return <TitleLayout className={className}>{title}</TitleLayout>
}

const TitleLayout = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--almost-black);
`
