const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, name) {
    return drivers.filter(function(el) {
        return el.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
  } 


function matchName(drivers, name){
      return drivers.filter(function(el){
        return el.name === name
      })
    }

function fuzzyMatch (drivers, name){
  return drivers.filter(element =>
  element.slice(0,1) === name.slice(0,1))
  }

