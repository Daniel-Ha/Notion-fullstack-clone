import { useState, useEffect} from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        
        //if the window's scroll position is beyond 10, mark that the page has been "scrolled"
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}
 