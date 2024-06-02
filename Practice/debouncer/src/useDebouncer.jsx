import { useEffect, useState } from "react";

 function useDebouncer(inputValue, delay) {
    const [debouncedValue, setDebouncedValue] = useState(inputValue)
    
    useEffect(() => {
        const clear = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, delay);

        return () => {
            clearTimeout(clear)
        }

    }, [inputValue])

    return debouncedValue
 }

 export default useDebouncer