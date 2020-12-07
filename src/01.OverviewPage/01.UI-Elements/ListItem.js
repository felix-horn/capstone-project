import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function ListItem({ title }) {
  return (
    <ListItemStyled>
      <CheckboxDiv />
      <TitleStyled>{title}</TitleStyled>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`

const CheckboxDiv = styled.div`
  border: 1px solid var(--light-gray);
  border-radius: 2px;
  height: 15px;
  width: 15px;
`

const TitleStyled = styled.p`
  margin: 0;
  color: var(--dark-gray);
`
