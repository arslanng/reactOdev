import axios from "axios";

const getData = async function(id){
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+id);
    console.log(user);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/"+id);
    console.log(post);
}

export default getData;