import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsClothes } from '../../store/fetchApiThunk.js';

import useProductsVisibility from '../../hooks/useProductsVisibility.js';

import PromoBanner from '../../components/promoBanner/PromoBanner.jsx';
import GetProductsSection from '../../components/ProductsList/GetProductsSection.jsx';
import RecommendedProducts from '../../components/ProductsRecomemnded/RecommendedProducts.jsx';

export default function HomePage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsClothes());
    }, [dispatch]);

    let dataSection = {
        titleTrending: "Trending",
        titleLess: "Less than 100$",
    };

    const trendingVisibility = useProductsVisibility(5, 15);
    const { visibleCountTrending,
            visibleCountLess,
            setShowListTrending: setTrendTen, 
            setHideListTrending: setTrendFive,
            setShowListLess: setTrendTwenty,
            setHideListLess: setTrendFifteen
    } = trendingVisibility;

    const productList = useSelector(state => state.products.ProductsClothes) || [];
    const productsLimitedTrending = productList.slice(0, visibleCountTrending);
    const productsLimitedLess = productList.slice(10, visibleCountLess);
    
    return(
        <Fragment>
            <GetProductsSection
                title={dataSection.titleTrending}
                productsLimited={productsLimitedTrending}
                visibleCount={visibleCountTrending}
                onShowClick={setTrendTen}
                onHideClick={setTrendFive}
                isClicked={props.isClicked}
            />
            <RecommendedProducts />
            <PromoBanner />
            <GetProductsSection
                title={dataSection.titleLess}
                productsLimited={productsLimitedLess}
                visibleCount={visibleCountLess}
                onShowClick={setTrendTwenty}
                onHideClick={setTrendFifteen}
                isClicked={props.isClicked}
            />
        </Fragment>
    );
}
