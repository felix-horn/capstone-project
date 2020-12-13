import styled from 'styled-components/macro'

export default function FeedbackCard({
  useCase,
  itemIdsToBarcode,
  isBarcodeInDatabase,
  barcode,
  database,
}) {
  return (
    <>
      {useCase === 'setup' && (
        <FeedbackCardStyled className="yellow">
          <strong>{barcode}</strong>
          Ist dies die Nummer unter dem Barcode des Produktes?
        </FeedbackCardStyled>
      )}
      {useCase === 'uncheckItem' && isBarcodeInDatabase && (
        <FeedbackCardStyled className="green">
          <strong>
            {itemIdsToBarcode
              .map((id) => database.items.byId[id]?.title)
              .toString()}
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
            .toString()}{' '}
          hinzugefügt.
        </FeedbackCardStyled>
      )}
      {useCase === 'uncheckItem' && !isBarcodeInDatabase && (
        <FeedbackCardStyled className="red">
          <strong>{barcode}</strong>
          Keinem Deiner Produkte ist dieser Barcode zugeordnet.
        </FeedbackCardStyled>
      )}
    </>
  )
}

const FeedbackCardStyled = styled.div`
  border-radius: 5px;
  border: var(--border);
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
