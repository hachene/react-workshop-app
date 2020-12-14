import React from 'react'

export const RequesterComponent = (props: { onRequestCommunication: () => void }) => (
  <button onClick={props.onRequestCommunication}> Request Communication</button>
)
