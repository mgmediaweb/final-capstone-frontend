/* eslint linebreak-style: ["error", "windows"] */
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
          License Requirements: US & Canadian residents must have a Valid driver’s license and
          must be present at the time of the rental. No photocopies or temporary license’s accepted.
        </p>

        <p>
          International Clients: Clients traveling from abroad will need to obtain their own
          International Auto Insurance Coverage. We do not offer any insurance coverage here to our
          clients.
        </p>

        <p>
          Cancellation Policy: Cancellations must be within 48 hours of the booking date to receive
          a full refund. (NOT 48 hours before picking up your vehicle on the reservation date.)
          Cancellations after 48 hours of the booking date will receive a gift certificate towards
          a future reservation.
        </p>

        <p>
          Any cancellations due to Covid-19, city/state closures, or any type of pandemic issue,
          will follow our standard company cancellation policy.
        </p>

        <p>
          Deposits: We Require a minimum of $500 to $2000 USD deposit depending on the vehicle.
          Deposits are fully refundable once the vehicle is inspected upon return. Deposits can
          take 5-7 business days or sometimes longer depending on your banking system.
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
