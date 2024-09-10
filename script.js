const eventsStore = [
  {
    title: "INFJ Personality Type- Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto= format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx 8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=f ormat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto= format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx 8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations- Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const navElement = document.querySelectorAll(".main__menu-item-btn");
const submenuContainer = document.querySelectorAll(".submenu_container");
const submenuContainerItem = document.querySelectorAll(
  ".submenu_container__item"
);
//Всплывающее меню
navElement.forEach((item, index) => {
  item.addEventListener("click", () => {
    submenuContainer[index].classList.toggle("active");
    const img = item.querySelector("img");
    img.classList.toggle("rotate");
  });
});
submenuContainerItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    const parentContainer = item.closest(".submenu_container");
    parentContainer.classList.toggle("active");
    const index = Array.from(submenuContainer).indexOf(parentContainer);
    const correspondingNavElement = navElement[index];
    const img = correspondingNavElement.querySelector("img");
    if (img) {
      img.classList.toggle("rotate");
    }
  });
});

//Вывод элементов на страницу
const container = document.querySelector(".container__events");
function createElements(eventsArray) {
  container.innerHTML = "";
  eventsArray.forEach((item) => {
    const eventsElement = document.createElement("div");
    eventsElement.classList.add("events__element");
    const containerImg = document.createElement("div");
    containerImg.classList.add("events__element-img");
    const containerElement = document.createElement("div");
    containerElement.classList.add("events__element-description");
    const img = document.createElement("img");
    const pData = document.createElement("p");
    const h = document.createElement("h5");
    const pDistance = document.createElement("p");
    const pAttendes = document.createElement("p");
    h.innerText = item.title;
    if (item.attendees) {
      pAttendes.classList.add("attendes");
      pAttendes.innerText = `${item.attendees} attendes`;
    }
    pData.classList.add("data");
    const date = item.date.toString();
    const dateWithoutGMT = date.split("GMT")[0];
    pData.innerText = dateWithoutGMT;
    pDistance.classList.add("distance");
    pDistance.innerText = `${item.category} (${item.distance} км)`;
    img.src = item.image;
    img.alt = item.title;
    containerElement.append(pData, h, pDistance);
    containerElement.append(pAttendes);
    containerImg.appendChild(img);
    eventsElement.append(containerImg, containerElement);
    container.appendChild(eventsElement);
  });
}
createElements(eventsStore);

//Фильтрация элементов
const anyTypeElement = document.querySelectorAll(".anytype");
const anyDistanceElement = document.querySelectorAll(".anydistance");
const anyCategoryElement = document.querySelectorAll(".anycategory");

anyTypeElement.forEach((item) => {
  item.addEventListener("click", (event) => {
    container.innerHTML = "";
    const selectedType = event.target.textContent.toLowerCase();
    const sortArray = eventsStore.filter((item) => {
      return item.type === selectedType;
    });
    createElements(sortArray);
  });
});

anyDistanceElement.forEach((item) => {
  item.addEventListener("click", (event) => {
    container.innerHTML = "";
    const selectedDistance = Number(event.target.textContent.split(" ")[0]);
    const sortArrayDistance = eventsStore.filter((item) => {
      return item.distance <= selectedDistance;
    });
    createElements(sortArrayDistance);
  });
});

anyCategoryElement.forEach((item) => {
  item.addEventListener("click", (event) => {
    container.innerHTML = "";
    const anyCategoryElement = event.target.textContent;
    const sortArrayCategory = eventsStore.filter((item) => {
      return item.category === anyCategoryElement;
    });
    createElements(sortArrayCategory);
  });
});
