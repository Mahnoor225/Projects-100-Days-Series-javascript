// const input = document.querySelectorAll('.css input');

// input.forEach(()=> input.addEventListener("change",update))
// input.forEach(()=> input.addEventListener("mousemove",update))

// function update(){
//     const change=this.dataset.sizing || "";
//     document.documentElement.style.setProperty(
//         `--${this.name}`,this.value+change
//     )
// }

  const inputs = document.querySelectorAll('.css input');

    function update() {
      const suffix = this.dataset.sizing || "";
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener("change", update));
    inputs.forEach(input => input.addEventListener("mousemove", update));