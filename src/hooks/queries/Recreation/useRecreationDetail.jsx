import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import recreationAPI from '../../../apis/recreationAPI';
import { useSignOut } from '../Auth/useSignOut';

const useRecreationDetail = (id, token) => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const lodgingDetailQuery = useQuery(['lodging', id], () => recreationAPI.detail(id, token), {
    onError: (error) => {
      if (error.response.data.detail === '토큰이 유효하지 않습니다.') {
        signOut();
        navigate('/signin');
      }
    },
  });
  return { lodgingDetailQuery };
};

export default useRecreationDetail;
