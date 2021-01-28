import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FeedbackCard.propTypes = {
  variant: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default function FeedbackCard({ variant, header, text }) {
  return (
    <CardLayout variant={variant}>
      <strong>{header}</strong>
      {text}
    </CardLayout>
  )
}

const CardLayout = styled.div`
  box-shadow: var(--light-box-shadow);
  border-radius: 5px;
  border: var(--border);
  border: none;
  width: 85vw;
  padding: 30px;
  display: grid;
  place-items: center;
  gap: 15px;

  ${(props) =>
    props.variant === 'green' && 'background-color: var(--confirmation-green);'}

  ${(props) =>
    props.variant === 'yellow' && 'background-color: var(--attention-yellow);'}

  ${(props) =>
    props.variant === 'red' && 'background-color: var(--warning-red);'}
`
