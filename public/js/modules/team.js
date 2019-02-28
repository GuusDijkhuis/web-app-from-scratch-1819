let myTeamToggle3s = document.querySelectorAll('.add-to-team')
myTeamToggle3s.forEach(res => {
  res.addEventListener('click', showTeam3s)
})

export function showTeam3s() {
  myTeamToggle.classList.add('show-my-team')
  setTimeout(function(){
    myTeamToggle.classList.remove('show-my-team')
  }, 3000);
}


let myTeamToggle = document.querySelector('.my-team')
myTeamToggle.addEventListener('click', toggleTeam)

export function toggleTeam() {
  myTeamToggle.classList.toggle('show-my-team')
}
