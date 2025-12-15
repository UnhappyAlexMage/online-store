import { useState } from "react";

const useProductsVisibility = (initialCountTrending = 5, initialCountLess = 15) => {
    const [visibleCountTrending, setVisibleCountTrending] = useState(initialCountTrending);
    const [visibleCountLess, setVisibleCountLess] = useState(initialCountLess);

    const setShowListTrending = () => { setVisibleCountTrending(10) };
    const setHideListTrending = () => { setVisibleCountTrending(5) };
    const setShowListLess = () => { setVisibleCountLess(20) };
    const setHideListLess = () => { setVisibleCountLess(15) };

    return {
        visibleCountTrending,
        visibleCountLess,
        setShowListTrending,
        setHideListTrending,
        setShowListLess,
        setHideListLess
    };
};

export default useProductsVisibility;