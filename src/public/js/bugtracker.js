let bug = {

    id: 0,
    name: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac cursus nisl, eu interdum massa. Pellentesque sem magna, faucibus eget risus non, dapibus sollicitudin urna. Cras in lectus ut enim ultricies varius et eu quam. Pellentesque enim nunc, hendrerit sed aliquam in, cursus at odio. Nam magna tellus, fringilla sit amet pellentesque ac, imperdiet nec dolor. Pellentesque elementum magna sit amet libero ultrices, vel dignissim dolor porta. Vivamus hendrerit facilisis diam vel accumsan. Nullam sit amet tellus imperdiet, venenatis risus nec, posuere turpis. Sed egestas quis lorem a tristique. Praesent ligula enim, condimentum eu lacus pulvinar, condimentum posuere neque. Quisque.",
    publishDate: new Date("12/06/2020"),
    priority: 1

}

let bugs = []

bugs.push(bug);

function bugId(id) {

    console.log(id)

}

function displayBug(bug) {

    let bugDiv = document.createElement('div')
    bugDiv.classList.add('bug')
    bugDiv.onclick = bugId(bug.id)

    bugName = document.createElement('p')
    bugName.classList.add('bugName')
    bugName.appendChild(document.createTextNode(`${bug.name}`))
    
    bugDescription = document.createElement('p')
    bugDescription.classList.add('bugDescription')
    bugDescription.appendChild(document.createTextNode(`${bug.description}`))

    bugDate = document.createElement('p')
    bugDate.classList.add('bugDate')    
    bugDate.appendChild(document.createTextNode(`${bug.publishDate.toLocaleDateString()}`))

    bugDiv.appendChild(bugName)
    bugDiv.appendChild(bugDescription)
    bugDiv.appendChild(bugDate)

    document.body.getElementsByTagName('main')[0].appendChild(bugDiv)

}
