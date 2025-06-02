import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, text } from './SignupTermsScreenStyle';
import TermsAgreement from './TermsAgreement';
import PrivacyConsent from './PrivacyConsent';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useAuthStore } from '@/store/authStore';

const SignupTermsScreen = () => {
    const route = useRoute();
    const loginUpdate = useAuthStore((state) => state.login);
    const navigation = useNavigation();

    useEffect(() => {
        const params = route.params as {
            accessToken?: string;
            refreshToken?: string;
        };

        if (params?.accessToken && params?.refreshToken) {
            loginUpdate(params.accessToken, params.refreshToken);
        }
    }, [route.params]);

    const [checkedItems, setCheckedItems] = useState({
        all: false,
        service: false,
        privacy: false,
        age: false,
        marketing: false,
    });

    const [showTermsAgreement, setShowTermsAgreement] = useState(false);
    const [showPrivacyConsent, setShowPrivacyConsent] = useState(false);

    const handleToggle = (key: keyof typeof checkedItems) => {
        const updated = { ...checkedItems, [key]: !checkedItems[key] };

        // 전체동의 눌렀을 때 나머지 모두 토글
        if (key === 'all') {
            const newValue = !checkedItems.all;
            updated.service = newValue;
            updated.privacy = newValue;
            updated.age = newValue;
            updated.marketing = newValue;
        } else {
            // 전체동의는 나머지 체크 상태 따라감
            updated.all =
                updated.service &&
                updated.privacy &&
                updated.age &&
                updated.marketing;
        }

        setCheckedItems(updated);
    };

    const renderCheck = (checked: boolean) => (
        <Image
            source={
                checked
                    ? require('@/public/assets/check-icon.png')
                    : require('@/public/assets/checkbox-icon.png')
            }
            style={styles.checkboxIcon}
        />
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image
                        source={require('@/public/assets/goback.png')}
                        style={styles.goback}
                    />
                </Pressable>
                <View style={styles.images}>
                    <Image
                        source={require('@/public/assets/forA_green.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('@/public/assets/signup.png')}
                        style={styles.icon}
                    />
                </View>
                <Text style={text.subtitle}>회원가입을 위한 필수약관에</Text>
                <Text style={text.subtitle}>동의해 주세요</Text>

                <View style={styles.allAgree}>
                    <Pressable
                        style={styles.item}
                        onPress={() => handleToggle('all')}
                    >
                        {renderCheck(checkedItems.all)}
                        <Text style={text.itemText}>전체동의</Text>
                    </Pressable>
                </View>

                <View style={styles.separator} />

                <Pressable
                    style={styles.item}
                    onPress={() => handleToggle('service')}
                >
                    {renderCheck(checkedItems.service)}
                    <Text style={text.itemText}>
                        서비스 이용 약관 동의{' '}
                        <Text style={text.requiredText}>(필수)</Text>
                    </Text>
                    <Pressable onPress={() => setShowTermsAgreement(true)}>
                        <Text style={text.linkText}>내용 보기</Text>
                    </Pressable>
                </Pressable>

                <Pressable
                    style={styles.item}
                    onPress={() => handleToggle('privacy')}
                >
                    {renderCheck(checkedItems.privacy)}
                    <Text style={text.itemText}>
                        개인정보 수집 및 이용 동의{' '}
                        <Text style={text.requiredText}>(필수)</Text>
                    </Text>
                    <Pressable onPress={() => setShowPrivacyConsent(true)}>
                        <Text style={text.linkText}>내용 보기</Text>
                    </Pressable>
                </Pressable>

                <Pressable
                    style={styles.item}
                    onPress={() => handleToggle('age')}
                >
                    {renderCheck(checkedItems.age)}
                    <Text style={text.itemText}>
                        만 12세 이상 확인{' '}
                        <Text style={text.requiredText}>(필수)</Text>
                    </Text>
                </Pressable>

                <Pressable
                    style={styles.item}
                    onPress={() => handleToggle('marketing')}
                >
                    {renderCheck(checkedItems.marketing)}
                    <Text style={text.itemText}>
                        마케팅 정보 수신 동의 (선택)
                    </Text>
                </Pressable>
            </ScrollView>
            <Pressable style={styles.button}>
                <Text style={text.buttonText}>다음</Text>
            </Pressable>
            {showTermsAgreement && (
                <TermsAgreement onClose={() => setShowTermsAgreement(false)} />
            )}
            {showPrivacyConsent && (
                <PrivacyConsent onClose={() => setShowPrivacyConsent(false)} />
            )}
        </View>
    );
};

export default SignupTermsScreen;
