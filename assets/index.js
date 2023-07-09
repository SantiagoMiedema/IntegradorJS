const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".show-more-btn")
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const cartProducts = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const succesModal = document.querySelector(".add-modal");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const cartBubble = document.querySelector(".cart-bubble");


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};


const createProductTemplate = (product) => {
    const {id, name, price, cardImg} = product;

    return `
            <div class="product">
                <img src=${cardImg} alt="${name}"/>
                <div class="product-info">
                    <h3>${name}</h3>
                    <span>$${price}</span>
                    <button class="btn-add"
                    data-id="${id}"
                    data-name="${name}"
                    data-price="${price}"
                    data-img="${cardImg}"
                    >Agregar</button>
                </div>
            </div>
    `
};

const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
};

const isLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit -1;
};

showMoreProducts = () => {
    appState.currentProductsIndex += 1;
    let {products, currentProductsIndex} = appState
    renderProducts(products[currentProductsIndex]);
    if (isLastIndexOf()) {
        showMoreBtn.classList.add("hidden");
    }
};



const isInactiveFilterBtn = (element) => {
	return (
		element.classList.contains("category") &&
		!element.classList.contains("active")
	);
};


const changeBtnActiveState = (selectedCategory) => {
	const categories = [...categoriesList];
	categories.forEach((categoryBtn) => {
		if (categoryBtn.dataset.category !== selectedCategory) {
			categoryBtn.classList.remove("active");
			return;
		}
		categoryBtn.classList.add("active");
	});
};

const setShowMoreVisibility = () => {
	if (!appState.activeFilter) {
		showMoreBtn.classList.remove("hidden");
		return;
	}
	showMoreBtn.classList.add("hidden");
};

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility();
};



const renderFilteredProducts = () => {
    const filteredProducts = productsData.filter((product) =>{
        return product.category === appState.activeFilter
    });
    renderProducts(filteredProducts);
};



const applyFilter = ({target}) => {
    if(!isInactiveFilterBtn(target)){
        return;
    }
    changeFilterState(target);
    productsContainer.innerHTML= "";
    if(appState.activeFilter){
        renderFilteredProducts();
        return;
    }
    renderProducts(appState.products[0]);
};


const toggleCart = () => {
     cartMenu.classList.toggle("open-cart");
     if (barsMenu.classList.contains("open-menu")){
        barsMenu.classList.remove("open-menu");
        return
     }
     overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
    barsMenu.classList.toggle("open-menu");
     if (cartMenu.classList.contains("open-cart")){
        barsMenu.classList.remove("open-cart");
        return
     }
     overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
    if (!barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")){
        return
    }
    barsMenu.classList.remove("open-menu")
    cartMenu.classList.remove("open-cart")
    overlay.classList.remove("show-overlay")
};

const closeOnClick = (e) => {
   if(!e.target.classList.contains("navbar-link")){
    return
   };
   barsMenu.classList.remove("open-menu");
   overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
};

//CARRITO

const createCartProductTemplate = (cartProduct) =>{
    const {id, name, price, img, quantity} = cartProduct
    return`
    <div class="cart-item">
        <img src=${img}>
        <div class="item-info">
            <h3 class="item-title">${name}</h3>
            <span class="item-price">$${price}</span>
        </div>
        <div class="item-handler">
             <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
    </div>
    `
};

 const renderCart = () => {
    if(!cart.length){
        cartProducts.innerHTML= `<p class="empty-msg"> No hay productos seleccionados. </p>`;
        return
     }
     cartProducts.innerHTML = cart.map(createCartProductTemplate).join("");
 };

const getCartTotal = () =>{
    return cart.reduce((acc, val) => {
        return acc + Number(val.price) * Number(val.quantity);
    },0);
}; 

const showCartTotal = () => {
    total.innerHTML = `${getCartTotal()}`;
};

const createProductData = (product) => {
    const {id, name, price, img} = product;
    return {id ,name, price, img}
};

const isExistingCartProduct = (productId) => {
	return cart.find((item) => {
		return item.id === productId;
	});
};

const addUnitToProduct = (product) => {
    cart = cart.map ((cartProduct) => {
        return cartProduct.id === product.id
        ? {...cartProduct, quantity: cartProduct.quantity + 1}
        : cartProduct;
    })
};

 const showSuccesModal = (msg) => {
     succesModal.classList.add("active-modal")
     succesModal.textContent = msg;
     setTimeout (() => {
         succesModal.classList.remove("active-modal");
     },2000)
 };

const createCartProduct = (product) => {
    cart = [
        ...cart,
        {
            ...product,
            quantity: 1,
        },
    ];
};

const disableBtn = (btn) => {
	if (!cart.length) {
		btn.classList.add("disabled");
	} else {
		btn.classList.remove("disabled");
	}
};

const renderCartBubble = () => {
    cartBubble.textContent = cart.reduce((acc, val) => {
        return acc + val.quantity;
    },0);
};

const updateCartState = () => {
    saveCart();
    renderCart();
    showCartTotal();
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
    renderCartBubble();

};

const addProduct = (e) => {
    if(!e.target.classList.contains("btn-add")){
        return;
    }
    const product = createProductData(e.target.dataset);
     if (isExistingCartProduct(product.id)) {
         addUnitToProduct(product);
         showSuccesModal("¡Otra unidad del producto se agrego al carrito!");
     } else {
         createCartProduct(product);
         showSuccesModal("¡El producto se ha agregado al carrito!");
     }

    updateCartState();

};

const removeProductFromCart = (existingProduct) => {
    cart = cart.filter((product) => {
        return product.id !== existingProduct.id
    });
    updateCartState();
};

const substractProductUnit = (existingProduct) => {
    cart = cart.map((product) => {
        return product.id === existingProduct.id
        ? {...product, quantity: Number(product.quantity) -1}
        : product;
    });
};

const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);

    if(existingCartProduct.quantity === 1){
        if(window.confirm("¿Estas seguro de eliminar el producto del carrito?")){
            removeProductFromCart(existingCartProduct);
        }
        return;
    }
    substractProductUnit(existingCartProduct);
};

handlePlusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);
    addUnitToProduct(existingCartProduct);
};

handleQuantity = (e) => {
    if(e.target.classList.contains("down")){
        handleMinusBtnEvent(e.target.dataset.id);
    } else if (e.target.classList.contains("up")){
        handlePlusBtnEvent(e.target.dataset.id);
    }
    updateCartState();
};

const resetCartItem = () => {
    cart = [];
    updateCartState();
};

const completeCartAction = (confirmMsg, succesMsg) => {
    if (!cart.length) return;

    if(window.confirm(confirmMsg)){
        resetCartItem();
        alert(succesMsg);
    }
};

const completeBuy = () => {
    completeCartAction("¿Desea completar su compra?" , "¡Gracias por su compra!");
};

const deleteCart = () => {
    completeCartAction("¿Desea vaciar el carrito?" , "No hay productos en el carrito")
};



const init = () => {
      renderProducts(appState.products[0]);
      showMoreBtn.addEventListener("click",showMoreProducts)
      categoriesContainer.addEventListener("click" , applyFilter);
      cartBtn.addEventListener("click", toggleCart);
      menuBtn.addEventListener("click", toggleMenu);
      window.addEventListener("scroll" , closeOnScroll);
      barsMenu.addEventListener("click" ,closeOnClick);
      overlay.addEventListener("click" , closeOnOverlayClick);
      document.addEventListener("DOMContenLoaded" , renderCart);
      document.addEventListener("DOMContenLoaded" , showCartTotal);
      productsContainer.addEventListener("click", addProduct);
      cartProducts.addEventListener("click", handleQuantity);
      buyBtn.addEventListener("click", completeBuy);
      deleteBtn.addEventListener("click" , deleteCart);
      disableBtn(buyBtn);
      disableBtn(deleteBtn);
      renderCartBubble();
      renderCart();
      showCartTotal();
};


init();

// 1h10