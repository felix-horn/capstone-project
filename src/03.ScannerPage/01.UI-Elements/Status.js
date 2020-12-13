import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ItemTitle.propTypes = {
  useCase: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  isScanning: PropTypes.bool.isRequired,
}

export default function ItemTitle({ useCase, itemTitle, isScanning }) {
  console.log({ useCase })
  return (
    <StatusStyled>
      {useCase === 'uncheckItem' && isScanning && 'Scannt...'}
      {useCase === 'setup' && (
        <>
          {isScanning && <span>Scanne:</span>}
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
