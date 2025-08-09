// Cyberpunk Terminal Theme JavaScript
(function () {
  "use strict";

  // Terminal Effects
  class TerminalEffects {
    constructor() {
      this.init();
    }

    init() {
      this.setupTypewriterEffect();
      this.setupRandomGlitches();
      this.setupHoverEffects();
    }

    setupTypewriterEffect() {
      const typewriterElements = document.querySelectorAll(".typewriter");
      typewriterElements.forEach((element) => {
        this.typewriterEffect(element);
      });
    }

    typewriterEffect(element) {
      const text = element.textContent;
      element.textContent = "";
      element.style.borderRight = "2px solid var(--accent-primary)";

      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          // Blinking cursor effect
          setInterval(() => {
            element.style.borderRight =
              element.style.borderRight === "none"
                ? "2px solid var(--accent-primary)"
                : "none";
          }, 500);
        }
      }, 100);
    }

    setupRandomGlitches() {
      const glitchableElements = document.querySelectorAll(
        "h1, h2, h3, .page-title",
      );

      setInterval(() => {
        const randomElement =
          glitchableElements[
            Math.floor(Math.random() * glitchableElements.length)
          ];
        if (randomElement && Math.random() < 1.0) {
          // 70% chance every interval
          this.addTemporaryGlitch(randomElement);
        }
      }, 1000);
    }

    addTemporaryGlitch(element) {
      const originalText = element.textContent;
      element.classList.add("glitch");
      element.setAttribute("data-text", originalText);

      setTimeout(() => {
        element.classList.remove("glitch");
        element.removeAttribute("data-text");
      }, 1000);
    }

    setupHoverEffects() {
      // Add glitch effect on hover for certain elements
      const hoverGlitchElements = document.querySelectorAll(
        ".nav-tabs a, .list-group-item",
      );

      hoverGlitchElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          if (Math.random() < 0.3) {
            // 30% chance
            this.addTemporaryGlitch(element);
          }
        });
      });
    }
  }

  // Matrix Rain Effect (optional background effect)
  class MatrixRain {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.drops = [];
      this.init();
    }

    init() {
      this.createCanvas();
      this.setupCanvas();
      this.startAnimation();
    }

    createCanvas() {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "matrix-rain";
      this.canvas.style.position = "fixed";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.canvas.style.pointerEvents = "none";
      this.canvas.style.zIndex = "-10";
      this.canvas.style.opacity = "0.1";

      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
    }

    setupCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      const columns = Math.floor(this.canvas.width / 20);
      this.drops = new Array(columns).fill(1);

      window.addEventListener("resize", () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        const newColumns = Math.floor(this.canvas.width / 20);
        this.drops = new Array(newColumns).fill(1);
      });
    }

    startAnimation() {
      const draw = () => {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = "#418f41";
        this.ctx.font = "15px JetBrains Mono, monospace";

        for (let i = 0; i < this.drops.length; i++) {
          const text = String.fromCharCode(Math.random() * 128);
          this.ctx.fillText(text, i * 20, this.drops[i] * 20);

          if (
            this.drops[i] * 20 > this.canvas.height &&
            Math.random() > 0.975
          ) {
            this.drops[i] = 0;
          }
          this.drops[i]++;
        }
      };

      setInterval(draw, 200);
    }
  }

  // Scanline Effect
  class ScanlineEffect {
    constructor() {
      this.init();
    }

    init() {
      this.createScanline();
    }

    createScanline() {
      const scanline = document.createElement("div");
      scanline.id = "scanline";
      scanline.style.position = "fixed";
      scanline.style.top = "0";
      scanline.style.left = "0";
      scanline.style.width = "100%";
      scanline.style.height = "2px";
      scanline.style.background =
        "linear-gradient(90deg, transparent, var(--accent-primary), transparent)";
      scanline.style.pointerEvents = "none";
      scanline.style.zIndex = "9999";
      scanline.style.opacity = "0.5";
      scanline.style.animation = "scanline 10s linear infinite";

      // Add CSS animation
      const style = document.createElement("style");
      style.textContent = `
                @keyframes scanline {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { top: 100vh; opacity: 0; }
                }
            `;
      document.head.appendChild(style);
      document.body.appendChild(scanline);
    }
  }

  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    new TerminalEffects();

    // Optional effects (can be disabled for performance)
    if (window.innerWidth > 768) {
      // Only on larger screens
      new MatrixRain();
      new ScanlineEffect();
    }
  });

  // Export for potential external use
  window.CyberpunkTerminal = {
    TerminalEffects,
    MatrixRain,
    ScanlineEffect,
  };
})();
