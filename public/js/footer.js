const createFooter = () => {
  let footer = document.querySelector('footer');


  footer.innerHTML = `
  <div class="footer-content">
      <img src="img/dark-logo.jpg" class="logo1" alt="image cant be displayed">
      <div class="footer-ul-container">
          <ul class="category">
              <li class="category-title">Electronics</li>
              <li><a href="#" class="footer-link">mobiles</a></li>
              <li><a href="#" class="footer-link">laptops</a></li>
              <li><a href="#" class="footer-link">desktop pC</a></li>
              <li><a href="#" class="footer-link">watches</a></li>
              <li><a href="#" class="footer-link">camera</a></li>
              <li><a href="#" class="footer-link">tablets</a></li>
              <li><a href="#" class="footer-link">speakers</a></li>
              <li><a href="#" class="footer-link">network components</a></li>
            
          </ul>
          <ul class="category">
              <li class="category-title">Home appliances</li>
              <li><a href="#" class="footer-link">television</a></li>
              <li><a href="#" class="footer-link">washing machine</a></li>
              <li><a href="#" class="footer-link">refrigerator</a></li>
              <li><a href="#" class="footer-link">air conditioner</a></li>
              <li><a href="#" class="footer-link">kitchen appliances</a></li>
              
          </ul>
      </div>
  </div>
  <p class="footer-title">About company</p>
  <p class="info">E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Electron houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Electron is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. </p>
  <p class="info1">Support emails - help@electron.com, customersupport@electron.com</p>
  <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
  <div class="footer-social-container">
      <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
      </div>
  </div>
  <p class="footer-credit">Your One-Stop Destination for Cutting-Edge Electronics!</p>
  `;
}


createFooter();


