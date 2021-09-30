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
  
  loadMore(){

    if(this.state.endSlice <= 3){
      this.setState({ endSlice: this.state.endSlice + 3 })
    }else{
      this.setState({ endOfArticlesMessage: true  })
    }

  }

  render(){

    const articles = this.state.newsArray.slice(this.state.startSlice,this.state.endSlice)

    return(
      <div className="latest">
      <h2>Latest News</h2>
      <div className="latestWrapper">
  
      {
        articles.map(x => (
  
            <div className="column" key={x.id}> 
            <div>     
           
              <div className="column-image">              
                <GatsbyImage image={getImage(x.frontmatter.hero_image)} alt="" />
                <span className="overlay">Overlay</span>
              </div>
        
              <span className="latestNewsDate">{x.frontmatter.date}</span>
              <div className="latestNewsTitle"><Link to={`/blog/${x.slug}`}>{x.frontmatter.title}</Link></div>

            </div>             
          </div>
          
        ))
      
      }
      
      </div>
      
      <div className="endOfArticlesMessage">
        
        {this.state.endOfArticlesMessage === true ? 
            <span>No more news, check back later</span> 
          : 
            <button onClick={()=>this.loadMore()}>Load More</button>
        }

      </div>

      

    </div>
  )
  }
}