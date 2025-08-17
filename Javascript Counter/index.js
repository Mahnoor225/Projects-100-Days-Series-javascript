const inc = document.querySelector('.addinc');      // increment button
const dec = document.querySelector('.adddec');      // decrement button
const value = document.querySelector('.initalvalue'); // counter display

const addinc = () => {
  const a = parseInt(value.innerText) + 1;
  value.innerText = a;
  console.log(a);
}

const adddec = () => {
  const a = parseInt(value.innerText) - 1;
  value.innerText = a;
  console.log(a);
}

inc.addEventListener('click', addinc);
dec.addEventListener('click', adddec);
