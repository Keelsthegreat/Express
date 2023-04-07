const React = require('react');
const DefaultLayout = require('./layout/default');
const sneakers = require('../models/SneakerData')

class Index extends React.Component {
  render(){
    // const sneakers = this.props.sneakers;
    return (
      <DefaultLayout title={"Add New Sneakers"}>
        <form method='POST' action='/sneaker/new'>
            <label htmlFor='name'>
            Name:
            </label>
            <input type='text' 
            id='name' name='name'  required/><br/><br/>
            <label htmlFor='brand'>
                Brand:
            </label>
            <input type='text' id= 'brand' name= 'brand' required/><br/><br/>

            <label htmlFor='price'>
                Price:
            </label>

            <input type='number' id='price' name='price' required /><br/><br/>
            {/* <label htmlFor='InStock'>
                In Stock:
            </label>
            <input type="checkbox" id='InStock' name="inStock"/>  */}

            <input type='submit' value='submit' />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Index;