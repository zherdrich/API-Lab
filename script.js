let userInput= document.querySelector("#subredditsubmit").value;


document.querySelector("button").addEventListener("click", (event) => {
event.preventDefault()
let userInput = document.querySelector("#subredditsubmit").value
    fetch("https://www.reddit.com/r/" + userInput + "/.json")
    .then(response => response.json())
    .then(data => {
        let posts = data.data.children; // array of posts
        console.log({posts}) 
    
        posts.map(posts => {
            // console.log(post.data.title)
            let eachPost = document.createElement("div")
            eachPost.innerText = posts.data.title;
            document.body.append(eachPost);
            eachPost.classList.add("center");
    
            let eachImage = document.createElement("img");
            eachImage.src = posts.data.thumbnail;
            console.log(posts.data.thumbnail);
            eachPost.append(eachImage)
            let eachLink =document.createElement("a");
            eachLink.setAttribute("href", posts.data.url)
            eachLink.innerText = "Click here to see post"
            eachPost.append(eachLink)
        })
    
    
    
    })



})
