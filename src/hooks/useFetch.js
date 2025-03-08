import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const initialState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    }
    const [state, setState] = useState(initialState)
    useEffect(() => {
        getFectch()

    }, [url]);
    const setInitalstate = () => {
        setState(initialState)
    }
    const getFectch = async() => {
       setInitalstate();
       const response = await fetch(url)

       await new Promise(resolve=> setTimeout(resolve, 2000))

       if(!response.ok) {
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: response.status,
                message: response.statusText
            }

        })
        return;
       }
       const data = await response.json()
       setState({
        data: data,
        hasError: false,
        isLoading: false,
        error: null
       })
       console.log(data);

    }
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
