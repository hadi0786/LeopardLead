export default function LeadershipTeam() {
    const team = [
      { name: "Gabriel Shaoolian", role: "CEO AND FOUNDER", img: "https://img.freepik.com/free-photo/portrait-smiling-businessman-using-digital-tablet-waiting-area_107420-95802.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Stephanie Sharlow", role: "VP, CLIENT PARTNER", img: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Bojan Milicevic", role: "CFO/COO", img: "https://img.freepik.com/free-photo/portrait-beautiful-dreaming-employee_496169-2536.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Jamie Maloney", role: "VP, CLIENT PARTNER", img: "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Gabriel Shaoolian", role: "CEO AND FOUNDER", img: "https://img.freepik.com/free-photo/portrait-smiling-businessman-using-digital-tablet-waiting-area_107420-95802.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Stephanie Sharlow", role: "VP, CLIENT PARTNER", img: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Bojan Milicevic", role: "CFO/COO", img: "https://img.freepik.com/free-photo/portrait-beautiful-dreaming-employee_496169-2536.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
      { name: "Jamie Maloney", role: "VP, CLIENT PARTNER", img: "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?uid=R42368991&ga=GA1.1.1323476453.1725247658&semt=ais_hybrid" },
    ];
  
    return (
      <div className="bg-white py-16 text-black text-center">
        <h2 className="text-4xl font-bold">Meet The Leadership Team</h2>
        <p className="text-lg mt-2">Top industry with proven experience who are hands-on in managing projects</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-50 p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  