const AboutScreen = () => {
  const location = [
    {
      city: 'Bogota',
      country: 'COL',
      address: 'Callr 116 554',
      phone: '+57 (1) 752-5200',
    },
    {
      city: 'Hermosillo',
      country: 'MEX',
      address: 'Blvd. Morelos 1054',
      phone: '+52 (662) 260-5042',
    },
    {
      city: 'Manizalez',
      country: 'COL',
      address: 'Cr21 23-19',
      phone: '+57 (601) 705-0000',
    },
    {
      city: 'Sao Paulo',
      country: 'BRA',
      address: 'Avenida dos Bandeirantes 423',
      phone: '+55 (11) 122-5669',
    },
  ];

  return (
    <div className="container page-about">
      <div className="info-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed interdum lorem.
          Quisque sed eleifend urna, in mattis lectus. Integer eu nulla ut libero gravida maximus.
          Nam tempor felis semper eros tristique dictum. Pellentesque in rutrum lorem, nec gravida
          lacus. Donec ullamcorper turpis non nisi euismod, nec vulputate justo pulvinar. Morbi
          quam magna, mattis dignissim blandit nec, rhoncus non dui.
        </p>
        <p>
          Duis porta quis ligula sed volutpat. Maecenas ut neque sed ipsum eleifend feugiat.
          Nullam id euismod quam. Nam eleifend, eros sit amet interdum maximus, lectus metus
          tristique mi, sit amet fermentum dui nunc ut nibh. Praesent dapibus nisl leo, vitae
          sodales erat finibus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          In accumsan tortor at sapien vehicula, at efficitur metus pulvinar. Nunc ornare ex ac
          enim vulputate fringilla. Aliquam lacus purus, lacinia id dolor vel, dictum malesuada
          orci. Morbi eleifend enim commodo arcu rhoncus blandit.
        </p>

        <h2>Locations</h2>

        <div className="stores">
          {
            location.map((item) => (
              <div key={item.city}>
                <p className="no-margin-padding"><strong>{`${item.city} (${item.country})`}</strong></p>
                <p className="no-margin-padding"><small>{item.address}</small></p>
                <p><a href={`tel:${item.phone}`}>{item.phone}</a></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
