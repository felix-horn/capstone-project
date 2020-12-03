import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function ListItem({ title }) {
  return (
    <ListItemStyled data-testid="list-item">
      <CheckboxStyled type="checkbox" color="default" data-testid="checkbox" />
      <TitleStyled>{title}</TitleStyled>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  display: flex;
  align-items: center;
  /* opacity: 0.5; */
`

const CheckboxStyled = styled(Checkbox)`
  padding: 3px;
  transform: scale(0.9);
  opacity: 0.5;
`

const TitleStyled = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 100 !important;
  color: var(--mid-gray);
  /* margin-left: 9px; */
`
