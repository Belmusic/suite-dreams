<script>
  export let title;
  export let description;
  export let button1Text;
  export let button2Text;
</script>

<div class="relative">
  <img
    src="src/public/overlay.png"
    alt="Iamsterdam Museumplein"
    class="w-[100%] max-h-[960px]"
  />

  <div class="absolute bottom-0 px-[294px] py-[100px] z-10">
    <h1 class="text-4xl mb-[15px] text-white">{title}</h1>
    <p class="text-lg mb-[15px] text-white font-normal w-3/5">{description}</p>
    <div class="flex gap-5">
      <button
        class="bg-primary hover:primary-hover font-bold px-[42px] py-[18px] uppercase"
      >
        {button1Text}
      </button>
      <button class="bg-secondary font-bold px-[42px] py-[18px] uppercase">
        {button2Text}
      </button>
    </div>
  </div>
</div>
