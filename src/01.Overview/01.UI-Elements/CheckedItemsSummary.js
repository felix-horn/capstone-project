import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CheckedItemsSummary.propTypes = {
  quantityCheckedIds: PropTypes.number.isRequired,
}

export default function CheckedItemsSummary({ quantityCheckedIds }) {
  return (
    <SummaryLayout>
      {quantityCheckedIds === 1
        ? 'und 1 abgehakter Eintrag'
        : `und ${quantityCheckedIds} abgehakte Einträge`}
    </SummaryLayout>
  )
}

const SummaryLayout = styled.p`
  margin: 4px 2px 0;
  font-size: 0.8rem;
  color: var(--light-gray);
`
