```js padded
<List 
    listAllocation={["a", "b"]}
    list={ {       byId: {
            "a": { id: "a", title: "Koks", isChecked: false },
            "b": { id: "b", title: "Nutten", isChecked: false},
        }
    }}
/>

<List 
    listAllocation={["c", "d"]}
    list={ {       byId: {
            "c": { id: "c", title: "Gummibärchen", isChecked: true },
            "d": { id: "d", title: "Pumuckl-Torte", isChecked: true},
        }
    }}
/>
```