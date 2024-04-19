export const Nameplate = () => {
  return (
    <section className="flex-center-end gap-5">
      <b className="text-sm">Hi, Sterling</b>
      {/*  */}
      <div className="flex-center  gap-4 border-2 border400 rounded-full py-2 pl-4 pr-2">
        <i>#</i>
        <img
          src="/images/avatar-flat.png"
          width={32}
          alt="Account"
          title="Account"
          className="rounded-full"
        />
      </div>
    </section>
  );
};
