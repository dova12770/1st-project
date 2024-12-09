import '../css/LoginSignup.css'
import { useState , useRef } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom'; //navigate와 useLocation으로 컴포넌트 간 상태 전달
import Body from './Body';
import UserInfo from '../data/UserInfo';
import MyPage from '../myPage/MyPage';

function LoginPage(){

    //id, pw 값 저장 useState 변수
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');


    //id,pw input 요소 참조하는 useRef 변수
    const idInputRef = useRef(null);
    const pwInputRef = useRef(null);

    //id, pw 값 공백제거
    const trimmedId = inputId.trim();
    const trimmedPw = inputPw.trim();


    //useNavigate로 navigate 함수 정의
    const navigate = useNavigate();
    const location = useLocation();

    //signupPage에서 전달된 userList 받기
    const userList = location.state?.userList || [];

    //모달 상태 저장 useState 변수
    const [isModalOpen, setIsModalOpen] = useState(false); 

    //모달 style 조절
    const modalOpen = (isModalOpen)=>{
        const pwFindModal = document.querySelector('.md_find');

        if(isModalOpen == true){
            pwFindModal.style.display = 'block';
        }else{
            pwFindModal.style.display = 'none';
        }
    }

    //모달창 입력 ID 저장 useState 변수
    const [inputFindId, setInputFindId] = useState(''); 

    //로그인
    const login = (event) => {
        event.preventDefault();

        //입력받은 id, pw가  userList에 있는지 확인
        const matchedUser = userList.find(
            (user) => user.userId === inputId.trim() && user.userPassword === inputPw.trim()
        );

        if (matchedUser) {
            alert(`로그인 성공: ID=${matchedUser.userId}`);

            //user정보 MainPage로 전달
            <Body UserInfo= {UserInfo} />;

            // 로그인 후 MainPage로 이동하며 userList 전달
            navigate('/', { state: { userList: [...userList] } }); 

        } else {
            alert('사용자가 없습니다');
        }

        //입력 필드 초기화
        setInputId('');
        setInputPw('');

    };
    
    return(
        <div>

        <div className='container'>
                <div className='body'>
                    <h1 className='text_login'>로그인</h1>
                    <form id='frm_login'> 
                        <input type='text' value={inputId}  ref={idInputRef} placeholder='아이디를 입력해주세요' 
                        onChange={(event)=>{setInputId(event.target.value); }} //input 값 변화-> 해당 value를 pw에 저장

                        //id 유효성
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') { //엔터키가 눌렸을 때
                              event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                                if(trimmedId.length == 0 || trimmedId == '' || trimmedId == null || trimmedId == undefined) { // input 값이 공백이 아니라면
                                    alert('아이디 입력ㄱ');
                                    idInputRef.current.focus(); // name input에 focus
                                    return;
                                } else{
                                    pwInputRef.current.focus(); // 아이디 입력 필드로 포커스 이동
                                }
                            }
                        }}
                        
                        ></input> 
                        <br/>
                        <input type='password' value={inputPw} ref={pwInputRef} placeholder='비밀번호를 입력해주세요' 
                        onChange={(event)=>{setInputPw(event.target.value); }} //input 값 변화-> 해당 value를 pw에 저장
                        
                        //pw 유효성
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') { //엔터키가 눌렸을 때
                                event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                                if(trimmedPw.length == 0 || trimmedPw == '' || trimmedPw == null || trimmedPw == undefined) { // input 값이 공백이 아니라면
                                    alert('비밀번호 입력ㄱ');
                                    pwInputRef.current.focus(); // pw input에 focus
                                    return;
                                }

                                // 비밀번호가 유효하면 submit 동작 수행
                                login(event); 
                            }
                        }}
                        ></input>
                        <br/>
                        <button type='submit' className='btn_login' onClick={login}>로그인</button>
                    </form>
                    <hr/>
                    <div className='btn_logins'>
                        <button className='kakao' onClick={()=>{
                            //카카오톡 로그인 페이지(외부)로 이동
                            window.location.href = 'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F2.1.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Faccount.wadiz.kr%26auth_tran_id%3DPp1Ze7wBjbZC0-rIxSvRyG~NyeHkI0KtylJ9KRHyS0r~QRi22-2cUFnNfVlU%26response_type%3Dcode%26state%3DShcQkG_CBCwQjpo4uW7SA7dzanxMTXEUlJktQie3_HA%253D%26redirect_uri%3Dhttps%253A%252F%252Faccount.wadiz.kr%252Foauth2%252Fcallback%252Fkakao%26extra.service_terms%3Dfunding_membership%252Cfunding_use%252Cfunding_privacy%252Cfunding_marketing%252Cuser_age_check%26client_id%3Df586822258d3fb5639d800f34a618ca7%26through_account%3Dtrue&talk_login=hidden#login';
                        }}>카카오톡으로 시작하기</button>
                        <button className='naver' onClick={()=>{
                            //네이버 로그인 페이지(외부)로 이동
                            window.location.href = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=SkFRlGucmYJPrnIQPtdO&scope=READ_MY_PROFILE&state=C0JCn6IQrjGctZdo0iDvDUEPTVaO98J5H_uanCn4oOY%3D&redirect_uri=https://account.wadiz.kr/oauth2/callback/naver';
                        }}>네이버로 시작하기</button>
                    </div>
                    <br/>
                    <div className='body_bottom'>
                        <p style={{cursor: 'pointer'}} onClick={()=>{// md_find 모달창 열기
                            setIsModalOpen(true);
                            modalOpen(isModalOpen);
                        }}>비밀번호 찾기</p>
                        <p>아직 계정이 없으신가요? <span style={{fontWeight : 'bold' , cursor: 'pointer'}} 
                            onClick={() => navigate('/signup')}> 회원가입 </span> </p>
                    </div>
                </div>

                {/* 모달창 */}
                <div className='md_find'>
                    <button className='close_md_find' onClick={()=>{ // md_find 모달창 닫기
                        setIsModalOpen(false);
                        modalOpen(isModalOpen);
                    }}>X</button>
                    <h1 className='text_fingPw'> 비밀번호 찾기</h1>
                    <form id='frm_find'>
                        <input className='input_find' value={inputFindId} placeholder='아이디를 입력하세요'
                                onChange={(e) => setInputFindId(e.target.value)}></input>
                        <button className='btn_find' onClick={()=>{
                            //입력받은 id가  userList에 있는지 확인
                            const matchedUser = userList.find( (user) => user.userId === inputFindId.trim() );
                            if (matchedUser) {
                                alert(`비밀번호 =${matchedUser.userPassword}`);
                            }else{
                                alert('사용자가 없습니다');
                            }
                            setInputFindId(''); // 입력 필드 초기화
                        }}>찾기</button>
                        
                    </form>
                </div>
                
            </div>

        </div>
    );

}

export default LoginPage;