import React from 'react';
import './style/frais.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Video from './img/video.mp4';

const Frais = () => (
  <div class='frais'>
    <div class='f-title-frais'>
      <div class='title-discount-frais'>FREE SHIPPING ON ORDERS OVER 50$</div>
      <div class='search-link-log-frais'>
        <div class='s-o-b-s-c-frais flex-it-frais'>
          <div class="bloc-s-o-b-s-c-frais ">
            <a href="" id="link" class="style-title-text-frais">SHOP</a>
          </div>
          <div class="bloc-s-o-b-s-c-frais ">
            <a href="" id="link" class="style-title-text-frais">OUR STORY</a>
          </div>
          <div class="bloc-s-o-b-s-c-frais ">
            <a href="" id="link" class="style-title-text-frais">BLOG</a>
          </div>
          <div class="bloc-s-o-b-s-c-frais ">
            <a href="" id="link" class="style-title-text-frais">SALE</a>
          </div>
          <div class="bloc-s-o-b-s-c-frais ">
            <a href="" id="link" class="style-title-text-frais">CONTACT</a>
          </div>
        </div>
        <div class='name-title-frais flex-it-frais'>
          <a href="" id="link">
            <div class='style-name-title-frais'>FRAIS</div>
          </a>
        </div>
        <div class='search-log-bag-frais flex-it-frais'>
          <div class="search-frais flex-it-frais">
            <a href='' id='link' class="icon-search-frais"><SearchIcon /></a>
            <input type="search" class="search-text-frais" placeholder="Search..." />
          </div>
          <div class='log-and-bad-frais flex-it-frais'>
            <div class="log-bag-frais">
              <a href='' id='link' class="account-frais"><AccountCircleIcon fontSize='30px' /></a>
              <div class="log-in-frais">
                <a id="link" href='' class="style-title-text-frais">Log In</a>
              </div>
              <a href='' id='link' class="mall-icon-frais"><LocalMallIcon fontSize='30px' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='photo-info-but-frais'>
      <div class='photo-1-frais' />
      <div class='info-for-photo-1'>
        <div class='title-info-frais'>HANDCRAFTED ORGANIC SOAPS & CANDLES</div>
        <div class='text-info-frais'>JUST LIKE NATURE INTENDED</div>
        <a href="" id="link" class='butt-info-frais'>
          <div class='bloc-butt-frais'>Shop Now</div>
        </a>
      </div>
    </div>
    <div class='shop-out-fav-frais'>SHOP OUR FAVORITES</div>
    <div class='info-video-frais'>
      <div class='info-with-v-frais'>
        <div class='title-w-frais'>NATURE&#39;S ESSENCE SCENTED CANDLES</div>
        <div class='text-w-frais'>I&#39;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
        <a href="" id="link" class='butt-info-frais'>
          <div class='bloc-butt-w-frais'>Shop Candles</div>
        </a>
      </div>
      <video class='video-frais' autoPlay muted loop>
        <source src={Video} />
      </video>
    </div>
    <div class='img-probiot-frais'>
      <div class='img-soap-frais' />
      <div class='bloc-under-img-frais' />
      <div class='info-soap-frais'>
        <div class='title-w-frais'>PROBIOTIC CLEANSING BARS</div>
        <div class='text-w-frais'>I&#39;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
        <a href="" id="link" class='butt-info-frais'>
          <div class='bloc-butt-w-frais'>Shop Soap</div>
        </a>
      </div>
    </div>
    <div class='bloc-card-frais'>
      <div class='title-card-frais'>MOST POPULAR</div>
      <div class='f-card-frais'>
        <a href="" id="link">
          <div class='card-1-frais card-img-frais'>
            <div class="sele-frais">SALE</div>
          </div>
        </a>
        <a href="" id="link">
          <div class='card-2-frais card-img-frais'>
            <div class="sele-frais">SALE</div>
          </div>
        </a>
        <a href="" id="link">
          <div class='card-3-frais card-img-frais' />
        </a>
        <a href="" id="link">
          <div class='card-4-frais card-img-frais'>
            <div class="sele-frais">SALE</div>
          </div>
        </a>
      </div>
      <div class='info-for-card-frais'>
        <div class='shopt-text-frais'>
          <div class='info-card-frais'>Lavender</div>
          <div class='price-card-frais'>
            <div class='price-card-1-frais'>$85.00</div>
            <div class='price-card-2-frais'>$80.75</div>
          </div>
        </div>
        <div class='shopt-text-frais'>
          <div class='info-card-frais'>Lavender</div>
          <div class='price-card-frais'>
            {/* <div class='price-card-1-frais'>$85.00</div>
            <div class='price-card-2-frais'>$85.00</div> */}
            <div class='price-card-3-static-frais'>$85.00</div>
          </div>
        </div>
        <div class='shopt-text-frais'>
          <div class='info-card-frais'>Lavender</div>
          <div class='price-card-frais'>
            <div class='price-card-1-frais'>$15.00</div>
            <div class='price-card-2-frais'>$14.25</div>
          </div>
        </div>
        <div class='shopt-text-frais'>
          <div class='info-card-frais'>Lavender</div>
          <div class='price-card-frais'>
            <div class='price-card-1-frais'>$10.00</div>
            <div class='price-card-2-frais'>$9.50</div>
          </div>
        </div>
      </div>
    </div>
    <div class='bloc-naturally-frais'>
      <div class='bloc-for-info-natur-frais'>
        <div class='bloc-info-natur-frais'>
          <div class='title-natur-frais'>NATURALLY SIMPLE</div>
          <div class='text-natur-frais'>I&#39;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
          <div class='position-butt-natur-frais'>
            <div class='bloc-butt-w-frais'>Our Story</div>
          </div>
        </div>
      </div>
      <div class='two-photo-natur-frais'>
        <div class='photo-1-natue-frais' />
        <div class='photo-2-natue-frais' />
      </div>
    </div>
    <div class='the-frais-blog'>
      <div class='title-blog-frais'>THE FRAIS BLOG</div>
      <div class='three-photo-blog-frais'>
        <div class='photo-blog-1-frais' />
        <div class='photo-blog-2-frais' />
        <div class='photo-blog-3-frais' />
      </div>
      <div class='info-blog-frais'>
        <a href="" id="link">
          <div class='bloc-for-blog-frais'>
            <div class='title-bloc-for-blog-frais'>Re-Using Candles</div>
            <div class='text-bloc-for-blog-frais'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</div>
          </div>
        </a>
        <a href="" id="link">
          <div class='bloc-for-blog-frais'>
            <div class='title-bloc-for-blog-frais'>How to Pick the Right Scent </div>
            <div class='text-bloc-for-blog-frais'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</div>
          </div>
        </a>
        <a href="" id="link">
          <div class='bloc-for-blog-frais'>
            <div class='title-bloc-for-blog-frais'>5 Ways to Take Care of Your Candles</div>
            <div class='text-bloc-for-blog-frais'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</div>
          </div>
        </a>
      </div>
      <div class='pos-blog-butt-frais'>
        <div class='bloc-butt-frais'>Learn More</div>
      </div>
    </div>
    <div class='additional-information-frais'>
      <div class='addit-title-frais'>
        <div class='position-title-addit-frais'>
          <a href="" id="link">
            <div class='style-name-title-frais'>FRAIS</div>
          </a>
        </div>
      </div>
      <div class='all-add-info-frais'>
        <div class='pos-adds-info-frais'>
          <div class='bloc-line-add-frais'>
            <div class='bloc-info-in-line-add-frais'>
              <div class='title-for-bloc-add-frais'>SHOP</div>
              <div class='text-for-bloc-add-frais'>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">CANDLES</a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">SOAPS</a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">SALE</a>
                </div>
              </div>
            </div>
            <div class='bloc-info-in-line-add-frais'>
              <div class='title-for-bloc-add-frais'>FRAIS</div>
              <div class='text-for-bloc-add-frais'>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">OUR STORY</a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">CONTACT US</a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">FAQ</a>
                </div>
              </div>
            </div>
          </div>
          <div class='bloc-line-add-frais'>
            <div class='bloc-info-in-line-add-frais'>
              <div class='title-for-bloc-add-frais'>HELP</div>
              <div class='text-for-bloc-add-frais'>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">TERMS & CONDITIONS</a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">PRIVACY POLICY </a>
                </div>
                <div class="bloc-text-addit-frais">
                  <a href='' id='link' class="style-addit-frais">SHIPPING & RETURNS</a>
                </div>
              </div>
            </div>
            <div class='bloc-info-in-line-add-frais'>
              <div class='title-for-bloc-add-frais'>CONTACT US</div>
              <div class='text-for-bloc-add-frais'>
                <div class="bloc-text-addit-frais">123-456-7890 </div>
                <div class="bloc-text-addit-frais">INFO@MYSITE.COM</div>
              </div>
              <div class='social-networks-icons-frias'>
                <a href='' id='link' class="addit-icon-frais"><InstagramIcon /></a>
                <a href='' id='link' class="addit-icon-frais"><FacebookIcon /></a>
                <a href='' id='link' class="addit-icon-frais"><TwitterIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="by-frais">© 2023 by FRAIS. Proudly created with Adima.com</div>
  </div>
);


export default Frais;