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
    <OverviewPageStyled>
      <FabWrapper>
        <Fab href="/ShopCard" style={{ backgroundColor: '#ffffff' }}>
          <PostAddIcon />
        </Fab>
      </FabWrapper>
      <ShopCard database={database} />
    </OverviewPageStyled>
  )
}

const OverviewPageStyled = styled.div`
  position: relative;
  height: calc(100vh - 60px);
`

const FabWrapper = styled.div`
  position: absolute;
  bottom: 250px;
  right: 20px;
  z-index: 10;
  display: grid;
  place-items: center;
  height: 70px;
  width: 70px;
  opacity: 0.5;
`
