import React, { useRef, useMemo } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Pressable,
} from 'react-native';
import { styles, text } from './PrivacyConsentStyle';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const TermsModal = ({ onClose }) => {
    const sheetRef = useRef(null);
    const snapPoints = useMemo(() => ['42%', '85%'], []);

    const tableData = [
        {
            item: '이름',
            detail: '실명 확인 없음',
            retention: '탈퇴 시 삭제',
            disposal: '빈 문자열로 초기화',
        },
        {
            item: '생년월일',
            detail: '검증 없음',
            retention: '탈퇴 시 삭제',
            disposal: '1970년 1월 1일로 초기화',
        },
        {
            item: '성별',
            detail: '검증 없음',
            retention: '탈퇴 시 삭제',
            disposal: '알 수 없음(unknown)으로 초기화',
        },
        {
            item: '이메일',
            detail: '이메일 회원가입으로 인증 번호를 받아옴',
            retention: '탈퇴 시 삭제',
            disposal: '삭제',
        },
        {
            item: '프로필 이미지',
            detail: '',
            retention: '탈퇴 시 삭제',
            disposal: '빈 문자열로 초기화',
        },
        {
            item: 'ADHD 타입',
            detail: '본인이 ADHD 의심이 되거나 앓고 있는 경우/자녀가 ADHD 의심이 되거나 앓고 있는 경우/주변에서 ADHD를 앓고 있는 경우 중 한 가지 선택',
            retention:
                '유지 (포에이 앱 사용자의 ADHD 타입 비율을 추적하기 위함.',
            disposal: '',
        },
        {
            item: '소셜 로그인 정보',
            detail: '제공자 타입(Naver, Google, Apple), 제공자 식별 ID(ex. 네이버 유저 ID)',
            retention: '탈퇴 시 삭제',
            disposal: '삭제',
        },
        {
            item: '이용약관 동의 여부',
            detail: '',
            retention: '탈퇴 시 삭제',
            disposal: '삭제',
        },
        {
            item: '푸시알림 동의 여부',
            detail: '',
            retention: '탈퇴 시 삭제',
            disposal: '삭제',
        },
        {
            item: '디바이스 정보',
            detail: '모델명, 디바이스 ID, 디바이스 토큰, OS타입, OS버전 정보',
            retention: '탈퇴 시 삭제',
            disposal: '삭제',
        },
        {
            item: '서비스 이용기록',
            detail: 'ID 주소, 로그인 시간 및 서비스 이용 기록',
            retention: '탈퇴 30일 후 삭제',
            disposal: '삭제',
        },
        {
            item: '위도, 경도, 도로명 주소',
            detail: '앱 사용 중 일시적으로 수집, 서버 저장 없음',
            retention: '앱 종료 시 즉시 삭제',
            disposal: '삭제',
        },
    ];

    return (
        <View style={styles.overlay}>
            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onClose={onClose}
                enablePanDownToClose
                handleComponent={null}
            >
                <BottomSheetView style={[styles.modalContainer, { flex: 1 }]}>
                    <View style={styles.header}>
                        <Image
                            source={require('@/public/assets/agreeTop.png')}
                            style={styles.agreeTop}
                        />
                        <Text style={text.headerText}>
                            개인정보 수집 및 이용 동의
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            style={styles.content}
                            contentContainerStyle={{ paddingBottom: 50 }}
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={text.bodyTitle}>
                                포에이는 이용자의 개인정보를 매우 중요하게
                                생각하며 정보 통신서비스 제공자가 준수하여야
                                하는 관련 법령 및 규정을 준수하고 있습니다.
                                {'\n'}본 개인정보처리방침은 포에이의 앱에
                                적용되며, 다음과 같은 내용을 담고 있습니다.
                            </Text>
                            <Text style={styles.body}>
                                1. 개인정보의 수집 및 이용 목적 {'\n'}
                                2. 수집하는 개인정보의 항목, 특징, 보유기간 및
                                파기방법 {'\n'}
                                3. 개인정보의 제3자 제공 {'\n'}
                                4. 이용자 및 법정대리인의 권리 {'\n'}
                                5. 링크 사이트에 대한 책임 {'\n'}
                                6. 개인정보 보호를 위한 기술적/관리적 보호 대책{' '}
                                {'\n'}
                                7. 개인정보 보호책임자 및 담당부서 {'\n'}
                                8. 개인정보처리방침의 고지 의무 {'\n'}
                                9. 개정 이력
                            </Text>
                            <Text style={text.title}>
                                1. 개인정보 수집 및 이용 목적
                            </Text>
                            <Text style={styles.body}>
                                서비스 제공을 위한 최소한의 개인정보를 수집하고
                                있습니다. {'\n'}
                                수집된 개인정보는 회원 관리, 신규 서비스 개발,
                                온라인 맞춤형 광고 등에 활용됩니다.
                            </Text>
                            <Text style={text.title}>
                                2. 수집하는 개인정보 항목 및 수집 방법
                            </Text>
                            <View style={{ marginVertical: 16 }}>
                                {/* 헤더 */}
                                <View style={styles.headerTable}>
                                    <Text style={[styles.cell, { flex: 1 }]}>
                                        수집 항목
                                    </Text>
                                    <Text style={[styles.cell, { flex: 2 }]}>
                                        특징
                                    </Text>
                                    <Text style={[styles.cell, { flex: 2 }]}>
                                        수집 보유 기간
                                    </Text>
                                    <Text style={[styles.cell, { flex: 2 }]}>
                                        파기 방법
                                    </Text>
                                </View>
                                {/* 데이터 */}
                                {tableData.map((row, index) => (
                                    <View key={index} style={styles.dataTable}>
                                        <Text
                                            style={[styles.cell, { flex: 1 }]}
                                        >
                                            {row.item}
                                        </Text>
                                        <Text
                                            style={[styles.cell, { flex: 2 }]}
                                        >
                                            {row.detail}
                                        </Text>
                                        <Text
                                            style={[
                                                styles.cell,
                                                { flex: 2, flexWrap: 'wrap' },
                                            ]}
                                        >
                                            {row.retention}
                                        </Text>
                                        <Text
                                            style={[
                                                styles.cell,
                                                { flex: 2, flexWrap: 'wrap' },
                                            ]}
                                        >
                                            {row.disposal}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                            <Text style={text.subtitle}>
                                ■ 개인정보 보유 및 이용기간
                            </Text>
                            <Text style={styles.body}>
                                ① 이용자의 개인정보는 원칙적으로 개인정보의 수집
                                및 이용 목적이 달성되면 지체 없이 파기합니다.
                                회원 탈퇴를 요청하거나 개인정보의 수집 및 이용에
                                대한 동의를 철회하는 경우, 수집 및 이용목적이
                                달성되거나 보유 및 이용기간이 종료한 경우 해당
                                개인정보를 지체 없이 파기합니다. 단, 관계법령의
                                규정에 의하여 보존할 필요가 있는 경우 회사는
                                아래와 같이 관계법령에서 정한 일정한 기간 동안
                                회원정보를 보관합니다.
                            </Text>
                            <Text style={text.subtitle}>
                                ■ 개인정보의 공유 및 제공
                            </Text>
                            <Text style={styles.body}>
                                ① 회사는 이용자의 개인정보를 「개인정보의 수집
                                및 이용목적」에서 고지한 범위 내에서 사용하며,
                                이용자의 사전 동의 없이 이용자의 개인정보를
                                외부에 공개하지 않습니다. {'\n'}② 회사는
                                서비스제공자의 권리와 의무가 완전 승계, 이전되는
                                경우 반드시 사전에 정당한 사유와 절차에 대해
                                이용자에게 상세하게 고지하며 이용자의 개인정보에
                                대한 동의 철회의 선택권을 부여합니다. {'\n'}③
                                다음은 예외로 합니다.{'\n'}• 법령의 규정에
                                의거하거나, 수사 목적으로 법령에 정해진 절차와
                                방법에 따라 수사기관의 요구가 있는 경우{'\n'}•
                                서비스의 제공에 관한 계약의 이행을 위하여 필요한
                                개인정보로서 경제적/기술적인 사유로 통상의
                                동의를 받는 것이 현저히 곤란한 경우{'\n'}•
                                통계작성, 학술연구나 시장조사를 위하여 특정
                                개인을 식별할 수 없는 형태로 광고주, 협력사나
                                연구단체 등에 제공하는 경우
                                {'\n'}
                            </Text>
                            <Text style={text.title}>
                                3. 개인정보의 제3자 제공
                            </Text>
                            <Text style={styles.body}>
                                포에이는 이용자의 개인정보를 별도 동의가 있는
                                경우(이벤트 참여 시)나 법령에 규정된 경우를
                                제외하고는 제3자에게 제공하지 않습니다.
                            </Text>
                            <Text style={text.title}>
                                4. 이용자 및 법정대리인의 권리
                            </Text>
                            <Text style={styles.body}>
                                이용자 또는 법정대리인은 포에이에 대해 언제든지
                                자신 혹은 만 14세 미만 아동의 개인정보 보호 관련
                                권리를 행사할 수 있습니다. 이용자 또는
                                법정대리인은 포에이의 개인정보 처리에 동의하지
                                않는 경우 동의 철회 혹은 회원 탈퇴를 요청할 수
                                있습니다. 단, 이 경우 서비스의 일부 또는 전부의
                                이용이 어려울 수 있습니다.{'\n'}개인정보 조회,
                                수정을 위해서는 서비스 내 “MY”의  “계정설정” 을,
                                회원탈퇴를 위해서는 서비스 내 "회원탈퇴" 를
                                누르면 됩니다. 개인정보 조회 및 수정은 본인 확인
                                절차를 거치고 직접 열람, 정정이 가능합니다.
                                {'\n'}혹은 개인정보 보호책임자에게 서면 또는
                                이메일로 연락하시면 지체 없이 조치하겠습니다.
                                {'\n'}이용자가 개인정보의 오류에 대한 정정을
                                요청하는 경우에는 정정을 완료하기 전까지 당해
                                개인정보를 이용 또는 제공하지 않습니다. 또한
                                잘못된 개인정보를 제3자에게 이미 제공한 경우에는
                                정정 처리결과를 제3자에게 지체 없이 통지하여
                                정정이 이루어지도록 하겠습니다.
                                {'\n'}포에이는 이용자 또는 법정 대리인의 요청에
                                의해 해지 또는 삭제된 개인정보는 열람 또는
                                이용할 수 없도록 처리하고 있습니다.
                            </Text>
                            <Text style={text.title}>
                                5. 링크 사이트에 대한 책임
                            </Text>
                            <Text style={styles.body}>
                                포에이는 이용자에게 다른 웹사이트에 대한 링크를
                                제공할 수 있습니다. 그러나 링크 웹사이트들은
                                포에이의 개인정보처리방침이 적용되지 않으므로,
                                해당 링크를 통해 외부 웹사이트로 이동하시는
                                경우, 해당 서비스의 정책을 검토하시기 바랍니다.
                            </Text>
                            <Text style={text.title}>
                                6. 개인정보 보호를 위한 기술적/관리적 보호 대책
                            </Text>
                            <Text style={styles.body}>
                                포에이는 이용자들의 개인정보 보호를 위해 다음과
                                같은 기술적/관리적 노력을 하고 있습니다.{'\n'}
                                [개인정보 암호화]{'\n'}
                                이용자의 비밀번호 등 중요정보는 암호화되어 저장,
                                관리되고 있으며, 개인정보의 확인 및 변경은
                                본인에 의해서만 가능합니다.
                            </Text>
                            <Text style={text.title}>
                                7. 개인정보 보호책임자 및 담당부서
                            </Text>
                            <Text style={styles.body}>
                                이용자는 포에이의 서비스를 이용하는 중 발생하는
                                모든 개인정보 관련 문의, 불만처리 등에 관한
                                사항을 개인정보 보호책임자 혹은 담당부서로
                                문의할 수 있습니다. 포에이는 이용자의 문의에
                                대한 신속하고 성실한 답변 및 처리를 위해
                                노력하고 있습니다.{'\n'}[ 개인정보 보호책임자 ]
                                {'\n'}
                                개인정보 보호책임자: 박세진
                                {'\n'}
                                이메일주소: foradhd2024@gmail.com
                                {'\n'}
                                기타 개인정보침해에 대한 신고나 상담이 필요하신
                                경우에는 아래 기관으로 문의하시기 바랍니다.
                                {'\n'}
                                개인정보침해신고센터, 개인정보 분쟁조정위원회
                                (privacy.kisa.or.kr / 국번없이 118)
                                {'\n'}
                                대검찰청 사이버수사과 (www.spo.go.kr /
                                02-3480-3571)
                                {'\n'}
                                전화번호: 02-501-6245
                                {'\n'}
                                경찰청 사이버테러대응센터 (www.ctrc.go.kr /
                                1566-0112)
                            </Text>
                            <Text style={text.title}>
                                8. 개인정보처리방침의 고지 의무
                            </Text>
                            <Text style={styles.body}>
                                포에이는 개인정보처리방침에 대한 변경이 있을
                                경우에는 개정 개인정보처리방침의 시행일로부터
                                최소 7일 전에 앱의 공지사항 또는 이메일을 통해
                                고지합니다. 또한 필요 시 이용자 동의를 다시 받을
                                수도 있습니다.
                            </Text>
                            <Text style={text.title}>9. 개정이력</Text>
                            <Text style={styles.body}>
                                개인정보처리방침 버전: v1.0.0
                                {'\n'}
                                개인정보처리방침 공고일 : 2025년 3월 21일
                                {'\n'}
                                개인정보처리방침 시행일 : 2025년 3월 21일
                                {'\n'}※ 동의를 거부할 권리 및 동의를 거부할
                                경우의 불이익
                                {'\n'}
                                이용자는 위의 개인정보 수집 및 이용에 대한
                                동의를 거부할 권리가 있으나 동의를 거부할 경우
                                회사의 서비스 제공 제한 등 불이익을 받을 수
                                있습니다.
                                {'\n'}
                            </Text>
                        </ScrollView>
                        <View style={styles.footer}>
                            <Text style={text.footer}>
                                포에이 | 대표 : 박세진 | 사업자등록번호 :
                                828-66-00670{'\n'}
                                이메일 : foradhd2024@gmail.com{'\n'}
                                주소 : 서울시 용산구 청파로 47길 90 창업보육센터
                                B201
                            </Text>
                        </View>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

export default TermsModal;
