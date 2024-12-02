import './App.css'

function App(){

  function tangetUp(event) {
    const {value} = event.target.elements.inputValue

    event.preventDefault()

    fetch(`http://localhost:3000/posts/${value}`)
    .then(response => {

      if(response.status === 404) {
        throw new Error('Неверный ID')
      }

      return response.json()
    }
    )
    .then(json => console.log(json))
  }

  return (
    <>
      <div>
        <form onSubmit={tangetUp}>
          <p>
          <input type="text" name='inputValue'placeholder='Введите ID'/>
          </p>
          <button type="submit">
            Получить данные
          </button>
        </form>
      </div>
    </>
  )
}

export default App
