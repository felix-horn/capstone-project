Setup

```js padded
<FeedbackCard
  className="yellow"
  header="12345678"
  text="Ist dies die Nummer unter dem Barcode des Produkts?"
/>
```

Success

```js padded
<FeedbackCard
  className="green"
  header="Item Title"
  text={`wurde Shop Title hinzugefügt.`}
/>
```

Failure

```js padded
<FeedbackCard
  className="red"
  header="12345678"
  text="Keinem Deiner Produkte ist dieser Barcode zugeordnet."
/>
```
