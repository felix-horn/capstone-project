import { render } from '@testing-library/react'
import CheckedItemsSummary from './CheckedItemsSummary'

describe('CheckedItemsSummary', () => {
  it('shows the correct summary for 0 checked items', () => {
    const { queryByText } = render(<CheckedItemsSummary lengthCheckedIds={0} />)
    const summaryText = queryByText('und')
    expect(summaryText).not.toBeInTheDocument()
  })
  it('shows the correct summary for 1 checked items', () => {
    const { getByText } = render(<CheckedItemsSummary lengthCheckedIds={1} />)
    const summaryText = getByText('und 1 abgehakter Eintrag')
    expect(summaryText).toBeInTheDocument()
  })
  it('shows the correct summary for 2 checked items', () => {
    const { getByText } = render(<CheckedItemsSummary lengthCheckedIds={2} />)
    const summaryText = getByText('und 2 abgehakte Einträge')
    expect(summaryText).toBeInTheDocument()
  })
})
