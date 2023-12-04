 function afficherPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

function fermerPopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
function reinitialiserFormulaire() {
            var formulaire = document.querySelector("#form");
            formulaire.reset();
          }

        let input =document.querySelector('.title'); 
        console.log(input);
        let input2 =document.querySelector('.description'); 
        console.log(input2);
        let input3 =document.querySelector('.date'); 
        console.log(input3);
        let form =document.getElementById('form');
        console.log(form);
        let list =document.querySelector('.items');
        console.log(list);
        
        form.addEventListener ("submit",function(event){
            event.preventDefault(); // pour ne pas réfraichir la page

            let NewTodo = document.createElement('div');
    
    let title = input.value;
    NewTodo.innerText=title;
    list.appendChild(NewTodo);
    NewTodo.classList.add('todo');


    let description = document.createElement('description')
    description.innerText = input2.value;
    NewTodo.appendChild(description);

    let deadline = document.createElement('date');
    deadline.innerText = input3.value;
    NewTodo.appendChild(deadline);


  NewTodo.style.border='2px solid rgb(189, 77, 96)'

        })
           
    