import styled from 'styled-components/macro'

export default function ConfirmationCard({ barcode }) {
  return (
    <ConfirmationCardStyled>
      <strong>{barcode}</strong>
      Ist dies die Nummer unter dem Barcode des Produktes?
    </ConfirmationCardStyled>
  )
}

const ConfirmationCardStyled = styled.div`
  border-radius: 5px;
  border: var(--border);
  width: 85vw;
  background-color: var(--confirmation-green);
  padding: 30px;
  display: grid;
  place-items: center;
  gap: 15px;
`
