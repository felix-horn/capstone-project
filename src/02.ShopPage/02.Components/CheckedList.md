```js padded
<CheckedList 
shopId={'x'} 
database={{
    shops: {
    allIds: ['x', 'y'],
    byId: {
      x: {
        id: 'x',
        title: 'Shop X',
        items: ['a', 'b'],
      },
      y: {
        id: 'y',
        title: 'Shop Y',
        items: ['c'],
      },
    },
  },
  items: {
    allIds: ['a', 'b', 'c'],
    byId: {
      a: {
        id: 'a',
        title: 'Item A',
        isChecked: true,
      },
      b: {
        id: 'b',
        title: 'Item B',
        isChecked: true,
      },
      c: {
        id: 'c',
        title: 'Item C',
        isChecked: true,
      },
    },
  },
/>
```