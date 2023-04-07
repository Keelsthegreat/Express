const React = require('react');
const DefaultLayout = require('./layout/default');
// const sneakers = require('../models/SneakerData')

class Index extends React.Component {
  render(){
    const sneakers = this.props.sneakers;
    return (
      <DefaultLayout title={"Sneaker Index Page"}>
        <nav>
          <a href="/sneaker/new">Add New Kicks</a>
        </nav>
        <ul>
          {
            sneakers.map((sneaks)=>{
              return (
                <li key={sneaks._id}>
                  The <a href={`/sneaker/${sneaks._id}`}>{sneaks.name}</a>
                  {' '}is {sneaks.brand} <br/>
                  <p>price {sneaks.price}</p>
                  {
                    sneaks.inStock?
                    '  You\'re in luck ':
                    ' Sorry, we\'re out of stock'
                  }
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;