import React from 'react';
import './Cards.css';

const FourImageCard = ({ images, title, buttonText }) => (
  <div className="four-image-card">
    <h3>{title}</h3>
    <div className="image-grid">
      {images.map((image, index) => (
        <img src={image} alt={`Item ${index + 1}`} key={index} className="grid-image" />
      ))}
    </div>
    {buttonText && <button>{buttonText}</button>}
  </div>
);

function App() {
  // Define different images for each card
  const cardImages1 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnki9VS761f5I9aXjdgnEUT98063_ZA7SsUw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-JMg_ewOXEgCm9VIfU_HKqe2iOlftk5fyg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxqHYlv_SOs6eOTAHLEghtnpQvKSFU3f7LQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafGP82Tj1Nefo2SxiVlD7wqDE1uzLIdzSgA&s',
  ];
  const cardImages2 = [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTF2ZHeou5Ke5S9JSRc9tmY4ZffwCdlw7WJcF4ayg7svAXcV5o-3Lhc3MnSJ9Sb6NvW_HDO7bW4in3RqXuGWqiSSMdYKekc_jJbFPfF_Cba7rFFrgR_co45&usqp=CAc',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTo1R67NrAgxW0GIBZ5e8jSv9GgrkNkb-rNA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDON20dgtRnhn2VkLSQQZX-pZd_e4Af9kdXA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4jJaTVanFHpN6J9l98bLy2Oi3IYWsj_jYA&s',
  ];
  const cardImages3 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sWc1YaVRJbvwBTzO2KuKcrrHX1NBfQhJ-A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONmIfEcAD0zP0GqsnbcJStTWHTruryShH_g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcW50Be6j5c1qDpGIOEaVS77-CCs2Ap9FRog&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qvReJ_Uizaj7HAWnpIwYQEigNAql-WY5KQ&s',
  ];
  const cardImages4 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi1yKiHVNhyls5kSPeoOrwHPJ89OzD_XtXg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1_z1oHGSPPcTq-saNAlfh1OX68dS2TW_6A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDXZF1i2xIdBJMsm1gdmKQeL-2WRqwq-D_Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQn-0jRgWTUOJiuW5oFncxZQjp6hktxc9kg&s',
  ];
  const cardImages5 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKMUzOGFnkuzdZrZ-eVjdb-yOpovYSRQ0lA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz0R5QIjtie5KdJDM6-_0X8p2j__jBMtZ2Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJwQmg0V749Z0NvrZo3t780g25mPVt8GKkQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nnMALJlzxXqy_S2iTV9HzzLEeL-38eQBwg&s',
  ];
  const cardImages6 = [
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZKJB2usHI5Fxmm-PR5vvWNGLT1qtwLjrsLyK2JcBH7dv4wOJBEQdQW8RrAElkT09KZE8WianLFonLG8saCllc6mqdyZNwB477Cs3Y9LA&usqp=CAE',
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNBxa1P6Doh1bl8RDp_39GEXaRvCa8XgvAJwIF3dL3KaAepUSOqi7glY941-lLrEV8mL7B7te15Q92vyP1E0yDKpllT8mbIcJwJkHxowvN&usqp=CAE',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEJ43KWdzTXz75hJxvcI5dlXd6xsM2f8vCdcrzYEEaAoun6pc_f2dzbH8RnITY6hrTWVwx6bC0u5udt9uLiLpJtoA8px6zAvOeebvQDOxvxNSQ-_oGTBaR&usqp=CAE',
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuqFz4XCkrELeV10TSPzA57Py7r0rdpnsFS9CFZpBEZIMONC0WZvGhzn8s6e3tFDfuwQhsUWDHPi7nk7DVDNdEGAeaUzVaclX6VzTf75U&usqp=CAE',
  ];
  const cardImages7 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqeE5jDkfjxnJdyYdyh3qzV4L0gWAWDaEVQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid1zi7ZEJMDjA0aWNIPHCSFdqGo-opdqChA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVDgbWg5UaUG48CnuPTcLfnnqMmrksz2W5g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4zuvD1c4CGAVKvbeVBiRV5zkoq8oOYTCMg&s',
  ];
  const cardImages8 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zziYuTT_l3bGx9eXisVVlaa_cvIU5Si6MA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOf8LyqnVZTuAXRlawTG6tCa8w6_eC6DKMA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sh7NZYmFVo6ywU2W7C1jxWeZkkv8lMNw7Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpa1H3-Vud7cyQDDlT2PdHsC6WRPb8SuIBQ&s',
  ];

  return (
    <div className="app">
      <FourImageCard
        images={cardImages1}
        title="Gaming Peripherals"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages2}
        title="Furniture"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages3}
        title="Home Appliances"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages4}
        title="Limited Edition"
        buttonText="Shop Now"
      />
       <FourImageCard
        images={cardImages5}
        title="Limited Edition"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages6}
        title="Limited Edition"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages7}
        title="Limited Edition"
        buttonText="Shop Now"
      />
      <FourImageCard
        images={cardImages8}
        title="Best TWS"
        buttonText="Shop Now"
      />
    </div>
  );
}

export default App;
