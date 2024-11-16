const element = (
  //   Write your code here.
  <div className='divElement'>
    <div className='flex-container'>
      <h1 className='greeting'>Super Over League</h1>
      <div>
        <img
          src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
          className='image'
        />
        <img
          src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
          className='image'
        />
      </div>
      <div></div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
