import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const ScrollToTop = (props) => {

    let location = useNavigate ();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return props.children;
}

export default ScrollToTop;
