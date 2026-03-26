import DashboardPage from "./dashboard/page";
import LoginPage from "./login/page";
import SignupPage from "./signup/page"

export default function Home() {
  return (
    <div>
      < SignupPage />
      < LoginPage />
      < DashboardPage />
    </div>
  );
}
