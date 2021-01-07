import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ItemTitle.propTypes = {
  useCase: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
}

export default function ItemTitle({ useCase, itemTitle }) {
  return (
    <StatusWrapper>
      {useCase === 'uncheckItem' && 'Scannt...'}
      {useCase === 'setup' && (
        <>
          <span>Scanne:</span>
          <Title>{itemTitle}</Title>
        </>
      )}
    </StatusWrapper>
  )
}

const StatusWrapper = styled.div`
  display: grid;
  place-items: center;
`
const Title = styled.strong`
  font-size: 1.2rem;
`
