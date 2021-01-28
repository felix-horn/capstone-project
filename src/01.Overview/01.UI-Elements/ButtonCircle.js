import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ButtonCircle.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['small', 'primary']),
  className: PropTypes.string,
}

export default function ButtonCircle({
  children,
  onClick,
  variant,
  className,
}) {
  return (
    <ButtonLayout
      onClick={onClick}
      variant={variant}
      className={className}
      data-testid="button"
    >
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

  ${(props) =>
    props.variant === 'primary' &&
    `background-color: var(--CTA-blue); color: var(--white);`}

  ${(props) => props.variant === 'small' && `width: 40px; height: 40px;`}
`
