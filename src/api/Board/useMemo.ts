import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import useUserInfo from '../../store/UserInfo';

const useMemo = () => {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  const cookies = new Cookies();
  const { setBgNum, setBoardName, setIsSelf } = useUserInfo();
  const { id } = useParams<{ id: string }>();
  const token = cookies.get('access_token');

  const board = async (): Promise<{ bg_num: number; board_name: string; is_self: boolean } | undefined> => {
    if (!id) {
      console.error('보드 ID 누락');
      return undefined;
    }

    try {
      const response = await axios.get(`${apiUrl}/board/${id}`, {
        params: { board_id: id, token },
      });

      const { bg_num, board_name, is_self } = response.data.data;

      // Zustand 상태 업데이트
      setBgNum(bg_num);
      setBoardName(board_name);
      setIsSelf(is_self);

      console.log(`배경 번호: ${bg_num}, 보드 이름: ${board_name}`);
      return { bg_num, board_name, is_self };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || '칠판 불러오기 실패');
      } else {
        console.error('예상치 못한 오류:', error);
        alert('예상치 못한 오류 발생');
      }
    }
  };

  return board;
};

export default useMemo;