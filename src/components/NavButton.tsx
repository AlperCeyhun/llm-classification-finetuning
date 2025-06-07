"use client";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface NavButtonProps {
  label: string;
  route: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, route }) => {
  const router = useRouter();
  const handleClick = () => {
    toast.success("Button clicked!");
    router.push(route);
  };
  return (
    <button
      className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default NavButton;