/*
  🚀 Question 13: Fetch data from an API using fetch() and display it
   
*/
const container = document.querySelector(".container");
const url = "https://jsonplaceholder.typicode.com/posts";
async function fetchInfo() {
  let respone = await fetch(url);
  let data = await respone.json();
  let randomData = data[Math.floor(Math.random() * 90)];
  console.log(randomData);
  container.innerHTML = `
      <div class="blur-effect">
        <div class="card">
          <div class="img-area">
            <img
              src="https://images.unsplash.com/photo-1761165307592-95cdbe1b5864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
              alt="image"
              width="100px"
              height="100px"
            />
          </div>
          <div class="description">
            <div class="id">
              <h3>Id :</h3>
              <p>${randomData.id}</p>
            </div>
            <div class="about">
              <h3>About</h3>
              <p>
                ${randomData.body}
              </p>
            </div>
          </div>
        </div>
      </div>`;
}
fetchInfo();
