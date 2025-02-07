import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { user } from 'services/user';

function VerifyEmail({ success }: { success: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (success) {
      toast.success('Email verified!');
    } else {
      toast.error('Failed to verify email.');
    }

    router.push('/');
  }, [success]);

  return null;
}

VerifyEmail.getInitialProps = async ({ storeMap, query }) => {
  let success: boolean;

  try {
    await user.verifyEmail({ token: query.token }, { storeMap });
    success = true;
  } catch(error) {
    success = false;
  }

  return {
    success
  };
}

export default VerifyEmail;
