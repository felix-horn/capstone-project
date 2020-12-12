import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Explanation.propTypes = {
  selectedItemTitle: PropTypes.string.isRequired,
}

export default function Explanation({ selectedItemTitle, className }) {
  return (
    <ExplanationStyled className={className}>
      Scanne den Barcode des Artikels einmalig ein, um diesen zukünftig über die
      Scanner-Funktion der App wieder auf dessen Liste zu setzen.
    </ExplanationStyled>
  )
}

const ExplanationStyled = styled.div`
  padding: 0 30px;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  color: var(--dark-gray);
`
