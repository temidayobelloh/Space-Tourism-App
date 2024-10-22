const firstBtn = document.getElementById('first-btn');
const secondBtn = document.getElementById('second-btn');
const thirdBtn = document.getElementById('third-btn');
const fourthBtn = document.getElementById('fourth-btn');

// get the elements

const crewTitle = document.getElementById('crew-title');
const crewName = document.getElementById('crew-name');
const crewBio = document.getElementById('crew-bio');
const crewImage = document.querySelector('.crew-image-one');

handleFirstBtn =()=>{
    crewTitle.textContent='COMMANDER';
    crewName.textContent='DOUGLAS HURLEY';
    crewBio.textContent='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2';
    crewImage.src='../assets/base.png';
}
firstBtn.addEventListener('click',handleFirstBtn);

handleSecondBtn=()=>{
crewTitle.textContent='MISSION SPECIALIST';
crewName.textContent='MARK RICHARD';
crewBio.textContent='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
crewImage.src='../assets/image-removebg-preview(262).png';
};
secondBtn.addEventListener('click', handleSecondBtn);

handleThirdBtn =()=>{
    crewTitle.textContent='PILOT';
    crewName.textContent='VICTOR CLOVER';
    crewBio.textContent='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
    crewImage.src='../assets/image-removebg-preview(288) (1).png';
}
thirdBtn.addEventListener('click', handleThirdBtn);

handleFourthBtn =()=>{
    crewTitle.textContent= 'FLIGHT ENGINEER';
    crewName.textContent='ANOUSHEH ANSARI';
    crewBio.textContent='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
    crewImage.src='../assets/image-removebg-preview(265).png';
}

fourthBtn.addEventListener('click', handleFourthBtn);