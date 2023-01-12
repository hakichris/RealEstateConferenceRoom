const cancel = document.querySelector('#cancel');
const hamburger = document.querySelectorAll('.navbar-toggler-icon');
const option1 = document.querySelector('.port');
const option2 = document.querySelector('.Ab');
const option3 = document.querySelectorAll('.cont');
function openDiv() {
  const popup = document.querySelector('#popup');
  popup.style.display = 'block';
}
function closeDiv() {
  const get = document.querySelector('#popup');
  get.style.display = 'none';
}

cancel.addEventListener('click', () => {
  closeDiv();
});
hamburger.forEach((pop) => {
  pop.addEventListener('click', () => {
    openDiv();
  });
});
option1.addEventListener('click', () => {
  closeDiv();
});
option2.addEventListener('click', () => {
  closeDiv();
});
option3.forEach((pop) => {
  pop.addEventListener('click', () => {
    closeDiv();
  });
});

const arr = [
  {
    id: '0',
    Images: 'images/speaker04.png',
    SpeakerName: 'John Constatine',
    SpeakersJob: 'John constatine is a real estate developer in Russia',
    background:
      'John constantine started his career in construction with a degree of construction management in 2012.',
  },

  {
    id: '1',
    Images: 'images/speaker03.png',
    SpeakerName: 'Catherine Delight',
    SpeakersJob: 'Catherine is a Mortage broker in Burundi',
    background:
      'Catherine started his career in real estate as Mortage broker with a degree of in Business Management in 2015.',
  },

  {
    id: '2',
    Images: 'images/speaker04.png',
    SpeakerName: 'Lionel Delight',
    SpeakersJob: 'Lionel is a Mortage broker in Burundi',
    background:
      'Lionel started his career in real estate as Mortage broker with a degree of in Business Management in 2015. she has sold more than 68 houses. she currently has a portfolio worth $200000',
  },

  {
    id: '3',
    Images: 'images/speaker05.png',
    SpeakerName: 'Chris Dwell',
    SpeakersJob: 'Chris is a Mortage broker in Burundi',
    background:
      'Chris started his career in real estate as Mortage broker with a degree of in Business Management in 2015. she has sold more than 68 houses. she currently has a portfolio worth $200000',
  },

  {
    id: '4',
    Images: 'images/speaker06.png',
    SpeakerName: 'Nicole Nishimwe',
    SpeakersJob: 'Nicole is a Mortage broker in Burundi',
    background:
      'Nicole started his career in real estate as Mortage broker with a degree of in Business Management in 2015. she has sold more than 68 houses. she currently has a portfolio worth $200000',
  },

  {
    id: '5',
    Images: 'images/speaker03.png',
    SpeakerName: 'Nice Akimana',
    SpeakersJob: 'Nice is a Mortage broker in Burundi',
    background:
      'Nice started his career in real estate as Mortage broker with a degree of in Business Management in 2015. she has sold more than 68 houses. she currently has a portfolio worth $200000',
  },
];

const model = document.querySelector('.features');

const Speakerscont = ` <div class="textline">
                        <h1 class=" title  font-family"> Featured Speakers </h1>
                        <div class="guide_bar Color"></div>  
                        </div> 
                       `;
model.innerHTML += Speakerscont;


  const topclass = ` <div class="topclass">
                            <div class="speakers${0}">
                                <img class="speakerImage" src="${arr[0].Images}" alt="">
                                <div class="speakerInfo">
                                   <h1 class="speakerName font-family">${arr[0].SpeakerName}</h1>
                                   <div class="jobDescription font-family Color">${arr[0].SpeakersJob}</div>
                                          <div class="bar "></div>
                                   <div class="speakerbackground font-family"> ${arr[0].background}</div>
                                </div>
                            </div>

                            <div class="speakers${1}">
                            <img class="speakerImage" src="${arr[1].Images}" alt="">
                            <div class="speakerInfo">
                               <h1 class="speakerName font-family">${arr[1].SpeakerName}</h1>
                               <div class="jobDescription font-family Color">${arr[1].SpeakersJob}</div>
                                      <div class="bar "></div>
                               <div class="speakerbackground font-family"> ${arr[1].background}</div>
                              </div>
                           </div>
                    </div>      
                          `;
  model.innerHTML += topclass;



  const middleclass = `   <div class="middleclass">
                            <div class="speakers${2}">
                                <img class="speakerImage" src="${arr[2].Images}" alt="">
                                <div class="speakerInfo">
                                   <h1 class="speakerName font-family">${arr[2].SpeakerName}</h1>
                                   <div class="jobDescription font-family Color">${arr[2].SpeakersJob}</div>
                                          <div class="bar "></div>
                                   <div class="speakerbackground font-family"> ${arr[2].background}</div>
                                </div>
                            </div>
                            <div class="speakers${3}">
                            <img class="speakerImage" src="${arr[3].Images}" alt="">
                            <div class="speakerInfo">
                               <h1 class="speakerName font-family">${arr[3].SpeakerName}</h1>
                               <div class="jobDescription font-family Color">${arr[3].SpeakersJob}</div>
                                      <div class="bar "></div>
                               <div class="speakerbackground font-family"> ${arr[3].background}</div>
                            </div>
                        </div>
                            </div>
                          `;
  model.innerHTML += middleclass;

    const bottomclass = `   <div class="bottomclass">
                              <div class="speakers${4}">
                                  <img class="speakerImage" src="${arr[4].Images}" alt="">
                                  <div class="speakerInfo">
                                     <h1 class="speakerName font-family">${arr[4].SpeakerName}</h1>
                                     <div class="jobDescription font-family Color">${arr[4].SpeakersJob}</div>
                                            <div class="bar "></div>
                                     <div class="speakerbackground font-family"> ${arr[4].background}</div>
                                  </div>
                              </div>

                              <div class="speakers${5}">
                              <img class="speakerImage" src="${arr[5].Images}" alt="">
                              <div class="speakerInfo">
                                 <h1 class="speakerName font-family">${arr[5].SpeakerName}</h1>
                                 <div class="jobDescription font-family Color">${arr[5].SpeakersJob}</div>
                                        <div class="bar "></div>
                                 <div class="speakerbackground font-family"> ${arr[5].background}</div>
                              </div>
                          </div>
                          </div>
                            `;
    model.innerHTML += bottomclass;


const plus = `   <div class="expandmore"><h2 class="plus font-family">
                MORE <i class="bi bi-chevron-down Color"></i>
                 </h2>  
                 </div>
                 `;
model.innerHTML += plus;
