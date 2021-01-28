import { render } from '@testing-library/react'
import Explanation from './Explanation'

describe('Explanation', () => {
  it('renders correctly', () => {
    const { container } = render(<Explanation useCase="setup" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('displays the setup text', () => {
    const { queryByText, getByText } = render(<Explanation useCase="setup" />)
    const setupText = getByText(/einmalig/i)
    const uncheckItemText = queryByText(/Einkaufsliste/i)
    expect(setupText).toBeInTheDocument()
    expect(uncheckItemText).not.toBeInTheDocument()
  })

  it('displays the uncheckItem text', () => {
    const { queryByText, getByText } = render(
      <Explanation useCase="uncheckItem" />
    )
    const setupText = queryByText(/einmalig/i)
    const uncheckItemText = getByText(/Einkaufsliste/i)
    expect(setupText).not.toBeInTheDocument()
    expect(uncheckItemText).toBeInTheDocument()
  })
})
