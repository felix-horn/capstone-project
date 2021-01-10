import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ButtonCircle.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
}

export default function ButtonCircle({
  children,
  onClick,
  variant,
  className,
}) {
  return (
    <ButtonLayout onClick={onClick} className={className} variant={variant}>
      {children}
    </ButtonLayout>
  )
}

const ButtonLayout = styled.div`
  box-shadow: var(--strong-box-shadow);
  border-radius: 100%;
  /* height: 50px; */
  height: ${(props) => (props.variant === 'small' ? '40px' : '50px')};
  /* width: 50px; */
  width: ${(props) => (props.variant === 'small' ? '40px' : '50px')};
  /* background-color: var(--white); */
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--CTA-blue)' : 'var(--white)'};

  display: grid;
  place-items: center;
  /* color: var(--CTA-blue); */
  color: ${(props) =>
    props.variant === 'primary' ? 'var(--white)' : 'var(--CTA-blue)'};

  &.primary {
    background-color: var(--CTA-blue);
    color: var(--white);
  }

  &.small {
    height: 40px;
    width: 40px;
  }
`
