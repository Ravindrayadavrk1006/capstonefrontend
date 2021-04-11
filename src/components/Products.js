import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products(props) {

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
      <section>
        <div style={{margin:'0',}} className='container'>
          <div className='row'>
            {/* <div className='col-3 sidebarforcategory'>
              <div className='categoriesOfArt'>
                <ul class='list-group'>
                  <li className='list-group-item'>Cras justo odio</li>
                  <li className='list-group-item'>Dapibus ac facilisis in</li>
                  <li className='list-group-item'>Morbi leo risus</li>
                  <li className='list-group-item'>Porta ac consectetur ac</li>
                  <li className='list-group-item'>Vestibulum at eros</li>
                </ul>
              </div>
            </div> */}
            <div className='col'>
              <div className='products'>
                {products
                  .filter((product) => {
                    if (
                      product.title
                        .toLowerCase()
                        .includes(props.search.toLowerCase())
                    ) {
                      return product
                    } else {
                      return false
                    }
                  })
                  .map((product) => (
                    <div className='products-card' key={product.pid}>
                      <Link to={`/products/${product.pid}`}>
                        <img src={product.images[0]} alt='cover-pic' />
                      </Link>
                      <div className='products-content'>
                        <h3 title={product.title}>
                          <Link to={`/products/${product.pid}`}>
                            {product.title}
                          </Link>
                        </h3>
                        <p className='products-desc'>{product.description}</p>
                        <p className='products-price'>
                          &#8377; {product.price}
                        </p>
                        <button onClick={() => addCart(product.pid)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
