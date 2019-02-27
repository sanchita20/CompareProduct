import React from 'react'
import Grid from '@material-ui/core/Grid'
import './styles.css'

const Product = ({ product, compare }) =>
    // <div key={product.id} className="col-sm-6 col-md-3">
    // {product.id}
    //     <div className={"product " + (product.compare ? "compare" : "")} >
    //         <img src={product.image} alt={product.name} />
    //         <div className="image_overlay"/>
    //         <div className="view_details" onClick={() => compare(product)}>
    //           {product.compare ? "Remove" : "Compare"}
    //         </div>
    //         <div className="stats">
    //             <div className="stats-container">
    //                 <span className="product_price">{product.price}</span>
    //                 <span className="product_name">{product.name}</span>
    //                 <p>{product.description}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>;
    <div>
        <Grid>{product.plan.status}</Grid>
    </div>

export default Product
