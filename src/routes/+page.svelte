<script>
  import Header from '$lib/header.svelte';
  import Visual from '$lib/visual.svelte';
  import Card from '$lib/card.svelte';
  import Footer from '$lib/footer.svelte';
  import { fetchHotels } from '$lib/api';
  import { onMount } from 'svelte';

  onMount(() => {
    const searchParameters = {
      engine: 'google_hotels',
      query: 'Amsterdam',
      currency: 'EUR',
      check_in_date: '2024-08-01',
      check_out_date: '2024-08-03',
    };
    fetchHotels(searchParameters).then((hotelsResponse) =>
      console.log(hotelsResponse)
    );
  });

  const hotels = [
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviews: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviews: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviews: 436,
      price: 176,
    },
    {
      imageUrl: 'https://fakeimg.pl/785x500',
      city: 'Amsterdam',
      name: 'Hotel Example 1',
      description:
        'this is a description of about two lines of text I dont know what IIm saying here help ',
      rating: 4.5,
      reviews: 436,
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
  <div
    class="flex flex-col items-center xl:items-start xl:px-[162px] xl:pt-[200px] xl:mb-[20px]"
  >
    <h3 class="mt-12 mb-5 xl:mb-[30px] xl:text-3xl">Ontdek ons hotel aanbod</h3>

    <div class="grid gap-6 xl:grid-cols-2 xl:gap-10">
      {#each hotels as hotel}
        <Card
          imageUrl={hotel.imageUrl}
          city={hotel.city}
          name={hotel.name}
          description={hotel.description}
          rating={hotel.rating}
          reviews={hotel.reviews}
          price={hotel.price}
        />
      {/each}
    </div>
  </div>
</body>
<footer>
  <Footer />
</footer>

<style>
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
</style>
