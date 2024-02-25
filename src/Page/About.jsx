import React from 'react'
import './About.css'
import about from '../components/images/about.jpg'
function About() {
  return (
    <>
    <section className='heor'>
      <div className='heading'>
<h1>Hakkımızda</h1>
      </div>
      <div className='container'>
<div className='hero-content'>
  <h2>Websitemiz'e Hoşgeldiniz</h2>
 <p>Bursa Büyükşehir Belediyesi olarak, tarımı desteklemek ve şehrimizin zengin tarımsal mirasını daha geniş kitlelere ulaştırmak için Çiftlik Bursa'yı kurduk. Misyonumuz, yerel çiftçilerimizin emeğini değerlendirmek ve tüketicilere sağlıklı, taze ürünler sunmaktır. Vizyonumuz ise sürdürülebilir bir tarım ekosistemi oluşturarak toplum sağlığını artırmak ve yerel ekonomiyi desteklemektir. Siz de bizimle birlikte, sağlıklı ve sürdürülebilir bir tarımın önemini vurgulamak için bu yolculuğa katılın.




</p>

<button className='cta-button'>Daha Fazla</button>
</div>
<div className="hero-image">
  <img src={about} alt="" />
</div>
      </div>
    </section>
    </>
   
  )
}

export default About