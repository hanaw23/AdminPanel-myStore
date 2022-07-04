import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
