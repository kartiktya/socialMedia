
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
         .catch((error) => console.log(error));


    

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
        newInput.setAttribute('class', 'comment');
      
        newInput.setAttribute('id', userObject.id);

        sendBtn.setAttribute("class","btn btn-primary");
        sendBtn.textContent = "Send";

        const br = document.createElement("br");
        newLi2.appendChild(br);
       
        newLi2.appendChild(newInput);
       
        const br1 = document.createElement("br");
        newLi2.appendChild(br1);
        
        newLi2.appendChild(sendBtn);



       var id = userObject.id;

       axios.get(`http://localhost:3000/user/get-comments/${id}`)
        .then((response) => {
        //console.log(response.data);
    
        for(let i=0; i<response.data.allComments.length; i++){
            showComment(response.data.allComments[i]);
        }

        })
        .catch((error) => console.log(error))
    
        

       sendBtn.addEventListener("click", function(event){

        const val = document.getElementById(userObject.id).value;
        document.getElementById(userObject.id).value = '';
        console.log(val);
       
        var id = userObject.id;
        console.log(id);

        const  obj = {
                    comment: val
                }

        axios.post(`http://localhost:3000/user/add-comment/${id}`, obj)
                    .then((response)=>{
        
                        console.log(11111111);
                        
                        console.log(response.data.newCommentDetail);
                        showComment(response.data.newCommentDetail);
    
                    })
        
                    .catch((error)=>console.log(error));           

    });

    function showComment(obj) {
    const commentH4 = document.createElement("h4");
    
    commentH4.innerHTML = "Anonymous: " + obj.comment;
    
    newLi2.appendChild(commentH4);
    }
          

    });


  
}

