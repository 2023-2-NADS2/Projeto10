import axios from 'axios';

const baseUrl = 'https://mais-amor-sp-api.onrender.com/desejos';

export const fetchSonhos = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar sonhos:', error);
        throw error;
    }
};

export const createSonho = async (formData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(baseUrl, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar sonho:', error);
        throw error;
    }
};

export const updateSonho = async (id, sonho) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${baseUrl}/${id}`, sonho, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar sonho:', error);
        throw error;
    }
};

export const deleteSonho = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${baseUrl}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar sonho:', error);
        throw error;
    }
};
