// DOM Elements
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const dropdownBtns = document.querySelectorAll(".dropdown-btn")
const modals = document.querySelectorAll(".modal")

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileMenu.classList.toggle("active")
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : ""
})

// Dropdown Menu Toggle
dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    const dropdown = btn.closest(".dropdown")
    const isActive = dropdown.classList.contains("active")

    // Close all dropdowns
    document.querySelectorAll(".dropdown").forEach((d) => d.classList.remove("active"))

    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add("active")
    }
  })
})

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((d) => d.classList.remove("active"))
  }
})

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(`${modalId}-modal`)
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(`${modalId}-modal`)
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Close modal when clicking outside
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
})

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach((modal) => {
      if (modal.classList.contains("active")) {
        modal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }
})

// Form Submissions
document.addEventListener("DOMContentLoaded", () => {
  // Appointment Form
  const appointmentForm = document.querySelector(".appointment-form")
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(appointmentForm)
      const data = Object.fromEntries(formData)

      // Simulate form submission
      console.log("[v0] Appointment form submitted:", data)

      // Show success message
      alert("Agendamento solicitado com sucesso! Entraremos em contato em breve.")

      // Close modal and reset form
      closeModal("agendamento")
      appointmentForm.reset()
    })
  }

  // Newsletter Form
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = newsletterForm.querySelector('input[type="email"]').value

      // Simulate newsletter subscription
      console.log("[v0] Newsletter subscription:", email)

      // Show success message
      alert("Inscrição realizada com sucesso! Obrigado por se inscrever em nossa newsletter.")

      // Reset form
      newsletterForm.reset()
    })
  }
})

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header Scroll Effect
let lastScrollTop = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Add/remove scrolled class for styling
  if (scrollTop > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  lastScrollTop = scrollTop
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .about-text, .about-image")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Phone Number Formatting
function formatPhoneNumber(input) {
  const value = input.value.replace(/\D/g, "")
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  input.value = formattedValue
}

// Apply phone formatting to phone inputs
document.addEventListener("DOMContentLoaded", () => {
  const phoneInputs = document.querySelectorAll('input[type="tel"]')
  phoneInputs.forEach((input) => {
    input.addEventListener("input", () => formatPhoneNumber(input))
  })
})

// Console log for debugging
console.log("[v0] OÁ Odontologia website loaded successfully")
