import { createAction } from 'redux-act'

export const addScenario = createAction('ADD_SCENARIO')
export const removeScenario = createAction('REMOVE_SCENARIO')
export const setScenarioName = createAction('SET_SCENARIO_NAME')
export const setScenarioProduct = createAction('SET_SCENARIO_PRODUCT')
export const removeScenarioProduct = createAction('REMOVE_SCENARIO_PRODUCT')
