// Toggle featured card details visibility
function toggleCardDetails(cardElement) {
	const details = cardElement.querySelector('.card-details');
	if (details) {
		if (details.style.display === 'none' || !details.style.display) {
			details.style.display = 'block';
			const button = cardElement.querySelector('.toggle-btn');
			if (button) button.textContent = 'Show Less';
		} else {
			details.style.display = 'none';
			const button = cardElement.querySelector('.toggle-btn');
			if (button) button.textContent = 'Show More';
		}
	}
}

// Toggle attraction visibility on destination page
function toggleAttractions(attractionsElement) {
	const list = attractionsElement.querySelector('ol');
	if (list) {
		if (list.style.display === 'none' || !list.style.display) {
			list.style.display = 'block';
			const button = attractionsElement.querySelector('.toggle-attractions-btn');
			if (button) button.textContent = 'Hide Attractions';
		} else {
			list.style.display = 'none';
			const button = attractionsElement.querySelector('.toggle-attractions-btn');
			if (button) button.textContent = 'Show Attractions';
		}
	}
}

// Change destination image (for interactive gallery effect)
function cycleDestinationImage(imageElement, destinationId) {
	const images = {
		st: [
			'images/st-thomas.jpg',
			'https://via.placeholder.com/400x300?text=St.+Thomas+Beach'
		],
		mx: [
			'images/mexico.jpg',
			'https://via.placeholder.com/400x300?text=Mexico+Ruins'
		],
		pr: [
			'images/puerto-rico.jpg',
			'https://via.placeholder.com/400x300?text=Puerto+Rico+Beach'
		]
	};

	const imageList = images[destinationId] || [];
	if (imageList.length === 0) return;

	const currentSrc = imageElement.src;
	const currentIndex = imageList.indexOf(currentSrc);
	const nextIndex = (currentIndex + 1) % imageList.length;
	imageElement.src = imageList[nextIndex];
}

// Newsletter signup handler
function handleNewsletterSignup(event) {
	event.preventDefault();

	const emailInput = document.querySelector('#newsletter-email');
	const email = emailInput ? emailInput.value.trim() : '';

	if (!email) {
		alert('Please enter your email address.');
		return;
	}

	if (!email.includes('@')) {
		alert('Please enter a valid email address.');
		return;
	}

	alert(`Thank you for subscribing with ${email}! Check your inbox for travel tips.`);
	if (emailInput) emailInput.value = '';
}

// Initialize interactive elements when page loads
document.addEventListener('DOMContentLoaded', function () {
	// Add click handlers to toggle buttons for featured cards
	const toggleCardButtons = document.querySelectorAll('.toggle-btn');
	toggleCardButtons.forEach(button => {
		button.addEventListener('click', function () {
			const card = this.closest('.featured-card');
			if (card) toggleCardDetails(card);
		});
	});

	// Add click handlers for attraction toggles
	const toggleAttractionButtons = document.querySelectorAll(
		'.toggle-attractions-btn'
	);
	toggleAttractionButtons.forEach(button => {
		button.addEventListener('click', function () {
			const attractions = this.closest('.attractions');
			if (attractions) toggleAttractions(attractions);
		});
	});

	// Add handlers for image cycling buttons
	const cycleImageButtons = document.querySelectorAll('.cycle-image-btn');
	cycleImageButtons.forEach(button => {
		button.addEventListener('click', function () {
			const destinationId = this.dataset.destination;
			const image = this.closest('.destination').querySelector('img');
			if (image && destinationId) cycleDestinationImage(image, destinationId);
		});
	});

	// Handle newsletter form
	const newsletterForm = document.querySelector('#newsletter-form');
	if (newsletterForm) {
		newsletterForm.addEventListener('submit', handleNewsletterSignup);
	}
});
