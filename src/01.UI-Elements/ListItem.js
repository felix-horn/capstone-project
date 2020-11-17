import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
export default ListItem

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isCheckmarked: PropTypes.bool,
  onCheckboxClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

function ListItem({
  titleListItem,
  isCheckmarked,
  onCheckboxClick,
  onDeleteClick,
}) {
  return (
    <Wrapper>
      <label>
        <BigCheckbox
          type="checkbox"
          checked={isCheckmarked}
          onChange={onCheckboxClick}
        />
        <span>{titleListItem}</span>
        <TrashButton onClick={onDeleteClick}>x</TrashButton>
      </label>
    </Wrapper>
  )
}

const BigCheckbox = styled.input`
  transform: scale(1.5);
  margin-right: 10px;
`

const Wrapper = styled.div`
  margin-bottom: 12px;
  font-family: sans-serif;

  label {
    display: flex;
    align-items: center;
  }
`
const TrashButton = styled.button`
  /* height: 24px;
  width: 24px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path fill='lightgray' d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z'/></svg>");
  */
  border: none;
  background: none;
`
