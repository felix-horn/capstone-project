import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ListItem from '../01.UI-Elements/ListItem'

CheckedList.propTypes = {
  list: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
}

export default function CheckedList({
  list,
  changeTitle,
  toggleIsChecked,
  deleteListItem,
}) {
  const checkedIds = list.allIds.filter((id) => list.byId[id].isChecked)
  return (
    <>
      {checkedIds.length > 0 && (
        <CheckedListStyled>
          {checkedIds.map((id) => {
            const { title, isChecked } = list.byId[id]
            return (
              <ListItem
                key={id}
                id={id}
                title={title}
                isChecked={isChecked}
                changeTitle={(fieldValue) => changeTitle(id, fieldValue)}
                toggleCheckbox={() => toggleIsChecked(id)}
                onDelete={() => deleteListItem(id)}
              />
            )
          })}
        </CheckedListStyled>
      )}
    </>
  )
}

const CheckedListStyled = styled.div`
  margin: 3px 2px 10px 0;
  padding-top: 10px;
  padding-left: 26px;
  border-top: var(--border);
  display: grid;
`
