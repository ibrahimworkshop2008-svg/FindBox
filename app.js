const users = [
  {
    name: "Ibrahim Ahsan",
    pic: "https://images.unsplash.com/photo-1763688496557-46d22a1fbe47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    bio: "Success begins when you stay consistent and keep moving forward every single day."
  },
   {
    name: "Ahmad Abid",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rHpnEf2jjpr3jrFe2_hA2bjqlUivaVdpLg&s",
    bio: "Just Focused on you life.Never See Others"
  },
  {
    name: "Umar Jutt",
    pic: "https://images.unsplash.com/photo-1763688506433-033fc84f6559?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Your mindset decides your future, so protect it and think positively always."
  },
  {
    name: "Dawood Ahsan",
    pic: "https://images.unsplash.com/photo-1763793927948-7faaa6adb479?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Small daily actions create big results when you stay patient and focused."
  },
  {
    name: "Tayyab Ahsan",
    pic: "https://images.unsplash.com/photo-1763619795609-3ac461f13b31?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Your journey becomes easier when you trust the process and stay calm."
  },
  {
    name: "Haseeb Ahsan",
    pic: "https://images.unsplash.com/photo-1763607058547-bbb9689bbb30?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Keep growing, keep learning, and never stop improving your skills daily."
  }
];

const cardsContainer = document.querySelector(".cards");

// Reusable function
function createUserCard({ name, pic, bio }) {
  const card = document.createElement("div");
  card.className = "card flex gap-10";

  card.innerHTML = `
    <img src="${pic}" alt="" class="bg-img">
    <div class="blurred-layer" style="background-image:url(${pic})"></div>
    <div class="content">
      <h3>${name}</h3>
      <p>${bio}</p>
    </div>
  `;

  return card;
}

function showUsers(list) {
  cardsContainer.innerHTML = "";  
  list.forEach(user => cardsContainer.appendChild(createUserCard(user)));
}

// Initial Load
showUsers(users);

// Search Filter
document.querySelector(".inp").addEventListener("input", function () {
  const text = this.value.toLowerCase();

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(text)
  );

  showUsers(filtered);
});
