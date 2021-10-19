function saveAuthToCookie(value) {
  document.cookie = `Authorization=${value}`;
}

export { saveAuthToCookie };
