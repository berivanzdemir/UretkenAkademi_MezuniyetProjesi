import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function FooterDefault() {
  return (
    <>
    <hr />
      <div className="container" >
        <footer className="py-5" >
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5><strong>Çiftlik Bursa</strong></h5>
             <p>Topraktan sofraya, her adımda güvenilirlik ve kaliteyi sağlayan, üreticiden tüketiciye doğrudan ulaşımı mümkün kılan, tarımsal alışverişin en güvenilir adresi.</p>
             <div>
  <a href="https://www.linkedin.com/in/berivan-ozdemir/" style={{ display: 'inline-block', marginRight: '10px' }}><FaLinkedin /></a>
  <a href="https://www.instagram.com/" style={{ display: 'inline-block', marginRight: '10px' }}><FaInstagram /></a>
  <a href="https://twitter.com/Brvn_16" style={{ display: 'inline-block' }}><FaXTwitter /></a>
</div>

            </div>

            <div className="col-6 col-md-2 mb-3">
              
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ana Sayfa</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ürünler</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hakkımızda</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">İletişim</a></li>
                
              </ul>
            </div>

          

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Bize Ulaşın</h5>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Gönder</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 <span style={{color:' rgb(3, 73, 119)',fontWeight:'bold'}}>BURSA BÜYÜKŞEHİR BELEDİYESİ</span> Tüm Hakları Saklıdır. </p>
            <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#twitter" /></svg></a></li>
<li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
<li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>

            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterDefault

 
