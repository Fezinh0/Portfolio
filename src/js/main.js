// Dark Light
function clique() {
    var element = document.body;
    element.classList.toggle("darkmode");
 }

 // girar raio
 var giro = document.getElementById('giro');
 function Click() {
    giro.style.transform = "rotateX(10deg) rotateY(720deg)"
 }

// Menu

const btnMobile = document.getElementById('btn-mobile');
        
                function toggleMenu(event) {
                    if (event.type === 'touchstart') event.preventDefault();
                    const nav = document.getElementById('nav');
                    nav.classList.toggle('active');
                }
        
                btnMobile.addEventListener('click', toggleMenu);
                btnMobile.addEventListener('touchstart', toggleMenu);function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}
