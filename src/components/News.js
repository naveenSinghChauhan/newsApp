// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//     articles = [];
//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general'
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: this.articles,
//             loading: true,
//             page: 1,
//             totalResults: 0
//         };
//         // console.log(this.articles);
//         document.title = `${this.capitalizeFirstLetter(this.props.category)}: News`;
//     }
//     async updateNews() {
//         // console.log(this.state);
//         // 636163702f5c48ebaafa20ed92ea2e12
//         console.log(this.props.apiKey);
//         this.props.progress(10)
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true })
//         let res = await fetch(url);
//         this.props.progress(30)
//         const data = await res.json();
//         this.props.progress(70);
//         // console.log(data);
//         this.setState({
//             articles: data.articles,
//             totalResults: data.totalResults,
//             loading: false
//         });
//         this.props.progress(100);
//     }
//     async componentDidMount() {
//         this.updateNews();
//     }
//     // handlePreview = async () => {
//     //     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=636163702f5c48ebaafa20ed92ea2e12&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     //     // this.setState({ loading: true })
//     //     // let res = await fetch(url);
//     //     // const data = await res.json();
//     //     // // console.log(data);
//     //     // this.setState({
//     //     //     articles: data.articles,
//     //     //     page: this.state.page - 1,
//     //     //     loading: false
//     //     // });
//     //     this.setState({ page: this.state.page - 1 })
//     //     this.updateNews();
//     // }
//     // handleNext = async () => {
//     //     // this.setState({ loading: true });
//     //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//     //     //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=636163702f5c48ebaafa20ed92ea2e12&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //     //     let res = await fetch(url);
//     //     //     const data = await res.json();
//     //     //     // console.log(data);
//     //     //     this.setState({
//     //     //         articles: data.articles,
//     //     //         page: this.state.page + 1,
//     //     //         loading: false
//     //     //     });
//     //     // }
//     //     console.log(this.state);
//     //     this.setState({ page: this.state.page + 1 });
//     //     console.log(this.state.page);
//     //     this.updateNews();
//     // }

//     fetchMoreData = async () => {
//         // this.setState({ state.page + 1 });
//         this.setState(prevState => ({ page: prevState.page + 1 }), async () => {
//             // console.log(this.state.page); // Log the updated state value here      
//             const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//             let res = await fetch(url);
//             console.log(res);
//             const data = await res.json();
//             this.setState({
//                 articles: this.state.articles.concat(data.articles),
//             });

//         });
//         // this.state.page = this.state.page + 1;
//         // this.setState({ page: this.state.page + 1 });
//         console.log("secttime", this.state);

//     };
//     render() {
//         // console.log(this.state.articles.length !== this.state.totalResults, this.state.articles.length, this.state.totalResults);
//         return (
//             <>
//                 <h1 className='text-center' style={{ margin: '35px 0px' }}>Top {this.props.category} headlines</h1>
//                 {this.state.loading && <Loading />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Loading />}
//                 >
//                     <div className="container" key={this.props.page}>
//                         <div className="row">
//                             {this.state.articles.map((element, index) => {
//                                 return <div className="col-md-4" key={index}>
//                                     <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.opindia.com/wp-content/uploads/2024/03/journalist-dead-bangladesh-1.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                                 </div>;
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll >
//                 {/* <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreview}>&larr;Previews</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
//                 </div> */}
//                 {/* // </div > */}
//             </>
//         )
//     }
// }
const News = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const updateNews = async () => {
        console.log(props.apiKey);
        props.progress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let res = await fetch(url);
        props.progress(30)
        const data = await res.json();
        props.progress(70);
        // console.log(data);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
        props.progress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])
    // const handlePreview = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }
    // const handleNext = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let res = await fetch(url);
        console.log(res);
        const data = await res.json();
        setArticles(articles.concat(data.articles))
    };
    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>Top {capitalizeFirstLetter(props.category)} headlines</h1>
            {loading && <Loading />}
            {/* console.log(articles); */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container" key={page}>
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.opindia.com/wp-content/uploads/2024/03/journalist-dead-bangladesh-1.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>;
                        })}
                    </div>
                </div>
            </InfiniteScroll >
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
