const svgCart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgCart.setAttribute('width', 27);
svgCart.setAttribute('height', 25);
svgCart.setAttribute('fill', 'none');
const svgCartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
svgCartPath.setAttribute('d', 'M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z');
svgCart.appendChild(svgCartPath);
const featuredItems = document.querySelector('.products');
const productsData = JSON.parse(data);
const productsAdaptive = document.createElement('style');
document.body.appendChild(productsAdaptive);
let count = 0;
let oldCount = 0;
const prodButtons = [];
const showProducts = () => {
    for (count; count < productsData.length; count++) {
        if (!(count % 6) && (count !== oldCount)) break;
        const product = document.createElement('a');
        product.href = '#';
        const productImg = document.createElement('div');
        productImg.classList.add('product');
        productImg.style.background = `url(${productsData[count]['image']})`;
        product.appendChild(productImg);
        const productHover = document.createElement('div');
        productHover.classList.add('product__hover');
        productImg.appendChild(productHover);
        const productButton = document.createElement('div');
        productButton.classList.add('product__hover__btn');
        const addToCart = document.createElement('p');
        addToCart.textContent = 'Add to Cart';
        productButton.appendChild(svgCart.cloneNode(true));
        productButton.appendChild(addToCart);
        prodButtons.push(productButton);
        productHover.appendChild(productButton);

        const titleAndPrice = document.createElement('div');
        titleAndPrice.classList.add('title__and__price');
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = productsData[count]['title'];
        const desc = document.createElement('p');
        desc.classList.add('description');
        desc.textContent = productsData[count]['desc'];
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `${productsData[count]['price']} Ꝑ`;
        titleAndPrice.appendChild(title);
        titleAndPrice.appendChild(desc);
        titleAndPrice.appendChild(price);
        product.appendChild(titleAndPrice);
        featuredItems.appendChild(product);
    }
    oldCount = count;
    productsAdaptive.textContent = `.products {
        grid-template-rows: repeat(${Math.ceil(count / 3)}, 581px);
    }
    
    @media(max-width: 1180px) {
        .products {
            grid-template-rows: repeat(${Math.ceil(count / 2)}, 581px);
        }
    }`;
}
showProducts();

const cart = {};
const cartItems = document.createElement('section');
cartItems.classList.add('cart__items');
const cartItemsHead = document.createElement('h3');
cartItemsHead.textContent = 'Cart Items';
const quantityBox = document.createElement('div');
quantityBox.classList.add('quantity__box');
const addClickEvent = () => {
    prodButtons.forEach(element => {
        element.onclick = () => {
            if (!Object.keys(cart).length) {
                document.querySelector('.features__bgr').after(cartItemsHead);
                cartItemsHead.after(cartItems);
            }
            if (typeof cart[prodButtons.indexOf(element)] !== 'object') {
                cart[prodButtons.indexOf(element)] = [1];
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart__item');
                cartItems.appendChild(cartItem);
                //     productsAdaptive.textContent = productsAdaptive.textContent.concat(`.cart__items {
                //     grid-template-rows: repeat(${Object.keys(cart).length}, 1fr);
                // }`);
                cartItems.style.gridTemplateRows = `repeat(${Object.keys(cart).length}, 1fr)`;
                const cartItemImg = document.createElement('div');
                cartItemImg.classList.add('cart__item__img');
                cartItemImg.style.background = `url(${productsData[prodButtons.indexOf(element)]['image']})`;
                cartItemImg.style.backgroundSize = 'cover';
                const cartItemText = document.createElement('div');
                cartItemText.classList.add('cart__item__text');
                const cartItemTitle = document.createElement('h4');
                cartItemTitle.classList.add('cart__item__title');
                cartItemTitle.textContent = productsData[prodButtons.indexOf(element)]['title'];
                const cartItemPrice = document.createElement('p');
                cartItemPrice.textContent = 'Price: ';
                const cartPriceSpan = document.createElement('span');
                cartPriceSpan.textContent = `${productsData[prodButtons.indexOf(element)]['price']} Ꝑ`;
                const quantity = document.createElement('div');
                quantity.classList.add('quantity');
                quantity.textContent = 'Quantity:';
                const itemQuantityBox = quantityBox.cloneNode(true);
                cart[prodButtons.indexOf(element)].push(itemQuantityBox);

                const deleteItem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                deleteItem.setAttribute('width', 18);
                deleteItem.setAttribute('height', 18);
                deleteItem.setAttribute('fill', '#575757'); const deleteItemPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                deleteItemPath.setAttribute('d', 'M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z');
                deleteItem.appendChild(deleteItemPath);
                deleteItem.onclick = () => {
                    if (cart[prodButtons.indexOf(element)][0] > 1) {
                        cart[prodButtons.indexOf(element)][0]--;
                        cart[prodButtons.indexOf(element)][1].textContent = cart[prodButtons.indexOf(element)][0];
                    }
                    else {
                        delete cart[prodButtons.indexOf(element)];
                        cartItem.remove();
                        cartItems.style.gridTemplateRows = `repeat(${Object.keys(cart).length}, 1fr)`;
                    }
                    if (!Object.keys(cart).length) {
                        cartItems.remove();
                        cartItemsHead.remove();
                    }
                }

                quantity.appendChild(itemQuantityBox);
                cartItemPrice.appendChild(cartPriceSpan);
                cartItemText.appendChild(cartItemTitle);
                cartItemText.appendChild(cartItemPrice);
                cartItemText.appendChild(quantity);
                cartItem.appendChild(cartItemImg);
                cartItem.appendChild(cartItemText);
                cartItem.appendChild(deleteItem);
            }
            else cart[prodButtons.indexOf(element)][0]++;
            cart[prodButtons.indexOf(element)][1].textContent = cart[prodButtons.indexOf(element)][0];
        }
    });
}
addClickEvent();
const browseAllBtn = document.querySelector('.all-prod-btn');
browseAllBtn.onclick = () => {
    showProducts();
    addClickEvent();
}