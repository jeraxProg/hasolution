function Error({ statusCode }) {
    return (
      <p style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client [Application error: a client-side exception has occurred (see the browser console for more information)]'}
      </p>
    )
  }
  
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
  
export default Error