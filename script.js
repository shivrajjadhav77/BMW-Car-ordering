const cars = [
    {
        name: "BMW M340i",
        price: "$54,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6_-lVt2WgeF1huYQ2NkFnE3Bw8vS5yII-g&s"
    },
    {
        name: "BMW X5",
        price: "$65,000",
        image: "https://www.autonews.com/resizer/v2/RGP4ODQRIFHPRH4NUX7KCHACKU.jpg?smart=true&auth=4f9641117d10b832a031bc67ac78accf07fa252083ab0f74c148f6067b7150e5&width=1600&height=899"
    },
    {
        name: "BMW i8",
        price: "$147,500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjzwWB6M5QX91tx0LsqtkmJSqu2zWZJBAuA&s"
    },
    {
        name: "BMW Z",
        price: "$53,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBAsBk7IrQJsaG7DZDJqflyrow7GTugIorw&s"
    },
    {
        name: "BMW Z4",
        price: "$53,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBAsBk7IrQJsaG7DZDJqflyrow7GTugIorw&s"
    },
    {
        name: "BMW m4",
        price: "$59,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEGP50Q6yb-LSL75jjpEgVe8vjsPWLgjMXw&s"
    },
    {
        name: "BMW i8 m ",
        price: "$119,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zHK50xGAo7EwA3cEsJqh0rm_IEmzsItIIw&s"
    },
    {
        name: "BMW i8 hybrid ",
        price: "$419,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QiRdpQs9L0kzbY4BnJvw3e-KpiacEXOogA&s"
    },
     {
        name: "BMW electric ",
        price: "$189,000",
        image: "https://cdn.motor1.com/images/mgl/280zg/s3/mclaren-720s-spider.webp"
    },
     {
        name: "BMW McLaren",
        price: "$196,000",
        image: "https://s1.cdn.autoevolution.com/images/gallery/mclaren-750s-spider-2023-7497_24.jpg"
    },
     {
        name: "BMW m2 ",
        price: "$89,000",
        image: "https://www.financialexpress.com/wp-content/uploads/2023/06/BMW-M2-4.jpg?resize=650,366"
    },
     {
        name: "BMW 6 series ",
        price: "$273,000",
        image: "https://cdn.bmwblog.com/wp-content/uploads/2018/03/BMW-6-Series-Render-8-of-9.jpg"
    },


];


const carList = document.getElementById("car-list");
const searchInput = document.getElementById("search");

let cart = []; // Store ordered cars

function displayCars(filteredCars) {
    carList.innerHTML = "";
    filteredCars.forEach((car, index) => {
        carList.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p class="price">${car.price}</p>
                <button onclick="orderCar(${index})">Order Now</button>
            </div>
        `;
    });
}

function orderCar(index) {
    const selectedCar = cars[index];
    cart.push(selectedCar);
    alert(`✅ ${selectedCar.name} has been added to your cart!`);
    console.log("Current Cart:", cart);
}

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchValue));
    displayCars(filteredCars);
});

// Load all cars initially
displayCars(cars);
