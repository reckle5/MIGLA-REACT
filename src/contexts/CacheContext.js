import { createContext, useState } from "react";

const CacheContext = createContext([]);

export const CacheProvider= ({children}) =>{

    const [cache, setCache] = useState([]);

const getFronCache = (id) => cache.find((obj) => obj.id === id);

const isInCache= (id) =>  cache.some((obj) => obj.id === id);

const addToCache = (obj) => {
    if(isInCache){
        console.warn("obj already saved")
        return;
    }else{
        setCache([...cache, obj]);
    }
}

const valueToShare = {
    getFronCache,
    isInCache,
    addToCache
}

    return(
        <CacheContext.Provider value={valueToShare}>
            {children}
        </CacheContext.Provider>
    )

}

export default CacheContext;