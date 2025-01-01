const getBasicUrl = () => {
    return process.env.REACT_APP_API_URL || "http://localhost:5000";
};

export default getBasicUrl;
