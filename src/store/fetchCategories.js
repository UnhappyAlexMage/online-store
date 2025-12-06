

export const fetchCategories = () => async(dispatch) => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        if(!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const categoriesJson = await response.json();
        dispatch({
            type: 'categories/name',
            payload: categoriesJson
        }) 
    } catch(error) {
        dispatch({
            type: 'categories/error',
            payload: error.massage
        });
    }
};