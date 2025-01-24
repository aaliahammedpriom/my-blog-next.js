"use client"
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default  function LoginBtn() {
    

    return (
        <div className="flex gap-4">
            <LoginLink postLoginRedirectURL="/profile" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sign in</LoginLink>
           
        </div>
    )
}
