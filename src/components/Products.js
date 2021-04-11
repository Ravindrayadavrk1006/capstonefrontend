import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products(props) {

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
      <section>
        <div
          style={{ margin: '0', marginRight: '0', boxSizing: 'border-box' }}
          className='container'
        >
          <div className='row'>
            <div className='col-2 '>
              <div className='categoriesOfArt'>
                <ul style={{ position: 'sticky' }} className='list-group'>
                  <li className='art-category-item list-group-item'>Pottery</li>
                  <li className='art-category-item list-group-item'>
                    Artifacts
                  </li>
                  <li className='art-category-item list-group-item'>
                    Paintings
                  </li>
                  <li className='art-category-item list-group-item'>
                    Handicrafts
                  </li>
                  <li className='art-category-item list-group-item'>Others</li>
                </ul>
              </div>
            </div>
            <div className='col-10'>
              <div className='products'>
                {products.map((product) => (
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
                      <p className='products-price'>&#8377; {product.price}</p>
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
