const toggleDarkMode = () => {
  console.log("CAMBIANDO MODO")
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'light' : 'dark';
  
    // Cambia el tema
    html.classList.toggle('dark', currentTheme === 'dark');
    // Guarda la preferencia en localStorage
    localStorage.setItem('theme', currentTheme);
};
  
const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

document.addEventListener('astro:page-load', () => {
  // Configurar botones de tema (tanto desktop como mobile)
  const buttons = document.querySelectorAll(".my-toggle-button");
  buttons.forEach(button => {
    button.addEventListener('click', toggleDarkMode);
  });

  // Configurar dropdown menu de mobile
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileDropdown = document.getElementById('mobileDropdown');
  
  if (mobileMenuButton && mobileDropdown) {
    mobileMenuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdown.classList.toggle('hidden');
    });
    
    // Cerrar el menu si se hace clic afuera
    document.addEventListener('click', (e) => {
      if (!mobileDropdown.contains(e.target)) {
        mobileDropdown.classList.add('hidden');
      }
    });
  }

  // Configura el tema al cargar la página
  setInitialTheme();
});