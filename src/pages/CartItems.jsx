const CartItems = (props) => {

    // console.log(props)
  return (
    // <div className="card">
    //   <p>Name : {props.name}</p>
    //   <p>Price : {props.price}</p>
    //   <p>Qty : {props.qty}</p>
    // </div>
    <div className="card" style={{width: '18rem'}}>
        <img src={props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price} THB</p>
            <p className="card-text">{props.qty} Items</p>
            
        </div>
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