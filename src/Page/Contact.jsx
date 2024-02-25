import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './ContactDefault.css'
function Contact() {
  return (
    <>
        <>
<section className='contact'>
  <div className='content'>
    <h2>Bize Ulaşın</h2>
    <p>Sorularınızı, önerilerinizi veya işbirliği taleplerinizi bekliyoruz! İletişim bilgilerimizi kullanarak bize ulaşabilirsiniz.</p>
  </div>
  <div className='container'>
    <div className='contactInfo'>
      <div className='box'>
        <div className='icon'><FaMapMarkerAlt /></div>
        <div className='text'>
          <h3>Adres</h3>
          <p>Zafer, Ankara Yolu Cd No:1, 16270 Osmangazi/Bursa</p>
        </div>
      </div>
      <div className='box'>
        <div className='icon'><MdAlternateEmail /></div>
        <div className='text'>
          <h3>Email</h3>
          <p> beyazmasa@bursa.bel.tr</p>
        </div>
      </div>
      <div className='box'>
        <div className='icon'><FaPhoneAlt /></div>
        <div className='text'>
          <h3>Telefon</h3>
          <p>Alo 153 Beyazmasa / Santral: 444 16 00</p>
        </div>
      </div>
    </div>
    <div className='contactForm'>
      <form >
<h2>Bildir</h2>
<div className='inputBox'>
  <input type="text" required='required' />
<span>Ad Soyad</span>
</div>

<div className='inputBox'>
  <input type="text" required='required' />
<span>E-Mail</span>
</div>

<div className='inputBox'>
 <textarea required='required'></textarea>
<span>Mesajınızı Yazınız...</span>
</div>
<div className='inputBox'>
  <input type="submit" value='Gönder' />

</div>

      </form>
    </div>
  </div>
</section>


        </>
    </>

  )
}

export default Contact