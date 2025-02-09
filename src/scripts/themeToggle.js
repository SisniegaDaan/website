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
  
  // Configura el tema al cargar la página
  setInitialTheme();