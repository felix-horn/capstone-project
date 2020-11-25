import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'
import UndoButton from './01.UI-Elements/UndoButton'
import styled, { keyframes } from 'styled-components/macro'

export default function App() {
  const {
    list,
    uncheckedIds,
    checkedIds,
    addListItem,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    visibilityUndoButton,
  } = useList()
  return (
    <>
      <List
        listAllocation={uncheckedIds}
        list={list}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
      <InputForm addListItem={addListItem} />
      <List
        checked
        listAllocation={checkedIds}
        list={list}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />

      <PositioningWrapper className={visibilityUndoButton}>
        <UndoButton onClick={undoDelete} />
      </PositioningWrapper>
    </>
  )
}

const fadeOut = keyframes`
    0% {
        opacity: 1;
        pointer-events: all;
    }
      100%{
        opacity: 0;
        pointer-events: none;
    }
`

const PositioningWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: center;

  &.shown {
  }

  &.fadeToHide {
    animation: 1s ${fadeOut} ease forwards;
  }

  &.hidden {
    display: none;
  }
`
