        const now = new Date(2025,8,8);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').textContent = 
            now.toLocaleDateString('en-US', options);
        
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 80; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
        }

        function createFloatingHearts() {
            const heartsContainer = document.getElementById('floatingHearts');
            const hearts = ['💖', '💕', '💝', '💗', '🌹', '✨'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, 2500);
        }

         window.addEventListener('load', () => {
         const audio = document.getElementById('bg-music');
         audio.muted = false;  
         audio.volume = 0.5;
         });

        createStars();
        createFloatingHearts();
        
        window.addEventListener('load', () => {
            setTimeout(startTypewriter, 1000);
        });