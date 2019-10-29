import React, { Component } from 'react';
import "./SignupForm.scss";
import SignupLoginBtn from "components/SignupLoginBtn";
import SignupInput from '../SignupInput/SignupInput';

class SignupForm extends Component {
  render() {
    return(
      <div className="bounds">
        <form 
        action="https://secure.meetup.com/ko-KR/register/"
        method="post"
        id="register-form">
          <h1 className="sign-up-text margin-bottom" >회원가입</h1>
          <SignupLoginBtn  
            className="button-facebook"
            message="페이스북 계정으로 로그인"
            imgPath="http://www.vectorico.com/download/social_media/Facebook-Logo.jpg"
            moveTo="https://www.facebook.com/login.php?skip_api_login=1&api_key=2403839689&kid_directed_site=0&app_id=2403839689&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fscope%3Demail%252Cuser_friends%26client_id%3D2403839689%26redirect_uri%3Dhttps%253A%252F%252Fsecure.meetup.com%252Fties%252Ffacebook%252F%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Fko-KR%25252Ffind%25252F%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D95765fac-e391-4824-b0cd-b322426f0734&cancel_url=https%3A%2F%2Fsecure.meetup.com%2Fties%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Fko-KR%25252Ffind%25252F%23_%3D_&display=page&locale=ko_KR"/>
          <SignupLoginBtn
            className="button-google"
            message="구글 계정으로 로그인"
            imgPath="https://secure.meetupstatic.com/s/img/09976452261947836380738/logo_google.svg"
            moveTo="https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=855636443875-pmqkjkrj33pvp0t1ghecgp4f3l746856.apps.googleusercontent.com&redirect_uri=https://secure.meetup.com/ties/google/&response_type=code&scope=profile%20email&state=returnUri%3D" />
          <div className="register-fieldset padding-top chunk">
            <div className="chunk">
            <SignupInput
              name="이름" />
            </div>
            <div className="chunk">
            <SignupInput
              name="이메일 주소" />
            </div>
            <div className="chunk">
            <SignupInput
              name="비밀번호" />
            </div>
          </div>
          <div id="loc-display" class="chunk">
            <div className="row row-nogutters">
              <div className="row-item row-item-shrink">
                <span className="location-icon-span">
                  <img className="location-icon"
                        alt="location-icon"
                        src="https://wecode-bootcamp.slack.com/files/UNP0S59JM/FPX4FQQN4/location.png" />
                </span>                
                <div class="row-item">
                  <span class="text-small text-secondary text-heavy">
                    Sejong, KR (변경)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="chunk">
            <p class="text-small text-secondary">이름이 공개되어 있습니다. 귀하의 이메일 주소를 통해 업데이트 사항과 근처에서 Meetup을 찾을 수 있는 위치를 알려드리겠습니다.</p>
          </div>
          <div className="chunk">
            <p>
              <button type="submit" class="button button-fullwidth button-primary">
                계속
              </button>
            </p>
          </div>
          <div className="chunk">
            <p class="text-small text-secondary">'계속'을 선택하면 Meetup의 이용약관에 동의하는 것으로 간주됩니다. 회원님의 정보는 Meetup의 개인정보처리방침 및 쿠키정책에 따라 처리됩니다.</p>
          </div>
          <div className="chunk">
            <p class="text-small text-secondary text-center">이미 회원이신가요? 로그인.</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;