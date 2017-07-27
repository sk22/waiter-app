import { createAction } from 'redux-act'

export const addOrder = createAction('ADD_ORDER')
export const removeOrder = createAction('REMOVE_ORDER')
export const setOrderDelivered = createAction('SET_ORDER_DELIVERED')
export const setOrderAttributes = createAction('SET_ORDER_ATTRIBUTES')
export const setOrderProduct = createAction('SET_ORDER_PRODUCT')
export const setOrderScenario = createAction('SET_ORDER_SCENARIO')
export const removeOrderProduct = createAction('REMOVE_ORDER_PRODUCT')
