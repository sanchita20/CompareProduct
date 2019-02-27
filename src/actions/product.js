import * as types from '../constants/types'

  export const getProducts = () =>
    dispatch =>
      fetch(`products.json`)
        .then(response => response.json())
        .then(response => {
          console.log("resp",response)
          dispatch({
            type: types.FETCH_PRODUCTS,
            payload: response.content
          })
        })

// export const Products = () =>{
//   fetch(`products.json`)
//   .then(response => response.json())
//   .then(response => {
//   console.log("response")
    
//   })
// }

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
  })
