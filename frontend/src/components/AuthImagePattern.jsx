const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden h-screen lg:flex flex-col items-center justify-center  p-12">
        <div className="w-3/4 h-3/4">
          <img src="/front.png" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
    </div>
  );
};

export default AuthImagePattern;
