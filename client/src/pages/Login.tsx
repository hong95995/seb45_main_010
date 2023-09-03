import React from 'react';
import { Button } from '@material-tailwind/react';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col item-center justify-center m-[12.5px]">
      <div className="text-center font-bold text-2xl mb-4">로그인</div>
      <div className="flex flex-col item-center justify-center mx-3 py-3 bg-mint-1 rounded-lg">
        <form className="flex flex-col gap-2 p-4 m-1 rounded-lg">
          <label htmlFor="email" className="text-sm mx-2 mt-10">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border text-xs rounded-lg p-3 mx-2 h-[50px]"
            placeholder="이메일을 입력하세요"
          />
          <label htmlFor="password" className="text-sm mx-2 mt-5">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border text-xs rounded-lg p-3 mx-2 h-[50px]"
            placeholder="비밀번호를 입력하세요"
          />
          <Button
            type="submit"
            className="text-white text-xl bg-blue-1 rounded-lg shadow-lg shadow-gray-900/30 p-2 mx-2 mt-7 h-[50px] hover:bg-blue-2"
          >
            이메일 회원가입
          </Button>
        </form>
        <div className="flex item-center justify-center mb-3 p-3">
          <div className="text-xs text-gray-600 ">비밀번호찾기</div>
          <div className="text-xs text-gray-600 px-2">|</div>
          <div className="text-xs text-gray-600 pr-3">회원 가입</div>
        </div>
        <Button
          type="submit"
          className="text-xl text-black bg-koko-1 rounded-lg shadow-lg shadow-gray-900/30 p-2 mb-5 mx-7 h-[50px] hover:bg-koko-2"
        >
          카카오 회원가입
        </Button>
      </div>
    </div>
  );
};

export default Login;
