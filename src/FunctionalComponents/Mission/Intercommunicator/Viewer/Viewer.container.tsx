import { connect } from 'react-redux'
import { ViewerComponent } from './Viewer.component'

const mapStateToProps = (state: any) => ({
  // TODO: Nest this in a different property
  numberFromSpace: state.intercommunicatorReducer,
})

const mapDispatchToProps = (dispatch: any) => ({})

export const ViewerContainer = connect(mapStateToProps, mapDispatchToProps)(ViewerComponent)
