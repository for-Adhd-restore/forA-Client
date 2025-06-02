import { apiClient } from '../login/loginApi';
import { API_URL } from '@env';
import userStore from '@/store/userStore/userStore';

export const getReport = async () => {
    try {
        const response = await apiClient.get(`${API_URL}/api/v1/posts/report`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postHandleReport = async (
    postId: number,
    handleReportType: 'CLEAN' | 'DAY_2_PAUSE' | 'DAY_ALL_PAUSE' | 'POST_DELETE',
) => {
    try {
        const url = `${API_URL}/api/v1/posts/handleReport`;
        const response = await apiClient.post(
            url,
            {
                postId,
                handleReportType,
            },
            {
                headers: {
                    Authorization: `Bearer ${userStore.accessToken}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        console.log('a신고 처리 응답:', response.data);
        return response.data;
    } catch (error) {
        console.error('신고 처리 에러:', error.response?.data || error.message);
        throw error;
    }
};
