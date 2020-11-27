import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import ListItem from '../01.UI-Elements/ListItem'

List.propTypes = {
  list: PropTypes.object.isRequired,
  listAllocation: PropTypes.array.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function List({
  listAllocation,
  checked,
  list,
  handleChange,
  toggleIsChecked,
  deleteListItem,
  addListItem,
}) {
  return (
    <>
      {listAllocation.length > 0 && (
        <ListStyled checked={checked}>
          {listAllocation.map((id) => {
            const { title, isChecked } = list.byId[id]
            return (
              <ListItem
                key={id}
                id={id}
                title={title}
                isChecked={isChecked}
                handleChange={handleChange}
                onToggle={() => toggleIsChecked(id)}
                onDelete={() => deleteListItem(id)}
                onEnter={() => addListItem()}
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
`
