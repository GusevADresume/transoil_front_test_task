import { baseUrl } from "./baseUrl";
async function contentRequest(curl) {
    const headers = new Headers();
    headers.append('Authorization',`Bearer ${localStorage.getItem('Bearer')}`)
    const options = {
        method: "GET",
        headers: headers,
        redirect: "follow"
      };

      const response = await fetch(`${baseUrl()}${curl}/`, options)
      const result = await response.json();
      const status = response.status;
      if (status == 200){
        return result
      } else {
        return false
      }
      
}

export{contentRequest}