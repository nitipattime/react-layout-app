import React from 'react'
import CartItems from './CartItems'

const test = () => {
    return "bill"
}

const product = [
    {
        imgUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
        name:'IPhone',
        price: '35000',
        qty:'1'
    },
    {
        imgUrl: 'https://images-americanas.b2w.io/produtos/01/00/img/5884147/1/5884147146_1GG.jpg',
        name:'IPhone',
        price: '35000',
        qty:'2'
    },
    {
        imgUrl: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4117906/Smartfon-APPLE-Polnoc-1.jpg',
        name:'IPhone',
        price: '35000',
        qty:'3'
    },
]

const Cart = () => {
  return (
      <div className='container'>
        {/* <CartItems name="banana" price="30" qty="2" />
        <CartItems name={test()} price="40" qty="4" /> */}
        <div className="row">
            {
                product.map((product, index)=>{
                    return (
                        <div className="col-md-4 my-3" key={index}>
                            {/* <CartItems imgurl={product.imgUrl} name={product.name} price={product.price} qty={product.qty} /> */}
                            <CartItems product={product} />
                        </div>
                    )
                })
            }   
        </div>
    </div>
  )
}

export default Cart

