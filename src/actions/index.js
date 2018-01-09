export const protectedEndPointTesting = () => {
  return (dispatch) => {
    const authToken = localStorage.getItem("token");
    fetch("http://localhost:8080/api/protected/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  };
};