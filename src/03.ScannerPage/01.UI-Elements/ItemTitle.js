import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ItemTitle.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  isScanning: PropTypes.string.isRequired,
}

export default function ItemTitle({ itemTitle, isScanning }) {
  return (
    <ItemTitleStyled>
      {isScanning && <span>Scanne:</span>}
      <TitleStyled>{itemTitle}</TitleStyled>
    </ItemTitleStyled>
  )
}

const ItemTitleStyled = styled.div`
  display: grid;
  place-items: center;
`
const TitleStyled = styled.strong`
  font-size: 1.2rem;
`
