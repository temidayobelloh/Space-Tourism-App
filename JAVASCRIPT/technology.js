
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const technologyTitle = document.getElementById('technology-title');
const technologyBio = document.getElementById('technology-bio');
const rocketImage = document.querySelector('.rocket');

btnOne.addEventListener('click', () => {
    technologyTitle.textContent = 'LAUNCH VEHICLE';
    technologyBio.textContent = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!';
    rocketImage.src = '../assets/Technology Image - A (1).jpg';
});

btnTwo.addEventListener('click', () => {
    technologyTitle.textContent = 'SPACEPORT';
    technologyBio.textContent = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earths rotation for launch.';
    rocketImage.src = '../assets/Bitmap.png';
});

btnThree.addEventListener('click', () => {
    technologyTitle.textContent = 'SPACE CAPSULE';
    technologyBio.textContent = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.';
    rocketImage.src = '../assets/Technology Image - C.jpg';
});