
body{
  background-color: #000;
  font-family: 'Roboto', sans-serif;
}


/* custom button */
.btn-custom-danger{
  background-color: #e30b14;
  color: #fff;
}
.btn-custom-danger:hover{
  background-color: red;
  color: #fff;
}

/* header */

header{
  background-image: url('../imges/EG-en-20221031-popsignuptwoweeks-perspective_alpha_website_small');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  border-bottom: 8px solid #222222;
}
header::before{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%);
}
header .logo{
  height: 100px;
}
header h1{
  color: #ffffff;
  font-size: 50px;
}
header h2{
  color: #fff;
  font-size: 28px;
  font-weight: 300;
}
header h3{
  color: #fff;
  font-weight: 300;
  font-size: 21px;
}
header input{
  height: 63px!important;
}
header form button{
  font-size: 28px!important;
  font-weight: 300!important;
  text-transform: uppercase!important;
}
header .header-hero{
  margin: 120px 0;
}

/* story container */
.story-container{
  border-bottom: 8px solid #222222;
}
.story-container h1{
  color: #ffffff;
  font-size: 3.125rem;
}
.story-container h2{
  color: #ffffff;
  font-size: 1.625rem;
  font-weight: 300;
}

.story-container img{
  width:100%
}

/* faq */
.faq{
  padding: 50px 0;
  color:#fff;
  border-bottom: 8px solid #222222;
}
.faq h1{
  font-size: 3.125rem;
  color: #fff;
}

.faq h2{
  font-weight: 300;
  font-size: 1.6rem;
}
.faq h3{
  color: #fff;
  font-weight: 300;
  font-size: 21px;
}
.faq i{
  font-size: 1.6rem;
}
.faq .card{
  background-color: #303030;
}

.faq input{
  height: 63px!important;
}
.faq button{
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
}


footer{
  color: #757575;
}
footer ul li{
  font-size: 13px;
  line-height: 2;
  font-weight: 300;
}
footer .copyright{
  font-size: 13px;
}
footer .dropdown button{
  background-color: #000;
}



/* responsive */


/* tablet */
@media (max-width: 768px){

}

/* mobile */
@media (max-width: 576px){
  /* custom width */
  .w-sm-100{
    width: 100%;
  }

  /* header */

  header .logo{
    height: 70px;
  }

  header h1{
    font-size: 1.75rem;
  }
  header h2{
    font-size: 1.125rem;
  }
  header form button{
    font-size: 1rem!important;
  }
  header .header-hero{
    margin: 40px 0;
  }

  /* story container */
  .story-container h1{
    font-size: 1.625rem;
  }
  .story-container h2{
    font-size: 1.125rem;
  }

  /* faq */
  .faq h1{
    font-size: 1.625rem;
  }
  .faq h2{
    font-size: 1.2rem;
  }
}