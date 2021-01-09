import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddIcon from '@material-ui/icons/Add'

ButtonAddItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonAddItem({ onClick, className }) {
  return (
    <ButtonLayout
      onClick={onClick}
      className={className}
      data-testid="add-button"
    >
      <AddIconPositioned />
      <ButtonText>Listeneintrag</ButtonText>
    </ButtonLayout>
  )
}

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
`
const AddIconPositioned = styled(AddIcon)`
  margin-right: 17px;
  color: var(--mid-gray);
`

const ButtonText = styled.span`
  color: var(--light-gray);
`
