import React from "react"
import { useGlobalContext } from "./context"

const Search = () => {
  const { query, searchPost } = useGlobalContext()

  return (
    <div className="searchDiv">
      <form className="form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Search" value={query} onChange={e => searchPost(e.target.value)} />
      </form>
    </div>
  )
}

export default Search