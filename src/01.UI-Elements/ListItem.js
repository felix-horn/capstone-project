import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isCheckmarked: PropTypes.bool,
}

export default function ListItem({ titleListItem, isCheckmarked }) {
  return (
    <Wrapper>
      <label>
        <CheckboxStyled type="checkbox" checked={isCheckmarked} />
        <span>{titleListItem}</span>
      </label>
    </Wrapper>
  )
}

const CheckboxStyled = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
`

const Wrapper = styled.div`
  margin-left: 1px;
  & :not(:last-of-type) {
    margin-bottom: 12px;
  }
  label {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 10px;
    font-weight: 300;
    color: #212121;
  }
`
