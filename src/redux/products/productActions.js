
import axios from 'axios'
import {
  GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR
} from './productTypes'

const getRequest = () => {
  return {
    type: GET_PRODUCTS_LOADING,
  }
}

const getRequestSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

const getRequestError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error
  }
}

export const loadProducts = (pageNo) => {
  return async (dispatch) => {
    dispatch(getRequest())
    try{
      let url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNo}`
      const response = await axios.get(url)
      console.log(response)
      dispatch(getRequestSuccess(response.data.items))
    }
    catch(error){
      dispatch(getRequestError(error.message))
    }
  }
}


