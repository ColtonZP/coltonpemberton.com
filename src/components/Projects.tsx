import { useState, useEffect } from 'react'
import sanityClient from '../client'

interface Project {
  id: number
  title: string
  liveURL: string
  sourceUrl: string
  archived: boolean
}

interface MainProject extends Project {
  description: string
  mainImage: {
    asset: {
      _id: string
      url: string
    }
  }
  categories: string[]
}

export const Projects = () => {
  const [archive, toggleArchive] = useState(false)
  const [mainProjects, setMainProject] = useState<MainProject[]>([])
  const [archived, setArchived] = useState<Project[]>([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "project"]{
            title,
            description,
            id,
            liveURL,
            sourceUrl,
            archived,
            "categories": categories[]->title,
            mainImage {
              asset->{
                _id,
                url
              }
            }
          }`,
      )
      .then((data: MainProject[]) => {
        setMainProject(
          data.filter(project => !project.archived).sort((a, b) => a.id - b.id),
        )
        setArchived(
          data.filter(project => project.archived).sort((a, b) => a.id - b.id),
        )
      })
      .catch(console.error)
  }, [])

  return (
    <div className="py-16">
      <h3 className="text-5xl">Projects</h3>

      <ul className="grid grid-cols-1 md:grid-cols-6 grid-flow-col gap-8 grid-flow-row-dense py-16">
        {mainProjects &&
          mainProjects.map((site, i) => (
            <li
              className={`${
                i < 2 ? 'col-span-3' : 'col-span-2'
              } inline-flex flex-col`}
              key={site.title}>
              <img
                className="rounded"
                src={site.mainImage.asset.url}
                alt={site.title}
              />
              <div className="bg-gray-800 rounded-md w-11/12 m-auto bottom-4 relative px-4 pb-4 flex-1 flex flex-col">
                <h4 className="text-3xl py-2 px-4 bg-gray-900 relative rounded bottom-6 z-20 w-fit m-auto">
                  {site.title}
                </h4>

                <p className="flex-1">{site.description}</p>

                <div className="my-4">
                  <a
                    className="bg-cp-blue py-1 px-2 rounded inline-block mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.liveURL}>
                    Live
                  </a>
                  <a
                    className="bg-cp-blue py-1 px-2 rounded inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.sourceUrl}>
                    Source
                  </a>
                </div>

                <ul className="flex flex-wrap">
                  {site.categories.map(tag => (
                    <li className="pr-4 text-cp-blue" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>

      <button
        className="m-auto block text-cp-blue border rounded border-cp-blue py-1 px-4"
        onClick={() => toggleArchive(!archive)}
        type="button">
        {archive ? 'hide archive -' : 'view archive +'}
      </button>

      {archive && (
        <ul className="text-cp-blue">
          {archived.map(site => (
            <li key={site.title} className="flex mt-6">
              <h5 className="">{site.title}</h5>
              <div className="border-b-2 border-dotted border-cp-blue flex-1 relative bottom-1 mx-1" />
              <div className="links">
                {site.sourceUrl && (
                  <a
                    className="mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={site.sourceUrl}>
                    Source
                  </a>
                )}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={site.liveURL}>
                  Live
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
