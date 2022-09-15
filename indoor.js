import React from 'react';
import './style/indoor.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Indoor = () => (
  <div class='indoor'>
    <div class='fixed-bloc-indoor'>
      <div class='position-contant-fixed-bloc-indoor'>
        <div class='title-syte-indoor'>
          <a id="link" href='' class='style-link-for-fixed-title-indoor'>INDOOR</a>
        </div>
        <div class='hdkbac-indoor'>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>Home</a>
          </div>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>Decor</a>
          </div>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>Kitchen</a>
          </div>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>Bedroom</a>
          </div>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>About</a>
          </div>
          <div>
            <a id="link" href='' class='style-link-bloc-indoor'>Contact</a>
          </div>
        </div>
        <div class='log-in-basket-indoor'>
          <a href='' id='link' class="account-indoor"><AccountCircleIcon /></a>
          <div class="log-in-prickles">
            <a id="link" href='' class="style-title-text-indoor">Log In</a>
          </div>
          <a href='' id='link' class="mall-icon-indoor"><LocalMallIcon /></a>
        </div>
      </div>
    </div>
    <div class='invis-bloc-for-indoor' />
    <div class='first-bloc-indoor'>
      <div class='f-half-first-bloc-indoor'>
        <div class='half-f-info-1-indoor'>MODERN DESIGN MEETS COZY COMFORT</div>
        <div class='half-f-info-2-indoor'>Create the perfect space</div>
      </div>
      <div class='t-half-first-bloc-indoor'></div>
    </div>
    <div class='second-bloc-indoor'>
      <div class='pilar-bloc-indoor'>
        <a id="link" href=''>
          <div class='photo-1-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='butt-pilar-bloc-indoor'>KITCHEN</div>
        </a>
        <a id="link" href=''>
          <div class='photo-2-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-3-indoor hover-photo-indoor'>
            <div class="mark-photo-indoor">ON SALE</div>
          </div>
        </a>
      </div>
      <div class='pilar-bloc-indoor'>
        <a id="link" href=''>
          <div class='photo-4-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-5-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-6-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-7-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-8-indoor hover-photo-indoor' />
        </a>
      </div>
      <div class='pilar-bloc-indoor'>
        <a id="link" href=''>
          <div class='butt-pilar-bloc-indoor position-butt-pilar-bloc'>DECOR</div>
        </a>
        <a id="link" href=''>
          <div class='photo-9-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-10-indoor hover-photo-indoor' />
        </a>
        <a id="link" href=''>
          <div class='photo-11-indoor hover-photo-indoor'>
            <div class="mark-photo-indoor">NEW</div>
          </div>
        </a>
        <a id="link" href=''>
          <div class='butt-pilar-bloc-indoor'>BEDROOM</div>
        </a>
        <a id="link" href=''>
          <div class='photo-12-indoor hover-photo-indoor' />
        </a>
      </div>
    </div>
    <div class='bloc-addit-info-indoor'>
      <div class='position-addit-info-indoor'>
        <div class='addint-bloc-1-indoor'>
          <div class='addit-info-bloc-1-indoor'>Contact Us</div>
          <div class='addit-info-bloc-1-indoor'>1-800-000-0000</div>
          <div class='addit-info-bloc-1-indoor'>info@mysite.com</div>
          <div class='social-networks-icons-indoor'>
            <a href='' id='link' class="addit-icon-prickles"><InstagramIcon /></a>
            <a href='' id='link' class="addit-icon-prickles"><FacebookIcon /></a>
            <a href='' id='link' class="addit-icon-prickles"><TwitterIcon /></a>
          </div>
        </div>
        <div class='addint-bloc-2-indoor'>
          <div class='addit-info-bloc-1-indoor'>We Accept</div>
          <div class='bank-card-indoor'>
            <div class='bank-card-1-indoor' />
            <div class='bank-card-2-indoor' />
            <div class='bank-card-3-indoor' />
            <div class='bank-card-4-indoor' />
          </div>
        </div>
        <div class='addint-bloc-3-indoor'>
          <div>Join our mailing list</div>
          <input class='email-for-addit-indoor' placeholder="Enter your email here" />
          <a href='' id='link'>
            <div class='butt-addit-indoor'>Subscribe Now</div>
          </a>
        </div>
      </div>
    </div>
    <div class="by-indoor">© 2023 by INDOOR. Proudly created with Adima.com</div>
  </div>
);

export default Indoor;