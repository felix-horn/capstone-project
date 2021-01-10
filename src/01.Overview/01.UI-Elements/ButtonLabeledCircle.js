import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ButtonCircle from './ButtonCircle'

ButtonLabeledCircle.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
}

export default function ButtonLabeledCircle({
  onClick,
  title,
  children,
  variant,
  className,
}) {
  return (
    <ButtonLayout
      onClick={onClick}
      className={className}
      data-testid="labeled-circle-button"
    >
      {title}
      <ButtonCircle /* className="small" */ variant={variant}>
        {children}
      </ButtonCircle>
    </ButtonLayout>
  )
}

const ButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;

  &.primary {
    gap: 15px;
  }
`
