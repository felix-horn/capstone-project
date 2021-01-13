import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import ListItem from '../01.UI-Elements/ListItem'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { getUncheckedItemIds } from '../../services/database.services'

UncheckedList.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function UncheckedList({
  shopId,
  database,
  changeTitle,
  toggleIsChecked,
  deleteListItem,
  addListItem,
  rearrangeListOrder,
  isFocused,
  className,
}) {
  const uncheckedIds = getUncheckedItemIds(database, shopId)

  return (
    <DragDropContext
      onDragStart={giveHapticFeedback}
      onDragEnd={handleOnDragEnd}
    >
      <Droppable droppableId="listId">
        {(provided) => (
          <ListLayout
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={className}
          >
            {uncheckedIds.map((id, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <ListItemWrapper
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                  >
                    <DragIconWrapper {...provided.dragHandleProps}>
                      <DragIndicatorIcon />
                    </DragIconWrapper>
                    <ListItem
                      itemId={id}
                      shopId={shopId}
                      database={database}
                      changeTitle={(fieldValue) => changeTitle(id, fieldValue)}
                      toggleCheckbox={() => toggleIsChecked(id)}
                      onDelete={() => deleteListItem(id)}
                      onEnter={() => handleEnter(id)}
                      isFocused={isFocused}
                    />
                  </ListItemWrapper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ListLayout>
        )}
      </Droppable>
    </DragDropContext>
  )
  function giveHapticFeedback() {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
  }

  function handleOnDragEnd(result) {
    // return early if item is dragged outside droppable area
    if (!result.destination) return
    const draggedId = result.draggableId
    // new index within unchecked IDs is returned
    const newIndexInUncheckedIds = result.destination.index
    // remove id from initial position
    const rearrangedUncheckedIds = uncheckedIds.filter((id) => id !== draggedId)
    // insert id in new position
    rearrangedUncheckedIds.splice(newIndexInUncheckedIds, 0, draggedId)
    // new index within ALL IDs of the shop (including checked IDs) must be determined
    const idPrecedingDraggedId =
      rearrangedUncheckedIds[newIndexInUncheckedIds - 1]
    rearrangeListOrder(draggedId, idPrecedingDraggedId, shopId)
  }

  function handleEnter(targetId) {
    // only for the last item of the unchecked list enter creates new item
    const lastUncheckedId = uncheckedIds[uncheckedIds.length - 1]
    lastUncheckedId === targetId && addListItem()
  }
}

const ListLayout = styled.div`
  display: grid;
`
const ListItemWrapper = styled.div`
  box-shadow: ${(props) =>
    props.isDragging ? 'var(--light-box-shadow)' : 'none'};
  border-radius: 5px;
  background: var(--white);
  display: flex;
  align-items: center;
`
const DragIconWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.3;
`
