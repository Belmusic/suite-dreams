<script>
  import Header from '$lib/header.svelte';
  import Visual from '$lib/visual.svelte';
  import Card from '$lib/card.svelte';
  import Footer from '$lib/footer.svelte';

  const hotels = [
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviewers: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviewers: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviewers: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviewers: 436,
      price: 176,
    },
  ];
</script>

<header>
  <Header />
</header>

<body>
  <Visual
    title="Lorem ipsum dolor sit amet"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, at massa eleifend purus sagittis sed justo, purus diam."
    button1Text="Lorem ipsum"
    button2Text="Lorem ipsum"
  />
  <div class="px-[162px] pt-[200px] mb-[20px]">
    <h2 class="mb-[30px]">Ontdek ons hotel aanbod</h2>

    <div class="flex flex-wrap">
      {#each hotels as hotel}
        <div class="w-1/2 p-[15px]">
          <Card
            imageUrl={hotel.imageUrl}
            city={hotel.city}
            name={hotel.name}
            description={hotel.description}
            rating={hotel.rating}
            reviewers={hotel.reviewers}
            price={hotel.price}
          />
        </div>
      {/each}
    </div>
  </div>
</body>
<footer>
  <div class="z-10"><Footer /></div>
</footer>

<style>
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
</style>
