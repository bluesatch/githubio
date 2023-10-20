class App {
    constructor() {
        this.projects = [
            {
                id: 1 ,
                name: "restaurant '22",
                imgUrl: './images/restaurant-screenshot.png',
                description: 'My 2022 version of the Restaurant design. I utilized Bootstrap v5.2 specifically focusing on using the carousel.',
                sourceCode: 'https://github.com/bluesatch/restaurant22',
                livePage: 'https://bluesatch.github.io/restaurant22/',
                course: 'academy'
            },
            {
                id: 2,
                name: "venedor '22",
                imgUrl: './images/venedor-screenshot.png',
                description: 'My 2022 version of venedor. I utilized Bootstrap v5.2 and added my own images.',
                sourceCode: 'https://github.com/bluesatch/venedor22',
                livePage: 'https://bluesatch.github.io/venedor22/',
                course: 'academy'
            },
            {
                id: 3,
                name: 'dodger fan page',
                imgUrl: './images/dodger-fanpage.png',
                description: 'For this project, I taught carousel, scrollspy, and card using Bootstrap v5.2',
                sourceCode: 'https://github.com/bluesatch/dodgerfanpage',
                livePage: 'https://bluesatch.github.io/dodgerfanpage/',
                course: 'academy'
            },
            {
                id: 4, 
                name: 'haunted house',
                imgUrl: './images/hauntedscreen.png',
                description: 'This was a cool project I learned from my three.js studies.',
                sourceCode: null,
                livePage: 'https://haunted-house-kappa-roan.vercel.app/',
                course: 'three.js'
            },
            {
                id: 5, 
                name: "detroix '22",
                imgUrl: './images/detroixscreen.png',
                description: 'A Mississippi Coding Academy favorite, Detroix. This is the first mock design that we assign. The coders have to build four versions of this: one using only margin, padding, & float, one using position, one using flexbox, and the other using bootstrap. I want them to be familiar with using multiple layout strategies.',
                sourceCode: 'https://github.com/bluesatch/Detroix22',
                livePage: 'https://bluesatch.github.io/Detroix22/',
                course: 'academy'
            },
            {
                id: 6,
                name: '3-d text',
                imgUrl: './images/3dtextscreenshot.png',
                description: "I learned how to create 3-D text in three.js. Maybe I'll add it to this portfolio page. Hmmmm...",
                sourceCode: null,
                livePage: 'https://webgl-satch3d-text.vercel.app/',
                course: 'three.js'
            },
            {
                id: 7,
                name: 'galaxy',
                imgUrl: './images/galaxyscreen.png',
                description: 'In this project, I made an animated galaxy in three.js',
                sourceCode: null,
                livePage: 'https://galaxy-khaki.vercel.app/',
                course: 'three.js'
            },
            {
                id: 8,
                name: 'tic-tac-toe',
                imgUrl: './images/tictactoescreen.png',
                description: 'One of the JavaScript projects we work on is building the game tic-tac-toe. The focus is on algorithms and class-based objects.',
                sourceCode: 'https://github.com/bluesatch/tictactoe21',
                livePage: 'https://bluesatch.github.io/tictactoe21/',
                course: 'academy'
            },
            {
                id: 9,
                name: 'nomiya',
                imgUrl: './images/nomiyascreen.png',
                description: 'Similar structure to the restaurant page with refactored js',
                sourceCode:'https://github.com/bluesatch/nomiya22',
                livePage: 'https://bluesatch.github.io/nomiya22/',
                course: 'academy'
            }
        ]
    }

    init() {
        this.loadItems()
    }

    loadItems() {
        const projectDiv = document.getElementById('projectDiv')
        // console.log(projectDiv)
        const projects = this.projects

        
        projects.forEach(project => {
            const image = `<img src="${project.imgUrl}" alt="${project.description}" class="img-fluid card-img" />`

            const iframe = `<iframe src="${project.livePage}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="${project.name}"></iframe>`
            
            const card = document.createElement('div')
            card.classList.add('col')

            card.innerHTML = `
                    <div class="card text-bg-dark h-100">
                    ${project.course === 'three.js'? iframe : image}
                    
                    
                    <div class="card-body">
                        <h3 class="card-title project-title text-capitalize">${project.name}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="card-footer project-links">
                            ${project.sourceCode != null ? `<a href="${project.sourceCode}"target="_blank" class="card-link project-link source-code text-capitalize">source code</a>` : ''}
                            
                            <a href="${project.livePage}" target="_blank" class="card-link project-link live-look text-capitalize">live page</a>
                        </div>
                    </div>
                </div>
            `
            projectDiv.append(card)
        })
    }
}

const action = new App()

action.init()