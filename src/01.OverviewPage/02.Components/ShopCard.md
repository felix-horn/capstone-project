```js padded
<ShopCard
shopId={'x'} 
database={{
    shops: {
    allIds: ['x', 'y'],
    byId: {
      x: {
        id: 'x',
        title: 'Shop X',
        items: ['a', 'b', 'c'],
      },
     },
  },
  items: {
    allIds: ['a', 'b', 'c'],
    byId: {
      a: {
        id: 'a',
        title: 'Item A',
        isChecked: false,
      },
      b: {
        id: 'b',
        title: 'Item B',
        isChecked: false,
      },
      c: {
        id: 'c',
        title: 'Item C',
        isChecked: true,
      },
    },
  },
}}
/>
```