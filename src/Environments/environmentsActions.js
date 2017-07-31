import { createAction } from 'redux-act'

export const addEnvironment = createAction('ADD_SCENARIO')
export const removeEnvironment = createAction('REMOVE_SCENARIO')
export const setEnvironmentName = createAction('SET_SCENARIO_NAME')
export const setEnvironmentProduct = createAction('SET_SCENARIO_PRODUCT')
export const removeEnvironmentProduct = createAction('REMOVE_SCENARIO_PRODUCT')
