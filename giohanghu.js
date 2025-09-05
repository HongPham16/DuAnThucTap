var quantity = document.getElementById('quantity1');
var price = document.getElementById('price1');
var tong = document.getElementById('tong1');
var formPrice = (price) => {
    return '(' + '$' + price.toFixed(4) + 'TOTAL' + ')';
}
var update = () => {
    var quantity1 = parseInt(quantity.value);
    var sum = 1;
    var total = quantity1 * sum;
    tong.textContent = formPrice(total);
}
quantity.addEventListener('change', update);
const zom = document.querySelectorAll('.zoomable');
zom.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('zoomed');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('zoomed');
    });
});