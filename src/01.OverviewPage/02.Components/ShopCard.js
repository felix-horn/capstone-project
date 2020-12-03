import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopTitle from '../01.UI-Elements/ShopTitle'
import ListItem from '../01.UI-Elements/ListItem'

ShopCard.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function ShopCard({ database }) {
  const uncheckedIds = database.items.allIds.filter(
    (id) => !database.items.byId[id].isChecked
  )
  return (
    <>
      <ShopCardStyled exact to="/ShopCard">
        <ShopTitle title="Penny" />
        {uncheckedIds.map((id) => {
          const { title } = database.items.byId[id]
          return <ListItem key={id} title={title} />
        })}
      </ShopCardStyled>
    </>
  )
}

const ShopCardStyled = styled(NavLink)`
  border: var(--border);
  border-radius: 8px;
  padding: 15px 10px;
  display: grid;
  text-decoration: none;
`
