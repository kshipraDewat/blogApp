// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    // let name ='mario';
    // const [name,setName]=useState('mario');
    // const[age, setAge] = useState(25);
    // const handleClick = ()=> {
    //    setName('kshipra');
    //    setAge(20)
    // }

    // const[blogs, setBlogs]= useState([
    //     {title: 'my new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    //     {title: 'welcome party',body:'lorem ipsum...' , author: 'yoshi', id:2},
    //     {title: 'Web dev tips',body:'lorem ipsum...' , author: 'mario', id:3}
    // ]);

    // const[blogs, setBlogs]= useState(null); 
    // const [isPending, setIsPending]=useState(true);
    // const [error, setError]=useState(null);


    // const [name, setName] =useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(()=>{
    //     // console.log("useeffect ran");
    //     // console.log(name);
    //     setTimeout(()=>{
    //     fetch(' http://localhost:8001/blogs')
    //         .then(res=>{
    //             // console.log(res);
    //             if(!res.ok){
    //                 throw Error('could not fetch data for that resource');
    //             }
    //             return res.json();
    //         })
    //         .then((data) =>{
    //             // console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch(err =>{
    //             // console.log(err.message);
    //             setIsPending(false);
    //             setError(err.message);
    //         })
    //     }, 1000);
    // },[]);



    const {data: blogs, isPending, error} =useFetch(' http://localhost:8001/blogs');

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            

             {blogs.map((blog)=> (
                    <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Writtern by {blog.author}</p>
                    </div>
             ))} */}

             {/* <BlogList blogs ={blogs} title ="All Blogs!" /> */}
             {/* <BlogList blogs ={blogs.filter((blog)=> blog.author === 'mario')} title ="Mario's blogs" /> */}
             
             {/* <button onClick={()=> setName('luigi') }>change name</button>
             <p>{ name }</p> */}


             {/* { blogs && <BlogList blogs ={blogs} title ="All Blogs!" handleDelete={handleDelete} />} */}

             {error && <div>{error}</div>}
             {isPending && <div> Loading...</div> }
             { blogs && <BlogList blogs ={blogs} title ="All Blogs!" />}
        </div>
     );
}
 
export default Home;