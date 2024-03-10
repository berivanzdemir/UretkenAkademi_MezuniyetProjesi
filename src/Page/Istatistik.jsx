import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Istatistik = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/Json/productApi.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
      
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h2 className="text-center">İstatistikler</h2>
    <div className='container'>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Hayvanın Cinsi</th>
            <th>Sağmal Hayvan Sayısı (Adet)</th>
            <th>Süt Üretim Miktarı (Ton)</th>
            <th>Ortalama Süt Verimi (Kg/Adet)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.HAYVANIN_CINSI}</td>
              <td>{product.SAGMAL_HAYVAN_SAYISI_ADET}</td>
              <td>{product.SUT_URETIM_MOKTARI_TON}</td>
              <td>{product.ORTALAMA_SUT_VERIMI_KG_ADET}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
   
  );
};

export default Istatistik;
