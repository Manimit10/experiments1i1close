const designData = [
  {
    name: 'Digestive systems',
    description: 'Distinguish between the monogastric and ruminant digestive systems.',
    Author: '',
    link: './previews/preview1.html',
    Time: '',
  },
  {
    name: 'Producing energy from atoms',
    description: 'Discuss the differences between Fission and Fusion processes.',
    Author: '',
    link: './Previews/preview2.html',
    Time: '',
  },
  {
    name: 'Neurogenesis and Gliogenesis',
    description: 'Define, from the theoretical perspective, what is Neurogenesis and Gliogenesis.',
    Author: '',
    link: './Previews/preview3.html',
    Time: '',
  },
  {
    name: 'Planetary attributes',
    description:
      'Compare Mercury and Jupiter depending on their Mass, Orbital period, Rotation period and confirmed moons.',
    Author: '',
    link: './Previews/preview4.html',
    Time: '',
  },
  {
    name: 'Sensors and actuators',
    description: 'Explain the differences and commonalities of sensors and actuators.',
    Author: '',
    link: './Previews/preview5.html',
    Time: '',
  },
  {
    name: 'Periodic table: types of elements',
    description: 'Classify the elements provided among the following 3 types: metals, non-metals, metalloids.',
    Author: '',
    link: './Previews/preview6.html',
    Time: '',
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
    <div class="mt-5 col-sm-1 col-md-1 col-lg-3 col-xl-3 mb-5 pb-5">
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
