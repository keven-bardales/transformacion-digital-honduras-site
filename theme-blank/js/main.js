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
