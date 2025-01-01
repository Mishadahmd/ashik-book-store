const getBasicUrl = () => {
    return import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";
};

export default getBasicUrl;
