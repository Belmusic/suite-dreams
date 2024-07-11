<script>
  export let imageUrl;
  export let city;
  export let name;
  export let description;
  export let rating;
  export let reviewers;
  export let price;
</script>

<div class="relative xl:mb-[110px] flex flex-wrap justify-center">
  <div class="aspect-w-785 aspect-h-500 max-w-[360px] xl:max-w-[785px]">
    <img src={imageUrl} alt={name} class="w-full" />
  </div>
  <div
    class="xl:absolute xl:bottom-0 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:translate-y-1/2 xl:px-6 py-5 text-center xl:w-3/4 bg-white"
  >
    <h5 class="text-primary">{city}</h5>
    <h4 class="font-bold text-[20px] xl:text-xl mb-2">{name}</h4>
    <p class="text-[14px] xl:text-sm leading-tight text-dark-gray">
      {description}
    </p>
    <div class="inline-flex mt-2.5 items-center gap-[2px]">
      <p class="text-base text-yellow text-center text-[15px]">
        {rating}
      </p>
      <img src="src/public/star.svg" alt="star" class="w-4 h-4" />
      <p class="text-sm leading-tight text-dark-gray">({reviewers})</p>
    </div>
    <p class="text-sm mt-2.5">€{price},-</p>
  </div>
</div>
