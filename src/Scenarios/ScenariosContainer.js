import { connect } from 'react-redux'
import { generate } from 'shortid'

import { addScenario } from './scenariosActions'
import Scenarios from './Scenarios'

const mapStateToProps = ({ scenarios }) => ({ scenarios })

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: ({ name, products }) => {
    if (!name) return
    props.history.goBack()
    dispatch(addScenario({ id: generate(), name, products }))
  },
  onRemove: id => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios)
