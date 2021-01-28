import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ButtonRectangle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default function ButtonRectangle({
  title,
  onClick,
  children,
  className,
}) {
  return (
    <ButtonLayout onClick={onClick} className={className}>
      {children}
      {title}
    </ButtonLayout>
  )
}

const ButtonLayout = styled.button`
  border-radius: 5px;
  outline: none;
  border: var(--border);
  background-color: var(--white);
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-gray) !important;
  white-space: nowrap;

  &.primary {
    box-shadow: var(--strong-box-shadow);
    border: none;
    background-color: var(--CTA-blue);
    padding: 10px 15px;
    color: var(--white) !important;
  }
`
