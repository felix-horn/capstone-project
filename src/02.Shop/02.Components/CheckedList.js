import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import { getCheckedItemIds } from '../../services/database.services'
import ListItem from '../01.UI-Elements/ListItem'

CheckedList.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function CheckedList({
  shopId,
  database,
  changeTitle,
  toggleIsChecked,
  deleteListItem,
  className,
}) {
  const checkedIds = getCheckedItemIds(database, shopId)

  return (
    <>
      {checkedIds.length > 0 && (
        <ListLayout className={className}>
          {checkedIds.map((id) => (
            <ListItem
              key={id}
              itemId={id}
              shopId={shopId}
              database={database}
              title={database.items.byId[id].title}
              changeTitle={(fieldValue) => changeTitle(id, fieldValue)}
              toggleCheckbox={() => toggleIsChecked(id)}
              onDelete={() => deleteListItem(id)}
            />
          ))}
        </ListLayout>
      )}
    </>
  )
}

const ListLayout = styled.div`
  border-top: var(--border);
  padding-top: 10px;
  padding-left: 25px;
  display: grid;
`
