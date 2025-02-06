const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        min-h-fit
        h-full
        flex
        justify-center
        pb-12
        pt-8"
    >
      <div
        className="
            max-w-[650px]
            w-full
            flex
            flex-col
            gap-6
            shadow-xl
            border-slate-200
            border-[2px]
            shadow-slate-200
            items-center
            rounded-md
            p-4
            md:p-8"
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
