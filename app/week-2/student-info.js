import Link from "next/link";
export default function StudentInfo(){
  return (
    <div>
      <h2>My name is Vraj Patel</h2>
      <p>
        <Link 
          href="https://github.com/Vraj-Patel2711/cprg306-assignments" 
          target="_blank" 
          rel="noopener noreferrer"
        >
         Vraj Patel GitHub Repository
        </Link>
      </p>
    </div>
  );
};