import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListItem from '../01.UI-Elements/ListItem'
import DragHandleIcon from '@material-ui/icons/DragHandle'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'

List.propTypes = {
  list: PropTypes.object.isRequired,
  listAllocation: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  addListItemOnEnter: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

export default function List({
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
      <DragDropContext>
        <Droppable droppableId="listItemsId">
          {(provided) => (
            <ListStyled
              checked={checked}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listAllocation.map((id, index) => {
                const { title, isChecked } = list.byId[id]
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <Wrapper
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <DragIndicatorIconStyled />
                        {/* TEXT */}
                        <ListItem
                          id={id}
                          title={title}
                          isChecked={isChecked}
                          onInputChange={handleInputChange}
                          onToggleCheckbox={() => toggleIsChecked(id)}
                          onDelete={() => deleteListItem(id)}
                          onEnter={() => addListItemOnEnter(id)}
                        />
                      </Wrapper>
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
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const DragIndicatorIconStyled = styled(DragIndicatorIcon)`
  opacity: 0.3;
`

const ListStyled = styled.div`
  margin: 3px 2px 10px;
  padding-top: ${(props) => (props.checked ? '10px' : 'none')};
  border-top: ${(props) => (props.checked ? '1px solid #dadcdf' : 'none')};
  display: grid;
`
