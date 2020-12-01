import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ListItem from '../01.UI-Elements/ListItem'

CheckedList.propTypes = {
  list: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItemOnEnter: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function CheckedList({
  list,
  handleInputChange,
  toggleIsChecked,
  deleteListItem,
}) {
  const checkedIds = list.allIds.filter((id) => list.byId[id].isChecked)
  return (
    <>
      {checkedIds.length > 0 && (
        <ListStyled>
          {checkedIds.map((id) => {
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
                onEnter={handelEnter}
              />
            )
          })}
        </ListStyled>
      )}
    </>
  )
  function handelEnter() {}
}

const ListStyled = styled.div`
  margin: 3px 2px 10px 0;
  padding-top: 10px;
  padding-left: 26px;
  border-top: var(--border);
  display: grid;
`
