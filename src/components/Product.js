import React from 'react';
import { data } from '../data';
import '../css/product.css'
import classnames from 'classnames';



export default function Product() {


  return (
    <>
      <section className="product">
        <div className="container" >
          <div className="row" >
            {data.map((card, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index} >
                  <div className="card_image" >
                    <img
                      src={card.imageUrl}
                      className={classnames({
                        "card-img-top": true,
                        selected: card.status === 'selected'
                      })}
                      alt={card.cardName} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}