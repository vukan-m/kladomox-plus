import React, { useEffect, useState } from 'react'
import Loaded from '../components/loaded'
import Loading from '../components/loading'

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return <div>{loading ? <Loading /> : <Loaded />}
    </div>
}

export default Loader;