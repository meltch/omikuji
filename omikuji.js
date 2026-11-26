function drawFortune() {
      const fortunes = ["大吉！","中吉！","小吉！", "吉！", "凶！",
      ];

      const random = Math.floor(
        Math.random() * fortunes.length
      );
      document.getElementById("result").textContent =
        fortunes[random];

    }