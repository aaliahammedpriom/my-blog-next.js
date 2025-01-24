"use client"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LogOutBtn() {
    return (
        <div className="flex gap-4">
            <LogoutLink className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Log Out</LogoutLink>

        </div>
    )
}
