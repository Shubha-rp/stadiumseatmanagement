 import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import image from './c1.jpg';
import images from './c2.jpg';
import imagess from './c3.jpg';
import imagesss from './c5.jpg';
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Images and Welcome */}
      <div className="hero-section">
        <div className="hero-content">
          <br /><br />
          <h1>Welcome to Stadium</h1><h1> Seat Booking</h1><br />
          <p>Find and book seats for your favorite events with ease.</p>
          <Link to="/EventPage" className="cta-button">Featured events</Link>
          <br /><br />
          <h2 >Experience Unforgettable Events</h2><br />
        <p>At Stadium Seat Booking, we bring you closer to your favorite sports, concerts, and cultural performances. Whether you're a die-hard fan or just looking for a memorable experience, we make it easy to find and book seats.</p>
        <p>Explore our wide range of events, from thrilling sports matches to electrifying concerts, all in one convenient platform.</p>
        </div>

        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            transitionTime={500}
            className="custom-carousel"
          >
            <div>
              <img src="https://img.freepik.com/premium-photo/stadium-seating-layout-vip-experience_933496-8987.jpg" alt="Promo 1" />
            </div>
            <div>
              <img src="https://images.indianexpress.com/2024/04/rcb.jpg" alt="Promo 2" />
            </div>
            <div>
              <img src="https://img.freepik.com/free-photo/american-football-field_23-2151117450.jpg" alt="Promo 3" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* <div className="home-link">
      
        <Link to="/events" className="cta-button">View my ticket</Link>
      </div> */}

      {/* Customer Testimonials */}
      <div className="testimonials">
        <h2>Customer Reviews</h2>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          className="custom-carousel"
        >
          <div className="testimonial">
          <img src={image} alt="abcd" className='testimonial-img'/>
            <p>"Using the new stadium management system has significantly streamlined our event operations. The real-time seat availability feature is a game-changer, allowing our patrons to see and select their seats instantly. The mobile app integration has also made ticket purchasing and entry hassle-free. Highly recommended!"</p>
            <p>- Prajwal Gangapur</p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial">
          <img src={images} alt="abcd" className='testimonial-img'/>
            <p>"The enhanced security measures in the stadium management system have made a noticeable difference. We feel more secure with the facial recognition and RFID technology in place. Additionally, the data analytics feature has provided valuable insights into customer behavior, helping us optimize our pricing strategy and improve fan experience"</p>
            <p>-Sharanya Y M </p>
            <div className="rating">★★★★☆</div>
          </div>
          <div className="testimonial">
          <img src={imagess} alt="abcd" className='testimonial-img'/> 
            <p>"As a person with accessibility needs, I appreciate the thoughtful features incorporated into this system. The designated seating areas and accessible ticketing options have made attending events much more enjoyable for me. This is a huge step forward in making stadiums inclusive for everyone"</p>
            <p>- Avinash Kumar</p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial">
          <img src={imagess} alt="abcd" className='testimonial-img'/> 
            <p>"As a person with accessibility needs, I appreciate the thoughtful features incorporated into this system. The designated seating areas and accessible ticketing options have made attending events much more enjoyable for me. This is a huge step forward in making stadiums inclusive for everyone"</p>
            <p>- Nitinraj gampa</p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial">
          <img src={imagesss} alt="abcd" className='testimonial-img'/> 
            <p>"As a person with accessibility needs, I appreciate the thoughtful features incorporated into this system. The designated seating areas and accessible ticketing options have made attending events much more enjoyable for me. This is a huge step forward in making stadiums inclusive for everyone"</p>
            <p>- Sourabh desai</p>
            <div className="rating">★★★★★</div>
          </div>
        </Carousel>
      </div>


      {/* Featured Services
      <div className="featured-services">
        <h2>Featured Services</h2>
        <ul>
          <li>VIP Packages</li>
          <li>Group Bookings</li>
          <li>Hospitality Options</li>
        </ul>
      </div>

      {/* News and Updates */}
      {/* <div className="news-updates">
        <h2>News and Updates</h2>
        <div className="news-item">
          <h3>Latest News </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>

       */} 

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/AboutUs">About Us</Link>
          
        </div>
        <div className="footer-contact">
          <p>Contact: info@stadiumbooking.com</p>
          <p>Phone: +919448935830</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;