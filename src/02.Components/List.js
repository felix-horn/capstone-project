import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import ListItem from '../01.UI-Elements/ListItem'

List.propTypes = {
  list: PropTypes.object.isRequired,
}

export default function List({ list, toggleIsChecked }) {
  return (
    <>
      {list.allIds.length > 0 && (
        <ListStyled>
          {list.allIds.map((id) => {
            const { title, isChecked } = list.byId[id]
            return (
              <ListItem
                key={id}
                title={title}
                isChecked={isChecked}
                onToggle={() => toggleIsChecked(id)}
              />
            )
          })}
        </ListStyled>
      )}
    </>
  )
}

const ListStyled = styled.div`
  display: grid;
  /* gap: 12px; */
  margin: 3px 2px 10px;
`
