import React, { useEffect, useState } from "react";
import fixmateLogo from "@/assets/fixmate-logo.svg";
import facebookIcon from "@/assets/Facebook.svg";
import instagramIcon from "@/assets/Instagram.svg";
import xIcon from "@/assets/X.svg";
import linkedinIcon from "@/assets/LinkedIn.svg";
import youtubeIcon from "@/assets/Youtube.svg";

const Footer = () => {
  const [visits, setVisits] = useState({ today: 0, week: 0, total: 0 });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const monday = new Date(now);
    monday.setDate(now.getDate() - daysToMonday);
    const weekStart = monday.toISOString().split("T")[0];

    const lastVisit = localStorage.getItem("lastVisitDate");
    const lastWeekStart = localStorage.getItem("weekStartDate");

    let total = parseInt(localStorage.getItem("totalVisits")) || 0;
    total++;
    localStorage.setItem("totalVisits", total);

    let todayCount = 0;
    if (lastVisit === today) {
      todayCount = parseInt(localStorage.getItem("todayVisits")) || 0;
    }
    todayCount++;
    localStorage.setItem("todayVisits", todayCount);
    localStorage.setItem("lastVisitDate", today);

    let weekCount = 0;
    if (lastWeekStart === weekStart) {
      weekCount = parseInt(localStorage.getItem("weeklyVisits")) || 0;
    } else {
      localStorage.setItem("weekStartDate", weekStart);
    }
    weekCount++;
    localStorage.setItem("weeklyVisits", weekCount);

    setVisits({ today: todayCount, week: weekCount, total });
  }, []);

  return (
    <footer className="bg-[#1c3d5a] p-6 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src={fixmateLogo} alt="FixMate Logo" className="w-[120px] h-[120px]" />
          <div className="bg-slate-800 p-4 rounded-lg text-sm">
            <div className="text-lg font-semibold">Visitor Count:</div>
            <div>
              Today: {visits.today}<br />
              This Week: {visits.week}<br />
              Total: {visits.total}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex md:flex-row items-center md:gap-20 gap-4 flex-col">
          <nav className="flex flex-wrap gap-4 text-sm font-semibold">
            <a className="hover:text-gray-400" href="#about">About Us</a>
            <a className="hover:text-gray-400" href="#contact">Contact Us</a>
            <a className="hover:text-gray-400" href="#services">Our Services</a>
            <a className="hover:text-gray-400" href="#team">Our Team</a>
          </nav>

          <div className="flex gap-5">
            <a className="transform hover:scale-110" href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a className="transform hover:scale-110" href="#"><img src={instagramIcon} alt="Instagram" /></a>
            <a className="transform hover:scale-110" href="#"><img src={xIcon} alt="Twitter/X" /></a>
            <a className="transform hover:scale-110" href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a className="transform hover:scale-110" href="#"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[2px] bg-black w-full"></div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
        <span>&copy; {new Date().getFullYear()} FixMate. All rights reserved.</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default Footer;