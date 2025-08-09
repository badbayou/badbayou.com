// Glitch Effects JavaScript
(function () {
  "use strict";

  class GlitchEffects {
    constructor() {
      this.glitchChars = "!<>-_\\/[]{}—=+*^?#________";
      this.init();
    }

    init() {
      this.setupTextGlitch();
      this.setupRandomGlitches();
    }

    // Text scramble effect
    scrambleText(element, finalText, duration = 1000) {
      const chars = this.glitchChars;
      let frame = 0;
      const totalFrames = duration / 16; // 60fps

      const animate = () => {
        let output = "";
        for (let i = 0; i < finalText.length; i++) {
          if (frame > i * 2) {
            output += finalText[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = output;

        if (frame < totalFrames) {
          frame++;
          requestAnimationFrame(animate);
        } else {
          element.textContent = finalText;
        }
      };

      animate();
    }

    // Digital glitch effect for text
    digitalGlitch(element, duration = 500) {
      const originalText = element.textContent;
      const chars = this.glitchChars;

      element.style.position = "relative";
      element.style.display = "inline-block";

      // Create glitch layers
      const glitchLayer1 = element.cloneNode(true);
      const glitchLayer2 = element.cloneNode(true);

      glitchLayer1.style.position = "absolute";
      glitchLayer1.style.top = "0";
      glitchLayer1.style.left = "2px";
      glitchLayer1.style.color = "#ff0080";
      glitchLayer1.style.zIndex = "-1";
      glitchLayer1.style.clipPath = "inset(0 0 95% 0)";

      glitchLayer2.style.position = "absolute";
      glitchLayer2.style.top = "0";
      glitchLayer2.style.left = "-2px";
      glitchLayer2.style.color = "#00d4ff";
      glitchLayer2.style.zIndex = "-2";
      glitchLayer2.style.clipPath = "inset(85% 0 0 0)";

      element.parentNode.insertBefore(glitchLayer1, element.nextSibling);
      element.parentNode.insertBefore(glitchLayer2, element.nextSibling);

      let frame = 0;
      const totalFrames = duration / 16;

      const animate = () => {
        if (frame < totalFrames) {
          // Random character replacement
          if (Math.random() < 0.1) {
            const glitchedText = originalText
              .split("")
              .map((char) =>
                Math.random() < 0.1
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : char,
              )
              .join("");
            element.textContent = glitchedText;
          }

          // Random positioning
          glitchLayer1.style.left = (Math.random() - 0.5) * 4 + "px";
          glitchLayer2.style.left = (Math.random() - 0.5) * 4 + "px";

          // Random clipping
          glitchLayer1.style.clipPath = `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`;
          glitchLayer2.style.clipPath = `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`;

          frame++;
          requestAnimationFrame(animate);
        } else {
          // Cleanup
          element.textContent = originalText;
          glitchLayer1.remove();
          glitchLayer2.remove();
        }
      };

      animate();
    }

    // Scanline effect
    scanlineEffect(element, duration = 1000) {
      const scanline = document.createElement("div");
      scanline.style.position = "absolute";
      scanline.style.top = "0";
      scanline.style.left = "0";
      scanline.style.width = "100%";
      scanline.style.height = "2px";
      scanline.style.background =
        "linear-gradient(90deg, transparent, #00ff41, transparent)";
      scanline.style.pointerEvents = "none";
      scanline.style.zIndex = "1000";

      element.style.position = "relative";
      element.style.overflow = "hidden";
      element.appendChild(scanline);

      const elementHeight = element.offsetHeight;
      let position = 0;
      const speed = elementHeight / (duration / 16);

      const animate = () => {
        if (position < elementHeight + 10) {
          scanline.style.top = position + "px";
          position += speed;
          requestAnimationFrame(animate);
        } else {
          scanline.remove();
        }
      };

      animate();
    }

    // Matrix-style data stream
    dataStream(element, duration = 2000) {
      const chars = "01";
      const streams = 5;
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.pointerEvents = "none";
      container.style.overflow = "hidden";
      container.style.zIndex = "1";

      element.style.position = "relative";
      element.appendChild(container);

      for (let i = 0; i < streams; i++) {
        const stream = document.createElement("div");
        stream.style.position = "absolute";
        stream.style.left = Math.random() * 100 + "%";
        stream.style.top = "-100px";
        stream.style.color = "#00ff41";
        stream.style.fontFamily = "JetBrains Mono, monospace";
        stream.style.fontSize = "12px";
        stream.style.lineHeight = "1";
        stream.style.opacity = "0.7";

        // Generate random binary string
        let text = "";
        for (let j = 0; j < 20; j++) {
          text += chars[Math.floor(Math.random() * chars.length)] + "<br>";
        }
        stream.innerHTML = text;

        container.appendChild(stream);

        // Animate stream
        const elementHeight = element.offsetHeight;
        let position = -100;
        const speed = (elementHeight + 200) / (duration / 16);

        const animateStream = () => {
          if (position < elementHeight + 100) {
            stream.style.top = position + "px";
            position += speed;
            requestAnimationFrame(animateStream);
          } else {
            stream.remove();
          }
        };

        setTimeout(() => animateStream(), i * 200);
      }

      setTimeout(() => container.remove(), duration + 1000);
    }

    // Setup event listeners for glitch effects
    setupTextGlitch() {
      // Add glitch effect to headings on hover
      document.addEventListener(
        "mouseenter",
        (e) => {
          if (e.target.matches("h1, h2, h3, .page-title")) {
            if (Math.random() < 0.3) {
              this.digitalGlitch(e.target, 300);
            }
          }
        },
        true,
      );

      // Add scramble effect to navigation links
      document.addEventListener(
        "mouseenter",
        (e) => {
          if (e.target.matches(".nav-tabs a")) {
            const originalText = e.target.textContent;
            this.scrambleText(e.target, originalText, 500);
          }
        },
        true,
      );
    }

    setupRandomGlitches() {
      // Random glitch effects every few seconds
      setInterval(() => {
        const elements = document.querySelectorAll(
          "h1, h2, h3, .list-group-item",
        );
        if (elements.length > 0 && Math.random() < 0.1) {
          const randomElement =
            elements[Math.floor(Math.random() * elements.length)];
          const effects = [
            () => this.scanlineEffect(randomElement, 800),
            () => this.digitalGlitch(randomElement, 400),
          ];

          const randomEffect =
            effects[Math.floor(Math.random() * effects.length)];
          randomEffect();
        }
      }, 8000);
    }

    // Public methods for manual triggering
    triggerGlitch(element, type = "digital") {
      switch (type) {
        case "digital":
          this.digitalGlitch(element);
          break;
        case "scanline":
          this.scanlineEffect(element);
          break;
        case "data":
          this.dataStream(element);
          break;
        case "scramble":
          this.scrambleText(element, element.textContent);
          break;
        default:
          this.digitalGlitch(element);
      }
    }
  }

  // Screen flicker effect
  class ScreenFlicker {
    constructor() {
      this.init();
    }

    init() {
      this.createFlickerEffect();
      this.setupRandomFlickers();
    }

    createFlickerEffect() {
      const style = document.createElement("style");
      style.textContent = `
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                
                @keyframes flicker-subtle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.95; }
                }
                
                .flicker {
                    animation: flicker 0.1s ease-in-out;
                }
                
                .flicker-subtle {
                    animation: flicker-subtle 0.05s ease-in-out;
                }
            `;
      document.head.appendChild(style);
    }

    flicker(element, intensity = "normal") {
      const className = intensity === "subtle" ? "flicker-subtle" : "flicker";
      element.classList.add(className);

      setTimeout(
        () => {
          element.classList.remove(className);
        },
        intensity === "subtle" ? 50 : 100,
      );
    }

    setupRandomFlickers() {
      setInterval(() => {
        if (Math.random() < 0.75) {
          // 75% chance every 2 seconds
          this.flicker(document.body, "subtle");
        }
      }, 2000);
    }
  }

  // Initialize glitch effects
  document.addEventListener("DOMContentLoaded", () => {
    window.GlitchEffects = new GlitchEffects();
    window.ScreenFlicker = new ScreenFlicker();
  });
})();
