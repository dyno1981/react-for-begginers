import styles from './App.module.css'
import {useEffect, useState} from 'react'

function Hello() {
  useEffect(() => {

    console.log('I\'m here!')
    // cleanup function 컴포넌트가 제거 될 때 호출된다.
    return () => console.log('destroyed')
  }, [])
  return <h1>Hello</h1>
}
function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue(prev => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  useEffect(() => {
    console.log('i run only once')
  }, [])

  useEffect(() => {
    console.log('i run when \'keyword\' changes')
  }, [keyword])

  useEffect(() => {
    console.log('i run when \'counter\' changes')
  }, [counter])

  const [showing, setShowing] = useState(false)
  const onClick2 = () => setShowing(prev => !prev)
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <hr/>
      {/*{showing ? <Hello/> : null}*/}
      {showing && <Hello/>}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
