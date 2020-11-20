import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import ListItem from '../01.UI-Elements/ListItem'

List.propTypes = {
  list: PropTypes.object.isRequired,
}

export default function List({ list, checkState, toggleIsChecked, checked }) {
  return (
    <>
      {list.allIds.length > 0 && (
        <ListStyled checked={checked}>
          {checkState.map((id) => {
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
  margin: 3px 2px 10px;
  padding-top: ${(props) => (props.checked ? '10px' : 'none')};
  border-top: ${(props) => (props.checked ? '1px solid #dadcdf' : 'none')};
  display: grid;
  /* gap: 12px; */
`
