const db = [
    {
        id: 1,
        name: 'Nasi Goreng Jawa',
        price: 10000,
        image: 'https://www.bango.co.id/gfx/recipes/1460572108.jpg'
    },
    {
        id: 2,
        name: 'Nasi Goreng Special',
        price: 15000,
        image: 'https://www.resepistimewa.com/wp-content/uploads/nasi-goreng-spesial.jpg'
    },
    {
        id: 3,
        name: 'Nasi Goreng Ayam',
        price: 13000,
        image: 'https://3.bp.blogspot.com/-1_HewpxJNbY/W8DwR9DwUYI/AAAAAAAABbM/k8HF8MEdYnUllQxj_eApbtKqWU74mAzfACLcBGAs/s1600/fried-2509089_1920.jpg'
    }
]


let card = ``;

for (let i = 0; i < db.length; i++) {
    const { id, name, price, image } = db[i];
    
    card += `<div class="card">
    <a href="#">
      <img src=${image} alt="food" class="card-img">
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="card-title">
            ${name}
        </h5>
      </a>
      <div class="mt-2.5 mb-5">
        <span class="flex items-center">
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </span>
      </div>
      <div class="flex justify-between items-center">
        <span class="card-price">
          Rp. ${price}
        </span>
        <a href="#" class="btn">
          Pesan
        </a>
      </div>
    </div>
  </div>`
}

const cards = document.querySelector('.cards');

cards.innerHTML = card;

const btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(event) {
    event.preventDefault();
    const button = event.target;
    const tableCart = document.querySelector('.table-cart');
    const price = button.parentElement.parentElement.querySelector('.card-price').innerText;

    const {name, priceName} = {name: button.parentElement.parentElement.querySelector('.card-title').innerText, priceName: button.parentElement.parentElement.querySelector('.card-price').innerText};
    
    tableCart.innerHTML += `<tr class="tr-body">
    <th class="th-row">
      ${name}
    </th>
    <td class="price">
      ${priceName}
    </td>
    <td class="flex justify-center">
      <input type="number" class="inputNum" value="1">
    </td>
    <td class="card-sum">
      ${priceName}
    </td>
    <td class="flex justify-center">
      <button class="btn-red">
        Delete
      </button>
    </td>
  </tr>`
  } )
}

const btnUpdate = document.querySelector('.btn-update');


let btnred = document.querySelectorAll('.btn-red');

btnUpdate.addEventListener('click', function() {
  btnred = document.querySelectorAll('.btn-red');
  console.log(btnred);
  const btngreen = document.querySelector('.btn-green');
  updateCartTotal();

for (let i = 0; i < btnred.length; i++) {
  btnred[i].addEventListener('click', function(event) {
    event.preventDefault();
    const button = event.target;
    button.parentElement.parentElement.remove();
    updateCartTotal();

  })
}

const tableCart = document.querySelector('.table-cart');
const cartRows = tableCart.getElementsByClassName('tr-body');
for (let i = 0; i < cartRows.length; i++) {
  
  let cartRow = cartRows[i];
  let quantity = cartRow.querySelector('.inputNum');

  quantity.onchange = function(event) {
    updateCartTotal();
  }
}

function updateCartTotal() {
  const tableCart = document.querySelector('.table-cart');
  
  const cartRows = tableCart.getElementsByClassName('tr-body');

  let total = document.querySelector('#total');
  let sumPriceSave = 0;


  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let sumPrice = cartRow.querySelector('.card-sum');
    let priceElement = cartRow.querySelector('.price').innerText;
    let quantity = cartRow.querySelector('.inputNum').value;

    priceElement = priceElement.replace(/[^0-9]/g, '');

    sumPrice.innerText = 'Rp. ' + (priceElement * quantity);
    
    sumPriceSave +=  parseInt(sumPrice.innerText.replace(/[^0-9]/g, '')); 
  }
  total.innerText = 'Rp. ' + sumPriceSave;
}
})