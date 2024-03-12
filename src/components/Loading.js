// import React, { Component } from 'react'
import React from 'react'
import loading from '../loading.gif'
// export class Loading extends Component {
//     render() {
//         return (
//             <div className='loading text-center'>
//                 <img src={loading} alt="" />
//             </div>
//         )
//     }
// }
const Loading = () => {
    return (
        <div className='loading text-center'>
            <img src={loading} alt="" />
        </div>
    )
}
export default Loading
