/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sectionsList = Array.from(document.querySelectorAll('section'));
const navMenu = document.getElementById('navbar__list');
let numberOfNavItems = sectionsList.length; 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*

const contentLine1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const contentLine2 = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

const pageSections = [
    {
        id : 'section1',
        dataNav: 'Section 1',
        heading: this.dataNav,
    },
    {
        id : 'section2',
        dataNav: 'Section 2',
        heading: this.dataNav,
    },
    {
        id : 'section3',
        dataNav: 'Section 3',
        heading: this.dataNav,
    },
    {
        id : 'section4',
        dataNav: 'Section 4',
        heading: this.dataNav,
    },
]

function addSections () {
    const sectionsWrapper = document.querySelector('main');

    pageSections.forEach(pageSection => {
        const section = document.createElement('section');
        section.setAttribute('id', pageSection.id);
        section.setAttribute('data-nav', pageSection.dataNav);
        
        const sectionContainer = document.createElement('div');
        sectionContainer.setAttribute('class', 'landing__container');
        section.appendChild(sectionContainer)

        const sectionHeading = document.createElement('h2');
        sectionContainer.appendChild(sectionHeading);
        
        const sectionParagraph_1 = document.createElement('p');
        sectionParagraph_1.textContent = contentLine1;
        sectionContainer.appendChild(sectionParagraph_1);

        const sectionParagraph_2 = document.createElement('p');
        sectionParagraph_2.textContent = contentLine2;
        sectionContainer.appendChild(sectionParagraph_2);


        sectionsWrapper.appendChild(section);
    })
    
}

addSections();

*/

function createNavListElement () {
    sectionsList.forEach(section => {
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');

        // create listItem for each section

        let listItem = document.createElement('li');

        // adding innerText to listItem

        listItem.innerHTML = `<a class = 'menu__link' scroll-to = '${sectionName}' style='cursor: pointer'>${sectionName}</a>`

        
        
        // adding listItem to the navigationMenu
        
        navMenu.appendChild(listItem);
    })

    const anchorList = Array.from(document.querySelectorAll('.menu__link'))

    anchorList.forEach(anchor => {
        
        anchor.addEventListener('click', () => {
            let anchorText = anchor.getAttribute('scroll-to');
            
            sectionsList.forEach(section => {
                if (section.getAttribute('data-nav') === anchorText) {
                    section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                }
            })
        })
    })
    /*
    for (section of sectionsList) {
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');

        // create listItem for each section

        let listItem = document.createElement('li');

        // adding innerText to listItem

        listItem.innerHTML = `<a class = 'menu__link' href = '#${sectionLink}' >${sectionName}</a>`

        // adding listItem to the navigationMenu

        navMenu.appendChild(listItem);
    }
    */
}


// Determines if section is in viewport

function isSectionInViewprot(sec) {
    let viewportOffset = sec.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    let top = viewportOffset.top;

    let secHeight = sec.offsetHeight;

    return (
        top <= (secHeight*2/3) && top > -(secHeight/3)
    );

}

const toggleActiveState = () => {
    for (section of sectionsList) {
        if (isSectionInViewprot(section)) {
            if (!(section.classList.contains('your-active-class'))) {
                section.classList.add('your-active-class');

            }
        } else {
            section.classList.remove('your-active-class');
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavListElement();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActiveState);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active