import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  titleListItem: PropTypes.string.isRequired,
  isCheckmarked: PropTypes.bool,
}

export default function ListItem({ titleListItem, isCheckmarked }) {
  return (
    <ElementStyled>
      <CheckboxStyled type="checkbox" checked={isCheckmarked} />
      <TitleStyled>{titleListItem}</TitleStyled>
    </ElementStyled>
  )
}

const ElementStyled = styled.label`
  margin-left: 1px;
  display: flex;
  align-items: center;

  & :not(:last-of-type) {
    margin-bottom: 12px;
  }
`
const CheckboxStyled = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
`
const TitleStyled = styled.span`
  margin-left: 10px;
`
