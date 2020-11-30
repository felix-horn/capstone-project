import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListItem from '../01.UI-Elements/ListItem'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'

UncheckedList.propTypes = {
  list: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function UncheckedList({
  list,
  handleInputChange,
  toggleIsChecked,
  deleteListItem,
  addListItem,
  rearrangeListOrder,
  checked,
}) {
  const uncheckedIds = list.allIds.filter((id) => !list.byId[id].isChecked)
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="listId">
          {(provided) => (
            <ListStyled
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
                          onInputChange={handleInputChange}
                          onToggleCheckbox={() => toggleIsChecked(id)}
                          onDelete={() => deleteListItem(id)}
                          onEnter={() => handelEnter(id)}
                        />
                      </ListItemWrapper>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ListStyled>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const indexFrom = result.source.index
    const indexTo = result.destination.index
    rearrangeListOrder(indexFrom, indexTo)
  }

  function handelEnter(targetId) {
    const lastUncheckedId = uncheckedIds[uncheckedIds.length - 1]
    lastUncheckedId === targetId && addListItem()
  }
}

const ListItemWrapper = styled.div`
  box-shadow: ${(props) => (props.isDragging ? '0 1px 3px #0003' : 'none')};
  border-radius: 5px;
  background: white;
  display: flex;
  align-items: center;
`

const DragIconWrapper = styled.div`
  opacity: 0.3;
`

const ListStyled = styled.div`
  margin: 3px 2px 10px;
  padding-top: ${(props) => (props.checked ? '10px' : 'none')};
  border-top: ${(props) => (props.checked ? '1px solid #dadcdf' : 'none')};
  display: grid;
`
