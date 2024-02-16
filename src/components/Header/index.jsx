import { useState, useEffect } from 'react';
import { getUserSample, getUser } from '../../api/api';
import * as S from './style'; // style.js 파일의 내용을 가져옵니다.

export const Header = ({ isSticky }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData;
        if (window.location.pathname === '/shared') {
          userData = await getUserSample();
        } else if (window.location.pathname === '/folder') {
          userData = await getUser();
        }
        setUser(userData?.data[0] || {});
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Header isSticky={isSticky}>
      <S.Nav>
        <S.LinkbraryIcon href="/">
          <img src="/images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </S.LinkbraryIcon>
        {user.email ? (
          <S.HeaderProfile>
            <img src={user.image_source} width="28" alt="프로필 이미지" />
            <S.UserEmail>{user.email}</S.UserEmail>
          </S.HeaderProfile>
        ) : (
          <S.HeaderBtnLogin href="/signin">로그인</S.HeaderBtnLogin>
        )}
      </S.Nav>
    </S.Header>
  );
};
