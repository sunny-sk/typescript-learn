const form = document.querySelector('form')!;

function searchAddressHandler(e: Event) {
  e.preventDefault();
  //send this to google's API;
}

form.addEventListener('submit', searchAddressHandler);
