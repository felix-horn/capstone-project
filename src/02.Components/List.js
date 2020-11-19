import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import ListItem from '../01.UI-Elements/ListItem'

List.propTypes = {
  list: PropTypes.object.isRequired,
}

export default function List({ list }) {
  return (
    <ListStyled>
      {list.allIds.map((id) => {
        const { titleListItem, isChecked } = list.byId[id]
        return (
          <ListItem
            key={id}
            titleListItem={titleListItem}
            isChecked={isChecked}
          />
        )
      })}
    </ListStyled>
  )
}

const ListStyled = styled.div`
  display: grid;
  gap: 12px;
  margin-left: 2px;
`
