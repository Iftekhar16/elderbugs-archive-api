const games = [
  {
    "id": "1",
    "name": "Frostpunk",
    "description": "A city-building survival game set in a frozen world.",
    "price": 29.99,
    "discount": 0.2,
    "discountedPrice": 23.99,
    "tags": ["Survival", "City Builder", "Strategy"],
    "wishlist": true,
    "developer": "11 bit studios",
    "publisher": "11 bit studios",
    "releaseDate": "2018-04-24",
    "rating": 9.0,
    "platform": ["PC", "PlayStation 4", "Xbox One"],
    "images": {
      "logo": "https://example.com/frostpunk/logo.png",
      "bannerLandscape": "https://example.com/frostpunk/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/frostpunk/banner_portrait.jpg",
      "bannerSquare": "https://example.com/frostpunk/banner_square.jpg"
    }
  },
  {
    "id": "2",
    "name": "Hollow Knight",
    "description": "An epic action-adventure through a vast, ruined kingdom of insects and heroes.",
    "price": 14.99,
    "discount": 0,
    "discountedPrice": 14.99,
    "tags": ["Metroidvania", "Indie", "Action"],
    "wishlist": true,
    "developer": "Team Cherry",
    "publisher": "Team Cherry",
    "releaseDate": "2017-02-24",
    "rating": 9.5,
    "platform": ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    "images": {
      "logo": "https://example.com/hollowknight/logo.png",
      "bannerLandscape": "https://example.com/hollowknight/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/hollowknight/banner_portrait.jpg",
      "bannerSquare": "https://example.com/hollowknight/banner_square.jpg"
    }
  },
  {
    "id": "3",
    "name": "Hades",
    "description": "A rogue-like dungeon crawler where you battle out of the Underworld.",
    "price": 24.99,
    "discount": 0,
    "discountedPrice": 24.99,
    "tags": ["Rogue-like", "Action", "Indie"],
    "wishlist": true,
    "developer": "Supergiant Games",
    "publisher": "Supergiant Games",
    "releaseDate": "2020-09-17",
    "rating": 9.7,
    "platform": ["PC", "Nintendo Switch", "PlayStation 4", "PlayStation 5", "Xbox One"],
    "images": {
      "logo": "https://example.com/hades/logo.png",
      "bannerLandscape": "https://example.com/hades/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/hades/banner_portrait.jpg",
      "bannerSquare": "https://example.com/hades/banner_square.jpg"
    }
  },
  {
    "id": "4",
    "name": "Dead Cells",
    "description": "A rogue-lite, metroidvania action-platformer with fast-paced combat.",
    "price": 24.99,
    "discount": 0.2,
    "discountedPrice": 19.99,
    "tags": ["Rogue-lite", "Metroidvania", "Action"],
    "wishlist": false,
    "developer": "Motion Twin",
    "publisher": "Motion Twin",
    "releaseDate": "2018-08-07",
    "rating": 9.0,
    "platform": ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    "images": {
      "logo": "https://example.com/deadcells/logo.png",
      "bannerLandscape": "https://example.com/deadcells/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/deadcells/banner_portrait.jpg",
      "bannerSquare": "https://example.com/deadcells/banner_square.jpg"
    }
  },
  {
    "id": "5",
    "name": "Blasphemous",
    "description": "A brutal action-platformer with skilled combat and a deep narrative.",
    "price": 24.99,
    "discount": 0.25,
    "discountedPrice": 18.74,
    "tags": ["Action", "Platformer", "Souls-like"],
    "wishlist": false,
    "developer": "The Game Kitchen",
    "publisher": "Team17",
    "releaseDate": "2019-09-10",
    "rating": 8.8,
    "platform": ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    "images": {
      "logo": "https://example.com/blasphemous/logo.png",
      "bannerLandscape": "https://example.com/blasphemous/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/blasphemous/banner_portrait.jpg",
      "bannerSquare": "https://example.com/blasphemous/banner_square.jpg"
    }
  },
  {
    "id": "6",
    "name": "Elden Ring",
    "description": "An open-world action RPG developed by FromSoftware.",
    "price": 59.99,
    "discount": 0,
    "discountedPrice": 59.99,
    "tags": ["Action", "RPG", "Open World"],
    "wishlist": true,
    "developer": "FromSoftware",
    "publisher": "Bandai Namco Entertainment",
    "releaseDate": "2022-02-25",
    "rating": 9.7,
    "platform": ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X"],
    "images": {
      "logo": "https://example.com/eldenring/logo.png",
      "bannerLandscape": "https://example.com/eldenring/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/eldenring/banner_portrait.jpg",
      "bannerSquare": "https://example.com/eldenring/banner_square.jpg"
    }
  },
  {
    "id": "7",
    "name": "Silksong",
    "description": "The highly anticipated sequel to Hollow Knight, where you explore a vast new kingdom.",
    "price": null,
    "discount": null,
    "discountedPrice": null,
    "tags": ["Action", "Platformer", "Metroidvania"],
    "wishlist": true,
    "developer": "Team Cherry",
    "publisher": "Team Cherry",
    "releaseDate": null,
    "rating": null,
    "platform": ["PC", "Nintendo Switch"],
    "images": {
      "logo": "https://example.com/silksong/logo.png",
      "bannerLandscape": "https://example.com/silksong/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/silksong/banner_portrait.jpg",
      "bannerSquare": "https://example.com/silksong/banner_square.jpg"
    }
  },
  {
    "id": "8",
    "name": "Inside",
    "description": "A dark, narrative-driven platformer from the creators of Limbo.",
    "price": 19.99,
    "discount": 0,
    "discountedPrice": 19.99,
    "tags": ["Puzzle", "Platformer", "Indie"],
    "wishlist": false,
    "developer": "Playdead",
    "publisher": "Playdead",
    "releaseDate": "2016-06-29",
    "rating": 9.2,
    "platform": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "images": {
      "logo": "https://example.com/inside/logo.png",
      "bannerLandscape": "https://example.com/inside/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/inside/banner_portrait.jpg",
      "bannerSquare": "https://example.com/inside/banner_square.jpg"
    }
  },
  {
    "id": "9",
    "name": "Wizard of Legend",
    "description": "A fast-paced dungeon crawler with an emphasis on dynamic magic combat.",
    "price": 15.99,
    "discount": 0.3,
    "discountedPrice": 11.19,
    "tags": ["Action", "Indie", "RPG"],
    "wishlist": false,
    "developer": "Contingent99",
    "publisher": "Humble Games",
    "releaseDate": "2018-05-15",
    "rating": 8.5,
    "platform": ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    "images": {
      "logo": "https://example.com/wizardoflegend/logo.png",
      "bannerLandscape": "https://example.com/wizardoflegend/banner_landscape.jpg",
      "bannerPortrait": "https://example.com/wizardoflegend/banner_portrait.jpg",
      "bannerSquare": "https://example.com/wizardoflegend/banner_square.jpg"
    }
  }
];

export default games;