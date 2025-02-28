const gameRule = document.querySelector("#gameRule");
const menuButton = document.querySelector("#button-menu");
const bodyElement = document.querySelector("body");
const body = document.body; 

function createModalRegles() {
	const sectionElem = document.createElement("section");
	const divPause = document.createElement("div");
	const h1Elem = document.createElement("h1");
	const buttonContinue = document.createElement("button");
	const buttonRestart = document.createElement("button");
	const buttonQuit = document.createElement("button");

	sectionElem.classList.add("pause-section");
	divPause.classList.add("pause-div");
	h1Elem.classList.add("h1-pause-div");
	buttonContinue.classList.add(
		"white-idle",
		"button-pause-div",
		"button-black"
	);
	buttonRestart.classList.add("white-idle", "button-pause-div", "button-black");
	buttonQuit.classList.add("pink-idle", "button-pause-div");

	h1Elem.textContent = "PAUSE";
	buttonContinue.textContent = "CONTINUE GAME";
	buttonRestart.textContent = "RESTART";
	buttonQuit.textContent = "QUIT GAME";

	sectionElem.appendChild(divPause);
	divPause.appendChild(h1Elem);
	divPause.appendChild(buttonContinue);
	divPause.appendChild(buttonRestart);
	divPause.appendChild(buttonQuit);

	buttonContinue.addEventListener("click", () => {
		sectionElem.remove();
	});

    buttonQuit.addEventListener("click", () => {
        menuButton.remove()
        body.appendChild(createModalMenu());
    })

	return sectionElem;
}

menuButton.addEventListener("click", () => {
	const sectionRegle = createModalRegles();

	bodyElement.appendChild(sectionRegle);
});

gameRule.addEventListener("click", () => {});

// function createModalMenu () {
//     const sectionMenu = document.createElement("section");
//     const menuDiv = document.createElement("div");
//     const imgLogo = document.createElement("img");
//      imgLogo.src = "./assets/logo.svg"
//      imgLogo.alt = "logo"
//     const classMenuButton = document.createElement("div");
//     const playerButton = document.createElement("button");
//     const gameRuleButton = document.createElement("button");

//     sectionMenu.classList.add("menu-section");
//     menuDiv.classList.add("menu-div");
//     classMenuButton.classList.add("class-button-menu-div");
//     playerButton.classList.add("yellow-idle", "button-menu-div", "button-black");
//     gameRuleButton.classList.add("white-idle", "button-meuu-div", "button-black");

//     playerButton.textContent = "PLAY VS PLAYER";
//     gameRuleButton.textContent = "GAME RULES";

//     sectionMenu.appendChild(imgLogo);
//     sectionMenu.appendChild(menuDiv);
//     menuDiv.appendChild(playerButton);
//     menuDiv.appendChild(gameRuleButton);
//     body.appendChild(sectionMenu)

// 	playerButton.addEventListener("click", () => {
// 		sectionMenu.remove();
// 	});

//     return sectionMenu; 
// }

