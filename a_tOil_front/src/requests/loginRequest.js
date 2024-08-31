async function logRequest(data) {
  const options = {
    method: "POST",
    body: data,
    redirect: "follow",
  };

  const response = await fetch(
    "http://127.0.0.1:8000/api/token/",
    options
  );
  const result = await response.json();
  const status = response.status;
  if (status == 401) {
    return false;
  } else{
    localStorage.setItem("Bearer", result["access"]);
    return true;
  }
  
}

export { logRequest };
