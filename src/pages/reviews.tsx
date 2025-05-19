import reviews from "../data/reviewData";
import "../styles/Reviews.css";
import ContactForm from "../components/ContactForm";

function ReviewsPage() {
  return (
    <div className="reviews-page-container" id="contact">
      <div className="reviews-section">
        <div className="expect-header">
          <div className="expect_header-stroke"> </div>
          <h2> Reviews</h2>
          <div className="expect_header-stroke"> </div>
        </div>

        {reviews.map((review, index) => {
            return(
                <div className="review-card" key={index}>
                    <p>{review}</p>
                </div>
            )
        })}
      </div>

      <div className="reviews-contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

export default ReviewsPage;
