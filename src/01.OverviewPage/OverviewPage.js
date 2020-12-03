import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import Fab from '@material-ui/core/Fab'
import PostAddIcon from '@material-ui/icons/PostAdd'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function OverviewPage({ database }) {
  return (
    <>
      <ShopCard database={database} />
      <FabStyled href="/ShopCard">
        <PostAddIcon />
      </FabStyled>
    </>
  )
}

const FabStyled = styled(Fab)`
  position: fixed;
  bottom: 100px;
  right: 20px;

  /* transform: translate(-50%); */
  /* display: flex;
  justify-content: center; */
`
