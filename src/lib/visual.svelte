<script>
  export let title;
  export let description;
  export let button1Text;
  export let button2Text;
</script>

<div class="relative overflow-hidden w-full h-[705px] xl:h-auto">
  <img
    src="src/public/iamsterdam.jpeg"
    alt="Iamsterdam Museumplein"
    class="w-full xl:scale-100 h-full xl:max-h-[960px] object-cover object-center scale-[1.4]"
  />

  <div
    class="absolute inset-0 xl:bottom-0 z-9 flex flex-col justify-end text-center xl:text-left p-4 pb-9 xl:p-0 xl:px-72 xl:py-[100px] bg-gradient-to-t from-black/60 to-transparent"
  >
    <h1
      class="text-[32px] leading-[40px] text-white mx-6 xl:mx-0 xl:text-4xl xl:mb-4"
    >
      {title}
    </h1>
    <p
      class="leading-tight xl:leading-compact m-6 xl:m-0 xl:mb-2.5 text-white font-normal xl:text-lg xl:w-3/5"
    >
      {description}
    </p>
    <div
      class="flex flex-col 2xl:flex-row gap-3 2xl:gap-5 w-full items-center 2xl:items-start"
    >
      <button
        class="bg-primary hover:bg-primary-hover font-bold px-10 py-5 2xl:px-[42px] 2xl:py-[18px] uppercase text-xs 2xl:text-base w-3/5 2xl:w-auto"
      >
        {button1Text}
      </button>
      <button
        class="bg-secondary hover:bg-secondary-hover font-bold px-10 py-5 2xl:px-[42px] 2xl:py-[18px] uppercase text-xs 2xl:text-base w-3/5 2xl:w-auto"
      >
        {button2Text}
      </button>
    </div>
  </div>
</div>
