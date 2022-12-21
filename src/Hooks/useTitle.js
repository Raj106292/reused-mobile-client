import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - RD's Photography`;
    }, [title])
}

export default useTitle;