const addButton = document.querySelector('#add');

const updateLSData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    
    console.log(textAreaData);
    
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));

}

//text =" " checking data exist or not
const addNewNote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>    `;

    note.insertAdjacentHTML('afterbegin', htmlData); /* where,  whom */
    // console.log(note);


    //getting reference
    const editBtn = note.querySelector('.edit');
    const delBtn = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');


    //deleting 
    delBtn.addEventListener('click', () => {
        note.remove();
    })

    //toggle using edit button
    //The toggle() method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden

    textArea.value = text;
    mainDiv.innerHTML = text;

    editBtn.addEventListener('click', ()=> {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    //event is parent object of event object that's why i am passing event
    textArea.addEventListener('change', (event)=>{
        const value = event.target.value;
        console.log(value);
        mainDiv.innerHTML = value;

        updateLSData(); //calling
    })


    document.body.appendChild(note);
    /*    if appends a node as the last child of a node */

}

//getting data back from localstorage
 const notes = JSON.parse(localStorage.getItem('notes'));

 if(notes)
 { 
    notes.forEach((note)=> addNewNote(note)) 
 };


addButton.addEventListener('click', () => addNewNote());



// the local storage and sessionStorage properties allow to save key/value pairs in a web browser.
// the local storage object stores data with no wxpiration date. the data will not be deleted when the browser is closed, and will be available the next day, week or year.