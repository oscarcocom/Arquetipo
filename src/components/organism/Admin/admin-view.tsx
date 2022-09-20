import { useForm } from '../../../hooks/useForm/use-form'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import Select from 'react-select'
import { useState, useEffect } from 'react';
import ApiCangular from '../../../path/Api/instance-pichincha';

export const AdminView = () => {
  const { values, handleInputchange, setValues } = useForm({
    inputSearch: '',
    booksOwner:[],
    bookCategory:[]
  })

const {booksOwner}=values 


// replace of filter category on update
  const options = [
    { value: 'anime', label: 'anime' },
    { value: 'ciencia', label: 'ciencia' },
    { value: 'novela', label: 'novela' }

    
  ]

  const receiveBooks = async()=>{
   
     const {data}= await ApiCangular.get('/books/owner',{
      headers: {
        // Token : `Bearer ${sessionStorage.getItem('token')}`
        'Authorization': `token ${sessionStorage.getItem('token')}`
      }
    })
    if(data)
    setValues({
      ...values,
      booksOwner:data
    })
    
  }
  const filterOwner = async()=>{

    const {data}= await ApiCangular.get('/category')
   if(data)
   setValues({
     ...values,
     bookCategory:data
   })
   
 }



useEffect(() => {
  receiveBooks()
  filterOwner()

}, [])

ApiCangular.get('/books/owner',{
  headers: {
    Authorization : `Bearer ${sessionStorage.getItem('token')}`
    }
})
  const [selectedOption, setSelectedOption] = useState<any>('anime')
  return (
    <div className="container">
      <div className="container__nav">
        <div className="container__nav-title">
          <h4 className="container__nav-title__h1-text--weigh">Biblioteca</h4>
        </div>
        <div className="container__nav-user">
          <h4 className="container__nav-user__h1-name-user--weigh">{sessionStorage.getItem('user')}</h4>
        </div>
      </div>
      {/* section action fila 1 */}
      <div className="container__actions">
        <div className="container__actions__head"></div>
        <div className="container__action-body"></div>

        {/* section action fila 2 */}
        <div className="container__action-head__title">
          <div className="container__actions__head__title">
            <h2 className="container__actions__head__title__h2--width">Tus libros</h2>
          </div>
        </div>
        <div className="container__action-head__button-add">
          <div className="container__actions__head__button-add--sizen">
            <Button
              // onClick={() => toLogin(values.mail, values.pass)}
              idelement={'StartSesion'}
              children={'Agregar libro'}
              size={'small'}
              disabled={false}

              //  className={'login__footer--Button'}
            />
          </div>
        </div>

        {/* section action fila 3 */}
        <div className="container__action-body__input-search">
          <div className="container__action-body__input-search--width">
            <Input
              autofocus={true}
              errorHelper={'Contraseña no valida'}
              idElement={'Input-user'}
              label={''}
              min={5}
              placeholder={'Ej. Angular, React'}
              size={'small'}
              state={'normal'}
              value={values.inputSearch}
              name={'inputSearch'}
              eventToChange={handleInputchange}
              autoComplete={true}
            />
          </div>
        </div>
        <div className="container__action-body__select-filter">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            value={selectedOption}
            placeholder={selectedOption}
            className={'container__action-body__select-filter__options'}
          />
        </div>
      </div>
      <div className="container__main">

        <div className="container__main__body">

  {
    booksOwner?
    booksOwner.map((books:any)=>(
      <div className="container__main__body__card">
      <div className="container__main__body__card--content">
        <img src={books.image} alt="" />
      </div>
    </div>
    )):null

  }

         

     

        </div>
      </div>
    </div>
  )
}
