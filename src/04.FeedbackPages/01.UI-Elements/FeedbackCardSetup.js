import styled from 'styled-components/macro'

export default function FeedbackCardSetup({ barcode }) {
  return (
    <FeedbackCardSetupStyled>
      <strong>{barcode}</strong>
      Ist dies die Nummer unter dem Barcode des Produkts?
    </FeedbackCardSetupStyled>
  )
}

const FeedbackCardSetupStyled = styled.div`
  border-radius: 5px;
  border: var(--border);
  width: 85vw;
  padding: 30px;
  display: grid;
  place-items: center;
  gap: 15px;
  background-color: var(--attention-yellow);
`
