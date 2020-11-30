import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ListItem from '../01.UI-Elements/ListItem'

CheckedList.propTypes = {
  list: PropTypes.object.isRequired,
  listAllocation: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItemOnEnter: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function CheckedList({
  list,
  listAllocation,
  handleInputChange,
  toggleIsChecked,
  deleteListItem,
  addListItemOnEnter,
  checked,
}) {
  return (
    <>
      {list.allIds.filter((id) => list.byId[id].isChecked).length > 0 && (
        <ListStyled checked={checked}>
          {list.allIds
            .filter((id) => list.byId[id].isChecked)
            .map((id) => {
              const { title, isChecked } = list.byId[id]
              return (
                <ListItem
                  key={id}
                  id={id}
                  title={title}
                  isChecked={isChecked}
                  onInputChange={handleInputChange}
                  onToggleCheckbox={() => toggleIsChecked(id)}
                  onDelete={() => deleteListItem(id)}
                  onEnter={() => addListItemOnEnter(id)}
                />
              )
            })}
        </ListStyled>
      )}
    </>
  )
}

const ListStyled = styled.div`
  margin: 3px 2px 10px 26px;
  padding-top: ${(props) => (props.checked ? '10px' : 'none')};
  border-top: ${(props) => (props.checked ? '1px solid #dadcdf' : 'none')};
  display: grid;
`
