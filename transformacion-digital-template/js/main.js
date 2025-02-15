(function () {
  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

     // Array de proveedores
     const providers = [
      {
        name: "Proveedor 1",
        image: "https://via.placeholder.com/150",
        services: ["Software", "Consultoría"],
      },
      {
        name: "Proveedor 2",
        image: "https://via.placeholder.com/150",
        services: ["Big Data", "IA"],
      },
      {
        name: "Proveedor 3",
        image: "https://via.placeholder.com/150",
        services: ["Cloud", "Seguridad"],
      },
      {
        name: "Proveedor 4",
        image: "https://via.placeholder.com/150",
        services: ["Desarrollo Web", "DevOps"],
      },
      {
        name: "Proveedor 5",
        image: "https://via.placeholder.com/150",
        services: ["Análisis de Datos", "Consultoría"],
      },
    ];

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }


      // Función para renderizar las tarjetas
      function renderProviders() {
        const providersGrid = document.getElementById("providersGrid");

        // Genera cada tarjeta de proveedor
        providers.forEach((provider) => {
          // Crear elementos
          const card = document.createElement("div");
          card.classList.add("provider-card");

          const img = document.createElement("img");
          img.src = provider.image;
          img.alt = `Logo ${provider.name}`;

          const name = document.createElement("h3");
          name.textContent = provider.name;

          const chipsContainer = document.createElement("div");
          chipsContainer.classList.add("chips");

          // Generar chips de servicios
          provider.services.forEach((service) => {
            const chip = document.createElement("span");
            chip.classList.add("chip");
            chip.textContent = service;
            chipsContainer.appendChild(chip);
          });

          // Agregar elementos a la tarjeta
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(chipsContainer);

          // Agregar tarjeta al contenedor
          providersGrid.appendChild(card);
        });
      }

 
  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

      // Function dependent on providers page
      if (document.getElementById('providersGrid')) {
        renderProviders();
      }
    }
  });


})();
