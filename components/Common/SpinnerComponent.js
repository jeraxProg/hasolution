import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = ({spinnerColor = '#000', spinnerSize = '2rem'}) => {
  return (
    <>
        <Spinner animation="border" style={{color: spinnerColor, width: spinnerSize, height: spinnerSize}} />
    </>
  )
}

export default SpinnerComponent;