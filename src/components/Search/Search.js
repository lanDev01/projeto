import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5 pb-5'>
      <input placeholder='Não está funcional' type="text" className={styles.input}/>
      <button className='btn btn-outline-info fs-5'>Buscar</button>
    </form>
  )
}

export default Search
