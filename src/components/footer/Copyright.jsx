export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mt-6 lg:mt-12">
      <p className="text-center">Copyright &copy; {currentYear} | News Feed</p>
    </div>
  );
}
