import { URL } from '../utilities/constant'


export const getApiData = (setMediaData) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => { setMediaData(data?.entries) })
      .catch(error => console.error("error", error))
  }