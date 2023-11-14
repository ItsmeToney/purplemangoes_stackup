const createNav = () => {
  let nav = document.querySelector('.navbar');


  nav.innerHTML = `
      <div class="nav">
          <img src="img/dark-logo.jpg" class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product">
                  <button class="search-btn">search</button>
              </div>
              <a >
                <img src="img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Log in as name</p>
                    <button class="btn" id="user-btn">Log Out</button>
                </div>
              </a>
              <a href="#"><img src="img/cart.png" alt=""></a>
          </div>
      </div>
      <ul class="links-container">
          <li class="link-item"><a href="http://127.0.0.1:5500/public/index.html" class="link">home</a></li>
          <li class="link-item"><a href="http://127.0.0.1:5500/public/mobile.html" class="link">mobile</a></li>
          <li class="link-item"><a href="http://127.0.0.1:5500/public/laptop.html" class="link">laptop</a></li>
          <li class="link-item"><a href="#" class="link">television</a></li>
          <li class="link-item"><a href="#" class="link">smart wearable</a></li>
          <li class="link-item"><a href="#" class="link">camera</a></li>
          <li class="link-item"><a href="#" class="link">home appliances</a></li>
      </ul>
  `;
}


createNav();

//nav popup
const userImageButton = document.querySelector("#user-img");
const userPop = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click",() => {
    userPop.classList.toggle("hide");

})


window.onload = ()=>{
    let user =JSON.parse(sessionStorage.user || null);
    if(user != null){
        //user logged in
        popuptext.innerHTML=`Login in as , ${user.name}`;
        actionBtn.innerHTML='Log out';
        actionBtn.addEventListener('click',()=>{
            sessionStorage.clear();
            location.reload();
        })
    } else{
        //user is logged out
        popuptext.innerHTML= 'log in to place order';
        actionBtn.innerHTML='log in';
        actionBtn.addEventListener('click',() =>{
            location.href= '/login';
        })
    }
}