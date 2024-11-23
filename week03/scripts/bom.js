document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#submitButton');
    const list = document.querySelector('#list');

    let chaptersArray = getChapterList() || [];

    // button.addEventListener('click', function() {
    //     if (input.value != '') {
    //         const li = document.createElement("li");
    //         const deleteButton = document.createElement('button');
    //         li.textContent = input.value;
    //         deleteButton.textContent = '❌';
    //         li.append(deleteButton);
    //         list.append(li);

    //         deleteButton.addEventListener('click', function () {
    //             list.removeChild(li);
    //             input.focus();
    //         });

    //         input.focus();
    //         input.value = '';
    //     }
    // });

    button.addEventListener('click', () => {
        if (input.value != '') { 
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }
    });

    function getChapterList() {
        chaptersArray.forEach(chapter => {
            displayList(chapter);
        });
    }

    function displayList() {

    }

    function setChapterList() {

    }
});
