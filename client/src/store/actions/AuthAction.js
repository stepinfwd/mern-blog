import axios from "axios"
export const postRegister=(state)=>{
    return async(dispatch)=>
    {
      dispatch({ type: "SET_LOADER" });
      console.log("entru done")
      const config = {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          "Content-Type": "application/json",
        },
      };
  
      try {
        const response = await axios.post("/register", state);
        dispatch({ type: "CLOSE_LOADER" });
  
        console.log("response is ", response);
  
        // axios.post("/register", state)
        // .then((response) => {
        //  console.log("response is ", response.data.msg)
  
        // })
      } catch (error) {
        dispatch({ type: "CLOSE_LOADER" });
  
        dispatch({ type: "REGISTER_ERRORS", payload: error});
  
        console.log("what us error",error.response.data.errors);
  
      }
    }
}