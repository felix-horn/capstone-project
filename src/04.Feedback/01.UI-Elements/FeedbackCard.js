import styled from 'styled-components/macro'

export default function FeedbackCard({
  feedback,
  barcode,
  itemTitlesMatchingBarcode,
  shopTitlesToMatchingItems,
}) {
  return (
    <>
      {feedback === 'validate' && (
        <FeedbackCardStyled className="yellow">
          <strong>{barcode}</strong>
          Ist dies die Nummer unter dem Barcode des Produkts?
        </FeedbackCardStyled>
      )}
      {feedback === 'success' && (
        <FeedbackCardStyled className="green">
          <strong>{itemTitlesMatchingBarcode.join(' / ')}</strong>
          {`wurde ${shopTitlesToMatchingItems.join(' / ')} hinzugefügt.`}
        </FeedbackCardStyled>
      )}
      {feedback === 'failure' && (
        <FeedbackCardStyled className="red">
          <strong>{barcode}</strong>
          Keinem Deiner Produkte ist dieser Barcode zugeordnet.
        </FeedbackCardStyled>
      )}
    </>
  )
}

const FeedbackCardStyled = styled.div`
  box-shadow: var(--light-box-shadow);
  border-radius: 5px;
  border: var(--border);
  border: none;
  width: 85vw;
  padding: 30px;
  display: grid;
  place-items: center;
  gap: 15px;

  &.yellow {
    background-color: var(--attention-yellow);
  }
  &.green {
    background-color: var(--confirmation-green);
  }
  &.red {
    background-color: var(--warning-red);
  }
`
