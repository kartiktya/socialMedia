
window.addEventListener("DOMContentLoaded", () => {
    //console.log('h1');
   
    axios.get("http://localhost:3000/user/get-posts")
         .then((response) => {
            console.log(response.data);
           // console.log('r1=' + response.data);
            for(let i=0; i<response.data.allPosts.length; i++){
                showUserOnScreen(response.data.allPosts[i]);
            }

         })
         .catch((error) => console.log(error))

} )

function handleFormSubmit(event)
{
    event.preventDefault();
    
    const link = event.target.link.value;
    const description = event.target.description.value;
    
    
    let userObject = {

        link : link,
        description : description,
       
    };

   // console.log(userObject);
         
    axios.post("http://localhost:3000/user/add-post", userObject)
         .then((response)=>{

            console.log(response);

            showUserOnScreen(response.data.newPostDetail);
           
            
         })
         .catch((error)=> {
            document.body.innerHTML = document.body.innerHTML + '<h4> Something went wrong </h4>'
            console.log(error);
         })
     
}

function showUserOnScreen(userObject)
{ 
   
    //creating new li element COORECT
    // const newLi = document.createElement("img");
    // const newLi1 = document.createElement("li");
    // newLi.setAttribute("src",userObject.link);
    // newLi1.innerHTML = userObject.description;

    //newLi.innerHTML = `<img src=${userObject.link}> + <input type="text"> ${userObject.description}</input>`;
    //newLi.innerHTML = `User:<input type='text'>${userObject.description}`
    //newLi.innerHTML = userObject.link + "  " + userObject.description ;

    // const uoList = document.querySelector("ul");

    // uoList.appendChild(newLi);
    // uoList.appendChild(newLi1);

    const newLi2 = document.createElement("li");

    const newImg = document.createElement("img");
    const newLi4 = document.createElement("h4");
    
    

    newImg.setAttribute("src",userObject.link);

    newLi4.innerHTML = "User= " + userObject.description;



    newLi2.appendChild(newImg);
    newLi2.appendChild(newLi4);

    const uoList = document.querySelector("ul");

   
    uoList.appendChild(newLi2);


    document.getElementById("link").value= '';
    document.getElementById("description").value= '';
    
    


  
    //creating comment button 
    const commentBtn = document.createElement("button");
    commentBtn.setAttribute("class","btn btn-danger");
    commentBtn.textContent = "Comment";
    newLi2.appendChild(commentBtn);

    commentBtn.addEventListener("click", function(){

        const newInput = document.createElement("input");
        const sendBtn = document.createElement("button");

        newInput.setAttribute('type', 'text');
        newInput.setAttribute('name', 'comment');
        newInput.setAttribute('id', 'comment');

        sendBtn.setAttribute("class","btn btn-primary");
        sendBtn.textContent = "Send";

       newLi2.appendChild(newInput);
       newLi2.appendChild(sendBtn);
    
        

       sendBtn.addEventListener("click", function(event){

        const val = document.getElementById('comment').value;
        console.log(val);
       
        // var id = userObject.id;

        // axios.delete(`http://localhost:3000/user/delete-user/${id}`)
        //             .then((response)=>{
        
        //                 uoList.removeChild(newLi);
    
        //             })
        
        //             .catch((error)=>console.log("ERROR"))           

    });




       
        // var id = userObject.id;

        // axios.delete(`http://localhost:3000/user/delete-user/${id}`)
        //             .then((response)=>{
        
        //                 uoList.removeChild(newLi);
    
        //             })
        
        //             .catch((error)=>console.log("ERROR"))           

    });


  
    // //creating edit button
    // const editButton = document.createElement("input");
    // editButton.type="button";
    // editButton.value = "Edit";
    // editButton.setAttribute("class","btn btn-primary");

    // newLi.appendChild(editButton);
  
    // editButton.onclick = () => {

    //    // uoList.removeChild(newLi);

    //     var id = userObject._id;

    //     axios.delete(`https://crudcrud.com/api/6c12b4a946304c9bacf36968dfb7177a/studentManager/${id}`)
    //          .then((response)=>{

    //             uoList.removeChild(newLi);

    //             axios.get("https://crudcrud.com/api/6c12b4a946304c9bacf36968dfb7177a/studentManager")
    //             .then((response) => {
    //                 let length = response.data.length;
    //                 document.getElementById("totalStudent").innerHTML = `All Students:${length}`;       

    //             })
    //             .catch((error) => console.log(error))

    //          })
    //          .catch((error)=>console.log("ERROR"))


    //    document.getElementById("name").value=userObject.name;
    //    document.getElementById("phone").value=userObject.phonenumber;
    //    document.getElementById("address").value=userObject.address;   
  
    // } 
}