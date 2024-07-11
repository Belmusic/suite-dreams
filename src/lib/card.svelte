<script>
  export let imageUrl;
  export let city;
  export let name;
  export let description;
  export let rating;
  export let reviewers;
  export let price;
</script>

<div class="relative mb-[100px]">
  <div class="aspect-w-785 aspect-h-500 max-w-[785px]">
    <img src={imageUrl} alt={name} class="w-full" />
  </div>
  <div
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-6 py-5 text-center w-3/4 bg-white"
  >
    <h5 class="text-primary">{city}</h5>
    <h3 class="font-bold text-xl mb-2">{name}</h3>
    <p class="text-sm leading-tight text-dark-gray">
      {description}
    </p>
    <div class="inline-flex items-baseline gap-[2px]">
      <p class="text-base text-yellow-500 text-center">
        {rating}
      </p>
      <img src="src/public/star.svg" alt="star" class="w-4 h-4" />
      <p class="text-sm leading-tight text-dark-gray">({reviewers})</p>
    </div>
    <p class="text-base text-dark-gray">€{price},-</p>
  </div>
</div>
