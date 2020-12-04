import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopTitle from '../01.UI-Elements/ShopTitle'
import ListItem from '../01.UI-Elements/ListItem'

ShopCard.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function ShopCard({ shopId, database }) {
  const uncheckedIds = database.items.allIds.filter(
    (id) => !database.items.byId[id].isChecked
  )
  return (
    <>
      <ShopCardStyled
        exact
        to={{
          pathname: '/ShopPage',
          state: { shopId },
        }}
      >
        <ShopTitle title={database.shops.byId[shopId].title} />
        {uncheckedIds.map((id) => {
          const { title } = database.items.byId[id]
          return <ListItem key={id} title={title} />
        })}
        <CheckedItems>{generateText()}</CheckedItems>
      </ShopCardStyled>
    </>
  )

  function generateText() {
    const lengthCheckedIds = database.items.allIds.filter(
      (id) => database.items.byId[id].isChecked
    ).length
    console.log(lengthCheckedIds)
    // eslint-disable-next-line default-case
    switch (true) {
      case lengthCheckedIds === 0:
        return ''
      case lengthCheckedIds === 1:
        return 'und 1 abgehakter Eintrag'
      case lengthCheckedIds > 1:
        return `und ${lengthCheckedIds} abgehakte Einträge`
    }
  }
}

const ShopCardStyled = styled(NavLink)`
  border: var(--border);
  border-radius: 8px;
  padding: 15px 10px;
  display: grid;
  text-decoration: none;
`
const CheckedItems = styled.p`
  margin: 10px 5px 0 !important;
  padding: 0;
  color: var(--dark-gray);
`
