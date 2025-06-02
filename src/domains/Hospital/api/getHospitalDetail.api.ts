import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../api/login/loginApi';

type getHospitalDetailVariables = {
    hospitalId: string;
    latitude: number;
    longitude: number;
};
// export const getHospitalDetail = async ({
//     hospitalId,
//     latitude,
//     longitude,
// }: getHospitalDetailVariables) => {
//     console.log('뭐여', hospitalId, latitude, longitude);
//     const { data } = await apiClient.get(
//         `/hospitals/${hospitalId}?latitude=${latitude}&longitude=${longitude}`,
//     );
//     console.log('병원 상세 응답', JSON.stringify(data, null, 2));
//     return data;
// };
export const getHospitalDetail = async ({
    hospitalId,
    latitude,
    longitude,
}: getHospitalDetailVariables) => {
    console.log('뭐여', hospitalId, latitude, longitude);
    try {
        const { data } = await apiClient.get(
            `/hospitals/${hospitalId}?latitude=${latitude}&longitude=${longitude}`,
        );
        console.log('병원 상세 응답', JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('병원 상세 API 호출 실패:', error);
        throw error; // useQuery에서 onError로 전달
    }
};

export const useHospitalDetail = ({
    hospitalId,
    latitude,
    longitude,
}: getHospitalDetailVariables) => {
    return useQuery({
        // queryKey: ['hospitalDetail', hospitalId],
        queryKey: ['hospitalDetail', hospitalId, latitude, longitude],
        queryFn: () => getHospitalDetail({ hospitalId, latitude, longitude }),
        staleTime: 30 * 60 * 1000,
        onError: (error) => {
            console.error('병원 상세 정보 불러오기 실패:', error);
        },
    });
};
