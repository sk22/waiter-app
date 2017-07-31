export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('waiter-app')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('waiter-app', serializedState)
  } catch (err) {
    console.error(err)
  }
}
