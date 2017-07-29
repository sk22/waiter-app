# Waiter app

## Concept

### Data Types

```javascript
scenario: shape({
  name: string,
  products: objectOf(number)
})

product: shape({
  name: string,
  category: string 
})

order: shape({
  scenario: string,
  delivered: bool,
  attributes: {
    location: string,
    notes: string,
  },
  products: objectOf(number)
})
```

### State

```javascript
{
  scenarios: objectOf(scenario),
  products: objectOf(product),
  orders: objectOf(order)
}
```

### Example

```javascript
{
  scenarios: {
    s1: {
      name: 'Festival',
      products: {
        p1: 3.5,
        p2: 7
      }
    }
  },
  products: {
    p1: { name: 'Drink', category: 'Beverages' },
    p2: { name: 'Meal', category: 'Food' },
  },
  orders: {
    o1: {
      scenario: 's1',
      delivered: false,
      attributes: {
        location: '13',
        notes: ''
      },
      products: {
        p1: 4,
        p2: 3
      }
    }
  }
}
```

### Actions

#### Scenarios

* `ADD_SCENARIO`

  ```javascript
  { id: string, name: string, products: objectOf(product) }
  ```

* `REMOVE_SCENARIO`

  ```javascript
  string
  ```

* `SET_SCENARIO_NAME`

  ```javascript
  { id: string, name: string }
  ```


* `SET_SCENARIO_PRODUCT`

  ```javascript
  { id: string, product: string, price: string }
  ```

* `REMOVE_SCENARIO_PRODUCT`

  ```javascript
  { id: string, product: string }
  ```

#### Products

* `CREATE_PRODUCT`
  
  ```javascript
  { id: string, name: string, category: ?string }
  ```

* `REMOVE_PRODUCT`
  
  ```javascript
  string
  ```

* `SET_PRODUCT_NAME`
  
  ```javascript
  { id: string, name: string }
  ```

* `SET_PRODUCT_CATEGORY`
  
  ```javascript
  { id: string, category: string }
  ```

#### Orders

* `ADD_ORDER`

  ```javascript
  string
  ```

* `REMOVE_ORDER`

  ```javascript
  string
  ```

* `SET_ORDER_DELIVERED`

  ```javascript
  { id: string, delivered: bool }
  ```

* `SET_ORDER_ATTRIBUTES`

  ```javascript
  { id: string, attributes: object }
  ```

* `SET_ORDER_PRODUCT`

  ```javascript
  { id: string, product: string, quantity: number }
  ```

* `REMOVE_ORDER_PRODUCT`

  ```javascript
  { id: string, product: string }
  ```

## License

MIT
