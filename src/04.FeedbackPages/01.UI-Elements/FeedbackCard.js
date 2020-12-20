import styled from 'styled-components/macro'

export default function FeedbackCard({
  feedback,
  itemIdsToBarcode,
  isBarcodeInDatabase,
  barcode,
  database,
}) {
  return (
    <>
      {feedback === 'validate' && (
        <FeedbackCardStyled className="yellow">
          <strong>{barcode}</strong>
          Ist dies die Nummer unter dem Barcode des Produkts?
        </FeedbackCardStyled>
      )}
      {feedback === 'success' && isBarcodeInDatabase && (
        <FeedbackCardStyled className="green">
          <strong>
            {itemIdsToBarcode
              .map((id) => database.items.byId[id]?.title)
              .join(' / ')}
          </strong>
          wurde{' '}
          {itemIdsToBarcode
            .map(
              (itemId) =>
                database.shops.byId[
                  database.shops.allIds.find((shopId) =>
                    database.shops.byId[shopId].items.includes(itemId)
                  )
                ].title
            )
            .join(' / ')}{' '}
          hinzugefügt.
        </FeedbackCardStyled>
      )}
      {feedback === 'failure' && !isBarcodeInDatabase && (
        <FeedbackCardStyled className="red">
          <strong>{barcode}</strong>
          Keinem Deiner Produkte ist dieser Barcode zugeordnet.
        </FeedbackCardStyled>
      )}
    </>
  )
}

const FeedbackCardStyled = styled.div`
  /* --box-shadow-color: fff; */
  /* box-shadow: 0 1px 3px var(--box-shadow-color); */
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
    /* --box-shadow-color: green; */
    background-color: var(--attention-yellow);
  }
  &.green {
    background-color: var(--confirmation-green);
  }
  &.red {
    background-color: var(--warning-red);
  }
`
