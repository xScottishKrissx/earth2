import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    siteSubtitle,
    pageWrapper,
    contentWrapper

} from './layout.module.css'
import NavBar from './navbar/navbar';
import Footer from './footer/footer';

const Layout = ({ pageTitle, children }) => {
  
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title,
                    description
                }
            }
        }
    `)


  return (

    <div className={pageWrapper}>
      <NavBar />
      {/* <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
      <h2 className={siteSubtitle}>{data.site.siteMetadata.description}</h2> */}
     

      {/* <nav>
        <ul>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
        </ul>
      </nav> */}

      <main className={contentWrapper}>
        {/* <h1 className={heading}>{pageTitle}</h1> */}

        {children}
      </main>
      {/* <Footer /> */}
    </div>

  )
}

export default Layout