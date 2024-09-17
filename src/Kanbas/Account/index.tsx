import { Navigate, Route, Routes } from "react-router";
import SignIn from "./SignIn";
import Profile from "./Profile";
import SignUp from "./SignUp";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <table>
    <tr>
      <td valign="top">
        <AccountNavigation />
      </td>
      <td valign="top">
        <Routes>
          <Route path="/"
                 element={<Navigate to="/Kanbas/Account/Signin" />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </td>
    </tr>
  </table>

  );
}