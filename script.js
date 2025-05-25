// Password Protection
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = '14112018'; // The date in MMDDYYYY format
    
    if (password === correctPassword) {
        document.getElementById('loginScreen').style.display = 'none';
        const videoIntro = document.getElementById('videoIntro');
        const introVideo = document.getElementById('introVideo');
        
        videoIntro.style.display = 'flex';
        introVideo.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
        
        // Handle video end
        introVideo.addEventListener('ended', showMainWebsite);
    } else {
        // Wrong password
        const inputElement = document.getElementById('passwordInput');
        inputElement.style.borderColor = '#ff4757';
        inputElement.style.backgroundColor = '#ffe0e0';
        inputElement.value = '';
        inputElement.placeholder = 'Try again... 💕';
        
        setTimeout(() => {
            inputElement.style.borderColor = '#ff69b4';
            inputElement.style.backgroundColor = 'white';
            inputElement.placeholder = 'Enter the special date';
        }, 2000);
    }
}

// Function to skip video and show main website
function skipVideo() {
    const videoIntro = document.getElementById('videoIntro');
    const introVideo = document.getElementById('introVideo');
    
    introVideo.pause();
    showMainWebsite();
}

// Function to play the second song
function playSecondSong() {
    const secondMusic = document.getElementById('secondMusic');
    secondMusic.play().catch(function(error) {
        console.log("Second audio playback failed:", error);
    });
}

// Function to show main website and initialize features
function showMainWebsite() {
    const videoIntro = document.getElementById('videoIntro');
    const mainWebsite = document.getElementById('mainWebsite');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    videoIntro.style.display = 'none';
    mainWebsite.style.display = 'block';
    
    // Play first background music
    backgroundMusic.play().catch(function(error) {
        console.log("First audio playback failed:", error);
        // If first song fails, try playing second song
        playSecondSong();
    });
    
    // Show welcome message
    setTimeout(() => {
        alert("🎉 Welcome to our love story, Israa! 💕\n\nHappy Birthday to the most wonderful person in the world! 🎂\n\nI love you! ❤️");
    }, 500);
    
    // Start floating hearts
    createFloatingHearts();
    
    // Initialize timer
    initializeTimer();
    
    // Hide scroll indicator after 5 seconds
    setTimeout(() => {
        document.querySelector('.scroll-indicator').style.display = 'none';
    }, 5000);
}

// Allow Enter key to submit password
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Create login hearts
function createLoginHearts() {
    const heartsContainer = document.getElementById('loginHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'login-heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heartsContainer.appendChild(heart);
    }
}

// Initialize login hearts
createLoginHearts();

// Photo Gallery Function
function openPhoto(photoId) {
    const messages = [
        "💕 This was the moment I knew you were special!",
        "🌅 Every sunset is more beautiful with you",
        "🎉 Celebrating life's beautiful moments together",
        "💖 Your smile is my favorite sight in the world",
        "🌸 Like flowers, our love keeps blooming",
        "⭐ You're my guiding star in the darkness"
    ];
    
    alert(messages[photoId - 1]);
}

// Video Function
function playVideo(videoId) {
    const messages = [
        "🎥 Playing our anniversary video... Every moment with you is a treasure!",
        "🎵 This song always reminds me of you... Our love story in melody!",
        "🎂 Happy Birthday, my love! This message is straight from my heart!"
    ];
    
    alert(messages[videoId - 1]);
}

// Floating Hearts Animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 4000);
        }, i * 300);
    }
}

// Auto-create floating hearts periodically
setInterval(createFloatingHearts, 3000);

// Add click animations to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.memory-card, .photo-card, .video-section');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Smooth scrolling effect for sections
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrolled = window.pageYOffset;
        const rate = scrolled - sectionTop;
        
        if (rate > -sectionHeight && rate < window.innerHeight) {
            section.style.transform = `translateY(${rate * 0.1}px)`;
        }
    });
});

// Timer Functionality
let previousValues = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

function calculateTimeDifference(startDate, currentDate) {
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();
    let hours = currentDate.getHours() - startDate.getHours();
    let minutes = currentDate.getMinutes() - startDate.getMinutes();
    let seconds = currentDate.getSeconds() - startDate.getSeconds();

    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += daysInPrevMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

function animateNumber(element, newValue, oldValue) {
    element.classList.add('counter-animate');
    element.parentElement.classList.add('highlight');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        element.classList.remove('counter-animate');
        element.parentElement.classList.remove('highlight');
    }, 800);
}

function updateTimer() {
    const startDate = new Date(2018, 10, 14); // November 14, 2018 (month is 0-indexed)
    const currentDate = new Date();
    
    const timeDiff = calculateTimeDifference(startDate, currentDate);
    
    // Check for changes and animate
    const elements = {
        years: document.getElementById('years'),
        months: document.getElementById('months'),
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Update each value with animation if changed
    Object.keys(timeDiff).forEach(key => {
        if (timeDiff[key] !== previousValues[key]) {
            animateNumber(elements[key], timeDiff[key], previousValues[key]);
        }
        elements[key].textContent = timeDiff[key];
        previousValues[key] = timeDiff[key];
    });

    // Add special highlighting to seconds unit for continuous animation
    const secondsUnit = document.getElementById('secondsUnit');
    secondsUnit.classList.add('seconds-highlight');
}

// Initialize timer when the website is unlocked
function initializeTimer() {
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Add initial animation after page load
    setTimeout(() => {
        document.querySelectorAll('.time-number').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('counter-animate');
                el.parentElement.classList.add('highlight');
                setTimeout(() => {
                    el.classList.remove('counter-animate');
                    el.parentElement.classList.remove('highlight');
                }, 800);
            }, index * 200);
        });
    }, 500);
}

// Heart Animation Settings
var settings = {
    particles: {
        length: 500,
        duration: 2,
        velocity: 100,
        effect: -0.75,
        size: 30,
    },
};

// Heart Animation Code
(function() {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
        window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[c[a] + "CancelAnimationFrame"] || window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(h, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16 - (d - b));
            var g = window.setTimeout(function() {
                h(d + f);
            }, f);
            b = d + f;
            return g;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(d) {
            clearTimeout(d);
        };
    }
})();

// Point Class
var Point = (function() {
    function Point(x, y) {
        this.x = typeof x !== "undefined" ? x : 0;
        this.y = typeof y !== "undefined" ? y : 0;
    }
    Point.prototype.clone = function() {
        return new Point(this.x, this.y);
    };
    Point.prototype.length = function(length) {
        if (typeof length == "undefined") return Math.sqrt(this.x * this.x + this.y * this.y);
        this.normalize();
        this.x *= length;
        this.y *= length;
        return this;
    };
    Point.prototype.normalize = function() {
        var length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
    };
    return Point;
})();

// Particle Class
var Particle = (function() {
    function Particle() {
        this.position = new Point();
        this.velocity = new Point();
        this.acceleration = new Point();
        this.age = 0;
    }
    Particle.prototype.initialize = function(x, y, dx, dy) {
        this.position.x = x;
        this.position.y = y;
        this.velocity.x = dx;
        this.velocity.y = dy;
        this.acceleration.x = dx * settings.particles.effect;
        this.acceleration.y = dy * settings.particles.effect;
        this.age = 0;
    };
    Particle.prototype.update = function(deltaTime) {
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
        this.velocity.x += this.acceleration.x * deltaTime;
        this.velocity.y += this.acceleration.y * deltaTime;
        this.age += deltaTime;
    };
    Particle.prototype.draw = function(context, image) {
        function ease(t) {
            return --t * t * t + 1;
        }
        var size = image.width * ease(this.age / settings.particles.duration);
        context.globalAlpha = 1 - this.age / settings.particles.duration;
        context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
    };
    return Particle;
})();

// ParticlePool Class
var ParticlePool = (function() {
    var particles,
        firstActive = 0,
        firstFree = 0,
        duration = settings.particles.duration;

    function ParticlePool(length) {
        particles = new Array(length);
        for (var i = 0; i < particles.length; i++) particles[i] = new Particle();
    }

    ParticlePool.prototype.add = function(x, y, dx, dy) {
        particles[firstFree].initialize(x, y, dx, dy);
        firstFree++;
        if (firstFree == particles.length) firstFree = 0;
        if (firstActive == firstFree) firstActive++;
        if (firstActive == particles.length) firstActive = 0;
    };

    ParticlePool.prototype.update = function(deltaTime) {
        var i;
        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++) particles[i].update(deltaTime);
        }
        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++) particles[i].update(deltaTime);
            for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
        }
        while (particles[firstActive].age >= duration && firstActive != firstFree) {
            firstActive++;
            if (firstActive == particles.length) firstActive = 0;
        }
    };

    ParticlePool.prototype.draw = function(context, image) {
        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++) particles[i].draw(context, image);
        }
        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++) particles[i].draw(context, image);
            for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
        }
    };
    return ParticlePool;
})();

// Initialize Heart Animation
(function(canvas) {
    var context = canvas.getContext("2d"),
        particles = new ParticlePool(settings.particles.length),
        particleRate = settings.particles.length / settings.particles.duration,
        time;

    function pointOnHeart(t) {
        return new Point(
            160 * Math.pow(Math.sin(t), 3),
            130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
        );
    }

    var image = (function() {
        var canvas = document.createElement("canvas"),
            context = canvas.getContext("2d");
        canvas.width = settings.particles.size;
        canvas.height = settings.particles.size;

        function to(t) {
            var point = pointOnHeart(t);
            point.x = settings.particles.size / 2 + (point.x * settings.particles.size) / 350;
            point.y = settings.particles.size / 2 - (point.y * settings.particles.size) / 350;
            return point;
        }

        context.beginPath();
        var t = -Math.PI;
        var point = to(t);
        context.moveTo(point.x, point.y);
        while (t < Math.PI) {
            t += 0.01;
            point = to(t);
            context.lineTo(point.x, point.y);
        }
        context.closePath();
        context.fillStyle = "#ff30c5";
        context.fill();
        var image = new Image();
        image.src = canvas.toDataURL();
        return image;
    })();

    function render() {
        requestAnimationFrame(render);
        var newTime = new Date().getTime() / 1000,
            deltaTime = newTime - (time || newTime);
        time = newTime;
        context.clearRect(0, 0, canvas.width, canvas.height);
        var amount = particleRate * deltaTime;
        for (var i = 0; i < amount; i++) {
            var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
            var dir = pos.clone().length(settings.particles.velocity);
            particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
        }
        particles.update(deltaTime);
        particles.draw(context, image);
    }

    function onResize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
    window.onresize = onResize;
    setTimeout(function() {
        onResize();
        render();
    }, 10);
})(document.getElementById("pinkboard"));

// Function to play the special video
function playSpecialVideo() {
    const video = document.getElementById('specialVideo');
    const container = video.closest('.video-container');
    
    // Try to play the video
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Video started playing
            container.classList.add('playing');
            console.log('Video started playing');
        }).catch(error => {
            // Video failed to play
            console.error('Video playback failed:', error);
            alert('Please click the play button in the video controls to start playback.');
        });
    }
}

// Initialize video section
document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.special-video-section');
    const video = document.getElementById('specialVideo');
    
    // Create floating hearts for video section
    function createVideoHearts() {
        const heartsContainer = document.getElementById('floatingHeartsVideo');
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💘'];
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-video';
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
        }
    }

    // Observer for video section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createVideoHearts();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(videoSection);

    // Add error handling for video
    video.addEventListener('error', function(e) {
        console.error("Video error:", e);
        alert("There was an error loading the video. Please try refreshing the page.");
    });

    // Add loading handling
    video.addEventListener('loadeddata', function() {
        console.log("Video loaded successfully");
    });

    // Handle video end
    video.addEventListener('ended', function() {
        const container = video.closest('.video-container');
        container.classList.remove('playing');
    });
}); 
