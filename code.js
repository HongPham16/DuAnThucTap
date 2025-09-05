// Lấy danh sách sản phẩm từ API hoặc cơ sở dữ liệu
const products = [
    { id: 1, name: 'Pizza', price: 55, quantity: 1 },
    { id: 2, name: 'Burger', price: 30, quantity: 1 },
    { id: 3, name: 'Sushi', price: 35, quantity: 1 },
    { id: 4, name: 'Đùi Gà Chiên', price: 55, quantity: 1 },
    { id: 5, name: 'Hamburrger', price: 30, quantity: 1 },
    { id: 6, name: 'Hot Dog', price: 20, quantity: 1 },
    { id: 7, name: 'Kebab', price: 30, quantity: 1 },
    { id: 8, name: 'Khoai Tây Chiên', price: 50, quantity: 1 },
    { id: 9, name: 'Mì Tôm Trứng', price: 25, quantity: 1 },
    { id: 10, name: 'Sữa Milo', price: 15, quantity: 1 },
    { id: 11, name: 'Cocacola', price: 15, quantity: 1 },
    { id: 12, name: 'Trà Sữa', price: 25, quantity: 1 },

];

function showcart() {
    var x = document.getElementById('cart');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
// Lấy các phần tử giao diện
const productsSection = document.querySelector('#products');
const cartItemsContainer = document.querySelector('#cart-items');
const totalCostElement = document.querySelector('#total-cost');
const checkoutBtn = document.querySelector('#checkout-btn');

// Hiển thị danh sách sản phẩm
function renderProducts() {
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Giá: ${product.price}$</p>
      <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
    `;
        productsSection.appendChild(productElement);
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        const existingProduct = cart.find(item => item.id === productId);
        const quantityInput = document.querySelector('.SoLuong');


        if (existingProduct) {
            existingProduct.quantity++; // Tăng số lượng sản phẩm
        } else {
            cart.push(selectedProduct); // Thêm sản phẩm mới vào giỏ hàng
        }

        updateCart();
    }
}


// Cập nhật giỏ hàng
function updateCart() {
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        const itemTotalPrice = item.price * item.quantity;

        cartItemElement.innerHTML = `${item.name}: ${itemTotalPrice}$ (Số Lượng ${item.quantity}) <button class="remove" onclick="removeFromCart(${item.id})">Xóa</button>`;
        cartItemsContainer.appendChild(cartItemElement);

        totalPrice += itemTotalPrice;
    });

    totalCostElement.innerText = totalPrice;
}
// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
    updateCart();
}
// Thanh toán
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Bạn chưa mua hàng. Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán!');
    } else {
        alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng!');
        cart = [];
        updateCart();
        location.reload();
    }
});

// Khởi tạo giỏ hàng rỗng
let cart = [];