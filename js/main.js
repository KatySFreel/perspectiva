// header
window.onscroll = function () {
	const mainHeader = document.getElementById("header")
	const headerTop = document.getElementById("header-top")
	const stickyHeader = document.getElementById("sticky-header")
	const mainHeaderHeight = mainHeader.offsetHeight

	if (window.pageYOffset > mainHeaderHeight) {
		stickyHeader.style.top = "0"
		headerTop.style.top = "-45px"
		stickyHeader.classList.add("header-sticky")
	} else {
		stickyHeader.style.top = "45px"
		headerTop.style.top = "0"
		stickyHeader.classList.remove("header-sticky")
	}
}

// tabs
const buttons = [
	{ name: "Варочная панель", filter: "category-1" },
	{ name: "Винный шкаф", filter: "category-2" },
	{ name: "Водонагреватель", filter: "category-3" },
	{ name: "Вытяжка", filter: "category-4" },
	{ name: "Газовая плита", filter: "category-5" },
	{ name: "Духовой шкаф", filter: "category-6" },
	{ name: "Кондиционер", filter: "category-7" },
	{ name: "Кофемашина", filter: "category-8" },
	{ name: "Микроволновая печь", filter: "category-9" },
	{ name: "Морозильник", filter: "category-10" },
	{ name: "Посудомоечная машина", filter: "category-11" },
	{ name: "Пылесос", filter: "category-12" },
	{ name: "Робот-пылесос", filter: "category-13" },
	{ name: "Стиральная машина", filter: "category-14" },
	{ name: "Сушильная машина", filter: "category-15" },
	{ name: "Телевизор", filter: "category-16" },
	{ name: "Холодильник", filter: "category-17" },
	{ name: "Электрическая плита", filter: "category-18" },
]

// не копировала все, предпологаю, что раз это для cms, то будет api с бэкенда
const categories = [
	{
		filter: "category-1",
		items: [
			{
				text: "Демонтаж-монтаж встраиваемой панели",
				price: "от 600₽",
			},
			{ text: "Замена стеклокерамической панели", price: "от 1000₽" },
			{ text: "Замена конфорки", price: "от 500₽" },
			{ text: "Установка новой панели", price: "от 700₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-2",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-3",
		items: [
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
		]
	},
	{
		filter: "category-4",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-5",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-6",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-7",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-8",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-9",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-10",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-11",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-12",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-13",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-14",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-15",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-16",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-17",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
	{
		filter: "category-18",
		items: [
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
			{ text: "Ремонт сенсорного управления", price: "от 800₽" },
			{ text: "Чистка и обслуживание", price: "от 400₽" },
			{ text: "Замена блока управления", price: "от 1200₽" },
			{ text: "Ремонт электроники", price: "от 1500₽" },
		]
	},
]

function createButtons(buttons) {
	return buttons
		.map(
			(button) => `
      <button class="assortment__btn" type="button" data-filter=".${button.filter}">
          <span class="assortment__btn-content">${button.name}</span>
      </button>
  `
		)
		.join("")
}

function createAssortimentItem(item) {
	return `
		<li class="assortment__item">
			<a class="assortment__link" href="#">
				<p class="assortment__item-text">${item.text}</p>
				<p class="assortment__item-price">${item.price}</p>
				<i class="assortment__item-icon fa-solid fa-arrow-right"></i>
			</a>
		</li>
	`
}

function createCategoryContent(categories) {
	return categories
		.map(
			(category) => `
      <div class="mix ${category.filter}">
          <ul class="assortment__list">
              ${category.items
								.slice(0, 5)
								.map((item) => createAssortimentItem(item))
								.join("")}
          </ul>
          ${
						category.items.length > 5
							? '<button class="assortment__show-more">Показать еще</button>'
							: ""
					}
      </div>
  `
		)
		.join("")
}

function showMoreItems(button) {
	const container = button.previousElementSibling
	const filterClass = container.parentElement.classList[1]
	const category = categories.find((cat) => cat.filter === filterClass)
	const currentItems = container.querySelectorAll(".assortment__item").length
	const newItems = category.items
		.slice(currentItems, currentItems + 4)
		.map((item) => createAssortimentItem(item))
		.join("")
	container.insertAdjacentHTML("beforeend", newItems)
	if (currentItems + 4 >= category.items.length) {
		button.style.display = "none"
	}
}

document.getElementById("buttonContainer").innerHTML = createButtons(buttons)
document.getElementById("contentContainer").innerHTML =
	createCategoryContent(categories)

document.querySelectorAll(".assortment__show-more").forEach((button) => {
	button.addEventListener("click", function () {
		showMoreItems(this)
	})
})

let mixer = mixitup(".assortment__inner")
mixer.filter(".category-1")

// cookie
const cookie = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')

setTimeout(() => cookie.classList.add('show'), 10000)

cookieBtn.addEventListener('click', () => cookie.classList.remove('show'))

// phone-mask 
new PhoneMask('#offer-phone')
new PhoneMask('#contacts-phone')

PhoneMask.Options.flush()

// thanks-modal
document.addEventListener("DOMContentLoaded", function () {
	const forms = document.querySelectorAll(".form")
	const loading = document.getElementById("loading")
	const modal = document.getElementById("thanks-modal")
	const closeModalIcon = document.querySelector(".thanks-modal__icon")
	const closeModalBtn = document.querySelector(".thanks-modal__btn")

	forms.forEach(function (form) {
		form.addEventListener("submit", function (event) {
			event.preventDefault()

			const phoneInput = form.querySelector("input[name='phone']")
			const phone = phoneInput.value

			if (phone.trim() === "") {
				phoneInput.focus()
				return
			}

			loading.style.opacity = 1

			setTimeout(function () {
				loading.style.opacity = 0
				modal.classList.add("show")
			}, 2000)
		})
	})

	closeModalIcon.onclick = function () {
		modal.classList.remove("show")
	}

	closeModalBtn.onclick = function () {
		modal.classList.remove("show")
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.classList.remove("show")
		}
	}
})

// select
const customSelect = document.querySelector(".header-select")
const selectBtn = document.querySelector(".header-select__button")
const selectValue = document.querySelector(".header-select__value")
const optionsList = document.querySelectorAll(".header-select__item")

selectBtn.addEventListener("click", () => {
  customSelect.classList.toggle("active")
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  )
})

optionsList.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      const selectedId = option.getAttribute("data-id")
      const previouslySelectedOption = document.querySelector(".header-select__item.hidden")

      if (previouslySelectedOption) {
        previouslySelectedOption.classList.remove("hidden")
      }

      selectValue.textContent = selectedId
      option.classList.add("hidden")
      customSelect.classList.remove("active")
    }
  })
})
