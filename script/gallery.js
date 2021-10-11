let cars = [
  {
    make: "Toyota",
    Model: 'Avalon',
    car_img: "Toyota-Avalon",
    price: '3,800,000.00'
  },
  {
    make: "Toyota",
    Model: "Camry",
    car_img: "Toyota-Camry",
    price: "2,500,000.00"
  },
  {
    make: "Toyota",
    Model: "Highlander",
    car_img: "Toyota-Highlander",
    price: "6,000,000.00"
  },
  {
    make: "Honda",
    Model: "Accord",
    car_img: "Honda-Accord",
    price: "2,300,000.00"
  },
  {
    make: "Honda",
    Model: "Civic",
    car_img: "Honda-Civic",
    price: "2,000,000.00"
  },
  {
    make: "Honda",
    Model: "Pilot",
    car_img: "Honda-Pilot",
    price: "5,250,000.00"
  },
  {
    make: "Mercedes Benz",
    Model: "A Class",
    car_img: "A-Class1",
    price: "8,000,000.00"
  },
  {
    make: "Mercedes Benz",
    Model: "AMG A35",
    car_img: "AMG-A35",
    price: "12,000,000.00"
  },
  {
    make: "Mercedes Benz",
    Model: "AMG C43",
    car_img: "A-Class1",
    price: "12,850,000.00"
  },
  {
    make: "Mercedes Benz",
    Model: "AMG GLA35",
    car_img: "AMG-GLA35",
    price: "14,000,000.00"
  },
  {
    make: "Toyota",
    Model: "RAV4",
    car_img: "Toyota-RAV4",
    price: "4,500,000.00"
  },
  {
    make: "Honda",
    Model: "CRV",
    car_img: "HondaCRV",
    price: "4,550,000.00"
  },
]

let carSection = document.getElementById('car-wrapper');
let html = "";
cars.forEach(e => {
  html += `
      <div class="col-sm-4">
        <div class="car-image">
          <img src="./images/${e.car_img}.png" alt="" class="img-fluid ">
        </div>
        <div class="my-3">
          <div class="car-make">Make: ${e.make}</div>
          <div class="car-brand">Model: ${e.Model}</div>
          <div class="car-price">Price: ${e.price}</div>
        </div>
      </div>

  ` 
  console.log(e)
  carSection.innerHTML = html
})