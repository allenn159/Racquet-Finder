// Power scale will be from 1-20
// Control scale will be from 1-20
// Popularity scale will be from 1-10

const racquets = {
  babolat: [
    {
      id: 50,
      name: "Babolat Pure Aero",
      power: 14,
      control: 12,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer. ",
    },
    {
      id: 51,
      name: "Babolat Pure Aero Tour",
      power: 15,
      control: 15,
      popularity: 4,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 52,
      name: "Babolat Pure Aero Plus",
      power: 16,
      control: 10,
      popularity: 8,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPATRR-1.jpg&nw=700",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 53,
      name: "Babolat Pure Drive 2021",
      power: 16,
      control: 11,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BRPDR-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 54,
      name: "Babolat Pure Drive Plus 2021",
      power: 17,
      control: 15,
      popularity: 5,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BRPDP-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 55,
      name: "Babolat Pure Strike 16x19",
      power: 15,
      control: 15,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=PS1619-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 56,
      name: "Babolat Pure Strike 18x20",
      power: 13,
      control: 17,
      popularity: 5,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=PS182-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 57,
      name: "Babolat Pure Strike Tour",
      power: 13,
      control: 17,
      popularity: 4,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPSTTO-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 58,
      name: "Babolat Pure Strike 100",
      power: 16,
      control: 14,
      popularity: 6,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPSTRI-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
  ],
  wilson: [
    {
      id: 60,
      name: "Wilson Clash 100",
      power: 14,
      control: 12,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WC100R-1.jpg&nw=700",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 61,
      name: "Wilson Clash 98",
      power: 13,
      control: 13,
      popularity: 7,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WC98R-1.jpg&nw=700",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 62,
      name: "Wilson Clash 100 Pro",
      power: 12,
      control: 14,
      popularity: 6,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WCTR-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 63,
      name: "Wilson Blade 98 16x19 v7",
      power: 15,
      control: 13,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WB98R-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 64,
      name: "Wilson Blade 98 18x20 v7",
      power: 13,
      control: 16,
      popularity: 6,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WB9882-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 65,
      name: "Wilson Blade 104 v7",
      power: 16,
      control: 13,
      popularity: 7,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=WB104R-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 66,
      name: "Wilson Pro Staff 97 v13",
      power: 15,
      control: 15,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=W97V13-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 67,
      name: "Wilson Pro Staff RF97 v13",
      power: 14,
      control: 17,
      popularity: 9,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=97V13R-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
    {
      id: 68,
      name: "Wilson Pro Staff 97L",
      power: 14,
      control: 12,
      popularity: 6,
      img: "https://img.tennis-warehouse.com/watermark/rs.php?path=97LV13-1.jpg",
      description:
        "This would be a description of the racquet and why you would recommend it to the customer.",
    },
  ],
};
