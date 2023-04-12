import React, { useState } from "react";
import { data } from '../data';
import '../css/cardList.css'
import classnames from 'classnames';

function CardList() {
  const [cardList, setCardList] = useState(data);

  const handleCardClick = (card, index) => {
    //clone current array to the new one
    const newCardList = [...cardList]

    //console.log(card, index);
    // toogle state
    const newCard = {
      ...newCardList[index],
      status: newCardList[index].status === 'omitted' ? 'selected' : 'omitted',
    };
    newCardList[index] = newCard;

    setCardList(newCardList);
  };


  return (
    <>
      <section className="product">
        <div className="container" >
          <div className="row" >
            {cardList.map((card, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index} >
                  <div className="card_image" >
                    <img
                      src={card.imageUrl}
                      className={classnames({
                        "card-img-top": true,
                        selected: card.status === 'selected'
                      })}
                      alt={card.cardName}
                      onClick={() => handleCardClick(card, index)}
                    />
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

export default CardList;