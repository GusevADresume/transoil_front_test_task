function baseUrl() {
  let hName = window.location.hostname;
  if(hName = 'localhost'){
    hName='127.0.0.1'
  }
  return `http://${hName}:8000/`
}

export { baseUrl };
