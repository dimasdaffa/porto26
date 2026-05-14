import ProfileSidebar from "./ProfileSidebar";
import ReadmeCard from "./ReadmeCard";
import CareerLog from "./CareerLog";

export default function OverviewContent() {
  return (
    <div className="animate-in">
      <div className="gh-profile-layout">
        {/* Left: Profile Sidebar */}
        <ProfileSidebar />

        {/* Right: Main Content */}
        <div className="gh-profile-content">
          <ReadmeCard />
        </div>
      </div>

      {/* Career Log (full-width below profile layout) */}
      <CareerLog />
    </div>
  );
}
