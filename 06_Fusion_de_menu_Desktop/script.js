const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMenuHamIcon);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){

	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	// Condicion para cerrar shoppingCartContainer

	if (!isAsideClosed){
		shoppingCartContainer.classList.add('inactive');
	}
	
	desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamIcon(){

	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	// Condicion para cerrar shoppingCartContainer

	if (!isAsideClosed){
		shoppingCartContainer.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

	const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

	if (!isDesktopMenuClosed){
		desktopMenu.classList.add('inactive');
	}

	// Condicion para cerrar mobileMenu

	if (!isMobileMenuClosed){
		mobileMenu.classList.add('inactive');
	}
	
	shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
	name: 'Bike',
	price: 120.00,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
	name: 'Pantalla',
	price: 320,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
	name: 'Computador',
	price: 700,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
	for (product of arr){
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
	
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);
	
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
	
		const productInfoDiv = document.createElement('div');
	
		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
		const productName = document.createElement('p');
		productName.innerText = product.name;
	
		productInfoDiv.append(productPrice, productName);
	
		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
	
		productInfoFigure.appendChild(productImgCart);
		productInfo.append(productInfoDiv, productInfoFigure);
		productCard.append(productImg, productInfo);
	
		cardsContainer.append(productCard);
	};
}

renderProducts(productList);