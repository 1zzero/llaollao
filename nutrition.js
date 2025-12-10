const menuBtn = document.getElementById('menuBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');

        menuBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });

        function toggleSubmenu(event) {
            event.stopPropagation();
            const submenu = event.target.closest('li').querySelector('.submenu');
            const arrow = event.target.closest('.menu-item').querySelector('.menu-arrow');
            
            submenu.classList.toggle('active');
            arrow.classList.toggle('open');
        }