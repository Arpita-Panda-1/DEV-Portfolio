import { useState } from "react";
import API from "../services/api";

const useContact = () => {
    const [loading, setLoading] = useState(false);

    const sendMessage = async (formData: any) => {
        try {
            setLoading(true);

            const response = await API.post(
                "/contact",
                formData
            );

            return response.data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        sendMessage,
        loading,
    };
};

export default useContact;