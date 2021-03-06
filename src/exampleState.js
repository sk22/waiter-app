export default {
  environments: {
    s1: {
      name: 'Festival',
      products: {
        p1: '3.50',
        p2: '7.00'
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
      environment: 's1',
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
