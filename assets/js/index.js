// find product in localstorage
let allProducts = JSON.parse(localStorage.getItem('products'));
console.log(allProducts);


// load product details in page
$('#productName').html(allProducts.product_name);
$('#productPrice').html(`$${allProducts.sale_price}`);
$('#productDesc').html(allProducts.description);

// set selected image to first product image
let selectedImage = allProducts.images_url[0];
$('#productSelectedImage').attr('src', allProducts.images_url[0]);

// load images in image selector
allProducts.images_url.map((_img, i) => {
    document.getElementById('productImages').innerHTML +=
        `<div class="col col-12 mb-3 border" id="product_${i}"><img class="img-fluid product-images" alt="Product Image" src="${_img}" style="cursor: pointer;"></div>`;
    _img === selectedImage &&
        $(`#product_${i}`).addClass('border-primary');
});

// change selected image
$('.product-images').click(ev => {
    // indicate image change using div border
    var currentImage = ev.currentTarget.src;
    $('.product-images').parent().removeClass('border-primary');
    $(`#${ev.currentTarget.parentNode.id}`).addClass('border-primary');
    $('#productSelectedImage').attr('src', currentImage);
});

// set selected color to first color
let selectedColor = allProducts.color_variations[0].color;
let selectedColorName = allProducts.color_variations[0].name; selectedColorName;

// load colors in color selector
allProducts.color_variations.map((_col, i) => {
    document.getElementById('productVariations').innerHTML +=
        `<div class="col col-2 col-lg-1 px-0"><div class="text-left text-light rounded-circle mr-auto product-colors border" id="color_${i}" style="height: 25px; width: 25px; cursor: pointer; background-color: ${_col.color}"></div></div>`;

    _col.color === selectedColor &&
        (
            $(`#color_${i}`).addClass('border-primary'),
            $('#colorVariationSelected').html(_col.name),
            selectedColorName = _col.name
        )
});

// change selected color
$('.product-colors').click(ev => {
    // indicate color change using div border
    var currentColor = ev.currentTarget.style.backgroundColor;
    $('.product-colors').removeClass('border-primary');
    $(`#${ev.currentTarget.id}`).addClass('border-primary');
    allProducts.color_variations.map((_col, i) => {
        if (_col.color === currentColor) {
            $('#colorVariationSelected').html(_col.name);
            selectedColor = _col.color;
            selectedColorName = _col.name;

        }
    });
});

// handle adding to cart
$('#addToCart').click(ev => {
    ev.preventDefault();
    let _cart_data = JSON.parse(localStorage.getItem('cart'));

    let _new_cart = [];
    if (!_cart_data) {
        _new_cart.push({
            _id: allProducts._id,
            name: allProducts.product_name,
            image: allProducts.images_url[0],
            price: allProducts.sale_price,
            color: {
                color: selectedColor,
                name: selectedColorName
            },
            quantity: parseInt($('#productQty').val()),
        })
        localStorage.setItem('cart', JSON.stringify(_new_cart));
    } else {
        //check if item already in cart and update
        _cart_data.map((_cart, i) => {
            (_cart._id === allProducts._id) && (
                _cart['color'] = {
                    color: selectedColor,
                    name: selectedColorName
                },
                _cart['quantity'] = parseInt($('#productQty').val())
            )
        });
    }

    loadDataInCart(_cart_data);

    toggleNavigation(ev); // TODO: uncomment this when done

});


function loadDataInCart(_data) {

    let _sub_total = 0;
    let _cart_items_to_render = "";
    _data.map((_cart_item, i) => {

        _cart_items_to_render +=
            `<div class="row mx-0 mb-3">
                <div class="col col-6 col-lg-5" style="height:'50px';"><img class="img-fluid w-100" src="${_cart_item.image}" style="height: 150px !important;object-fit: cover;"></div>
                <div class="col col-6 col-lg-7 text-primary ">
                    <h5 class="mb-0 text-primary">${_cart_item.name}</h5>
                    <h5 class="mb-0 text-dark">$ ${_cart_item.price}</h5>
                    <small class="text-primary">${_cart_item.color.name}</small>
                    <h6 class="mb-0 font-weight-normal">Qty: ${_cart_item.quantity}</h6>
                </div>
            </div>`;
        _sub_total += _cart_item.price * _cart_item.quantity;
        $('#subTotal').html(`$ ${_sub_total.toFixed(2)}`);
    });
    document.getElementById('cart-items').innerHTML = _cart_items_to_render;
}

// close cart when user decides to continue shopping
$('#continueShopping').click(ev => {
    ev.preventDefault();
    $('.nav-close').trigger('click');
})

//load checkout page on click
$('#checkout').click(ev => {
    ev.preventDefault();
    window.location = 'checkout.html';
})