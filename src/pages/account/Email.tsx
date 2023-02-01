import TextButton from 'components/TextButton';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { FcApproval } from 'react-icons/fc';

import ContentLayout from './ContentLayout';

function Email() {
  const auth = getAuth();
  const { email, emailVerified } = auth.currentUser!;

  const onClickButton = () => {
    auth.useDeviceLanguage();
    sendEmailVerification(auth.currentUser!)
      .then(() => {
        alert('이메일 인증 메일이 발송되었습니다. 인증 후 새로고침을 하면 인증이 반영됩니다.');
      })
      .catch(() => {
        alert('이메일 인증 메일 발송에 실패했습니다. 다시 시도해주세요.');
      });
  };

  if (emailVerified)
    return (
      <ContentLayout>
        <div>
          이메일: {email} <FcApproval />
        </div>
        <TextButton
          color='rgb(0, 115, 232)'
          fontSize={16}
          path='reauthentication'
          state={{ path: 'email' }}
        >
          이메일 변경
        </TextButton>
      </ContentLayout>
    );

  return (
    <ContentLayout>
      <div>이메일: {email}</div>
      <TextButton color='rgb(0, 115, 232)' fontSize={16} onClick={onClickButton}>
        이메일 인증
      </TextButton>
      <TextButton
        color='rgb(0, 115, 232)'
        fontSize={16}
        path='reauthentication'
        state={{ path: 'email' }}
      >
        이메일 주소 변경
      </TextButton>
    </ContentLayout>
  );
}

export default Email;
