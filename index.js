const body = document.querySelector('body');
const Btn = document.querySelector('button');
const toggleBtn = document.querySelector('.toggleContainer');
const Sun = document.querySelector('.toggleContainer__moonSun-element');
const Holes = document.querySelector('.moonSun__holes');
const Cut = document.querySelector('.moonSun__holes-Cut');
const CloudOne = document.querySelector('.moonSun__clouds-One');
const CloudTwo = document.querySelector('.moonSun__clouds-Two');
const Stars = document.querySelector('.moonSun__starts');
const theme ={
  ligth: true,
  dark: false
}


const animationMoonSun =  () => {
  
  
  if(theme.ligth && theme.dark === false){
    Btn.disabled = true
    Sun.classList.add('ChangeSunToMoonAnimation');
    Holes.classList.add('fadeInAnimation');
    Cut.style.display = 'flex';
    Holes.style.display = 'flex';
    Cut.classList.add('SpandCutAnimation');
    CloudOne.classList.add('SpandCloudOne');
    CloudTwo.classList.add('SpandCloudTwo');
    toggleBtn.classList.add('ChangeBgColor')
    Stars.classList.add('StarsMove')
    toggleBtn.disabled = true;
    theme.ligth = false;
    theme.dark = true;
    setTimeout(() => {
      //Animation OUT
      Sun.classList.remove('ChangeSunToMoonAnimation');
      Holes.classList.remove('fadeInAnimation');
      Cut.classList.remove('SpandCutAnimation');
      CloudOne.classList.remove('SpandCloudOne');
      CloudTwo.classList.remove('SpandCloudTwo');
      toggleBtn.classList.remove('ChangeBgColor');
      Stars.classList.remove('StarsMove');
  
      //Final Position
      Sun.classList.add('toggleContainer__moonSun-elementEndPos'); 
      Holes.classList.add('moonSun__holes-EndPos');
      Cut.classList.add('moonSun__holes-CutEndPos');
      CloudOne.classList.add('moonSun__clouds-OneEndPos');
      CloudTwo.classList.add('moonSun__clouds-TwoEndPos');
      toggleBtn.classList.add('toggleContainer-EndPos');
      Stars.classList.add('moonSun__startsEndPos');
      
      toggleBtn.disabled = false;
      Btn.disabled = false;
      
    },950)
  }
  else if(theme.dark && theme.ligth === false){
    Btn.disabled = true;
    theme.ligth = true;
    theme.dark = false;
    Holes.classList.add('fadeInAnimationRev');
    Sun.classList.add('ChangeSunToMoonAnimationRev');
    Cut.classList.add('SpandCutAnimationRev');
    CloudOne.classList.add('SpandCloudOneRev');
    CloudTwo.classList.add('SpandCloudTwoRev');
    toggleBtn.classList.add('ChangeBgColorRev');
    Stars.classList.add('StarsMoveRev');
    toggleBtn.disabled = true;
    setTimeout(() => {
      Cut.style.display = 'none';
      Holes.style.display = 'none';

      //AnimationOut
      Holes.classList.remove('fadeInAnimationRev')
      Sun.classList.remove('ChangeSunToMoonAnimationRev')
      Cut.classList.remove('SpandCutAnimationRev');
      CloudOne.classList.remove('SpandCloudOneRev')
      CloudTwo.classList.remove('SpandCloudTwoRev');
      toggleBtn.classList.remove('ChangeBgColorRev');
      Stars.classList.remove('StarsMoveRev');
      
      //RemoveEndPosition
      Holes.classList.remove('moonSun__holes-EndPos')
      Sun.classList.remove('toggleContainer__moonSun-elementEndPos');
      Cut.classList.remove('moonSun__holes-CutEndPos');
      CloudOne.classList.remove('moonSun__clouds-OneEndPos')
      CloudTwo.classList.remove('moonSun__clouds-TwoEndPos');
      toggleBtn.classList.remove('toggleContainer-EndPos');
      Stars.classList.remove('moonSun__startsEndPos')
      toggleBtn.disabled = false;
      Btn.disabled  = false
      
    },950)
    //StartPosition
      Holes.classList.add('moonSun__holes');
      Sun.classList.add('toggleContainer__moonSun-element');
      Cut.classList.add('moonSun__holes-Cut');
      CloudOne.classList.add('moonSun__clouds-One');
      CloudTwo.classList.add('moonSun__clouds-Two');
      toggleBtn.classList.add('toggleContainer');
      Stars.classList.add('moonSun__starts');
  }
}
const AnimationListener = () => {
  let currentTheme = !!theme.ligth ? 'ligth' : 'dark';
  console.log('animation start')
  body.className = `${currentTheme}`
  console.log(currentTheme)
 
}

Btn.addEventListener("animationstart", AnimationListener, false);



toggleBtn.addEventListener('click', animationMoonSun);
