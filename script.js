const boxes = document.querySelectorAll('.box');
const totalPrice = document.getElementById('total-price');

const prices = {
  1: '$10.00 USD',
  2: '$18.00 USD',
  3: '$24.00 USD'
};

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove expanded from all
    boxes.forEach(b => {
      b.classList.remove('expanded');
      b.querySelector('input[type="radio"]').checked = false;
    });

    // Expand clicked
    box.classList.add('expanded');
    box.querySelector('input[type="radio"]').checked = true;

    // Update total price
    const selectedBox = parseInt(box.getAttribute('data-box'));
    totalPrice.textContent = prices[selectedBox];
  });
});