import React from 'react';
import "./starfoodFlyer.css";
import { Link } from 'react-router-dom';

const StarFoodFlyer = () => {
  return (
    <footer className="starfood-footer">
      <div className='content_flex'>
        <Link to='#'><img src="public/image/starfood.png" alt="public/image/starfood.png" width={100} /></Link>

        <div className='ulflex'>

          <div>
            <ul>
            <h5>Locations</h5>
              <li>Mushin</li>
              <li>Adenta</li>
              <li>East Legon</li>
              <li>Cantonment</li>
              <li>Enugu</li>
              <li>Kaduna South</li>
            <Link>See more</Link>
            </ul>
          </div>

          <div>
            <ul>
            <h5>Download</h5>
              <li>Google Play Store</li>
              <li>iOS App Store</li>
            </ul>
          </div>

          <div>
            <ul>
            <h5>Get help</h5>
              <li>Email</li>
            </ul>
          </div>

          <div>
            <ul>
            <h5>Legal</h5>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div> &copy; {new Date().getFullYear()} StarFood. All rights reserved.</div>
        <div>
          f i x
        </div>
      </div>

    </footer>
  );
};

export default StarFoodFlyer;
