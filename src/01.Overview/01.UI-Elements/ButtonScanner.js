import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CircleButton from './CircleButton'
import ScannerIcon from '@material-ui/icons/CropFree'

ButtonScanner.propTypes = {
  className: PropTypes.string,
}

export default function ButtonScanner({ className }) {
  const history = useHistory()
  return (
    <ButtonLayout
      onClick={navigateToScanner}
      className={className}
      data-testid="scanner-button"
    >
      Barcode scannen
      <CircleButton className="primary">
        <ScannerIconAnimated />
      </CircleButton>
    </ButtonLayout>
  )
  function navigateToScanner() {
    history.push({
      pathname: '/scanner',
      state: { useCase: 'uncheckItem' },
    })
  }
}

const ButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;
`

const ScannerIconAnimated = styled(ScannerIcon)`
  animation: 0.2s ease-in-out 0s 1 rotate;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
`
