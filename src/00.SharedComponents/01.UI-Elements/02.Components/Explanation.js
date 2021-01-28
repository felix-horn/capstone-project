import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Explanation.propTypes = {
  useCase: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default function Explanation({ useCase }) {
  return (
    <LayoutWrapper>
      {useCase === 'uncheckItem' &&
        'Um einen Artikel wieder auf dessen Einkaufsliste zu setzen, scanne dessen Barcode.'}
      {useCase === 'setup' &&
        'Scanne den Barcode des Artikels einmalig ein, um diesen zukünftig über die Scanner-Funktion der App wieder auf dessen Liste zu setzen.'}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  padding: 0 30px;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  color: var(--dark-gray);
`
