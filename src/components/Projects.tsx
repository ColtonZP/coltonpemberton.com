import { useState, useEffect } from 'react'

export const Projects = () => {
  const [archive, toggleArchive] = useState(false)

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await Client.query(Prismic.Predicates.at('document.type', 'project'), {
    //     orderings: '[document.first_publication_date]',
    //   })
    //   if (response) {
    //     setArchive(response.results.filter((res) => res.data.archived).reverse())
    //     setProjects(response.results.filter((res) => !res.data.archived).reverse())
    //   }
    // }
    // fetchData()
  }, [])

  return (
    <div className="my-work container">
      <h3>Projects</h3>

      <ul className="projects">
        {/* {projects && */}
        {/*  projects.map((site) => ( */}
        {/*    <li className="project" key={RichText.asText(site.data.name)}> */}
        {/*      <div className="image-overlay"> */}
        {/*        <h4>{RichText.asText(site.data.name)}</h4> */}
        {/*        <img src={site.data.image.url} alt={RichText.asText(site.data.name)} /> */}
        {/*        <div className="tags">{RichText.render(site.data.tags)}</div> */}
        {/*      </div> */}

        {/*      <div className="links"> */}
        {/*        <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}> */}
        {/*          Live */}
        {/*        </a> */}
        {/*        <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}> */}
        {/*          Source */}
        {/*        </a> */}
        {/*      </div> */}

        {/*      <RichText render={site.data.description} /> */}
        {/*    </li> */}
        {/*  ))} */}
      </ul>

      <button className="show-more" onClick={() => toggleArchive(!archive)} type="button">
        {archive ? 'hide archive -' : 'view archive +'}
      </button>

      {archive && (
        <ul className="archive">
          {/* {archive.map((site) => ( */}
          {/*  <li key={RichText.asText(site.data.name)}> */}
          {/*    <h5 className="title">{RichText.asText(site.data.name)}</h5> */}
          {/*    <div className="links"> */}
          {/*      {site.data.source.url && ( */}
          {/*        <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}> */}
          {/*          Source */}
          {/*        </a> */}
          {/*      )} */}
          {/*      <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}> */}
          {/*        Live */}
          {/*      </a> */}
          {/*    </div> */}
          {/*  </li> */}
          {/* ))} */}
        </ul>
      )}
    </div>
  )
}
