import { OrderStatus } from "./constants/orderStatus.js";

export const sample_tags = [
    { name: 'all', count: '5'},
    { name: 'fruit', count: '1'},
    { name: 'vegetables', count: '3'},
    { name: 'flowers', count: '1'},
];

export const sample_users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: '12345',
        address: 'London',
        isAdmin: false,
    },
    {
        firstName: 'Nick',
        lastName: 'Smith',
        email: 'nick@gmail.com',
        password: '54321',
        address: 'Miami',
        isAdmin: true,
    },
];

export const sample_seeds = [
    {
        name: 'sunflower',
        price: 2,
        sow: ['May', 'Jun', 'Jul'],
        position: 'direct sun',
        inout: 'outdoor',
        germination: '7-10',
        colour: ['yellow'],
        height: 1.5,
        stars: 4,
        tags: ['yellow', 'large', 'giant', 'flowers'],
        imageUrl: 'sunflower.png',
        favourite: true,
        flowers: ['Jul', 'Aug', 'Sep'],
        harvest: ['-'],
        description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum est excepturi natus est deserunt eligendi in consequatur temporibus et temporibus dolor. Eum minus nobis aut molestiae sunt et modi consequatur sit sapiente magni aut aliquam porro. Aut sequi illum ea esse vero et natus temporibus non reiciendis consequatur eos voluptatem animi quo reprehenderit sapiente. Ea dignissimos explicabo qui consequatur debitis et consequatur illum est provident quia.'
    },
    {
        name: 'pea',
        price: 1.5,
        sow: ['Apr', 'May'],
        position: 'direct sun',
        inout: 'outdoor',
        germination: '7-10',
        colour: ['green'],
        height: 1.8,
        stars: 2,
        tags: ['legumes', 'vegetables'],
        imageUrl: 'pea.png',
        favourite: true,
        flowers: ['Jun', 'Jul',],
        harvest: ['Jul','Aug'],
        description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum est excepturi natus est deserunt eligendi in consequatur temporibus et temporibus dolor. Eum minus nobis aut molestiae sunt et modi consequatur sit sapiente magni aut aliquam porro. Aut sequi illum ea esse vero et natus temporibus non reiciendis consequatur eos voluptatem animi quo reprehenderit sapiente. Ea dignissimos explicabo qui consequatur debitis et consequatur illum est provident quia.'
    },
    {
        name: 'strawberry',
        price: 1.2,
        sow: ['Mar', 'Apr'],
        position: 'direct sun',
        inout: 'outdoor',
        germination: '7-10',
        colour: ['red','green'],
        height: 0.2,
        stars: 2.5,
        tags: ['fruit'],
        imageUrl: 'strawberry.png',
        favourite: false,
        flowers: ['Jun','Jul', 'Aug'],
        harvest: ['Jul','Aug'],
        description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum est excepturi natus est deserunt eligendi in consequatur temporibus et temporibus dolor. Eum minus nobis aut molestiae sunt et modi consequatur sit sapiente magni aut aliquam porro. Aut sequi illum ea esse vero et natus temporibus non reiciendis consequatur eos voluptatem animi quo reprehenderit sapiente. Ea dignissimos explicabo qui consequatur debitis et consequatur illum est provident quia.'
    },
    {
        name: 'broccoli',
        price: 1.8,
        sow: ['Jan', 'Feb', 'Mar'],
        position: 'direct sun',
        inout: 'outdoor',
        germination: '7-10',
        colour: ['green'],
        height: 0.2,
        stars: 3.5,
        tags: ['vegetables'],
        imageUrl: 'broccoli.png',
        favourite: true,
        flowers: ['-'],
        harvest: ['Jul','Aug'],
        description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum est excepturi natus est deserunt eligendi in consequatur temporibus et temporibus dolor. Eum minus nobis aut molestiae sunt et modi consequatur sit sapiente magni aut aliquam porro. Aut sequi illum ea esse vero et natus temporibus non reiciendis consequatur eos voluptatem animi quo reprehenderit sapiente. Ea dignissimos explicabo qui consequatur debitis et consequatur illum est provident quia.'
    },
    {
        name: 'carrot',
        price: 1.2,
        sow: ['Feb', 'Mar', 'Apr'],
        position: 'direct sun',
        inout: 'outdoor',
        germination: '7-10',
        colour: ['orange','green'],
        height: 0.2,
        stars: 5,
        tags: ['root','vegetables'],
        imageUrl: 'carrot.png',
        favourite: false,
        flowers: ['-'],
        harvest: ['Aug','Sep', 'Oct', 'Nov'],
        description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum est excepturi natus est deserunt eligendi in consequatur temporibus et temporibus dolor. Eum minus nobis aut molestiae sunt et modi consequatur sit sapiente magni aut aliquam porro. Aut sequi illum ea esse vero et natus temporibus non reiciendis consequatur eos voluptatem animi quo reprehenderit sapiente. Ea dignissimos explicabo qui consequatur debitis et consequatur illum est provident quia.'
    },
];

export const sample_orders = [
    {
        firstName: 'Alex',
        lastName: 'Jacobs',
        address: 'Hammersmith',
        addressLatLng: {
          "lat": "42.9477",
          "lng": "-68.8798"
        },
        paymentId: '7654321',
        items: [	
          {
          seed: {
            name: 'carrot',
            price: 1.2,
            sow: ['Feb', 'Mar', 'Apr'],
            position: 'direct sun',
            inout: 'outdoor',
            germination: '7-10',
            colour: ['orange','green'],
            height: 0.2,
            stars: 5,
            tags: ['root','vegetables'],
            imageUrl: 'carrot.png',
            favourite: false,
            flowers: ['-'],
            harvest: ['Aug','Sep', 'Oct', 'Nov'],
            description: 'Lorem ipsum dolor sit amet. Et error ullam qui beata'
          },
          quantity: 2,
          price: 200
          },
          {
          seed: {
            name: 'pea',
            price: 1.5,
            sow: ['Apr', 'May'],
            position: 'direct sun',
            inout: 'outdoor',
            germination: '7-10',
            colour: ['green'],
            height: 1.8,
            stars: 2,
            tags: ['legumes', 'vegetables'],
            imageUrl: 'pea.png',
            favourite: true,
            flowers: ['Jun', 'Jul',],
            harvest: ['Jul','Aug'],
            description: 'Lorem ipsum dolor sit amet. Et error ullam qui beatae temporibus et accusamus ipsum'
          },
          quantity: 1,
          price: 100
          }
        ],
        totalPrice: 3.9,
        status: 'NEW',
      }
];