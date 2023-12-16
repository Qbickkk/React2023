import {Context} from "../hoc";
import {useContext} from "react";

const useChapter = () => {
    const [chapter, setChapter] = useContext(Context);
    return {
        chapter, setChapter
    }
}

export {
     useChapter
}