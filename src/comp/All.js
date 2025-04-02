// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import Ct from './Ct'


// const All = () => {
//     let [posts, setPosts] = useState([])
//     let [f,setF]=useState(true)
//     useEffect(() => {
//         axios.get("http://localhost:5000/").then((res) => {
//             setPosts(res.data)
//         })
//     }, [f])
//     let cobj=useContext(Ct)
//     let addlike=(pid)=>{
//         if(cobj.state.token!="")
//         {
//             axios.post("http://localhost:5000/addlike",{"_id":pid,"uid":cobj.state._id}).then(()=>{
//                 setF(!f)
//             })
//         }

//     }

//     let adddlike=(pid)=>{
//         if(cobj.state.token!="")
//         {
//             axios.post("http://localhost:5000/adddlike",{"_id":pid,"uid":cobj.state._id}).then(()=>{
//                 setF(!f)
//             })
//         }

//     }

//     return (
//         <div className='newscon'>
//             <h1>All Recent Posts</h1>
//             <div className='news-grid'>
//                 {
//                     posts.map((obj) => {
//                         return (
//                             <div className='newscard' key={obj._id}>
//                                 <h2>{obj.title.toUpperCase()}
//                                     <span className='cat'>Cat: {obj.cat}</span>
//                                 </h2>
//                                 <p className='content'>{obj.text}</p>
//                                 <img src=''/>
//                                 {/* <button onClick={()=>addlike(obj._id)}>Like:{obj.likes.length}</button>
                                
//   <img src="https://media-hosting.imagekit.io//f3df82c18a3d47ec/Screenshot%202025-02-18%20170847.png?Expires=1836012935&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JAJ1NhSJIUdqfQZoPJ4k8dWZySgFG5tv54BOXV4b211MnH5iTw2L1rU~lPls57t96Mj0NnEhBtqJMcWBciJ~UlxAK6mPY44tOpO18y3UVSnPHryHwkNGcj6rsKB6gBiJcnytUN1MjIbK4SJJt5mL9IUnZJAhVfsY1vgP8D8oqtdfsqE7mDVCYGWkWaMjg2~fSs-4mcEcSBAlLwMvw1MQjsOIuJuWax5kndLa5WT~R1tZsGtlvdPzRN3Bg2HCbr2L12uuCHscyaGogCSi3Q89asaWNUxV-61OGLJikzkPmoehPmq-4rLwU-pwlSHNl8V0Ounc4Hi8pbkElTgdUeayYA__" alt="Like" style={{ width: '60px', height: '60px' }} onClick={() => addlike(obj._id)} />
//    {obj.likes.length}
//    <img src="https://media-hosting.imagekit.io//b8c3a9e2b54b4c83/dislike-button-png-0.jpg?Expires=1836061604&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MZu0CFxJkgShTchDWPtSv0XBxpud3924TixTM000b86wbg2No4AUQsuwHFXNlNGjJl1c3D5ud~CzY7DEEZ8i0R8EAZlUHTxGO6UJ02r28N8vcIMbHqNYGOEAUA4bkm1b2gFyIx3T6LdEourrip~VFdAE~XhMdAeBf68uJ4XYJdA5Yzk1j1zWKVs--6DMQmNyb0sza4ktj0uj~qrk92Og2rK5N-d5AdPvLqIINgIEjwjTffnTQ3aY5mP-gQMWJZcZGgEi4wB7HjnDcpWvJTOcKHJVkLftVi~R5kKOpIGPcfqLLsatmFbwm8~SQzFyMEhH7clZ2Dv2pO3CXjkYmwHcsg__" alt="DisLike" style={{ width: '80px', height: '60px' }} onClick={() => adddlike(obj._id)} />{obj.dlikes.length}

//                                 <button  onClick={()=>adddlike(obj._id)}>DLike:{obj.dlikes.length}</button> */}
                              
// <div className='like-dislike-container'>
//     <div className='like-container'>
//         <img 
//             src="https://media-hosting.imagekit.io//f3df82c18a3d47ec/Screenshot%202025-02-18%20170847.png?Expires=1836012935&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JAJ1NhSJIUdqfQZoPJ4k8dWZySgFG5tv54BOXV4b211MnH5iTw2L1rU~lPls57t96Mj0NnEhBtqJMcWBciJ~UlxAK6mPY44tOpO18y3UVSnPHryHwkNGcj6rsKB6gBiJcnytUN1MjIbK4SJJt5mL9IUnZJAhVfsY1vgP8D8oqtdfsqE7mDVCYGWkWaMjg2~fSs-4mcEcSBAlLwMvw1MQjsOIuJuWax5kndLa5WT~R1tZsGtlvdPzRN3Bg2HCbr2L12uuCHscyaGogCSi3Q89asaWNUxV-61OGLJikzkPmoehPmq-4rLwU-pwlSHNl8V0Ounc4Hi8pbkElTgdUeayYA__" 
//             alt="Like" 
//             style={{ width: '60px', height: '60px' }} 
//             onClick={() => addlike(obj._id)} 
//         />
//         <span>{obj.likes.length}</span>
//     </div>

//     <div className='dislike-container'>
//         <img 
//             src="https://media-hosting.imagekit.io//b8c3a9e2b54b4c83/dislike-button-png-0.jpg?Expires=1836061604&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MZu0CFxJkgShTchDWPtSv0XBxpud3924TixTM000b86wbg2No4AUQsuwHFXNlNGjJl1c3D5ud~CzY7DEEZ8i0R8EAZlUHTxGO6UJ02r28N8vcIMbHqNYGOEAUA4bkm1b2gFyIx3T6LdEourrip~VFdAE~XhMdAeBf68uJ4XYJdA5Yzk1j1zWKVs--6DMQmNyb0sza4ktj0uj~qrk92Og2rK5N-d5AdPvLqIINgIEjwjTffnTQ3aY5mP-gQMWJZcZGgEi4wB7HjnDcpWvJTOcKHJVkLftVi~R5kKOpIGPcfqLLsatmFbwm8~SQzFyMEhH7clZ2Dv2pO3CXjkYmwHcsg__" 
//             alt="DisLike" 
//             style={{ width: '80px', height: '60px' }} 
//             onClick={() => adddlike(obj._id)} 
//         />
//         <span>{obj.dlikes.length}</span>
//     </div>
// </div>

                             
//                                 <div className='foot'>
//                                     <span className='date'>{obj.date}</span>
//                                     <span className='uname'>{obj.uname}</span>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default All

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'

const All = () => {
    let [posts, setPosts] = useState([])
    let [f, setF] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:5000/").then((res) => {
            setPosts(res.data)
        })
    }, [f])

    let cobj = useContext(Ct)

    let addlike = (pid) => {
        if (cobj.state.token !== "") {
            axios.post("http://localhost:5000/addlike", { "_id": pid, "uid": cobj.state._id }).then(() => {
                setF(!f)
            })
        }
    }

    let adddlike = (pid) => {
        if (cobj.state.token !== "") {
            axios.post("http://localhost:5000/adddlike", { "_id": pid, "uid": cobj.state._id }).then(() => {
                setF(!f)
            })
        }
    }

    const getShortContent = (text) => {
        const lines = text.split('\n');
        const maxLines = 10;

        if (lines.length > maxLines) {
            return lines.slice(0, maxLines).join('\n');
        }

        return text;
    }

    const [expandedPosts, setExpandedPosts] = useState({});

    const toggleContent = (postId) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    }

    return (
        <div className='newscon'>
            <h1>All Recent Posts</h1>
            <div className='news-grid'>
                {posts.map((obj) => {
                    const shortContent = getShortContent(obj.text);
                    const isExpanded = expandedPosts[obj._id];

                    return (
                        <div className='newscard' key={obj._id}>
                            <h2>{obj.title.toUpperCase()}
                                <span className='cat'>Cat: {obj.cat}</span>
                            </h2>

                            <p className='content'>
                                {isExpanded ? obj.text : shortContent}
                            </p>

                            {obj.text.split('\n').length > 10 && !isExpanded && (
                                <div className="know-more-btn-container">
                                    <button onClick={() => toggleContent(obj._id)} className="know-more-btn">Know More</button>
                                </div>
                            )}

                            {obj.text.split('\n').length > 10 && isExpanded && (
                                <div className="know-more-btn-container">
                                    <button onClick={() => toggleContent(obj._id)} className="know-more-btn">Show Less</button>
                                </div>
                            )}

                            <div className='like-dislike-container'>
                                <div className='like-container'>
                                    <img
                                        src="https://media-hosting.imagekit.io//f3df82c18a3d47ec/Screenshot%202025-02-18%20170847.png?Expires=1836012935&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JAJ1NhSJIUdqfQZoPJ4k8dWZySgFG5tv54BOXV4b211MnH5iTw2L1rU~lPls57t96Mj0NnEhBtqJMcWBciJ~UlxAK6mPY44tOpO18y3UVSnPHryHwkNGcj6rsKB6gBiJcnytUN1MjIbK4SJJt5mL9IUnZJAhVfsY1vgP8D8oqtdfsqE7mDVCYGWkWaMjg2~fSs-4mcEcSBAlLwMvw1MQjsOIuJuWax5kndLa5WT~R1tZsGtlvdPzRN3Bg2HCbr2L12uuCHscyaGogCSi3Q89asaWNUxV-61OGLJikzkPmoehPmq-4rLwU-pwlSHNl8V0Ounc4Hi8pbkElTgdUeayYA__"
                                        alt="Like"
                                        style={{ width: '60px', height: '60px' }}
                                        onClick={() => addlike(obj._id)}
                                    />
                                    <span>{obj.likes.length}</span>
                                </div>

                                <div className='dislike-container'>
                                    <img
                                        src="https://media-hosting.imagekit.io//b8c3a9e2b54b4c83/dislike-button-png-0.jpg?Expires=1836061604&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MZu0CFxJkgShTchDWPtSv0XBxpud3924TixTM000b86wbg2No4AUQsuwHFXNlNGjJl1c3D5ud~CzY7DEEZ8i0R8EAZlUHTxGO6UJ02r28N8vcIMbHqNYGOEAUA4bkm1b2gFyIx3T6LdEourrip~VFdAE~XhMdAeBf68uJ4XYJdA5Yzk1j1zWKVs--6DMQmNyb0sza4ktj0uj~qrk92Og2rK5N-d5AdPvLqIINgIEjwjTffnTQ3aY5mP-gQMWJZcZGgEi4wB7HjnDcpWvJTOcKHJVkLftVi~R5kKOpIGPcfqLLsatmFbwm8~SQzFyMEhH7clZ2Dv2pO3CXjkYmwHcsg__"
                                        alt="DisLike"
                                        style={{ width: '80px', height: '60px' }}
                                        onClick={() => adddlike(obj._id)}
                                    />
                                    <span>{obj.dlikes.length}</span>
                                </div>
                            </div>

                            <div className='foot'>
                                <span className='date'>{obj.date}</span>
                                <span className='uname'>{obj.uname}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default All
