import React, {useState, useEffect} from 'react'

function RepoList() {
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>2023-10-06&sort=stars&order=desc&page=${page}`,
      )
      const data = await response.json()
      setRepos([...repos, ...data.items])
    }

    fetchData()
  }, [page])

  const loadMore = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={loadMore}>Load More</button>
    </div>
  )
}

export default RepoList
