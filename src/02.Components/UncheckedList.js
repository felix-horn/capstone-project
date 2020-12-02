import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListItem from '../01.UI-Elements/ListItem'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'

UncheckedList.propTypes = {
  list: PropTypes.object.isRequired,
  changeTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function UncheckedList({
  list,
  changeTitle,
  toggleIsChecked,
  deleteListItem,
  addListItem,
  rearrangeListOrder,
  checked,
}) {
  const uncheckedIds = list.allIds.filter((id) => !list.byId[id].isChecked)
  return (
    <>
      <DragDropContext
        onDragStart={giveHapticFeedback}
        onDragEnd={handleOnDragEnd}
      >
        <Droppable droppableId="listId">
          {(provided) => (
            <UncheckedListStyled
              checked={checked}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {uncheckedIds.map((id, index) => {
                const { title, isChecked } = list.byId[id]
                return (
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
                          id={id}
                          title={title}
                          isChecked={isChecked}
                          changeTitle={(fieldValue) =>
                            changeTitle(id, fieldValue)
                          }
                          toggleCheckbox={() => toggleIsChecked(id)}
                          onDelete={() => deleteListItem(id)}
                          onEnter={() => handleEnter(id)}
                        />
                      </ListItemWrapper>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </UncheckedListStyled>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
  function giveHapticFeedback() {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const indexFrom = result.source.index
    const indexTo = result.destination.index
    rearrangeListOrder(indexFrom, indexTo)
  }

  function handleEnter(targetId) {
    const lastUncheckedId = uncheckedIds[uncheckedIds.length - 1]
    lastUncheckedId === targetId && addListItem()
  }
}

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

const UncheckedListStyled = styled.div`
  margin: 3px 2px 10px;
  display: grid;
`
