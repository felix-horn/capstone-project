import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CircleButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
}

export default function CircleButton({ className, children, onClick }) {
  return (
    <ButtonLayout className={className} onClick={onClick}>
      {children}
    </ButtonLayout>
  )
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
