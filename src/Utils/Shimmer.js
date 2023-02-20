import './Shimmer.css';

const Shimmer = ({ modeColor }) => {
  const shimmers = Array.from({ length: 25 }).map((val, index) => (
    <div
      className={`my-8 mx-4 h-[315px] w-64 lg:w-60 scale-90 overflow-hidden ${
        modeColor === 'Dark Mode' ? 'bg-slate-700' : 'bg-white'
      }`}
      key={index}
      style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
    >
      <div className="h-1/2 translate-y-[100%] rounded-b-lg">
        <p className="bg-slate-600 h-2 w-[95%] rounded-md m-auto titleGradient"></p>
        <div className="relative h-[100%] w-[95%] mx-auto mt-6">
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
          <p className="bg-slate-600 h-2 w-[50%] rounded-md gradient"></p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="flex justify-center flex-wrap items-center lg:max-w-[1300px] lg:m-auto xl:max-w-[1400px] xl:m-auto 2xl:max-w-[1536px] 2xl:m-auto">
        {shimmers}
      </div>
    </div>
  );
};

export default Shimmer;
