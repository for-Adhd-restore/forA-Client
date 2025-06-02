import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, View, Image, Alert } from 'react-native';
import { styles, text } from './OnboardingStyle';
import { ProfileStoreContext } from '@/state/signupState';
import { sendUserInfoApi } from '@/api/join/sendUserInfoApi';
import { uploadImageApi } from '@/api/image/imageApi';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';

export default function OnboardingStep1() {
    const { t } = useTranslation('login-join');
    const navigation = useNavigation();
    const profileStore = useContext(ProfileStoreContext);
    const login = useAuthStore((state) => state.login);
    const [loading, setLoading] = useState(false);
    const updateUser = useAuthStore((state) => state.updateUser);

    const gotoNextScreen = async () => {
        try {
            setLoading(true);
            const { accessToken, refreshToken } = await handleSendUserInfo();
            Alert.alert(
                '회원가입이 완료되었습니다!',
                '포에이에서 adhd 관련 정보를 알아보세요 :)',
            );
            login(accessToken, refreshToken);
        } catch (error) {
            console.error('final submit error', error);
            Alert.alert('회원가입 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleSendUserInfo = async (): Promise<{
        accessToken: string;
        refreshToken: string;
    }> => {
        try {
            let profileImageUrl = profileStore.imageUrl;
            if (profileStore.imageUrl) {
                const imagePath = await uploadImageApi(profileImageUrl); // 이미지 업로드
                profileImageUrl = imagePath;
            }

            const userInfo = {
                name: profileStore.name,
                birth:
                    profileStore.birthYearMonth.at(0) === '0'
                        ? `20${profileStore.birthYearMonth}`
                        : `19${profileStore.birthYearMonth}`,
                gender: +profileStore.gender % 2 === 0 ? 'FEMALE' : 'MALE',
                email: profileStore.email,
                password: {
                    password: profileStore.password,
                    passwordConfirm: profileStore.passwordConfirm, // 비밀번호 확인 필드
                },
                nickname: profileStore.nickname,
                profileImage: profileImageUrl,
                forAdhdType: profileStore.forAdhdType,
                termsApprovals: profileStore.termsApprovals,
                pushNotificationApprovals: [
                    {
                        pushNotificationApprovalId: 1,
                        approved: true,
                    },
                ],
            };

            const { accessToken, refreshToken } =
                await sendUserInfoApi(userInfo);
            return { accessToken, refreshToken };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error sending user info:', error.response);
            }
            throw error;
        }
    };

    return (
        <View style={styles.Onboarding}>
            <View style={styles.OnboardingContents}>
                <Text style={text.OnboardingStepText}>
                    내 약은 어떤 약일까?
                </Text>
                <Text style={text.OnboardingStepText}>
                    나의 ADHD약을
                    <Text style={{ color: '#52A55D' }}>약탭</Text>
                    에서 확인해봐!
                </Text>
                <Text style={text.OnboardingStepText}>
                    내가 복용하는 약을 리뷰하고 체크하자!
                </Text>
                <Image
                    source={require('@/public/assets/onboardingStep3Phone.png')}
                    style={styles.OnboardingStepPhone}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Image
                    source={require('@/public/assets/onboardingStep3Pagination.png')}
                    style={styles.OnboardingStepPagination}
                />
                <TouchableOpacity
                    style={[styles.nextButton, { backgroundColor: '#ffffff' }]}
                    onPress={gotoNextScreen}
                    disabled={loading}
                >
                    <Text style={[text.buttonText, { color: '#52A55D' }]}>
                        {loading ? '로딩중..' : '포에이 시작하기'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
