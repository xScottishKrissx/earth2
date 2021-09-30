import * as React from 'react'
import { Link  } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './latest.css'

export default class Latest extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        newsArray:this.props.pageInfo,
        startSlice:0,
        endSlice:3,
        endOfArticlesMessage:false

    }
  }
  
  loadMore(currentEndPoint,numberToLoad){

    if(currentEndPoint <= 3){
      this.setState({ endSlice: currentEndPoint + numberToLoad })
    }else{
      this.setState({ endOfArticlesMessage: true  })
    }

  }

  hideLoad(){
    this.setState({ endSlice:3, endOfArticlesMessage:false })
  }

  render(){
    console.log(this.props.pageInfo.length)
    const articles = this.state.newsArray.slice(this.state.startSlice,this.state.endSlice)

    return(
      <div className="latest">
      <h2>Latest News</h2>
      <div className="latestWrapper">
  
      {
        articles.map(x => (
  
            <div className="column" key={x.id}> 
            <div>     
           <Link to={`/blog/${x.slug}`}>
              <div className="column-image">              
                <GatsbyImage image={getImage(x.frontmatter.hero_image)} alt="" />
                <span className="overlay" title="View post">
                  <span className="material-icons">open_in_new</span>
                </span>
              </div>
        
              <span className="latestNewsDate">{x.frontmatter.date}</span>
              <div className="latestNewsTitle"><h3>{x.frontmatter.title}</h3></div>
            </Link>

            </div>      
              
          </div>
          
        ))
      
      }
      
      </div>

      <div className="endOfArticlesMessage">
        
        {this.state.endOfArticlesMessage === true ? 
          
          <div onClick={()=>this.hideLoad()} onKeyUp={()=>this.hideLoad()} role="button" tabIndex={0}>
            <span id="showMoreIcon" class="material-icons">add</span>
            <button > <span>No more posts</span></button>
          </div>

          : 
          
          <div onClick={()=>this.loadMore(this.state.endSlice,3)} role="button" onKeyUp={()=>this.loadMore()} tabIndex={0}>
            <span className="material-icons">add</span>
            <button > <span>show more posts</span></button>
          </div>

           
        }

      </div>

      

    </div>
  )
  }
}