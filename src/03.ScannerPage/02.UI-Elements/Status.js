import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ItemTitle.propTypes = {
  useCase: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
}

export default function ItemTitle({ useCase, itemTitle }) {
  return (
    <StatusStyled>
      {useCase === 'uncheckItem' && 'Scannt...'}
      {useCase === 'setup' && (
        <>
          <span>Scanne:</span>
          <TitleStyled>{itemTitle}</TitleStyled>
        </>
      )}
    </StatusStyled>
  )
}

const StatusStyled = styled.div`
  display: grid;
  place-items: center;
`
const TitleStyled = styled.strong`
  font-size: 1.2rem;
`
