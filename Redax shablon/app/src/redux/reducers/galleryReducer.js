function gallery (state=[], action) {  

    switch (action.type){
     case "DOWNLOADER":
     return [...action.data]
    default:
       return state;
    
    }
    
    }
    
    export default  gallery;