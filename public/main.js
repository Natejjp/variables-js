function main() {
  const numberOfCups = 1
  const fullName = 'Nathan Pham'
  console.log(`${fullName} has ${numberOfCups} cup of coffee a day`)

  const aboutMe = {
    fullName: 'Nathan Pham',
    favoriteNumber: 17,
    favoriteMovies: ['Legally Blonde', 'Iron Man', 'Intersellar'],
  }

  console.log(aboutMe.fullName)
}

document.addEventListener('DOMContentLoaded', main)
