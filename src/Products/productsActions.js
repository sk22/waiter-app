import { createAction } from 'redux-act'

export const createProduct = createAction('CREATE_PRODUCT')
export const removeProduct = createAction('REMOVE_PRODUCT')
export const setProductName = createAction('SET_PRODUCT_NAME')
export const setProductCategory = createAction('SET_PRODUCT_CATEGORY')
