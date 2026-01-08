const carsData = [
  // ================= ECONOMY / SEDAN =================
  {
    id: 1,
    name: "Toyota Corolla",
    category: "economy",
    price: 35,
    image: "./images/1.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "35 MPG",
    type: "Sedan"
  },
  {
    id: 2,
    name: "Honda Civic",
    category: "economy",
    price: 38,
    image: "./images/2.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "36 MPG",
    type: "Sedan"
  },
  {
    id: 3,
    name: "Honda Accord",
    category: "economy",
    price: 45,
    image: "./images/3.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 3,
    mileage: "38 MPG",
    type: "Sedan"
  },
  {
    id: 4,
    name: "Toyota Camry",
    category: "economy",
    price: 42,
    image: "./images/4.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 3,
    mileage: "39 MPG",
    type: "Sedan"
  },
  {
    id: 5,
    name: "Nissan Altima",
    category: "economy",
    price: 40,
    image: "./images/5.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "34 MPG",
    type: "Sedan"
  },
  {
    id: 6,
    name: "Hyundai Elantra",
    category: "economy",
    price: 36,
    image: "./images/6.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "37 MPG",
    type: "Sedan"
  },

  // ================= SUV =================
  {
    id: 7,
    name: "Toyota RAV4",
    category: "suv",
    price: 80,
    image: "./images/7.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 4,
    mileage: "30 MPG",
    type: "SUV"
  },
  {
    id: 8,
    name: "Honda CR-V",
    category: "suv",
    price: 78,
    image: "./images/8.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 4,
    mileage: "32 MPG",
    type: "SUV"
  },
  {
    id: 9,
    name: "Ford Escape",
    category: "suv",
    price: 75,
    image: "./images/9.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 3,
    mileage: "31 MPG",
    type: "SUV"
  },
  {
    id: 10,
    name: "Chevrolet Equinox",
    category: "suv",
    price: 72,
    image: "./images/10.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 3,
    mileage: "28 MPG",
    type: "SUV"
  },
  {
    id: 11,
    name: "Ford Explorer",
    category: "suv",
    price: 95,
    image: "./images/11.jpg",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 5,
    mileage: "23 MPG",
    type: "SUV"
  },
  {
    id: 12,
    name: "Jeep Grand Cherokee",
    category: "suv",
    price: 110,
    image: "./images/12.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 4,
    mileage: "22 MPG",
    type: "SUV"
  },
  {
    id: 13,
    name: "Subaru Outback",
    category: "suv",
    price: 85,
    image: "./images/13.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 4,
    mileage: "29 MPG",
    type: "SUV"
  },
  {
    id: 14,
    name: "Nissan Rogue",
    category: "suv",
    price: 79,
    image: "./images/14.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 3,
    mileage: "30 MPG",
    type: "SUV"
  },

  // ================= LUXURY =================
  {
    id: 15,
    name: "Mercedes-Benz C-Class",
    category: "luxury",
    price: 160,
    image: "./images/15.webp",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 3,
    mileage: "28 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 16,
    name: "Mercedes-Benz E-Class",
    category: "luxury",
    price: 180,
    image: "./images/16.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 3,
    mileage: "26 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 17,
    name: "BMW 3 Series",
    category: "luxury",
    price: 155,
    image: "./images/17.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "29 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 18,
    name: "BMW 5 Series",
    category: "luxury",
    price: 175,
    image: "./images/18.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 3,
    mileage: "32 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 19,
    name: "Audi A4",
    category: "luxury",
    price: 150,
    image: "./images/19.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "30 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 20,
    name: "Lexus ES",
    category: "luxury",
    price: 145,
    image: "./images/20.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    luggage: 3,
    mileage: "34 MPG",
    type: "Luxury Sedan"
  },
  {
    id: 21,
    name: "Cadillac XT5",
    category: "luxury",
    price: 140,
    image: "./images/21.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 4,
    mileage: "24 MPG",
    type: "Luxury SUV"
  },
  {
    id: 22,
    name: "BMW X5",
    category: "luxury",
    price: 210,
    image: "./images/22.webp",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 5,
    mileage: "21 MPG",
    type: "Luxury SUV"
  },
  {
    id: 23,
    name: "BMW X7",
    category: "luxury",
    price: 220,
    image: "./images/23.jpg",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 5,
    mileage: "21 MPG",
    type: "Luxury SUV"
  },
  {
    id: 24,
    name: "Mercedes-Benz GLE",
    category: "luxury",
    price: 195,
    image: "./images/24.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 4,
    mileage: "23 MPG",
    type: "Luxury SUV"
  },

  // ================= ELECTRIC =================
  {
    id: 25,
    name: "Tesla Model 3",
    category: "electric",
    price: 150,
    image: "./images/25.webp",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 2,
    mileage: "134 MPGe",
    type: "Electric Sedan"
  },
  {
    id: 26,
    name: "Tesla Model Y",
    category: "electric",
    price: 180,
    image: "./images/26.avif",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 3,
    mileage: "123 MPGe",
    type: "Electric SUV"
  },
  {
    id: 27,
    name: "Tesla Model X",
    category: "electric",
    price: 250,
    image: "./images/27.jpg",
    passengers: 7,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 4,
    mileage: "102 MPGe",
    type: "Electric SUV"
  },
  {
    id: 28,
    name: "Ford Mustang Mach-E",
    category: "electric",
    price: 170,
    image: "./images/28.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 3,
    mileage: "110 MPGe",
    type: "Electric SUV"
  },
  {
    id: 29,
    name: "Chevrolet Bolt EV",
    category: "electric",
    price: 130,
    image: "./images/29.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 2,
    mileage: "118 MPGe",
    type: "Electric Hatchback"
  },
  {
    id: 30,
    name: "Hyundai Ioniq 5",
    category: "electric",
    price: 160,
    image: "./images/30.jpg",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Electric",
    luggage: 3,
    mileage: "114 MPGe",
    type: "Electric Crossover"
  },

  // ================= SPORTS =================
  {
    id: 31,
    name: "Chevrolet Camaro",
    category: "sports",
    price: 180,
    image: "./images/31.jpg",
    passengers: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "19 MPG",
    type: "Sports Car"
  },
  {
    id: 32,
    name: "Ford Mustang",
    category: "sports",
    price: 200,
    image: "./images/32.jpg",
    passengers: 4,
    transmission: "Manual",
    fuel: "Petrol",
    luggage: 2,
    mileage: "18 MPG",
    type: "Sports Car"
  },
  {
    id: 33,
    name: "Dodge Challenger",
    category: "sports",
    price: 190,
    image: "./images/33.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "17 MPG",
    type: "Sports Car"
  },
  {
    id: 34,
    name: "Porsche 718 Cayman",
    category: "sports",
    price: 280,
    image: "./images/34.jpg",
    passengers: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 1,
    mileage: "24 MPG",
    type: "Sports Car"
  },
  {
    id: 35,
    name: "Nissan 370Z",
    category: "sports",
    price: 175,
    image: "./images/35.jpg",
    passengers: 2,
    transmission: "Manual",
    fuel: "Petrol",
    luggage: 1,
    mileage: "22 MPG",
    type: "Sports Car"
  },
  {
    id: 36,
    name: "Subaru WRX",
    category: "sports",
    price: 165,
    image: "./images/36.jpg",
    passengers: 5,
    transmission: "Manual",
    fuel: "Petrol",
    luggage: 2,
    mileage: "21 MPG",
    type: "Sports Sedan"
  },

  // ================= SUPER LUXURY =================
  {
    id: 37,
    name: "Lamborghini Huracán",
    category: "super-luxury",
    price: 600,
    image: "./images/37.webp",
    passengers: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 1,
    mileage: "15 MPG",
    type: "Supercar"
  },
  {
    id: 38,
    name: "Ferrari 488 GTB",
    category: "super-luxury",
    price: 750,
    image: "./images/38.webp",
    passengers: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 1,
    mileage: "16 MPG",
    type: "Supercar"
  },
  {
    id: 39,
    name: "Porsche 911 Turbo S",
    category: "super-luxury",
    price: 450,
    image: "./images/39.webp",
    passengers: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "20 MPG",
    type: "Supercar"
  },
  {
    id: 40,
    name: "Rolls-Royce Ghost",
    category: "super-luxury",
    price: 800,
    image: "./images/40.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 4,
    mileage: "14 MPG",
    type: "Ultra Luxury Sedan"
  },
  {
    id: 41,
    name: "Bentley Continental GT",
    category: "super-luxury",
    price: 550,
    image: "./images/41.avif",
    passengers: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 3,
    mileage: "18 MPG",
    type: "Grand Tourer"
  },
  {
    id: 42,
    name: "Aston Martin DB11",
    category: "super-luxury",
    price: 500,
    image: "./images/42.webp",
    passengers: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 2,
    mileage: "19 MPG",
    type: "Grand Tourer"
  },

  // ================= TRUCK / PICKUP =================
  {
    id: 43,
    name: "Ford F-150",
    category: "truck",
    price: 120,
    image: "./images/43.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 8,
    mileage: "20 MPG",
    type: "Pickup Truck"
  },
  {
    id: 44,
    name: "Chevrolet Silverado 1500",
    category: "truck",
    price: 130,
    image: "./images/44.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    luggage: 8,
    mileage: "23 MPG",
    type: "Pickup Truck"
  },
  {
    id: 45,
    name: "Ram 1500",
    category: "truck",
    price: 125,
    image: "./images/45.jpg",
    passengers: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    luggage: 7,
    mileage: "22 MPG",
    type: "Pickup Truck"
  },
  {
    id: 46,
    name: "Toyota Tacoma",
    category: "truck",
    price: 110,
    image: "./images/Toyota Tacoma.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 6,
    mileage: "21 MPG",
    type: "Pickup Truck"
  },
  {
    id: 47,
    name: "GMC Sierra 1500",
    category: "truck",
    price: 135,
    image: "./images/GMC Sierra 1500.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    luggage: 8,
    mileage: "24 MPG",
    type: "Pickup Truck"
  },
  {
    id: 48,
    name: "Nissan Titan",
    category: "truck",
    price: 115,
    image: "./images/Nissan Titan.avif",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    luggage: 7,
    mileage: "19 MPG",
    type: "Pickup Truck"
  },

];


// Helper function to get car by ID
function getCarById(id) {
    return carsData.find(car => car.id === id) || carsData[0];
}

// Helper function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}