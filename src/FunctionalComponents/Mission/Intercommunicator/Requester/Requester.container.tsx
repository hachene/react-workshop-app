// TODO: Change this to use useDispatch hook in a further commit
import { connect } from 'react-redux'
import { communicateWithAliens } from '../duck/intercommunicator.actions'
import { RequesterComponent } from './Requester.component'

// FIXME: Fix types
const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => ({
  onRequestCommunication: () => dispatch(communicateWithAliens.request()),
})

export const RequesterContainer = connect(mapStateToProps, mapDispatchToProps)(RequesterComponent)
