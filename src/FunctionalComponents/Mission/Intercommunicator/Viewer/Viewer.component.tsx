import React from 'react'

interface Props {
  numberFromSpace: number[]
}

export const ViewerComponent: React.FunctionComponent<Props> = props => (
  <>
    <h5>Generated numbers collection:</h5>
    <ul>
      {props.numberFromSpace &&
        props.numberFromSpace.map(currentNumber => <li key={currentNumber}>{currentNumber}</li>)}
    </ul>
  </>
)
