import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/core/Checkbox'

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function ListItem({ title }) {
  return (
    <ListItemStyled data-testid="list-item">
      {/* <CheckboxStyled type="checkbox" color="default" data-testid="checkbox" /> */}
      <CheckboxDiv />
      <TitleStyled>{title}</TitleStyled>
    </ListItemStyled>
  )
}

const ListItemStyled = styled.label`
  /* margin: -7px; */
  display: flex;
  align-items: center;
`

const CheckboxDiv = styled.div`
  margin: 5px;
  border: 1px solid var(--light-gray);
  border-radius: 2px;
  height: 15px;
  width: 15px;
`

const CheckboxStyled = styled(Checkbox)`
  margin: -5px;
  transform: scale(0.9);
  opacity: 0.5;
`

const TitleStyled = styled.p`
  margin: 0;
  /* font-size: 16px;
  font-weight: 100 !important; */
  color: var(--dark-gray);
  /* margin-left: 9px; */
`
