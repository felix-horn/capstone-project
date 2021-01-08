import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CheckedItemsSummary.propTypes = {
  quantityCheckedIds: PropTypes.number.isRequired,
  className: PropTypes.number,
}

export default function CheckedItemsSummary({ quantityCheckedIds, className }) {
  return (
    <SummaryLayout className={className}>
      {quantityCheckedIds === 1
        ? 'und 1 abgehakter Eintrag'
        : `und ${quantityCheckedIds} abgehakte Einträge`}
    </SummaryLayout>
  )
}

const SummaryLayout = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--light-gray);
`
