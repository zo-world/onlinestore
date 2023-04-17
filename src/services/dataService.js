let catalog =[
  {
    "title": "Watermelons",
    "price": 8.48,
    "category": "Fruit",
    "image": "watermelon.jpg",
    "__id": "watermelons"
  },
  {
    "title": "Apples",
    "price": 1.16,
    "category": "Fruit",
    "image": "apple.jpg",
    "__id": "apples"
  },
  {
    "title": "Mangos",
    "price": 0.88,
    "category": "Fruit",
    "image": "mangos.jpg",
    "__id": "mangos"
  },
  {
    "title": "Kiwis",
    "price": 0.54,
    "category": "Fruit",
    "image": "kiwis.jpg",
    "__id": "kiwis",
  },
  {
    "title": "Bananas",
    "price": 0.20,
    "category": "Fruit",
    "image": "bananas.jpg",
    "__id": "bananas"
  },
  {
    "title": "Spam",
    "price": 1.60,
    "category": "Canned",
    "image": "spam.jpg",
    "__id": "spam"
  }
];

class DataService {
  getProducts() {
    return catalog;
  }
}
export default DataService;