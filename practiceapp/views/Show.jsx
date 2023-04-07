const React = require('react');
const DefaultLayout = require('./layout/default');
const sneakers = require('../models/SneakerData')

class Index extends React.Component {
  render(){
    const sneaker = this.props.sneaker ;
    return (
      <DefaultLayout title={"Sneaker Show Page"}>
               
                  The <a href={`/sneaker/${sneaker._id}`}>{sneaker.name}</a><br/>
                  brand is {sneaker.brand} <br/>
                  <p>price {sneaker.price}</p>
                  {
                    sneaker.inStock?
                    '  You\'re in luck ':
                    ' Sorry, we\'re out of stock'
                  }
                  <br/>
                <form method='POST' action={`/sneaker/${sneaker._id}?_method=PUT`}>
                    <label htmlFor='name'>
                    Name:
                    </label>
                    <input type='text' 
                    id='name' name='name' defaultValue={sneaker.name} required/><br/><br/>
                    <label htmlFor='brand'>
                        Brand:
                    </label>
                    <input type='text' id= 'brand' name= 'brand' defaultValue={sneaker.brand} required/><br/><br/>

                    <label htmlFor='price'>
                        Price:
                    </label>

                    <input type='number' id='price' name='price' defaultValue={sneaker.price} required/><br/><br/>
                    {/* <label htmlFor='InStock'>
                        In Stock:
                    </label>
                    { sneaker.inStock? <input type="checkbox" id="InStock" name='inStock' defaultChecked />: <input type="checkbox" id="InStock" name='inStock'/> } */}
                    <input type='submit' value='submit' />
                </form>
                <form method='POST' action={`/sneaker/${sneaker._id}?_method=DELETE`}
                >
                    <button type='submit'>Delete</button>
                </form>
              
      </DefaultLayout>
    )
  }
}

module.exports = Index;