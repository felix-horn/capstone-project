import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CheckedItemsSummary.propTypes = {
  lengthCheckedIds: PropTypes.number.isRequired,
}

export default function CheckedItemsSummary({ lengthCheckedIds }) {
  return (
    <CheckedItemsSummaryStyled>
      {lengthCheckedIds === 1
        ? 'und 1 abgehakter Eintrag'
        : `und ${lengthCheckedIds} abgehakte Einträge`}
    </CheckedItemsSummaryStyled>
  )
}

const CheckedItemsSummaryStyled = styled.p`
  margin: 4px 2px 0 !important;
  padding: 0;
  font-size: 0.8rem;
  color: var(--light-gray);
`
