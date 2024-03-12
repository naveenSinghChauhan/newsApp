// import React, { Component } from 'react'
import React from 'react'
// export class NewsItem extends Component {
//     render() {
//         // console.log(this.props);
//         let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//         return (
//             <div className="container my-3">
//                 <div className="card">
//                     <div className="badge-div">
//                         <span className="badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>
//                             {source}
//                             <span className="visually-hidden">unread messages</span>
//                         </span>
//                     </div>
//                     <img src={imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
//                         <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
//                     </div>
//                 </div>
//             </div >
//         )
//     }
// }
const NewsItem = (props) => {
    // console.log(this.props);
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="container my-3">
            <div className="card">
                <div className="badge-div">
                    <span className="badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                </div>
            </div>
        </div >
    )
}
export default NewsItem
