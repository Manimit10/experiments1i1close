const designData = [
  {
    name: 'History of world war II',
    description:
      'Decide which is the best summary of the history of world war II among those provided in class and give your reasons.',
    Author: '',
    link: './previews/preview1.html',
    Time: '',
  },
  {
    name: 'Historical eras',
    description: 'Assess the quality of the five main historical eras presented in the history timeline.',
    Author: 'Verónica',
    link: './Previews/preview2.html',
    Time: '120 minutes',
  },
  {
    name: 'Art painting styles',
    description:
      'Define, from the theoretical perspective, what are the main concepts of Expressionism and Surrealism.',
    Author: '',
    link: './Previews/preview3.html',
    Time: '',
  },
  {
    name: "Shakespeare's Monologue",
    description:
      'Evaluate if the monologue watched in class could be considered a  Shakespearian monologue based on the authors’ style and historical characteristics.',
    Author: '',
    link: './Previews/preview4.html',
    Time: '120 minutes',
  },
  {
    name: 'Network evaluation',
    description: 'Judge WAN and LAN based on the security issues.',
    Author: 'Karina Chappell Alaniz',
    link: './Previews/preview5.html',
    Time: '120 minutes',
  },
  {
    name: 'Types of instruments',
    description:
      'Find errors within classification of instruments provided in class according to the following types: percussion, stringed, keyboard, wind, and electronic.',
    Author: '',
    link: './Previews/preview6.html',
    Time: '120 minutes',
  },
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old';
  } else if (calculatedAge == 0) {
    return 'Baby';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
    <div class="mt-5 col-sm-1 col-md-1 col-lg-3 col-xl-3">
     <div class="card" style="18rm">
      <div class="card-body">
        <h5 class="card-title">${design.name}</h5>
         <p class="card-text">${design.description} </p>
              <a href="${design.link}" class="btn btn-primary btn-sm"
                >Preview</a
              >
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">
          Select
        </button>
            </div>
          </div>
        </div>
    `;
}
// function petTemplate(pet) {
//   return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ''}
//       </div>
//     `;
// }

// document.getElementById('app').innerHTML = `
//     <h1 class="app-title">Pets (${designData.length} results)</h1>
//     ${designData.map(petTemplate).join('')}
//     <p class="footer">These ${designData.length} pets were added recently. Check back soon for updates.</p>
//   `;
document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
