function dayNightHandler(self) {
        var target = document.querySelector("body");
        var alist = document.querySelectorAll("a");
        if (self.value === "night") {
          self.value = "day";
          target.style.backgroundColor = "black";
          target.style.color = "white";
          var i = 0;
          while (i < alist.length) {
            alist[i].style.color = "white";
            i = i + 1;
          }
        } else {
          self.value = "night";
          target.style.backgroundColor = "white";
          target.style.color = "black";
          var i = 0;
          while (i < alist.length) {
            alist[i].style.color = "black";
            i = i + 1;
          }
        }
      }
