import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Fab from '@material-ui/core/Fab'
import PostAddIcon from '@material-ui/icons/PostAdd'

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function ActionButton() {
  return (
    <FabStyled href="/ShopCard" style={{ backgroundColor: '#ffffff' }}>
      <PostAddIcon />
    </FabStyled>
  )
}

const FabStyled = styled(Fab)`
  opacity: 0.5;
`
