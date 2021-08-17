import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "../data";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const checkIndex = (index) => {
        if(index > people.length -1 ){
            return 0;
        }
        if( index < 0) {
            return people.length -1
        }
        return index;
  };

  const prevPerson = () => {
      setIndex( (index) => {
          let newIndex = index + 1;
          return checkIndex(newIndex);
      })
  }
  const nextPerson = () => {
    setIndex( (index) => {
        let newIndex = index - 1;
        return checkIndex(newIndex);
    })
}

  const randomPerson = () => {

    let randomNumber = Math.floor(Math.random() * people.length);

    if( randomNumber === index ) {
        randomNumber = index + 1 
    }
    setIndex (checkIndex(randomNumber));
  }

  return (
    <section className="main" key={id}>
      <div className="user__image">
        <img src={image} alt="pic" />
    
      </div>
      <div className="user__details">
        <h1>{name}</h1>
        <h2>{job}</h2>
        <p>{text}</p>
      </div>
      <div className="user__button">
        <button onClick={prevPerson} >
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <div className="user__surprise">
        <button onClick={randomPerson}>Suprise</button>
      </div>
    </section>
  );
}

export default Review;
