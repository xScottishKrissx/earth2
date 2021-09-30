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

  hideLoad(){
    this.setState({
      endSlice:3,
      endOfArticlesMessage:false

    })
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
           <Link to={`/blog/${x.slug}`}>
              <div className="column-image">              
                <GatsbyImage image={getImage(x.frontmatter.hero_image)} alt="" />
                <span className="overlay" title="open in new tab">
                  <span className="material-icons">open_in_new</span>
                </span>
              </div>
        
              <span className="latestNewsDate">{x.frontmatter.date}</span>
              <div className="latestNewsTitle">
              <h3>{x.frontmatter.title}</h3>
                {/* <Link to={`/blog/${x.slug}`}>
                  <h3>{x.frontmatter.title}</h3>
                </Link> */}
              </div>
            </Link>

            </div>      
              
          </div>
          
        ))
      
      }
      
      </div>

      <div className="endOfArticlesMessage">
        
        {this.state.endOfArticlesMessage === true ? 
          
          <div onClick={()=>this.hideLoad()}>
            <span id="showMoreIcon" class="material-icons">add</span>
            <button > <span>No more posts</span></button>
          </div>

          : 
          
          <div onClick={()=>this.loadMore()}>
            <span class="material-icons">add</span>
            <button > <span>show more posts</span></button>
          </div>

           
        }

      </div>

      

    </div>
  )
  }
}