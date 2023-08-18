const toggleBtn = document.getElementById('toggleBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleBtnIcon = document.getElementById('toggleBtnIcon');

toggleBtn.addEventListener('click', () => {
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open');

	toggleBtnIcon.classList = isOpen ? "bi bi-x-lg" : "bi bi-list";
})