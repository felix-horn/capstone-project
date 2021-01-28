import Card from '../01.UI-Elements/Card'

export default function FeedbackCard({
  feedback,
  barcode,
  itemTitles,
  shopTitles,
}) {
  return (
    <>
      {feedback === 'verify' && (
        <Card
          variant="yellow"
          header={barcode}
          text="Ist dies die Nummer unter dem Barcode des Produkts?"
        />
      )}
      {feedback === 'success' && (
        <Card
          variant="green"
          header={itemTitles.join(' / ')}
          text={`wurde ${shopTitles.join(' / ')} wieder hinzugefügt.`}
        />
      )}
      {feedback === 'failure' && (
        <Card
          variant="red"
          header={barcode}
          text="Keinem Deiner Produkte ist dieser Barcode zugeordnet."
        />
      )}
    </>
  )
}
