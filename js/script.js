'use strict'
//1
'use strict'
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0
  // Пиши код ниже этой строки

  orderedItems.forEach((number) => {
    totalPrice += number
  })
  // Пиши код выше этой строки
  return totalPrice
}
console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// 2
function filterArray(numbers, value) {
  const filteredNumbers = []
  // Пиши код ниже этой строки

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number)
    }
  })

  // Пиши код выше этой строки
  return filteredNumbers
}

console.log(filterArray([1, 2, 3, 4, 5], 3)) //возвращает [4, 5].
console.log(filterArray([1, 2, 3, 4, 5], 4)) //возвращает [5].
console.log(filterArray([1, 2, 3, 4, 5], 5)) //возвращает [].
console.log(filterArray([12, 24, 8, 41, 76], 38)) //возвращает [41, 76].
console.log(filterArray([12, 24, 8, 41, 76], 20)) //возвращает [24, 41, 76].
//3
function getCommonElements(firstArray, secondArray) {
  const commonElements = []
  // Пиши код ниже этой строки

  firstArray.forEach((firstNumber) => {
    if (secondArray.includes(firstNumber)) {
      commonElements.push(firstNumber)
    }
  })

  return commonElements
  // Пиши код выше этой строки
}
console.log(getCommonElements([1, 2, 3], [2, 4])) // возвращает [2].
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // возвращает [1, 2].
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // возвращает [12, 27, 3].
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // возвращает [10, 30, 40].
console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // возвращает [].
//3
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem
}
//4
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem
}
//5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem
// Пиши код выше этой строки

//6
// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0

  orderedItems.forEach((item) => (totalPrice += item))

  return totalPrice
}
console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
//7
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = []

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number)
    }
  })

  // Пиши код выше этой строки
  return filteredNumbers
}
console.log(filterArray([1, 2, 3, 4, 5], 3))
console.log(filterArray([1, 2, 3, 4, 5], 4))
console.log(filterArray([1, 2, 3, 4, 5], 5))
console.log(filterArray([12, 24, 8, 41, 76], 38))
console.log(filterArray([12, 24, 8, 41, 76], 20))
//8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = []

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element)
    }
  })

  // Пиши код выше этой строки
  return commonElements
}
console.log(getCommonElements([1, 2, 3], [2, 4]))
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))
//9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  let newArray = []
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value)
    } else {
      newArray.push(number)
    }
  })
  return newArray
  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10))
console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
console.log(changeEven([17, 24, 68, 31, 42], 100))
console.log(changeEven([44, 13, 81, 92, 36, 54], 100))
//10
const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки
const planetsLengths = planets.map((array) => array.length);
console.log(planetsLengths);
//11
const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
  ];
  // Пиши код ниже этой строки

  const titles = books.map((booksArray) => booksArray.title);
  console.log(titles);
  //12
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      genres: ["приключения", "историческое"],
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      genres: ["фантастика"],
    },
    {
      title: "Красна как кровь",
      author: "Ли Танит",
      genres: ["ужасы", "мистика"],
    },
  ];
  // Пиши код ниже этой строки

  const genres = books.flatMap((books) => books.genres);

  console.log(genres);
  //13
  
// Пиши код ниже этой строки
const getUserNames = (users) => users.map((users) => users.name);
// Пиши код выше этой строки
//14
  // Пиши код ниже этой строки
  const getUserEmails = (users) => users.map((users) => users.email);
  // Пиши код выше этой строки
  //15
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  // Пиши код ниже этой строки

  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const oddNumbers = numbers.filter((number) => number % 2 != 0);
  console.log(evenNumbers);
  console.log(oddNumbers);
  //16
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      genres: ["приключения", "историческое"],
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      genres: ["фантастика", "мистика"],
    },
    {
      title: "Красна как кровь",
      author: "Ли Танит",
      genres: ["ужасы", "мистика", "приключения"],
    },
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap((book) => book.genres);
  const uniqueGenres = allGenres.filter((genre, index, array) => {
    return index === array.indexOf(genre);
  });
  console.log(allGenres);
  console.log(uniqueGenres);
  //17
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
  ];

  const MIN_RATING = 8;
  const AUTHOR = "Бернард Корнуэлл";
  // Пиши код ниже этой строки

  const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
  const booksByAuthor = books.filter((book) => book.author === AUTHOR);
  console.log(topRatedBooks);
  console.log(booksByAuthor);
  //18
  // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const getUsersWithEyeColor = (users, color) => {
    return users.filter(({ eyeColor }) => eyeColor === color);
  };

  const getUserByColor = (color) => getUsersWithEyeColor(allUsers, color);
  
  console.log(getUserByColor("blue"));
  console.log(getUserByColor("green"));
  console.log(getUserByColor("brown"));
  console.log(getUserByColor("purple"));
  // Пиши код выше этой строки
  //19
   // Пиши код ниже этой строки
   const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];

  const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(({ age }) => age >= minAge && age < maxAge);
  };
  const getUsers = (minAge, maxAge) => getUsersWithAge(allUsers, minAge, maxAge);
  
  console.log(getUsers(20, 30));
  console.log(getUsers(30, 40));
  console.log(getUsers(80, 100));
  console.log(getUsers(20, 100));
  // Пиши код выше этой строки
//20
const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];
  const getUsersWithFriend = (users, friendName) => {
    return users.filter(({ friends }) => friends.includes(friendName));
  };
  const getUsers = (friendName) => getUsersWithFriend(allUsers, friendName);

  console.log(getUsers("Briana Decker"));
  console.log(getUsers("Goldie Gentry"));
  console.log(getUsers("Adrian Cross"));
  console.log(getUsers("Linda Chapman"));
  //21
  "use strict";
  // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];

  const getFriends = (users) => {
    const allFriends = users.flatMap((user) => user.friends);
    return allFriends.filter(
      (friend, index, array) => index === array.indexOf(friend)
    );
  };
  console.log(getFriends(allUsers));
  //23
    // Пиши код ниже этой строки
    const allUsers = [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
          gender: "male",
          age: 37,
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female",
          age: 34,
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male",
          age: 24,
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female",
          age: 21,
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong"],
          isActive: true,
          balance: 3951,
          gender: "male",
          age: 27,
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: ["Jacklyn Lucas", "Linda Chapman"],
          isActive: false,
          balance: 1498,
          gender: "male",
          age: 38,
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female",
          age: 39,
        },
      ];
    
      const getInactiveUsers = (users) =>
        users.filter(({ isActive }) => isActive === false);
      console.log(getInactiveUsers(allUsers));
      //24
      const books = [
        {
          title: "Последнее королевство",
          author: "Бернард Корнуэлл",
          rating: 8.38,
        },
        { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
        {
          title: "Сон смешного человека",
          author: "Федор Достоевский",
          rating: 7.75,
        },
        { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
      ];
      const BOOK_TITLE = "Сон смешного человека";
      const AUTHOR = "Роберт Шекли";
      // Пиши код ниже этой строки
      const title = "Сон смешного человека";
      const author = "Роберт Шекли";
      const bookWithTitle = books.find((book) => book.title === title);
      console.log(bookWithTitle);
      const bookByAuthor = books.find((book) => book.author === author);
      console.log(bookByAuthor);
      //25
       // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const getUserWithEmail = (users, email) =>
    users.find((user) => user.email === email);
  // Пиши код выше этой строки
  console.log(getUserWithEmail(allUsers, "shereeanthony@kog.com"));
  console.log(getUserWithEmail(allUsers, "elmahead@omatom.com"));
  console.log(getUserWithEmail(allUsers, "blackburndotson@furnigeer.com"));
  console.log(getUserWithEmail(allUsers, "shethony@kog.com"));
  //26
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Пиши код ниже этой строки
  const oddCheck = (value) => value % 2 > 0;
  const evenCheck = (value) => value % 2 === 0;

  const eachElementInFirstIsEven = firstArray.every((value) => evenCheck(value));
  const eachElementInFirstIsOdd = firstArray.every((value) => oddCheck(value));

  const eachElementInSecondIsEven = secondArray.every((value) => evenCheck(value));
  const eachElementInSecondIsOdd = secondArray.every((value) => oddCheck(value));

  const eachElementInThirdIsEven = thirdArray.every((value) => evenCheck(value));
  const eachElementInThirdIsOdd = thirdArray.every((value) => oddCheck(value));

  console.log(eachElementInFirstIsEven);
  console.log(eachElementInFirstIsOdd);
  console.log(eachElementInSecondIsEven);
  console.log(eachElementInSecondIsOdd);
  console.log(eachElementInThirdIsEven);
  console.log(eachElementInThirdIsOdd);
  //27
  
  // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const isEveryUserActive = (users) => {
    return users.every((element) => element.isActive === true);
  };
  // Пиши код выше этой строки
  console.log(isEveryUserActive(allUsers));
  //28
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Пиши код ниже этой строки

  const anyElementInFirstIsEven = firstArray.some(
    (element) => element % 2 === 0
  );

  const anyElementInFirstIsOdd = firstArray.some(
    (element) => element % 2 !== 0
  );

  const anyElementInSecondIsEven = secondArray.some(
    (element) => element % 2 === 0
  );

  const anyElementInSecondIsOdd = secondArray.some(
    (element) => element % 2 !== 0
  );

  const anyElementInThirdIsEven = thirdArray.some(
    (element) => element % 2 === 0
  );

  const anyElementInThirdIsOdd = thirdArray.some(
    (element) => element % 2 !== 0
  );

  console.log(anyElementInFirstIsEven);
  console.log(anyElementInFirstIsOdd);
  console.log(anyElementInSecondIsEven);
  console.log(anyElementInSecondIsOdd);
  console.log(anyElementInThirdIsEven);
  console.log(anyElementInThirdIsOdd);
  //29
  "use strict";
  // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const isAnyUserActive = (users) => {
    return users.some(({ isActive }) => isActive === true);
  };
  // Пиши код выше этой строки
  console.log(isAnyUserActive(allUsers));
  //30
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Пиши код ниже этой строки

  const totalPlayTime = playtimes.reduce(
    (previousValue, value) => (previousValue += value),
    0
  );

  // Пиши код выше этой строки
  const averagePlayTime = totalPlayTime / playtimes.length;

  console.log(`Всего времени проиграно ${totalPlayTime} мин.`);
  console.log(`Среднее время игы для одного игрока ${averagePlayTime} мин.`);
  console.log(`До встречи`);
  //31
  
  "use strict";
  const players = [
    { name: "Манго", playtime: 1270, gamesPlayed: 4 },
    { name: "Поли", playtime: 469, gamesPlayed: 2 },
    { name: "Аякс", playtime: 690, gamesPlayed: 3 },
    { name: "Киви", playtime: 241, gamesPlayed: 1 },
  ];
  // Пиши код ниже этой строки

  const totalAveragePlaytimePerGame = players.reduce((total, player) => {
    return (total += player.playtime / player.gamesPlayed);
  }, 0);
  console.log(totalAveragePlaytimePerGame);
  //32
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];
  // Пиши код ниже этой строки
  const calculateTotalBalance = (users) =>
    users.reduce((total, user) => (total += user.balance), 0);
  // Пиши код выше этой строки
  console.log(calculateTotalBalance(allUsers));
  //33
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];
  // Пиши код ниже этой строки
  const getTotalFriendCount = (users) => {
    return users.reduce((total, { friends }) => (total += friends.length), 0);
  };
  // Пиши код выше этой строки
  console.log(getTotalFriendCount(allUsers));

  //34 const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Ли Танит",
    "Бернард Корнуэлл",
    "Роберт Шекли",
    "Федор Достоевский",
  ];
  // Пиши код ниже этой строки

  const ascendingReleaseDates = [...releaseDates].sort();
  console.log(ascendingReleaseDates);
  const alphabeticalAuthors = [...authors].sort();
  console.log(alphabeticalAuthors);
//35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
console.log(ascendingReleaseDates);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
console.log(descendingReleaseDates);
//36
const authors = [
    "Ли Танит",
    "Бернард Корнуэлл",
    "Роберт Шекли",
    "Федор Достоевский",
    "Говард Лавкрафт",
  ];
  // Пиши код ниже этой строки

  const authorsInAlphabetOrder = [...authors].sort((a, b) =>
    a.localeCompare(b)
  );
  console.log(authorsInAlphabetOrder);
  const authorsInReversedOrder = [...authors].sort((a, b) =>
    b.localeCompare(a)
  );
  console.log(authorsInReversedOrder);
  //37
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
  ];
  // Пиши код ниже этой строки

  console.log("books:");
  console.log(books);

  console.log("sortedByAuthorName:");
  const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
    firstBook.author.localeCompare(secondBook.author)
  );
  console.log(sortedByAuthorName);

  console.log("sortedByReversedAuthorName:");
  const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
    secondBook.author.localeCompare(firstBook.author)
  );
  console.log(sortedByReversedAuthorName);

  console.log("sortedByAscendingRating:");
  const sortedByAscendingRating = [...books].sort(
    (firstBook, secondBook) => firstBook.rating - secondBook.rating
  );
  console.log(sortedByAscendingRating);

  console.log("sortedByDescentingRating:");
  const sortedByDescentingRating = [...books].sort(
    (firstBook, secondBook) => secondBook.rating - firstBook.rating
  );
  console.log(sortedByDescentingRating);
  //38
  // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const sortByAscendingBalance = (users) => {
    return [...users].sort(
      (firstUser, secondUser) => firstUser.balance - secondUser.balance
    );
  };
  // Пиши код выше этой строки
  console.log(sortByAscendingBalance(allUsers));
  //39
   // Пиши код ниже этой строки
   const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const sortByDescendingFriendCount = (users) => {
    return [...users].sort(
      (firstUser, secondUser) =>
        secondUser.friends.length - firstUser.friends.length
    );
  };
  // Пиши код выше этой строки
  console.log(sortByDescendingFriendCount(allUsers));
  //40
    // Пиши код ниже этой строки
    const allUsers = [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
          gender: "male",
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female",
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male",
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female",
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong"],
          isActive: true,
          balance: 3951,
          gender: "male",
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: ["Jacklyn Lucas", "Linda Chapman"],
          isActive: false,
          balance: 1498,
          gender: "male",
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female",
        },
      ];
    
      const sortByName = (users) => {
        return [...users].sort((firstUser, secondUser) =>
          firstUser.name.localeCompare(secondUser.name)
        );
      };
      // Пиши код выше этой строки
      console.log(sortByName(allUsers));
    //41
    const books = [
        {
          title: "Последнее королевство",
          author: "Бернард Корнуэлл",
          rating: 8.38,
        },
        { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
        {
          title: "Сон смешного человека",
          author: "Федор Достоевский",
          rating: 7.75,
        },
        { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
        { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
      ];
      const MIN_BOOK_RATING = 8;
      // Пиши код ниже этой строки
    
      const names = [...books]
        .sort((firstBook, secondBook) =>
          firstBook.author.localeCompare(secondBook.author)
        )
        .filter((book) => book.rating >= MIN_BOOK_RATING)
        .map((book) => book.author);
      console.log(names);
      //42
       // Пиши код ниже этой строки
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: [
        "Jacklyn Lucas",
        "Linda Chapman",
        "Adrian Cross",
        "Solomon Fokes",
      ],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ];

  const getNamesSortedByFriendCount = (users) => {
    return [...users]
      .sort(
        (firstUser, secondUser) =>
          firstUser.friends.length - secondUser.friends.length
      )
      .map((user) => user.name);
  };
  // Пиши код выше этой строки
  console.log(getNamesSortedByFriendCount(allUsers));
  //43


  //44
    // Пиши код ниже этой строки
    const allUsers = [
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,
          balance: 2811,
          gender: "male",
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female",
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male",
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female",
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
          isActive: true,
          balance: 3951,
          gender: "male",
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: [
            "Jacklyn Lucas",
            "Linda Chapman",
            "Adrian Cross",
            "Solomon Fokes",
          ],
          isActive: false,
          balance: 1498,
          gender: "male",
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female",
        },
      ];
    
      const getTotalBalanceByGender = (users, gender) => {
        return [...users]
          .filter((user) => user.gender === gender)
          .map((user) => user.balance)
          .reduce((previousValue, value) => (previousValue += value), 0);
      };
      // Пиши код выше этой строки
      console.log(getTotalBalanceByGender(allUsers, "male"));
      console.log(getTotalBalanceByGender(allUsers, "female"));

















  //22
ап
  const allUsers = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39,
    },
  ];

  const getActiveUsers = (users) =>
    users.filter(({ isActive }) => isActive === true);
  console.log(getActiveUsers(allUsers));