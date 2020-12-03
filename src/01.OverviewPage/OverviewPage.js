import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function OverviewPage({ database }) {
  return (
    <>
      <ShopCard database={database} />
    </>
  )
}

// const UndoButtonStyled = styled(UndoButton)`
//   position: fixed;
//   bottom: 100px;
//   left: 50%;
//   transform: translate(-50%);
//   display: flex;
//   justify-content: center;
// `
