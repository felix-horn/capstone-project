import styled from 'styled-components/macro'
import Fab from '@material-ui/core/Fab'
import PostAddIcon from '@material-ui/icons/PostAdd'

export default function ActionButton() {
  return (
    <FabStyled style={{ backgroundColor: '#ffffff' }}>
      <PostAddIconStyled />
    </FabStyled>
  )
}

const FabStyled = styled(Fab)`
  opacity: 0.5;
`
const PostAddIconStyled = styled(PostAddIcon)`
  color: var(--dark-gray);
`
