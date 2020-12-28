Unchecked article
```js padded
<ListItem itemId={'a'} shopId={'x'} 
database={{
    shops: {
    allIds: ['x'],
    byId: {
      x: {
        id: 'x',
        title: 'Shop X',
        items: ['a', 'b'],
      },
    },
  },
  items: {
    allIds: ['a', 'b'],
    byId: {
      a: {
        id: 'a',
        title: 'Item A',
        isChecked: false,
      },
      b: {
        id: 'b',
        title: 'Item B',
        isChecked: true,
      },      
    },
  },
}}/>
```

Checked article
```js padded
<ListItem itemId={'b'} shopId={'x'} 
database={{
    shops: {
    allIds: ['x'],
    byId: {
      x: {
        id: 'x',
        title: 'Shop X',
        items: ['a', 'b'],
      },
    },
  },
  items: {
    allIds: ['a', 'b'],
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
    },
  },
}}/>
```