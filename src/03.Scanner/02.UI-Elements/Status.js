import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Status.propTypes = {
  useCase: PropTypes.string.isRequired,
  itemTitle: PropTypes.string,
}

export default function Status({ useCase, itemTitle }) {
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
