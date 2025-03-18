const body =document.querySelector("body"),
      hellobar =body.querySelector(".hellobar"),
      toggle =body.querySelector("toggle"),
      searchBtn=body.querySelector(".search-box"),
      modeSwitch=body.querySelector(".switch"),
      modeText=body.querySelector(".dark");

        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");
        })