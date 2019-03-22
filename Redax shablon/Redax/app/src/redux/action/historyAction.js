export const addObj = (text) => ({
   type: "CREATE",
   data:  {
       id: Date.now(),
       content: text,
   } 
})

export const clear = () => ({
    type: "CLEAR",
 })
 

