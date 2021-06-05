// Power scale will be from 1-20
// Control scale will be from 1-20
// Popularity scale will be from 1-10

const babolatRacquets = {
  model: [
    {
      id: 50,
      name: "Pure Aero",
      power: 14,
      control: 12,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
    },
    {
      id: 51,
      name: "Pure Aero Tour",
      power: 12,
      control: 14,
      popularity: 4,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
    },
    {
      id: 52,
      name: "Pure Aero Plus",
      power: 15,
      control: 11,
      popularity: 4,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
    },
  ],
};

// const wilsonRacquets = {
//   model: {
//     id: 60,
//     name: "Wilson Clash 100",
//     power: 14,
//     control: 12,
//     popularity: 9,
//     img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WC100R-1.jpg&nw=700",
//   },
//   model: {
//     id: 61,
//     name: "Wilson Clash 98",
//     power: 13,
//     control: 13,
//     popularity: 7,
//     img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WC98R-1.jpg&nw=700",
//   },
//   model: {
//     id: 62,
//     name: "Wilson Clash 100 Pro (Formerly Tour)",
//     power: 12,
//     control: 14,
//     popularity: 6,
//     img: "https://img.tenniswarehouse-europe.com/watermark/rs.php?path=WCTR-1.jpg&nw=700",
//   },
// };

// const babolatPower = () => {
//   for (let racquet of babolatRacquets.model) {
//     if (racquet.power > 14) {
//       console.log(racquet.name);
//     }
//   }
// };

// const babolatAlone = () => {
//   for (let selection of babolatRacquets.model) {
//     const babolatArray = Object.values(selection);
//     console.log(babolatArray);
//   }
// };
