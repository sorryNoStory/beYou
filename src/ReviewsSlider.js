import React, { useState } from "react";
import next from "./img/icons/next.png";
import prev from "./img/icons/prev.png";

const ReviewsSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      author: "Susan",
      text: `I've been using this serum for a month now and my skin has never looked better. Fine lines and wrinkles have greatly reduced. I highly recommend it!`,
      avatar:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      author: "Michael",
      text: `I've been using this serum for a couple of weeks now and I am already seeing a difference in my skin's brightness and firmness.`,
      avatar:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      author: "David",
      text: `I have oily skin and I was hesitant to try this serum but it has been a game changer for me. It doesn't make my skin oily or shiny and it has helped with my acne. `,
      avatar:
        "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      author: "Emily",
      text: `I've been using this serum for a month now and I am very happy with the results. My skin looks more youthful and radiant.  `,
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      author: "James",
      text: `I love this serum! It has really helped with my dark circles and puffiness. It absorbs quickly and doesn't leave a greasy residue. - James"      `,
      avatar:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const handlePreviousClick = () => {
    if (currentReview === 0) {
      setCurrentReview(reviews.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };

  const handleNextClick = () => {
    if (currentReview === reviews.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };

  return (
    <div className="testimonials" id="testimonials">
      <h2 className="testimon">TESTIMONIALS</h2>
      <div className="slider">
        <button className="sliderbtn" onClick={handlePreviousClick}>
          <img className="btnicon" src={prev} alt="previous icon" />
        </button>
        <img
          className="sliderimg"
          src={reviews[currentReview].avatar}
          alt={reviews[currentReview].author}
        />
        <div className="reviewtext">
          <h3>{reviews[currentReview].author} 💬</h3>
          <p> “ {reviews[currentReview].text} “</p>
        </div>
        <button className="sliderbtn" onClick={handleNextClick}>
          <img className="btnicon" src={next} alt="button icon" />
        </button>
      </div>
    </div>
  );
};

export default ReviewsSlider;
