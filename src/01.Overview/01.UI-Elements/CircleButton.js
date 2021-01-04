import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CircleButton.propTypes = {}

export default function CircleButton({ className, children }) {
  return <ButtonLayout className={className}>{children}</ButtonLayout>
}

const ButtonLayout = styled.div`
  box-shadow: var(--strong-box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  color: var(--CTA-blue);

  &.primary {
    background-color: var(--CTA-blue);
    color: var(--white);
  }

  &.small {
    height: 40px;
    width: 40px;
  }
`
