export default {
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
    p1: {
      name: 'Drink',
      category: 'Beverages'
    },
    p2: {
      name: 'Meal',
      category: 'Food'
    }
  },
  orders: {
    o1: {
      scenario: 's1',
      delivered: false,
      attributes: {
        place: '13',
        notes: ''
      },
      products: {
        p1: 4,
        p2: 3
      }
    }
  }
}
