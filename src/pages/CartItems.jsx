//// Function Component
const CartItems = (props) => {

    console.log(props)
    console.log(props.product)

    // object destructuring
    const {imgUrl, name, price, qty} = props.product

    // const arr = [1,2,3,4,5];
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);

    // const {p1,p2,p3,p4,p5} = arr // 1,2,3,4,5
    // const {p1,p2,,p4,p5} = arr // 1,2,,4,5

  return (
    // <div className="card">
    //   <p>Name : {props.name}</p>
    //   <p>Price : {props.price}</p>
    //   <p>Qty : {props.qty}</p>
    // </div>

    <div className="card" style={{width: '18rem'}}>
        {/* <img src={props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price} THB</p>
            <p className="card-text">{props.qty} Items</p>
            
        </div> */}
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price} THB</p>
            <p className="card-text">{qty} Items</p>
            
        </div>
    </div>



  )
}

export default CartItems

//// Class Component
// import {Component} from 'react'

// class CartItems extends Component {
//   render() {

//       const {imgUrl, name, price, qty} = this.props.product
//       // return <h1>Hello, {this.props.name}</h1>;

//       return(
//         <div className="card" style={{width: '18rem'}}>
//           {/* <img src={this.props.imgurl} className="card-img-top" alt="..." />
//           <div className="card-body">
//               <h5 className="card-title">{this.props.name}</h5>
//               <p className="card-text">{this.props.price} THB</p>
//               <p className="card-text">{this.props.qty} Items</p>
//           </div> */}

//           <img src={imgUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//               <h5 className="card-title">{name}</h5>
//               <p className="card-text">{price} THB</p>
//               <p className="card-text">{qty} Items</p>
//           </div>
//         </div>
//       )
//     }
//   }

//   export default CartItems