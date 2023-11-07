import React, {useState, useEffect} from 'react'

function RepoDetails({match}) {
  const [repo, setRepo] = useState(null)

  useEffect(() => {
    const {owner, repoName} = match.params
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repoName}`,
      )
      const data = await response.json()
      setRepo(data)
    }

    fetchData()
  }, [match])

  return (
    <div>
      {repo ? (
        <div>
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
          <a href={repo.html_url}>GitHub Link</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RepoDetails
