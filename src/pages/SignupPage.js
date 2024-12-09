import '../css/LoginSignup.css'
import { useState , useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import  UserInfo from '../data/UserInfo.js';



function SignupPage(){

    //name, id, pw 값 저장 useState 변수
    const [userName, setUserName]= useState('');
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    //user 정보 저장 list
    const [userList, setUserList] = useState(UserInfo);

    //name, id,pw input 요소 참조하는 useRef 변수
    const userNameInputRef = useRef(null);
    const userIdInputRef = useRef(null);
    const userPwInputRef = useRef(null);

    //name, id, pw 값 공백제거
    const trimmedName = userName.trim();
    const trimmedId = userId.trim();
    const trimmedPw = userPw.trim();

    //유효성 정규식
    const nameRegex = /^[가-힣a-zA-Z]{2,}$/; // 최소 2자, 한글 또는 영문
    const idRegex = /^[a-zA-Z0-9]{4,}$/;   // 최소 5자, 영문+숫자
    const pwRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 최소 8자, 소문자, 숫자, 특수문자가 모두 포함되어야 함

    //유효성 검사
    const nameValid = (trimmedName)=>{
        if(trimmedName.length == 0 || trimmedName == '' || trimmedName == null || trimmedName == undefined) { // input 값이 공백이 아니라면
            alert('이름 입력ㄱ');
            userNameInputRef.current.focus(); // name input에 focus
            return false;
        } else{
            if (!nameRegex.test(trimmedName)) { //input 값이 정규식과 일치하지 않는다면
                alert('이름은 최소 2자, 한글/영문만 입력 가능합니다.');
                userNameInputRef.current.focus();   // 다시 이름 입력 필드로 포커스 이동
                return false;
            }else{
                userIdInputRef.current.focus(); // 아이디 입력 필드로 포커스 이동
                return true;
            }
            
        }
    }
    const idValid = (trimmedId)=>{
        if(trimmedId.length == 0 || trimmedId == '' || trimmedId == null || trimmedId == undefined) { // input 값이 공백이 아니라면
            alert('아이디 입력ㄱ');
            userIdInputRef.current.focus(); // name input에 focus
            return false;
        } else{
            if (!idRegex.test(trimmedId)) { //input 값이 정규식과 일치하지 않는다면
                alert('아이디는 최소 5자, 영문과 숫자만 입력 가능합니다.');
                userIdInputRef.current.focus(); // 다시 아이디 입력 필드로 포커스 이동
                return false;
            }else{
                userPwInputRef.current.focus(); // 비밀번호 입력 필드로 포커스 이동
                return true;
            }
        }
    }
    const pwValid = (trimmedPw, event)=>{
        if(trimmedPw.length == 0 || trimmedPw == '' || trimmedPw == null || trimmedPw == undefined) { // input 값이 공백이 아니라면
            alert('비밀번호 입력ㄱ');
            userPwInputRef.current.focus(); // pw input에 focus
            return false;
        } else{
            if (!pwRegex.test(trimmedPw)) { //input 값이 정규식과 일치하지 않는다면
                alert('비밀번호는 최소 8자, 소문자, 숫자, 특수문자를 포함해야 합니다.');
                userPwInputRef.current.focus(); // 다시 비밀번호 입력 필드로 포커스 이동
                return false;
            }else{
                return true;
            }
        }
    }

    // useNavigate로 navigate 함수 정의
    const navigate = useNavigate();

    //회원가입 기능
    const signup = (event)=>{
        event.preventDefault(); 

        // userList에 새로운 사용자 추가
        const newUser = {
            userName: trimmedName,
            userId: trimmedId,
            userPassword: trimmedPw,
        };
        
        //user 정보 저장
        const updateUserList = [...userList, newUser]; 
        setUserList(updateUserList); //상태 업데이트
        UserInfo.splice(0,UserInfo.length, ...updateUserList); // UserInfo를 userList로 동기화

        //로그인 성공
        alert(`회원가입 성공: 이름=${trimmedName}, ID=${trimmedId}, PW=${trimmedPw}`);

        //입력 필드 초기화
        setUserName('');
        setUserId('');
        setUserPw('');
        
        //user정보 LoginPage로 전달
        <LoginPage UserInfo= {UserInfo} />
        
        // 회원가입 후 LoginPage로 이동하며 userList 전달
        navigate('/login', { state: { userList: [...userList, newUser] } }); 
    }
    
    return(
        <div>
            
            <div className='container'>
                <div className='body'>
                    <h1 className='text_signup'>회원가입</h1>
                    <form id='frm_login'> 
                        <input type='text' value={userName}  ref={userNameInputRef} placeholder='이름을 입력해주세요' 
                            onChange={(event)=>{setUserName(event.target.value);}}   //input 값 변화-> 해당 value를 name에 저장 
                            
                            //name 유효성
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') { //엔터키가 눌렸을 때
                                    event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                                    nameValid(trimmedName);
                                }
                            }}
                            
                        ></input>
                        <br/>
                        <input type='text' value={userId}  ref={userIdInputRef} placeholder='아이디를 입력해주세요' 
                            onChange={(event)=>{setUserId(event.target.value);}}  //input 값 변화-> 해당 value를 id에 저장

                            //id 유효성
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') { //엔터키가 눌렸을 때
                                    event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                                    idValid(trimmedId);
                                }
                            }}
                        ></input>
                        <br/>
                        <input type='password' value={userPw} ref={userPwInputRef} placeholder='비밀번호를 입력해주세요' 
                            onChange={(event)=>{setUserPw(event.target.value);}} //input 값 변화-> 해당 value를 pw에 저장

                            //pw 유효성
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {  //엔터키가 눌렸을 때
                                    event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                                    pwValid(trimmedPw);
                                    if (nameValid(trimmedName) && idValid(trimmedId) && pwValid(trimmedPw)) { //모든 유효성에 통과하면
                                        signup(event); //signup 실행
                                    }
                                }
                            }}
                        ></input>
                        <br/>
                        <button type='submit' className='btn_signup' onClick={(event)=>{
                            event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
                            if (nameValid(trimmedName) && idValid(trimmedId) && pwValid(trimmedPw)) { //모든 유효성에 통과하면
                                signup(event); //signup 실행
                            }
                        }}>회원가입</button>
                    </form>
                    <hr/>
                    <div className='btn_logins'>
                    <button className='kakao' onClick={()=>{
                            //카카오톡 로그인 페이지(외부)로 이동
                            window.location.href = 'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F2.1.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Faccount.wadiz.kr%26auth_tran_id%3DPp1Ze7wBjbZC0-rIxSvRyG~NyeHkI0KtylJ9KRHyS0r~QRi22-2cUFnNfVlU%26response_type%3Dcode%26state%3DShcQkG_CBCwQjpo4uW7SA7dzanxMTXEUlJktQie3_HA%253D%26redirect_uri%3Dhttps%253A%252F%252Faccount.wadiz.kr%252Foauth2%252Fcallback%252Fkakao%26extra.service_terms%3Dfunding_membership%252Cfunding_use%252Cfunding_privacy%252Cfunding_marketing%252Cuser_age_check%26client_id%3Df586822258d3fb5639d800f34a618ca7%26through_account%3Dtrue&talk_login=hidden#login';
                        }}>카카오톡으로 가입하기</button>
                        <button className='naver' onClick={()=>{
                            //네이버 로그인 페이지(외부)로 이동
                            window.location.href = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=SkFRlGucmYJPrnIQPtdO&scope=READ_MY_PROFILE&state=C0JCn6IQrjGctZdo0iDvDUEPTVaO98J5H_uanCn4oOY%3D&redirect_uri=https://account.wadiz.kr/oauth2/callback/naver';
                        }}>네이버로 가입하기</button>
                    </div>
                    <br/>
                    <div className='body_bottom'>
                        <p>기존 계정으로 로그인 하실건가요? <span style={{fontWeight : 'bold', cursor: 'pointer'}} 
                            onClick={() => navigate('/login')}> 로그인 </span></p>
                    </div>
                </div>
            </div>

            
        </div>
    );

}

export default SignupPage;