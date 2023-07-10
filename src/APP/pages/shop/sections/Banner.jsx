function Banner() {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat h-80">
      <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="mx-auto max-w-xl absolute top-1/4 sm:left-[30%]">
        <h1 className="text-2xl text-center text-white font-extrabold">Elevate your style with our exclusive collection of merchandise</h1>
        <div className="mx-auto w-1/4 my-4">
        <button className="bg-white w-full rounded p-2">Shop now</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
