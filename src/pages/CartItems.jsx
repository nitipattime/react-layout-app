const CartItems = (props) => {
  return (
    <div className="card">
      <p>Name : {props.name}</p>
      <p>Price : {props.price}</p>
      <p>Qty : {props.qty}</p>
    </div>
  )
}

export default CartItems

// import {Component} from 'react'

// class CartItems extends Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

//   export default CartItems