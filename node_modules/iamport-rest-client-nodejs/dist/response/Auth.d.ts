import ResponseBase from './Base';
declare class Auth extends ResponseBase {
    access_token: string;
    expired_at: Date | number;
    now: Date | number;
    setAttributes(response: Auth): void;
}
export default Auth;
