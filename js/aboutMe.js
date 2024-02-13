//Creating Image About me

const containerAboutMe = document.getElementById('aboutMe');
const divImageAboutMe = document.createElement('div');
divImageAboutMe.classList.add('presentation__image');
const imageAboutMe = document.createElement('img');
imageAboutMe.src = 'assets/image/castelo.png';
imageAboutMe.alt = 'Wellington taking a photo in front of the castle';
imageAboutMe.classList.add('image__castle')
divImageAboutMe.appendChild(imageAboutMe);
containerAboutMe.appendChild(divImageAboutMe);

// Creating Button About Me

const divButtonAboutme = document.createElement('div');
divButtonAboutme.classList.add('presentation__whoIAm');
const btnAboutMe = document.createElement('button');
btnAboutMe.setAttribute('type' , 'button');
btnAboutMe.classList.add('btn' , 'btn-outline-warning' , 'button__whoIAm' )
btnAboutMe.textContent = 'About Me';
divButtonAboutme.appendChild(btnAboutMe);
containerAboutMe.appendChild(divButtonAboutme);






const buttonAboutMe = document.querySelector(".button__whoIAm");
buttonAboutMe.addEventListener("click", aboutMe);
const age = 35;
const myName = "Wellington Junior";

function aboutMe() {
  const aboutMe = document.querySelector(".presentation__whoIAm");
  aboutMe.innerHTML = `
    <div class="close__button">
        <p class="text__whoIam">Hello, my name is ${myName}, I am Brazilian and I'm
        ${age} old. I have a degree in People Management and today I am in a career transition to the technology area.
       I am a Frontend Developer, and have knowledge in <span style="font-size: 20px; color: #4d54e7;">HTML, CSS, Javascript, Bootstrap, Git, Github, Node.js, React JS. </span><br>
       I have experience with document control, typing, production, teamwork, attention to
       deadlines for delivery of products and communication.
       I leave my <a href="https://www.github.com/Wellington2708" target="_blank"> Github Here </a> to better demonstrate my work.<br>
       Welcome to my portfolio.  </p>
        <button type="button" onclick="closeText()" class="btn btn-outline-warning close">Close</button>
    </div>
    `;
}

function closeText() {
  const close = document.querySelector(".close__button");
  close.innerHTML = `
    <div class="presentation__whoIAm">
        <button type="button" onclick="aboutMe()"  class="btn btn-outline-warning button__whoIAm">About Me</button>

    </div>    
    `;
}
